(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}})();const It=`
  <div id="background-img">
    <div id="err-code">
      <span class="err-code-char">4</span><!--
   --><span class="err-code-char">0</span><!--
   --><span class="err-code-char">4</span>
    </div>
    <a href="/" data-client id="home-button"></a>
  </div>
`,Ot=()=>({path:"*",html:It});Math.TAU=Math.PI*2;function L(t,e=1){const n=t.getContext("2d"),s=t.height=window.innerHeight,o=t.width=window.innerWidth;t.height*=e;const r=o/s,i=r>1?s/2:o/2;return n.height=s,n.width=o,n.clear=()=>n.clearRect(-i,-i,2*i,2*i),n.translate(o/2,s/2),n.scale(i,-i),n.rangeX=r>1?2*r:2,n.rangeY=r>1?2:2/r,n}function Dt(t,e,n){return Math.min(Math.max(t,e),n)}let et;function B(t){return t*(et||(et=parseFloat(getComputedStyle(document.documentElement).fontSize)))}function at(t){const e={};return t.forEach(n=>{const s=new Image;s.src=n,e[n]=s}),e}function Jt(t){let e=t[0],n=t[0];for(let s=1;s<t.length;s++)t[s]>e&&(e=t[s]),t[s]<n&&(n=t[s]);return e-n}function F(t,e){let n=!1;return s=>{s?n||(window.addEventListener(t,e,{passive:!0}),n=!0):n&&(window.removeEventListener(t,e),n=!1)}}function Mt(t,e){const n=t.indexOf(e);return n>-1&&t.splice(n,1),t}function Pt(t){const{height:e,left:n,top:s,width:o}=t.getBoundingClientRect(),r=window.scrollX||document.documentElement.scrollLeft,i=window.scrollY||document.documentElement.scrollTop;return{cx:n+r+o/2,cy:s+i+e/2}}function Ct(t){const{cx:e,cy:n}=Pt(t),{innerWidth:s,innerHeight:o}=window,r=window.scrollX||document.documentElement.scrollLeft,i=window.scrollY||document.documentElement.scrollTop;return{dx:s/2+r-e,dy:o/2+i-n}}function Ft(t,e){const n=[],s=[];for(const o of t)e(o)?n.push(o):s.push(o);return[n,s]}function Et(t){const e=Array.isArray(t)?t:Object.keys(t).length===0&&!nt(t)?[{$$dummy:0}]:[t],n=e.map(s=>nt(s)?Rt(s):Lt(s));return[e,n]}function Rt(t){return(e,n)=>{t.style[e]=`${n}${ct(t,e)}`}}function Lt(t){return(e,n)=>{t[e]=n}}const z={};function ct(t,e){var o;if(z[e]!==void 0)return z[e];const n=getComputedStyle(t),s=((o=/[a-z]+|%/.exec(n[e]))==null?void 0:o[0])||"";return z[e]=s,s}function Bt(t,e,n){return"$$dummy"in e[0]?[{$$dummy:{fromTo:[0,1]}}]:(Zt(e)?e.map(o=>{const r=getComputedStyle(o);return Object.fromEntries(Object.entries(n).map(([i],c)=>{const a=r[i].split(ct(o,i))[0];return[i,parseFloat(a)]}))}):e).map(o=>Object.fromEntries(Object.entries(n).map(([r,i])=>t==="to"?q(r,o[r],i):t==="from"?q(r,i,o[r]):q(r,...i))))}function q(t,e,n){return[t,{fromTo:[e,n]}]}function Qt(t,e){return t.map((n,s)=>({set:n,properties:e[s]}))}function Zt(t){return t[0]instanceof HTMLElement}function nt(t){return t instanceof HTMLElement}function zt(t){return"duration"in t}function l(t,e,n,s){if(typeof t!="string")st("to",{},{},t);else if(t==="checkpoint")Ut(e,n);else{if(t==="constantly")return qt(e);st(t,e,n,s)}}function qt(t){let e=!1;return n=>{n?e||(E.push(t),e=!0):(Mt(E,t),e=!1)}}function st(t,e,n,s){const[o,r]=Et(e),i=Bt(t,o,n),c=Qt(r,i);Yt(s,c)}function Yt(t,e){const n=e.map(o=>Object.entries(o.properties)),s=(o,r)=>{n.forEach((i,c)=>{var d;const a=e[c];for(const[u,f]of i){const{fromTo:[p,v]}=f,I=t.easeFn(o,p,v-p,r);a.set(u,I),(d=t.update)==null||d.call(t,o/r)}})};if(zt(t)){let o=0;ot(t,s,()=>(o=o||performance.now(),[performance.now()-o,t.duration]))}else{const o=t.scroll,r=o.parentElement;t.offset||(t.offset=0),y.has(o)||y.set(o,{lastPixels:0,originalHeight:parseFloat(getComputedStyle(r).height),checkpoint:0}),y.get(o).lastPixels=t.pixels+t.offset,N=t.pixels+t.offset,t.offset+=y.get(o).checkpoint;const i=dt++;Wt(o,i),ot(t,s,c=>{const d=c-r.offsetTop-t.offset;return[Dt(0,d/t.pixels,1),1]})}}function ot(t,e,n){J.push({fn:e,supplier:n,options:t,lastT:NaN})}const y=new Map;let lt=0,N=0;function Ut(t,e){e=e||{};const n=t.parentElement;if(y.has(t)||y.set(t,{lastPixels:0,originalHeight:parseFloat(getComputedStyle(n).height),checkpoint:0}),lt+=e.pixels?e.pixels:N,y.get(t).checkpoint+=e.pixels?e.pixels:y.get(t).lastPixels,e.add2wrapper&&(n.style.height=y.get(t).originalHeight+y.get(t).checkpoint+"px"),e.toggle){const s=J.at(-1).fn,o=Array.isArray(e.toggle)?e.toggle:[e.toggle];J.at(-1).fn=(r,i)=>{for(const c of o)c.toggleIfNewState(r/i===1);s(r,i)}}}const Y=new Set,J=[],E=[];let dt=0,U=NaN,D=!1,G=!1,ut=0;function pt(){const t=document.documentElement.scrollTop;if(t!=U||D||ut++<10){U=t,D=!1;for(const e of Y){const n=J[e],{fn:s,supplier:o,options:r,lastT:i}=n,[c,a]=o(t),d=c/a>.99,u=d?1:c;n.lastT=u,D=r.constant||D,!(i===u&&!r.constant)&&s(d?a:c,a)}}E.forEach(e=>e()),G&&window.requestAnimationFrame(pt)}function Wt(t,e){new IntersectionObserver(s=>{s.forEach(o=>{o.isIntersecting?Y.add(e):Y.delete(e)})},{threshold:.1}).observe(t)}function jt(){G=!0,window.requestAnimationFrame(pt)}function Xt(){G=!1,window.requestAnimationFrame(()=>{D=!1,E.length=0,J.length=0,U=NaN,y.clear(),lt=0,dt=0,N=0,ut=0})}const ft=(t,e,n,s)=>n*(t/s)+e,Nt=(t,e,n,s)=>n*(t/=s)*t+e,Gt=(t,e,n,s)=>-n*(t/=s)*(t-2)+e,Vt=(t,e,n,s)=>t<s/2?-n/2*(t=t*2/s)*(t-2)+e:n/2*(t=(t*2-s)/s)*t+e+n/2,Q=(t,e,n,s)=>n*(t/=s)*t*t+e,Kt=(t,e,n,s)=>n*((t=t/s-1)*t*t+1)+e,g=(t,e,n,s)=>(t/=s/2)<1?n/2*t*t*t+e:n/2*((t-=2)*t*t+2)+e,$t=(t,e,n,s)=>n*(t/=s)*t*t*t*t+e;function _t(){const t={alpha:1,angle:0,da:.001},e=F("mousemove",r=>{t.da=.01*(r.clientX/window.innerWidth-.5)}),n=document.querySelector("#carousel-canvas"),s=L(n,1.5);s.lineWidth=.003;const o=Array.from({length:100},r=>({y:Math.random()*-4,a:Math.random()*Math.TAU,r:Math.random()**2*3-1.5}));return te(n,s,o,e,t),()=>{e(!1)}}function te(t,e,n,s,o){l("to",o,{alpha:0},{scroll:t,easeFn:ft,pixels:t.clientHeight,constant:!0,update(r){s(r<=.9),ee(e,n,o),o.angle+=o.da}})}function ee(t,e,n){t.clear();for(let s=0;s<e.length;s++)ne(t,e[s],n)}function ne(t,{y:e,a:n,r:s},{alpha:o,angle:r}){const i=Math.cos(n+r)*s,a=2/(2+(1+Math.sin(n+r)*s)),d=(1.15+e/3)*o**2;t.fillStyle=t.strokeStyle=`rgb(250, 250, 250, ${d}`,t.save(),t.scale(a,a),t.beginPath(),t.arc(i,e+2,.04,0,Math.TAU),t.fill(),t.beginPath(),t.moveTo(i,3),t.lineTo(i,e+2),t.stroke(),t.restore()}const P={},ht=Symbol("reset-proxy");function H(t){const e=[],n={transitioned:!1,observe(o){e.push(o)},[ht](){e.length=0,s.transitioned=!1},toggleIfNewState(o){s.transitioned!==o&&(s.transitioned=o)}},s=new Proxy(n,{set(o,r,i){return o.transitioned=i,e.forEach(c=>c(i)),!0}});return(P[t]??(P[t]=[])).push(s),s}function se(t){var e;(e=P[t])==null||e.forEach(n=>n[ht]())}const mt=H("main-page"),V=H("main-page"),oe=H("main-page"),gt=H("main-page"),yt=H("main-page");function ie(){const t=document.querySelector("#intro-text-container"),e=document.querySelectorAll(".intro-text-word");re(t,e),ae(t,e),mt.observe(n=>{t.parentElement.classList.toggle("invisible")})}function re(t,e){function n(s,o){l({scroll:t,pixels:o,offset:t.clientHeight*.5,easeFn:ft,update(r){e[s].style.opacity=`${+(r===1)}`}})}n(0,t.clientHeight*.75),n(1,t.clientHeight*1.5),n(2,t.clientHeight*1.625),l("checkpoint",t,{add2wrapper:!0})}function ae(t,e){const n=document.querySelector("#programming-text-line"),s=document.querySelectorAll(".programming-text-word"),o={switch:0,right:100,left:0};l("to",o,{right:0,switch:1},{scroll:t,easeFn:Kt,pixels:t.clientHeight*.25,offset:t.clientHeight*.5,update(r){r<=.25&&s.forEach(i=>i.style.fontSize="5rem"),n.style.setProperty("--programming-text-line-bar-right",o.right+"%"),o.switch===1&&(e.forEach(i=>i.classList.toggle("invisible")),s.forEach(i=>i.classList.toggle("invisible")))}}),l("checkpoint",t),l("to",o,{left:100},{scroll:t,easeFn:Q,pixels:t.clientHeight*.25,update(){n.style.setProperty("--programming-text-line-bar-left",o.left+"%")}}),l("checkpoint",t,{add2wrapper:!0})}function ce(){const t=document.querySelector("#i-like-programming"),e=[...document.querySelectorAll(".programming-text-word")].filter(n=>n.id!=="i-like-programming");le(t,e)}function le(t,e){const n=document.querySelector("#intro-text-container"),s=document.querySelector("#lisp-text-line"),o={x:-t.getBoundingClientRect().left+s.getElementsByTagName("span")[1].getBoundingClientRect().left,y:-(window.innerHeight-t.clientHeight)/2+s.offsetTop};l("to",e,{opacity:0},{scroll:n,easeFn:g,pixels:n.clientHeight*2.25,offset:n.clientHeight*.75}),l("from",o,{x:0,y:0},{scroll:n,easeFn:g,pixels:n.clientHeight*2.25,offset:n.clientHeight*.75,update(){t.style.fontSize="5rem",t.style.translate=`${o.x}px ${o.y}px`}}),l("checkpoint",n,{add2wrapper:!0,pixels:n.clientHeight*3}),l("to",s,{opacity:1},{scroll:n,easeFn:g,pixels:n.clientHeight*1.5,offset:-n.clientHeight}),l("checkpoint",n,{add2wrapper:!0,toggle:V})}function de(){const t=document.querySelector("#i-like-programming"),e=document.querySelector("#lisp-text-line"),n={x:-t.getBoundingClientRect().left+e.getElementsByTagName("span")[1].getBoundingClientRect().left,y:-(window.innerHeight-t.clientHeight)/2+e.offsetTop},s={x:0,y:0,fontSize:5,lispOpacity:1};V.observe(o=>{const{x:r,y:i}=t.getBoundingClientRect();t.classList.toggle("fixed"),o?(t.style.top=i+"px",t.style.left=r+"px",t.style.translate="0 0",s.x=r,s.y=i):t.style.translate=`${n.x}px ${n.y}px`}),ue(e,t,s)}function ue(t,e,n){const s=document.querySelector("#intro-text-container"),o=document.querySelector("#low-lvl-text-line"),r=window.innerHeight-B(5.55),i=o.offsetLeft,c={x:0,y:0};l("to",n,{lispOpacity:0},{scroll:s,easeFn:g,pixels:s.clientHeight*1.25,offset:s.clientHeight*.25,update(){V.transitioned&&(t.style.opacity=n.lispOpacity+"")}}),l("to",n,{fontSize:2},{scroll:s,easeFn:g,pixels:s.clientHeight*1.5,offset:s.clientHeight*.25,update(a){e.style.fontSize=n.fontSize+"rem",c.x=g(a,n.x,i-n.x,1),c.y=g(a,n.y,r-n.y,1),e.style.left=c.x+"px",e.style.top=c.y+"px"}}),l("checkpoint",s,{add2wrapper:!0}),l("to",o.lastElementChild,{opacity:1},{scroll:s,easeFn:g,pixels:s.clientHeight*1.5,offset:-s.clientHeight*.75}),l("checkpoint",s,{add2wrapper:!0,toggle:oe})}const pe=`attribute vec4 a_position;\r
\r
void main(void) {\r
    gl_Position = a_position;\r
}\r
`,fe=`#ifdef GL_ES\r
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
`;function he(t,e){const{vertexSources:n,fragmentSources:s,viewport:o=[0,0,t.width,t.height],attributes:r={},uniforms:i={},drawMode:c}=e,a=t.getContext("webgl")||t.getContext("experimental-webgl"),d=s.map(h=>it(a,a.FRAGMENT_SHADER,h)),u=n.map(h=>it(a,a.VERTEX_SHADER,h)),f=a.createProgram();d.concat(u).forEach(h=>{a.attachShader(f,h)}),a.linkProgram(f),a.useProgram(f),Object.entries(r).forEach(([h,{data:m,type:x,size:O}])=>{const M=a.createBuffer();a.bindBuffer(a.ARRAY_BUFFER,M),a.bufferData(a.ARRAY_BUFFER,m,a.STATIC_DRAW);const tt=a.getAttribLocation(f,h);a.enableVertexAttribArray(tt),a.vertexAttribPointer(tt,O,a[x],!1,0,0)}),a.viewport(...o),v(i);function p(h){const m={};for(const[x,O]of Object.entries(h))m[x]={type:i[x].type,values:O};v(m)}function v(h){Object.entries(h).forEach(([m,{type:x,values:O}])=>{const M=a.getUniformLocation(f,m);M&&a[`uniform${x}`].apply(a,[M,...O])})}function I(h,m){a.useProgram(f),a.drawArrays(a[c],h,m)}function Tt(h,m=a.COLOR_BUFFER_BIT){a.clearColor(...h),a.clear(m)}function Ht(){var h;(h=a.getAttachedShaders(f))==null||h.forEach(m=>{a.detachShader(f,m),a.deleteShader(m)}),a.deleteProgram(f)}return{updateUniforms:p,draw:I,clear:Tt,dispose:Ht}}function it(t,e,n){const s=t.createShader(e);return t.shaderSource(s,n),t.compileShader(s),s}const bt=H("main-page");let K=0,W=!1,$=!1,Z,R;function me(){const t=document.querySelector("#i-like-programming"),e=document.querySelector("#dimensions-line"),n=document.querySelector("#white-out-container"),s=document.querySelector("#starry-canvas"),o=document.querySelector("#graphics-canvas");return bt.observe(r=>{if(e.classList.toggle("invisible"),o.parentElement.classList.toggle("invisible"),n.classList.toggle("invisible"),t.classList.toggle("drop-shadow"),r){const{top:i,right:c}=t.getBoundingClientRect();e.style.top=i+B(5)+"px",e.style.left=c+"px"}}),we(o),ge(t,e),ye(e,s,o,t),be(s,t,n),Ae(),()=>{K=0,W=!1,$=!1,Z(!1),R.dispose()}}function ge(t,e){const n=document.querySelector("#intro-text-container"),s=document.querySelector("#low-lvl-text-line"),o={llpOpacity:1,dimOpacity:0,fontSize:2,x:0,y:0};l("to",o,{llpOpacity:0},{scroll:n,easeFn:g,pixels:n.clientHeight*1.25,offset:n.clientHeight*.25,update(){s.style.opacity=o.llpOpacity+""}});const r={fontSize:3.25,x:-window.innerWidth/2,y:-(window.innerHeight-B(3.25))/2};l("to",o,r,{scroll:n,easeFn:g,pixels:n.clientHeight*1.5,offset:n.clientHeight*.25,update(){t.style.fontSize=o.fontSize+"rem",t.style.translate=`${o.x}px ${o.y}px`}}),l("checkpoint",n,{add2wrapper:!0,pixels:n.clientHeight*1.75,toggle:bt}),l("to",o,{dimOpacity:1},{scroll:n,easeFn:g,pixels:n.clientHeight,offset:-n.clientHeight,update(i){e.style.opacity=o.dimOpacity+"",Z(i===1),K=i}}),l("checkpoint",n,{add2wrapper:!0})}function ye(t,e,n,s){const o=document.querySelector("#intro-text-container"),r=document.querySelector("#gc-cover-1"),i=document.querySelector("#gc-cover-2"),c=t.getElementsByTagName("span")[1],a={dimension:1};l("to",a,{dimension:2},{scroll:o,easeFn:Gt,pixels:o.clientHeight*2.5,update(){c.textContent=`in ${a.dimension.toFixed(1)}D`;const u=50*(1-(a.dimension-1))+"vh";r.style.height=u,i.style.height=u,a.dimension===2?e.classList.remove("invisible"):e.classList.add("invisible")}}),l("checkpoint",o,{add2wrapper:!0});const d={dimension:2};l("to",d,{dimension:3},{scroll:o,easeFn:Nt,pixels:o.clientHeight*2.5,update(u){W=d.dimension>2,W?(s.textContent=`I like programming in ${d.dimension.toFixed(1)}D`,c.classList.add("invisible")):(s.textContent="I like programming",c.classList.remove("invisible")),$=u===1;const f=1-(d.dimension-2),p=90*(d.dimension-2);n.parentElement.style.transform=`scale(${f}) rotate3d(1, 1, 1, ${p}deg)`,Z(K>0&&d.dimension<3)}}),l("checkpoint",o,{add2wrapper:!0})}function be(t,e,n){const s=document.querySelector("#intro-text-container"),o=L(t),r=Array.from({length:3},c=>Array.from({length:50},a=>({x:Math.random()*o.rangeX-o.rangeX/2,y:Math.random()*o.rangeY-o.rangeY/2,r:Math.random()*.004}))),i={dimension:3,opacity:1,scale:1,x:1};l("to",i,{dimension:9.9,opacity:0,scale:5},{scroll:s,easeFn:$t,pixels:s.clientHeight*3.5,offset:-s.clientHeight*1.5,update(c){$&&(e.textContent=`I like programming in ${i.dimension.toFixed(1)}D`),e.style.opacity=`${i.opacity}`,e.style.transform=`scale(${i.scale})`,ve(o,r,c)}}),l("to",i,{x:7.9},{scroll:s,easeFn:Q,pixels:s.clientHeight*2,update(){const c=1-i.x**.75,a=90*i.x;n.style.transform=`scale(${c}) rotate3d(1, 2, 1, ${a}deg)`}}),l("checkpoint",s,{add2wrapper:!0,toggle:gt})}function ve(t,e,n){t.clear(),t.lineCap="round",n=Math.max(0,n-.15)**4;const s=80*(.8-n**.5);for(let o=0;o<e.length;o++){const r=e[o],i=[0,60,240][o];t.strokeStyle=`hsla(${i}, 65%, 88%, ${s}%)`,t.beginPath();for(let c=0;c<r.length;c++){const a=r[c],d=2*a.x*n,u=2*a.y*n;t.moveTo(a.x-d,a.y-u),t.lineTo(a.x+d+a.r,a.y+u+a.r),t.lineWidth=a.r}t.stroke()}}function we(t){t.height=window.innerHeight,t.width=window.innerWidth;const e=new Float32Array([-1,-1,1,-1,-1,1,1,1]);R=he(t,{vertexSources:[pe],fragmentSources:[fe],attributes:{a_position:{data:e,type:"FLOAT",size:2}},uniforms:{u_resolution:{type:"2f",values:[t.width,t.height]},u_time:{type:"1f",values:[0]}},drawMode:"TRIANGLE_STRIP"})}const Se=Date.now();function Ae(){Z=l("constantly",()=>{const t=(Date.now()-Se)/1e3;R.updateUniforms({u_time:[t]}),R.draw(0,4)})}const xe="/vite-deploy-demo/assets/amonamarth-d9f155dc.webp",ke="/vite-deploy-demo/assets/rammstein-b2624c6e.webp",Te="/vite-deploy-demo/assets/eluveitie-a73c8e67.webp",He="/vite-deploy-demo/assets/gnr-c1c96262.webp",Ie="/vite-deploy-demo/assets/greenday-846eef14.webp",Oe="/vite-deploy-demo/assets/nightwish-e8d995fd.webp",De="/vite-deploy-demo/assets/factorio-2d88122a.webp",Je="/vite-deploy-demo/assets/assettocorsa-c65cbe9c.webp",Me="/vite-deploy-demo/assets/minecraft-f16a6a9f.webp",Pe="data:image/webp;base64,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",Ce="/vite-deploy-demo/assets/mclarenf1-00a92b05.webp",Fe="/vite-deploy-demo/assets/rx7-5fbfd767.webp",vt=Object.freeze(Object.defineProperty({__proto__:null,amonamarth:xe,assettocorsa:Je,eluveitie:Te,factorio:De,forzahorizon:Pe,gnr:He,greenday:Ie,mclarenf1:Ce,minecraft:Me,nightwish:Oe,rammstein:ke,rx7:Fe},Symbol.toStringTag,{value:"Module"})),Ee=Object.values(vt).sort(()=>.5-Math.random());function Re(){const t=document.querySelector("#interests-canvas"),e=document.querySelector("#white-out-container"),n=t.parentElement;gt.observe(s=>{n.classList.toggle("invisible"),e.classList.toggle("invisible"),t.style.transform="translateY(0px)"}),Le(t),Be(t)}function Le(t){const e=document.querySelector("#interests-text-line"),n=[...e.getElementsByTagName("span")],s=n.length-1;n.forEach((o,r)=>{l({scroll:t,easeFn:Vt,pixels:t.clientHeight*1.5,offset:t.clientHeight*(r+8)*.125,update(i){o.classList.toggle("interests-text-word-stage-1",i>.2),r===s&&e.classList.toggle("interests-text-word-stage-2",i===1)}})}),l("checkpoint",t,{add2wrapper:!0})}function Be(t){const e=L(t);e.scale(1,-1);const n=e.rangeY/2-.1,s=Array.from({length:12},(i,c)=>({y:0,a:Math.TAU*c/24-Math.PI*.75,r:n*4})),o=at(Object.values(vt));l("to",{x:90},{x:0},{scroll:t,easeFn:Q,pixels:t.clientHeight*3.25,update(i){t.classList.toggle("invisible",i===0),t.style.transform="translateY(0)",Qe(e,o,s,i)}}),l("checkpoint",t,{add2wrapper:!0,toggle:yt})}function Qe(t,e,n,s){t.clear();const o=t.rangeX/2-.1,r=s*Math.TAU*1.25;for(let i=0;i<n.length;i++)Ze(t,n[i],e[Ee[i]],r,o)}function Ze(t,{y:e,a:n,r:s},o,r,i){const c=n+r*.85;if(c<0||Math.TAU<c)return;const a=Math.cos(c)*s,u=1.8/(Math.sin(c)*s+3.6);t.save(),t.scale(u,u),t.moveTo(a+i,e),t.save(),t.beginPath(),t.shadowBlur=5,t.shadowColor="#242424",t.fillStyle="#24242422",t.translate(a+i*1.5,e+.4),t.scale(.2,.025),t.arc(0,0,1,0,Math.PI*2),t.fill(),t.restore(),t.drawImage(o,a+i*1.5-.2,e-.2,.4,.4),t.restore()}const ze="/vite-deploy-demo/assets/lightbulb-on-7bcf1de2.webp",qe="data:image/webp;base64,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snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32rAAA/v/eCKhYgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=",Ye=Object.freeze(Object.defineProperty({__proto__:null,lightBulbOff:qe,lightBulbOn:ze},Symbol.toStringTag,{value:"Module"})),A=Array.from({length:30},(t,e)=>({x:0,y:.0175*e,a:Math.PI/2,l:.0175})),Ue={x:1,y:0,a:0,l:0},S=[];let k=1,T=1,j=1,X=1,_=0,b=0,wt=at(Object.values(Ye));const[We,je]=Object.keys(wt),w={isOn:!0,img(){return wt[this.isOn?je:We]}};function Xe(){const t=document.querySelector("#interests-canvas"),e=document.querySelector("#turn-off-text-line"),n=document.querySelector("#know-you-button"),s=document.querySelector("#know-you-container"),o=t.parentElement,r=t.getContext("2d");yt.observe(p=>{p?t.style.transform=`translateY(${-t.clientHeight*.66}px)`:t.style.transform="translateY(0px)",e.classList.toggle("invisible",!p)});const i=n.getBoundingClientRect(),c=i.top-i.height/2,a=i.left+i.width/2,d=F("mousemove",p=>{const v=p.clientX,I=p.clientY;n.style.transform=`translate(${(v-a)/5}px, ${(I-c)/5}px)`}),u=F("mousemove",p=>{j=p.clientX,X=p.clientY,St(t,r),window.requestAnimationFrame(()=>At(r,f))}),f=p=>{w.isOn=p??!w.isOn,S.length=0,w.isOn?o.style.backgroundColor="#f5f5f5":o.style.backgroundColor="#242424",e.classList.toggle("invisible",!w.isOn),s.classList.toggle("invisible",w.isOn),d(!w.isOn)};return n.onclick=()=>{const p=document.querySelector("#about-me-btn");p.scrollIntoView({behavior:"smooth",block:"center"}),window.addEventListener("scrollend",v=>{p.click()},{once:!0})},Ne(t,e,u,f),()=>{d(!1),u(!1),k=1,T=1,j=1,X=1,_=0,b=0,w.isOn=!0}}function Ne(t,e,n,s){const o=document.querySelector("#interests-text-line"),r=t.getContext("2d"),i={y:0};let c=0;l("to",i,{y:t.clientHeight*.66},{scroll:t,easeFn:g,pixels:t.clientHeight*1.5,offset:t.clientHeight*.5,update(a){n(a>.1),o.style.transform=`translate(-50%, -50%) translateY(${i.y}px)`,t.style.transform=`translateY(${i.y-t.clientHeight*.66}px)`,e.style.transform=`translate(-25%, calc(${i.y-t.clientHeight*.66}px - 50%))`,b=a,_=i.y-t.clientHeight*.66,St(t,r),At(r,s),a<.8&&a<c&&s(!0),c=a,S.length=0}}),l("checkpoint",t,{add2wrapper:!0})}function St(t,e){k=(j-t.clientWidth/2)*(e.rangeX/t.clientWidth),T=(X-_-t.clientHeight/2)*(e.rangeY/t.clientHeight)}function At(t,e){Ge(),t.clear(),t.fillStyle="black",t.drawImage(w.img(),.5,-.75,1,1),t.beginPath(),t.arc(1,0,.02,0,Math.TAU);const n=A.at(-1);for(const s of A){const o=s.x+Math.cos(s.a)*s.l*b,r=s.y+Math.sin(s.a)*s.l*b;s===n&&(S.push(Math.hypot(o-1,r+(1-b))),S.length>15&&(S.shift(),S.at(-1)>.5&&Jt(S)>.25&&e())),t.moveTo(o,r),t.arc(o,r,.005*b,0,Math.TAU)}t.fill()}function Ge(){!w.isOn&&Math.hypot(k-1,T)>.0175*35&&(S.length=0,k=1,T=1);for(let t=A.length-1;t>=0;t--){const e=A[t];e.a=Math.atan2(T-e.y,k-e.x),e.x=k-=Math.cos(e.a)*e.l*b,e.y=T-=Math.sin(e.a)*e.l*b}for(let t=0;t<A.length;t++){const e=A[t-1]||Ue,n=A[t];n.x=e.x+Math.cos(e.a)*e.l*b,n.y=e.y+Math.sin(e.a)*e.l*b}}function Ve(t){const e=[...document.querySelectorAll(".start-diamond-button")],[[n],s]=Ft(e,c=>c.id==="auto-scroll-btn"),o={ref:0},r=()=>e.forEach((c,a)=>{c.style.scale=c.classList.contains("activated-fill-button")?"1":`${1+o.ref**3/(1.3+Math.abs(a-2)**3)}`}),i=Ke(e,n,r,o);return s.forEach(c=>$e(c,t,r)),()=>{document.documentElement.style.overflowY="visible",i.disconnect()}}function Ke(t,e,n,s){const o=new IntersectionObserver(i=>{s.ref=i[0].intersectionRatio,n()},{threshold:Array.from({length:10},(i,c)=>c/10),rootMargin:`-${B(8)}px`});o.observe(e.parentElement);let r=!1;return e.addEventListener("click",()=>{if(r)return;let i=window.scrollY;const c=document.body.scrollHeight-window.innerHeight;let a=i,d=!1,u;r=!0;function f(p){u??(u=p),Math.abs(a-window.scrollY)>1&&(d=!0);const v=p-u;if(u=p,a+=v,a>=c||d){r=!1,e.blur();return}window.scrollTo(0,a),requestAnimationFrame(f)}requestAnimationFrame(f)}),o}function $e(t,e,n){let s,o;t.type="button",t.addEventListener("click",r=>{if(t.classList.toggle("activated-fill-button")){const{dx:c,dy:a}=Ct(t);t.style.transform=`translate(${c}px, ${a}px)`,t.style.zIndex="100",document.documentElement.style.overflowY="hidden",o=setTimeout(e(t.getAttribute("data-route")),1e3),clearTimeout(s)}else t.style.transform="",document.documentElement.style.overflowY="visible",s=setTimeout(()=>{t.style.zIndex=""},500),clearTimeout(o);n()})}const xt=4;function _e(){const t=document.querySelector("#triangles-container"),e=document.querySelector("#triangles-canvas");t.style.height=e.clientHeight*2+"px",tn(e,t,{recurseLim:xt,blackOpacity:0,prevScale:1,scale:1,cy:0})}function tn(t,e,n){const s=L(t);l("to",n,{scale:16,cy:3**.5*.5/5-.2,recurseLim:4,blackOpacity:1},{scroll:t,easeFn:Q,pixels:t.clientHeight*1.25,offset:t.clientHeight*-.25,update(){e.style.backgroundColor=`rgb(0, 0, 0, ${n.blackOpacity})`,s.clear();const o=n.scale/n.prevScale;s.scale(o,o),n.prevScale=n.scale,C(s,0,n.cy+.15,1,xt)}}),l("checkpoint",e,{toggle:mt})}function C(t,e,n,s,o,r=o){const i=s/2,c=Math.sqrt(3)*s/4;o>0&&(C(t,e-i/2,n-c/2,s/2,o-.5,r),C(t,e+i/2,n-c/2,s/2,o-1.3,r),C(t,e,n+c/2,s/2,o-1.8,r)),t.fillStyle=`rgb(250, 250, 250, ${.07*(r-o)})`,t.beginPath(),t.lineTo(e+i,n-c),t.lineTo(e-i,n-c),t.lineTo(e,n+c),t.fill()}const en=(t,e)=>`
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
`,nn=t=>{const e=[_t,Ve,_e,ie,ce,de,me,Re,Xe];let n;const s=F("resize",t("/"));return{path:"/",html:en(window.innerHeight,window.innerWidth),construct(){window.scrollTo(0,0),setTimeout(()=>{window.scrollTo(0,0),n=e.map(o=>o(t)),jt(),s(!0)},0)},destruct(){s(!1),se("main-page"),n.forEach(o=>{o==null||o()}),Xt()}}};function sn(t){const e=document.querySelector("#app");let n;const s=c=>()=>{window.history.pushState(null,"",c),i()},o=t.map(c=>c(s)),r=o.find(c=>c.path==="*"),i=()=>{var d,u;const c=window.location.pathname,a=o.find(f=>f.path===c)??r;(d=n==null?void 0:n.destruct)==null||d.call(n),n=a,a.forceReload&&on(`${a.path}:reloaded`),e.innerHTML=a.html,(u=a.construct)==null||u.call(a)};window.addEventListener("popstate",i),window.addEventListener("load",i),document.addEventListener("click",c=>{const a=c.target;a.tagName==="A"&&a.getAttribute("data-client")!==null&&(c.preventDefault(),s(a.getAttribute("href"))())})}function on(t){sessionStorage.getItem(t)?sessionStorage.removeItem(t):(sessionStorage.setItem(t,"true"),window.location.reload())}const rn=()=>({path:"/github",html:'<div id="container">Redirecting...</div>',construct(){document.location.replace("https://github.com/toptobes")}});const an="/vite-deploy-demo/assets/profile-icon-d0fc271b.svg";function kt(t,e){let n="";return`
    <div id="page-container">
      <div id="path-container">
        <span>
          <span style="opacity: .75; color: chartreuse;">kavin@porfolio</span><!--
       --><span style="opacity: .75;">:</span>
        </span>
        <div class="breaker"></div>
        <a href="/" data-client id="home-icon" style="color: dodgerblue;"></a>
        ${t.split("/").filter(o=>o).map(o=>(n+="/"+o,`
      <span style="color: dodgerblue;">/</span>
      <a href="${n}" data-client id="path-segment" style="color: dodgerblue;">${o}</a>
    `)).join("")}
        <span style="opacity: .75; scale: .95;">$</span>
      </div>
      <div id="page-body">
        ${e}
      </div>
    </div>
  `}const cn=kt("/about-me",`
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
        <img src="${an}" alt="Picture of me" id="profile-pic">
      </div>
    </div>
  </div>
`),ln=()=>({path:"/about-me",html:cn});function dn(){return pn.map(t=>`
    <a href="${t.url}" class="card">
      <h1>${t.name}${t.stars?" ("+t.stars+"☆)":""}</h1>
      <p>${t.desc}</p>
      <div class="tags-container">
        ${un(t.tags)}
      </div>
    </a>
  `).join("")}function un(t){return t.map(e=>`
    <div class="tag">
      ${rt[e]?`<span class="tag-dot" style="background: ${rt[e]};"></span>`:""}
      ${e}
    </div>
  `).join("")}const rt={Kotlin:"rgb(169, 123, 255)",Haskell:"rgb(94, 80, 134)",TypeScript:"rgb(49, 120, 198)",Python:"rgb(53, 114, 165)",JavaScript:"rgb(241, 224, 90)",Assembly:"rgb(110, 76, 19)",Java:"rgb(176, 114, 25)",CUDA:"rgb(58, 78, 58)",C:"rgb(85, 85, 85)",Lisp:"rgb(200, 200, 200)",SCSS:"rgb(198, 83, 140)"},pn=[{name:"Voxyl-Overlay",desc:"A desktop application utility for certain Minecraft servers",tags:["Kotlin","Compose Multiplatform","App"],url:"https://github.com/BWP-Stats/Voxyl-Overlay",stars:6},{name:"Blacksmith",desc:"A fully-fledged declarative FTC Robotics software library complete w/ documentation site",tags:["Kotlin","Java","TypeScript","ReactJS","Library"],url:"https://github.com/toptobes/robot-code-v2",stars:3},{name:"File-System-System",desc:"A file-system based programming language that transpiles to JS",tags:["Haskell","Compiler"],url:"https://github.com/toptobes/file-system-system"},{name:"2048-ASM",desc:"A colored 2048 terminal game made in MASMx64 assembly",tags:["Assembly","CLI"],url:"https://github.com/toptobes/ASMPlaygroundV2",stars:3},{name:"Magic-Square-ASM",desc:"Magic square creator & checker using AVX512 & x87 (made for a school project who wanted it in Python lol)",tags:["Assembly","SIMD","CLI"],url:"https://github.com/toptobes/ASMPlaygroundV2",stars:3},{name:"BadVM",desc:"A small 16-bit VM written in C w/ a custom typed Assembly lang written in Kotlin",tags:["C","Kotlin","Assembly","VM","Compiler"],url:"https://github.com/toptobes/BadVm",stars:1},{name:"Chess3D",desc:'A WIP multiplayer 3D chess game (4 layers of boards) for the web made in collaboration with <span style="text-decoration: underline;">T-Lind</span>',tags:["TypeScript","SCSS","ExpressJS","ReactJS","ThreeJS","WebSockets","SQLite"],url:"https://github.com/T-Lind/chess-3d-dev"},{name:"KineticClock",desc:"A small but extremely satisfying kinetic clock desktop app",tags:["Kotlin","Compose Multiplatform","App"],url:"https://github.com/toptobes/KineticClock",stars:2},{name:"Astra-Spring-Demo",desc:"An open-source demonstration of AstraDB's indexing capabilities from my internship @ DataStax",tags:["TypeScript","Java","Python","SCSS","Spring","WebSockets","AI/ML","AstraDB"],url:"https://github.com/toptobes/astra-demo",stars:4},{name:"Sentinel Dashboard",desc:"An unfinished dashboard and backend api for an abandoned Discord bot",tags:["JavaScript","TypeScript","ReactJS","NestJS","MongoDB"],url:"https://github.com/VXFreelance/SentinelWebsite"},{name:"BadLisp",desc:"A badly-implemented lisp that compiles down to C",tags:["C","Lisp","Compiler"],url:"https://github.com/toptobes/BadLisp",stars:1},{name:"brainf",desc:"An extremely small (192 chars) brainf**k interpreter",tags:["C","Interpreter"],url:"https://github.com/toptobes/brainf",stars:1},{name:"jsonh",desc:"A quick 'n' dirty JSON prettifier/minifier",tags:["Haskell","CLI"],url:"https://github.com/toptobes/jsonh"},{name:"MC-1.8.9-Utils",desc:"A collection of small utility mods for Minecraft using the ChatTriggers framework",tags:["JavaScript"],url:"https://github.com/toptobes/MC-1.8-Utils",stars:1},{name:"Sorts-CS3",desc:"Small program using CUDA w/ the CUB library to sort 1B ints as fast as possible for my high school's CS class's speed sorting comp :)",tags:["CUDA","SIMT"],url:"https://github.com/toptobes/sorts_cs3",stars:1}],fn=kt("/projects",`
  <br>
  <blockquote id="fun-fact-container">
    <p>
      <span style="font-weight: bolder;">Fun fact:</span>
      this website was made with absolutely no third party dependencies; it involved the creation of a
      tweening library, a small declarative webgl shader library, and a client side router.
    </p>
    <div style="height: .25em;"></div>
    <p style="font-size: .8em;">
      *If you consider TypeScript a third party dependency, I don't wanna be friends with you :(
    </p>
  </blockquote>
  <br>
  <div id="cards-container">
    ${dn()}
  </div>
`),hn=()=>({path:"/projects",html:fn,construct(){window.scrollTo(0,0)}});sn([nn,Ot,hn,ln,rn]);
