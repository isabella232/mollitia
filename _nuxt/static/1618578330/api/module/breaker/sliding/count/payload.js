__NUXT_JSONP__("/api/module/breaker/sliding/count", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av){return {data:[{article:{title:"Mollitia - API - Module - Sliding Count Breaker",toc:[{id:ab,depth:L,text:ac},{id:ad,depth:L,text:ae},{id:af,depth:L,text:ag},{id:ah,depth:L,text:ai}],body:{type:Q,children:[{type:b,tag:"h1",props:{id:"sliding-count-breaker"},children:[{type:b,tag:F,props:{ariaHidden:G,href:"#sliding-count-breaker",tabIndex:H},children:[{type:b,tag:c,props:{className:[I,J]},children:[]}]},{type:a,value:"Sliding Count Breaker"}]},{type:a,value:g},{type:b,tag:"pg-count",props:{},children:[{type:a,value:g}]},{type:a,value:g},{type:b,tag:M,props:{id:ab},children:[{type:b,tag:F,props:{ariaHidden:G,href:"#usage",tabIndex:H},children:[{type:b,tag:c,props:{className:[I,J]},children:[]}]},{type:a,value:ac}]},{type:a,value:g},{type:b,tag:K,props:{},children:[{type:a,value:"The Circuit Breaker has 3 possible states:"}]},{type:a,value:g},{type:b,tag:"ul",props:{},children:[{type:a,value:g},{type:b,tag:R,props:{},children:[{type:a,value:aj}]},{type:a,value:g},{type:b,tag:R,props:{},children:[{type:a,value:"OPEN "}]},{type:a,value:g},{type:b,tag:R,props:{},children:[{type:a,value:"HALF_OPEN"}]},{type:a,value:g}]},{type:a,value:g},{type:b,tag:K,props:{},children:[{type:a,value:"When the circuit is opened, all the iterations are failing fast"}]},{type:a,value:g},{type:b,tag:K,props:{},children:[{type:a,value:"When the circuit is half opened, a certain number of iterations are authorrized. When this number is reached, the failure and slow call rate thresholds are checked to see if the circuit should be opened or closed."}]},{type:a,value:g},{type:b,tag:K,props:{},children:[{type:a,value:"When the circuit is closed, a sliding window is used to store the outcome of calls.\nThe count-based sliding window calculates the outcome of the last N calls, and decides if the circuit should be opened (if the failure or slow call rate thresholds are exceeded)\nFor example, if the count window size is 10, the circular array has always 10 measurements."}]},{type:a,value:g},{type:b,tag:"div",props:{className:["nuxt-content-highlight"]},children:[{type:b,tag:"pre",props:{className:["language-javascript","line-numbers"]},children:[{type:b,tag:k,props:{},children:[{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"\u002F\u002F Imports needed components"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:S}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:N}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,ak]},children:[{type:a,value:al}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,ak]},children:[{type:a,value:am}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:O}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:T}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:"require"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,U]},children:[{type:a,value:"'mollitia'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"\u002F\u002F Creates Sliding Count Breaker Module"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:S}]},{type:a,value:an},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:T}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:ao}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,ap]},children:[{type:a,value:am}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:N}]},{type:a,value:aq},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:u}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,U]},children:[{type:a,value:"'my-sliding-count-breaker'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]},{type:a,value:"\n  slidingWindowSize"},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:u}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,z]},children:[{type:a,value:"6"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"\u002F\u002F Failure Rate Calculation is done on the last 6 iterations"}]},{type:a,value:"\n  minimumNumberOfCalls"},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:u}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,z]},children:[{type:a,value:"3"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"\u002F\u002F 3 iterations are needed to start calculating the failure rate, and see if circuit should be opened or not"}]},{type:a,value:"\n  failureRateThreshold"},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:u}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,z]},children:[{type:a,value:ar}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"\u002F\u002F If half of the iterations or more are failing, the circuit is switched to Opened state."}]},{type:a,value:"\n  slowCallDurationThreshold"},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:u}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,z]},children:[{type:a,value:"1000"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"\u002F\u002F An iteration is considered as being slow if the iteration lasts more than 1s"}]},{type:a,value:"\n  slowCallRateThreshold"},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:u}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,z]},children:[{type:a,value:"80"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"\u002F\u002F If at least 80% of the iterations are considered as being slow, the circuit is switched to Opened state."}]},{type:a,value:"\n  permittedNumberOfCallsInHalfOpenState"},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:u}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,z]},children:[{type:a,value:as}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"\u002F\u002F When the circuit is in Half Opened state, the circuit accepts 2 iterations in this state."}]},{type:a,value:P},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"\u002F\u002F Once these 2 iterations are received, failure rate is calculated on these iterations."}]},{type:a,value:P},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"\u002F\u002F If failure rate is lower than failureRateThreshold, the circuit is switched to Closed state."}]},{type:a,value:P},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"\u002F\u002F If the failure rate is higher or equal to failureRateThreshold, the circuit is switched to Opened state."}]},{type:a,value:"\n  openStateDelay"},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:u}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,z]},children:[{type:a,value:"10000"}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"\u002F\u002F The circuit stays in Opened state for 10s"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:O}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"\u002F\u002F Creates a circuit"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:S}]},{type:a,value:" circuit "},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:T}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:ao}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,ap]},children:[{type:a,value:al}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:N}]},{type:a,value:aq},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:u}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,U]},children:[{type:a,value:"'my-circuit'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]},{type:a,value:"\n  options"},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:u}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:N}]},{type:a,value:"\n    modules"},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:u}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"["}]},{type:a,value:an},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"]"}]},{type:a,value:P},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:O}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:O}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:a,value:"\n\n"},{type:b,tag:c,props:{className:[d,t,A]},children:[{type:a,value:B}]},{type:a,value:C},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,r,o,s]},children:[{type:a,value:D}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:"myFunction"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,r,o,s]},children:[{type:a,value:y}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,t,A]},children:[{type:a,value:B}]},{type:a,value:C},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,r,o,s]},children:[{type:a,value:D}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:"myFunction2"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,r,o,s]},children:[{type:a,value:y}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"\u002F\u002F When this 3rd iteration is received, failureRate and slowCallRate is calculated"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"\u002F\u002F If the 3 iterations lasts less than 1s and are all success, then the circuit is still closed"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"\u002F\u002F The circuit is opened if:"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"\u002F\u002F   - at least 2 iterations failed (failure rate is 66% (2 iterations failing) or 100% (3 iterations failing), which is \u003E 50 (failureRateThreshold))"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"\u002F\u002F   - or all the iterations are slow (as slowCallRateThreshold is 80%)"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,t,A]},children:[{type:a,value:B}]},{type:a,value:C},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,r,o,s]},children:[{type:a,value:D}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:"myFunction3"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,r,o,s]},children:[{type:a,value:y}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"\u002F\u002F If"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"\u002F\u002F   - circuit is still closed, then the failure rate and slow call rate threshold will be calculated when a new iteration is received"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"\u002F\u002F   - circuit is opened, then the iterations are failing fast"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"\u002F\u002F Here, 4th iteration received. Calculation will be done on the 4th iterations"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,t,A]},children:[{type:a,value:B}]},{type:a,value:C},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,r,o,s]},children:[{type:a,value:D}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:"myFunction4"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,r,o,s]},children:[{type:a,value:y}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"\u002F\u002F Here, 5th iteration received. Calculation will be done on the 4 iterations"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,t,A]},children:[{type:a,value:B}]},{type:a,value:C},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,r,o,s]},children:[{type:a,value:D}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:"myFunction5"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,r,o,s]},children:[{type:a,value:y}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"\u002F\u002F Here, 6th iteration received. Calculation will be done on the 6 iterations"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,t,A]},children:[{type:a,value:B}]},{type:a,value:C},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,r,o,s]},children:[{type:a,value:D}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:"myFunction6"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,r,o,s]},children:[{type:a,value:y}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"\u002F\u002F Here, number of iterations is 7. So, the 1st iteration is no longer taken into account and the calculation is done on iterations 2 to 7 "}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,t,A]},children:[{type:a,value:B}]},{type:a,value:C},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,r,o,s]},children:[{type:a,value:D}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:"myFunction7"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,r,o,s]},children:[{type:a,value:y}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:a,value:g}]}]}]},{type:a,value:g},{type:b,tag:K,props:{className:["flex-center-row"],align:"center"},children:[{type:b,tag:"pg-img",props:{src:"\u002Fimg\u002Fcircuit-breaker-diagram.png",alt:"Circuit Breaker - Diagram"},children:[]}]},{type:a,value:g},{type:b,tag:M,props:{id:ad},children:[{type:b,tag:F,props:{ariaHidden:G,href:"#options",tabIndex:H},children:[{type:b,tag:c,props:{className:[I,J]},children:[]}]},{type:a,value:ae}]},{type:a,value:"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"},{type:b,tag:V,props:{},children:[{type:b,tag:W,props:{},children:[{type:b,tag:n,props:{},children:[{type:b,tag:x,props:{align:f},children:[{type:a,value:X}]},{type:b,tag:x,props:{align:f},children:[{type:a,value:Y}]},{type:b,tag:x,props:{align:f},children:[{type:a,value:"Default"}]}]}]},{type:b,tag:Z,props:{},children:[{type:b,tag:n,props:{},children:[{type:b,tag:h,props:{align:f},children:[{type:a,value:at}]},{type:b,tag:h,props:{align:f},children:[{type:a,value:"Specifies the circuit state"}]},{type:b,tag:h,props:{align:f},children:[{type:b,tag:k,props:{},children:[{type:a,value:aj}]}]}]},{type:b,tag:n,props:{},children:[{type:b,tag:h,props:{align:f},children:[{type:a,value:"failureRateThreshold"}]},{type:b,tag:h,props:{align:f},children:[{type:a,value:"Specifies the failure rate threshold in percentage"}]},{type:b,tag:h,props:{align:f},children:[{type:b,tag:k,props:{},children:[{type:a,value:ar}]}]}]},{type:b,tag:n,props:{},children:[{type:b,tag:h,props:{align:f},children:[{type:a,value:"slowCallRateThreshold"}]},{type:b,tag:h,props:{align:f},children:[{type:a,value:"Specifies the slow call rate threshold. A call is considered as slow when the call duration is greater than slowCallDurationThreshold"}]},{type:b,tag:h,props:{align:f},children:[{type:b,tag:k,props:{},children:[{type:a,value:"100"}]}]}]},{type:b,tag:n,props:{},children:[{type:b,tag:h,props:{align:f},children:[{type:a,value:"slowCallDurationThreshold"}]},{type:b,tag:h,props:{align:f},children:[{type:a,value:"Specifies the duration (in ms) threshold above which calls are considered as slow"}]},{type:b,tag:h,props:{align:f},children:[{type:b,tag:k,props:{},children:[{type:a,value:"60000 (ms)"}]}]}]},{type:b,tag:n,props:{},children:[{type:b,tag:h,props:{align:f},children:[{type:a,value:"permittedNumberOfCallsInHalfOpenState"}]},{type:b,tag:h,props:{align:f},children:[{type:a,value:"Specifies the number of permitted calls when the circuit is half open"}]},{type:b,tag:h,props:{align:f},children:[{type:b,tag:k,props:{},children:[{type:a,value:as}]}]}]},{type:b,tag:n,props:{},children:[{type:b,tag:h,props:{align:f},children:[{type:a,value:"halfOpenStateMaxDelay"}]},{type:b,tag:h,props:{align:f},children:[{type:a,value:"Specifies the maximum wait (in ms) in Half Open State, before switching back to open. 0 deactivates this"}]},{type:b,tag:h,props:{align:f},children:[{type:b,tag:k,props:{},children:[{type:a,value:"0"}]}]}]},{type:b,tag:n,props:{},children:[{type:b,tag:h,props:{align:f},children:[{type:a,value:"slidingWindowSize"}]},{type:b,tag:h,props:{align:f},children:[{type:a,value:"Specifies the maximum number of calls used to calculate failure and slow call rate percentages"}]},{type:b,tag:h,props:{align:f},children:[{type:b,tag:k,props:{},children:[{type:a,value:au}]}]}]},{type:b,tag:n,props:{},children:[{type:b,tag:h,props:{align:f},children:[{type:a,value:"minimumNumberOfCalls"}]},{type:b,tag:h,props:{align:f},children:[{type:a,value:"Specifies the minimum number of calls used to calculate failure and slow call rate percentages"}]},{type:b,tag:h,props:{align:f},children:[{type:b,tag:k,props:{},children:[{type:a,value:au}]}]}]},{type:b,tag:n,props:{},children:[{type:b,tag:h,props:{align:f},children:[{type:a,value:"openStateDelay"}]},{type:b,tag:h,props:{align:f},children:[{type:a,value:"Specifies the time (in ms) the circuit stay opened before switching to half-open"}]},{type:b,tag:h,props:{align:f},children:[{type:b,tag:k,props:{},children:[{type:a,value:"60000"}]}]}]},{type:b,tag:n,props:{},children:[{type:b,tag:h,props:{align:f},children:[{type:a,value:"onError"}]},{type:b,tag:h,props:{align:f},children:[{type:a,value:"Allows filtering of the error to report as a failure or not."}]},{type:b,tag:h,props:{align:f},children:[{type:b,tag:k,props:{},children:[{type:a,value:"None"}]}]}]}]}]},{type:a,value:g},{type:b,tag:M,props:{id:af},children:[{type:b,tag:F,props:{ariaHidden:G,href:"#events",tabIndex:H},children:[{type:b,tag:c,props:{className:[I,J]},children:[]}]},{type:a,value:ag}]},{type:a,value:"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"},{type:b,tag:V,props:{},children:[{type:b,tag:W,props:{},children:[{type:b,tag:n,props:{},children:[{type:b,tag:x,props:{align:f},children:[{type:a,value:X}]},{type:b,tag:x,props:{align:f},children:[{type:a,value:Y}]},{type:b,tag:x,props:{align:f},children:[{type:a,value:"Params"}]}]}]},{type:b,tag:Z,props:{},children:[{type:b,tag:n,props:{},children:[{type:b,tag:h,props:{align:f},children:[{type:b,tag:k,props:{},children:[{type:a,value:y}]}]},{type:b,tag:h,props:{align:f},children:[{type:a,value:"Called when the module is executed."}]},{type:b,tag:h,props:{align:f},children:[{type:b,tag:k,props:{},children:[{type:a,value:"Mollitia.Circuit"}]},{type:a,value:i},{type:b,tag:_,props:{},children:[{type:a,value:"circuit"}]}]}]},{type:b,tag:n,props:{},children:[{type:b,tag:h,props:{align:f},children:[{type:b,tag:k,props:{},children:[{type:a,value:"state-changed"}]}]},{type:b,tag:h,props:{align:f},children:[{type:a,value:"Called when the breaker state changes."}]},{type:b,tag:h,props:{align:f},children:[{type:b,tag:k,props:{},children:[{type:a,value:"Mollitia.BreakerState"}]},{type:a,value:i},{type:b,tag:_,props:{},children:[{type:a,value:at}]}]}]}]}]},{type:a,value:g},{type:b,tag:M,props:{id:ah},children:[{type:b,tag:F,props:{ariaHidden:G,href:"#methods",tabIndex:H},children:[{type:b,tag:c,props:{className:[I,J]},children:[]}]},{type:a,value:ai}]},{type:a,value:"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"},{type:b,tag:V,props:{},children:[{type:b,tag:W,props:{},children:[{type:b,tag:n,props:{},children:[{type:b,tag:x,props:{align:f},children:[{type:a,value:X}]},{type:b,tag:x,props:{align:f},children:[{type:a,value:Y}]},{type:b,tag:x,props:{align:f},children:[{type:a,value:"Returns"}]}]}]},{type:b,tag:Z,props:{},children:[{type:b,tag:n,props:{},children:[{type:b,tag:h,props:{align:f},children:[{type:b,tag:k,props:{},children:[{type:a,value:"getExecParams"}]}]},{type:b,tag:h,props:{align:f},children:[{type:a,value:"Returns the circuit function parameters."}]},{type:b,tag:h,props:{align:f},children:[{type:b,tag:k,props:{},children:[{type:a,value:"any[]"}]},{type:a,value:i},{type:b,tag:_,props:{},children:[{type:a,value:"params"}]}]}]}]}]}]},dir:"\u002Fapi\u002Fmodule\u002Fbreaker\u002Fsliding",path:av,extension:$,slug:"count",createdAt:E,updatedAt:E,navbar:{links:[{title:"Home",path:aa}],github:{link:"https:\u002F\u002Fgithub.com\u002Fgenesys\u002Fmollitia"},toc:[],body:{type:Q,children:[]},dir:aa,path:"\u002F_navbar",extension:$,slug:"_navbar",createdAt:E,updatedAt:E},sidebar:{links:[{group:"A Quick Overview",links:[{title:"Introduction",path:"\u002Foverview\u002Fintroduction"},{title:"Getting Started",path:"\u002Foverview\u002Fgetting-started"}]},{title:"The Circuit",path:"\u002Fapi\u002Fcircuit"},{group:"Core Modules",links:[{title:"Fallback",path:"\u002Fapi\u002Fmodule\u002Ffallback"},{title:"Cache",path:"\u002Fapi\u002Fmodule\u002Fcache"},{title:"Retry",path:"\u002Fapi\u002Fmodule\u002Fretry"},{title:"Timeout",path:"\u002Fapi\u002Fmodule\u002Ftimeout"},{title:"Ratelimit",path:"\u002Fapi\u002Fmodule\u002Fratelimit"},{title:"Bulkhead",path:"\u002Fapi\u002Fmodule\u002Fbulkhead"},{title:"Count Breaker",path:av},{title:"Time Breaker",path:"\u002Fapi\u002Fmodule\u002Fbreaker\u002Fsliding\u002Ftime"}]},{group:"Core Addons",links:[{title:"Prometheus",path:"https:\u002F\u002Fgenesys.github.io\u002Fmollitia-prometheus\u002F"}]},{group:"Customization",links:[{title:"Create a module",path:"\u002Fapi\u002Fcreate-module"},{title:"Create a addon",path:"\u002Fapi\u002Fcreate-addon"}]}],toc:[],body:{type:Q,children:[]},dir:aa,path:"\u002F_sidebar",extension:$,slug:"_sidebar",createdAt:E,updatedAt:E}}}],fetch:[],mutations:void 0}}("text","element","span","token","punctuation","left","\n","td"," ","comment","code","(",")","tr","function","operator",".","method","property-access","keyword",":",";",",","th","execute","number","control-flow","await"," circuit","fn","2021-04-16T13:03:20.332Z","a","true",-1,"icon","icon-link","p",2,"h2","{","}","\n  ","root","li","const","=","string","table","thead","Name","Description","tbody","strong",".md","\u002F","usage","Usage","options","Options","events","Events","methods","Methods","CLOSED","maybe-class-name","Circuit","SlidingCountBreaker"," slidingCountBreaker ","new","class-name","\n  name","50","2","state","10","\u002Fapi\u002Fmodule\u002Fbreaker\u002Fsliding\u002Fcount")));