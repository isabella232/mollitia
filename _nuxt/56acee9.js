(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{230:function(e,t,o){var content=o(238);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(64).default)("523560e8",content,!0,{sourceMap:!1})},231:function(e,t,o){var content=o(240);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(64).default)("39191e00",content,!0,{sourceMap:!1})},232:function(e,t,o){"use strict";o.r(t);o(234),o(9),o(36);var r={name:"Circuit",components:{Toggle:o(233).default},props:{name:{type:String,default:"Circuit"},initTime:{type:Number,default:2e3},modules:{type:Array,default:function(){return[]}},concurrent:{type:Boolean,default:!1},canFail:{type:Boolean,default:!0},successParams:{type:Object,default:function(){return{}}},failureParams:{type:Object,default:function(){return{}}}},data:function(){return{shouldSucceed:!0,active:!1,circuit:null,time:this.initTime,logs:""}},computed:{disabled:function(){return!this.concurrent&&this.active}},methods:{request:function(e){var t=this;return new Promise((function(o,r){setTimeout((function(){t.shouldSucceed?o({message:"Normal Success"}):r(new Error("Normal Failure"))}),e)}))},log:function(e){this.logs+="<span>".concat(e,"</span><br/>"),this.triggerUpdate()},triggerRequest:function(){var e=this;this.$emit("start"),this.active=!0,this.circuit.fn(this.request).execute(this.time,this.successParams).then((function(t){e.logs+="<span>".concat(t.message,"</span><br/>"),e.$emit("end",{success:!0,res:t}),e.triggerUpdate()})).catch((function(t){e.logs+="<span>".concat(t.message,"</span><br/>"),e.$emit("end",{success:!1,err:t}),e.triggerUpdate()})).finally((function(){e.active=!1}))},triggerUpdate:function(){var e=this;setTimeout((function(){e.$refs.logs&&(e.$refs.logs.scrollTop=e.$refs.logs.scrollHeight)}),1)}},created:function(){this.circuit=new this.$mollitia.Circuit},updated:function(){this.circuit.modules=this.modules}},l=(o(239),o(35)),component=Object(l.a)(r,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"mollitia-circuit"},[o("div",{staticClass:"mollitia-circuit-header"},[o("div",[e._v(e._s(e.name))])]),e._v(" "),o("div",{staticClass:"mollitia-circuit-content"},[e._t("default")],2),e._v(" "),o("div",{staticClass:"mollitia-circuit-request"},[e._m(0),e._v(" "),o("div",{staticClass:"form-control"},[o("label",[e._v("Time (in ms):")]),o("input",{directives:[{name:"model",rawName:"v-model.number",value:e.time,expression:"time",modifiers:{number:!0}}],attrs:{type:"number"},domProps:{value:e.time},on:{input:function(t){t.target.composing||(e.time=e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}})]),e._v(" "),o("div",[o("button",{attrs:{disabled:e.disabled},on:{click:e.triggerRequest}},[e._v("Send Request")]),e._v(" "),e.canFail?o("Toggle",{attrs:{"pre-label":"Failure","post-label":"Success"},model:{value:e.shouldSucceed,callback:function(t){e.shouldSucceed=t},expression:"shouldSucceed"}}):e._e()],1)]),e._v(" "),o("div",{ref:"logs",staticClass:"mollitia-circuit-logs"},[o("div",{domProps:{innerHTML:e._s(e.logs)}})])])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"form-control"},[t("label",[this._v("Simulate Request")])])}],!1,null,"06849e52",null);t.default=component.exports;installComponents(component,{Toggle:o(233).default})},233:function(e,t,o){"use strict";o.r(t);var r={name:"Toggle",props:{value:{type:Boolean,default:!0},preLabel:{type:String,default:""},postLabel:{type:String,default:""}},methods:{onInput:function(){this.$emit("input",!this.value)}}},l=(o(237),o(35)),component=Object(l.a)(r,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"toggle"},[e.preLabel?o("label",{staticClass:"toggle-label"},[e._v(e._s(e.preLabel))]):e._e(),e._v(" "),o("label",{staticClass:"toggle-container"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"value"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.value)?e._i(e.value,null)>-1:e.value},on:{input:e.onInput,change:function(t){var o=e.value,r=t.target,l=!!r.checked;if(Array.isArray(o)){var d=e._i(o,null);r.checked?d<0&&(e.value=o.concat([null])):d>-1&&(e.value=o.slice(0,d).concat(o.slice(d+1)))}else e.value=l}}}),e._v(" "),o("span",{staticClass:"slider"})]),e._v(" "),e.postLabel?o("label",{staticClass:"toggle-label"},[e._v(e._s(e.postLabel))]):e._e()])}),[],!1,null,"61b70ba2",null);t.default=component.exports},234:function(e,t,o){"use strict";var r=o(10),l=o(3),d=o(67),n=o(17),c=o(11),m=o(24),f=o(127),h=o(65),v=o(4),w=o(68),y=o(66).f,k=o(23).f,x=o(12).f,S=o(235).trim,C=l.Number,_=C.prototype,O="Number"==m(w(_)),T=function(e){var t,o,r,l,d,n,c,code,m=h(e,!1);if("string"==typeof m&&m.length>2)if(43===(t=(m=S(m)).charCodeAt(0))||45===t){if(88===(o=m.charCodeAt(2))||120===o)return NaN}else if(48===t){switch(m.charCodeAt(1)){case 66:case 98:r=2,l=49;break;case 79:case 111:r=8,l=55;break;default:return+m}for(n=(d=m.slice(2)).length,c=0;c<n;c++)if((code=d.charCodeAt(c))<48||code>l)return NaN;return parseInt(d,r)}return+m};if(d("Number",!C(" 0o1")||!C("0b1")||C("+0x1"))){for(var N,D=function(e){var t=arguments.length<1?0:e,o=this;return o instanceof D&&(O?v((function(){_.valueOf.call(o)})):"Number"!=m(o))?f(new C(T(t)),o,D):T(t)},z=r?y(C):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),R=0;z.length>R;R++)c(C,N=z[R])&&!c(D,N)&&x(D,N,k(C,N));D.prototype=_,_.constructor=D,n(l,"Number",D)}},235:function(e,t,o){var r=o(16),l="["+o(236)+"]",d=RegExp("^"+l+l+"*"),n=RegExp(l+l+"*$"),c=function(e){return function(t){var o=String(r(t));return 1&e&&(o=o.replace(d,"")),2&e&&(o=o.replace(n,"")),o}};e.exports={start:c(1),end:c(2),trim:c(3)}},236:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},237:function(e,t,o){"use strict";var r=o(230);o.n(r).a},238:function(e,t,o){(t=o(63)(!1)).push([e.i,'[data-v-61b70ba2]:root{--madoc-white:#fff;--madoc-black:#000;--madoc-light-orange:#ff4f1f;--madoc-dark-orange:#e36209;--madoc-grey-1:#111;--madoc-grey-2:#222;--madoc-grey-3:#333;--madoc-grey-4:#444;--madoc-grey-5:#555;--madoc-grey-9:#999;--madoc-light-primary:#aaa;--madoc-dark-primary:#444;--madoc-github-blue-link:#0366d6;--madoc-github-red-code:#af6161;--madoc-github-code-back:rgba(27,31,35,0.05);--madoc-github-underline:#eaecef;--madoc-github-grey-1:#eaeeef;--madoc-github-grey-2:#6a737d;--madoc-github-grey-3:#dfe2e5;--madoc-github-grey-4:#e1e4e8;--madoc-github-grey-5:#c6cbd1;--madoc-github-grey-6:#24292e;--madoc-github-grey-7:#d6d3d5;--madoc-github-grey-8:#d6d8da;--madoc-github-grey-9:#9da5b4;--madoc-github-grey-10:#181a1f;--madoc-github-grey-11:#1b1d23;--madoc-github-grey-12:#f6f8fa;--madoc-white-opacity-50:hsla(0,0%,100%,0.5);--madoc-black-opacity-25:rgba(0,0,0,0.25);--madoc-black-opacity-50:rgba(0,0,0,0.5);--madoc-grey-blue-1:#dce5ed;--madoc-grey-blue-2:#8da9c4;--madoc-grey-blue-3:#778da9;--madoc-blue-1:#00a6ed;--mollitia-error-color:#ea4f6b;--mollitia-warning-color:#f8a740;--mollitia-success-color:#4ac764;--mollitia-info-color:#2e69db;--mollitia-event-color:#ff8fdd}a[data-v-61b70ba2]{color:#0366d6;color:var(--madoc-github-blue-link);text-decoration:none}a[data-v-61b70ba2]:hover{text-decoration:underline}h1[data-v-61b70ba2]{font-size:2em}h1[data-v-61b70ba2],h2[data-v-61b70ba2]{padding-bottom:.3em;border-bottom:1px solid #555;border-bottom:1px solid var(--madoc-grey-5)}h2[data-v-61b70ba2]{font-size:1.5em}h3[data-v-61b70ba2]{font-size:1.25em}h4[data-v-61b70ba2]{font-size:1em}h5[data-v-61b70ba2]{font-size:.875em}h6[data-v-61b70ba2]{font-size:.85em}b[data-v-61b70ba2],strong[data-v-61b70ba2]{font-weight:600}blockquote[data-v-61b70ba2]{padding:0 1em;border-left:.25em solid #181a1f;border-left:.25em solid var(--madoc-github-grey-10)}hr[data-v-61b70ba2]{height:.25em;padding:0;margin:24px 0;background-color:#181a1f;background-color:var(--madoc-github-grey-10);border:0}p>code[data-v-61b70ba2],table code[data-v-61b70ba2]{font-family:SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;padding:.2em .4em;margin:0;font-size:85%;background-color:#1b1d23;background-color:var(--madoc-github-grey-11);color:#af6161;color:var(--madoc-github-red-code);border-radius:3px}table[data-v-61b70ba2]{width:100%;border-spacing:0;border-collapse:collapse}table tr[data-v-61b70ba2]{background-color:#222;background-color:var(--madoc-grey-2);border-top:1px solid #181a1f;border-top:1px solid var(--madoc-github-grey-10)}table tr[data-v-61b70ba2]:nth-child(2n){background-color:var(--madoc-vscode-grey-3)}table tr>td[data-v-61b70ba2],table tr>th[data-v-61b70ba2]{padding:6px 13px;border:1px solid #181a1f;border:1px solid var(--madoc-github-grey-10)}p.flex-center-row>img[data-v-61b70ba2]{max-width:100%}div.toggle[data-v-61b70ba2]{display:inline-block}div.toggle>label.toggle-label[data-v-61b70ba2]{font-size:small}div.toggle>label.toggle-container[data-v-61b70ba2]{position:relative;display:inline-block;width:38px;height:21px}div.toggle>label.toggle-container>input[data-v-61b70ba2]{opacity:0;width:0;height:0}div.toggle>label.toggle-container>input:checked+span.slider[data-v-61b70ba2]{background-color:#2196f3}div.toggle>label.toggle-container>input:checked+span.slider[data-v-61b70ba2]:before{transform:translateX(15px)}div.toggle>label.toggle-container>input:focus+span.slider[data-v-61b70ba2]{box-shadow:0 0 1px #2196f3}div.toggle>label.toggle-container>span.slider[data-v-61b70ba2]{position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;background-color:#ccc;transition:.4s;border-radius:19px}div.toggle>label.toggle-container>span.slider[data-v-61b70ba2]:before{position:absolute;content:"";height:15px;width:15px;left:3px;bottom:3px;background-color:#fff;transition:.4s;border-radius:50%}',""]),e.exports=t},239:function(e,t,o){"use strict";var r=o(231);o.n(r).a},240:function(e,t,o){(t=o(63)(!1)).push([e.i,"[data-v-06849e52]:root{--madoc-white:#fff;--madoc-black:#000;--madoc-light-orange:#ff4f1f;--madoc-dark-orange:#e36209;--madoc-grey-1:#111;--madoc-grey-2:#222;--madoc-grey-3:#333;--madoc-grey-4:#444;--madoc-grey-5:#555;--madoc-grey-9:#999;--madoc-light-primary:#aaa;--madoc-dark-primary:#444;--madoc-github-blue-link:#0366d6;--madoc-github-red-code:#af6161;--madoc-github-code-back:rgba(27,31,35,0.05);--madoc-github-underline:#eaecef;--madoc-github-grey-1:#eaeeef;--madoc-github-grey-2:#6a737d;--madoc-github-grey-3:#dfe2e5;--madoc-github-grey-4:#e1e4e8;--madoc-github-grey-5:#c6cbd1;--madoc-github-grey-6:#24292e;--madoc-github-grey-7:#d6d3d5;--madoc-github-grey-8:#d6d8da;--madoc-github-grey-9:#9da5b4;--madoc-github-grey-10:#181a1f;--madoc-github-grey-11:#1b1d23;--madoc-github-grey-12:#f6f8fa;--madoc-white-opacity-50:hsla(0,0%,100%,0.5);--madoc-black-opacity-25:rgba(0,0,0,0.25);--madoc-black-opacity-50:rgba(0,0,0,0.5);--madoc-grey-blue-1:#dce5ed;--madoc-grey-blue-2:#8da9c4;--madoc-grey-blue-3:#778da9;--madoc-blue-1:#00a6ed;--mollitia-error-color:#ea4f6b;--mollitia-warning-color:#f8a740;--mollitia-success-color:#4ac764;--mollitia-info-color:#2e69db;--mollitia-event-color:#ff8fdd}a[data-v-06849e52]{color:#0366d6;color:var(--madoc-github-blue-link);text-decoration:none}a[data-v-06849e52]:hover{text-decoration:underline}h1[data-v-06849e52]{font-size:2em}h1[data-v-06849e52],h2[data-v-06849e52]{padding-bottom:.3em;border-bottom:1px solid #555;border-bottom:1px solid var(--madoc-grey-5)}h2[data-v-06849e52]{font-size:1.5em}h3[data-v-06849e52]{font-size:1.25em}h4[data-v-06849e52]{font-size:1em}h5[data-v-06849e52]{font-size:.875em}h6[data-v-06849e52]{font-size:.85em}b[data-v-06849e52],strong[data-v-06849e52]{font-weight:600}blockquote[data-v-06849e52]{padding:0 1em;border-left:.25em solid #181a1f;border-left:.25em solid var(--madoc-github-grey-10)}hr[data-v-06849e52]{height:.25em;padding:0;margin:24px 0;background-color:#181a1f;background-color:var(--madoc-github-grey-10);border:0}p>code[data-v-06849e52],table code[data-v-06849e52]{font-family:SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;padding:.2em .4em;margin:0;font-size:85%;background-color:#1b1d23;background-color:var(--madoc-github-grey-11);color:#af6161;color:var(--madoc-github-red-code);border-radius:3px}table[data-v-06849e52]{width:100%;border-spacing:0;border-collapse:collapse}table tr[data-v-06849e52]{background-color:#222;background-color:var(--madoc-grey-2);border-top:1px solid #181a1f;border-top:1px solid var(--madoc-github-grey-10)}table tr[data-v-06849e52]:nth-child(2n){background-color:var(--madoc-vscode-grey-3)}table tr>td[data-v-06849e52],table tr>th[data-v-06849e52]{padding:6px 13px;border:1px solid #181a1f;border:1px solid var(--madoc-github-grey-10)}p.flex-center-row>img[data-v-06849e52]{max-width:100%}div.mollitia-circuit[data-v-06849e52]{margin:10px;border:1px solid #555;border:1px solid var(--madoc-grey-5)}div.mollitia-circuit>div.mollitia-circuit-content[data-v-06849e52],div.mollitia-circuit>div.mollitia-circuit-header[data-v-06849e52],div.mollitia-circuit>div.mollitia-circuit-request[data-v-06849e52]{padding:10px;border-bottom:1px solid #555;border-bottom:1px solid var(--madoc-grey-5)}div.mollitia-circuit>div.mollitia-circuit-request>div.form-control>label[data-v-06849e52]{margin-right:10px}div.mollitia-circuit>div.mollitia-circuit-logs[data-v-06849e52]{padding:10px;min-height:4em;max-height:14em;resize:vertical;overflow:auto}",""]),e.exports=t},241:function(e,t,o){"use strict";o.r(t);o(36);var r={name:"Sliding",props:{name:{type:String,default:"Sliding Window Breaker"},slidingType:{type:String,default:""}},data:function(){return{circuitStateClass:"",slidingWindowBreaker:null,slidingWindowSize:"count"===this.slidingType?4:6e4,windowSizeName:"count"===this.slidingType?"Window Size":"Window Size (in ms)",minimumNumberOfCalls:2,failureRateThreshold:60,slowCallDurationThreshold:500,slowCallRateThreshold:50,permittedNumberOfCallsInHalfOpenState:2,openStateDelay:1e3,halfOpenStateMaxDelay:3e4,circuitStatusMessage:"Closed",circuitDuration:"",percent:0}},computed:{style:function(){return{width:"".concat(this.percent,"%"),"background-color":"var(--mollitia-info-color)"}}},methods:{updateStateProgress:function(){var e=this;this.interval&&(clearInterval(this.interval),this.circuitDuration="",this.percent=0),"halfopened"===this.circuitStateClass?(this.circuitDuration="Half Opened Duration",this.interval=setInterval((function(){var t=(new Date).getTime();e.percent=(t-e.timeStateChanged)/e.halfOpenStateMaxDelay*100,e.percent>100&&(e.percent=100)}),150)):"opened"===this.circuitStateClass&&(this.circuitDuration="Opened Duration",this.interval=setInterval((function(){var t=(new Date).getTime();e.percent=(t-e.timeStateChanged)/e.openStateDelay*100,e.percent>100&&(e.percent=100)}),150))},onCircuitStateChanged:function(){switch(this.slidingWindowBreaker.state){case this.$mollitia.BreakerState.HALF_OPENED:this.circuitStateClass="halfopened",this.circuitStatusMessage="Half Opened",this.timeStateChanged=(new Date).getTime(),this.updateStateProgress();break;case this.$mollitia.BreakerState.OPENED:this.circuitStateClass="opened",this.circuitStatusMessage="Opened",this.timeStateChanged=(new Date).getTime(),this.updateStateProgress();break;default:this.circuitStatusMessage="Closed",this.circuitStateClass="",this.timeStateChanged=(new Date).getTime(),this.updateStateProgress()}},update:function(){this.slidingWindowBreaker&&(this.slidingWindowBreaker.slidingWindowSize=this.slidingWindowSize,this.slidingWindowBreaker.minimumNumberOfCalls=this.minimumNumberOfCalls,this.slidingWindowBreaker.failureRateThreshold=this.failureRateThreshold,this.slidingWindowBreaker.slowCallDurationThreshold=this.slowCallDurationThreshold,this.slidingWindowBreaker.slowCallRateThreshold=this.slowCallRateThreshold,this.slidingWindowBreaker.permittedNumberOfCallsInHalfOpenState=this.permittedNumberOfCallsInHalfOpenState,this.slidingWindowBreaker.openStateDelay=this.openStateDelay,this.slidingWindowBreaker.halfOpenStateMaxDelay=this.halfOpenStateMaxDelay)}},created:function(){"count"===this.slidingType?this.slidingWindowBreaker=new this.$mollitia.SlidingCountBreaker({slidingWindowSize:this.slidingWindowSize,minimumNumberOfCalls:this.minimumNumberOfCalls,failureRateThreshold:this.failureRateThreshold,slowCallDurationThreshold:this.slowCallDurationThreshold,slowCallRateThreshold:this.slowCallRateThreshold,permittedNumberOfCallsInHalfOpenState:this.permittedNumberOfCallsInHalfOpenState,openStateDelay:this.openStateDelay,halfOpenStateMaxDelay:this.halfOpenStateMaxDelay,logger:{debug:this.$parent.log}}):this.slidingWindowBreaker=new this.$mollitia.SlidingTimeBreaker({slidingWindowSize:this.slidingWindowSize,minimumNumberOfCalls:this.minimumNumberOfCalls,failureRateThreshold:this.failureRateThreshold,slowCallDurationThreshold:this.slowCallDurationThreshold,slowCallRateThreshold:this.slowCallRateThreshold,permittedNumberOfCallsInHalfOpenState:this.permittedNumberOfCallsInHalfOpenState,openStateDelay:this.openStateDelay,halfOpenStateMaxDelay:this.halfOpenStateMaxDelay,logger:{debug:this.$parent.log}}),this.slidingWindowBreaker.on("state-changed",this.onCircuitStateChanged)}},l=(o(294),o(35)),component=Object(l.a)(r,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"mollitia-module-sliding-window-breaker"},[o("div",{staticClass:"mollitia-module-sliding-window-breaker-header"},[o("div",[e._v(e._s(e.name))])]),e._v(" "),o("div",{staticClass:"mollitia-module-sliding-window-breaker-content"},[o("div",{staticClass:"mollitia-module-sliding-window-breaker-config"},[o("div",{staticClass:"form-control"},[o("label",{attrs:{for:"windowSize"}},[e._v(e._s(e.windowSizeName)+":")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model.number",value:e.slidingWindowSize,expression:"slidingWindowSize",modifiers:{number:!0}}],attrs:{id:"windowSize",type:"number"},domProps:{value:e.slidingWindowSize},on:{input:[function(t){t.target.composing||(e.slidingWindowSize=e._n(t.target.value))},e.update],blur:function(t){return e.$forceUpdate()}}})]),e._v(" "),o("div",{staticClass:"form-control"},[o("label",{attrs:{for:"minNumberOfCalls"}},[e._v("Min nb calls:")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model.number",value:e.minimumNumberOfCalls,expression:"minimumNumberOfCalls",modifiers:{number:!0}}],attrs:{id:"minNumberOfCalls",type:"number"},domProps:{value:e.minimumNumberOfCalls},on:{input:[function(t){t.target.composing||(e.minimumNumberOfCalls=e._n(t.target.value))},e.update],blur:function(t){return e.$forceUpdate()}}})]),e._v(" "),o("div",{staticClass:"form-control"},[o("label",{attrs:{for:"failureRateThreshold"}},[e._v("Failure Rate Threshold:")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model.number",value:e.failureRateThreshold,expression:"failureRateThreshold",modifiers:{number:!0}}],attrs:{id:"failureRateThreshold",type:"number"},domProps:{value:e.failureRateThreshold},on:{input:[function(t){t.target.composing||(e.failureRateThreshold=e._n(t.target.value))},e.update],blur:function(t){return e.$forceUpdate()}}})]),e._v(" "),o("div",{staticClass:"form-control"},[o("label",{attrs:{for:"slowCallDurationThreshold"}},[e._v("Slow Call Duration Threshold (in ms):")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model.number",value:e.slowCallDurationThreshold,expression:"slowCallDurationThreshold",modifiers:{number:!0}}],attrs:{id:"slowCallDurationThreshold",type:"number"},domProps:{value:e.slowCallDurationThreshold},on:{input:[function(t){t.target.composing||(e.slowCallDurationThreshold=e._n(t.target.value))},e.update],blur:function(t){return e.$forceUpdate()}}})]),e._v(" "),o("div",{staticClass:"form-control"},[o("label",{attrs:{for:"slowCallRateThreshold"}},[e._v("Slow Call Rate Threshold:")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model.number",value:e.slowCallRateThreshold,expression:"slowCallRateThreshold",modifiers:{number:!0}}],attrs:{id:"slowCallRateThreshold",type:"number"},domProps:{value:e.slowCallRateThreshold},on:{input:[function(t){t.target.composing||(e.slowCallRateThreshold=e._n(t.target.value))},e.update],blur:function(t){return e.$forceUpdate()}}})]),e._v(" "),o("div",{staticClass:"form-control"},[o("label",{attrs:{for:"permittedNumberOfCallsInHalfOpenState"}},[e._v("Number Of Calls in Half Open State:")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model.number",value:e.permittedNumberOfCallsInHalfOpenState,expression:"permittedNumberOfCallsInHalfOpenState",modifiers:{number:!0}}],attrs:{id:"permittedNumberOfCallsInHalfOpenState",type:"number"},domProps:{value:e.permittedNumberOfCallsInHalfOpenState},on:{input:[function(t){t.target.composing||(e.permittedNumberOfCallsInHalfOpenState=e._n(t.target.value))},e.update],blur:function(t){return e.$forceUpdate()}}})]),e._v(" "),o("div",{staticClass:"form-control"},[o("label",{attrs:{for:"openStateDelay"}},[e._v("Delay to stay in Open State (in ms):")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model.number",value:e.openStateDelay,expression:"openStateDelay",modifiers:{number:!0}}],attrs:{id:"openStateDelay",type:"number"},domProps:{value:e.openStateDelay},on:{input:[function(t){t.target.composing||(e.openStateDelay=e._n(t.target.value))},e.update],blur:function(t){return e.$forceUpdate()}}})]),e._v(" "),o("div",{staticClass:"form-control"},[o("label",{attrs:{for:"halfOpenStateMaxDelay"}},[e._v("Max Delay to stay in Half Open State (in ms):")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model.number",value:e.halfOpenStateMaxDelay,expression:"halfOpenStateMaxDelay",modifiers:{number:!0}}],attrs:{id:"halfOpenStateMaxDelay",type:"number"},domProps:{value:e.halfOpenStateMaxDelay},on:{input:[function(t){t.target.composing||(e.halfOpenStateMaxDelay=e._n(t.target.value))},e.update],blur:function(t){return e.$forceUpdate()}}})])]),e._v(" "),o("div",{staticClass:"mollitia-module-sliding-window-breaker-visual"},[o("div",{staticClass:"mollitia-module-sliding-window-breaker-result"},[o("label",{attrs:{for:"circuitStatus"}},[e._v("Circuit Status:")]),e._v(" "),o("div",{staticClass:"circle",class:e.circuitStateClass,attrs:{id:"circuitStatus"}}),e._v(" "),o("div",{attrs:{id:"circuitStatusText"}},[e._v(e._s(e.circuitStatusMessage))])]),e._v(" "),o("div",{staticClass:"mollitia-module-sliding-window-breaker-duration"},[o("div",{staticClass:"mollitia-module-sliding-window-breaker-title"},[e._v(e._s(e.circuitDuration))]),e._v(" "),o("div",{staticClass:"mollitia-module-sliding-window-breaker-progress",style:e.style})])])])])}),[],!1,null,"43f9a6f9",null);t.default=component.exports},256:function(e,t,o){var content=o(295);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(64).default)("066d7c77",content,!0,{sourceMap:!1})},294:function(e,t,o){"use strict";var r=o(256);o.n(r).a},295:function(e,t,o){(t=o(63)(!1)).push([e.i,"[data-v-43f9a6f9]:root{--madoc-white:#fff;--madoc-black:#000;--madoc-light-orange:#ff4f1f;--madoc-dark-orange:#e36209;--madoc-grey-1:#111;--madoc-grey-2:#222;--madoc-grey-3:#333;--madoc-grey-4:#444;--madoc-grey-5:#555;--madoc-grey-9:#999;--madoc-light-primary:#aaa;--madoc-dark-primary:#444;--madoc-github-blue-link:#0366d6;--madoc-github-red-code:#af6161;--madoc-github-code-back:rgba(27,31,35,0.05);--madoc-github-underline:#eaecef;--madoc-github-grey-1:#eaeeef;--madoc-github-grey-2:#6a737d;--madoc-github-grey-3:#dfe2e5;--madoc-github-grey-4:#e1e4e8;--madoc-github-grey-5:#c6cbd1;--madoc-github-grey-6:#24292e;--madoc-github-grey-7:#d6d3d5;--madoc-github-grey-8:#d6d8da;--madoc-github-grey-9:#9da5b4;--madoc-github-grey-10:#181a1f;--madoc-github-grey-11:#1b1d23;--madoc-github-grey-12:#f6f8fa;--madoc-white-opacity-50:hsla(0,0%,100%,0.5);--madoc-black-opacity-25:rgba(0,0,0,0.25);--madoc-black-opacity-50:rgba(0,0,0,0.5);--madoc-grey-blue-1:#dce5ed;--madoc-grey-blue-2:#8da9c4;--madoc-grey-blue-3:#778da9;--madoc-blue-1:#00a6ed;--mollitia-error-color:#ea4f6b;--mollitia-warning-color:#f8a740;--mollitia-success-color:#4ac764;--mollitia-info-color:#2e69db;--mollitia-event-color:#ff8fdd}a[data-v-43f9a6f9]{color:#0366d6;color:var(--madoc-github-blue-link);text-decoration:none}a[data-v-43f9a6f9]:hover{text-decoration:underline}h1[data-v-43f9a6f9]{font-size:2em}h1[data-v-43f9a6f9],h2[data-v-43f9a6f9]{padding-bottom:.3em;border-bottom:1px solid #555;border-bottom:1px solid var(--madoc-grey-5)}h2[data-v-43f9a6f9]{font-size:1.5em}h3[data-v-43f9a6f9]{font-size:1.25em}h4[data-v-43f9a6f9]{font-size:1em}h5[data-v-43f9a6f9]{font-size:.875em}h6[data-v-43f9a6f9]{font-size:.85em}b[data-v-43f9a6f9],strong[data-v-43f9a6f9]{font-weight:600}blockquote[data-v-43f9a6f9]{padding:0 1em;border-left:.25em solid #181a1f;border-left:.25em solid var(--madoc-github-grey-10)}hr[data-v-43f9a6f9]{height:.25em;padding:0;margin:24px 0;background-color:#181a1f;background-color:var(--madoc-github-grey-10);border:0}p>code[data-v-43f9a6f9],table code[data-v-43f9a6f9]{font-family:SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;padding:.2em .4em;margin:0;font-size:85%;background-color:#1b1d23;background-color:var(--madoc-github-grey-11);color:#af6161;color:var(--madoc-github-red-code);border-radius:3px}table[data-v-43f9a6f9]{width:100%;border-spacing:0;border-collapse:collapse}table tr[data-v-43f9a6f9]{background-color:#222;background-color:var(--madoc-grey-2);border-top:1px solid #181a1f;border-top:1px solid var(--madoc-github-grey-10)}table tr[data-v-43f9a6f9]:nth-child(2n){background-color:var(--madoc-vscode-grey-3)}table tr>td[data-v-43f9a6f9],table tr>th[data-v-43f9a6f9]{padding:6px 13px;border:1px solid #181a1f;border:1px solid var(--madoc-github-grey-10)}p.flex-center-row>img[data-v-43f9a6f9]{max-width:100%}.mollitia-module-sliding-window-breaker[data-v-43f9a6f9]{border:1px solid #555;border:1px solid var(--madoc-grey-5)}.mollitia-module-sliding-window-breaker-header[data-v-43f9a6f9]{padding:10px;border-bottom:1px solid #555;border-bottom:1px solid var(--madoc-grey-5)}.mollitia-module-sliding-window-breaker-content[data-v-43f9a6f9]{display:flex}.mollitia-module-sliding-window-breaker-content .mollitia-module-sliding-window-breaker-config[data-v-43f9a6f9]{padding:10px;border-right:1px solid #555;border-right:1px solid var(--madoc-grey-5)}.mollitia-module-sliding-window-breaker-content .mollitia-module-sliding-window-breaker-config>div.form-control[data-v-43f9a6f9]{display:flex;flex-direction:row}.mollitia-module-sliding-window-breaker-content .mollitia-module-sliding-window-breaker-config>div.form-control[data-v-43f9a6f9]:not(:last-child){margin-bottom:5px}.mollitia-module-sliding-window-breaker-content .mollitia-module-sliding-window-breaker-config>div.form-control>label[data-v-43f9a6f9]{margin-right:10px}.mollitia-module-sliding-window-breaker-content .mollitia-module-sliding-window-breaker-config>div.form-control>input[data-v-43f9a6f9]{margin-left:auto}.mollitia-module-sliding-window-breaker-content .mollitia-module-sliding-window-breaker-visual[data-v-43f9a6f9]{flex-grow:1;display:flex;flex-direction:column;min-height:50px}.mollitia-module-sliding-window-breaker-content .mollitia-module-sliding-window-breaker-visual .mollitia-module-sliding-window-breaker-result[data-v-43f9a6f9]{height:50%;display:flex;margin-top:10px;justify-content:center;align-items:center}.mollitia-module-sliding-window-breaker-content .mollitia-module-sliding-window-breaker-visual .mollitia-module-sliding-window-breaker-result .circle[data-v-43f9a6f9]{width:20px;height:20px;border-radius:50%;background:#4ac764;background:var(--mollitia-success-color);margin-left:5px;margin-right:5px}.mollitia-module-sliding-window-breaker-content .mollitia-module-sliding-window-breaker-visual .mollitia-module-sliding-window-breaker-result .circle.halfopened[data-v-43f9a6f9]{background:#f8a740;background:var(--mollitia-warning-color)}.mollitia-module-sliding-window-breaker-content .mollitia-module-sliding-window-breaker-visual .mollitia-module-sliding-window-breaker-result .circle.opened[data-v-43f9a6f9]{background:#ea4f6b;background:var(--mollitia-error-color)}.mollitia-module-sliding-window-breaker-content .mollitia-module-sliding-window-breaker-visual .mollitia-module-sliding-window-breaker-duration[data-v-43f9a6f9]{height:50%;position:relative}.mollitia-module-sliding-window-breaker-content .mollitia-module-sliding-window-breaker-visual .mollitia-module-sliding-window-breaker-duration .mollitia-module-sliding-window-breaker-title[data-v-43f9a6f9]{display:flex;align-items:center;justify-content:center;position:absolute;top:0;bottom:0;left:0;right:0}.mollitia-module-sliding-window-breaker-content .mollitia-module-sliding-window-breaker-visual .mollitia-module-sliding-window-breaker-duration .mollitia-module-sliding-window-breaker-progress[data-v-43f9a6f9]{height:100%;transition:width .25s ease,background-color .25s ease}",""]),e.exports=t}}]);