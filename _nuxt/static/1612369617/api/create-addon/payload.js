__NUXT_JSONP__("/api/create-addon", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I){return {data:[{article:{title:"Mollitia - API - Create an addon",toc:[],body:{type:q,children:[{type:b,tag:"h1",props:{id:"create-an-addon"},children:[{type:b,tag:w,props:{href:"#create-an-addon",ariaHidden:"true",tabIndex:-1},children:[{type:b,tag:c,props:{className:["icon","icon-link"]},children:[]}]},{type:a,value:"Create an addon"}]},{type:a,value:g},{type:b,tag:m,props:{},children:[{type:a,value:"Creating an addon is similar as "},{type:b,tag:"nuxt-link",props:{to:x},children:[{type:a,value:"creating a module"}]},{type:a,value:", you should implement the "},{type:b,tag:"strong",props:{},children:[{type:a,value:"Mollitia.Addon"}]},{type:a,value:" interface."}]},{type:a,value:g},{type:b,tag:m,props:{},children:[{type:a,value:"You can then overload some useful methods in order to modify the base "},{type:b,tag:y,props:{},children:[{type:a,value:n}]},{type:a,value:" behavior."}]},{type:a,value:g},{type:b,tag:m,props:{},children:[{type:a,value:"The best way to understand what you can do with an addon is to check out existing ones."}]},{type:a,value:g},{type:b,tag:m,props:{},children:[{type:a,value:"Feel free to check out the "},{type:b,tag:w,props:{href:"https:\u002F\u002Fgithub.com\u002Fgenesys\u002Fmollitia-prometheus",rel:["nofollow","noopener","noreferrer"],target:"_blank"},children:[{type:a,value:"Prometheus Addon"}]},{type:a,value:" as learning base."}]},{type:a,value:g},{type:b,tag:"div",props:{className:["nuxt-content-highlight"]},children:[{type:b,tag:"pre",props:{className:["language-javascript","line-numbers"]},children:[{type:b,tag:y,props:{},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:"\u002F\u002F Imports the library"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:"const"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,z]},children:[{type:a,value:n}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,"operator"]},children:[{type:a,value:"="}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:"require"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,"string"]},children:[{type:a,value:"'mollitia'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:A}]},{type:a,value:B},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:"\u002F\u002F Creates a class"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:"class"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:C}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:"implements"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:n},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:D}]},{type:a,value:"Addon"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:"\u002F\u002F Called when a circuit is created"}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:"onCircuitCreate"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,E]},children:[{type:a,value:"circuit"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:F}]},{type:a,value:G}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:H},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:"\u002F\u002F Feel free to modify the circuit behavior, and add properties to it"}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:"\u002F\u002F Called when a module is created"}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:"onModuleCreate"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,E]},children:[{type:a,value:"module"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:F}]},{type:a,value:G}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:H},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:"\u002F\u002F Feel free to modify the module behavior, and add properties to it"}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:B},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:"\u002F\u002F Usage:"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,z]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:D}]},{type:b,tag:c,props:{className:[d,"method",p,"property-access"]},children:[{type:a,value:"use"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:"new"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:C}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:A}]},{type:a,value:g}]}]}]}]},dir:"\u002Fapi",path:I,extension:u,slug:"create-addon",createdAt:j,updatedAt:j,navbar:{links:[{title:"Home",path:v}],github:{link:"https:\u002F\u002Fgithub.com\u002Fmollitia\u002Fmollitia"},toc:[],body:{type:q,children:[]},dir:v,path:"\u002F_navbar",extension:u,slug:"_navbar",createdAt:j,updatedAt:j},sidebar:{links:[{group:"A Quick Overview",links:[{title:"Introduction",path:"\u002Foverview\u002Fintroduction"},{title:"Getting Started",path:"\u002Foverview\u002Fgetting-started"}]},{title:"The Circuit",path:"\u002Fapi\u002Fcircuit"},{group:"Core Modules",links:[{title:"Fallback",path:"\u002Fapi\u002Fmodule\u002Ffallback"},{title:"Cache",path:"\u002Fapi\u002Fmodule\u002Fcache"},{title:"Retry",path:"\u002Fapi\u002Fmodule\u002Fretry"},{title:"Timeout",path:"\u002Fapi\u002Fmodule\u002Ftimeout"},{title:"Ratelimit",path:"\u002Fapi\u002Fmodule\u002Fratelimit"},{title:"Bulkhead",path:"\u002Fapi\u002Fmodule\u002Fbulkhead"},{title:"Count Breaker",path:"\u002Fapi\u002Fmodule\u002Fbreaker\u002Fsliding\u002Fcount"},{title:"Time Breaker",path:"\u002Fapi\u002Fmodule\u002Fbreaker\u002Fsliding\u002Ftime"}]},{group:"Core Addons",links:[{title:"Prometheus",path:"http:\u002F\u002F135.39.45.156:8081"}]},{group:"Customization",links:[{title:"Create a module",path:x},{title:"Create a addon",path:I}]}],toc:[],body:{type:q,children:[]},dir:v,path:"\u002F_sidebar",extension:u,slug:"_sidebar",createdAt:j,updatedAt:j}}}],fetch:[],mutations:void 0}}("text","element","span","token","punctuation"," ","\n","comment","\n  ","2021-02-03T16:24:54.187Z","(",")","p","Mollitia","keyword","function","root","class-name","{","}",".md","\u002F","a","\u002Fapi\u002Fcreate-module","code","maybe-class-name",";","\n\n","UselessAddon",".","parameter",","," options","\n    ","\u002Fapi\u002Fcreate-addon")));