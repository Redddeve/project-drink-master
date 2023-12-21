import{e as r,s as w,j as l}from"./index-hMmrKk8Y.js";/**
 * @license lucide-react v0.298.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var b={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.298.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),h=(t,s)=>{const e=r.forwardRef(({color:n="currentColor",size:o=24,strokeWidth:a=2,absoluteStrokeWidth:c,className:p="",children:i,...u},d)=>r.createElement("svg",{ref:d,...b,width:o,height:o,stroke:n,strokeWidth:c?Number(a)*24/Number(o):a,className:["lucide",`lucide-${x(t)}`,p].join(" "),...u},[...s.map(([m,f])=>r.createElement(m,f)),...Array.isArray(i)?i:[i]]));return e.displayName=`${t}`,e};/**
 * @license lucide-react v0.298.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=h("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]),g=w.button`
  display: flex;
  justify-content: center;
  position: fixed;
  opacity: 1;
  bottom: 30px;
  right: 5px;
  cursor: pointer;
  transition-transform {
    transition-property: transform;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 1000ms;
  }

  border-radius: 10px;
`,k=()=>{const[t,s]=r.useState(!1),e=()=>{const o=document.documentElement.scrollTop;o>300?s(!0):o<=300&&s(!1)},n=()=>{window.scrollTo({top:0,behavior:"smooth"})};return r.useEffect(()=>(window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}),[]),l.jsx(g,{style:{display:t?"inline-block":"none"},children:l.jsx(y,{size:35,color:"#0f0f0f",onClick:n})})};export{k as B};
