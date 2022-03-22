(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1041],{24843:function(t,n,e){"use strict";e.r(n),e.d(n,{__N_SSG:function(){return a},default:function(){return r}});var i=e(41664),o=e(27606),s=e(48600),l=e(78917),d=e(85893);let c=[{title:"Add the Play CDN script to your HTML",body:()=>(0,d.jsxs)("p",{children:["Add the Play CDN script tag to the ",(0,d.jsx)("code",{children:"<head>"})," of your HTML file, and start using Tailwind\u2019s utility classes to style your content."]}),code:{name:"index.html",lang:"html",code:'  <!doctype html>\n  <html>\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n>   <script src="https://cdn.tailwindcss.com"><\/script>\n  </head>\n  <body>\n>   <h1 class="text-3xl font-bold underline">\n>     Hello world!\n>   </h1>\n  </body>\n  </html>'}},{title:"Try customizing your config",body:()=>(0,d.jsxs)("p",{children:["Edit the ",(0,d.jsx)("code",{children:"tailwind.config"})," object to"," ",(0,d.jsx)(i.default,{href:"/docs/configuration",children:(0,d.jsx)("a",{children:"customize your configuration"})})," ","with your own design tokens."]}),code:{name:"index.html",lang:"html",code:'  <!doctype html>\n  <html>\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <script src="https://cdn.tailwindcss.com"><\/script>\n>   <script>\n>     tailwind.config = {\n>       theme: {\n>         extend: {\n>           colors: {\n>             clifford: \'#da373d\',\n>           }\n>         }\n>       }\n>     }\n>   <\/script>\n  </head>\n  <body>\n    <h1 class="text-3xl font-bold underline **text-clifford**">\n      Hello world!\n    </h1>\n  </body>\n  </html>'}},{title:"Try adding some custom CSS",body:()=>(0,d.jsxs)("p",{children:["Use ",(0,d.jsx)("code",{children:'type="text/tailwindcss"'})," to add custom CSS that supports all of Tailwind's CSS features."]}),code:{name:"index.html",lang:"html",code:'  <!doctype html>\n  <html>\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <script src="https://cdn.tailwindcss.com"><\/script>\n>   <style type="text/tailwindcss">\n>     @layer utilities {\n>       .content-auto {\n>         content-visibility: auto;\n>       }\n>     }\n>   </style>\n  </head>\n  <body>\n>   <div class="lg:content-auto">\n      \x3c!-- ... --\x3e\n    </div>\n  </body>\n  </html>'}},{title:"Try working with a core plugin",body:()=>(0,d.jsxs)("p",{children:["Enable core plugins, like forms and typography, using the ",(0,d.jsx)("code",{children:"plugins"})," query parameter."]}),code:{name:"index.html",lang:"html",code:'  <!doctype html>\n  <html>\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n>   <script src="https://cdn.tailwindcss.com?plugins=forms,typography,aspect-ratio,line-clamp"><\/script>\n  </head>\n  <body>\n>   <div class="prose">\n      \x3c!-- ... --\x3e\n    </div>\n  </body>\n  </html>'}}];var a=!0;function r({code:t}){return(0,d.jsxs)(s.l,{children:[(0,d.jsxs)("div",{id:"content-wrapper",className:"relative z-10 prose prose-slate mb-16 max-w-3xl dark:prose-dark",children:[(0,d.jsx)("h3",{className:"sr-only",children:"Play CDN"}),(0,d.jsx)("p",{children:"Use the Play CDN to try Tailwind right in the browser without any build step. The Play CDN is designed for development purposes only, and is not the best choice for production."})]}),(0,d.jsx)(l.R,{level:4,steps:c,code:t})]})}r.layoutProps={meta:{title:"Installation: Play CDN",section:"Getting Started"},Layout:o.L,allowOverflow:!1}},76365:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/installation/play-cdn",function(){return e(24843)}])}},function(t){t.O(0,[9774,4327,946,2418,8600,2888,179],(function(){return n=76365,t(t.s=n);var n}));var n=t.O();_N_E=n}]);