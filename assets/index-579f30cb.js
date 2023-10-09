(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function s(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(o){if(o.ep)return;o.ep=!0;const i=s(o);fetch(o.href,i)}})();const Ot=`
  <div id="e404__background-img">
    <div id="e404__code">
      <span class="e404__code-char">4</span><!--
   --><span class="e404__code-char">0</span><!--
   --><span class="e404__code-char">4</span>
    </div>
    <a href="/" data-client id="e404__home-btn"></a>
  </div>
`,Mt=()=>({path:"*",html:Ot});function Jt(t){const e=t.baseURL||"",s=t.hashRouter?"/#":"",n=e+s,o=document.querySelector("#app");let i;const r=l=>()=>{window.history.pushState(null,"",n+l),u()},[c,[a]]=t.providers.map(l=>l(r)).filter(l=>!l.disabled).map(l=>({...l,path:ot(n+l.path)})).partition(l=>l.path!==n+"*"),u=()=>{var y,f;const l=ot(location.pathname+location.hash),p=t.hashRouter&&l===e?n:l,h=c.find(O=>O.path===p)??a;(y=i==null?void 0:i.destruct)==null||y.call(i),i=h,h.forceReload&&Pt(h.path),o.innerHTML=typeof h.html=="function"?h.html():h.html,(f=h.construct)==null||f.call(h)};window.addEventListener("popstate",u),window.addEventListener("load",u),document.addEventListener("click",l=>{const p=l.target;p.tagName==="A"&&p.getAttribute("data-client")!==null&&(l.preventDefault(),r(p.getAttribute("href"))())})}function Pt(t){const e=`${t}:reloaded`;sessionStorage.getItem(e)?sessionStorage.removeItem(e):(sessionStorage.setItem(e,"true"),window.location.reload())}function ot(t){return t.endsWith("/")?t.slice(0,-1):t}const ut=t=>()=>({html:'<div id="redirect__container">Redirecting...</div>',construct(){document.location.replace(t.url)},...t}),Ct=ut({path:"/github",url:"https://github.com/toptobes"});function V(t,e,s){let n="";const o=t.split("/").filter(i=>i).map(i=>(n+="/"+i,`
      <span style="color: dodgerblue;">/</span>
      <a href="${n}" data-client id="basic__path-segment" style="color: dodgerblue;">${i}</a>
    `)).join("");return`
    <div id="basic__page-container">
      <div id="basic__path-container" style="${s?"justify-content: center;":""}">
        <span>
          <span style="color: chartreuse;">kavin@porfolio</span><!--
       --><span>:</span>
        </span>
        ${s?"":'<div class="basic__breaker"></div>'}
        <a href="/" data-client id="basic__home-icon" style="color: dodgerblue;"></a>
        ${o}
        <span style="scale: .95;">$</span>
      </div>
      <div id="basic__page-body">
        ${e}
      </div>
    </div>
  `}function Ft(){return Rt.map(t=>`
    <a href="${t.url}" class="projects__card projects__intro-animation">
      <h1>${t.name}${t.stars?" ("+t.stars+"☆)":""}</h1>
      <p>${t.desc}</p>
      <div class="projects__tags-container">
        ${Et(t.tags)}
      </div>
    </a>
  `).join("")}function Et(t){return t.map(e=>`
    <div class="projects__tag">
      ${it[e]?`<span class="projects__tag-dot" style="background: ${it[e]};"></span>`:""}
      ${e}
    </div>
  `).join("")}const it={Kotlin:"rgb(169, 123, 255)",Haskell:"rgb(94, 80, 134)",TypeScript:"rgb(49, 120, 198)",Python:"rgb(53, 114, 165)",JavaScript:"rgb(241, 224, 90)",Assembly:"rgb(110, 76, 19)",Java:"rgb(176, 114, 25)",CUDA:"rgb(58, 78, 58)",C:"rgb(85, 85, 85)",Lisp:"rgb(200, 200, 200)",SCSS:"rgb(198, 83, 140)","C++":"rgb(215, 63, 126)",Desmos:"rgb(0, 132, 22)"},Rt=[{name:"Voxyl-Overlay",desc:"A desktop application utility for certain Minecraft servers",tags:["Kotlin","Compose Multiplatform","App"],url:"https://github.com/BWP-Stats/Voxyl-Overlay",stars:6},{name:"Blacksmith",desc:"A fully-fledged declarative FTC Robotics software library complete w/ documentation site",tags:["Kotlin","Java","TypeScript","ReactJS","Library"],url:"https://github.com/toptobes/robot-code-v2",stars:3},{name:"File-System-System",desc:"A file-system based programming language that transpiles to JS",tags:["Haskell","Compiler"],url:"https://github.com/toptobes/file-system-system"},{name:"2048-ASM",desc:"A colored 2048 terminal game made in MASM x64 assembly",tags:["Assembly","CLI"],url:"https://github.com/toptobes/ASMPlaygroundV2",stars:3},{name:"Magic-Square-ASM",desc:"Magic square creator & checker using some AVX512 & x87 (made for a school project who wanted it in Python lol)",tags:["Assembly","SIMD","CLI"],url:"https://github.com/toptobes/ASMPlaygroundV2",stars:3},{name:"BadVM",desc:"A small 16-bit VM written in C w/ a custom typed Assembly lang written in Kotlin",tags:["C","Kotlin","Assembly","VM","Compiler"],url:"https://github.com/toptobes/BadVm",stars:1},{name:"Chess3D",desc:'A WIP multiplayer 3D chess game (4 layers of boards) for the web made in collaboration with <span style="text-decoration: underline;">T-Lind</span>',tags:["TypeScript","SCSS","ExpressJS","ReactJS","ThreeJS","WebSockets","SQLite"],url:"https://github.com/T-Lind/chess-3d-dev"},{name:"KineticClock",desc:"A small but extremely satisfying kinetic clock desktop app",tags:["Kotlin","Compose Multiplatform","App"],url:"https://github.com/toptobes/KineticClock",stars:2},{name:"Astra-Spring-Demo",desc:"An open-source demonstration of AstraDB's indexing capabilities from my internship @ DataStax",tags:["TypeScript","Java","Python","SCSS","Spring","WebSockets","AI/ML","AstraDB"],url:"https://github.com/toptobes/astra-demo",stars:4},{name:"Sentinel Dashboard",desc:"An unfinished dashboard and backend api for an abandoned Discord bot",tags:["JavaScript","TypeScript","ReactJS","NestJS","MongoDB"],url:"https://github.com/VXFreelance/SentinelWebsite"},{name:"BadLisp",desc:"A badly-implemented lisp that compiles down to C",tags:["C","Lisp","Compiler"],url:"https://github.com/toptobes/BadLisp",stars:1},{name:"brainf",desc:"An extremely small (192 chars) brainf**k interpreter",tags:["C","Interpreter"],url:"https://github.com/toptobes/brainf",stars:1},{name:"jsonh",desc:"A quick 'n' dirty JSON prettifier/minifier",tags:["Haskell","CLI"],url:"https://github.com/toptobes/jsonh"},{name:"MC-1.8.9-Utils",desc:"A collection of small utility mods for Minecraft using the ChatTriggers framework",tags:["JavaScript"],url:"https://github.com/toptobes/MC-1.8-Utils",stars:1},{name:"Sorts-CS3",desc:"Small program using CUDA using the CUB library to sort 1B ints as fast as possible on my GPU for my high school's CS class's speed sorting comp :)",tags:["C++","CUDA","SIMT"],url:"https://github.com/toptobes/sorts_cs3",stars:1},{name:"BCD 2 7-seg display",desc:"A BCD to 7-segment display written using piecewise functions and such in the form of logic gates n Desmos",tags:["Desmos"],url:"https://www.desmos.com/calculator/l1qqsu2yxn"},{name:"Flappy Bird",desc:"A game of flappy bird written in Desmos (w/ collisions)",tags:["Desmos"],url:"https://www.desmos.com/calculator/9nluneba1a"}],Lt=V("/projects",`
  <br>
  <blockquote id="projects__fun-fact-container" class="projects__intro-animation">
    <p>
      <span style="font-weight: bolder;">Fun fact:</span>
      this website was made with absolutely no third party dependencies; it involved the creation of a
      tweening library, a small declarative webgl shader library, and a client-side router.
      (<a id="projects__this-site-source" href="https://github.com/toptobes/portfolio">source code</a>)
    </p>
    <div style="height: .25em;"></div>
    <p style="font-size: .8em;">
      *If you consider TypeScript a third party dependency, I don't wanna be friends with you :(
    </p>
  </blockquote>
  <br>
  <div id="projects__cards-container">
    ${Ft()}
  </div>
`),Bt=()=>({path:"/projects",html:Lt,construct(){window.scrollTo(0,0),document.querySelectorAll(".projects__card").forEach((t,e)=>{const s=e*.1+.1;t.style.animation=`.5s projects__cards-side-fade-in ${s}s cubic-bezier(.39, 1.09, .61, 1.2) forwards`})}});const Qt="/portfolio/assets/profile-icon-d0fc271b.svg",qt=V("/about-me",`
  <div id="about-me__body-container">
    <div>
      <br>
      <p>Hey! I'm Kavin, a passionate programmer, car enthusiast, and metalhead from the Austin area.</p>
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
        <img src="${Qt}" alt="Picture of me" id="about-me__profile-pic">
      </div>
    </div>
  </div>
`),zt=()=>({path:"/about-me",html:qt,construct(){window.scrollTo(0,0),setTimeout(()=>{window.scrollTo(0,0)},0)}});Math.TAU=Math.PI*2;function q(t,e=1){const s=t.getContext("2d"),n=t.height=window.innerHeight,o=t.width=window.innerWidth;t.height*=e;const i=o/n,r=i>1?n/2:o/2;return s.height=n,s.width=o,s.clear=()=>s.clearRect(-r,-r,2*r,2*r),s.translate(o/2,n/2),s.scale(r,-r),s.rangeX=i>1?2*i:2,s.rangeY=i>1?2:2/i,s}function Zt(t,e,s){return Math.min(Math.max(t,e),s)}let rt;function D(t){return t*(rt||(rt=parseFloat(getComputedStyle(document.documentElement).fontSize)))}function pt(t){const e={};return t.forEach(s=>{const n=new Image;n.src=s,e[s]=n}),e}function Yt(t){let e=t[0],s=t[0];for(let n=1;n<t.length;n++)t[n]>e&&(e=t[n]),t[n]<s&&(s=t[n]);return e-s}function P(t,e){let s=!1;return n=>{n?s||(window.addEventListener(t,e,{passive:!0}),s=!0):s&&(window.removeEventListener(t,e),s=!1)}}function Ut(t,e){const s=t.indexOf(e);return s>-1&&t.splice(s,1),t}function jt(t){var c;const e=Math.min(window.innerHeight,((c=window.screen)==null?void 0:c.height)||1/0),s=t.getBoundingClientRect(),n=s.left+s.width/2,o=s.top+s.height/2,i=window.innerWidth/2,r=e/2;return{dx:i-n,dy:r-o}}Array.prototype.partition=function(t){const e=[],s=[];for(const n of this)t(n)?e.push(n):s.push(n);return[e,s]};function _t(t){const e=Array.isArray(t)?t:Object.keys(t).length===0&&!at(t)?[{$$dummy:0}]:[t],s=e.map(n=>at(n)?Wt(n):Nt(n));return[e,s]}function Wt(t){return(e,s)=>{t.style[e]=`${s}${ft(t,e)}`}}function Nt(t){return(e,s)=>{t[e]=s}}const Y={};function ft(t,e){var o;if(Y[e]!==void 0)return Y[e];const s=getComputedStyle(t),n=((o=/[a-z]+|%/.exec(s[e]))==null?void 0:o[0])||"";return Y[e]=n,n}function Xt(t,e,s){return"$$dummy"in e[0]?[{$$dummy:{fromTo:[0,1]}}]:(Gt(e)?e.map(o=>{const i=getComputedStyle(o);return Object.fromEntries(Object.entries(s).map(([r],c)=>{const a=i[r].split(ft(o,r))[0];return[r,parseFloat(a)]}))}):e).map(o=>Object.fromEntries(Object.entries(s).map(([i,r])=>t==="to"?U(i,o[i],r):t==="from"?U(i,r,o[i]):U(i,...r))))}function U(t,e,s){return[t,{fromTo:[e,s]}]}function Vt(t,e){return t.map((s,n)=>({set:s,properties:e[n]}))}function Gt(t){return t[0]instanceof HTMLElement}function at(t){return t instanceof HTMLElement}function Kt(t){return"duration"in t}function d(t,e,s,n){if(typeof t!="string")ct("to",{},{},t);else if(t==="checkpoint")ee(e,s);else{if(t==="constantly")return $t(e);ct(t,e,s,n)}}function $t(t){let e=!1;return s=>{s?e||(Q.push(t),e=!0):(Ut(Q,t),e=!1)}}function ct(t,e,s,n){const[o,i]=_t(e),r=Xt(t,o,s),c=Vt(i,r);te(n,c)}function te(t,e){const s=e.map(o=>Object.entries(o.properties)),n=(o,i)=>{s.forEach((r,c)=>{var u;const a=e[c];for(const[l,p]of r){const{fromTo:[h,y]}=p,f=t.easeFn(o,h,y-h,i);a.set(l,f),(u=t.update)==null||u.call(t,o/i)}})};if(Kt(t)){let o=0;lt(t,n,()=>(o=o||performance.now(),[performance.now()-o,t.duration]))}else{const o=t.scroll,i=o.parentElement;t.offset||(t.offset=0),v.has(o)||v.set(o,{lastPixels:0,originalHeight:parseFloat(getComputedStyle(i).height),checkpoint:0}),v.get(o).lastPixels=t.pixels+t.offset,G=t.pixels+t.offset,t.offset+=v.get(o).checkpoint;const r=mt++;ne(o,r),lt(t,n,c=>{const u=c-i.offsetTop-t.offset;return[Zt(0,u/t.pixels,1),1]})}}function lt(t,e,s){C.push({fn:e,supplier:s,options:t,lastT:NaN})}const v=new Map;let ht=0,G=0;function ee(t,e){e=e||{};const s=t.parentElement;if(v.has(t)||v.set(t,{lastPixels:0,originalHeight:parseFloat(getComputedStyle(s).height),checkpoint:0}),ht+=e.pixels?e.pixels:G,v.get(t).checkpoint+=e.pixels?e.pixels:v.get(t).lastPixels,e.add2wrapper&&(s.style.height=v.get(t).originalHeight+v.get(t).checkpoint+"px"),e.toggle){const n=C.at(-1).fn,o=Array.isArray(e.toggle)?e.toggle:[e.toggle];C.at(-1).fn=(i,r)=>{for(const c of o)c.toggleIfNewState(i/r===1);n(i,r)}}}const j=new Set,C=[],Q=[];let mt=0,_=NaN,J=!1,K=!1,gt=0;function yt(t){const e=document.documentElement.scrollTop;if(e!=_||J||gt++<10){_=e,J=!1;for(const s of j){const n=C[s],{fn:o,supplier:i,options:r,lastT:c}=n,[a,u]=i(e),l=a/u>.99,p=l?1:a;n.lastT=p,J=r.constant||J,!(c===p&&!r.constant)&&o(l?u:a,u)}}Q.forEach(s=>s(t)),K&&window.requestAnimationFrame(yt)}function ne(t,e){new IntersectionObserver(n=>{n.forEach(o=>{o.isIntersecting?j.add(e):j.delete(e)})},{threshold:.1}).observe(t)}function se(){K=!0,window.requestAnimationFrame(yt)}function oe(){K=!1,window.requestAnimationFrame(()=>{J=!1,Q.length=0,C.length=0,_=NaN,v.clear(),ht=0,mt=0,G=0,gt=0})}const bt=(t,e,s,n)=>s*(t/n)+e,ie=(t,e,s,n)=>s*(t/=n)*t+e,re=(t,e,s,n)=>-s*(t/=n)*(t-2)+e,ae=(t,e,s,n)=>t<n/2?-s/2*(t=t*2/n)*(t-2)+e:s/2*(t=(t*2-n)/n)*t+e+s/2,z=(t,e,s,n)=>s*(t/=n)*t*t+e,ce=(t,e,s,n)=>s*((t=t/n-1)*t*t+1)+e,g=(t,e,s,n)=>(t/=n/2)<1?s/2*t*t*t+e:s/2*((t-=2)*t*t+2)+e,le=(t,e,s,n)=>s*(t/=n)*t*t*t*t+e;function de(){const t={alpha:1,angle:0,da:.001},e=P("mousemove",i=>{t.da=.01*(i.clientX/window.innerWidth-.5)}),s=document.querySelector("#carousel-canvas"),n=q(s,1.5);n.lineWidth=.003;const o=Array.from({length:100},i=>({y:Math.random()*-4,a:Math.random()*Math.TAU,r:Math.random()**2*3-1.5}));return ue(s,n,o,e,t),()=>{e(!1)}}function ue(t,e,s,n,o){d("to",o,{alpha:0},{scroll:t,easeFn:bt,pixels:t.clientHeight,constant:!0,update(i){n(i<=.9),pe(e,s,o),o.angle+=o.da}})}function pe(t,e,s){t.clear();for(let n=0;n<e.length;n++)fe(t,e[n],s)}function fe(t,{y:e,a:s,r:n},{alpha:o,angle:i}){const r=Math.cos(s+i)*n,a=2/(2+(1+Math.sin(s+i)*n)),u=(1.15+e/3)*o**2;t.fillStyle=t.strokeStyle=`rgb(250, 250, 250, ${u}`,t.save(),t.scale(a,a),t.beginPath(),t.arc(r,e+2,.04,0,Math.TAU),t.fill(),t.beginPath(),t.moveTo(r,3),t.lineTo(r,e+2),t.stroke(),t.restore()}const E={},vt=Symbol("reset-proxy");function k(t){const e=[],s={transitioned:!1,observe(o){e.push(o)},[vt](){e.length=0,n.transitioned=!1},toggleIfNewState(o){n.transitioned!==o&&(n.transitioned=o)}},n=new Proxy(s,{set(o,i,r){return o.transitioned=r,e.forEach(c=>c(r)),!0}});return(E[t]??(E[t]=[])).push(n),n}function he(t){var e;(e=E[t])==null||e.forEach(s=>s[vt]())}const wt=k("main-page"),St=k("main-page"),$=k("main-page"),tt=k("main-page"),At=k("main-page"),xt=k("main-page");function me(){const t=document.querySelector("#intro-text-container"),e=document.querySelectorAll("#intro-text-line > span");ge(t,e),ye(t,e),wt.observe(s=>{t.parentElement.classList.toggle("invisible")})}function ge(t,e){function s(n,o){d({scroll:t,pixels:o,offset:t.clientHeight*.5,easeFn:bt,update(i){e[n].style.opacity=`${+(i===1)}`}})}s(0,t.clientHeight*.75),s(1,t.clientHeight*1.5),s(2,t.clientHeight*1.625),d("checkpoint",t,{add2wrapper:!0})}function ye(t,e){const s=document.querySelector("#programming-text-line"),n=document.querySelectorAll("#programming-text-line > span"),o={switch:0,right:100,left:0};d("to",o,{right:0,switch:1},{scroll:t,easeFn:ce,pixels:t.clientHeight*.25,offset:t.clientHeight*.5,update(i){i<=.25&&n.forEach(r=>r.style.fontSize="5rem"),s.style.setProperty("--programming-text-line-bar-right",o.right+"%"),o.switch===1&&(e.forEach(r=>r.classList.toggle("invisible")),n.forEach(r=>r.classList.toggle("invisible")))}}),d("checkpoint",t),d("to",o,{left:100},{scroll:t,easeFn:z,pixels:t.clientHeight*.25,update(){s.style.setProperty("--programming-text-line-bar-left",o.left+"%")}}),d("checkpoint",t,{add2wrapper:!0,toggle:St})}function be(){const t=document.querySelector("#i-like-programming"),e=document.querySelector("#lisp-text-line"),s={x:0,y:0};let n=!1;St.observe(o=>{o&&!n&&(s.x=e.getElementsByTagName("span")[1].getBoundingClientRect().left-t.getBoundingClientRect().left,s.y=e.offsetTop-(window.innerHeight-t.clientHeight)/2,n=!0)}),ve(t,e,s)}function ve(t,e,s){const n=document.querySelector("#intro-text-container"),o=[...document.querySelectorAll("#programming-text-line > *")].filter(i=>i.id!=="i-like-programming");d("to",o,{opacity:0},{scroll:n,easeFn:g,pixels:n.clientHeight*2.25,offset:n.clientHeight*.75}),d({scroll:n,easeFn:g,pixels:n.clientHeight*2.25,offset:n.clientHeight*.75,update(i){t.style.fontSize="5rem";const r=g(i,0,s.x,1),c=g(i,0,s.y,1);t.style.translate=`${r}px ${c}px`}}),d("checkpoint",n,{add2wrapper:!0,pixels:n.clientHeight*3}),d("to",e,{opacity:1},{scroll:n,easeFn:g,pixels:n.clientHeight*1.5,offset:-n.clientHeight}),d("checkpoint",n,{add2wrapper:!0,toggle:$})}function we(){const t=document.querySelector("#i-like-programming"),e=document.querySelector("#lisp-text-line"),s={x:-t.getBoundingClientRect().left+e.getElementsByTagName("span")[1].getBoundingClientRect().left,y:-(window.innerHeight-t.clientHeight)/2+e.offsetTop},n={x:0,y:0};$.observe(o=>{const{x:i,y:r}=t.getBoundingClientRect();t.classList.toggle("fixed"),o?(t.style.top=r+"px",t.style.left=i+"px",t.style.translate="0 0",n.x=i,n.y=r):t.style.translate=`${s.x}px ${s.y}px`}),Se(e,t,n)}function Se(t,e,s){const n=document.querySelector("#intro-text-container"),o=document.querySelector("#low-lvl-text-line"),i=window.innerHeight-D(5.55),r=o.offsetLeft,c={lispOpacity:1,fontSize:5};d("to",c,{lispOpacity:0},{scroll:n,easeFn:g,pixels:n.clientHeight*1.25,offset:n.clientHeight*.25,update(){$.transitioned&&(t.style.opacity=c.lispOpacity+"")}}),d("to",c,{fontSize:2},{scroll:n,easeFn:g,pixels:n.clientHeight*1.5,offset:n.clientHeight*.25,update(a){e.style.fontSize=c.fontSize+"rem",e.style.left=g(a,s.x,r-s.x,1)+"px",e.style.top=g(a,s.y,i-s.y,1)+"px"}}),d("checkpoint",n,{add2wrapper:!0}),d("to",o.lastElementChild,{opacity:1},{scroll:n,easeFn:g,pixels:n.clientHeight*1.5,offset:-n.clientHeight*.75}),d("checkpoint",n,{add2wrapper:!0})}const Ae=`attribute vec4 a_position;\r
\r
void main(void) {\r
    gl_Position = a_position;\r
}\r
`,xe=`#ifdef GL_ES\r
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
`;function ke(t,e){const{vertexSources:s,fragmentSources:n,viewport:o=[0,0,t.width,t.height],attributes:i={},uniforms:r={},drawMode:c}=e,a=t.getContext("webgl")||t.getContext("experimental-webgl"),u=n.map(m=>dt(a,a.FRAGMENT_SHADER,m)),l=s.map(m=>dt(a,a.VERTEX_SHADER,m)),p=a.createProgram();u.concat(l).forEach(m=>{a.attachShader(p,m)}),a.linkProgram(p),a.useProgram(p),Object.entries(i).forEach(([m,{data:b,type:T,size:M}])=>{const F=a.createBuffer();a.bindBuffer(a.ARRAY_BUFFER,F),a.bufferData(a.ARRAY_BUFFER,b,a.STATIC_DRAW);const st=a.getAttribLocation(p,m);a.enableVertexAttribArray(st),a.vertexAttribPointer(st,M,a[T],!1,0,0)}),a.viewport(...o),y(r);function h(m){const b={};for(const[T,M]of Object.entries(m))b[T]={type:r[T].type,values:M};y(b)}function y(m){Object.entries(m).forEach(([b,{type:T,values:M}])=>{const F=a.getUniformLocation(p,b);F&&a[`uniform${T}`].apply(a,[F,...M])})}function f(m,b){a.useProgram(p),a.drawArrays(a[c],m,b)}function O(m,b=a.COLOR_BUFFER_BIT){a.clearColor(...m),a.clear(b)}function Z(){var m;(m=a.getAttachedShaders(p))==null||m.forEach(b=>{a.detachShader(p,b),a.deleteShader(b)}),a.deleteProgram(p)}return{updateUniforms:h,draw:f,clear:O,dispose:Z}}function dt(t,e,s){const n=t.createShader(e);return t.shaderSource(n,s),t.compileShader(n),n}let W=!1,et=!1;function Te(){const t=document.querySelector("#i-like-programming"),e=document.querySelector("#dimensions-line"),s=document.querySelector("#white-out-container"),n=document.querySelector("#starry-canvas"),o=document.querySelector("#graphics-canvas");let i=Oe(o),r=Je(i);return He(e,n,o,t,r),Ie(n,t,s),tt.observe(c=>{if(e.classList.toggle("invisible"),o.parentElement.classList.toggle("invisible"),s.classList.toggle("invisible"),t.classList.toggle("drop-shadow"),r(c),c){const{top:a,right:u}=t.getBoundingClientRect();e.style.top=a+D(5)+"px",e.style.left=u+D(.475)+"px"}}),()=>{W=!1,et=!1,r(!1),r=void 0,i.dispose(),i=void 0}}function He(t,e,s,n,o){const i=document.querySelector("#intro-text-container"),r=document.querySelector("#gc-cover-1"),c=document.querySelector("#gc-cover-2"),a=t.getElementsByTagName("span")[1],u={dimension:1,uncovered:0};d("to",u,{dimension:2,uncovered:1},{scroll:i,easeFn:re,pixels:i.clientHeight*2.5,update(){a.textContent=`in ${u.dimension.toFixed(1)}D`;const p=50*(1-(u.dimension-1))+"vh";r.style.height=p,c.style.height=p,u.dimension===2?e.classList.remove("invisible"):e.classList.add("invisible")}}),d("checkpoint",i,{add2wrapper:!0});const l={dimension:2};d("to",l,{dimension:3},{scroll:i,easeFn:ie,pixels:i.clientHeight*2.5,update(p){W=l.dimension>2,W?(n.textContent=`I like programming in ${l.dimension.toFixed(1)}D`,a.classList.add("invisible")):(n.textContent="I like programming",a.classList.remove("invisible")),et=p===1;const h=1-(l.dimension-2),y=90*(l.dimension-2);s.parentElement.style.transform=`scale(${h}) rotate3d(1, 1, 1, ${y}deg)`,o(u.uncovered!==0&&l.dimension<3)}}),d("checkpoint",i,{add2wrapper:!0})}function Ie(t,e,s){const n=document.querySelector("#intro-text-container"),o=q(t),i=Array.from({length:3},c=>Array.from({length:50},a=>({x:Math.random()*o.rangeX-o.rangeX/2,y:Math.random()*o.rangeY-o.rangeY/2,r:Math.random()*.004}))),r={dimension:3,opacity:1,scale:1,x:1};d("to",r,{dimension:9.9,opacity:0,scale:5},{scroll:n,easeFn:le,pixels:n.clientHeight*3.5,offset:-n.clientHeight*1.5,update(c){et&&(e.textContent=`I like programming in ${r.dimension.toFixed(1)}D`),e.style.opacity=`${r.opacity}`,e.style.transform=`scale(${r.scale})`,De(o,i,c)}}),d("to",r,{x:7.9},{scroll:n,easeFn:z,pixels:n.clientHeight*2,update(){const c=1-r.x**.75,a=90*r.x;s.style.transform=`scale(${c}) rotate3d(1, 2, 1, ${a}deg)`}}),d("checkpoint",n,{add2wrapper:!0,toggle:At})}function De(t,e,s){t.clear(),t.lineCap="round",s=Math.max(0,s-.15)**4;const n=80*(.8-s**.5);for(let o=0;o<e.length;o++){const i=e[o],r=[0,60,240][o];t.strokeStyle=`hsla(${r}, 65%, 88%, ${n}%)`,t.beginPath();for(let c=0;c<i.length;c++){const a=i[c],u=2*a.x*s,l=2*a.y*s;t.moveTo(a.x-u,a.y-l),t.lineTo(a.x+u+a.r,a.y+l+a.r),t.lineWidth=a.r}t.stroke()}}function Oe(t){t.height=window.innerHeight,t.width=window.innerWidth;const e=new Float32Array([-1,-1,1,-1,-1,1,1,1]);return ke(t,{vertexSources:[Ae],fragmentSources:[xe],attributes:{a_position:{data:e,type:"FLOAT",size:2}},uniforms:{u_resolution:{type:"2f",values:[t.width,t.height]},u_time:{type:"1f",values:[0]}},drawMode:"TRIANGLE_STRIP"})}const Me=Date.now();function Je(t){return d("constantly",()=>{const e=(Date.now()-Me)/1e3;t.updateUniforms({u_time:[e]}),t.draw(0,4)})}const Pe="/portfolio/assets/amonamarth-d9f155dc.webp",Ce="/portfolio/assets/rammstein-b2624c6e.webp",Fe="/portfolio/assets/eluveitie-a73c8e67.webp",Ee="/portfolio/assets/gnr-c1c96262.webp",Re="/portfolio/assets/greenday-846eef14.webp",Le="/portfolio/assets/nightwish-e8d995fd.webp",Be="/portfolio/assets/factorio-2d88122a.webp",Qe="/portfolio/assets/assettocorsa-c65cbe9c.webp",qe="/portfolio/assets/minecraft-f16a6a9f.webp",ze="data:image/webp;base64,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",Ze="/portfolio/assets/mclarenf1-00a92b05.webp",Ye="/portfolio/assets/rx7-5fbfd767.webp",Ue=Object.freeze(Object.defineProperty({__proto__:null,amonamarth:Pe,assettocorsa:Qe,eluveitie:Fe,factorio:Be,forzahorizon:ze,gnr:Ee,greenday:Re,mclarenf1:Ze,minecraft:qe,nightwish:Le,rammstein:Ce,rx7:Ye},Symbol.toStringTag,{value:"Module"})),kt=Object.values(Ue).sort(()=>.5-Math.random());function je(){const t=document.querySelector("#interests-canvas"),e=document.querySelector("#white-out-container"),s=t.parentElement;At.observe(n=>{s.classList.toggle("invisible"),e.classList.toggle("invisible"),t.style.transform="translateY(0px)"}),_e(t),We(t)}function _e(t){const e=document.querySelector("#interests-text-line"),s=[...e.getElementsByTagName("span")],n=s.length-1;s.forEach((o,i)=>{d({scroll:t,easeFn:ae,pixels:t.clientHeight*1.5,offset:t.clientHeight*(i+8)*.125,update(r){o.classList.toggle("interests-text-word-stage-1",r>.2),i===n&&e.classList.toggle("interests-text-word-stage-2",r===1)}})}),d("checkpoint",t,{add2wrapper:!0})}function We(t){const e=pt(kt),s=q(t);s.scale(1,-1);const n=s.rangeY/2-.1,o=Array.from({length:12},(r,c)=>({y:0,a:Math.TAU*c/24-Math.PI*.75,r:n*4}));d("to",{x:90},{x:0},{scroll:t,easeFn:z,pixels:t.clientHeight*3.25,update(r){t.classList.toggle("invisible",r===0),t.style.transform="translateY(0)",Ne(s,e,o,r)}}),d("checkpoint",t,{add2wrapper:!0,toggle:xt})}function Ne(t,e,s,n){t.clear();const o=t.rangeX/2-.1,i=n*Math.TAU*1.25;for(let r=0;r<s.length;r++)Xe(t,s[r],e[kt[r]],i,o)}function Xe(t,{y:e,a:s,r:n},o,i,r){const c=s+i*.85;if(c<0||Math.TAU<c)return;const a=Math.cos(c)*n,l=1.8/(Math.sin(c)*n+3.6);t.save(),t.scale(l,l),t.moveTo(a+r,e),t.save(),t.beginPath(),t.shadowBlur=5,t.shadowColor="#242424",t.fillStyle="#24242422",t.translate(a+r*1.5,e+.4),t.scale(.2,.025),t.arc(0,0,1,0,Math.PI*2),t.fill(),t.restore(),t.drawImage(o,a+r*1.5-.2,e-.2,.4,.4),t.restore()}const Ve="/portfolio/assets/lightbulb-on-7bcf1de2.webp",Ge="data:image/webp;base64,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snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32rAAA/v/eCKhYgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=",Ke=Object.freeze(Object.defineProperty({__proto__:null,lightBulbOff:Ge,lightBulbOn:Ve},Symbol.toStringTag,{value:"Module"})),x=Array.from({length:30},(t,e)=>({x:0,y:.0175*e,a:Math.PI/2,l:.0175})),$e={x:1,y:0,a:0,l:0},A=[];let H=1,I=1,R=1,L=1,nt=0,w=0,Tt=pt(Object.values(Ke));const[tn,en]=Object.keys(Tt),S={isOn:!0,img(){return Tt[this.isOn?en:tn]}};function nn(){const t=document.querySelector("#interests-canvas"),e=document.querySelector("#turn-off-text-line"),s=document.querySelector("#know-you-button"),n=document.querySelector("#know-you-container"),o=t.parentElement,i=t.getContext("2d");xt.observe(f=>{f?t.style.transform=`translateY(${-t.clientHeight*.66}px)`:t.style.transform="translateY(0px)",e.classList.toggle("invisible",!f)});const r=s.getBoundingClientRect(),c=r.top-r.height/2,a=r.left+r.width/2,u=P("mousemove",f=>{const O=f.clientX,Z=f.clientY;s.style.transform=`translate(${(O-a)/5}px, ${(Z-c)/5}px)`}),l=P("mousemove",f=>{R=f.clientX,L=f.clientY,N(t,i),window.requestAnimationFrame(()=>X(i,y))}),p=P("touchmove",f=>{R=f.touches[0].clientX,L=f.touches[0].clientY,N(t,i),window.requestAnimationFrame(()=>X(i,y))}),h=f=>{l(f),p(f)},y=f=>{S.isOn=f??!S.isOn,A.length=0,S.isOn?o.style.backgroundColor="#f5f5f5":o.style.backgroundColor="#242424",e.classList.toggle("invisible",!S.isOn),n.classList.toggle("invisible",S.isOn),u(!S.isOn)};return s.onclick=()=>{const f=document.querySelector("#about-me-btn");f.scrollIntoView({behavior:"smooth",block:"center"}),window.addEventListener("scrollend",()=>{f.click()},{once:!0})},sn(t,e,h,y),()=>{u(!1),h(!1),h(!1),H=1,I=1,R=1,L=1,nt=0,w=0,S.isOn=!0}}function sn(t,e,s,n){const o=document.querySelector("#interests-text-line"),i=t.getContext("2d"),r={y:0};let c=0;d("to",r,{y:t.clientHeight*.66},{scroll:t,easeFn:g,pixels:t.clientHeight*1.5,offset:t.clientHeight*.5,update(a){s(a>.1),o.style.transform=`translate(-50%, -50%) translateY(${r.y}px)`,t.style.transform=`translateY(${r.y-t.clientHeight*.66}px)`,e.style.transform=`translate(-25%, calc(${r.y-t.clientHeight*.66}px - 50%))`,w=a,nt=r.y-t.clientHeight*.66,N(t,i),X(i,n),a<.8&&a<c&&n(!0),c=a,A.length=0}}),d("checkpoint",t,{add2wrapper:!0})}function N(t,e){H=(R-t.clientWidth/2)*(e.rangeX/t.clientWidth),I=(L-nt-t.clientHeight/2)*(e.rangeY/t.clientHeight)}function X(t,e){on(),t.clear(),t.fillStyle="black",t.drawImage(S.img(),.5,-.75,1,1),t.beginPath(),t.arc(1,0,.02,0,Math.TAU);const s=x.at(-1);for(const n of x){const o=n.x+Math.cos(n.a)*n.l*w,i=n.y+Math.sin(n.a)*n.l*w;n===s&&(A.push(Math.hypot(o-1,i+(1-w))),A.length>15&&(A.shift(),A.at(-1)>.5&&Yt(A)>.25&&e())),t.moveTo(o,i),t.arc(o,i,.005*w,0,Math.TAU)}t.fill()}function on(){!S.isOn&&Math.hypot(H-1,I)>.0175*35&&(A.length=0,H=1,I=1);for(let t=x.length-1;t>=0;t--){const e=x[t];e.a=Math.atan2(I-e.y,H-e.x),e.x=H-=Math.cos(e.a)*e.l*w,e.y=I-=Math.sin(e.a)*e.l*w}for(let t=0;t<x.length;t++){const e=x[t-1]||$e,s=x[t];s.x=e.x+Math.cos(e.a)*e.l*w,s.y=e.y+Math.sin(e.a)*e.l*w}}function Ht(t,e,s){let n,o;t.type="button",t.addEventListener("click",i=>{if(t.classList.toggle("activated-fill-button")){const{dx:c,dy:a}=jt(t);t.style.transform=`translate(${c}px, ${a}px)`,t.style.zIndex="100",document.documentElement.style.overflowY="hidden",o=setTimeout(()=>{e(t.getAttribute("data-route"))(),document.documentElement.style.overflowY="visible"},1e3),clearTimeout(n)}else t.style.transform="",document.documentElement.style.overflowY="visible",n=setTimeout(()=>{t.style.zIndex=""},500),clearTimeout(o);s==null||s()})}function rn(t){const e=[...document.querySelectorAll(".start-diamond-button")],[[s],n]=e.partition(c=>c.id==="auto-scroll-btn");let o=0;const i=()=>e.forEach((c,a)=>{c.style.scale=c.classList.contains("activated-fill-button")?"1":`${1+o**3/(1.3+Math.abs(a-2)**4)}`}),r=new IntersectionObserver(c=>{o=c[0].intersectionRatio,i()},{threshold:Array.from({length:10},(c,a)=>a/10),rootMargin:`-${D(8)}px`});return r.observe(s.parentElement),an(e,s),n.forEach(c=>Ht(c,t,i)),()=>{document.documentElement.style.overflowY="visible",r.disconnect()}}function an(t,e){let s=!1;e.addEventListener("click",()=>{if(s)return;let n=window.scrollY;const o=document.body.scrollHeight-window.innerHeight;let i=n,r=!1,c;s=!0;const a=d("constantly",u=>{c??(c=u),Math.abs(i-window.scrollY)>1&&(r=!0);const l=u-c;c=u,i+=l,(i>=o||r)&&(s=!1,e.blur(),a(!1)),window.scrollTo(0,i)});a(!0)})}const It=4;function cn(){const t=document.querySelector("#triangles-container"),e=document.querySelector("#triangles-canvas");t.style.height=e.clientHeight*2+"px",ln(e,t,{recurseLim:It,blackOpacity:0,prevScale:1,scale:1,cy:0})}function ln(t,e,s){const n=q(t);d("to",s,{scale:16,cy:3**.5*.5/5-.2,recurseLim:4,blackOpacity:1},{scroll:t,easeFn:z,pixels:t.clientHeight*1.25,offset:t.clientHeight*-.25,update(){e.style.backgroundColor=`rgb(0, 0, 0, ${s.blackOpacity})`,n.clear();const o=s.scale/s.prevScale;n.scale(o,o),s.prevScale=s.scale,B(n,0,s.cy+.15,1,It)}}),d("checkpoint",e,{toggle:wt})}function B(t,e,s,n,o,i=o){const r=n/2,c=Math.sqrt(3)*n/4;o>0&&(B(t,e-r/2,s-c/2,n/2,o-.5,i),B(t,e+r/2,s-c/2,n/2,o-1.3,i),B(t,e,s+c/2,n/2,o-1.8,i)),t.fillStyle=`rgb(250, 250, 250, ${.07*(i-o)})`,t.beginPath(),t.lineTo(e+r,s-c),t.lineTo(e-r,s-c),t.lineTo(e,s+c),t.fill()}const Dt=k("main");function dn(){const t=document.querySelector("#i-like-programming"),e=document.querySelector("#programming-types-container");Dt.observe(s=>{if(e.classList.toggle("invisible",!s),s){const{top:n,right:o}=t.getBoundingClientRect();e.style.top=n+"px",e.style.left=o+"px"}}),tt.observe(s=>{e.classList.toggle("invisible",s)}),un(t),pn()}function un(t){const e=document.querySelector("#intro-text-container"),s=document.querySelector("#low-lvl-text-line"),n={llpOpacity:1,fontSize:2,x:0,y:0};d("to",n,{llpOpacity:0},{scroll:e,easeFn:g,pixels:e.clientHeight*1.25,offset:e.clientHeight*.25,update(){s.style.opacity=n.llpOpacity+""}});const o={fontSize:3.25,x:-window.innerWidth/2,y:-(window.innerHeight-D(3.25))/2};d("to",n,o,{scroll:e,easeFn:g,pixels:e.clientHeight*1.5,offset:e.clientHeight*.25,update(){t.style.fontSize=n.fontSize+"rem",t.style.translate=`${n.x}px ${n.y}px`}}),d("checkpoint",e,{add2wrapper:!0,pixels:e.clientHeight*1.75,toggle:Dt})}function pn(){const t=document.querySelector("#intro-text-container"),e=document.querySelector("#programming-types-types"),s={y:-e.parentElement.getBoundingClientRect().height/2},n=e.getBoundingClientRect().height-s.y-D(3.25*2.3);d("to",s,{y:n},{scroll:t,easeFn:g,pixels:t.clientHeight*4.5,offset:t.clientHeight*-.7,update(){e.style.translate=`0 ${-s.y}px`}}),d("checkpoint",t,{toggle:tt})}const fn=(t,e)=>`
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
     --><span>Kavin.</span>
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
`,hn=t=>{const e=[de,rn,cn,me,be,we,dn,Te,je,nn];let s;return{path:"/",html:fn(window.innerHeight,window.innerWidth),construct(){window.scrollTo(0,0),setTimeout(()=>{window.scrollTo(0,0),s=e.map(n=>n(t)),se()},0)},destruct(){he("main-page"),s.forEach(n=>{n==null||n()}),oe()}}};const mn=V("",`
  <div id="mobile-main__disclaimer-container">
    (Use this site on desktop for the full main page experience)
  </div>
  <div id="mobile-main__buttons-container">
    <button class="start-diamond-button" data-route="/github">github</button>
    <button class="start-diamond-button" data-route="/about-me" id="about-me-btn">about me</button>
    <button class="start-diamond-button" data-route="/projects">projects</button>
    <button class="start-diamond-button" data-route="/linkedin">linkedin</button>
  </div>
`,!0),gn=t=>({path:"/",html:mn,construct(){document.querySelectorAll(".start-diamond-button").forEach(e=>Ht(e,t))}}),yn=t=>{const e=gn(t),s=hn(t);let n=i();const o=P("resize",()=>{const r=n;n=i(),(n===s||r!==n)&&t("/")()});function i(){return window.innerWidth/window.innerHeight>4/3?s:e}return{path:"/",html(){return n.html},construct(){var r;(r=n.construct)==null||r.call(n),o(!0)},destruct(){var r;o(!1),(r=n.destruct)==null||r.call(n)}}},bn=ut({path:"/linkedin",url:{}.VITE_LINKEDIN_URL??"",disabled:!!{}.VITE_LINKEDIN_URL});Jt({baseURL:"/portfolio",hashRouter:!0,providers:[yn,Mt,Bt,bn,zt,Ct]});
