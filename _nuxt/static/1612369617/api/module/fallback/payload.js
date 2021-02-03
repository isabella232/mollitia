__NUXT_JSONP__("/api/module/fallback", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw){return {data:[{article:{title:"Mollitia - API - Module - Fallback",toc:[{id:W,depth:E,text:X},{id:Y,depth:E,text:Z},{id:_,depth:E,text:$},{id:aa,depth:E,text:ab}],body:{type:I,children:[{type:b,tag:"h1",props:{id:ac},children:[{type:b,tag:u,props:{ariaHidden:v,href:"#fallback",tabIndex:w},children:[{type:b,tag:c,props:{className:[x,y]},children:[]}]},{type:a,value:z}]},{type:a,value:i},{type:b,tag:F,props:{id:W},children:[{type:b,tag:u,props:{ariaHidden:v,href:"#usage",tabIndex:w},children:[{type:b,tag:c,props:{className:[x,y]},children:[]}]},{type:a,value:X}]},{type:a,value:i},{type:b,tag:ad,props:{},children:[{type:a,value:"The "},{type:b,tag:l,props:{},children:[{type:a,value:z}]},{type:a,value:" module allows you to "},{type:b,tag:J,props:{},children:[{type:a,value:"filter"}]},{type:a,value:" your errors."}]},{type:a,value:i},{type:b,tag:ad,props:{},children:[{type:a,value:"Works very well in conjunction with other modules!\nFor example, filtering "},{type:b,tag:l,props:{},children:[{type:a,value:"Circuit Breaker"}]},{type:a,value:" errors to return a generic error."}]},{type:a,value:i},{type:b,tag:"div",props:{className:["nuxt-content-highlight"]},children:[{type:b,tag:"pre",props:{className:["language-javascript","line-numbers"]},children:[{type:b,tag:l,props:{},children:[{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:"\u002F\u002F Imports needed components"}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:ae}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,af]},children:[{type:a,value:ag}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:","}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,af]},children:[{type:a,value:z}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,A]},children:[{type:a,value:ah}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,G]},children:[{type:a,value:"require"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,"string"]},children:[{type:a,value:"'mollitia'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:B}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:"\u002F\u002F Creates a circuit"}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:ae}]},{type:a,value:" circuit "},{type:b,tag:c,props:{className:[d,A]},children:[{type:a,value:ah}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:K}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,C]},children:[{type:a,value:ag}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:"\n  options"},{type:b,tag:c,props:{className:[d,A]},children:[{type:a,value:ai}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:"\n    modules"},{type:b,tag:c,props:{className:[d,A]},children:[{type:a,value:ai}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"["}]},{type:a,value:D},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:"\u002F\u002F Creates a fallback module"}]},{type:a,value:D},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:K}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,C]},children:[{type:a,value:z}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:aj},{type:b,tag:c,props:{className:[d,G]},children:[{type:a,value:ak}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,al]},children:[{type:a,value:am}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:L},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:"\u002F\u002F Every time the method rejects, You can filter here"}]},{type:a,value:L},{type:b,tag:c,props:{className:[d,h,r]},children:[{type:a,value:an}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:ao},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:ap}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,C]},children:[{type:a,value:aq}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:ar},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:"\u002F\u002F I know this error"}]},{type:a,value:ar},{type:b,tag:c,props:{className:[d,h,r]},children:[{type:a,value:as}]},{type:a,value:" err"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:B}]},{type:a,value:" \n          "},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:L},{type:b,tag:c,props:{className:[d,h,r]},children:[{type:a,value:as}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:K}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,C]},children:[{type:a,value:"UnknownError"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:B}]},{type:a,value:aj},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:D},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:H},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"]"}]},{type:a,value:M},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:B}]},{type:a,value:"\n\n"},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:"\u002F\u002F The rejected errors are filtered, meaning you always know what is returned here"}]},{type:a,value:"\ncircuit"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:N}]},{type:b,tag:c,props:{className:[d,at,G,au]},children:[{type:a,value:"fn"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:"myFunction"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:N}]},{type:b,tag:c,props:{className:[d,at,G,au]},children:[{type:a,value:av}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:M},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:N}]},{type:b,tag:c,props:{className:[d,h,r]},children:[{type:a,value:"catch"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,al]},children:[{type:a,value:am}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,"arrow",A]},children:[{type:a,value:"=\u003E"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:H},{type:b,tag:c,props:{className:[d,h,r]},children:[{type:a,value:an}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:ao},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:ap}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,C]},children:[{type:a,value:aq}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:D},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:"\u002F\u002F It's a MyError error"}]},{type:a,value:H},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h,r]},children:[{type:a,value:"else"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:D},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:"\u002F\u002F It's an UnknownError error"}]},{type:a,value:H},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:M},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:B}]},{type:a,value:i}]}]}]},{type:a,value:i},{type:b,tag:F,props:{id:Y},children:[{type:b,tag:u,props:{ariaHidden:v,href:"#options",tabIndex:w},children:[{type:b,tag:c,props:{className:[x,y]},children:[]}]},{type:a,value:Z}]},{type:a,value:O},{type:b,tag:P,props:{},children:[{type:b,tag:Q,props:{},children:[{type:b,tag:s,props:{},children:[{type:b,tag:o,props:{align:g},children:[{type:a,value:R}]},{type:b,tag:o,props:{align:g},children:[{type:a,value:S}]},{type:b,tag:o,props:{align:g},children:[{type:a,value:"Default"}]}]}]},{type:b,tag:T,props:{},children:[{type:b,tag:s,props:{},children:[{type:b,tag:p,props:{align:g},children:[{type:b,tag:l,props:{},children:[{type:a,value:ak}]}]},{type:b,tag:p,props:{align:g},children:[{type:a,value:"The callback, called when the circuit rejects."}]},{type:b,tag:p,props:{align:g},children:[{type:b,tag:l,props:{},children:[{type:a,value:"Function(Error)"}]}]}]}]}]},{type:a,value:i},{type:b,tag:F,props:{id:_},children:[{type:b,tag:u,props:{ariaHidden:v,href:"#events",tabIndex:w},children:[{type:b,tag:c,props:{className:[x,y]},children:[]}]},{type:a,value:$}]},{type:a,value:O},{type:b,tag:P,props:{},children:[{type:b,tag:Q,props:{},children:[{type:b,tag:s,props:{},children:[{type:b,tag:o,props:{align:g},children:[{type:a,value:R}]},{type:b,tag:o,props:{align:g},children:[{type:a,value:S}]},{type:b,tag:o,props:{align:g},children:[{type:a,value:"Params"}]}]}]},{type:b,tag:T,props:{},children:[{type:b,tag:s,props:{},children:[{type:b,tag:p,props:{align:g},children:[{type:b,tag:l,props:{},children:[{type:a,value:av}]}]},{type:b,tag:p,props:{align:g},children:[{type:a,value:"Called when the module is executed."}]},{type:b,tag:p,props:{align:g},children:[{type:b,tag:l,props:{},children:[{type:a,value:"Mollitia.Circuit"}]},{type:a,value:f},{type:b,tag:J,props:{},children:[{type:a,value:"circuit"}]}]}]}]}]},{type:a,value:i},{type:b,tag:F,props:{id:aa},children:[{type:b,tag:u,props:{ariaHidden:v,href:"#methods",tabIndex:w},children:[{type:b,tag:c,props:{className:[x,y]},children:[]}]},{type:a,value:ab}]},{type:a,value:O},{type:b,tag:P,props:{},children:[{type:b,tag:Q,props:{},children:[{type:b,tag:s,props:{},children:[{type:b,tag:o,props:{align:g},children:[{type:a,value:R}]},{type:b,tag:o,props:{align:g},children:[{type:a,value:S}]},{type:b,tag:o,props:{align:g},children:[{type:a,value:"Returns"}]}]}]},{type:b,tag:T,props:{},children:[{type:b,tag:s,props:{},children:[{type:b,tag:p,props:{align:g},children:[{type:b,tag:l,props:{},children:[{type:a,value:"getExecParams"}]}]},{type:b,tag:p,props:{align:g},children:[{type:a,value:"Returns the circuit function parameters."}]},{type:b,tag:p,props:{align:g},children:[{type:b,tag:l,props:{},children:[{type:a,value:"any[]"}]},{type:a,value:f},{type:b,tag:J,props:{},children:[{type:a,value:"params"}]}]}]}]}]}]},dir:"\u002Fapi\u002Fmodule",path:aw,extension:U,slug:ac,createdAt:t,updatedAt:t,navbar:{links:[{title:"Home",path:V}],github:{link:"https:\u002F\u002Fgithub.com\u002Fmollitia\u002Fmollitia"},toc:[],body:{type:I,children:[]},dir:V,path:"\u002F_navbar",extension:U,slug:"_navbar",createdAt:t,updatedAt:t},sidebar:{links:[{group:"A Quick Overview",links:[{title:"Introduction",path:"\u002Foverview\u002Fintroduction"},{title:"Getting Started",path:"\u002Foverview\u002Fgetting-started"}]},{title:"The Circuit",path:"\u002Fapi\u002Fcircuit"},{group:"Core Modules",links:[{title:z,path:aw},{title:"Cache",path:"\u002Fapi\u002Fmodule\u002Fcache"},{title:"Retry",path:"\u002Fapi\u002Fmodule\u002Fretry"},{title:"Timeout",path:"\u002Fapi\u002Fmodule\u002Ftimeout"},{title:"Ratelimit",path:"\u002Fapi\u002Fmodule\u002Fratelimit"},{title:"Bulkhead",path:"\u002Fapi\u002Fmodule\u002Fbulkhead"},{title:"Count Breaker",path:"\u002Fapi\u002Fmodule\u002Fbreaker\u002Fsliding\u002Fcount"},{title:"Time Breaker",path:"\u002Fapi\u002Fmodule\u002Fbreaker\u002Fsliding\u002Ftime"}]},{group:"Core Addons",links:[{title:"Prometheus",path:"http:\u002F\u002F135.39.45.156:8081"}]},{group:"Customization",links:[{title:"Create a module",path:"\u002Fapi\u002Fcreate-module"},{title:"Create a addon",path:"\u002Fapi\u002Fcreate-addon"}]}],toc:[],body:{type:I,children:[]},dir:V,path:"\u002F_sidebar",extension:U,slug:"_sidebar",createdAt:t,updatedAt:t}}}],fetch:[],mutations:void 0}}("text","element","span","token","punctuation"," ","left","keyword","\n","(",")","code","{","}","th","td","comment","control-flow","tr","2021-02-03T16:24:54.187Z","a","true",-1,"icon","icon-link","Fallback","operator",";","class-name","\n      ",2,"h2","function","\n    ","root","strong","new","\n          ","\n  ",".","\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n","table","thead","Name","Description","tbody",".md","\u002F","usage","Usage","options","Options","events","Events","methods","Methods","fallback","p","const","maybe-class-name","Circuit","=",":","\n        ","callback","parameter","err","if","err ","instanceof","MyError","\n            ","return","method","property-access","execute","\u002Fapi\u002Fmodule\u002Ffallback")));