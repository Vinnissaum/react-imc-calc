(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5714],{8874:function(e){"use strict";e.exports={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}},26905:function(e){e.exports=function(e,t,n,r,o){for(t=t.split?t.split("."):t,r=0;r<t.length;r++)e=e?e[t[r]]:o;return e===o?n:e}},34155:function(e){var t,n,r=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function l(e){if(t===setTimeout)return setTimeout(e,0);if((t===o||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"===typeof setTimeout?setTimeout:o}catch(e){t=o}try{n="function"===typeof clearTimeout?clearTimeout:a}catch(e){n=a}}();var s,c=[],i=!1,f=-1;function u(){i&&s&&(i=!1,s.length?c=s.concat(c):f=-1,c.length&&h())}function h(){if(!i){var e=l(u);i=!0;for(var t=c.length;t;){for(s=c,c=[];++f<t;)s&&s[f].run();f=-1,t=c.length}s=null,i=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===a||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function d(e,t){this.fun=e,this.array=t}function b(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new d(e,t)),1!==c.length||i||l(h)},d.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=b,r.addListener=b,r.once=b,r.off=b,r.removeListener=b,r.removeAllListeners=b,r.emit=b,r.prependListener=b,r.prependOnceListener=b,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}},8555:function(e){"use strict";e.exports={stdout:!1,stderr:!1}},69808:function(e,t,n){let r=n(14921);e.exports=(r.__esModule?r:{default:r}).default},14921:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,o=(r=n(51679))&&r.__esModule?r:{default:r};function a({version:e,from:t,to:n}){o.default.warn(`${t}-color-renamed`,[`As of Tailwind CSS ${e}, \`${t}\` has been renamed to \`${n}\`.`,"Update your configuration file to silence this warning."])}var l={inherit:"inherit",current:"currentColor",transparent:"transparent",black:"#000",white:"#fff",slate:{50:"#f8fafc",100:"#f1f5f9",200:"#e2e8f0",300:"#cbd5e1",400:"#94a3b8",500:"#64748b",600:"#475569",700:"#334155",800:"#1e293b",900:"#0f172a"},gray:{50:"#f9fafb",100:"#f3f4f6",200:"#e5e7eb",300:"#d1d5db",400:"#9ca3af",500:"#6b7280",600:"#4b5563",700:"#374151",800:"#1f2937",900:"#111827"},zinc:{50:"#fafafa",100:"#f4f4f5",200:"#e4e4e7",300:"#d4d4d8",400:"#a1a1aa",500:"#71717a",600:"#52525b",700:"#3f3f46",800:"#27272a",900:"#18181b"},neutral:{50:"#fafafa",100:"#f5f5f5",200:"#e5e5e5",300:"#d4d4d4",400:"#a3a3a3",500:"#737373",600:"#525252",700:"#404040",800:"#262626",900:"#171717"},stone:{50:"#fafaf9",100:"#f5f5f4",200:"#e7e5e4",300:"#d6d3d1",400:"#a8a29e",500:"#78716c",600:"#57534e",700:"#44403c",800:"#292524",900:"#1c1917"},red:{50:"#fef2f2",100:"#fee2e2",200:"#fecaca",300:"#fca5a5",400:"#f87171",500:"#ef4444",600:"#dc2626",700:"#b91c1c",800:"#991b1b",900:"#7f1d1d"},orange:{50:"#fff7ed",100:"#ffedd5",200:"#fed7aa",300:"#fdba74",400:"#fb923c",500:"#f97316",600:"#ea580c",700:"#c2410c",800:"#9a3412",900:"#7c2d12"},amber:{50:"#fffbeb",100:"#fef3c7",200:"#fde68a",300:"#fcd34d",400:"#fbbf24",500:"#f59e0b",600:"#d97706",700:"#b45309",800:"#92400e",900:"#78350f"},yellow:{50:"#fefce8",100:"#fef9c3",200:"#fef08a",300:"#fde047",400:"#facc15",500:"#eab308",600:"#ca8a04",700:"#a16207",800:"#854d0e",900:"#713f12"},lime:{50:"#f7fee7",100:"#ecfccb",200:"#d9f99d",300:"#bef264",400:"#a3e635",500:"#84cc16",600:"#65a30d",700:"#4d7c0f",800:"#3f6212",900:"#365314"},green:{50:"#f0fdf4",100:"#dcfce7",200:"#bbf7d0",300:"#86efac",400:"#4ade80",500:"#22c55e",600:"#16a34a",700:"#15803d",800:"#166534",900:"#14532d"},emerald:{50:"#ecfdf5",100:"#d1fae5",200:"#a7f3d0",300:"#6ee7b7",400:"#34d399",500:"#10b981",600:"#059669",700:"#047857",800:"#065f46",900:"#064e3b"},teal:{50:"#f0fdfa",100:"#ccfbf1",200:"#99f6e4",300:"#5eead4",400:"#2dd4bf",500:"#14b8a6",600:"#0d9488",700:"#0f766e",800:"#115e59",900:"#134e4a"},cyan:{50:"#ecfeff",100:"#cffafe",200:"#a5f3fc",300:"#67e8f9",400:"#22d3ee",500:"#06b6d4",600:"#0891b2",700:"#0e7490",800:"#155e75",900:"#164e63"},sky:{50:"#f0f9ff",100:"#e0f2fe",200:"#bae6fd",300:"#7dd3fc",400:"#38bdf8",500:"#0ea5e9",600:"#0284c7",700:"#0369a1",800:"#075985",900:"#0c4a6e"},blue:{50:"#eff6ff",100:"#dbeafe",200:"#bfdbfe",300:"#93c5fd",400:"#60a5fa",500:"#3b82f6",600:"#2563eb",700:"#1d4ed8",800:"#1e40af",900:"#1e3a8a"},indigo:{50:"#eef2ff",100:"#e0e7ff",200:"#c7d2fe",300:"#a5b4fc",400:"#818cf8",500:"#6366f1",600:"#4f46e5",700:"#4338ca",800:"#3730a3",900:"#312e81"},violet:{50:"#f5f3ff",100:"#ede9fe",200:"#ddd6fe",300:"#c4b5fd",400:"#a78bfa",500:"#8b5cf6",600:"#7c3aed",700:"#6d28d9",800:"#5b21b6",900:"#4c1d95"},purple:{50:"#faf5ff",100:"#f3e8ff",200:"#e9d5ff",300:"#d8b4fe",400:"#c084fc",500:"#a855f7",600:"#9333ea",700:"#7e22ce",800:"#6b21a8",900:"#581c87"},fuchsia:{50:"#fdf4ff",100:"#fae8ff",200:"#f5d0fe",300:"#f0abfc",400:"#e879f9",500:"#d946ef",600:"#c026d3",700:"#a21caf",800:"#86198f",900:"#701a75"},pink:{50:"#fdf2f8",100:"#fce7f3",200:"#fbcfe8",300:"#f9a8d4",400:"#f472b6",500:"#ec4899",600:"#db2777",700:"#be185d",800:"#9d174d",900:"#831843"},rose:{50:"#fff1f2",100:"#ffe4e6",200:"#fecdd3",300:"#fda4af",400:"#fb7185",500:"#f43f5e",600:"#e11d48",700:"#be123c",800:"#9f1239",900:"#881337"},get lightBlue(){return a({version:"v2.2",from:"lightBlue",to:"sky"}),this.sky},get warmGray(){return a({version:"v3.0",from:"warmGray",to:"stone"}),this.stone},get trueGray(){return a({version:"v3.0",from:"trueGray",to:"neutral"}),this.neutral},get coolGray(){return a({version:"v3.0",from:"coolGray",to:"gray"}),this.gray},get blueGray(){return a({version:"v3.0",from:"blueGray",to:"slate"}),this.slate}};t.default=l},51679:function(e,t,n){"use strict";var r=n(34155);Object.defineProperty(t,"__esModule",{value:!0}),t.dim=function(e){return a.default.dim(e)},t.default=void 0;var o,a=(o=n(8290))&&o.__esModule?o:{default:o};let l=new Set;function s(e,t,n){void 0===r.env.JEST_WORKER_ID&&(n&&l.has(n)||(n&&l.add(n),console.warn(""),t.forEach((t=>console.warn(e,"-",t)))))}var c={info(e,t){s(a.default.bold.cyan("info"),...Array.isArray(e)?[e]:[t,e])},warn(e,t){s(a.default.bold.yellow("warn"),...Array.isArray(e)?[e]:[t,e])},risk(e,t){s(a.default.bold.magenta("risk"),...Array.isArray(e)?[e]:[t,e])}};t.default=c},50998:function(e,t,n){"use strict";e=n.nmd(e);const r=(e,t)=>(...n)=>`\x1b[${e(...n)+t}m`,o=(e,t)=>(...n)=>{const r=e(...n);return`\x1b[${38+t};5;${r}m`},a=(e,t)=>(...n)=>{const r=e(...n);return`\x1b[${38+t};2;${r[0]};${r[1]};${r[2]}m`},l=e=>e,s=(e,t,n)=>[e,t,n],c=(e,t,n)=>{Object.defineProperty(e,t,{get:()=>{const r=n();return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0}),r},enumerable:!0,configurable:!0})};let i;const f=(e,t,r,o)=>{void 0===i&&(i=n(37876));const a=o?10:0,l={};for(const[n,s]of Object.entries(i)){const o="ansi16"===n?"ansi":n;n===t?l[o]=e(r,a):"object"===typeof s&&(l[o]=e(s[t],a))}return l};Object.defineProperty(e,"exports",{enumerable:!0,get:function(){const e=new Map,t={modifier:{reset:[0,0],bold:[1,22],dim:[2,22],italic:[3,23],underline:[4,24],inverse:[7,27],hidden:[8,28],strikethrough:[9,29]},color:{black:[30,39],red:[31,39],green:[32,39],yellow:[33,39],blue:[34,39],magenta:[35,39],cyan:[36,39],white:[37,39],blackBright:[90,39],redBright:[91,39],greenBright:[92,39],yellowBright:[93,39],blueBright:[94,39],magentaBright:[95,39],cyanBright:[96,39],whiteBright:[97,39]},bgColor:{bgBlack:[40,49],bgRed:[41,49],bgGreen:[42,49],bgYellow:[43,49],bgBlue:[44,49],bgMagenta:[45,49],bgCyan:[46,49],bgWhite:[47,49],bgBlackBright:[100,49],bgRedBright:[101,49],bgGreenBright:[102,49],bgYellowBright:[103,49],bgBlueBright:[104,49],bgMagentaBright:[105,49],bgCyanBright:[106,49],bgWhiteBright:[107,49]}};t.color.gray=t.color.blackBright,t.bgColor.bgGray=t.bgColor.bgBlackBright,t.color.grey=t.color.blackBright,t.bgColor.bgGrey=t.bgColor.bgBlackBright;for(const[n,r]of Object.entries(t)){for(const[n,o]of Object.entries(r))t[n]={open:`\x1b[${o[0]}m`,close:`\x1b[${o[1]}m`},r[n]=t[n],e.set(o[0],o[1]);Object.defineProperty(t,n,{value:r,enumerable:!1})}return Object.defineProperty(t,"codes",{value:e,enumerable:!1}),t.color.close="\x1b[39m",t.bgColor.close="\x1b[49m",c(t.color,"ansi",(()=>f(r,"ansi16",l,!1))),c(t.color,"ansi256",(()=>f(o,"ansi256",l,!1))),c(t.color,"ansi16m",(()=>f(a,"rgb",s,!1))),c(t.bgColor,"ansi",(()=>f(r,"ansi16",l,!0))),c(t.bgColor,"ansi256",(()=>f(o,"ansi256",l,!0))),c(t.bgColor,"ansi16m",(()=>f(a,"rgb",s,!0))),t}})},8290:function(e,t,n){"use strict";const r=n(50998),{stdout:o,stderr:a}=n(8555),{stringReplaceAll:l,stringEncaseCRLFWithFirstIndex:s}=n(8489),{isArray:c}=Array,i=["ansi","ansi","ansi256","ansi16m"],f=Object.create(null);class u{constructor(e){return h(e)}}const h=e=>{const t={};return((e,t={})=>{if(t.level&&!(Number.isInteger(t.level)&&t.level>=0&&t.level<=3))throw new Error("The `level` option should be an integer from 0 to 3");const n=o?o.level:0;e.level=void 0===t.level?n:t.level})(t,e),t.template=(...e)=>w(t.template,...e),Object.setPrototypeOf(t,d.prototype),Object.setPrototypeOf(t.template,t),t.template.constructor=()=>{throw new Error("`chalk.constructor()` is deprecated. Use `new chalk.Instance()` instead.")},t.template.Instance=u,t.template};function d(e){return h(e)}for(const[M,x]of Object.entries(r))f[M]={get(){const e=y(this,p(x.open,x.close,this._styler),this._isEmpty);return Object.defineProperty(this,M,{value:e}),e}};f.visible={get(){const e=y(this,this._styler,!0);return Object.defineProperty(this,"visible",{value:e}),e}};const b=["rgb","hex","keyword","hsl","hsv","hwb","ansi","ansi256"];for(const M of b)f[M]={get(){const{level:e}=this;return function(...t){const n=p(r.color[i[e]][M](...t),r.color.close,this._styler);return y(this,n,this._isEmpty)}}};for(const M of b){f["bg"+M[0].toUpperCase()+M.slice(1)]={get(){const{level:e}=this;return function(...t){const n=p(r.bgColor[i[e]][M](...t),r.bgColor.close,this._styler);return y(this,n,this._isEmpty)}}}}const g=Object.defineProperties((()=>{}),{...f,level:{enumerable:!0,get(){return this._generator.level},set(e){this._generator.level=e}}}),p=(e,t,n)=>{let r,o;return void 0===n?(r=e,o=t):(r=n.openAll+e,o=t+n.closeAll),{open:e,close:t,openAll:r,closeAll:o,parent:n}},y=(e,t,n)=>{const r=(...e)=>c(e[0])&&c(e[0].raw)?m(r,w(r,...e)):m(r,1===e.length?""+e[0]:e.join(" "));return Object.setPrototypeOf(r,g),r._generator=e,r._styler=t,r._isEmpty=n,r},m=(e,t)=>{if(e.level<=0||!t)return e._isEmpty?"":t;let n=e._styler;if(void 0===n)return t;const{openAll:r,closeAll:o}=n;if(-1!==t.indexOf("\x1b"))for(;void 0!==n;)t=l(t,n.close,n.open),n=n.parent;const a=t.indexOf("\n");return-1!==a&&(t=s(t,o,r,a)),r+t+o};let v;const w=(e,...t)=>{const[r]=t;if(!c(r)||!c(r.raw))return t.join(" ");const o=t.slice(1),a=[r.raw[0]];for(let n=1;n<r.length;n++)a.push(String(o[n-1]).replace(/[{}\\]/g,"\\$&"),String(r.raw[n]));return void 0===v&&(v=n(35348)),v(e,a.join(""))};Object.defineProperties(d.prototype,f);const k=d();k.supportsColor=o,k.stderr=d({level:a?a.level:0}),k.stderr.supportsColor=a,e.exports=k},35348:function(e){"use strict";const t=/(?:\\(u(?:[a-f\d]{4}|\{[a-f\d]{1,6}\})|x[a-f\d]{2}|.))|(?:\{(~)?(\w+(?:\([^)]*\))?(?:\.\w+(?:\([^)]*\))?)*)(?:[ \t]|(?=\r?\n)))|(\})|((?:.|[\r\n\f])+?)/gi,n=/(?:^|\.)(\w+)(?:\(([^)]*)\))?/g,r=/^(['"])((?:\\.|(?!\1)[^\\])*)\1$/,o=/\\(u(?:[a-f\d]{4}|{[a-f\d]{1,6}})|x[a-f\d]{2}|.)|([^\\])/gi,a=new Map([["n","\n"],["r","\r"],["t","\t"],["b","\b"],["f","\f"],["v","\v"],["0","\0"],["\\","\\"],["e","\x1b"],["a","\x07"]]);function l(e){const t="u"===e[0],n="{"===e[1];return t&&!n&&5===e.length||"x"===e[0]&&3===e.length?String.fromCharCode(parseInt(e.slice(1),16)):t&&n?String.fromCodePoint(parseInt(e.slice(2,-1),16)):a.get(e)||e}function s(e,t){const n=[],a=t.trim().split(/\s*,\s*/g);let s;for(const c of a){const t=Number(c);if(Number.isNaN(t)){if(!(s=c.match(r)))throw new Error(`Invalid Chalk template style argument: ${c} (in style '${e}')`);n.push(s[2].replace(o,((e,t,n)=>t?l(t):n)))}else n.push(t)}return n}function c(e){n.lastIndex=0;const t=[];let r;for(;null!==(r=n.exec(e));){const e=r[1];if(r[2]){const n=s(e,r[2]);t.push([e].concat(n))}else t.push([e])}return t}function i(e,t){const n={};for(const o of t)for(const e of o.styles)n[e[0]]=o.inverse?null:e.slice(1);let r=e;for(const[o,a]of Object.entries(n))if(Array.isArray(a)){if(!(o in r))throw new Error(`Unknown Chalk style: ${o}`);r=a.length>0?r[o](...a):r[o]}return r}e.exports=(e,n)=>{const r=[],o=[];let a=[];if(n.replace(t,((t,n,s,f,u,h)=>{if(n)a.push(l(n));else if(f){const t=a.join("");a=[],o.push(0===r.length?t:i(e,r)(t)),r.push({inverse:s,styles:c(f)})}else if(u){if(0===r.length)throw new Error("Found extraneous } in Chalk template literal");o.push(i(e,r)(a.join(""))),a=[],r.pop()}else a.push(h)})),o.push(a.join("")),r.length>0){const e=`Chalk template literal is missing ${r.length} closing bracket${1===r.length?"":"s"} (\`}\`)`;throw new Error(e)}return o.join("")}},8489:function(e){"use strict";e.exports={stringReplaceAll:(e,t,n)=>{let r=e.indexOf(t);if(-1===r)return e;const o=t.length;let a=0,l="";do{l+=e.substr(a,r-a)+t+n,a=r+o,r=e.indexOf(t,a)}while(-1!==r);return l+=e.substr(a),l},stringEncaseCRLFWithFirstIndex:(e,t,n,r)=>{let o=0,a="";do{const l="\r"===e[r-1];a+=e.substr(o,(l?r-1:r)-o)+t+(l?"\r\n":"\n")+n,o=r+1,r=e.indexOf("\n",o)}while(-1!==r);return a+=e.substr(o),a}}},64644:function(e,t,n){const r=n(8874),o={};for(const l of Object.keys(r))o[r[l]]=l;const a={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}};e.exports=a;for(const l of Object.keys(a)){if(!("channels"in a[l]))throw new Error("missing channels property: "+l);if(!("labels"in a[l]))throw new Error("missing channel labels property: "+l);if(a[l].labels.length!==a[l].channels)throw new Error("channel and label counts mismatch: "+l);const{channels:e,labels:t}=a[l];delete a[l].channels,delete a[l].labels,Object.defineProperty(a[l],"channels",{value:e}),Object.defineProperty(a[l],"labels",{value:t})}a.rgb.hsl=function(e){const t=e[0]/255,n=e[1]/255,r=e[2]/255,o=Math.min(t,n,r),a=Math.max(t,n,r),l=a-o;let s,c;a===o?s=0:t===a?s=(n-r)/l:n===a?s=2+(r-t)/l:r===a&&(s=4+(t-n)/l),s=Math.min(60*s,360),s<0&&(s+=360);const i=(o+a)/2;return c=a===o?0:i<=.5?l/(a+o):l/(2-a-o),[s,100*c,100*i]},a.rgb.hsv=function(e){let t,n,r,o,a;const l=e[0]/255,s=e[1]/255,c=e[2]/255,i=Math.max(l,s,c),f=i-Math.min(l,s,c),u=function(e){return(i-e)/6/f+.5};return 0===f?(o=0,a=0):(a=f/i,t=u(l),n=u(s),r=u(c),l===i?o=r-n:s===i?o=1/3+t-r:c===i&&(o=2/3+n-t),o<0?o+=1:o>1&&(o-=1)),[360*o,100*a,100*i]},a.rgb.hwb=function(e){const t=e[0],n=e[1];let r=e[2];const o=a.rgb.hsl(e)[0],l=1/255*Math.min(t,Math.min(n,r));return r=1-1/255*Math.max(t,Math.max(n,r)),[o,100*l,100*r]},a.rgb.cmyk=function(e){const t=e[0]/255,n=e[1]/255,r=e[2]/255,o=Math.min(1-t,1-n,1-r);return[100*((1-t-o)/(1-o)||0),100*((1-n-o)/(1-o)||0),100*((1-r-o)/(1-o)||0),100*o]},a.rgb.keyword=function(e){const t=o[e];if(t)return t;let n,a=1/0;for(const o of Object.keys(r)){const t=r[o],c=(s=t,((l=e)[0]-s[0])**2+(l[1]-s[1])**2+(l[2]-s[2])**2);c<a&&(a=c,n=o)}var l,s;return n},a.keyword.rgb=function(e){return r[e]},a.rgb.xyz=function(e){let t=e[0]/255,n=e[1]/255,r=e[2]/255;t=t>.04045?((t+.055)/1.055)**2.4:t/12.92,n=n>.04045?((n+.055)/1.055)**2.4:n/12.92,r=r>.04045?((r+.055)/1.055)**2.4:r/12.92;return[100*(.4124*t+.3576*n+.1805*r),100*(.2126*t+.7152*n+.0722*r),100*(.0193*t+.1192*n+.9505*r)]},a.rgb.lab=function(e){const t=a.rgb.xyz(e);let n=t[0],r=t[1],o=t[2];n/=95.047,r/=100,o/=108.883,n=n>.008856?n**(1/3):7.787*n+16/116,r=r>.008856?r**(1/3):7.787*r+16/116,o=o>.008856?o**(1/3):7.787*o+16/116;return[116*r-16,500*(n-r),200*(r-o)]},a.hsl.rgb=function(e){const t=e[0]/360,n=e[1]/100,r=e[2]/100;let o,a,l;if(0===n)return l=255*r,[l,l,l];o=r<.5?r*(1+n):r+n-r*n;const s=2*r-o,c=[0,0,0];for(let i=0;i<3;i++)a=t+1/3*-(i-1),a<0&&a++,a>1&&a--,l=6*a<1?s+6*(o-s)*a:2*a<1?o:3*a<2?s+(o-s)*(2/3-a)*6:s,c[i]=255*l;return c},a.hsl.hsv=function(e){const t=e[0];let n=e[1]/100,r=e[2]/100,o=n;const a=Math.max(r,.01);r*=2,n*=r<=1?r:2-r,o*=a<=1?a:2-a;return[t,100*(0===r?2*o/(a+o):2*n/(r+n)),100*((r+n)/2)]},a.hsv.rgb=function(e){const t=e[0]/60,n=e[1]/100;let r=e[2]/100;const o=Math.floor(t)%6,a=t-Math.floor(t),l=255*r*(1-n),s=255*r*(1-n*a),c=255*r*(1-n*(1-a));switch(r*=255,o){case 0:return[r,c,l];case 1:return[s,r,l];case 2:return[l,r,c];case 3:return[l,s,r];case 4:return[c,l,r];case 5:return[r,l,s]}},a.hsv.hsl=function(e){const t=e[0],n=e[1]/100,r=e[2]/100,o=Math.max(r,.01);let a,l;l=(2-n)*r;const s=(2-n)*o;return a=n*o,a/=s<=1?s:2-s,a=a||0,l/=2,[t,100*a,100*l]},a.hwb.rgb=function(e){const t=e[0]/360;let n=e[1]/100,r=e[2]/100;const o=n+r;let a;o>1&&(n/=o,r/=o);const l=Math.floor(6*t),s=1-r;a=6*t-l,0!==(1&l)&&(a=1-a);const c=n+a*(s-n);let i,f,u;switch(l){default:case 6:case 0:i=s,f=c,u=n;break;case 1:i=c,f=s,u=n;break;case 2:i=n,f=s,u=c;break;case 3:i=n,f=c,u=s;break;case 4:i=c,f=n,u=s;break;case 5:i=s,f=n,u=c}return[255*i,255*f,255*u]},a.cmyk.rgb=function(e){const t=e[0]/100,n=e[1]/100,r=e[2]/100,o=e[3]/100;return[255*(1-Math.min(1,t*(1-o)+o)),255*(1-Math.min(1,n*(1-o)+o)),255*(1-Math.min(1,r*(1-o)+o))]},a.xyz.rgb=function(e){const t=e[0]/100,n=e[1]/100,r=e[2]/100;let o,a,l;return o=3.2406*t+-1.5372*n+-.4986*r,a=-.9689*t+1.8758*n+.0415*r,l=.0557*t+-.204*n+1.057*r,o=o>.0031308?1.055*o**(1/2.4)-.055:12.92*o,a=a>.0031308?1.055*a**(1/2.4)-.055:12.92*a,l=l>.0031308?1.055*l**(1/2.4)-.055:12.92*l,o=Math.min(Math.max(0,o),1),a=Math.min(Math.max(0,a),1),l=Math.min(Math.max(0,l),1),[255*o,255*a,255*l]},a.xyz.lab=function(e){let t=e[0],n=e[1],r=e[2];t/=95.047,n/=100,r/=108.883,t=t>.008856?t**(1/3):7.787*t+16/116,n=n>.008856?n**(1/3):7.787*n+16/116,r=r>.008856?r**(1/3):7.787*r+16/116;return[116*n-16,500*(t-n),200*(n-r)]},a.lab.xyz=function(e){let t,n,r;n=(e[0]+16)/116,t=e[1]/500+n,r=n-e[2]/200;const o=n**3,a=t**3,l=r**3;return n=o>.008856?o:(n-16/116)/7.787,t=a>.008856?a:(t-16/116)/7.787,r=l>.008856?l:(r-16/116)/7.787,t*=95.047,n*=100,r*=108.883,[t,n,r]},a.lab.lch=function(e){const t=e[0],n=e[1],r=e[2];let o;o=360*Math.atan2(r,n)/2/Math.PI,o<0&&(o+=360);return[t,Math.sqrt(n*n+r*r),o]},a.lch.lab=function(e){const t=e[0],n=e[1],r=e[2]/360*2*Math.PI;return[t,n*Math.cos(r),n*Math.sin(r)]},a.rgb.ansi16=function(e,t=null){const[n,r,o]=e;let l=null===t?a.rgb.hsv(e)[2]:t;if(l=Math.round(l/50),0===l)return 30;let s=30+(Math.round(o/255)<<2|Math.round(r/255)<<1|Math.round(n/255));return 2===l&&(s+=60),s},a.hsv.ansi16=function(e){return a.rgb.ansi16(a.hsv.rgb(e),e[2])},a.rgb.ansi256=function(e){const t=e[0],n=e[1],r=e[2];if(t===n&&n===r)return t<8?16:t>248?231:Math.round((t-8)/247*24)+232;return 16+36*Math.round(t/255*5)+6*Math.round(n/255*5)+Math.round(r/255*5)},a.ansi16.rgb=function(e){let t=e%10;if(0===t||7===t)return e>50&&(t+=3.5),t=t/10.5*255,[t,t,t];const n=.5*(1+~~(e>50));return[(1&t)*n*255,(t>>1&1)*n*255,(t>>2&1)*n*255]},a.ansi256.rgb=function(e){if(e>=232){const t=10*(e-232)+8;return[t,t,t]}let t;e-=16;return[Math.floor(e/36)/5*255,Math.floor((t=e%36)/6)/5*255,t%6/5*255]},a.rgb.hex=function(e){const t=(((255&Math.round(e[0]))<<16)+((255&Math.round(e[1]))<<8)+(255&Math.round(e[2]))).toString(16).toUpperCase();return"000000".substring(t.length)+t},a.hex.rgb=function(e){const t=e.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!t)return[0,0,0];let n=t[0];3===t[0].length&&(n=n.split("").map((e=>e+e)).join(""));const r=parseInt(n,16);return[r>>16&255,r>>8&255,255&r]},a.rgb.hcg=function(e){const t=e[0]/255,n=e[1]/255,r=e[2]/255,o=Math.max(Math.max(t,n),r),a=Math.min(Math.min(t,n),r),l=o-a;let s,c;return s=l<1?a/(1-l):0,c=l<=0?0:o===t?(n-r)/l%6:o===n?2+(r-t)/l:4+(t-n)/l,c/=6,c%=1,[360*c,100*l,100*s]},a.hsl.hcg=function(e){const t=e[1]/100,n=e[2]/100,r=n<.5?2*t*n:2*t*(1-n);let o=0;return r<1&&(o=(n-.5*r)/(1-r)),[e[0],100*r,100*o]},a.hsv.hcg=function(e){const t=e[1]/100,n=e[2]/100,r=t*n;let o=0;return r<1&&(o=(n-r)/(1-r)),[e[0],100*r,100*o]},a.hcg.rgb=function(e){const t=e[0]/360,n=e[1]/100,r=e[2]/100;if(0===n)return[255*r,255*r,255*r];const o=[0,0,0],a=t%1*6,l=a%1,s=1-l;let c=0;switch(Math.floor(a)){case 0:o[0]=1,o[1]=l,o[2]=0;break;case 1:o[0]=s,o[1]=1,o[2]=0;break;case 2:o[0]=0,o[1]=1,o[2]=l;break;case 3:o[0]=0,o[1]=s,o[2]=1;break;case 4:o[0]=l,o[1]=0,o[2]=1;break;default:o[0]=1,o[1]=0,o[2]=s}return c=(1-n)*r,[255*(n*o[0]+c),255*(n*o[1]+c),255*(n*o[2]+c)]},a.hcg.hsv=function(e){const t=e[1]/100,n=t+e[2]/100*(1-t);let r=0;return n>0&&(r=t/n),[e[0],100*r,100*n]},a.hcg.hsl=function(e){const t=e[1]/100,n=e[2]/100*(1-t)+.5*t;let r=0;return n>0&&n<.5?r=t/(2*n):n>=.5&&n<1&&(r=t/(2*(1-n))),[e[0],100*r,100*n]},a.hcg.hwb=function(e){const t=e[1]/100,n=t+e[2]/100*(1-t);return[e[0],100*(n-t),100*(1-n)]},a.hwb.hcg=function(e){const t=e[1]/100,n=1-e[2]/100,r=n-t;let o=0;return r<1&&(o=(n-r)/(1-r)),[e[0],100*r,100*o]},a.apple.rgb=function(e){return[e[0]/65535*255,e[1]/65535*255,e[2]/65535*255]},a.rgb.apple=function(e){return[e[0]/255*65535,e[1]/255*65535,e[2]/255*65535]},a.gray.rgb=function(e){return[e[0]/100*255,e[0]/100*255,e[0]/100*255]},a.gray.hsl=function(e){return[0,0,e[0]]},a.gray.hsv=a.gray.hsl,a.gray.hwb=function(e){return[0,100,e[0]]},a.gray.cmyk=function(e){return[0,0,0,e[0]]},a.gray.lab=function(e){return[e[0],0,0]},a.gray.hex=function(e){const t=255&Math.round(e[0]/100*255),n=((t<<16)+(t<<8)+t).toString(16).toUpperCase();return"000000".substring(n.length)+n},a.rgb.gray=function(e){return[(e[0]+e[1]+e[2])/3/255*100]}},37876:function(e,t,n){const r=n(64644),o=n(70729),a={};Object.keys(r).forEach((e=>{a[e]={},Object.defineProperty(a[e],"channels",{value:r[e].channels}),Object.defineProperty(a[e],"labels",{value:r[e].labels});const t=o(e);Object.keys(t).forEach((n=>{const r=t[n];a[e][n]=function(e){const t=function(...t){const n=t[0];if(void 0===n||null===n)return n;n.length>1&&(t=n);const r=e(t);if("object"===typeof r)for(let e=r.length,o=0;o<e;o++)r[o]=Math.round(r[o]);return r};return"conversion"in e&&(t.conversion=e.conversion),t}(r),a[e][n].raw=function(e){const t=function(...t){const n=t[0];return void 0===n||null===n?n:(n.length>1&&(t=n),e(t))};return"conversion"in e&&(t.conversion=e.conversion),t}(r)}))})),e.exports=a},70729:function(e,t,n){const r=n(64644);function o(e){const t=function(){const e={},t=Object.keys(r);for(let n=t.length,r=0;r<n;r++)e[t[r]]={distance:-1,parent:null};return e}(),n=[e];for(t[e].distance=0;n.length;){const e=n.pop(),o=Object.keys(r[e]);for(let r=o.length,a=0;a<r;a++){const r=o[a],l=t[r];-1===l.distance&&(l.distance=t[e].distance+1,l.parent=e,n.unshift(r))}}return t}function a(e,t){return function(n){return t(e(n))}}function l(e,t){const n=[t[e].parent,e];let o=r[t[e].parent][e],l=t[e].parent;for(;t[l].parent;)n.unshift(t[l].parent),o=a(r[t[l].parent][l],o),l=t[l].parent;return o.conversion=n,o}e.exports=function(e){const t=o(e),n={},r=Object.keys(t);for(let o=r.length,a=0;a<o;a++){const e=r[a];null!==t[e].parent&&(n[e]=l(e,t))}return n}}}]);