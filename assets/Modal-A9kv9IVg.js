import{u as n,d as s,P as o,g as d,j as e,p as x}from"./index-pQgUnWTP.js";const l=n.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(1.5px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`,u=n.div`
  width: 375px;
  height: 812px;
  padding: 272px 38px 271px;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 1001;
  background-image: url(${t=>t.background||""});

  @media ${s.tablet} {
    width: 500px;
    height: 500px;
    padding: 218px 116px 40px;
    border-radius: 32px;
    background-image: url(${t=>t.background||""});
  }
`,g=n.div`
  width: 299px;
  height: 269px;
  padding: 50px 30px 14px;
  background: rgba(217, 217, 217, 0.14);
  backdrop-filter: blur(27.976364135742188px);

  @media ${s.tablet} {
    width: 268px;
    height: 242px;
    padding: 32px 18px 14px;
  }
`,h=n.h2`
  text-align: center;
  font-size: 28px;
  font-weight: 500;
  line-height: 1.14em;
  letter-spacing: -0.56px;
  margin-bottom: 20px;
`,b=n.button`
  width: 48px;
  height: 48px;
  padding: 10px;
  margin: 0 auto;
  border-radius: 58px;
  border: none;
  background: var(--black);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`,m=({isOpen:t,onClose:i,message:a,background:p})=>{const r=d.useCallback(c=>{c.key==="Escape"&&i()},[i]);return d.useEffect(()=>(t?(document.addEventListener("keydown",r),document.body.style.overflow="hidden"):(document.removeEventListener("keydown",r),document.body.style.overflow="auto"),()=>{document.removeEventListener("keydown",r),document.body.style.overflow="auto"}),[t,r]),t?e.jsx(e.Fragment,{children:e.jsx(l,{onClick:i,children:e.jsx(u,{background:p,children:e.jsxs(g,{children:[e.jsx(h,{children:a}),e.jsx(b,{onClick:i,children:e.jsx("svg",{width:28,height:28,children:e.jsx("use",{href:`${x}#icon-X`,style:{stroke:"white"}})})})]})})})}):null};m.propTypes={isOpen:o.bool.isRequired,onClose:o.func.isRequired,message:o.string.isRequired,background:o.string.isRequired};export{m as M};
