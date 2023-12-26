import{u as r,a as l,l as d,d as o,P as a,e as G,b as v,q as te,s as F,g as j,t as re,i as oe,j as t,C as E,k as ie,o as R,p as ne,v as ae,w as se,x as le,y as de}from"./index-XLLciX8N.js";import{P as ce}from"./PageTitle-L3qf6XAS.js";import{S as M}from"./react-select.esm-SAWjwlLX.js";import{g as pe,b as he,a as xe,h as ue}from"./selectors-_FwoqZ9g.js";r.h1`
  font-size: 32px;
  font-weight: 600;
  line-height: 38px;
  margin-bottom: 40px;
`;r.p`
  font-size: 28px;
  font-weight: 600;
  line-height: 32px;
`;const ge=r.textarea`
  width: 335px;
  min-height: 184px;
  padding: 16px;
  margin-bottom: 20px;
  background: transparent;
  border-radius: 14px;
  border: ${({theme:e})=>e==="dark"?"1px solid var(--transp-white)":"1px solid var(--transp-dark)"};
  color: ${({theme:e})=>e==="dark"?l.colors.main:d.colors.main};
  line-height: 1;
  vertical-align: top;
  resize: none;
  @media ${o.tablet} {
    width: 480px;
  }
`,be=r.button`
  border-radius: 42px;
  background-color: ${({theme:e})=>e==="dark"?"var(--white)":"var(--black)"};
  display: inline-flex;
  padding: 14px 40px;
  align-items: flex-start;
  gap: 10px;
  color: ${({theme:e})=>e==="dark"?d.colors.main:l.colors.main};
  font-family: inherit;
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
  transition: all var(--tran-fast);
  border: none;
  @media ${o.tablet} {
    display: block;
  }

  &:hover {
    box-shadow: rgba(233, 233, 233, 0.3) 0px 0px 28px,
      rgba(233, 233, 233, 0.32) 0px 6px 23px;
  }
`,D={control:e=>({...e,width:200,height:50,color:"var(--white)",border:"none",textAlign:"right",background:"transparent"}),option:(e,i)=>({...e,padding:"4px 14px",fontSize:"12px",backgroundColor:i.isSelected?"rgba(255, 255, 255, 0.10)":"",color:i.isSelected?"var(--white)":"var(--transp-white)",":hover":{background:"rgba(255, 255, 255, 0.10)",color:"#F3F3F3"}}),menu:e=>({...e,background:"#161F37",border:"none ",borderRadius:"12px ",maxHeight:"300px",width:"151px",right:"0"}),menuList:e=>({...e,"::-webkit-scrollbar":{width:"2px",height:"0px"},"::-webkit-scrollbar-track":{background:"#161F37"},"::-webkit-scrollbar-thumb":{background:"#5d6b90"}})},me={...D,control:e=>({...e,width:200,height:50,color:"var(--white)",border:"border: 1px solid rgba(243, 243, 243, 0.30)",borderRadius:"200px",textAlign:"left",background:"transparent","@media only screen and (min-width:768px)":{...D["@media only screen and (min-width: 768px)"],width:332}}),menu:e=>({...e,background:"#161F37",border:"none ",borderRadius:"12px ",maxHeight:"300px",width:"100%",left:"0"})},C=r.p`
  position: absolute;
  top: 40px;
  color: #ff7c31;
  font-size: 13px;
  width: 100%;
`,ke=r(C)`
  top: 7px;
  left: -15px;
  font-size: 26px;
  font-weight: 700;
  width: 10px;
  &::after {
    content: 'This field is required';
    display: none;
    width: 145px;
    height: 20px;
    background-color: white;
    color: black;
    font-size: 14px;
    position: absolute;
    top: 40px;
    left: 10px;
    opacity: 0;
    transition: all;
    border-radius: 6px;
    padding: 1px 4px;
  }
  &:hover {
    &::after {
      display: block;
      opacity: 1;
    }
  }
`,V=r.label`
  position: relative;
`,fe=r.p`
  position: absolute;
  top: 280px;
  color: #ff7c31;
  font-size: 13px;
  width: 100%;
`,ve=r.input`
  display: none;
`,we=r.label`
  position: relative;
  z-index: 1;

  width: 335px;
  height: 320px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background-color: ${({theme:e})=>e==="dark"?l.background.darkBg:d.background.lightBg};
  margin-bottom: 40px;
  background-repeat: no-repeat;
  background-size: cover;
  @media ${o.tablet} {
    min-width: 320px;
    margin-bottom: 0;
  }
  @media ${o.desktop} {
    min-width: 400px;
  }
`,ye=r.div`
  @media ${o.tablet} {
    display: flex;
    gap: 32px;
    padding-bottom: 80px;
    max-width: 833px;
  }
`,U=r.label`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-bottom: 80px;
  input[type='radio']:checked + p {
    color: ${({theme:e})=>e==="dark"?l.colors.main:d.colors.main};
    &::before {
      content: '';
      background-color: white;
      border: ${({theme:e})=>e==="dark"?"1px solid var(--transp-white)":"1px solid var(--black)"};
    }
    &::after {
      content: '';
      display: flex;
      border-radius: 50%;
      top: 3px;
      left: 3px;
      /* border: 2.9px solid black; */
      border: ${({theme:e})=>e==="dark"?"1px solid var(--black)":"2px solid var(--black)"};
      width: 12px;
      height: 12px;
      opacity: 1;
      position: absolute;
      z-index: 3;
      /* background-color: black; */
      background-color: ${({theme:e})=>e==="dark"?"var(--white)":"var(--black)"};
    }
  }
  position: relative;

  input[type='radio'] {
    opacity: 0;
  }
  input[type='radio'] + p {
    padding-left: 15px;
    &::before {
      content: '';
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      border: unset;
      border: ${({theme:e})=>e==="dark"?"2px solid var(--transp-white)":"2px solid var(--transp-dark)"};
      width: 18px;
      height: 18px;
      opacity: 1;
      position: absolute;
      z-index: 2;
      top: 0;
      left: 0;
    }
  }
`,je=r.label`
  display: flex;
  gap: 30px;
  position: relative;
  @media ${o.tablet} {
    padding-top: 20px;
    max-height: 32px;
  }
`,_=r.p`
  color: ${({theme:e})=>e==="dark"?l.colors.transp:d.colors.transp};
`,B=r.label`
  width: 335px;
  position: relative;
  height: 35px;
  align-items: center;
  padding-bottom: 14px;
  display: flex;
  margin-bottom: 31px;
  justify-content: space-between;
  border-bottom: ${({theme:e})=>e==="dark"?"1px solid var(--white)":"1px solid var(--dark)"};
  color: ${({theme:e})=>e==="dark"?l.colors.transp:d.colors.transp};
  padding-left: 3px;
  @media ${o.tablet} {
    padding-bottom: 18px;
    width: 352px;
  }

  .css-1rh15wy-option:hover {
    color: ${({theme:e})=>e==="dark"?"var(--white)":"var(--dark)"};
    cursor: pointer;
  }

  .css-1diu2n5-indicatorContainer {
    color: ${({theme:e})=>e==="dark"?"var(--white)":"var(--dark)"};
  }

  .css-1u9des2-indicatorSeparator {
    background-color: ${({theme:e})=>e==="dark"?"var(--dark)":"var(--white)"};
  }

  .css-1dimb5e-singleValue {
    color: ${({theme:e})=>e==="dark"?"var(--white)":"var(--black)"};
  }

  .css-tj5bde-Svg {
    fill: ${({theme:e})=>e==="dark"?"var(--white)":"var(--black)"};
  }

  .css-14re6nr-menu {
    background-color: ${({theme:e})=>e==="dark"?"var(--light-theme-bg)":"var(--white)"};
  }

  .css-1rh15wy-option {
    color: ${({theme:e})=>e==="dark"?"var(--transp-white)":"var(--transp-dark)"};
  }

  .css-1y6kdfa-option {
    color: ${({theme:e})=>e==="dark"?"var(--white)":"var(--dark)"};
  }

  .css-1y6kdfa-option {
    background-color: none;
  }
`,H=r.input`
  width: 335px;
  position: relative;
  height: 35px;
  background-color: transparent;
  outline: none;
  border: none;
  border-bottom: ${({theme:e})=>e==="dark"?"1px solid var(--white)":"1px solid var(--dark)"};
  padding-bottom: 14px;
  margin-bottom: 31px;
  color: ${({theme:e})=>e==="dark"?l.colors.main:d.colors.main};

  &::placeholder {
    color: ${({theme:e})=>e==="dark"?l.colors.transp:d.colors.transp};
  }
  @media ${o.tablet} {
    padding-bottom: 18px;
    width: 352px;
  }
`,$e=r.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,Se=r.p`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 6px;
  background: var(--white);
  font-size: 45px;
  color: black;
  padding: 11px;
  margin-bottom: 18px;
`,Ie=r.p`
  color: var(--white);
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
`,W=r.p`
  color: ${({theme:e})=>e==="dark"?l.colors.transp:d.colors.transp};
`,X=({register:e,control:i,handleSubmit:g,setValue:b,errors:h,onSubmit:w})=>{const $=G(),s=v(pe),y=v(he),S=v(te),n=v(F),[x,q]=j.useState(""),[u,k]=j.useState(!1),[f,c]=j.useState(),m={...D,dropdownIndicator:p=>({...p,transition:"transform 0.2s ease",transform:u?"rotate(180deg)":null})},I={...D,dropdownIndicator:p=>({...p,transition:"transform 0.2s ease",transform:f?"rotate(180deg)":null})},z=s==null?void 0:s.map(p=>({label:p,value:p})),Z=y==null?void 0:y.map(p=>({label:p,value:p}));j.useEffect(()=>{$(re())},[$]),j.useEffect(()=>{$(oe())},[$]);const ee=p=>{const T=p.target.files[0];if(b("photo",T),T){const A=new FileReader;A.onloadend=()=>{q(A.result)},A.readAsDataURL(T)}};return t.jsx("form",{onSubmit:g(w),encType:"multipart/form-data",children:t.jsxs(ye,{children:[t.jsxs(we,{theme:n,style:{backgroundImage:`url(${x})`},children:[t.jsx(ve,{theme:n,type:"file",accept:".png, .jpeg, .jpg",...e("photo"),onChange:ee}),!x&&t.jsxs($e,{theme:n,children:[t.jsx(Se,{theme:n,children:"+"}),t.jsx(Ie,{theme:n,children:"Add image"})]})]}),t.jsxs("div",{children:[t.jsxs(V,{theme:n,children:[t.jsx(H,{theme:n,type:"text",...e("itemTitle",{required:!0}),placeholder:"Enter item title"}),h.itemTitle&&t.jsx(C,{theme:n,children:"Item title is required."})]}),t.jsxs(V,{children:[t.jsx(H,{theme:n,type:"text",...e("aboutRecipe",{required:!0}),placeholder:"Enter about recipe"}),h.aboutRecipe&&t.jsx(C,{children:"About recipe field is required."})]}),t.jsxs(B,{theme:n,children:[t.jsx(_,{theme:n,children:"Category"}),t.jsx(E,{name:"category",control:i,render:({field:p})=>t.jsx(M,{...p,styles:m,options:Z,isSearchable:!1,onChange:T=>{p.onChange(T)},theme:n,menuIsOpen:u,onMenuOpen:()=>k(!0),onMenuClose:()=>k(!1)}),rules:{required:"Category field is required"}}),h.category&&t.jsx(C,{children:h.category.message})]}),t.jsxs(B,{theme:n,children:[t.jsx(_,{theme:n,children:"Glass"}),t.jsx(E,{name:"glass",control:i,render:({field:p})=>t.jsx(M,{styles:I,...p,options:z,onChange:T=>{p.onChange(T)},theme:n,menuIsOpen:f,onMenuOpen:()=>c(!0),onMenuClose:()=>c(!1)}),rules:{required:"Glass field is required"}}),h.glass&&t.jsx(C,{children:h.glass.message})]}),t.jsxs(je,{children:[t.jsxs(U,{theme:n,children:[t.jsx("input",{type:"radio",value:"Non alcoholic",name:"alcohol",...e("alcohol",{required:!0}),defaultChecked:!0}),t.jsx(W,{theme:n,children:"Non alcoholic"})]}),S&&t.jsxs(U,{theme:n,children:[t.jsx("input",{type:"radio",name:"alcohol",value:"Alcoholic",...e("alcohol",{required:!0})}),t.jsx(W,{theme:n,children:"Alcoholic"})]})]})]})]})})};X.propTypes={register:a.func.isRequired,control:a.object.isRequired,handleSubmit:a.func.isRequired,errors:a.object.isRequired,setValue:a.func,onSubmit:a.func.isRequired};const N=r.button`
  background-color: transparent;
  border: none;
  width: 16px;
  height: 16px;
  font-size: 30px;
  line-height: 0;
  padding: 0;
  justify-content: center;
  align-items: center;
  color: inherit;
  font-family: inherit;
  cursor: pointer;
  color: ${({theme:e})=>e==="dark"?l.colors.main:d.colors.main};
  &:disabled {
    color: ${({theme:e})=>e==="dark"?"var(--transp-white)":"var(--transp-dark)"};
  }
`,Te=r.div`
  padding-bottom: 80px;
  @media ${o.tablet} {
    max-width: 704px;
  }
  @media ${o.desktop} {
    max-width: 540px;
  }
`,qe=r.p`
  color: ${({theme:e})=>e==="dark"?l.colors.main:d.colors.main};
`,Ce=r.div`
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 104px;
  border-radius: 200px;
  border: ${({theme:e})=>e==="dark"?l.borderColor.main:d.borderColor.main};
  height: 38px;
  margin-bottom: 34px;
`,Fe=r.button`
  position: relative;
  z-index: 1;
  background: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
  *:hover > svg {
    stroke: aqua;
  }
  @media ${o.tablet} {
    margin-left: 188px;
  }
  @media ${o.desktop} {
    margin-left: 20px;
  }
`,Re=r.input`
  width: 101px;
  height: 50px;
  border-radius: 200px;
  border: ${({theme:e})=>e==="dark"?"1px solid var(--white)":"1px solid var(--dark)"};
  background: transparent;
  color: ${({theme:e})=>e==="dark"?"var(--white)":"var(--dark)"};
  padding: 0 60px 0 24px;
  position: relative;

  @media ${o.tablet} {
    width: 150px;
  }
`,De=r.label`
  display: flex;
  margin-bottom: 18px;
  gap: 14px;
`,ze=r.div`
  position: relative;
`,Ae=r.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`,J=r.h3`
  font-size: 28px;
  font-weight: 600;
  line-height: 1.38em;
  margin-bottom: 40px;
  color: ${({theme:e})=>e==="dark"?l.colors.main:d.colors.main};

  @media ${o.tablet} {
    font-size: 40px;
    line-height: 1.38em;
  }
`,Pe=r.svg`
  stroke: ${({theme:e})=>e==="dark"?"var(--white)":"var(--dark)"};
`,Le=r.label`
  width: 200px;
  position: relative;
  height: 35px;
  display: flex;
  justify-content: space-between;
  padding-left: 3px;
  color: ${({theme:e})=>e==="dark"?l.colors.transp:d.colors.transp};
  @media ${o.tablet} {
    padding-bottom: 18px;
    width: 352px;
    height: 50px;
    border-radius: 200px;
  }

  .css-1rh15wy-option:hover {
    color: ${({theme:e})=>e==="dark"?"var(--white)":"var(--dark)"};
    cursor: pointer;
  }

  .css-1diu2n5-indicatorContainer {
    color: ${({theme:e})=>e==="dark"?"var(--white)":"var(--dark)"};
  }

  .css-1u9des2-indicatorSeparator {
    background-color: ${({theme:e})=>e==="dark"?"var(--dark)":"var(--white)"};
  }

  .css-1dimb5e-singleValue {
    color: ${({theme:e})=>e==="dark"?"var(--white)":"var(--black)"};
  }

  .css-tj5bde-Svg {
    fill: ${({theme:e})=>e==="dark"?"var(--white)":"var(--black)"};
  }

  .css-1df1nbw-menu {
    background-color: ${({theme:e})=>e==="dark"?"var(--light-theme-bg)":"var(--white)"};
  }

  .css-1rh15wy-option {
    color: ${({theme:e})=>e==="dark"?"var(--transp-white)":"var(--transp-dark)"};
  }

  .css-1y6kdfa-option {
    color: ${({theme:e})=>e==="dark"?"var(--white)":"var(--dark)"};
  }

  .css-1y6kdfa-option {
    background-color: none;
  }
`,K=({ingNumber:e,setIngNumber:i,register:g,control:b,handleSubmit:h,errors:w,onSubmit:$})=>{const s=v(F),y=G(),S=v(xe),[n,x]=j.useState(3);j.useEffect(()=>{y(ie())},[y]);const q=S==null?void 0:S.map(({title:c})=>({label:c,value:c})),u=c=>{c.preventDefault(),i([...e,n]),x(n+1)},k=c=>{c.preventDefault();const m=e.slice(0,e.length-1);i(m)},f=(c,m)=>{if(c.preventDefault(),e.length<=2)return;const I=e.filter(z=>z!==m);i(I)};return t.jsx("form",{onSubmit:h($),encType:"multipart/form-data",children:t.jsxs(Te,{children:[t.jsxs(Ae,{children:[t.jsx(J,{theme:s,children:"Ingredients"}),t.jsxs(Ce,{theme:s,children:[t.jsx(N,{theme:s,onClick:c=>{k(c)},disabled:e.length<=2,children:"-"}),t.jsx(qe,{theme:s,children:e.length}),t.jsx(N,{theme:s,onClick:c=>u(c),children:"+"})]})]}),e.map((c,m)=>t.jsxs(De,{theme:s,children:[t.jsxs(Le,{theme:s,children:[t.jsx(E,{name:`Ingredients${m}`,control:b,render:({field:I})=>t.jsx(M,{styles:me,...I,options:q,theme:s}),rules:{required:"!"}}),w[`Ingredients${m}`]&&t.jsx(ke,{children:w[`Ingredients${m}`].message})]}),t.jsx(ze,{theme:s,children:t.jsx(Re,{type:"text",placeholder:"1 cl",minLength:2,...g(`IngNumber${m}`),theme:s})}),t.jsx(Fe,{theme:s,onClick:I=>f(I,c),children:t.jsx(Pe,{theme:s,width:"18",height:"18",children:t.jsx("use",{href:`${R}#icon-X`})})})]},e[m]))]})})};K.propTypes={ingNumber:a.array.isRequired,setIngNumber:a.func.isRequired,register:a.func.isRequired,control:a.object.isRequired,handleSubmit:a.func.isRequired,errors:a.object.isRequired,onSubmit:a.func.isRequired};const Q=({register:e,handleSubmit:i,errors:g,onSubmit:b})=>{const h=v(F);return t.jsx("form",{onSubmit:i(b),encType:"multipart/form-data",children:t.jsxs(V,{children:[t.jsx(J,{theme:h,children:"Recipe Preparation"}),t.jsx(ge,{theme:h,type:"text",...e("recipeDesc",{required:!0}),placeholder:"Enter the recipe",minLength:7}),g.recipeDesc&&t.jsx(fe,{children:"This field is required and must contain minimum 7 symbols"})]})})};Q.propTypes={register:a.func.isRequired,control:a.object.isRequired,handleSubmit:a.func.isRequired,errors:a.object.isRequired,onSubmit:a.func.isRequired};const Oe=r.div`
  margin-top: 80px;

  @media ${o.tablet} {
    width: 261px;
  }

  @media ${o.desktop} {
    position: absolute;
    top: 14%;
    right: 15%;
  }
`,Ee=r.div`
  margin-bottom: 40px;
`,Me=r.p`
  color: ${({theme:e})=>e==="dark"?l.colors.main:d.colors.main};
  font-size: 18px;
  line-height: 24px;
  margin-bottom: 20px;
`,Ve=r.p`
  margin-bottom: 28px;
  color: black;
  font-size: 18px;

  line-height: 1.33;
  color: ${({theme:e})=>e==="dark"?l.colors.main:d.colors.main};
  border: none;
  border-radius: 6px;
  width: fit-content;
  padding: 4px;

  @media ${o.tablet} {
    margin-bottom: 40px;
    font-size: 24px;
    line-height: 32px;
  }
  @media ${o.desktop} {
  }
`,Ge=r.div`
  @media ${o.tablet} {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 704px;
  }

  @media ${o.desktop} {
    flex-direction: column;
    width: 340px;
  }
`,Ue=r.div`
  margin-bottom: 24px;
  display: flex;
  gap: 14px;

  @media ${o.tablet} {
  }

  @media ${o.desktop} {
    img {
      transition: transform 0.3s ease-out;
    }

    &:hover img {
      transform: scale(1.1);
    }

    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
      color: #fff;
      opacity: 0;
      transition: opacity 0.3s ease-out;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
    }

    &:hover .overlay {
      opacity: 1;
    }
  }
`,_e=r.div`
  width: 232px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media ${o.tablet} {
  }
  @media ${o.desktop} {
  }
`,Be=r.img`
  width: 90px;
  height: 90px;
  border-radius: 12px;

  @media ${o.tablet} {
  }
`,He=r.p`
  font-size: 16px;
  line-height: 22px;
  width: 232px;
  margin: 0;
  color: ${({theme:e})=>e==="dark"?l.colors.main:d.colors.main};
  @media ${o.tablet} {
  }
  @media ${o.desktop} {
  }
`,We=r.p`
  font-size: 14px;
  line-height: 18px;
  font-weight: 400;
  color: ${({theme:e})=>e==="dark"?l.colors.transp:d.colors.transp};
  text-overflow: ellipsis;
  line-height: 18px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;

  @media ${o.tablet} {
    line-height: 20px;
  }
`,Ne=r.ul`
  display: flex;
  gap: 14px;

  @media ${o.tablet} {
    gap: 16px;
  }
`,P=r.li`
  display: flex;
  justify-content: center;
  width: 38px;
  height: 38px;
  padding: 8px;
  text-align: center;
  border-radius: 10px;
  border: ${({theme:e})=>e==="dark"?"1px solid rgba(243, 243, 243, 0.2)":"1px solid rgba(22, 31, 55, 0.2)"};

  transition: border var(--tran-fast);

  &:hover {
    border: ${({theme:e})=>e==="dark"?"1px solid rgba(243, 243, 243, 0.5)":"1px solid var(--dark-theme-bg)"};
    cursor: pointer;
    svg {
      fill: ${({theme:e})=>e==="dark"?"var(--white)":"var(--black)"};
    }
  }
  &:focus {
    border: ${({theme:e})=>e==="dark"?"1px solid rgba(243, 243, 243, 0.5)":"1px solid var(--dark-theme-bg)"};
    svg {
      fill: ${({theme:e})=>e==="dark"?"var(--white)":"var(--black)"};
    }
  }

  @media ${o.tablet} {
    width: 44px;
    height: 44px;
  }
`,L=r.a``,O=r.svg`
  width: 22px;
  height: 22px;
  fill: ${({theme:e})=>e==="dark"?"var(--transp-white)":"rgba(22, 31, 55, 0.8)"};
  transition: fill(--tran-fast);
  @media ${o.tablet} {
    width: 28px;
    height: 28px;
  }
`,Y=()=>{const e=v(ue),i=v(F);return t.jsxs(Oe,{children:[t.jsxs(Ee,{children:[t.jsx(Me,{theme:i,children:"Follow Us"}),t.jsxs(Ne,{children:[t.jsx(P,{theme:i,children:t.jsx(L,{theme:i,href:"https://www.facebook.com/goITclub/",target:"_blank",rel:"noopener noreferrer",children:t.jsx(O,{theme:i,children:t.jsx("use",{href:R+"#icon-facebook"})})})}),t.jsx(P,{theme:i,children:t.jsx(L,{theme:i,href:"https://www.instagram.com/goitclub/",target:"_blank",rel:"noopener noreferrer",children:t.jsx(O,{theme:i,children:t.jsx("use",{href:R+"#icon-instagram"})})})}),t.jsx(P,{theme:i,children:t.jsx(L,{theme:i,href:"https://www.youtube.com/c/GoIT",target:"_blank",rel:"noopener noreferrer",children:t.jsx(O,{theme:i,children:t.jsx("use",{href:R+"#icon-youtube"})})})})]})]}),t.jsx(Ve,{theme:i,children:"Popular drinks"}),t.jsx(Ge,{children:e.map((g,b)=>t.jsxs(Ue,{children:[t.jsx(ne,{to:`/drink/${g._id}`,children:t.jsx(Be,{src:g.drinkThumb,alt:g.drink})}),t.jsxs(_e,{children:[t.jsx(He,{theme:i,children:g.drink}),t.jsx(We,{theme:i,children:g.description})]})]},g._id||b))})]})};Y.propTypes={popularDrinks:a.arrayOf(a.shape({_id:a.oneOfType([a.string,a.number]),drinkThumb:a.string,drink:a.string,description:a.string}))};const Ye=()=>{const e=G();j.useEffect(()=>{e(ae()),window.scrollTo({top:0})},[e]);const i=se(),g=v(F),{register:b,control:h,handleSubmit:w,setValue:$,formState:{errors:s}}=le(),[y,S]=j.useState([0,1]),n=x=>{const q=y.map((k,f)=>({title:x[`Ingredients${f}`].value,measure:x[`IngNumber${f}`]})),u=new FormData;q.forEach((k,f)=>{u.append(`ingredients[${f}][title]`,k.title),u.append(`ingredients[${f}][measure]`,k.measure)}),x.photo&&u.append("drinkThumb",x.photo),u.append("category",x.category.label),u.append("glass",x.glass.label),u.append("description",x.recipeDesc),u.append("instructions",x.aboutRecipe),u.append("alcoholic",x.alcohol),u.append("drink",x.itemTitle),e(de(u)).unwrap().then(()=>i("/my")).catch(k=>console.log(k))};return t.jsxs(t.Fragment,{children:[t.jsx(ce,{title:"Add drink"}),t.jsx(X,{register:b,control:h,setValue:$,handleSubmit:w,errors:s,onSubmit:n}),t.jsx(K,{ingNumber:y,setIngNumber:S,register:b,control:h,handleSubmit:w,errors:s,onSubmit:n}),t.jsx(Q,{register:b,control:h,handleSubmit:w,errors:s,onSubmit:n}),t.jsx(be,{type:"button",onClick:w(n),theme:g,children:"Add"}),t.jsx(Y,{})]})};export{Ye as default};
