(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}})();const Jt=`
  <div id="background-img">
    <div id="err-code">
      <span class="err-code-char">4</span><!--
   --><span class="err-code-char">0</span><!--
   --><span class="err-code-char">4</span>
    </div>
    <a href="/" data-client id="home-button"></a>
  </div>
`,Mt=()=>({path:"*",html:Jt});Math.TAU=Math.PI*2;function B(t,e=1){const n=t.getContext("2d"),s=t.height=window.innerHeight,o=t.width=window.innerWidth;t.height*=e;const r=o/s,i=r>1?s/2:o/2;return n.height=s,n.width=o,n.clear=()=>n.clearRect(-i,-i,2*i,2*i),n.translate(o/2,s/2),n.scale(i,-i),n.rangeX=r>1?2*r:2,n.rangeY=r>1?2:2/r,n}function Pt(t,e,n){return Math.min(Math.max(t,e),n)}let ot;function Q(t){return t*(ot||(ot=parseFloat(getComputedStyle(document.documentElement).fontSize)))}function ut(t){const e={};return t.forEach(n=>{const s=new Image;s.src=n,e[n]=s}),e}function Ft(t){let e=t[0],n=t[0];for(let s=1;s<t.length;s++)t[s]>e&&(e=t[s]),t[s]<n&&(n=t[s]);return e-n}function E(t,e){let n=!1;return s=>{s?n||(window.addEventListener(t,e,{passive:!0}),n=!0):n&&(window.removeEventListener(t,e),n=!1)}}function Ct(t,e){const n=t.indexOf(e);return n>-1&&t.splice(n,1),t}function Et(t){var a,u;const e=[window.innerHeight];(a=window.screen)!=null&&a.height&&e.push((u=window.screen)==null?void 0:u.height);const n=Math.min(...e),s=t.getBoundingClientRect(),o=s.left+s.width/2,r=window.innerWidth/2,i=s.top+s.height/2,c=n/2;return{dx:r-o,dy:c-i}}function pt(t,e){const n=[],s=[];for(const o of t)e(o)?n.push(o):s.push(o);return[n,s]}function Rt(t){const e=t.baseURL||"",n=t.hashRouter?"/#":"",s=e+n,o=document.querySelector("#app");let r;const i=d=>()=>{window.history.pushState(null,"",s+d),f()},[c,[a]]=pt(t.providers.map(d=>d(i)),d=>d.path!=="*"),u=c.map(d=>({...d,path:it(s+d.path)})),f=()=>{var S,M;const d=it(location.pathname+location.hash),p=t.hashRouter&&d===e?s:d,h=u.find(z=>z.path===p)??a;(S=r==null?void 0:r.destruct)==null||S.call(r),r=h,h.forceReload&&Lt(`${h.path}:reloaded`),o.innerHTML=typeof h.html=="string"?h.html:h.html(),(M=h.construct)==null||M.call(h)};window.addEventListener("popstate",f),window.addEventListener("load",f),document.addEventListener("click",d=>{const p=d.target;p.tagName==="A"&&p.getAttribute("data-client")!==null&&(d.preventDefault(),i(p.getAttribute("href"))())})}function Lt(t){sessionStorage.getItem(t)?sessionStorage.removeItem(t):(sessionStorage.setItem(t,"true"),window.location.reload())}function it(t){return t.endsWith("/")?t.slice(0,-1):t}const Bt=()=>({path:"/github",html:'<div id="container">Redirecting...</div>',construct(){document.location.replace("https://github.com/toptobes")}});function V(t,e,n){let s="";const o=t.split("/").filter(r=>r).map(r=>(s+="/"+r,`
      <span style="color: dodgerblue;">/</span>
      <a href="${s}" data-client id="path-segment" style="color: dodgerblue;">${r}</a>
    `)).join("");return`
    <div id="page-container">
      <div id="path-container" style="${n?"justify-content: center;":""}">
        <span>
          <span style="opacity: .75; color: chartreuse;">kavin@porfolio</span><!--
       --><span style="opacity: .75;">:</span>
        </span>
        ${n?"":'<div class="breaker"></div>'}
        <a href="/" data-client id="home-icon" style="color: dodgerblue;"></a>
        ${o}
        <span style="opacity: .75; scale: .95;">$</span>
      </div>
      <div id="page-body">
        ${e}
      </div>
    </div>
  `}function Qt(){return qt.map(t=>`
    <a href="${t.url}" class="card">
      <h1>${t.name}${t.stars?" ("+t.stars+"☆)":""}</h1>
      <p>${t.desc}</p>
      <div class="tags-container">
        ${Zt(t.tags)}
      </div>
    </a>
  `).join("")}function Zt(t){return t.map(e=>`
    <div class="tag">
      ${rt[e]?`<span class="tag-dot" style="background: ${rt[e]};"></span>`:""}
      ${e}
    </div>
  `).join("")}const rt={Kotlin:"rgb(169, 123, 255)",Haskell:"rgb(94, 80, 134)",TypeScript:"rgb(49, 120, 198)",Python:"rgb(53, 114, 165)",JavaScript:"rgb(241, 224, 90)",Assembly:"rgb(110, 76, 19)",Java:"rgb(176, 114, 25)",CUDA:"rgb(58, 78, 58)",C:"rgb(85, 85, 85)",Lisp:"rgb(200, 200, 200)",SCSS:"rgb(198, 83, 140)"},qt=[{name:"Voxyl-Overlay",desc:"A desktop application utility for certain Minecraft servers",tags:["Kotlin","Compose Multiplatform","App"],url:"https://github.com/BWP-Stats/Voxyl-Overlay",stars:6},{name:"Blacksmith",desc:"A fully-fledged declarative FTC Robotics software library complete w/ documentation site",tags:["Kotlin","Java","TypeScript","ReactJS","Library"],url:"https://github.com/toptobes/robot-code-v2",stars:3},{name:"File-System-System",desc:"A file-system based programming language that transpiles to JS",tags:["Haskell","Compiler"],url:"https://github.com/toptobes/file-system-system"},{name:"2048-ASM",desc:"A colored 2048 terminal game made in MASMx64 assembly",tags:["Assembly","CLI"],url:"https://github.com/toptobes/ASMPlaygroundV2",stars:3},{name:"Magic-Square-ASM",desc:"Magic square creator & checker using AVX512 & x87 (made for a school project who wanted it in Python lol)",tags:["Assembly","SIMD","CLI"],url:"https://github.com/toptobes/ASMPlaygroundV2",stars:3},{name:"BadVM",desc:"A small 16-bit VM written in C w/ a custom typed Assembly lang written in Kotlin",tags:["C","Kotlin","Assembly","VM","Compiler"],url:"https://github.com/toptobes/BadVm",stars:1},{name:"Chess3D",desc:'A WIP multiplayer 3D chess game (4 layers of boards) for the web made in collaboration with <span style="text-decoration: underline;">T-Lind</span>',tags:["TypeScript","SCSS","ExpressJS","ReactJS","ThreeJS","WebSockets","SQLite"],url:"https://github.com/T-Lind/chess-3d-dev"},{name:"KineticClock",desc:"A small but extremely satisfying kinetic clock desktop app",tags:["Kotlin","Compose Multiplatform","App"],url:"https://github.com/toptobes/KineticClock",stars:2},{name:"Astra-Spring-Demo",desc:"An open-source demonstration of AstraDB's indexing capabilities from my internship @ DataStax",tags:["TypeScript","Java","Python","SCSS","Spring","WebSockets","AI/ML","AstraDB"],url:"https://github.com/toptobes/astra-demo",stars:4},{name:"Sentinel Dashboard",desc:"An unfinished dashboard and backend api for an abandoned Discord bot",tags:["JavaScript","TypeScript","ReactJS","NestJS","MongoDB"],url:"https://github.com/VXFreelance/SentinelWebsite"},{name:"BadLisp",desc:"A badly-implemented lisp that compiles down to C",tags:["C","Lisp","Compiler"],url:"https://github.com/toptobes/BadLisp",stars:1},{name:"brainf",desc:"An extremely small (192 chars) brainf**k interpreter",tags:["C","Interpreter"],url:"https://github.com/toptobes/brainf",stars:1},{name:"jsonh",desc:"A quick 'n' dirty JSON prettifier/minifier",tags:["Haskell","CLI"],url:"https://github.com/toptobes/jsonh"},{name:"MC-1.8.9-Utils",desc:"A collection of small utility mods for Minecraft using the ChatTriggers framework",tags:["JavaScript"],url:"https://github.com/toptobes/MC-1.8-Utils",stars:1},{name:"Sorts-CS3",desc:"Small program using CUDA w/ the CUB library to sort 1B ints as fast as possible for my high school's CS class's speed sorting comp :)",tags:["CUDA","SIMT"],url:"https://github.com/toptobes/sorts_cs3",stars:1}],zt=V("/projects",`
  <br>
  <blockquote id="fun-fact-container">
    <p>
      <span style="font-weight: bolder;">Fun fact:</span>
      this website was made with absolutely no third party dependencies; it involved the creation of a
      tweening library, a small declarative webgl shader library, and a-client side router.
    </p>
    <div style="height: .25em;"></div>
    <p style="font-size: .8em;">
      *If you consider TypeScript a third party dependency, I don't wanna be friends with you :(
    </p>
  </blockquote>
  <br>
  <div id="cards-container">
    ${Qt()}
  </div>
`),Yt=()=>({path:"/projects",html:zt,construct(){window.scrollTo(0,0)}});const Ut="/portfolio/assets/profile-icon-d0fc271b.svg",Wt=V("/about-me",`
  <div id="body-container">
    <div>
      <br>
      <p>Hey! I'm Kavin, a passsionate programmer, car enthusiast, and metalhead from the Austin area.</p>
      <br>
      <p>I'm current a student @ Austin Community College, pursuing an undergraduate degree in Computer Science.</p>
      <br>
      <p>I enjoy all facets of programming, and have no clue what to put for the rest of this page.</p>
      <br>
      <p>
        Main languages:
        <ul id="languages-list">
          <li>Kotlin + Java</li>
          <li>TypeScript + JavaScript</li>
          <li>Haskell</li>
          <li>C</li>
        </ul>
      </p>
      <br>
      <a href="/" data-client id="back-to-home-btn">🠔 Back to home</a>
    </div>
    <div id="squares-container">
      <div id="square-3"></div>
      <div id="square-2"></div>
      <div id="square-1">
        <img src="${Ut}" alt="Picture of me" id="profile-pic">
      </div>
    </div>
  </div>
`),jt=()=>({path:"/about-me",html:Wt,construct(){window.scrollTo(0,0),setTimeout(()=>{window.scrollTo(0,0)},0)}});function Nt(t){const e=Array.isArray(t)?t:Object.keys(t).length===0&&!at(t)?[{$$dummy:0}]:[t],n=e.map(s=>at(s)?Xt(s):Gt(s));return[e,n]}function Xt(t){return(e,n)=>{t.style[e]=`${n}${ft(t,e)}`}}function Gt(t){return(e,n)=>{t[e]=n}}const Y={};function ft(t,e){var o;if(Y[e]!==void 0)return Y[e];const n=getComputedStyle(t),s=((o=/[a-z]+|%/.exec(n[e]))==null?void 0:o[0])||"";return Y[e]=s,s}function Vt(t,e,n){return"$$dummy"in e[0]?[{$$dummy:{fromTo:[0,1]}}]:($t(e)?e.map(o=>{const r=getComputedStyle(o);return Object.fromEntries(Object.entries(n).map(([i],c)=>{const a=r[i].split(ft(o,i))[0];return[i,parseFloat(a)]}))}):e).map(o=>Object.fromEntries(Object.entries(n).map(([r,i])=>t==="to"?U(r,o[r],i):t==="from"?U(r,i,o[r]):U(r,...i))))}function U(t,e,n){return[t,{fromTo:[e,n]}]}function Kt(t,e){return t.map((n,s)=>({set:n,properties:e[s]}))}function $t(t){return t[0]instanceof HTMLElement}function at(t){return t instanceof HTMLElement}function _t(t){return"duration"in t}function l(t,e,n,s){if(typeof t!="string")ct("to",{},{},t);else if(t==="checkpoint")ne(e,n);else{if(t==="constantly")return te(e);ct(t,e,n,s)}}function te(t){let e=!1;return n=>{n?e||(R.push(t),e=!0):(Ct(R,t),e=!1)}}function ct(t,e,n,s){const[o,r]=Nt(e),i=Vt(t,o,n),c=Kt(r,i);ee(s,c)}function ee(t,e){const n=e.map(o=>Object.entries(o.properties)),s=(o,r)=>{n.forEach((i,c)=>{var u;const a=e[c];for(const[f,d]of i){const{fromTo:[p,h]}=d,S=t.easeFn(o,p,h-p,r);a.set(f,S),(u=t.update)==null||u.call(t,o/r)}})};if(_t(t)){let o=0;lt(t,s,()=>(o=o||performance.now(),[performance.now()-o,t.duration]))}else{const o=t.scroll,r=o.parentElement;t.offset||(t.offset=0),b.has(o)||b.set(o,{lastPixels:0,originalHeight:parseFloat(getComputedStyle(r).height),checkpoint:0}),b.get(o).lastPixels=t.pixels+t.offset,K=t.pixels+t.offset,t.offset+=b.get(o).checkpoint;const i=mt++;se(o,i),lt(t,s,c=>{const u=c-r.offsetTop-t.offset;return[Pt(0,u/t.pixels,1),1]})}}function lt(t,e,n){J.push({fn:e,supplier:n,options:t,lastT:NaN})}const b=new Map;let ht=0,K=0;function ne(t,e){e=e||{};const n=t.parentElement;if(b.has(t)||b.set(t,{lastPixels:0,originalHeight:parseFloat(getComputedStyle(n).height),checkpoint:0}),ht+=e.pixels?e.pixels:K,b.get(t).checkpoint+=e.pixels?e.pixels:b.get(t).lastPixels,e.add2wrapper&&(n.style.height=b.get(t).originalHeight+b.get(t).checkpoint+"px"),e.toggle){const s=J.at(-1).fn,o=Array.isArray(e.toggle)?e.toggle:[e.toggle];J.at(-1).fn=(r,i)=>{for(const c of o)c.toggleIfNewState(r/i===1);s(r,i)}}}const W=new Set,J=[],R=[];let mt=0,j=NaN,D=!1,$=!1,gt=0;function yt(){const t=document.documentElement.scrollTop;if(t!=j||D||gt++<10){j=t,D=!1;for(const e of W){const n=J[e],{fn:s,supplier:o,options:r,lastT:i}=n,[c,a]=o(t),u=c/a>.99,f=u?1:c;n.lastT=f,D=r.constant||D,!(i===f&&!r.constant)&&s(u?a:c,a)}}R.forEach(e=>e()),$&&window.requestAnimationFrame(yt)}function se(t,e){new IntersectionObserver(s=>{s.forEach(o=>{o.isIntersecting?W.add(e):W.delete(e)})},{threshold:.1}).observe(t)}function oe(){$=!0,window.requestAnimationFrame(yt)}function ie(){$=!1,window.requestAnimationFrame(()=>{D=!1,R.length=0,J.length=0,j=NaN,b.clear(),ht=0,mt=0,K=0,gt=0})}const bt=(t,e,n,s)=>n*(t/s)+e,re=(t,e,n,s)=>n*(t/=s)*t+e,ae=(t,e,n,s)=>-n*(t/=s)*(t-2)+e,ce=(t,e,n,s)=>t<s/2?-n/2*(t=t*2/s)*(t-2)+e:n/2*(t=(t*2-s)/s)*t+e+n/2,Z=(t,e,n,s)=>n*(t/=s)*t*t+e,le=(t,e,n,s)=>n*((t=t/s-1)*t*t+1)+e,y=(t,e,n,s)=>(t/=s/2)<1?n/2*t*t*t+e:n/2*((t-=2)*t*t+2)+e,de=(t,e,n,s)=>n*(t/=s)*t*t*t*t+e;function ue(){const t={alpha:1,angle:0,da:.001},e=E("mousemove",r=>{t.da=.01*(r.clientX/window.innerWidth-.5)}),n=document.querySelector("#carousel-canvas"),s=B(n,1.5);s.lineWidth=.003;const o=Array.from({length:100},r=>({y:Math.random()*-4,a:Math.random()*Math.TAU,r:Math.random()**2*3-1.5}));return pe(n,s,o,e,t),()=>{e(!1)}}function pe(t,e,n,s,o){l("to",o,{alpha:0},{scroll:t,easeFn:bt,pixels:t.clientHeight,constant:!0,update(r){s(r<=.9),fe(e,n,o),o.angle+=o.da}})}function fe(t,e,n){t.clear();for(let s=0;s<e.length;s++)he(t,e[s],n)}function he(t,{y:e,a:n,r:s},{alpha:o,angle:r}){const i=Math.cos(n+r)*s,a=2/(2+(1+Math.sin(n+r)*s)),u=(1.15+e/3)*o**2;t.fillStyle=t.strokeStyle=`rgb(250, 250, 250, ${u}`,t.save(),t.scale(a,a),t.beginPath(),t.arc(i,e+2,.04,0,Math.TAU),t.fill(),t.beginPath(),t.moveTo(i,3),t.lineTo(i,e+2),t.stroke(),t.restore()}const F={},vt=Symbol("reset-proxy");function I(t){const e=[],n={transitioned:!1,observe(o){e.push(o)},[vt](){e.length=0,s.transitioned=!1},toggleIfNewState(o){s.transitioned!==o&&(s.transitioned=o)}},s=new Proxy(n,{set(o,r,i){return o.transitioned=i,e.forEach(c=>c(i)),!0}});return(F[t]??(F[t]=[])).push(s),s}function me(t){var e;(e=F[t])==null||e.forEach(n=>n[vt]())}const wt=I("main-page"),_=I("main-page"),ge=I("main-page"),St=I("main-page"),At=I("main-page");function ye(){const t=document.querySelector("#intro-text-container"),e=document.querySelectorAll(".intro-text-word");be(t,e),ve(t,e),wt.observe(n=>{t.parentElement.classList.toggle("invisible")})}function be(t,e){function n(s,o){l({scroll:t,pixels:o,offset:t.clientHeight*.5,easeFn:bt,update(r){e[s].style.opacity=`${+(r===1)}`}})}n(0,t.clientHeight*.75),n(1,t.clientHeight*1.5),n(2,t.clientHeight*1.625),l("checkpoint",t,{add2wrapper:!0})}function ve(t,e){const n=document.querySelector("#programming-text-line"),s=document.querySelectorAll(".programming-text-word"),o={switch:0,right:100,left:0};l("to",o,{right:0,switch:1},{scroll:t,easeFn:le,pixels:t.clientHeight*.25,offset:t.clientHeight*.5,update(r){r<=.25&&s.forEach(i=>i.style.fontSize="5rem"),n.style.setProperty("--programming-text-line-bar-right",o.right+"%"),o.switch===1&&(e.forEach(i=>i.classList.toggle("invisible")),s.forEach(i=>i.classList.toggle("invisible")))}}),l("checkpoint",t),l("to",o,{left:100},{scroll:t,easeFn:Z,pixels:t.clientHeight*.25,update(){n.style.setProperty("--programming-text-line-bar-left",o.left+"%")}}),l("checkpoint",t,{add2wrapper:!0})}function we(){const t=document.querySelector("#i-like-programming"),e=[...document.querySelectorAll(".programming-text-word")].filter(n=>n.id!=="i-like-programming");Se(t,e)}function Se(t,e){const n=document.querySelector("#intro-text-container"),s=document.querySelector("#lisp-text-line"),o={x:-t.getBoundingClientRect().left+s.getElementsByTagName("span")[1].getBoundingClientRect().left,y:-(window.innerHeight-t.clientHeight)/2+s.offsetTop};l("to",e,{opacity:0},{scroll:n,easeFn:y,pixels:n.clientHeight*2.25,offset:n.clientHeight*.75}),l("from",o,{x:0,y:0},{scroll:n,easeFn:y,pixels:n.clientHeight*2.25,offset:n.clientHeight*.75,update(){t.style.fontSize="5rem",t.style.translate=`${o.x}px ${o.y}px`}}),l("checkpoint",n,{add2wrapper:!0,pixels:n.clientHeight*3}),l("to",s,{opacity:1},{scroll:n,easeFn:y,pixels:n.clientHeight*1.5,offset:-n.clientHeight}),l("checkpoint",n,{add2wrapper:!0,toggle:_})}function Ae(){const t=document.querySelector("#i-like-programming"),e=document.querySelector("#lisp-text-line"),n={x:-t.getBoundingClientRect().left+e.getElementsByTagName("span")[1].getBoundingClientRect().left,y:-(window.innerHeight-t.clientHeight)/2+e.offsetTop},s={x:0,y:0,fontSize:5,lispOpacity:1};_.observe(o=>{const{x:r,y:i}=t.getBoundingClientRect();t.classList.toggle("fixed"),o?(t.style.top=i+"px",t.style.left=r+"px",t.style.translate="0 0",s.x=r,s.y=i):t.style.translate=`${n.x}px ${n.y}px`}),xe(e,t,s)}function xe(t,e,n){const s=document.querySelector("#intro-text-container"),o=document.querySelector("#low-lvl-text-line"),r=window.innerHeight-Q(5.55),i=o.offsetLeft,c={x:0,y:0};l("to",n,{lispOpacity:0},{scroll:s,easeFn:y,pixels:s.clientHeight*1.25,offset:s.clientHeight*.25,update(){_.transitioned&&(t.style.opacity=n.lispOpacity+"")}}),l("to",n,{fontSize:2},{scroll:s,easeFn:y,pixels:s.clientHeight*1.5,offset:s.clientHeight*.25,update(a){e.style.fontSize=n.fontSize+"rem",c.x=y(a,n.x,i-n.x,1),c.y=y(a,n.y,r-n.y,1),e.style.left=c.x+"px",e.style.top=c.y+"px"}}),l("checkpoint",s,{add2wrapper:!0}),l("to",o.lastElementChild,{opacity:1},{scroll:s,easeFn:y,pixels:s.clientHeight*1.5,offset:-s.clientHeight*.75}),l("checkpoint",s,{add2wrapper:!0,toggle:ge})}const ke=`attribute vec4 a_position;\r
\r
void main(void) {\r
    gl_Position = a_position;\r
}\r
`,Te=`#ifdef GL_ES\r
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
`;function He(t,e){const{vertexSources:n,fragmentSources:s,viewport:o=[0,0,t.width,t.height],attributes:r={},uniforms:i={},drawMode:c}=e,a=t.getContext("webgl")||t.getContext("experimental-webgl"),u=s.map(m=>dt(a,a.FRAGMENT_SHADER,m)),f=n.map(m=>dt(a,a.VERTEX_SHADER,m)),d=a.createProgram();u.concat(f).forEach(m=>{a.attachShader(d,m)}),a.linkProgram(d),a.useProgram(d),Object.entries(r).forEach(([m,{data:g,type:k,size:O}])=>{const P=a.createBuffer();a.bindBuffer(a.ARRAY_BUFFER,P),a.bufferData(a.ARRAY_BUFFER,g,a.STATIC_DRAW);const st=a.getAttribLocation(d,m);a.enableVertexAttribArray(st),a.vertexAttribPointer(st,O,a[k],!1,0,0)}),a.viewport(...o),h(i);function p(m){const g={};for(const[k,O]of Object.entries(m))g[k]={type:i[k].type,values:O};h(g)}function h(m){Object.entries(m).forEach(([g,{type:k,values:O}])=>{const P=a.getUniformLocation(d,g);P&&a[`uniform${k}`].apply(a,[P,...O])})}function S(m,g){a.useProgram(d),a.drawArrays(a[c],m,g)}function M(m,g=a.COLOR_BUFFER_BIT){a.clearColor(...m),a.clear(g)}function z(){var m;(m=a.getAttachedShaders(d))==null||m.forEach(g=>{a.detachShader(d,g),a.deleteShader(g)}),a.deleteProgram(d)}return{updateUniforms:p,draw:S,clear:M,dispose:z}}function dt(t,e,n){const s=t.createShader(e);return t.shaderSource(s,n),t.compileShader(s),s}const xt=I("main-page");let tt=0,N=!1,et=!1,q,L;function Ie(){const t=document.querySelector("#i-like-programming"),e=document.querySelector("#dimensions-line"),n=document.querySelector("#white-out-container"),s=document.querySelector("#starry-canvas"),o=document.querySelector("#graphics-canvas");return xt.observe(r=>{if(e.classList.toggle("invisible"),o.parentElement.classList.toggle("invisible"),n.classList.toggle("invisible"),t.classList.toggle("drop-shadow"),r){const{top:i,right:c}=t.getBoundingClientRect();e.style.top=i+Q(5)+"px",e.style.left=c+"px"}}),Pe(o),Oe(t,e),De(e,s,o,t),Je(s,t,n),Ce(),()=>{tt=0,N=!1,et=!1,q(!1),L.dispose()}}function Oe(t,e){const n=document.querySelector("#intro-text-container"),s=document.querySelector("#low-lvl-text-line"),o={llpOpacity:1,dimOpacity:0,fontSize:2,x:0,y:0};l("to",o,{llpOpacity:0},{scroll:n,easeFn:y,pixels:n.clientHeight*1.25,offset:n.clientHeight*.25,update(){s.style.opacity=o.llpOpacity+""}});const r={fontSize:3.25,x:-window.innerWidth/2,y:-(window.innerHeight-Q(3.25))/2};l("to",o,r,{scroll:n,easeFn:y,pixels:n.clientHeight*1.5,offset:n.clientHeight*.25,update(){t.style.fontSize=o.fontSize+"rem",t.style.translate=`${o.x}px ${o.y}px`}}),l("checkpoint",n,{add2wrapper:!0,pixels:n.clientHeight*1.75,toggle:xt}),l("to",o,{dimOpacity:1},{scroll:n,easeFn:y,pixels:n.clientHeight,offset:-n.clientHeight,update(i){e.style.opacity=o.dimOpacity+"",q(i===1),tt=i}}),l("checkpoint",n,{add2wrapper:!0})}function De(t,e,n,s){const o=document.querySelector("#intro-text-container"),r=document.querySelector("#gc-cover-1"),i=document.querySelector("#gc-cover-2"),c=t.getElementsByTagName("span")[1],a={dimension:1};l("to",a,{dimension:2},{scroll:o,easeFn:ae,pixels:o.clientHeight*2.5,update(){c.textContent=`in ${a.dimension.toFixed(1)}D`;const f=50*(1-(a.dimension-1))+"vh";r.style.height=f,i.style.height=f,a.dimension===2?e.classList.remove("invisible"):e.classList.add("invisible")}}),l("checkpoint",o,{add2wrapper:!0});const u={dimension:2};l("to",u,{dimension:3},{scroll:o,easeFn:re,pixels:o.clientHeight*2.5,update(f){N=u.dimension>2,N?(s.textContent=`I like programming in ${u.dimension.toFixed(1)}D`,c.classList.add("invisible")):(s.textContent="I like programming",c.classList.remove("invisible")),et=f===1;const d=1-(u.dimension-2),p=90*(u.dimension-2);n.parentElement.style.transform=`scale(${d}) rotate3d(1, 1, 1, ${p}deg)`,q(tt>0&&u.dimension<3)}}),l("checkpoint",o,{add2wrapper:!0})}function Je(t,e,n){const s=document.querySelector("#intro-text-container"),o=B(t),r=Array.from({length:3},c=>Array.from({length:50},a=>({x:Math.random()*o.rangeX-o.rangeX/2,y:Math.random()*o.rangeY-o.rangeY/2,r:Math.random()*.004}))),i={dimension:3,opacity:1,scale:1,x:1};l("to",i,{dimension:9.9,opacity:0,scale:5},{scroll:s,easeFn:de,pixels:s.clientHeight*3.5,offset:-s.clientHeight*1.5,update(c){et&&(e.textContent=`I like programming in ${i.dimension.toFixed(1)}D`),e.style.opacity=`${i.opacity}`,e.style.transform=`scale(${i.scale})`,Me(o,r,c)}}),l("to",i,{x:7.9},{scroll:s,easeFn:Z,pixels:s.clientHeight*2,update(){const c=1-i.x**.75,a=90*i.x;n.style.transform=`scale(${c}) rotate3d(1, 2, 1, ${a}deg)`}}),l("checkpoint",s,{add2wrapper:!0,toggle:St})}function Me(t,e,n){t.clear(),t.lineCap="round",n=Math.max(0,n-.15)**4;const s=80*(.8-n**.5);for(let o=0;o<e.length;o++){const r=e[o],i=[0,60,240][o];t.strokeStyle=`hsla(${i}, 65%, 88%, ${s}%)`,t.beginPath();for(let c=0;c<r.length;c++){const a=r[c],u=2*a.x*n,f=2*a.y*n;t.moveTo(a.x-u,a.y-f),t.lineTo(a.x+u+a.r,a.y+f+a.r),t.lineWidth=a.r}t.stroke()}}function Pe(t){t.height=window.innerHeight,t.width=window.innerWidth;const e=new Float32Array([-1,-1,1,-1,-1,1,1,1]);L=He(t,{vertexSources:[ke],fragmentSources:[Te],attributes:{a_position:{data:e,type:"FLOAT",size:2}},uniforms:{u_resolution:{type:"2f",values:[t.width,t.height]},u_time:{type:"1f",values:[0]}},drawMode:"TRIANGLE_STRIP"})}const Fe=Date.now();function Ce(){q=l("constantly",()=>{const t=(Date.now()-Fe)/1e3;L.updateUniforms({u_time:[t]}),L.draw(0,4)})}const Ee="/portfolio/assets/amonamarth-d9f155dc.webp",Re="/portfolio/assets/rammstein-b2624c6e.webp",Le="/portfolio/assets/eluveitie-a73c8e67.webp",Be="/portfolio/assets/gnr-c1c96262.webp",Qe="/portfolio/assets/greenday-846eef14.webp",Ze="/portfolio/assets/nightwish-e8d995fd.webp",qe="/portfolio/assets/factorio-2d88122a.webp",ze="/portfolio/assets/assettocorsa-c65cbe9c.webp",Ye="/portfolio/assets/minecraft-f16a6a9f.webp",Ue="data:image/webp;base64,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",We="/portfolio/assets/mclarenf1-00a92b05.webp",je="/portfolio/assets/rx7-5fbfd767.webp",kt=Object.freeze(Object.defineProperty({__proto__:null,amonamarth:Ee,assettocorsa:ze,eluveitie:Le,factorio:qe,forzahorizon:Ue,gnr:Be,greenday:Qe,mclarenf1:We,minecraft:Ye,nightwish:Ze,rammstein:Re,rx7:je},Symbol.toStringTag,{value:"Module"})),Ne=Object.values(kt).sort(()=>.5-Math.random());function Xe(){const t=document.querySelector("#interests-canvas"),e=document.querySelector("#white-out-container"),n=t.parentElement;St.observe(s=>{n.classList.toggle("invisible"),e.classList.toggle("invisible"),t.style.transform="translateY(0px)"}),Ge(t),Ve(t)}function Ge(t){const e=document.querySelector("#interests-text-line"),n=[...e.getElementsByTagName("span")],s=n.length-1;n.forEach((o,r)=>{l({scroll:t,easeFn:ce,pixels:t.clientHeight*1.5,offset:t.clientHeight*(r+8)*.125,update(i){o.classList.toggle("interests-text-word-stage-1",i>.2),r===s&&e.classList.toggle("interests-text-word-stage-2",i===1)}})}),l("checkpoint",t,{add2wrapper:!0})}function Ve(t){const e=B(t);e.scale(1,-1);const n=e.rangeY/2-.1,s=Array.from({length:12},(i,c)=>({y:0,a:Math.TAU*c/24-Math.PI*.75,r:n*4})),o=ut(Object.values(kt));l("to",{x:90},{x:0},{scroll:t,easeFn:Z,pixels:t.clientHeight*3.25,update(i){t.classList.toggle("invisible",i===0),t.style.transform="translateY(0)",Ke(e,o,s,i)}}),l("checkpoint",t,{add2wrapper:!0,toggle:At})}function Ke(t,e,n,s){t.clear();const o=t.rangeX/2-.1,r=s*Math.TAU*1.25;for(let i=0;i<n.length;i++)$e(t,n[i],e[Ne[i]],r,o)}function $e(t,{y:e,a:n,r:s},o,r,i){const c=n+r*.85;if(c<0||Math.TAU<c)return;const a=Math.cos(c)*s,f=1.8/(Math.sin(c)*s+3.6);t.save(),t.scale(f,f),t.moveTo(a+i,e),t.save(),t.beginPath(),t.shadowBlur=5,t.shadowColor="#242424",t.fillStyle="#24242422",t.translate(a+i*1.5,e+.4),t.scale(.2,.025),t.arc(0,0,1,0,Math.PI*2),t.fill(),t.restore(),t.drawImage(o,a+i*1.5-.2,e-.2,.4,.4),t.restore()}const _e="/portfolio/assets/lightbulb-on-7bcf1de2.webp",tn="data:image/webp;base64,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snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32rAAA/v/eCKhYgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=",en=Object.freeze(Object.defineProperty({__proto__:null,lightBulbOff:tn,lightBulbOn:_e},Symbol.toStringTag,{value:"Module"})),x=Array.from({length:30},(t,e)=>({x:0,y:.0175*e,a:Math.PI/2,l:.0175})),nn={x:1,y:0,a:0,l:0},A=[];let T=1,H=1,X=1,G=1,nt=0,v=0,Tt=ut(Object.values(en));const[sn,on]=Object.keys(Tt),w={isOn:!0,img(){return Tt[this.isOn?on:sn]}};function rn(){const t=document.querySelector("#interests-canvas"),e=document.querySelector("#turn-off-text-line"),n=document.querySelector("#know-you-button"),s=document.querySelector("#know-you-container"),o=t.parentElement,r=t.getContext("2d");At.observe(p=>{p?t.style.transform=`translateY(${-t.clientHeight*.66}px)`:t.style.transform="translateY(0px)",e.classList.toggle("invisible",!p)});const i=n.getBoundingClientRect(),c=i.top-i.height/2,a=i.left+i.width/2,u=E("mousemove",p=>{const h=p.clientX,S=p.clientY;n.style.transform=`translate(${(h-a)/5}px, ${(S-c)/5}px)`}),f=E("mousemove",p=>{X=p.clientX,G=p.clientY,Ht(t,r),window.requestAnimationFrame(()=>It(r,d))}),d=p=>{w.isOn=p??!w.isOn,A.length=0,w.isOn?o.style.backgroundColor="#f5f5f5":o.style.backgroundColor="#242424",e.classList.toggle("invisible",!w.isOn),s.classList.toggle("invisible",w.isOn),u(!w.isOn)};return n.onclick=()=>{const p=document.querySelector("#about-me-btn");p.scrollIntoView({behavior:"smooth",block:"center"}),window.addEventListener("scrollend",h=>{p.click()},{once:!0})},an(t,e,f,d),()=>{u(!1),f(!1),T=1,H=1,X=1,G=1,nt=0,v=0,w.isOn=!0}}function an(t,e,n,s){const o=document.querySelector("#interests-text-line"),r=t.getContext("2d"),i={y:0};let c=0;l("to",i,{y:t.clientHeight*.66},{scroll:t,easeFn:y,pixels:t.clientHeight*1.5,offset:t.clientHeight*.5,update(a){n(a>.1),o.style.transform=`translate(-50%, -50%) translateY(${i.y}px)`,t.style.transform=`translateY(${i.y-t.clientHeight*.66}px)`,e.style.transform=`translate(-25%, calc(${i.y-t.clientHeight*.66}px - 50%))`,v=a,nt=i.y-t.clientHeight*.66,Ht(t,r),It(r,s),a<.8&&a<c&&s(!0),c=a,A.length=0}}),l("checkpoint",t,{add2wrapper:!0})}function Ht(t,e){T=(X-t.clientWidth/2)*(e.rangeX/t.clientWidth),H=(G-nt-t.clientHeight/2)*(e.rangeY/t.clientHeight)}function It(t,e){cn(),t.clear(),t.fillStyle="black",t.drawImage(w.img(),.5,-.75,1,1),t.beginPath(),t.arc(1,0,.02,0,Math.TAU);const n=x.at(-1);for(const s of x){const o=s.x+Math.cos(s.a)*s.l*v,r=s.y+Math.sin(s.a)*s.l*v;s===n&&(A.push(Math.hypot(o-1,r+(1-v))),A.length>15&&(A.shift(),A.at(-1)>.5&&Ft(A)>.25&&e())),t.moveTo(o,r),t.arc(o,r,.005*v,0,Math.TAU)}t.fill()}function cn(){!w.isOn&&Math.hypot(T-1,H)>.0175*35&&(A.length=0,T=1,H=1);for(let t=x.length-1;t>=0;t--){const e=x[t];e.a=Math.atan2(H-e.y,T-e.x),e.x=T-=Math.cos(e.a)*e.l*v,e.y=H-=Math.sin(e.a)*e.l*v}for(let t=0;t<x.length;t++){const e=x[t-1]||nn,n=x[t];n.x=e.x+Math.cos(e.a)*e.l*v,n.y=e.y+Math.sin(e.a)*e.l*v}}function Ot(t,e,n){let s,o;t.type="button",t.addEventListener("click",r=>{if(t.classList.toggle("activated-fill-button")){const{dx:c,dy:a}=Et(t);t.style.transform=`translate(${c}px, ${a}px)`,t.style.zIndex="100",document.documentElement.style.overflowY="hidden",o=setTimeout(()=>{e(t.getAttribute("data-route"))(),document.documentElement.style.overflowY="visible"},1e3),clearTimeout(s)}else t.style.transform="",document.documentElement.style.overflowY="visible",s=setTimeout(()=>{t.style.zIndex=""},500),clearTimeout(o);n==null||n()})}function ln(t){const e=[...document.querySelectorAll(".start-diamond-button")],[[n],s]=pt(e,c=>c.id==="auto-scroll-btn"),o={ref:0},r=()=>e.forEach((c,a)=>{c.style.scale=c.classList.contains("activated-fill-button")?"1":`${1+o.ref**3/(1.3+Math.abs(a-2)**3)}`}),i=dn(e,n,r,o);return s.forEach(c=>Ot(c,t,r)),()=>{document.documentElement.style.overflowY="visible",i.disconnect()}}function dn(t,e,n,s){const o=new IntersectionObserver(i=>{s.ref=i[0].intersectionRatio,n()},{threshold:Array.from({length:10},(i,c)=>c/10),rootMargin:`-${Q(8)}px`});o.observe(e.parentElement);let r=!1;return e.addEventListener("click",()=>{if(r)return;let i=window.scrollY;const c=document.body.scrollHeight-window.innerHeight;let a=i,u=!1,f;r=!0;function d(p){f??(f=p),Math.abs(a-window.scrollY)>1&&(u=!0);const h=p-f;if(f=p,a+=h,a>=c||u){r=!1,e.blur();return}window.scrollTo(0,a),requestAnimationFrame(d)}requestAnimationFrame(d)}),o}const Dt=4;function un(){const t=document.querySelector("#triangles-container"),e=document.querySelector("#triangles-canvas");t.style.height=e.clientHeight*2+"px",pn(e,t,{recurseLim:Dt,blackOpacity:0,prevScale:1,scale:1,cy:0})}function pn(t,e,n){const s=B(t);l("to",n,{scale:16,cy:3**.5*.5/5-.2,recurseLim:4,blackOpacity:1},{scroll:t,easeFn:Z,pixels:t.clientHeight*1.25,offset:t.clientHeight*-.25,update(){e.style.backgroundColor=`rgb(0, 0, 0, ${n.blackOpacity})`,s.clear();const o=n.scale/n.prevScale;s.scale(o,o),n.prevScale=n.scale,C(s,0,n.cy+.15,1,Dt)}}),l("checkpoint",e,{toggle:wt})}function C(t,e,n,s,o,r=o){const i=s/2,c=Math.sqrt(3)*s/4;o>0&&(C(t,e-i/2,n-c/2,s/2,o-.5,r),C(t,e+i/2,n-c/2,s/2,o-1.3,r),C(t,e,n+c/2,s/2,o-1.8,r)),t.fillStyle=`rgb(250, 250, 250, ${.07*(r-o)})`,t.beginPath(),t.lineTo(e+i,n-c),t.lineTo(e-i,n-c),t.lineTo(e,n+c),t.fill()}const fn=(t,e)=>`
  <canvas id="carousel-canvas" height="${t}" width="${e}"></canvas>
  <div id="start-buttons-container">
    <button class="start-diamond-button" data-route="/github">github</button>
    <button class="start-diamond-button" data-route="/about-me" id="about-me-btn">about me</button>
    <button class="start-diamond-button toggles-start-buttons-snackbar" id="auto-scroll-btn">auto<br>scroll</button>
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
        <span class="intro-text-word">Hi.&nbsp;</span><!--
     --><span class="intro-text-word">I'm&nbsp;</span><!--
     --><span class="intro-text-word">Kavin.</span>
      </div>
      <div id="programming-text-line">
        <span class="programming-text-word invisible">And&nbsp;</span><!--
     --><span class="programming-text-word invisible" id="i-like-programming">I like programming</span><!--
     --><span class="programming-text-word invisible">.</span>
      </div>
      <div id="lisp-text-line">
        <span class="lisp-text-word">(</span><!--
     --><span class="lisp-text-word invisible">I</span><!--
     --><span class="lisp-text-word">-</span><!--
     --><span class="lisp-text-word invisible">like</span><!--
     --><span class="lisp-text-word">-</span><!--
     --><span class="lisp-text-word invisible">programming</span><!--
     --><br><!--
     --><span class="lisp-text-word invisible">--</span><!--
     --><span class="lisp-text-word">(functionally))</span>
      </div>
      <div id="low-lvl-text-line">
        <span class="low-lvl-text-word invisible">I like programming</span><!--
     --><span class="low-lvl-text-word">&nbsp;low level</span>
      </div>
      <canvas id="starry-canvas" class="invisible" height="${t}" width="${e}"></canvas>
      <div id="graphics-container" class="invisible">
        <canvas id="graphics-canvas" height="${t}" width="${e}"></canvas>
        <div id="dimensions-line" class="invisible">
          <span class="dimensions-text-word">&nbsp;</span><!--
       --><span class="dimensions-text-word drop-shadow" id="dims-txt">in 1.0000D</span>
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
`,hn=t=>{const e=[ue,ln,un,ye,we,Ae,Ie,Xe,rn];let n;return{path:"/",html:fn(window.innerHeight,window.innerWidth),construct(){window.scrollTo(0,0),setTimeout(()=>{window.scrollTo(0,0),n=e.map(s=>s(t)),oe()},0)},destruct(){me("main-page"),n.forEach(s=>{s==null||s()}),ie()}}};const mn=V("",`
  <div id="mobile-disclaimer-container">
    (Heavily recommend that you use this site on desktop for the full main page experience)
  </div>
  <div id="mobile-buttons-container">
    <button class="start-diamond-button" data-route="/github">github</button>
    <button class="start-diamond-button" data-route="/about-me" id="about-me-btn">about me</button>
    <button class="start-diamond-button" data-route="/projects">projects</button>
    <button class="start-diamond-button" data-route="/linkedin">linkedin</button>
  </div>
`,!0),gn=t=>({path:"/",html:mn,construct(){document.querySelectorAll(".start-diamond-button").forEach(e=>Ot(e,t))}}),yn=t=>{const e=gn(t),n=hn(t);let s=r();const o=E("resize",()=>{const i=s;s=r(),(s===n||i!==s)&&t("/")()});function r(){return window.innerWidth/window.innerHeight>4/3?n:e}return{path:"/",html(){return s.html},construct(){var i;(i=s.construct)==null||i.call(s),o(!0)},destruct(){var i;o(!1),(i=s.destruct)==null||i.call(s)}}};Rt({baseURL:"/portfolio",hashRouter:!0,providers:[yn,Mt,Yt,jt,Bt]});
