__NUXT_JSONP__("/api/module/retry", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at){return {data:[{article:{title:"Mollitia - API - Module - Retry",toc:[{id:W,depth:D,text:X},{id:Y,depth:D,text:Z},{id:_,depth:D,text:$},{id:aa,depth:D,text:ab}],body:{type:K,children:[{type:b,tag:"h1",props:{id:E},children:[{type:b,tag:v,props:{ariaHidden:s,href:"#retry",tabIndex:w},children:[{type:b,tag:c,props:{className:[x,y]},children:[]}]},{type:a,value:z}]},{type:a,value:j},{type:b,tag:"pg-retry",props:{},children:[{type:a,value:j}]},{type:a,value:j},{type:b,tag:F,props:{id:W},children:[{type:b,tag:v,props:{ariaHidden:s,href:"#usage",tabIndex:w},children:[{type:b,tag:c,props:{className:[x,y]},children:[]}]},{type:a,value:X}]},{type:a,value:j},{type:b,tag:"p",props:{},children:[{type:a,value:"The "},{type:b,tag:i,props:{},children:[{type:a,value:z}]},{type:a,value:" module allows you to "},{type:b,tag:A,props:{},children:[{type:a,value:E}]},{type:a,value:" a function when it fails.\nYou can configure the interval between attempts, and filter the error to see if you want to retry or not."}]},{type:a,value:j},{type:b,tag:"div",props:{className:["nuxt-content-highlight"]},children:[{type:b,tag:"pre",props:{className:["language-javascript","line-numbers"]},children:[{type:b,tag:i,props:{},children:[{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:"\u002F\u002F Imports needed components"}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:ac}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:o}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,ad]},children:[{type:a,value:ae}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:L}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,ad]},children:[{type:a,value:z}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:p}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:af}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,ag]},children:[{type:a,value:"require"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,"string"]},children:[{type:a,value:"'mollitia'"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:u}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:B}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:"\u002F\u002F Creates a circuit"}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:ac}]},{type:a,value:" circuit "},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:af}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:ah}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,G]},children:[{type:a,value:ae}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:o}]},{type:a,value:"\n  options"},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:C}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:o}]},{type:a,value:"\n    modules"},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:C}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:"["}]},{type:a,value:M},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:"\u002F\u002F Creates a bulkhead module"}]},{type:a,value:M},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:ah}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,G]},children:[{type:a,value:z}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:o}]},{type:a,value:"\n        attempts"},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:C}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,H]},children:[{type:a,value:ai}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:L}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:"\u002F\u002F Will retry two times"}]},{type:a,value:"\n        interval"},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:C}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,H]},children:[{type:a,value:"500"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:L}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:"\u002F\u002F Will wait 500ms between attempts"}]},{type:a,value:aj},{type:b,tag:c,props:{className:[d,"function-variable",ag]},children:[{type:a,value:ak}]},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:C}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,"parameter"]},children:[{type:a,value:"err"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:u}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,"arrow",q]},children:[{type:a,value:"=\u003E"}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:o}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:"\u002F\u002F Can help filtering error and modifying the retry behavior"}]},{type:a,value:I},{type:b,tag:c,props:{className:[d,k,r]},children:[{type:a,value:al}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:t}]},{type:a,value:am},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:an}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,G]},children:[{type:a,value:"BrokenError"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:u}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:o}]},{type:a,value:N},{type:b,tag:c,props:{className:[d,k,r]},children:[{type:a,value:O}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,ao]},children:[{type:a,value:"false"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:B}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:"\u002F\u002F Returning false will cancel the retry attempt"}]},{type:a,value:I},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:p}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,k,r]},children:[{type:a,value:ap}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,k,r]},children:[{type:a,value:al}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:t}]},{type:a,value:am},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:an}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,G]},children:[{type:a,value:"BusyError"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:u}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:o}]},{type:a,value:N},{type:b,tag:c,props:{className:[d,k,r]},children:[{type:a,value:O}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,H]},children:[{type:a,value:"1000"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:B}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:"\u002F\u002F Returning a number will modify the interval time, and wait for that time before retry"}]},{type:a,value:I},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:p}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,k,r]},children:[{type:a,value:ap}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:o}]},{type:a,value:N},{type:b,tag:c,props:{className:[d,k,r]},children:[{type:a,value:O}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,ao]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:B}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:"\u002F\u002F Returning true will retry, using the configured interval value"}]},{type:a,value:I},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:p}]},{type:a,value:aj},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:p}]},{type:a,value:M},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:u}]},{type:a,value:"\n    "},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:"]"}]},{type:a,value:"\n  "},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:p}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:u}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:B}]},{type:a,value:j}]}]}]},{type:a,value:j},{type:b,tag:F,props:{id:Y},children:[{type:b,tag:v,props:{ariaHidden:s,href:"#options",tabIndex:w},children:[{type:b,tag:c,props:{className:[x,y]},children:[]}]},{type:a,value:Z}]},{type:a,value:"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"},{type:b,tag:P,props:{},children:[{type:b,tag:Q,props:{},children:[{type:b,tag:m,props:{},children:[{type:b,tag:n,props:{align:g},children:[{type:a,value:R}]},{type:b,tag:n,props:{align:g},children:[{type:a,value:S}]},{type:b,tag:n,props:{align:g},children:[{type:a,value:"Default"}]}]}]},{type:b,tag:T,props:{},children:[{type:b,tag:m,props:{},children:[{type:b,tag:h,props:{align:g},children:[{type:b,tag:i,props:{},children:[{type:a,value:"attempts"}]}]},{type:b,tag:h,props:{align:g},children:[{type:a,value:"The number of retry attempts (the function will be called attempts + 1 times)."}]},{type:b,tag:h,props:{align:g},children:[{type:b,tag:i,props:{},children:[{type:a,value:ai}]}]}]},{type:b,tag:m,props:{},children:[{type:b,tag:h,props:{align:g},children:[{type:b,tag:i,props:{},children:[{type:a,value:"interval"}]}]},{type:b,tag:h,props:{align:g},children:[{type:a,value:"The amount of time to wait before retrying."}]},{type:b,tag:h,props:{align:g},children:[{type:b,tag:i,props:{},children:[{type:a,value:"0"}]}]}]},{type:b,tag:m,props:{},children:[{type:b,tag:h,props:{align:g},children:[{type:b,tag:i,props:{},children:[{type:a,value:ak}]}]},{type:b,tag:h,props:{align:g},children:[{type:a,value:"A filtering callback, to modify the retry behavior."}]},{type:b,tag:h,props:{align:g},children:[{type:b,tag:i,props:{},children:[{type:a,value:"none"}]}]}]}]}]},{type:a,value:j},{type:b,tag:F,props:{id:_},children:[{type:b,tag:v,props:{ariaHidden:s,href:"#events",tabIndex:w},children:[{type:b,tag:c,props:{className:[x,y]},children:[]}]},{type:a,value:$}]},{type:a,value:"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"},{type:b,tag:P,props:{},children:[{type:b,tag:Q,props:{},children:[{type:b,tag:m,props:{},children:[{type:b,tag:n,props:{align:g},children:[{type:a,value:R}]},{type:b,tag:n,props:{align:g},children:[{type:a,value:S}]},{type:b,tag:n,props:{align:g},children:[{type:a,value:"Params"}]}]}]},{type:b,tag:T,props:{},children:[{type:b,tag:m,props:{},children:[{type:b,tag:h,props:{align:g},children:[{type:b,tag:i,props:{},children:[{type:a,value:"execute"}]}]},{type:b,tag:h,props:{align:g},children:[{type:a,value:"Called when the module is executed."}]},{type:b,tag:h,props:{align:g},children:[{type:b,tag:i,props:{},children:[{type:a,value:aq}]},{type:a,value:e},{type:b,tag:A,props:{},children:[{type:a,value:ar}]}]}]},{type:b,tag:m,props:{},children:[{type:b,tag:h,props:{align:g},children:[{type:b,tag:i,props:{},children:[{type:a,value:E}]}]},{type:b,tag:h,props:{align:g},children:[{type:a,value:"Called when retrying."}]},{type:b,tag:h,props:{align:g},children:[{type:b,tag:i,props:{},children:[{type:a,value:aq}]},{type:a,value:e},{type:b,tag:A,props:{},children:[{type:a,value:ar}]},{type:a,value:", "},{type:b,tag:i,props:{},children:[{type:a,value:H}]},{type:a,value:e},{type:b,tag:A,props:{},children:[{type:a,value:"currentAttempt"}]}]}]}]}]},{type:a,value:j},{type:b,tag:F,props:{id:aa},children:[{type:b,tag:v,props:{ariaHidden:s,href:"#methods",tabIndex:w},children:[{type:b,tag:c,props:{className:[x,y]},children:[]}]},{type:a,value:ab}]},{type:a,value:"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"},{type:b,tag:P,props:{},children:[{type:b,tag:Q,props:{},children:[{type:b,tag:m,props:{},children:[{type:b,tag:n,props:{align:g},children:[{type:a,value:R}]},{type:b,tag:n,props:{align:g},children:[{type:a,value:S}]},{type:b,tag:n,props:{align:g},children:[{type:a,value:"Returns"}]}]}]},{type:b,tag:T,props:{},children:[{type:b,tag:m,props:{},children:[{type:b,tag:h,props:{align:g},children:[{type:b,tag:i,props:{},children:[{type:a,value:"getExecParams"}]}]},{type:b,tag:h,props:{align:g},children:[{type:a,value:"Returns the circuit function parameters."}]},{type:b,tag:h,props:{align:g},children:[{type:b,tag:i,props:{},children:[{type:a,value:"any[]"}]},{type:a,value:e},{type:b,tag:A,props:{},children:[{type:a,value:"params"}]}]}]}]}]}]},dir:"\u002Fapi\u002Fmodule",path:as,extension:U,slug:E,createdAt:at,updatedAt:at,navbar:{links:[{title:"Home",path:V}],github:{link:"https:\u002F\u002Fgithub.com\u002Fgenesys\u002Fmollitia"},toc:[],body:{type:K,children:[]},dir:V,path:"\u002F_navbar",extension:U,slug:"_navbar",createdAt:J,updatedAt:J},sidebar:{links:[{group:"A Quick Overview",links:[{title:"Introduction",path:"\u002Foverview\u002Fintroduction"},{title:"Getting Started",path:"\u002Foverview\u002Fgetting-started"}]},{title:"The Circuit",path:"\u002Fapi\u002Fcircuit"},{group:"Core Modules",links:[{title:"Fallback",path:"\u002Fapi\u002Fmodule\u002Ffallback"},{title:"Cache",path:"\u002Fapi\u002Fmodule\u002Fcache"},{title:z,path:as},{title:"Timeout",path:"\u002Fapi\u002Fmodule\u002Ftimeout"},{title:"Ratelimit",path:"\u002Fapi\u002Fmodule\u002Fratelimit"},{title:"Bulkhead",path:"\u002Fapi\u002Fmodule\u002Fbulkhead"},{title:"Count Breaker",path:"\u002Fapi\u002Fmodule\u002Fbreaker\u002Fsliding\u002Fcount"},{title:"Time Breaker",path:"\u002Fapi\u002Fmodule\u002Fbreaker\u002Fsliding\u002Ftime"}]},{group:"Core Addons",links:[{title:"Prometheus",path:"https:\u002F\u002Fgenesys.github.io\u002Fmollitia-prometheus\u002F"}]},{group:"Customization",links:[{title:"Create a module",path:"\u002Fapi\u002Fcreate-module"},{title:"Create a addon",path:"\u002Fapi\u002Fcreate-addon"}]}],toc:[],body:{type:K,children:[]},dir:V,path:"\u002F_sidebar",extension:U,slug:"_sidebar",createdAt:J,updatedAt:J}}}],fetch:[],mutations:void 0}}("text","element","span","token"," ","punctuation","left","td","code","\n","keyword","comment","tr","th","{","}","operator","control-flow","true","(",")","a",-1,"icon","icon-link","Retry","strong",";",":",2,"retry","h2","class-name","number","\n          ","2021-07-15T12:21:45.539Z","root",",","\n      ","\n            ","return","table","thead","Name","Description","tbody",".md","\u002F","usage","Usage","options","Options","events","Events","methods","Methods","const","maybe-class-name","Circuit","=","function","new","2","\n        ","onRejection","if","err ","instanceof","boolean","else","Mollitia.Circuit","circuit","\u002Fapi\u002Fmodule\u002Fretry","2021-07-15T12:21:45.543Z")));