const fs = require('fs');
const path = require('path');
const yaml = require('yaml');
const Mollitia = require('../../dist/mollitia.umd');

const modules = [];
const circuitConfig = yaml.parse(fs.readFileSync(path.join(__dirname, 'config.yaml'), 'utf8'));
if (circuitConfig.modules.SlidingTimeBreaker) {
  circuitConfig.modules.SlidingTimeBreaker.logger = console;
  modules.push(new Mollitia.SlidingTimeBreaker(circuitConfig.modules.SlidingTimeBreaker));
}
if (circuitConfig.modules.SlidingCountBreaker) {
  circuitConfig.modules.SlidingCountBreaker.logger = console;
  modules.push(new Mollitia.SlidingCountBreaker(circuitConfig.modules.SlidingCountBreaker));
}
if (circuitConfig.modules.Retry) {
  circuitConfig.modules.Retry.logger = console;
  modules.push(new Mollitia.Retry(circuitConfig.modules.Retry));
}
if (circuitConfig.modules.RateLimit) {
  circuitConfig.modules.RateLimit.logger = console;
  modules.push(new Mollitia.RateLimit(circuitConfig.modules.RateLimit));
}
if (circuitConfig.modules.Timeout) {
  circuitConfig.modules.Timeout.logger = console;
  modules.push(new Mollitia.Timeout(circuitConfig.modules.Timeout));
}

const circuit = new Mollitia.Circuit({
  options: {
    modules
  }
});

const successAsync = (delay = 1) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, delay);
  });
}

const calculationDuration = (prefix, durations) => {
  //console.log(durations);
  const l = (durations.reduce((acc,curr) => acc += curr, 0) / durations.length).toFixed(2);
  console.log(`${prefix} - Duration: ${l}`);
  return l;
}

async function main() {
  let durations = [];
  let resultsNoCircuitBreaker = [];
  let resultsCircuitBreaker = [];
  const nbCycles = circuitConfig.config?.nbCycles || 5;
  const nbOperations = circuitConfig.config?.nbCalls || 100;
  const callDuration = circuitConfig.config?.duration || 10;
  for (let i=0; i<nbCycles; i++) {
    for (let k=0;k<nbOperations;k++) {
      const time1 = new Date().getTime();
      try {
        await successAsync(callDuration);
      } catch (err) {
        console.log("Error");
      }
      const timeForOper = new Date().getTime() - time1;
      durations.push(timeForOper);
    }
    resultsNoCircuitBreaker.push(calculationDuration('No Circuit Breaker',durations));
  
    durations = [];
    for (let k=0;k<nbOperations;k++) {
      const time1 = new Date().getTime();
      try {
        await circuit.fn(successAsync).execute(callDuration);
      } catch (err) {
        console.log("Error");
      }
      const timeForOper = new Date().getTime() - time1;
      durations.push(timeForOper);
    }
    resultsCircuitBreaker.push(calculationDuration('With Circuit Breaker',durations));
  }
  circuit.end();
  console.log('With Circuit Breaker | Without Circuit Breaker | Circuit Breaker latency');
  for (var i=0; i<resultsCircuitBreaker.length; i++) {
    const l = resultsNoCircuitBreaker[i].length;
    const l1 = resultsCircuitBreaker[i].length;
    console.log(` ${resultsNoCircuitBreaker[i]}${' '.repeat(20 - l)}| ${resultsCircuitBreaker[i]}${' '.repeat(24 - l1)}| ${(resultsCircuitBreaker[i] - resultsNoCircuitBreaker[i]).toFixed(2)}`);
  }
}

main();