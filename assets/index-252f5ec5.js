(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function Jt(t){if(t!=="*"&&t!==""&&!t.startsWith("/"))throw new Error(`route '${t}' does not start with a '/' nor is it an empty string`)}function ut(t){return Jt(t),t}function Ct(t){const e=_(t.baseURL||""),n=t.hashRouter?"/#":"",s=e+n,o=document.querySelector("#app");let i;const r=l=>()=>{window.history.pushState(null,"",s+l),u()},[c,[a]]=t.providers.map(l=>l(r)).map(l=>{var p;return((p=l.mixins)==null?void 0:p.reduce((h,g)=>g(h),l))??l}).filter(l=>!l.disabled).map(l=>(l.path=_(s+l.path),l)).partition(l=>l.path!==s+"*"),u=()=>{var g,f;const l=_(location.pathname+location.hash),p=t.hashRouter&&l===e?s:l,h=c.find(O=>O.path===p)??a;(g=i==null?void 0:i.destruct)==null||g.call(i),i=h,h.forceReload&&Pt(h.path),o.innerHTML=h.html??"",(f=h.construct)==null||f.call(h)};window.addEventListener("popstate",u),window.addEventListener("load",u),document.addEventListener("click",l=>{const p=l.target;p.tagName==="A"&&p.getAttribute("data-client")!==null&&(l.preventDefault(),r(p.getAttribute("href"))())})}function Pt(t){const e=`${t}:reloaded`;sessionStorage.getItem(e)?sessionStorage.removeItem(e):(sessionStorage.setItem(e,"true"),window.location.reload())}const _=t=>ut(t.endsWith("/")?t.slice(0,-1):t);const Et=`
  <div id="e404__background-img">
    <div id="e404__code">
      <span class="e404__code-char">4</span><!--
   --><span class="e404__code-char">0</span><!--
   --><span class="e404__code-char">4</span>
    </div>
    <a href="/" data-client id="e404__home-btn"></a>
  </div>
`,Rt=()=>({path:"*",html:Et});const pt=t=>e=>({...e,html:'<div id="redirect__container">Redirecting...</div>',construct(){document.location.replace(t)}}),Ft=()=>({path:"/github",mixins:[pt("https://github.com/toptobes")]});function Lt(){return Bt(zt,qt)}function Bt(t,e){return t.map(n=>`
    <a href="${n.url}" class="projects__card projects__intro-animation">
      <h1>${n.name}${n.stars?" ("+n.stars+"☆)":""}</h1>
      <p>${n.desc}</p>
      <div class="projects__tags-container">
        ${Qt(n.tags,e)}
      </div>
    </a>
  `).join("")}function Qt(t,e){return t.map(n=>`
    <div class="projects__tag">
      ${e[n]?`<span class="projects__tag-dot" style="background: ${e[n]};"></span>`:""}
      ${n}
    </div>
  `).join("")}const qt={Kotlin:"rgb(169, 123, 255)",Haskell:"rgb(94, 80, 134)",TypeScript:"rgb(49, 120, 198)",Python:"rgb(53, 114, 165)",JavaScript:"rgb(241, 224, 90)",Assembly:"rgb(110, 76, 19)",Java:"rgb(176, 114, 25)",CUDA:"rgb(58, 78, 58)",C:"rgb(85, 85, 85)",Lisp:"rgb(200, 200, 200)",SCSS:"rgb(198, 83, 140)","C++":"rgb(215, 63, 126)",Desmos:"rgb(0, 132, 22)"},zt=[{name:"Voxyl-Overlay",desc:"A desktop application utility for certain Minecraft servers",tags:["Kotlin","Compose Multiplatform","App"],url:"https://github.com/BWP-Stats/Voxyl-Overlay",stars:6},{name:"Blacksmith",desc:"A fully-fledged declarative FTC Robotics software library complete w/ documentation site",tags:["Kotlin","Java","TypeScript","ReactJS","Library"],url:"https://github.com/toptobes/robot-code-v2",stars:3},{name:"File-System-System",desc:"A file-system based programming language that transpiles to JS",tags:["Haskell","Compiler"],url:"https://github.com/toptobes/file-system-system"},{name:"2048-ASM",desc:"A colored 2048 terminal game made in MASM x64 assembly",tags:["Assembly","CLI"],url:"https://github.com/toptobes/ASMPlaygroundV2",stars:3},{name:"Magic-Square-ASM",desc:"Magic square creator & checker using some AVX512 & x87 (made for a school project who wanted it in Python lol)",tags:["Assembly","SIMD","CLI"],url:"https://github.com/toptobes/ASMPlaygroundV2",stars:3},{name:"BadVM",desc:"A small 16-bit VM written in C w/ a custom typed Assembly lang written in Kotlin",tags:["C","Kotlin","Assembly","VM","Compiler"],url:"https://github.com/toptobes/BadVm",stars:1},{name:"Chess3D",desc:'A WIP multiplayer 3D chess game (4 layers of boards) for the web made in collaboration with <span style="text-decoration: underline;">T-Lind</span>',tags:["TypeScript","SCSS","ExpressJS","ReactJS","ThreeJS","WebSockets","SQLite"],url:"https://github.com/T-Lind/chess-3d-dev"},{name:"KineticClock",desc:"A small but extremely satisfying kinetic clock desktop app",tags:["Kotlin","Compose Multiplatform","App"],url:"https://github.com/toptobes/KineticClock",stars:2},{name:"Astra-Spring-Demo",desc:"An open-source demonstration of AstraDB's indexing capabilities from my internship @ DataStax",tags:["TypeScript","Java","Python","SCSS","Spring","WebSockets","AI/ML","AstraDB"],url:"https://github.com/toptobes/astra-demo",stars:4},{name:"Sentinel Dashboard",desc:"An unfinished dashboard and backend api for an abandoned Discord bot",tags:["JavaScript","TypeScript","ReactJS","NestJS","MongoDB"],url:"https://github.com/VXFreelance/SentinelWebsite"},{name:"BadLisp",desc:"A badly-implemented lisp that compiles down to C",tags:["C","Lisp","Compiler"],url:"https://github.com/toptobes/BadLisp",stars:1},{name:"brainf",desc:"An extremely small (176 chars) brainf**k interpreter",tags:["C","Interpreter"],url:"https://github.com/toptobes/brainf",stars:1},{name:"jsonh",desc:"A quick 'n' dirty JSON prettifier/minifier",tags:["Haskell","CLI"],url:"https://github.com/toptobes/jsonh"},{name:"MC-1.8.9-Utils",desc:"A collection of small utility mods for Minecraft using the ChatTriggers framework",tags:["JavaScript"],url:"https://github.com/toptobes/MC-1.8-Utils",stars:1},{name:"Sorts-CS3",desc:"Small program using CUDA using the CUB library to sort 1B ints as fast as possible on my GPU for my high school's CS class's speed sorting comp :)",tags:["C++","CUDA","SIMT"],url:"https://github.com/toptobes/sorts_cs3",stars:1},{name:"BCD 2 7-seg display",desc:"A BCD to 7-segment display written using piecewise functions and such in the form of logic gates n Desmos",tags:["Desmos"],url:"https://www.desmos.com/calculator/l1qqsu2yxn"},{name:"Flappy Bird",desc:"A game of flappy bird written in Desmos (w/ collisions)",tags:["Desmos"],url:"https://www.desmos.com/calculator/9nluneba1a"}];const G="toptobes",Zt="/portfolio",Yt="true".toLowerCase()==="true",K=(t=!1)=>e=>({...e,html:_t(e,t)});function _t(t,e){let n="";const s=t.path.split("/").filter(o=>o).map(o=>(n+="/"+o,`      
        <span style="color: dodgerblue;">/</span>
        <a href="${n}" data-client id="basic__path-segment" style="color: dodgerblue;">${o}</a>
      `)).join("");return`
    <div id="basic__page-container">
      <div id="basic__path-container" style="${e?"justify-content: center;":""}">
        <span>
          <span id="basic__shell-name">${G}@porfolio</span><!--
       --><span>:</span>
        </span>
        ${e?"":'<div class="basic__breaker"></div>'}
        <a href="/" data-client id="basic__home-icon" style="color: dodgerblue;"></a>
        ${s}
        <span style="scale: .95;">$</span>
      </div>
      <div id="basic__page-body">
        ${t.html??""}
      </div>
    </div>
  `}const $=t=>({...t,construct(){window.scrollTo(0,0),setTimeout(()=>{var e;window.scrollTo(0,0),(e=t.construct)==null||e.call(t)},0)}}),Ut=`
  <br>
  <blockquote id="projects__fun-fact-container" class="projects__intro-animation">
    <p>
      <span style="font-weight: bolder;">Fun fact:</span>
      this website was made with absolutely no dependencies; it involved the creation of a
      tweening library, a small declarative webgl shader library, and a client-side router.
      (<a id="projects__this-site-source" href="https://github.com/toptobes/portfolio">source code</a>)
    </p>
    <div style="height: .25em;"></div>
    <p style="font-size: .8em;">
      *If you consider TypeScript or a build tool dependencies, I don't wanna be friends with you :(
    </p>
  </blockquote>
  <br>
  <div id="projects__cards-container">
    ${Lt()}
  </div>
`,jt=()=>({path:"/projects",html:Ut,construct(){document.querySelectorAll(".projects__card").forEach((e,n)=>{const s=n*.1+.1;e.style.animation=`.5s projects__cards-side-fade-in ${s}s cubic-bezier(.39, 1.09, .61, 1.2) forwards`})},mixins:[K(),$]});const Wt="/portfolio/assets/profile-icon-d0fc271b.svg",Nt=`
  <div id="about-me__body-container">
    <div>
      <br>
      <p>Hey! I'm ${G}, a passionate programmer, car enthusiast, and metalhead from the Austin area.</p>
      <br>
      <p>I'm currently a student @ Austin Community College, pursuing an undergraduate degree in Computer Science.</p>
      <br>
      <p>I enjoy all facets of programming, and have no clue what to put for the rest of this page.</p>
      <br>
      <p>
        Main languages:
        <ul id="about-me__languages-list">
          <li>Kotlin + Java</li>
          <li>TypeScript + JavaScript</li>
          <li>Haskell</li>
          <li>C</li>
        </ul>
      </p>
      <br>
      <a href="/" data-client id="about-me__back-to-home-btn">🠔 Back to home</a>
    </div>
    <div id="about-me__squares-container">
      <div id="about-me__square-3"></div>
      <div id="about-me__square-2"></div>
      <div id="about-me__square-1">
        <img src="${Wt}" alt="Picture of me" id="about-me__profile-pic">
      </div>
    </div>
  </div>
`,Xt=()=>({path:"/about-me",html:Nt,mixins:[K(),$]});Math.TAU=Math.PI*2;function z(t,e=1){const n=t.getContext("2d"),s=t.height=window.innerHeight,o=t.width=window.innerWidth;t.height*=e;const i=o/s,r=i>1?s/2:o/2;return n.height=s,n.width=o,n.clear=()=>n.clearRect(-r,-r,2*r,2*r),n.translate(o/2,s/2),n.scale(r,-r),n.rangeX=i>1?2*i:2,n.rangeY=i>1?2:2/i,n}function Vt(t,e,n){return Math.min(Math.max(t,e),n)}let rt;function D(t){return t*(rt||(rt=parseFloat(getComputedStyle(document.documentElement).fontSize)))}function ft(t,e){const n={};return t.forEach(s=>{const o=new Image;o.src=s,n[s]=o,e&&o.decode().then()}),n}function Gt(t){let e=t[0],n=t[0];for(let s=1;s<t.length;s++)t[s]>e&&(e=t[s]),t[s]<n&&(n=t[s]);return e-n}function P(t,e){let n=!1;return s=>{s?n||(window.addEventListener(t,e,{passive:!0}),n=!0):n&&(window.removeEventListener(t,e),n=!1)}}function Kt(t,e){const n=t.indexOf(e);return n>-1&&t.splice(n,1),t}function $t(t){var c;const e=Math.min(window.innerHeight,((c=window.screen)==null?void 0:c.height)||1/0),n=t.getBoundingClientRect(),s=n.left+n.width/2,o=n.top+n.height/2,i=window.innerWidth/2,r=e/2;return{dx:i-s,dy:r-o}}Array.prototype.partition=function(t){const e=[],n=[];for(const s of this)t(s)?e.push(s):n.push(s);return[e,n]};function te(t,e,n=!1){let s;return function(...o){const i=()=>{s=void 0,n||t.apply(this,o)},r=n&&!s;clearTimeout(s),s=setTimeout(i,e),r&&t.apply(this,o)}}function ee(t){const e=Array.isArray(t)?t:Object.keys(t).length===0&&!at(t)?[{$$dummy:0}]:[t],n=e.map(s=>at(s)?ne(s):se(s));return[e,n]}function ne(t){return(e,n)=>{t.style[e]=`${n}${ht(t,e)}`}}function se(t){return(e,n)=>{t[e]=n}}const U={};function ht(t,e){var o;if(U[e]!==void 0)return U[e];const n=getComputedStyle(t),s=((o=/[a-z]+|%/.exec(n[e]))==null?void 0:o[0])||"";return U[e]=s,s}function oe(t,e,n){return"$$dummy"in e[0]?[{$$dummy:{fromTo:[0,1]}}]:(re(e)?e.map(o=>{const i=getComputedStyle(o);return Object.fromEntries(Object.entries(n).map(([r],c)=>{const a=i[r].split(ht(o,r))[0];return[r,parseFloat(a)]}))}):e).map(o=>Object.fromEntries(Object.entries(n).map(([i,r])=>t==="to"?j(i,o[i],r):t==="from"?j(i,r,o[i]):j(i,...r))))}function j(t,e,n){return[t,{fromTo:[e,n]}]}function ie(t,e){return t.map((n,s)=>({set:n,properties:e[s]}))}function re(t){return t[0]instanceof HTMLElement}function at(t){return t instanceof HTMLElement}function ae(t){return"duration"in t}function d(t,e,n,s){if(typeof t!="string")ct("to",{},{},t);else if(t==="checkpoint")de(e,n);else{if(t==="constantly")return ce(e);ct(t,e,n,s)}}function ce(t){let e=!1;return n=>{n?e||(Q.push(t),e=!0):(Kt(Q,t),e=!1)}}function ct(t,e,n,s){const[o,i]=ee(e),r=oe(t,o,n),c=ie(i,r);le(s,c)}function le(t,e){const n=e.map(o=>Object.entries(o.properties)),s=(o,i)=>{n.forEach((r,c)=>{var u;const a=e[c];for(const[l,p]of r){const{fromTo:[h,g]}=p,f=t.easeFn(o,h,g-h,i);a.set(l,f),(u=t.update)==null||u.call(t,o/i)}})};if(ae(t)){let o=0;lt(t,s,()=>(o=o||performance.now(),[performance.now()-o,t.duration]))}else{const o=t.scroll,i=o.parentElement;t.offset||(t.offset=0),w.has(o)||w.set(o,{lastPixels:0,originalHeight:parseFloat(getComputedStyle(i).height),checkpoint:0}),w.get(o).lastPixels=t.pixels+t.offset,tt=t.pixels+t.offset,t.offset+=w.get(o).checkpoint;const r=gt++;ue(o,r),lt(t,s,c=>{const u=c-i.offsetTop-t.offset;return[Vt(0,u/t.pixels,1),1]})}}function lt(t,e,n){E.push({fn:e,supplier:n,options:t,lastT:NaN})}const w=new Map;let mt=0,tt=0;function de(t,e){e=e||{};const n=t.parentElement;if(w.has(t)||w.set(t,{lastPixels:0,originalHeight:parseFloat(getComputedStyle(n).height),checkpoint:0}),mt+=e.pixels?e.pixels:tt,w.get(t).checkpoint+=e.pixels?e.pixels:w.get(t).lastPixels,e.add2wrapper&&(n.style.height=w.get(t).originalHeight+w.get(t).checkpoint+"px"),e.toggle){const s=E.at(-1).fn,o=Array.isArray(e.toggle)?e.toggle:[e.toggle];E.at(-1).fn=(i,r)=>{for(const c of o)c.toggleIfNewState(i/r===1);s(i,r)}}}const W=new Set,E=[],Q=[];let gt=0,N=NaN,C=!1,q=!1,yt=0;function bt(t){if(!q)return;const e=document.documentElement.scrollTop;if(e!=N||C||yt++<10){N=e,C=!1;for(const n of W){const s=E[n],{fn:o,supplier:i,options:r,lastT:c}=s,[a,u]=i(e),l=a/u>.99,p=l?1:a;s.lastT=p,C=r.constant||C,!(c===p&&!r.constant)&&o(l?u:a,u)}}Q.forEach(n=>n(t)),q&&window.requestAnimationFrame(bt)}function ue(t,e){new IntersectionObserver(s=>{s.forEach(o=>{o.isIntersecting?W.add(e):W.delete(e)})},{threshold:.1}).observe(t)}function pe(){q=!0,window.requestAnimationFrame(bt)}function fe(){q=!1,C=!1,Q.length=0,E.length=0,N=NaN,w.clear(),mt=0,gt=0,tt=0,yt=0}const vt=(t,e,n,s)=>n*(t/s)+e,he=(t,e,n,s)=>n*(t/=s)*t+e,me=(t,e,n,s)=>-n*(t/=s)*(t-2)+e,ge=(t,e,n,s)=>t<s/2?-n/2*(t=t*2/s)*(t-2)+e:n/2*(t=(t*2-s)/s)*t+e+n/2,Z=(t,e,n,s)=>n*(t/=s)*t*t+e,ye=(t,e,n,s)=>n*((t=t/s-1)*t*t+1)+e,y=(t,e,n,s)=>(t/=s/2)<1?n/2*t*t*t+e:n/2*((t-=2)*t*t+2)+e,be=(t,e,n,s)=>n*(t/=s)*t*t*t*t+e;function ve(){const t={alpha:1,angle:0,da:.001},e=P("mousemove",i=>{t.da=.01*(i.clientX/window.innerWidth-.5)}),n=document.querySelector("#carousel-canvas"),s=z(n,1.5);s.lineWidth=.003;const o=Array.from({length:100},i=>({y:Math.random()*-4,a:Math.random()*Math.TAU,r:Math.random()**2*3-1.5}));return we(n,s,o,e,t),()=>{e(!1)}}function we(t,e,n,s,o){d("to",o,{alpha:0},{scroll:t,easeFn:vt,pixels:t.clientHeight,constant:!0,update(i){s(i<=.9),Se(e,n,o),o.angle+=o.da}})}function Se(t,e,n){t.clear();for(let s=0;s<e.length;s++)Ae(t,e[s],n)}function Ae(t,{y:e,a:n,r:s},{alpha:o,angle:i}){const r=Math.cos(n+i)*s,a=2/(2+(1+Math.sin(n+i)*s)),u=(1.15+e/3)*o**2;t.fillStyle=t.strokeStyle=`rgb(250, 250, 250, ${u}`,t.save(),t.scale(a,a),t.beginPath(),t.arc(r,e+2,.04,0,Math.TAU),t.fill(),t.beginPath(),t.moveTo(r,3),t.lineTo(r,e+2),t.stroke(),t.restore()}const R={},wt=Symbol("reset-proxy");function T(t){const e=[],n={transitioned:!1,observe(o){e.push(o)},[wt](){e.length=0,s.transitioned=!1},toggleIfNewState(o){s.transitioned!==o&&(s.transitioned=o)}},s=new Proxy(n,{set(o,i,r){return o.transitioned=r,e.forEach(c=>c(r)),!0}});return(R[t]??(R[t]=[])).push(s),s}function xe(t){var e;(e=R[t])==null||e.forEach(n=>n[wt]())}const St=T("main-page"),At=T("main-page"),et=T("main-page"),nt=T("main-page"),xt=T("main-page"),kt=T("main-page");function ke(){const t=document.querySelector("#intro-text-container"),e=document.querySelectorAll("#intro-text-line > span");Te(t,e),He(t,e),St.observe(n=>{t.parentElement.classList.toggle("invisible")})}function Te(t,e){function n(s,o){d({scroll:t,pixels:o,offset:t.clientHeight*.5,easeFn:vt,update(i){e[s].style.opacity=`${+(i===1)}`}})}n(0,t.clientHeight*.75),n(1,t.clientHeight*1.5),n(2,t.clientHeight*1.625),d("checkpoint",t,{add2wrapper:!0})}function He(t,e){const n=document.querySelector("#programming-text-line"),s=document.querySelectorAll("#programming-text-line > span"),o={switch:0,right:100,left:0};d("to",o,{right:0,switch:1},{scroll:t,easeFn:ye,pixels:t.clientHeight*.25,offset:t.clientHeight*.5,update(i){i<=.25&&s.forEach(r=>r.style.fontSize="5rem"),n.style.setProperty("--programming-text-line-bar-right",o.right+"%"),o.switch===1&&(e.forEach(r=>r.classList.toggle("invisible")),s.forEach(r=>r.classList.toggle("invisible")))}}),d("checkpoint",t),d("to",o,{left:100},{scroll:t,easeFn:Z,pixels:t.clientHeight*.25,update(){n.style.setProperty("--programming-text-line-bar-left",o.left+"%")}}),d("checkpoint",t,{add2wrapper:!0,toggle:At})}function Ie(){const t=document.querySelector("#i-like-programming"),e=document.querySelector("#lisp-text-line"),n={x:0,y:0};let s=!1;At.observe(o=>{o&&!s&&(n.x=e.getElementsByTagName("span")[1].getBoundingClientRect().left-t.getBoundingClientRect().left,n.y=e.offsetTop-(window.innerHeight-t.clientHeight)/2,s=!0)}),De(t,e,n)}function De(t,e,n){const s=document.querySelector("#intro-text-container"),o=[...document.querySelectorAll("#programming-text-line > *")].filter(i=>i.id!=="i-like-programming");d("to",o,{opacity:0},{scroll:s,easeFn:y,pixels:s.clientHeight*2.25,offset:s.clientHeight*.75}),d({scroll:s,easeFn:y,pixels:s.clientHeight*2.25,offset:s.clientHeight*.75,update(i){t.style.fontSize="5rem";const r=y(i,0,n.x,1),c=y(i,0,n.y,1);t.style.translate=`${r}px ${c}px`}}),d("checkpoint",s,{add2wrapper:!0,pixels:s.clientHeight*3}),d("to",e,{opacity:1},{scroll:s,easeFn:y,pixels:s.clientHeight*1.5,offset:-s.clientHeight}),d("checkpoint",s,{add2wrapper:!0,toggle:et})}function Oe(){const t=document.querySelector("#i-like-programming"),e=document.querySelector("#low-lvl-text-line"),n=document.querySelector("#lisp-text-line"),s={x:-t.getBoundingClientRect().left+n.getElementsByTagName("span")[1].getBoundingClientRect().left,y:-(window.innerHeight-t.clientHeight)/2+n.offsetTop},o={x:0,y:0},i={x:0,y:0};et.observe(r=>{const{x:c,y:a}=t.getBoundingClientRect();t.classList.toggle("fixed"),r?(t.style.top=a+"px",t.style.left=c+"px",t.style.translate="0 0",o.x=c,o.y=a,i.x=e.offsetLeft,i.y=window.innerHeight-D(5.55)):t.style.translate=`${s.x}px ${s.y}px`}),Me(n,t,e,o,i)}function Me(t,e,n,s,o){const i=document.querySelector("#intro-text-container"),r={lispOpacity:1,fontSize:5};d("to",r,{lispOpacity:0},{scroll:i,easeFn:y,pixels:i.clientHeight*1.25,offset:i.clientHeight*.25,update(){et.transitioned&&(t.style.opacity=r.lispOpacity+"")}}),d("to",r,{fontSize:2},{scroll:i,easeFn:y,pixels:i.clientHeight*1.5,offset:i.clientHeight*.25,update(c){e.style.fontSize=r.fontSize+"rem",e.style.left=y(c,s.x,o.x-s.x,1)+"px",e.style.top=y(c,s.y,o.y-s.y,1)+"px"}}),d("checkpoint",i,{add2wrapper:!0}),d("to",n.lastElementChild,{opacity:1},{scroll:i,easeFn:y,pixels:i.clientHeight*1.5,offset:-i.clientHeight*.75}),d("checkpoint",i,{add2wrapper:!0})}const Je=`attribute vec4 a_position;\r
\r
void main(void) {\r
    gl_Position = a_position;\r
}\r
`,Ce=`#ifdef GL_ES\r
precision mediump float;\r
#endif\r
\r
uniform vec2 u_resolution;\r
uniform float u_time;\r
\r
vec3 colorA = vec3(0.001, 0.061, 0.190);\r
vec3 colorB = vec3(0.236, 0.454, 1.000);\r
\r
float f(float x) {\r
    return clamp(pow(abs(sin(x)), 10.0) * 50.0 - 7.5, 0.0, 1.0);\r
}\r
\r
void main() {\r
    vec2 st = gl_FragCoord.xy / u_resolution;\r
    st -= .5;\r
    st.x *= u_resolution.x/u_resolution.y;\r
\r
    mat2 zoom = mat2(\r
        +cos(u_time), -sin(0.0),\r
        +sin(0.0), +cos(u_time)\r
    );\r
\r
    float r = 90.0 * pow(sin(u_time * .8), 8.0) * .05;\r
    mat2 rotation = mat2(\r
        +cos(r), -sin(r),\r
        +sin(r), +cos(r)\r
    );\r
\r
    st *= zoom;\r
    st *= rotation;\r
\r
    float x = pow(abs(st.x - st.y), .2);\r
\r
    float t = abs(st.y * st.x) * 8.5 - u_time;\r
    float t2 = u_time - abs(5.0 * st.y * st.x) * 4.5;\r
\r
    float pct = .5 * exp(f(t + x)) * f(t)\r
        	  + .5 * exp(f(t + x + 1.6)) * f(t + 1.6);\r
\r
    float pct2 = .25 * exp(f(t2 + x)) * f(t2)\r
        	   + .25 * exp(f(t2 + x + 1.6)) * f(t2 + 1.6);\r
\r
    pct2 = exp(pct2) / 2.0 * exp(pct);\r
\r
    float stage = mod(u_time * 0.75, 3.0);\r
    st = max(vec2(0.2), st + .4);\r
\r
    vec3 accentColor =\r
        (stage <= 1.0)\r
            ? colorB * (1.5 - 1.5 * x) * 1.25 :\r
        (stage <= 2.0)\r
            ? vec3(st, 0.0)\r
            : vec3(st, 1.0) ;\r
\r
    vec3 bgColor = mix(colorA, accentColor, pct2);\r
    vec3 color = mix(bgColor, accentColor, pct);\r
\r
    color += smoothstep(0.5, 0.11, x) * accentColor * 2.5\r
           - smoothstep(0.1, 0.01, x) * color;\r
\r
    gl_FragColor = vec4(color, 0.95);\r
}\r
`;function Pe(t,e){const{vertexSources:n,fragmentSources:s,viewport:o=[0,0,t.width,t.height],attributes:i={},uniforms:r={},drawMode:c}=e;let a=t.getContext("webgl")||t.getContext("experimental-webgl");const u=s.map(m=>dt(a,a.FRAGMENT_SHADER,m)),l=n.map(m=>dt(a,a.VERTEX_SHADER,m)),p=a.createProgram();u.concat(l).forEach(m=>{a.attachShader(p,m)}),a.linkProgram(p),a.useProgram(p);const h=Object.entries(i).map(([m,{data:b,type:v,size:M}])=>{const J=a.createBuffer();a.bindBuffer(a.ARRAY_BUFFER,J),a.bufferData(a.ARRAY_BUFFER,b,a.STATIC_DRAW);const it=a.getAttribLocation(p,m);return a.enableVertexAttribArray(it),a.vertexAttribPointer(it,M,a[v],!1,0,0),J});a.viewport(...o),f(r);function g(m){const b={};for(const[v,M]of Object.entries(m))b[v]={type:r[v].type,values:M};f(b)}function f(m){Object.entries(m).forEach(([b,{type:v,values:M}])=>{const J=a.getUniformLocation(p,b);J&&a[`uniform${v}`].apply(a,[J,...M])})}function O(m,b){a.useProgram(p),a.drawArrays(a[c],m,b)}function Y(m,b=a.COLOR_BUFFER_BIT){a.clearColor(...m),a.clear(b)}function Mt(){var m,b;(m=a.getAttachedShaders(p))==null||m.forEach(v=>{a.detachShader(p,v),a.deleteShader(v)}),h.forEach(v=>a.deleteBuffer(v)),a.deleteProgram(p),(b=a==null?void 0:a.getExtension("WEBGL_lose_context"))==null||b.loseContext(),a=void 0}return{updateUniforms:g,draw:O,clear:Y,dispose:Mt}}function dt(t,e,n){const s=t.createShader(e);return t.shaderSource(s,n),t.compileShader(s),s}let st=!1;function Ee(){const t=document.querySelector("#i-like-programming"),e=document.querySelector("#dimensions-line"),n=document.querySelector("#white-out-container"),s=document.querySelector("#starry-canvas"),o=document.querySelector("#graphics-canvas");let i=Be(o),r=qe(i);return Re(e,s,o,t,r),Fe(s,t,n),nt.observe(c=>{if(e.classList.toggle("invisible"),o.parentElement.classList.toggle("invisible"),n.classList.toggle("invisible"),t.classList.toggle("drop-shadow"),r(c),c){const{top:a,right:u}=t.getBoundingClientRect();e.style.top=a+D(5)+"px",e.style.left=u+D(.475)+"px"}}),()=>{st=!1,r(!1),r=void 0,i.dispose(),i=void 0}}function Re(t,e,n,s,o){const i=document.querySelector("#intro-text-container"),r=document.querySelector("#gc-cover-1"),c=document.querySelector("#gc-cover-2"),a=t.getElementsByTagName("span")[1],u={dimension:1,uncovered:0};d("to",u,{dimension:2,uncovered:1},{scroll:i,easeFn:me,pixels:i.clientHeight*2.5,update(){a.textContent=`in ${u.dimension.toFixed(1)}D`;const p=50*(1-(u.dimension-1))+"vh";r.style.height=p,c.style.height=p,u.dimension===2?e.classList.remove("invisible"):e.classList.add("invisible")}}),d("checkpoint",i,{add2wrapper:!0});const l={dimension:2};d("to",l,{dimension:3},{scroll:i,easeFn:he,pixels:i.clientHeight*2.5,update(p){l.dimension>2?(s.textContent=`I like programming in ${l.dimension.toFixed(1)}D`,a.classList.add("invisible")):(s.textContent="I like programming",a.classList.remove("invisible")),st=p===1;const h=1-(l.dimension-2),g=90*(l.dimension-2);n.parentElement.style.transform=`scale(${h}) rotate3d(1, 1, 1, ${g}deg)`,o(u.uncovered!==0&&l.dimension<3)}}),d("checkpoint",i,{add2wrapper:!0})}function Fe(t,e,n){const s=document.querySelector("#intro-text-container"),o=z(t),i=Array.from({length:3},c=>Array.from({length:50},a=>({x:Math.random()*o.rangeX-o.rangeX/2,y:Math.random()*o.rangeY-o.rangeY/2,r:Math.random()*.004}))),r={dimension:3,opacity:1,scale:1,x:1};d("to",r,{dimension:9.9,opacity:0,scale:5},{scroll:s,easeFn:be,pixels:s.clientHeight*3.5,offset:-s.clientHeight*1.5,update(c){st&&(e.textContent=`I like programming in ${r.dimension.toFixed(1)}D`),e.style.opacity=`${r.opacity}`,e.style.transform=`scale(${r.scale})`,Le(o,i,c)}}),d("to",r,{x:7.9},{scroll:s,easeFn:Z,pixels:s.clientHeight*2,update(){const c=1-r.x**.75,a=90*r.x;n.style.transform=`scale(${c}) rotate3d(1, 2, 1, ${a}deg)`}}),d("checkpoint",s,{add2wrapper:!0,toggle:xt})}function Le(t,e,n){t.clear(),t.lineCap="round",n=Math.max(0,n-.15)**4;const s=80*(.8-n**.5);for(let o=0;o<e.length;o++){const i=e[o],r=[0,60,240][o];t.strokeStyle=`hsla(${r}, 65%, 88%, ${s}%)`,t.beginPath();for(let c=0;c<i.length;c++){const a=i[c],u=2*a.x*n,l=2*a.y*n;t.moveTo(a.x-u,a.y-l),t.lineTo(a.x+u+a.r,a.y+l+a.r),t.lineWidth=a.r}t.stroke()}}function Be(t){t.height=window.innerHeight,t.width=window.innerWidth;const e=new Float32Array([-1,-1,1,-1,-1,1,1,1]);return Pe(t,{vertexSources:[Je],fragmentSources:[Ce],attributes:{a_position:{data:e,type:"FLOAT",size:2}},uniforms:{u_resolution:{type:"2f",values:[t.width,t.height]},u_time:{type:"1f",values:[0]}},drawMode:"TRIANGLE_STRIP"})}const Qe=Date.now();function qe(t){return d("constantly",()=>{const e=(Date.now()-Qe)/1e3;t.updateUniforms({u_time:[e]}),t.draw(0,4)})}const ze="/portfolio/assets/amonamarth-d9f155dc.webp",Ze="/portfolio/assets/rammstein-b2624c6e.webp",Ye="/portfolio/assets/eluveitie-a73c8e67.webp",_e="/portfolio/assets/gnr-c1c96262.webp",Ue="/portfolio/assets/greenday-846eef14.webp",je="/portfolio/assets/nightwish-e8d995fd.webp",We="/portfolio/assets/factorio-2d88122a.webp",Ne="/portfolio/assets/assettocorsa-c65cbe9c.webp",Xe="/portfolio/assets/minecraft-f16a6a9f.webp",Ve="data:image/webp;base64,UklGRhQJAABXRUJQVlA4IAgJAADwLgCdASrhAOEAPpFIoEulpCMho1IZQLASCU3fC9QZO38uXc4rb+U/5Adwd194V+WBhr6bc43+x9Sv3b+4L+mH6tdeTzD/sR+sXv9emb/ZeoB+5nWPehX5aXtC/tP+vVm2ayvYPLNCbMllVtPNeCcJ/9sTnKwhfzqZMNOzGhQZVzjzSpUCz9/48z4Mxmu5tyEI7V37q2RDVrH1ZVFmDeNgKyWnCM4QKaRLS0N7FzRclszBk8MYW31OzoUghzfkXmG7ajRiVMwe6GcnYl+2W2Ra0tc3LUBTgta6JPWBZUGwbI8prSyuTkNUZQk3+cjEL5nXIskZDHNB8OcALpeGyVqqhUdK/tSpUMi1YiWDG+6wHzYRdRWt+x6AcudZDgakBjjN9eJzXfKiN/zW0JZBz84bDRHBBZPWAqQxwiDU6vk/Gp4F09HSRPBmyljH2BSyE2HaS1349Jff6qmsNo6gemeujTODxjQDRTODJq+mLb50nA69CbTHoxpYq/WKpjeXTAAAkn/9MQsjY6tHz//cyPdx6qvGjnDzHMUdfWUCKQXtIGqWMvbbhJDM2t+edfTk36wMtpwwV3Dj9lFEsSs6vyusopK6AMdJoHM6aIN5dKDgac3aDkxREHZQoZitZChjDyhP1pYZtarulw3dgRVbrHvmEfKgUr5N8CRjhJXgkJxbSXEZY3W9WqiR8DS9wBWvDpQBiqz/PcFXm77E5VXEYVtEny3RYc4l8gJ3/9n4alYRMSYamHbKBzK/UCXvDUUcyk8lYw8x219MIyQhuYpN6wjm4YJ5/uEOysnX1n2OjXFyx1LPsgHFLeqTNWY8uNdRUawgf8c4FVzkxlOt4pofGLvMBsuT/pwwwkPETiAhIlpP7nv16beKBInzXel2Iwq7dxzmKdF+W91b+notVo+BDXtDx65J4leJXwZUX4Ha9/+DcXDVqGFJ/fIG/BVQ0+ScH/bjRB32ESAJSZEWh6VQAtCDzNkuKpaVFsL0SNSznPRfupQ+EevWP3KviLnJLn6otrqbTuYlRqg/8PlxKvfFzATTSOGU9LzKoty5lqWI6BAqU5N6azSofkFD1CTvy8CrIpksFCrGH/LO8iBxjYcjkLgoxDxYAM9FsmGkdaiS4jBaerwxMZXdFoFFp8uhnbfE32BHj06fsIUYh3k0MxDP4PiQsDl/Ce/SGHJOxwW4j6xdpCc6UcH9TBnIMwZ52hbi2d1PltPkn79cHCS6sL02Z+wkCo8HmlaJzx6seNz2SEKCveFTvrQjkQfQsvXkD8dTE+g5P/VZ1edW7SezvNfDPCpqOEfSSrAiVRh6xRghUuuoh7I3/V1XcIl1aNWl5j0f3dAX9qr0FhOLI+VxInMOhIfcZZ4C5rNRAeGmx91I8UZ2kzYv1mtDnkzUUQcvYEt2De0qM6el1iFoDLGnapiIIAocTcA5sJy31N3ou7qtjB9TYAO8De6Z2sxK8qinIYTxs5t501lRi2E2Cxcgv/Dz+JPZf5pzfq7Pu7cxnv/3yEXWOK+8g2Nwd+26a1huvYoDROXidaoTQ3D8sj1tByAtotv/67eFEpjXNJ9D19lRHcil5yxJgyjUADRHiCssFlX9R0XRYXh1ALvDcaIKFZs7xMYlKOr6JQvEsXkmHMLSJg4rG4AVT485hWzs6kPZ/v2XJyxr+O2p4QjCoUpzXULZrXzd7UZF8qJdcMUI20+vQunRYIT/y3hKiJVrOl3/XOwFPC0D+7j+hv/P+I6bmHVg8gO29PMDr++IEYNdw9LgVmxzONUD0VgaEMlWApp7cgEGVKbaVrqxftIItoLYsFf0miM5+WDMFWyYoZsshMaKPrlSnxtlS7wPpIqvrFb7pRFZ6vTDXVTzyurBRqdSS1xXFocxpnO7YG0oGj7nDWndrKc/EqwJlnzGRMyhVNay/cyXJ79cwZcKTyVb+cwa0REXW5Bb38nmt+99l2JXR7Si7Lv/dA6bU9uouW0GaI4Y2jy5fZiI/iqLWGNKy008DOsPmK2o3ozdVQDBCjVc+SQsikz/VpoYqTvvpm4TyOqtwz9P/ufkyAiNVH/ue9T9FSh0pv0jiFTpTJSdIBInN4lD3W7R2MtRyQGTsFKehj8CEDAQteuveafhGtQxWgKlvcENdC0hEriCecq4jI8jr9CueGvwxIwTnPMYRpHZG4nF7q31ObDLZqyhMzGR+ZbTtm/bovh6aRr+MP/Ov9WvCNnIZ4PO/ImDWVpUT7nnS8UFnlfQUGzdcf9DZvZltY0wvnD4U/HaDqAjInHevjvVarWPz3Kv3P59Fh+jzx04tLB9BAC4XosZDiORy6dqEWZfc21W9u3JnE2WGA1FQ6PLn4t81/ICD7A/ioDxp9dd+fkKkkY4Do/K/z/14docx44RCTO3vr6AZsJ5sV4/pjGwNHO8WJ8osEvWJDOadiXvF7xISbdODCx6ny7EktQKxPhLtG//TakXFEqfTWBNcjq+LpP/IGTol4oBWk3Ps971ex96udyxbfjhZlyahWUf964liS4Q06Y1f7Ab9P0h9htxLY52D+Oa7RBs8W88/RwZZUmudv14i0fzE4v22FfkguXflRL/NkNI55SZNRSSrz/q0dSLNC4vWXf5YQ81oLNJDqctYKA8amQlqnGKvy3xjjdEjBP6HCrwgUSpJKvc3wbknYrI+up7jHyBugk5D9L4x35K9k7cthxgnbIGxw//xYzM8TkYL5nufCnZM5ZW/x6e+ocK8WE/4rk3dt9hBtqnuFaBQ2Jx1C0Ux5qhjkz4eWof9lnyNvURkdbdZOMYjwNvQTnds5PbaG/yBU0y7meKQweZY31xYPms666owWpYh/26Cv8bYWg4tXFUSCwWoF14lOJXQnZQ10HkeKmwOu2oUn84MFqZg79xTFSPccXJqZHlbFBrb5QtuQt/NHkBROyWvMFBxzpZr4Z+aRprb3JWrbkf1wwCmluEMOEDr4N/eQ+T/ieKnveBOW5f9wu9SuaxpEyUE0zRH+hs12BSdfN5wN429/N0P3Tm/1zonwgdz2iC+B221gnF2sGB24Cu746c4xiJIuh7fiQnsyrzBedME+rVF4wevBI4ydbyoAAAAA==",Ge="/portfolio/assets/mclarenf1-00a92b05.webp",Ke="/portfolio/assets/rx7-5fbfd767.webp",$e=Object.freeze(Object.defineProperty({__proto__:null,amonamarth:ze,assettocorsa:Ne,eluveitie:Ye,factorio:We,forzahorizon:Ve,gnr:_e,greenday:Ue,mclarenf1:Ge,minecraft:Xe,nightwish:je,rammstein:Ze,rx7:Ke},Symbol.toStringTag,{value:"Module"})),Tt=Object.values($e).sort(()=>.5-Math.random());function tn(){const t=document.querySelector("#interests-canvas"),e=document.querySelector("#white-out-container"),n=t.parentElement;xt.observe(s=>{n.classList.toggle("invisible"),e.classList.toggle("invisible"),t.style.transform="translateY(0px)"}),en(t),nn(t)}function en(t){const e=document.querySelector("#interests-text-line"),n=[...e.getElementsByTagName("span")],s=n.length-1;n.forEach((o,i)=>{d({scroll:t,easeFn:ge,pixels:t.clientHeight*1.5,offset:t.clientHeight*(i+8)*.125,update(r){o.classList.toggle("interests-text-word-stage-1",r>.2),i===s&&e.classList.toggle("interests-text-word-stage-2",r===1)}})}),d("checkpoint",t,{add2wrapper:!0})}function nn(t){const e=ft(Tt,!0),n=z(t);n.scale(1,-1);const s=n.rangeY/2-.1,o=Array.from({length:12},(r,c)=>({y:0,a:Math.TAU*c/24-Math.PI*.75,r:s*4}));d("to",{x:90},{x:0},{scroll:t,easeFn:Z,pixels:t.clientHeight*3.25,update(r){t.classList.toggle("invisible",r===0),t.style.transform="translateY(0)",sn(n,e,o,r)}}),d("checkpoint",t,{add2wrapper:!0,toggle:kt})}function sn(t,e,n,s){t.clear();const o=t.rangeX/2-.1,i=s*Math.TAU*1.25;for(let r=0;r<n.length;r++)on(t,n[r],e[Tt[r]],i,o)}function on(t,{y:e,a:n,r:s},o,i,r){const c=n+i*.85;if(c<0||Math.TAU<c)return;const a=Math.cos(c)*s,l=1.8/(Math.sin(c)*s+3.6);t.save(),t.scale(l,l),t.moveTo(a+r,e),t.save(),t.beginPath(),t.shadowBlur=5,t.shadowColor="#242424",t.fillStyle="#24242422",t.translate(a+r*1.5,e+.4),t.scale(.2,.025),t.arc(0,0,1,0,Math.PI*2),t.fill(),t.restore(),t.drawImage(o,a+r*1.5-.2,e-.2,.4,.4),t.restore()}const rn="/portfolio/assets/lightbulb-on-7bcf1de2.webp",an="data:image/webp;base64,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snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32rAAA/v/eCKhYgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=",cn=Object.freeze(Object.defineProperty({__proto__:null,lightBulbOff:an,lightBulbOn:rn},Symbol.toStringTag,{value:"Module"})),k=Array.from({length:30},(t,e)=>({x:0,y:.0175*e,a:Math.PI/2,l:.0175})),ln={x:1,y:0,a:0,l:0},x=[];let H=1,I=1,F=1,L=1,ot=0,S=0,Ht=ft(Object.values(cn));const[dn,un]=Object.keys(Ht),A={isOn:!0,img(){return Ht[this.isOn?un:dn]}};function pn(){const t=document.querySelector("#interests-canvas"),e=document.querySelector("#turn-off-text-line"),n=document.querySelector("#know-you-button"),s=document.querySelector("#know-you-container"),o=t.parentElement,i=t.getContext("2d");kt.observe(f=>{f?t.style.transform=`translateY(${-t.clientHeight*.66}px)`:t.style.transform="translateY(0px)",e.classList.toggle("invisible",!f)});const r=n.getBoundingClientRect(),c=r.top-r.height/2,a=r.left+r.width/2,u=P("mousemove",f=>{const O=f.clientX,Y=f.clientY;n.style.transform=`translate(${(O-a)/5}px, ${(Y-c)/5}px)`}),l=P("mousemove",f=>{F=f.clientX,L=f.clientY,X(t,i),window.requestAnimationFrame(()=>V(i,g))}),p=P("touchmove",f=>{F=f.touches[0].clientX,L=f.touches[0].clientY,X(t,i),window.requestAnimationFrame(()=>V(i,g))}),h=f=>{l(f),p(f)},g=f=>{A.isOn=f??!A.isOn,x.length=0,A.isOn?o.style.backgroundColor="#f5f5f5":o.style.backgroundColor="#242424",e.classList.toggle("invisible",!A.isOn),s.classList.toggle("invisible",A.isOn),u(!A.isOn)};return n.onclick=()=>{const f=document.querySelector("#about-me-btn");f.scrollIntoView({behavior:"smooth",block:"center"}),window.addEventListener("scrollend",()=>{f.click()},{once:!0})},fn(t,e,h,g),()=>{u(!1),h(!1),h(!1),H=1,I=1,F=1,L=1,ot=0,S=0,A.isOn=!0}}function fn(t,e,n,s){const o=document.querySelector("#interests-text-line"),i=t.getContext("2d"),r={y:0};let c=0;d("to",r,{y:t.clientHeight*.66},{scroll:t,easeFn:y,pixels:t.clientHeight*1.5,offset:t.clientHeight*.5,update(a){n(a>.1),o.style.transform=`translate(-50%, -50%) translateY(${r.y}px)`,t.style.transform=`translateY(${r.y-t.clientHeight*.66}px)`,e.style.transform=`translate(-25%, calc(${r.y-t.clientHeight*.66}px - 50%))`,S=a,ot=r.y-t.clientHeight*.66,X(t,i),V(i,s),a<.8&&a<c&&s(!0),c=a,x.length=0}}),d("checkpoint",t,{add2wrapper:!0})}function X(t,e){H=(F-t.clientWidth/2)*(e.rangeX/t.clientWidth),I=(L-ot-t.clientHeight/2)*(e.rangeY/t.clientHeight)}function V(t,e){hn(),t.clear(),t.fillStyle="black",t.drawImage(A.img(),.5,-.75,1,1),t.beginPath(),t.arc(1,0,.02,0,Math.TAU);const n=k.at(-1);for(const s of k){const o=s.x+Math.cos(s.a)*s.l*S,i=s.y+Math.sin(s.a)*s.l*S;s===n&&(x.push(Math.hypot(o-1,i+(1-S))),x.length>15&&(x.shift(),x.at(-1)>.5&&Gt(x)>.25&&e())),t.moveTo(o,i),t.arc(o,i,.005*S,0,Math.TAU)}t.fill()}function hn(){!A.isOn&&Math.hypot(H-1,I)>.0175*35&&(x.length=0,H=1,I=1);for(let t=k.length-1;t>=0;t--){const e=k[t];e.a=Math.atan2(I-e.y,H-e.x),e.x=H-=Math.cos(e.a)*e.l*S,e.y=I-=Math.sin(e.a)*e.l*S}for(let t=0;t<k.length;t++){const e=k[t-1]||ln,n=k[t];n.x=e.x+Math.cos(e.a)*e.l*S,n.y=e.y+Math.sin(e.a)*e.l*S}}function It(t,e,n){let s,o;t.type="button",t.addEventListener("click",i=>{if(t.classList.toggle("activated-fill-button")){const{dx:c,dy:a}=$t(t);t.style.transform=`translate(${c}px, ${a}px)`,t.style.zIndex="100",document.documentElement.style.overflowY="hidden",o=setTimeout(()=>{e(t.getAttribute("data-route"))(),document.documentElement.style.overflowY="visible"},1e3),clearTimeout(s)}else t.style.transform="",document.documentElement.style.overflowY="visible",s=setTimeout(()=>{t.style.zIndex=""},500),clearTimeout(o);n==null||n()})}function mn(t){const e=[...document.querySelectorAll(".start-diamond-button")],[[n],s]=e.partition(c=>c.id==="auto-scroll-btn");let o=0;const i=()=>e.forEach((c,a)=>{c.style.scale=c.classList.contains("activated-fill-button")?"1":`${1+o**3/(1.3+Math.abs(a-2)**4)}`}),r=new IntersectionObserver(c=>{o=c[0].intersectionRatio,i()},{threshold:Array.from({length:10},(c,a)=>a/10),rootMargin:`-${D(8)}px`});return r.observe(n.parentElement),gn(e,n),s.forEach(c=>It(c,t,i)),()=>{document.documentElement.style.overflowY="visible",r.disconnect()}}function gn(t,e){let n=!1;e.addEventListener("click",()=>{if(n)return;let s=window.scrollY;const o=document.body.scrollHeight-window.innerHeight;let i=s,r=!1,c;n=!0;const a=d("constantly",u=>{c??(c=u),Math.abs(i-window.scrollY)>1&&(r=!0);const l=u-c;c=u,i+=l,(i>=o||r)&&(n=!1,e.blur(),a(!1)),window.scrollTo(0,i)});a(!0)})}const Dt=4;function yn(){const t=document.querySelector("#triangles-container"),e=document.querySelector("#triangles-canvas");t.style.height=e.clientHeight*2+"px",bn(e,t,{recurseLim:Dt,blackOpacity:0,prevScale:1,scale:1,cy:0})}function bn(t,e,n){const s=z(t);d("to",n,{scale:16,cy:3**.5*.5/5-.2,recurseLim:4,blackOpacity:1},{scroll:t,easeFn:Z,pixels:t.clientHeight*1.25,offset:t.clientHeight*-.25,update(){e.style.backgroundColor=`rgb(0, 0, 0, ${n.blackOpacity})`,s.clear();const o=n.scale/n.prevScale;s.scale(o,o),n.prevScale=n.scale,B(s,0,n.cy+.15,1,Dt)}}),d("checkpoint",e,{toggle:St})}function B(t,e,n,s,o,i=o){const r=s/2,c=Math.sqrt(3)*s/4;o>0&&(B(t,e-r/2,n-c/2,s/2,o-.5,i),B(t,e+r/2,n-c/2,s/2,o-1.3,i),B(t,e,n+c/2,s/2,o-1.8,i)),t.fillStyle=`rgb(250, 250, 250, ${.07*(i-o)})`,t.beginPath(),t.lineTo(e+r,n-c),t.lineTo(e-r,n-c),t.lineTo(e,n+c),t.fill()}const Ot=T("main");function vn(){const t=document.querySelector("#i-like-programming"),e=document.querySelector("#programming-types-container");Ot.observe(n=>{if(e.classList.toggle("invisible",!n),n){const{top:s,right:o}=t.getBoundingClientRect();e.style.top=s+"px",e.style.left=o+"px"}}),nt.observe(n=>{e.classList.toggle("invisible",n)}),wn(t),Sn()}function wn(t){const e=document.querySelector("#intro-text-container"),n=document.querySelector("#low-lvl-text-line"),s={llpOpacity:1,fontSize:2,x:0,y:0};d("to",s,{llpOpacity:0},{scroll:e,easeFn:y,pixels:e.clientHeight*1.25,offset:e.clientHeight*.25,update(){n.style.opacity=s.llpOpacity+""}});const o={fontSize:3.25,x:-window.innerWidth/2,y:-(window.innerHeight-D(3.25))/2};d("to",s,o,{scroll:e,easeFn:y,pixels:e.clientHeight*1.5,offset:e.clientHeight*.25,update(){t.style.fontSize=s.fontSize+"rem",t.style.translate=`${s.x}px ${s.y}px`}}),d("checkpoint",e,{add2wrapper:!0,pixels:e.clientHeight*1.75,toggle:Ot})}function Sn(){const t=document.querySelector("#intro-text-container"),e=document.querySelector("#programming-types-types"),n={y:-e.parentElement.getBoundingClientRect().height/2},s=e.getBoundingClientRect().height-n.y-D(3.25*2.3);d("to",n,{y:s},{scroll:t,easeFn:y,pixels:t.clientHeight*4.5,offset:t.clientHeight*-.8,update(){e.style.translate=`0 ${-n.y}px`}}),d("checkpoint",t,{toggle:nt})}const An=(t,e)=>`
  <canvas id="carousel-canvas" height="${t}" width="${e}"></canvas>
  <div id="start-buttons-container">
    <button class="start-diamond-button" data-route="/github">github</button>
    <button class="start-diamond-button" data-route="/about-me" id="about-me-btn">about me</button>
    <button class="start-diamond-button" id="auto-scroll-btn">auto<br>scroll<div></div></button>
    <button class="start-diamond-button" data-route="/projects">projects</button>
    <button class="start-diamond-button" data-route="/linkedin">linkedin</button>
    <div id="start-buttons-snackbar">(Recommended) Scrolls you at an ideal pace. Scroll at any time to stop!</div>
  </div>
  <div id="triangles-container">
    <canvas id="triangles-canvas" height="${t}" width="${e}"></canvas>
  </div>
  <div id="intro-container" class="invisible">
    <div id="intro-text-container">
      <div id="intro-text-line">
        <span>Hi.&nbsp;</span><!--
     --><span>I'm&nbsp;</span><!--
     --><span>${G}.</span>
      </div>
      <div id="programming-text-line">
        <span class="invisible">And&nbsp;</span><!--
     --><span class="invisible" id="i-like-programming">I like programming</span><!--
     --><span class="invisible">.</span>
      </div>
      <div id="lisp-text-line">
        <span>(</span><!--
     --><span class="invisible">I</span><!--
     --><span>-</span><!--
     --><span class="invisible">like</span><!--
     --><span>-</span><!--
     --><span class="invisible">programming</span><!--
     --><br><!--
     --><span class="invisible">--</span><!--
     --><span>(functionally))</span>
      </div>
      <div id="low-lvl-text-line">
        <span class="invisible">I like programming</span><!--
     --><span>&nbsp;low level</span>
      </div>
      <div id="programming-types-container" class="invisible">
        &nbsp;
        <div id="programming-types-types-wrapper">
          <div id="programming-types-types">
            <span>full-stack apps<br></span>
            <span>programming languages<br></span>
            <span>with objects<br></span>
            <span>cleanly<br></span>
            <span>robots<br></span>
            <span>in css<br></span>
            <span style="font-size: 1.1em; position: relative; right: 1rem; opacity: .8; white-space: pre">just  kIDding<br></span>
            <span style="font-size: 0.9em; position: relative; left: 2rem; color: #bba0a0;">css is hell<br></span>
            <span>:)<br></span>
            <span>desktop apps<br></span>
            <span>with math<br></span>
            <span>libraries<br></span>
            <span>in interesting ways<br></span>
          </div>
        </div>
        <div id="programming-types-gradient"></div>
      </div>
      <canvas id="starry-canvas" class="invisible" height="${t}" width="${e}"></canvas>
      <div id="graphics-container" class="invisible">
        <canvas id="graphics-canvas" height="${t}" width="${e}"></canvas>
        <div id="dimensions-line" class="invisible">
          <span>&nbsp;</span><!--
       --><span class="drop-shadow" id="dims-txt">in 1.0000D</span>
        </div>
        <div class="graphics-canvas-cover" id="gc-cover-1"></div>
        <div class="graphics-canvas-cover" id="gc-cover-2"></div>
      </div>
      <div id="white-out-container" class="invisible"></div>
    </div>
  </div>
  <div id="interests-container" class="invisible">
    <div id="interests-text-line">
      <span class="interests-text-word">But&nbsp;</span><!--
   --><span class="interests-text-word">I&nbsp;</span><!--
   --><span class="interests-text-word">like&nbsp;</span><!--
   --><span class="interests-text-word">other</span><!--
   --><br><!--
   --><span class="interests-text-word">things&nbsp;</span><!--
   --><span class="interests-text-word">too...</span>
    </div>
    <canvas id="interests-canvas" class="invisible" height="${t}" width="${e}"></canvas>
    <div id="turn-off-text-line" class="invisible">(yank on the chain!)</div>
    <div id="know-you-container" class="invisible">
      <div id="know-you-text-line">...and I'd like to<br>get to know you.</div>
      <button id="know-you-button">Get to know me!</button>
    </div>
  </div>
`,xn=t=>{const e=[ve,mn,yn,ke,Ie,Oe,vn,Ee,tn,pn];let n=[];return $({path:"/",html:An(window.innerHeight,window.innerWidth),construct(){n=e.map(s=>s(t)),pe()},destruct(){xe("main-page"),n.forEach(s=>{s==null||s()}),fe()}})};const kn=`
  <div id="mobile-main__disclaimer-container">
    (Use this site on desktop for the full main page experience)
  </div>
  <div id="mobile-main__buttons-container">
    <button class="start-diamond-button" data-route="/github">github</button>
    <button class="start-diamond-button" data-route="/about-me" id="about-me-btn">about me</button>
    <button class="start-diamond-button" data-route="/projects">projects</button>
    <button class="start-diamond-button" data-route="/linkedin">linkedin</button>
  </div>
`,Tn=t=>K(!0)({path:"/",html:kn,construct(){document.querySelectorAll(".start-diamond-button").forEach(e=>It(e,t))}}),Hn=t=>{const e=Tn(t),n=xn(t),s=()=>window.innerWidth/window.innerHeight>4/3?n:e;let o=s();const i=P("resize",te(()=>{const r=o;o=s(),(o===n||r!==o)&&t("/")()},50));return{path:"/",get html(){return o.html},construct(){var r;(r=o.construct)==null||r.call(o),i(!0)},destruct(){var r;i(!1),(r=o.destruct)==null||r.call(o)}}},In=()=>({path:"/linkedin",mixins:[pt({}.VITE_LINKEDIN_URL??"")],disabled:{}.VITE_LINKEDIN_URL==null});Ct({baseURL:ut(Zt),hashRouter:Yt,providers:[Hn,Rt,jt,In,Xt,Ft]});
