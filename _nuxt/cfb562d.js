(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{230:function(e,o,t){var content=t(238);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(64).default)("523560e8",content,!0,{sourceMap:!1})},231:function(e,o,t){var content=t(240);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(64).default)("39191e00",content,!0,{sourceMap:!1})},232:function(e,o,t){"use strict";t.r(o);t(234),t(9),t(36);var d={name:"Circuit",components:{Toggle:t(233).default},props:{name:{type:String,default:"Circuit"},initTime:{type:Number,default:2e3},modules:{type:Array,default:function(){return[]}},concurrent:{type:Boolean,default:!1},canFail:{type:Boolean,default:!0},successParams:{type:Object,default:function(){return{}}},failureParams:{type:Object,default:function(){return{}}}},data:function(){return{shouldSucceed:!0,active:!1,circuit:null,time:this.initTime,logs:""}},computed:{disabled:function(){return!this.concurrent&&this.active}},methods:{request:function(e){var o=this;return new Promise((function(t,d){setTimeout((function(){o.shouldSucceed?t({message:"Normal Success"}):d(new Error("Normal Failure"))}),e)}))},log:function(e){this.logs+="<span>".concat(e,"</span><br/>"),this.triggerUpdate()},triggerRequest:function(){var e=this;this.$emit("start"),this.active=!0,this.circuit.fn(this.request).execute(this.time,this.successParams).then((function(o){e.logs+="<span>".concat(o.message,"</span><br/>"),e.$emit("end",{success:!0,res:o}),e.triggerUpdate()})).catch((function(o){e.logs+="<span>".concat(o.message,"</span><br/>"),e.$emit("end",{success:!1,err:o}),e.triggerUpdate()})).finally((function(){e.active=!1}))},triggerUpdate:function(){var e=this;setTimeout((function(){e.$refs.logs&&(e.$refs.logs.scrollTop=e.$refs.logs.scrollHeight)}),1)}},created:function(){this.circuit=new this.$mollitia.Circuit},updated:function(){this.circuit.modules=this.modules}},r=(t(239),t(35)),component=Object(r.a)(d,(function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",{staticClass:"mollitia-circuit"},[t("div",{staticClass:"mollitia-circuit-header"},[t("div",[e._v(e._s(e.name))])]),e._v(" "),t("div",{staticClass:"mollitia-circuit-content"},[e._t("default")],2),e._v(" "),t("div",{staticClass:"mollitia-circuit-request"},[e._m(0),e._v(" "),t("div",{staticClass:"form-control"},[t("label",[e._v("Time (in ms):")]),t("input",{directives:[{name:"model",rawName:"v-model.number",value:e.time,expression:"time",modifiers:{number:!0}}],attrs:{type:"number"},domProps:{value:e.time},on:{input:function(o){o.target.composing||(e.time=e._n(o.target.value))},blur:function(o){return e.$forceUpdate()}}})]),e._v(" "),t("div",[t("button",{attrs:{disabled:e.disabled},on:{click:e.triggerRequest}},[e._v("Send Request")]),e._v(" "),e.canFail?t("Toggle",{attrs:{"pre-label":"Failure","post-label":"Success"},model:{value:e.shouldSucceed,callback:function(o){e.shouldSucceed=o},expression:"shouldSucceed"}}):e._e()],1)]),e._v(" "),t("div",{ref:"logs",staticClass:"mollitia-circuit-logs"},[t("div",{domProps:{innerHTML:e._s(e.logs)}})])])}),[function(){var e=this.$createElement,o=this._self._c||e;return o("div",{staticClass:"form-control"},[o("label",[this._v("Simulate Request")])])}],!1,null,"06849e52",null);o.default=component.exports;installComponents(component,{Toggle:t(233).default})},233:function(e,o,t){"use strict";t.r(o);var d={name:"Toggle",props:{value:{type:Boolean,default:!0},preLabel:{type:String,default:""},postLabel:{type:String,default:""}},methods:{onInput:function(){this.$emit("input",!this.value)}}},r=(t(237),t(35)),component=Object(r.a)(d,(function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",{staticClass:"toggle"},[e.preLabel?t("label",{staticClass:"toggle-label"},[e._v(e._s(e.preLabel))]):e._e(),e._v(" "),t("label",{staticClass:"toggle-container"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"value"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.value)?e._i(e.value,null)>-1:e.value},on:{input:e.onInput,change:function(o){var t=e.value,d=o.target,r=!!d.checked;if(Array.isArray(t)){var l=e._i(t,null);d.checked?l<0&&(e.value=t.concat([null])):l>-1&&(e.value=t.slice(0,l).concat(t.slice(l+1)))}else e.value=r}}}),e._v(" "),t("span",{staticClass:"slider"})]),e._v(" "),e.postLabel?t("label",{staticClass:"toggle-label"},[e._v(e._s(e.postLabel))]):e._e()])}),[],!1,null,"61b70ba2",null);o.default=component.exports},234:function(e,o,t){"use strict";var d=t(10),r=t(3),l=t(67),c=t(17),n=t(11),m=t(24),f=t(127),v=t(65),h=t(4),y=t(68),x=t(66).f,k=t(23).f,w=t(12).f,z=t(235).trim,_=r.Number,C=_.prototype,S="Number"==m(y(C)),N=function(e){var o,t,d,r,l,c,n,code,m=v(e,!1);if("string"==typeof m&&m.length>2)if(43===(o=(m=z(m)).charCodeAt(0))||45===o){if(88===(t=m.charCodeAt(2))||120===t)return NaN}else if(48===o){switch(m.charCodeAt(1)){case 66:case 98:d=2,r=49;break;case 79:case 111:d=8,r=55;break;default:return+m}for(c=(l=m.slice(2)).length,n=0;n<c;n++)if((code=l.charCodeAt(n))<48||code>r)return NaN;return parseInt(l,d)}return+m};if(l("Number",!_(" 0o1")||!_("0b1")||_("+0x1"))){for(var M,I=function(e){var o=arguments.length<1?0:e,t=this;return t instanceof I&&(S?h((function(){C.valueOf.call(t)})):"Number"!=m(t))?f(new _(N(o)),t,I):N(o)},A=d?x(_):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),E=0;A.length>E;E++)n(_,M=A[E])&&!n(I,M)&&w(I,M,k(_,M));I.prototype=C,C.constructor=I,c(r,"Number",I)}},235:function(e,o,t){var d=t(16),r="["+t(236)+"]",l=RegExp("^"+r+r+"*"),c=RegExp(r+r+"*$"),n=function(e){return function(o){var t=String(d(o));return 1&e&&(t=t.replace(l,"")),2&e&&(t=t.replace(c,"")),t}};e.exports={start:n(1),end:n(2),trim:n(3)}},236:function(e,o){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},237:function(e,o,t){"use strict";var d=t(230);t.n(d).a},238:function(e,o,t){(o=t(63)(!1)).push([e.i,'[data-v-61b70ba2]:root{--madoc-white:#fff;--madoc-black:#000;--madoc-light-orange:#ff4f1f;--madoc-dark-orange:#e36209;--madoc-grey-1:#111;--madoc-grey-2:#222;--madoc-grey-3:#333;--madoc-grey-4:#444;--madoc-grey-5:#555;--madoc-grey-9:#999;--madoc-light-primary:#aaa;--madoc-dark-primary:#444;--madoc-github-blue-link:#0366d6;--madoc-github-red-code:#af6161;--madoc-github-code-back:rgba(27,31,35,0.05);--madoc-github-underline:#eaecef;--madoc-github-grey-1:#eaeeef;--madoc-github-grey-2:#6a737d;--madoc-github-grey-3:#dfe2e5;--madoc-github-grey-4:#e1e4e8;--madoc-github-grey-5:#c6cbd1;--madoc-github-grey-6:#24292e;--madoc-github-grey-7:#d6d3d5;--madoc-github-grey-8:#d6d8da;--madoc-github-grey-9:#9da5b4;--madoc-github-grey-10:#181a1f;--madoc-github-grey-11:#1b1d23;--madoc-github-grey-12:#f6f8fa;--madoc-white-opacity-50:hsla(0,0%,100%,0.5);--madoc-black-opacity-25:rgba(0,0,0,0.25);--madoc-black-opacity-50:rgba(0,0,0,0.5);--madoc-grey-blue-1:#dce5ed;--madoc-grey-blue-2:#8da9c4;--madoc-grey-blue-3:#778da9;--madoc-blue-1:#00a6ed;--mollitia-error-color:#ea4f6b;--mollitia-warning-color:#f8a740;--mollitia-success-color:#4ac764;--mollitia-info-color:#2e69db;--mollitia-event-color:#ff8fdd}a[data-v-61b70ba2]{color:#0366d6;color:var(--madoc-github-blue-link);text-decoration:none}a[data-v-61b70ba2]:hover{text-decoration:underline}h1[data-v-61b70ba2]{font-size:2em}h1[data-v-61b70ba2],h2[data-v-61b70ba2]{padding-bottom:.3em;border-bottom:1px solid #555;border-bottom:1px solid var(--madoc-grey-5)}h2[data-v-61b70ba2]{font-size:1.5em}h3[data-v-61b70ba2]{font-size:1.25em}h4[data-v-61b70ba2]{font-size:1em}h5[data-v-61b70ba2]{font-size:.875em}h6[data-v-61b70ba2]{font-size:.85em}b[data-v-61b70ba2],strong[data-v-61b70ba2]{font-weight:600}blockquote[data-v-61b70ba2]{padding:0 1em;border-left:.25em solid #181a1f;border-left:.25em solid var(--madoc-github-grey-10)}hr[data-v-61b70ba2]{height:.25em;padding:0;margin:24px 0;background-color:#181a1f;background-color:var(--madoc-github-grey-10);border:0}p>code[data-v-61b70ba2],table code[data-v-61b70ba2]{font-family:SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;padding:.2em .4em;margin:0;font-size:85%;background-color:#1b1d23;background-color:var(--madoc-github-grey-11);color:#af6161;color:var(--madoc-github-red-code);border-radius:3px}table[data-v-61b70ba2]{width:100%;border-spacing:0;border-collapse:collapse}table tr[data-v-61b70ba2]{background-color:#222;background-color:var(--madoc-grey-2);border-top:1px solid #181a1f;border-top:1px solid var(--madoc-github-grey-10)}table tr[data-v-61b70ba2]:nth-child(2n){background-color:var(--madoc-vscode-grey-3)}table tr>td[data-v-61b70ba2],table tr>th[data-v-61b70ba2]{padding:6px 13px;border:1px solid #181a1f;border:1px solid var(--madoc-github-grey-10)}p.flex-center-row>img[data-v-61b70ba2]{max-width:100%}div.toggle[data-v-61b70ba2]{display:inline-block}div.toggle>label.toggle-label[data-v-61b70ba2]{font-size:small}div.toggle>label.toggle-container[data-v-61b70ba2]{position:relative;display:inline-block;width:38px;height:21px}div.toggle>label.toggle-container>input[data-v-61b70ba2]{opacity:0;width:0;height:0}div.toggle>label.toggle-container>input:checked+span.slider[data-v-61b70ba2]{background-color:#2196f3}div.toggle>label.toggle-container>input:checked+span.slider[data-v-61b70ba2]:before{transform:translateX(15px)}div.toggle>label.toggle-container>input:focus+span.slider[data-v-61b70ba2]{box-shadow:0 0 1px #2196f3}div.toggle>label.toggle-container>span.slider[data-v-61b70ba2]{position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;background-color:#ccc;transition:.4s;border-radius:19px}div.toggle>label.toggle-container>span.slider[data-v-61b70ba2]:before{position:absolute;content:"";height:15px;width:15px;left:3px;bottom:3px;background-color:#fff;transition:.4s;border-radius:50%}',""]),e.exports=o},239:function(e,o,t){"use strict";var d=t(231);t.n(d).a},240:function(e,o,t){(o=t(63)(!1)).push([e.i,"[data-v-06849e52]:root{--madoc-white:#fff;--madoc-black:#000;--madoc-light-orange:#ff4f1f;--madoc-dark-orange:#e36209;--madoc-grey-1:#111;--madoc-grey-2:#222;--madoc-grey-3:#333;--madoc-grey-4:#444;--madoc-grey-5:#555;--madoc-grey-9:#999;--madoc-light-primary:#aaa;--madoc-dark-primary:#444;--madoc-github-blue-link:#0366d6;--madoc-github-red-code:#af6161;--madoc-github-code-back:rgba(27,31,35,0.05);--madoc-github-underline:#eaecef;--madoc-github-grey-1:#eaeeef;--madoc-github-grey-2:#6a737d;--madoc-github-grey-3:#dfe2e5;--madoc-github-grey-4:#e1e4e8;--madoc-github-grey-5:#c6cbd1;--madoc-github-grey-6:#24292e;--madoc-github-grey-7:#d6d3d5;--madoc-github-grey-8:#d6d8da;--madoc-github-grey-9:#9da5b4;--madoc-github-grey-10:#181a1f;--madoc-github-grey-11:#1b1d23;--madoc-github-grey-12:#f6f8fa;--madoc-white-opacity-50:hsla(0,0%,100%,0.5);--madoc-black-opacity-25:rgba(0,0,0,0.25);--madoc-black-opacity-50:rgba(0,0,0,0.5);--madoc-grey-blue-1:#dce5ed;--madoc-grey-blue-2:#8da9c4;--madoc-grey-blue-3:#778da9;--madoc-blue-1:#00a6ed;--mollitia-error-color:#ea4f6b;--mollitia-warning-color:#f8a740;--mollitia-success-color:#4ac764;--mollitia-info-color:#2e69db;--mollitia-event-color:#ff8fdd}a[data-v-06849e52]{color:#0366d6;color:var(--madoc-github-blue-link);text-decoration:none}a[data-v-06849e52]:hover{text-decoration:underline}h1[data-v-06849e52]{font-size:2em}h1[data-v-06849e52],h2[data-v-06849e52]{padding-bottom:.3em;border-bottom:1px solid #555;border-bottom:1px solid var(--madoc-grey-5)}h2[data-v-06849e52]{font-size:1.5em}h3[data-v-06849e52]{font-size:1.25em}h4[data-v-06849e52]{font-size:1em}h5[data-v-06849e52]{font-size:.875em}h6[data-v-06849e52]{font-size:.85em}b[data-v-06849e52],strong[data-v-06849e52]{font-weight:600}blockquote[data-v-06849e52]{padding:0 1em;border-left:.25em solid #181a1f;border-left:.25em solid var(--madoc-github-grey-10)}hr[data-v-06849e52]{height:.25em;padding:0;margin:24px 0;background-color:#181a1f;background-color:var(--madoc-github-grey-10);border:0}p>code[data-v-06849e52],table code[data-v-06849e52]{font-family:SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;padding:.2em .4em;margin:0;font-size:85%;background-color:#1b1d23;background-color:var(--madoc-github-grey-11);color:#af6161;color:var(--madoc-github-red-code);border-radius:3px}table[data-v-06849e52]{width:100%;border-spacing:0;border-collapse:collapse}table tr[data-v-06849e52]{background-color:#222;background-color:var(--madoc-grey-2);border-top:1px solid #181a1f;border-top:1px solid var(--madoc-github-grey-10)}table tr[data-v-06849e52]:nth-child(2n){background-color:var(--madoc-vscode-grey-3)}table tr>td[data-v-06849e52],table tr>th[data-v-06849e52]{padding:6px 13px;border:1px solid #181a1f;border:1px solid var(--madoc-github-grey-10)}p.flex-center-row>img[data-v-06849e52]{max-width:100%}div.mollitia-circuit[data-v-06849e52]{margin:10px;border:1px solid #555;border:1px solid var(--madoc-grey-5)}div.mollitia-circuit>div.mollitia-circuit-content[data-v-06849e52],div.mollitia-circuit>div.mollitia-circuit-header[data-v-06849e52],div.mollitia-circuit>div.mollitia-circuit-request[data-v-06849e52]{padding:10px;border-bottom:1px solid #555;border-bottom:1px solid var(--madoc-grey-5)}div.mollitia-circuit>div.mollitia-circuit-request>div.form-control>label[data-v-06849e52]{margin-right:10px}div.mollitia-circuit>div.mollitia-circuit-logs[data-v-06849e52]{padding:10px;min-height:4em;max-height:14em;resize:vertical;overflow:auto}",""]),e.exports=o},245:function(e,o,t){var content=t(273);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(64).default)("32060ef1",content,!0,{sourceMap:!1})},246:function(e,o,t){var content=t(275);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(64).default)("03339dda",content,!0,{sourceMap:!1})},247:function(e,o,t){var content=t(277);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(64).default)("7ad82cbd",content,!0,{sourceMap:!1})},259:function(e,o,t){"use strict";t.r(o);t(29),t(37),t(40),t(49),t(50),t(21),t(9),t(38),t(39),t(41);function d(e,o){var t;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(t=function(e,o){if(!e)return;if("string"==typeof e)return r(e,o);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return r(e,o)}(e))||o&&e&&"number"==typeof e.length){t&&(e=t);var i=0,d=function(){};return{s:d,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:d}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,c=!0,n=!1;return{s:function(){t=e[Symbol.iterator]()},n:function(){var e=t.next();return c=e.done,e},e:function(e){n=!0,l=e},f:function(){try{c||null==t.return||t.return()}finally{if(n)throw l}}}}function r(e,o){(null==o||o>e.length)&&(o=e.length);for(var i=0,t=new Array(o);i<o;i++)t[i]=e[i];return t}var l={name:"Bulkhead",components:{DataCircle:t(265).default},props:{name:{type:String,default:"Bulkhead"}},data:function(){return{bulkhead:null,concurrentSize:6,queueSize:4,maxQueueWait:3e3}},computed:{concurrentBuffer:function(){var e,o=[],t=d(this.bulkhead.concurrentBuffer);try{for(t.s();!(e=t.n()).done;){var r=e.value;o.push({size:"25px",color:r.params[1].color})}}catch(e){t.e(e)}finally{t.f()}return o},queueBuffer:function(){var e,o=[],t=d(this.bulkhead.queueBuffer);try{for(t.s();!(e=t.n()).done;){var r=e.value;o.push({size:"25px",color:r.params[1].color})}}catch(e){t.e(e)}finally{t.f()}return o}},methods:{update:function(){this.bulkhead.concurrentSize=this.concurrentSize,this.bulkhead.queueSize=this.queueSize,this.bulkhead.maxQueueWait=this.maxQueueWait}},created:function(){this.bulkhead=new this.$mollitia.Bulkhead({concurrentSize:this.concurrentSize,queueSize:this.queueSize,maxQueueWait:this.maxQueueWait})}},c=(t(274),t(35)),component=Object(c.a)(l,(function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",{staticClass:"mollitia-module-bulkhead"},[t("div",{staticClass:"mollitia-module-bulkhead-header"},[t("div",[e._v(e._s(e.name))])]),e._v(" "),t("div",{staticClass:"mollitia-module-bulkhead-content"},[t("div",{staticClass:"mollitia-module-bulkhead-config"},[t("div",{staticClass:"form-control"},[t("label",[e._v("Concurrent Requests:")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model.number",value:e.concurrentSize,expression:"concurrentSize",modifiers:{number:!0}}],attrs:{type:"number"},domProps:{value:e.concurrentSize},on:{input:[function(o){o.target.composing||(e.concurrentSize=e._n(o.target.value))},e.update],blur:function(o){return e.$forceUpdate()}}})]),e._v(" "),t("div",{staticClass:"form-control"},[t("label",[e._v("Queue Size:")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model.number",value:e.queueSize,expression:"queueSize",modifiers:{number:!0}}],attrs:{type:"number"},domProps:{value:e.queueSize},on:{input:[function(o){o.target.composing||(e.queueSize=e._n(o.target.value))},e.update],blur:function(o){return e.$forceUpdate()}}})]),e._v(" "),t("div",{staticClass:"form-control"},[t("label",[e._v("Max Queue Wait (in ms):")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model.number",value:e.maxQueueWait,expression:"maxQueueWait",modifiers:{number:!0}}],attrs:{type:"number"},domProps:{value:e.maxQueueWait},on:{input:[function(o){o.target.composing||(e.maxQueueWait=e._n(o.target.value))},e.update],blur:function(o){return e.$forceUpdate()}}})])]),e._v(" "),t("div",{staticClass:"mollitia-module-bulkhead-visual"},[t("div",{staticClass:"mollitia-module-bulkhead-visual-concurrent-container"},[t("div",{staticClass:"title"},[e._v("Concurrent:")]),e._v(" "),e._l(e.concurrentBuffer,(function(p,e){return t("DataCircle",{key:e,attrs:{color:p.color,tooltip:p.tooltip,size:p.size}})}))],2),e._v(" "),t("div",{staticClass:"mollitia-module-bulkhead-visual-queue-container"},[t("div",{staticClass:"title"},[e._v("Queue:")]),e._v(" "),e._l(e.queueBuffer,(function(p,e){return t("DataCircle",{key:e,attrs:{color:p.color,tooltip:p.tooltip,size:p.size}})}))],2)])])])}),[],!1,null,"bdf6dd14",null);o.default=component.exports;installComponents(component,{DataCircle:t(265).default})},265:function(e,o,t){"use strict";t.r(o);var d={name:"DataCircle",props:{size:{type:String,default:"50px"},tooltip:{type:String,default:""},color:{type:String,default:"white"}},data:function(){return{showTooltip:!1}},computed:{style:function(){return{width:this.size,height:this.size,"background-color":this.color}},tooltipStyle:function(){return{top:"calc(".concat(this.size," + 5px")}}}},r=(t(272),t(35)),component=Object(r.a)(d,(function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",{staticClass:"data-circle",style:e.style,on:{mouseenter:function(o){e.showTooltip=!0},mouseleave:function(o){e.showTooltip=!1}}},[t("div",{directives:[{name:"show",rawName:"v-show",value:e.tooltip&&e.showTooltip,expression:"tooltip && showTooltip"}],staticClass:"tooltip",style:e.tooltipStyle},[e._v(e._s(e.tooltip))])])}),[],!1,null,"56e0bf28",null);o.default=component.exports},272:function(e,o,t){"use strict";var d=t(245);t.n(d).a},273:function(e,o,t){(o=t(63)(!1)).push([e.i,"[data-v-56e0bf28]:root{--madoc-white:#fff;--madoc-black:#000;--madoc-light-orange:#ff4f1f;--madoc-dark-orange:#e36209;--madoc-grey-1:#111;--madoc-grey-2:#222;--madoc-grey-3:#333;--madoc-grey-4:#444;--madoc-grey-5:#555;--madoc-grey-9:#999;--madoc-light-primary:#aaa;--madoc-dark-primary:#444;--madoc-github-blue-link:#0366d6;--madoc-github-red-code:#af6161;--madoc-github-code-back:rgba(27,31,35,0.05);--madoc-github-underline:#eaecef;--madoc-github-grey-1:#eaeeef;--madoc-github-grey-2:#6a737d;--madoc-github-grey-3:#dfe2e5;--madoc-github-grey-4:#e1e4e8;--madoc-github-grey-5:#c6cbd1;--madoc-github-grey-6:#24292e;--madoc-github-grey-7:#d6d3d5;--madoc-github-grey-8:#d6d8da;--madoc-github-grey-9:#9da5b4;--madoc-github-grey-10:#181a1f;--madoc-github-grey-11:#1b1d23;--madoc-github-grey-12:#f6f8fa;--madoc-white-opacity-50:hsla(0,0%,100%,0.5);--madoc-black-opacity-25:rgba(0,0,0,0.25);--madoc-black-opacity-50:rgba(0,0,0,0.5);--madoc-grey-blue-1:#dce5ed;--madoc-grey-blue-2:#8da9c4;--madoc-grey-blue-3:#778da9;--madoc-blue-1:#00a6ed;--mollitia-error-color:#ea4f6b;--mollitia-warning-color:#f8a740;--mollitia-success-color:#4ac764;--mollitia-info-color:#2e69db;--mollitia-event-color:#ff8fdd}a[data-v-56e0bf28]{color:#0366d6;color:var(--madoc-github-blue-link);text-decoration:none}a[data-v-56e0bf28]:hover{text-decoration:underline}h1[data-v-56e0bf28]{font-size:2em}h1[data-v-56e0bf28],h2[data-v-56e0bf28]{padding-bottom:.3em;border-bottom:1px solid #555;border-bottom:1px solid var(--madoc-grey-5)}h2[data-v-56e0bf28]{font-size:1.5em}h3[data-v-56e0bf28]{font-size:1.25em}h4[data-v-56e0bf28]{font-size:1em}h5[data-v-56e0bf28]{font-size:.875em}h6[data-v-56e0bf28]{font-size:.85em}b[data-v-56e0bf28],strong[data-v-56e0bf28]{font-weight:600}blockquote[data-v-56e0bf28]{padding:0 1em;border-left:.25em solid #181a1f;border-left:.25em solid var(--madoc-github-grey-10)}hr[data-v-56e0bf28]{height:.25em;padding:0;margin:24px 0;background-color:#181a1f;background-color:var(--madoc-github-grey-10);border:0}p>code[data-v-56e0bf28],table code[data-v-56e0bf28]{font-family:SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;padding:.2em .4em;margin:0;font-size:85%;background-color:#1b1d23;background-color:var(--madoc-github-grey-11);color:#af6161;color:var(--madoc-github-red-code);border-radius:3px}table[data-v-56e0bf28]{width:100%;border-spacing:0;border-collapse:collapse}table tr[data-v-56e0bf28]{background-color:#222;background-color:var(--madoc-grey-2);border-top:1px solid #181a1f;border-top:1px solid var(--madoc-github-grey-10)}table tr[data-v-56e0bf28]:nth-child(2n){background-color:var(--madoc-vscode-grey-3)}table tr>td[data-v-56e0bf28],table tr>th[data-v-56e0bf28]{padding:6px 13px;border:1px solid #181a1f;border:1px solid var(--madoc-github-grey-10)}p.flex-center-row>img[data-v-56e0bf28]{max-width:100%}div.data-circle[data-v-56e0bf28]{position:relative;border-radius:50%;display:flex;justify-content:center;margin:5px;border:2px solid #fff}div.data-circle>div.tooltip[data-v-56e0bf28]{position:absolute;background-color:rgba(0,0,0,.5);border-radius:5px;z-index:1}",""]),e.exports=o},274:function(e,o,t){"use strict";var d=t(246);t.n(d).a},275:function(e,o,t){(o=t(63)(!1)).push([e.i,"[data-v-bdf6dd14]:root{--madoc-white:#fff;--madoc-black:#000;--madoc-light-orange:#ff4f1f;--madoc-dark-orange:#e36209;--madoc-grey-1:#111;--madoc-grey-2:#222;--madoc-grey-3:#333;--madoc-grey-4:#444;--madoc-grey-5:#555;--madoc-grey-9:#999;--madoc-light-primary:#aaa;--madoc-dark-primary:#444;--madoc-github-blue-link:#0366d6;--madoc-github-red-code:#af6161;--madoc-github-code-back:rgba(27,31,35,0.05);--madoc-github-underline:#eaecef;--madoc-github-grey-1:#eaeeef;--madoc-github-grey-2:#6a737d;--madoc-github-grey-3:#dfe2e5;--madoc-github-grey-4:#e1e4e8;--madoc-github-grey-5:#c6cbd1;--madoc-github-grey-6:#24292e;--madoc-github-grey-7:#d6d3d5;--madoc-github-grey-8:#d6d8da;--madoc-github-grey-9:#9da5b4;--madoc-github-grey-10:#181a1f;--madoc-github-grey-11:#1b1d23;--madoc-github-grey-12:#f6f8fa;--madoc-white-opacity-50:hsla(0,0%,100%,0.5);--madoc-black-opacity-25:rgba(0,0,0,0.25);--madoc-black-opacity-50:rgba(0,0,0,0.5);--madoc-grey-blue-1:#dce5ed;--madoc-grey-blue-2:#8da9c4;--madoc-grey-blue-3:#778da9;--madoc-blue-1:#00a6ed;--mollitia-error-color:#ea4f6b;--mollitia-warning-color:#f8a740;--mollitia-success-color:#4ac764;--mollitia-info-color:#2e69db;--mollitia-event-color:#ff8fdd}a[data-v-bdf6dd14]{color:#0366d6;color:var(--madoc-github-blue-link);text-decoration:none}a[data-v-bdf6dd14]:hover{text-decoration:underline}h1[data-v-bdf6dd14]{font-size:2em}h1[data-v-bdf6dd14],h2[data-v-bdf6dd14]{padding-bottom:.3em;border-bottom:1px solid #555;border-bottom:1px solid var(--madoc-grey-5)}h2[data-v-bdf6dd14]{font-size:1.5em}h3[data-v-bdf6dd14]{font-size:1.25em}h4[data-v-bdf6dd14]{font-size:1em}h5[data-v-bdf6dd14]{font-size:.875em}h6[data-v-bdf6dd14]{font-size:.85em}b[data-v-bdf6dd14],strong[data-v-bdf6dd14]{font-weight:600}blockquote[data-v-bdf6dd14]{padding:0 1em;border-left:.25em solid #181a1f;border-left:.25em solid var(--madoc-github-grey-10)}hr[data-v-bdf6dd14]{height:.25em;padding:0;margin:24px 0;background-color:#181a1f;background-color:var(--madoc-github-grey-10);border:0}p>code[data-v-bdf6dd14],table code[data-v-bdf6dd14]{font-family:SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;padding:.2em .4em;margin:0;font-size:85%;background-color:#1b1d23;background-color:var(--madoc-github-grey-11);color:#af6161;color:var(--madoc-github-red-code);border-radius:3px}table[data-v-bdf6dd14]{width:100%;border-spacing:0;border-collapse:collapse}table tr[data-v-bdf6dd14]{background-color:#222;background-color:var(--madoc-grey-2);border-top:1px solid #181a1f;border-top:1px solid var(--madoc-github-grey-10)}table tr[data-v-bdf6dd14]:nth-child(2n){background-color:var(--madoc-vscode-grey-3)}table tr>td[data-v-bdf6dd14],table tr>th[data-v-bdf6dd14]{padding:6px 13px;border:1px solid #181a1f;border:1px solid var(--madoc-github-grey-10)}p.flex-center-row>img[data-v-bdf6dd14]{max-width:100%}div.mollitia-module-bulkhead[data-v-bdf6dd14]{border:1px solid #555;border:1px solid var(--madoc-grey-5)}div.mollitia-module-bulkhead>div.mollitia-module-bulkhead-header[data-v-bdf6dd14]{padding:10px;border-bottom:1px solid #555;border-bottom:1px solid var(--madoc-grey-5)}div.mollitia-module-bulkhead>div.mollitia-module-bulkhead-content[data-v-bdf6dd14]{display:flex}div.mollitia-module-bulkhead>div.mollitia-module-bulkhead-content>div.mollitia-module-bulkhead-config[data-v-bdf6dd14]{padding:10px;border-right:1px solid #555;border-right:1px solid var(--madoc-grey-5)}div.mollitia-module-bulkhead>div.mollitia-module-bulkhead-content>div.mollitia-module-bulkhead-config>div.form-control[data-v-bdf6dd14]{display:flex;flex-direction:row}div.mollitia-module-bulkhead>div.mollitia-module-bulkhead-content>div.mollitia-module-bulkhead-config>div.form-control[data-v-bdf6dd14]:not(:last-child){margin-bottom:5px}div.mollitia-module-bulkhead>div.mollitia-module-bulkhead-content>div.mollitia-module-bulkhead-config>div.form-control>label[data-v-bdf6dd14]{margin-right:10px}div.mollitia-module-bulkhead>div.mollitia-module-bulkhead-content>div.mollitia-module-bulkhead-config>div.form-control>input[data-v-bdf6dd14]{margin-left:auto}div.mollitia-module-bulkhead>div.mollitia-module-bulkhead-content>div.mollitia-module-bulkhead-visual[data-v-bdf6dd14]{flex-grow:1}div.mollitia-module-bulkhead>div.mollitia-module-bulkhead-content>div.mollitia-module-bulkhead-visual>div.mollitia-module-bulkhead-visual-concurrent-container[data-v-bdf6dd14]{height:50%;width:100%;display:flex;align-items:center;padding:0 10px;box-sizing:border-box}div.mollitia-module-bulkhead>div.mollitia-module-bulkhead-content>div.mollitia-module-bulkhead-visual>div.mollitia-module-bulkhead-visual-concurrent-container>div.title[data-v-bdf6dd14]{align-items:center;display:flex;height:100%}div.mollitia-module-bulkhead>div.mollitia-module-bulkhead-content>div.mollitia-module-bulkhead-visual>div.mollitia-module-bulkhead-visual-queue-container[data-v-bdf6dd14]{border-top:1px solid #555;border-top:1px solid var(--madoc-grey-5);height:50%;width:100%;display:flex;align-items:center;padding:0 10px;box-sizing:border-box}div.mollitia-module-bulkhead>div.mollitia-module-bulkhead-content>div.mollitia-module-bulkhead-visual>div.mollitia-module-bulkhead-visual-queue-container>div.title[data-v-bdf6dd14]{align-items:center;display:flex;height:100%}",""]),e.exports=o},276:function(e,o,t){"use strict";var d=t(247);t.n(d).a},277:function(e,o,t){(o=t(63)(!1)).push([e.i,"[data-v-cf133b62]:root{--madoc-white:#fff;--madoc-black:#000;--madoc-light-orange:#ff4f1f;--madoc-dark-orange:#e36209;--madoc-grey-1:#111;--madoc-grey-2:#222;--madoc-grey-3:#333;--madoc-grey-4:#444;--madoc-grey-5:#555;--madoc-grey-9:#999;--madoc-light-primary:#aaa;--madoc-dark-primary:#444;--madoc-github-blue-link:#0366d6;--madoc-github-red-code:#af6161;--madoc-github-code-back:rgba(27,31,35,0.05);--madoc-github-underline:#eaecef;--madoc-github-grey-1:#eaeeef;--madoc-github-grey-2:#6a737d;--madoc-github-grey-3:#dfe2e5;--madoc-github-grey-4:#e1e4e8;--madoc-github-grey-5:#c6cbd1;--madoc-github-grey-6:#24292e;--madoc-github-grey-7:#d6d3d5;--madoc-github-grey-8:#d6d8da;--madoc-github-grey-9:#9da5b4;--madoc-github-grey-10:#181a1f;--madoc-github-grey-11:#1b1d23;--madoc-github-grey-12:#f6f8fa;--madoc-white-opacity-50:hsla(0,0%,100%,0.5);--madoc-black-opacity-25:rgba(0,0,0,0.25);--madoc-black-opacity-50:rgba(0,0,0,0.5);--madoc-grey-blue-1:#dce5ed;--madoc-grey-blue-2:#8da9c4;--madoc-grey-blue-3:#778da9;--madoc-blue-1:#00a6ed;--mollitia-error-color:#ea4f6b;--mollitia-warning-color:#f8a740;--mollitia-success-color:#4ac764;--mollitia-info-color:#2e69db;--mollitia-event-color:#ff8fdd}a[data-v-cf133b62]{color:#0366d6;color:var(--madoc-github-blue-link);text-decoration:none}a[data-v-cf133b62]:hover{text-decoration:underline}h1[data-v-cf133b62]{font-size:2em}h1[data-v-cf133b62],h2[data-v-cf133b62]{padding-bottom:.3em;border-bottom:1px solid #555;border-bottom:1px solid var(--madoc-grey-5)}h2[data-v-cf133b62]{font-size:1.5em}h3[data-v-cf133b62]{font-size:1.25em}h4[data-v-cf133b62]{font-size:1em}h5[data-v-cf133b62]{font-size:.875em}h6[data-v-cf133b62]{font-size:.85em}b[data-v-cf133b62],strong[data-v-cf133b62]{font-weight:600}blockquote[data-v-cf133b62]{padding:0 1em;border-left:.25em solid #181a1f;border-left:.25em solid var(--madoc-github-grey-10)}hr[data-v-cf133b62]{height:.25em;padding:0;margin:24px 0;background-color:#181a1f;background-color:var(--madoc-github-grey-10);border:0}p>code[data-v-cf133b62],table code[data-v-cf133b62]{font-family:SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;padding:.2em .4em;margin:0;font-size:85%;background-color:#1b1d23;background-color:var(--madoc-github-grey-11);color:#af6161;color:var(--madoc-github-red-code);border-radius:3px}table[data-v-cf133b62]{width:100%;border-spacing:0;border-collapse:collapse}table tr[data-v-cf133b62]{background-color:#222;background-color:var(--madoc-grey-2);border-top:1px solid #181a1f;border-top:1px solid var(--madoc-github-grey-10)}table tr[data-v-cf133b62]:nth-child(2n){background-color:var(--madoc-vscode-grey-3)}table tr>td[data-v-cf133b62],table tr>th[data-v-cf133b62]{padding:6px 13px;border:1px solid #181a1f;border:1px solid var(--madoc-github-grey-10)}p.flex-center-row>img[data-v-cf133b62]{max-width:100%}div.mollitia-playground[data-v-cf133b62]{height:100%}",""]),e.exports=o},313:function(e,o,t){"use strict";t.r(o);var d=t(232),r=t(259),l={name:"pg-bulkhead",components:{Circuit:d.default,Bulkhead:r.default},data:function(){return{color:this.getRandomColor(),modules:[]}},computed:{successParams:function(){return{color:this.color}},failureParams:function(){return{color:this.color}}},methods:{randomizeColor:function(){this.color=this.getRandomColor()},getRandomColor:function(){for(var e="#",i=0;i<6;i++)e+="0123456789ABCDEF"[Math.floor(16*Math.random())];return e}},mounted:function(){this.circuit=this.$refs.c1.circuit,this.modules.push(this.$refs.b1.bulkhead)}},c=(t(276),t(35)),component=Object(c.a)(l,(function(){var e=this.$createElement,o=this._self._c||e;return o("div",{staticClass:"mollitia-playground"},[o("Circuit",{ref:"c1",attrs:{modules:this.modules,concurrent:!0,"success-params":this.successParams,"failure-params":this.failureParams,"init-time":4e3,"can-fail":!1},on:{start:this.randomizeColor}},[o("Bulkhead",{ref:"b1"})],1)],1)}),[],!1,null,"cf133b62",null);o.default=component.exports;installComponents(component,{Bulkhead:t(259).default,Circuit:t(232).default})}}]);