import{u as r,a as d,l as c,d as o,P as n,e as B,b as f,q as te,s as F,g as k,t as re,i as oe,j as t,C as E,k as ie,o as R,p as ne,v as ae,w as se,x as le,y as de}from"./index-329GZjK3.js";import{P as ce}from"./PageTitle-9vMBt_6n.js";import{S as M}from"./react-select.esm-ciPxAAu8.js";import{g as pe,b as he,a as xe,h as ue}from"./selectors-qLmMXkZq.js";import{C as ge}from"./CircleBg-d_QY8b9I.js";r.h1`
  font-size: 32px;
  font-weight: 600;
  line-height: 38px;
  margin-bottom: 40px;
`;r.p`
  font-size: 28px;
  font-weight: 600;
  line-height: 32px;
`;const be=r.textarea`
  width: 335px;
  min-height: 184px;
  padding: 16px;
  margin-bottom: 20px;
  background: transparent;
  border-radius: 14px;
  border: ${({theme:e})=>e==="dark"?"1px solid var(--transp-white)":"1px solid var(--transp-dark)"};
  color: ${({theme:e})=>e==="dark"?d.colors.main:c.colors.main};
  line-height: 1;
  vertical-align: top;
  resize: none;
  @media ${o.tablet} {
    width: 480px;
  }
`,me=r.button`
  border-radius: 42px;
  background-color: ${({theme:e})=>e==="dark"?"var(--white)":"var(--black)"};
  display: inline-flex;
  padding: 14px 40px;
  align-items: flex-start;
  gap: 10px;
  color: ${({theme:e})=>e==="dark"?c.colors.main:d.colors.main};
  font-family: inherit;
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
  transition: all var(--tran-fast);
  border: none;
  cursor: pointer;
  @media ${o.tablet} {
    display: block;
  }

  &:hover {
    box-shadow: rgba(233, 233, 233, 0.3) 0px 0px 28px,
      rgba(233, 233, 233, 0.32) 0px 6px 23px;
  }
`,D={control:e=>({...e,width:200,height:50,color:"var(--white)",border:"none",textAlign:"right",background:"transparent"}),option:(e,i)=>({...e,padding:"4px 14px",fontSize:"12px",backgroundColor:i.isSelected?"rgba(255, 255, 255, 0.10)":"",color:i.isSelected?"var(--white)":"var(--transp-white)",":hover":{background:"rgba(255, 255, 255, 0.10)",color:"#F3F3F3"}}),menu:e=>({...e,background:"#161F37",border:"none ",borderRadius:"12px ",maxHeight:"300px",width:"151px",right:"0"}),menuList:e=>({...e,"::-webkit-scrollbar":{width:"2px",height:"0px"},"::-webkit-scrollbar-track":{background:"#161F37"},"::-webkit-scrollbar-thumb":{background:"#5d6b90"}})},ke={...D,control:e=>({...e,width:200,height:50,color:"var(--white)",border:"border: 1px solid rgba(243, 243, 243, 0.30)",borderRadius:"200px",textAlign:"left",background:"transparent","@media only screen and (min-width:768px)":{...D["@media only screen and (min-width: 768px)"],width:332}}),menu:e=>({...e,background:"#161F37",border:"none ",borderRadius:"12px ",maxHeight:"300px",width:"100%",left:"0"})},q=r.p`
  position: absolute;
  top: 40px;
  color: #ff7c31;
  font-size: 13px;
  width: 100%;
`,fe=r(q)`
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
`,we=r.p`
  position: absolute;
  top: 280px;
  color: #ff7c31;
  font-size: 13px;
  width: 100%;
`,ve=r.input`
  display: none;
`,ye=r.label`
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
  background-color: ${({theme:e})=>e==="dark"?d.background.darkBg:c.background.lightBg};
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
`,je=r.div`
  @media ${o.tablet} {
    display: flex;
    gap: 32px;
    padding-bottom: 80px;
    max-width: 833px;
  }
`,G=r.label`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-bottom: 80px;
  input[type='radio']:checked + p {
    color: ${({theme:e})=>e==="dark"?d.colors.main:c.colors.main};
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
  :hover {
    text-shadow: 0px 0px 12px white;
    transition: var(--tran-fast);
  }

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
`,$e=r.label`
  display: flex;
  gap: 30px;
  position: relative;

  @media ${o.tablet} {
    padding-top: 20px;
    max-height: 32px;
  }
`,U=r.p`
  color: ${({theme:e})=>e==="dark"?d.colors.transp:c.colors.transp};
`,_=r.label`
  width: 335px;
  position: relative;
  height: 35px;
  align-items: center;
  padding-bottom: 14px;
  display: flex;
  margin-bottom: 31px;
  justify-content: space-between;
  border-bottom: ${({theme:e})=>e==="dark"?"1px solid var(--white)":"1px solid var(--dark)"};
  color: ${({theme:e})=>e==="dark"?d.colors.transp:c.colors.transp};
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
  color: ${({theme:e})=>e==="dark"?d.colors.main:c.colors.main};
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-background-clip: text;
    -webkit-text-fill-color: ${({theme:e})=>e==="dark"?d.colors.main:c.colors.main}; // колір тексту
    -webkit-background-color: transparent !important;
    -webkit-border-bottom: ${({theme:e})=>e==="dark"?"1px solid var(--white)":"1px solid var(--dark)"};
    transition: all 0s 50000s;
    transition: background-color 5000s ease-in-out 0s;
  }
  &::placeholder {
    color: ${({theme:e})=>e==="dark"?d.colors.transp:c.colors.transp};
  }
  @media ${o.tablet} {
    padding-bottom: 18px;
    width: 352px;
  }
`,Se=r.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,Ie=r.p`
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
`,Te=r.p`
  color: var(--white);
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
`,W=r.p`
  color: ${({theme:e})=>e==="dark"?d.colors.transp:c.colors.transp};
`,X=({register:e,control:i,handleSubmit:x,setValue:w,errors:b,onSubmit:y})=>{const m=B(),l=f(pe),j=f(he),v=f(te),a=f(F),[T,$]=k.useState(""),[u,C]=k.useState(!1),[g,s]=k.useState(),p={...D,dropdownIndicator:h=>({...h,transition:"transform 0.2s ease",transform:u?"rotate(180deg)":null})},S={...D,dropdownIndicator:h=>({...h,transition:"transform 0.2s ease",transform:g?"rotate(180deg)":null})},z=l==null?void 0:l.map(h=>({label:h,value:h})),Z=j==null?void 0:j.map(h=>({label:h,value:h}));k.useEffect(()=>{m(re())},[m]),k.useEffect(()=>{m(oe())},[m]);const ee=h=>{const I=h.target.files[0];if(w("photo",I),I){const A=new FileReader;A.onloadend=()=>{$(A.result)},A.readAsDataURL(I)}};return t.jsx("form",{onSubmit:x(y),encType:"multipart/form-data",children:t.jsxs(je,{children:[t.jsxs(ye,{theme:a,style:{backgroundImage:`url(${T})`},children:[t.jsx(ve,{theme:a,type:"file",accept:".png, .jpeg, .jpg",...e("photo"),onChange:ee}),!T&&t.jsxs(Se,{theme:a,children:[t.jsx(Ie,{theme:a,children:"+"}),t.jsx(Te,{theme:a,children:"Add image"})]})]}),t.jsxs("div",{children:[t.jsxs(V,{theme:a,children:[t.jsx(H,{theme:a,type:"text",...e("itemTitle",{required:!0}),placeholder:"Enter item title"}),b.itemTitle&&t.jsx(q,{theme:a,children:"Item title is required."})]}),t.jsxs(V,{children:[t.jsx(H,{theme:a,type:"text",...e("aboutRecipe",{required:!0}),placeholder:"Enter about recipe"}),b.aboutRecipe&&t.jsx(q,{children:"About recipe field is required."})]}),t.jsxs(_,{theme:a,children:[t.jsx(U,{theme:a,children:"Category"}),t.jsx(E,{name:"category",control:i,render:({field:h})=>t.jsx(M,{...h,styles:p,options:Z,isSearchable:!1,onChange:I=>{h.onChange(I)},theme:a,menuIsOpen:u,onMenuOpen:()=>C(!0),onMenuClose:()=>C(!1)}),rules:{required:"Category field is required"}}),b.category&&t.jsx(q,{children:b.category.message})]}),t.jsxs(_,{theme:a,children:[t.jsx(U,{theme:a,children:"Glass"}),t.jsx(E,{name:"glass",control:i,render:({field:h})=>t.jsx(M,{styles:S,...h,options:z,onChange:I=>{h.onChange(I)},theme:a,menuIsOpen:g,onMenuOpen:()=>s(!0),onMenuClose:()=>s(!1)}),rules:{required:"Glass field is required"}}),b.glass&&t.jsx(q,{children:b.glass.message})]}),t.jsxs($e,{children:[t.jsxs(G,{theme:a,children:[t.jsx("input",{type:"radio",value:"Non alcoholic",name:"alcohol",...e("alcohol",{required:!0}),defaultChecked:!0}),t.jsx(W,{theme:a,children:"Non alcoholic"})]}),v&&t.jsxs(G,{theme:a,children:[t.jsx("input",{type:"radio",name:"alcohol",value:"Alcoholic",...e("alcohol",{required:!0})}),t.jsx(W,{theme:a,children:"Alcoholic"})]})]})]})]})})};X.propTypes={register:n.func.isRequired,control:n.object.isRequired,handleSubmit:n.func.isRequired,errors:n.object.isRequired,setValue:n.func,onSubmit:n.func.isRequired};const N=r.button`
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
  color: ${({theme:e})=>e==="dark"?d.colors.main:c.colors.main};
  &:disabled {
    color: ${({theme:e})=>e==="dark"?"var(--transp-white)":"var(--transp-dark)"};
  }
`,Ce=r.div`
  padding-bottom: 80px;
  @media ${o.tablet} {
    max-width: 704px;
  }
  @media ${o.desktop} {
    max-width: 540px;
  }
`,qe=r.p`
  color: ${({theme:e})=>e==="dark"?d.colors.main:c.colors.main};
`,Fe=r.div`
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 104px;
  border-radius: 200px;
  border: ${({theme:e})=>e==="dark"?d.borderColor.main:c.borderColor.main};
  height: 38px;
  margin-bottom: 34px;
`,Re=r.button`
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
`,De=r.input`
  width: 101px;
  height: 50px;
  border-radius: 200px;
  border: ${({theme:e})=>e==="dark"?"1px solid var(--white)":"1px solid var(--dark)"};
  background: transparent;
  color: ${({theme:e})=>e==="dark"?"var(--white)":"var(--dark)"};
  padding: 0 60px 0 24px;
  position: relative;
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-background-clip: text;
    -webkit-text-fill-color: var(--white); // колір тексту
    -webkit-background-color: transparent !important;
    -webkit-border: 1px solid rgba(243, 243, 243, 0.2);
    transition: all 0s 50000s;
    transition: background-color 5000s ease-in-out 0s;
  }
  @media ${o.tablet} {
    width: 150px;
  }
`,ze=r.label`
  display: flex;
  margin-bottom: 18px;
  gap: 14px;
`,Ae=r.div`
  position: relative;
`,Pe=r.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`,J=r.h3`
  font-size: 28px;
  font-weight: 600;
  line-height: 1.38em;
  margin-bottom: 40px;
  color: ${({theme:e})=>e==="dark"?d.colors.main:c.colors.main};

  @media ${o.tablet} {
    font-size: 40px;
    line-height: 1.38em;
  }
`,Le=r.svg`
  stroke: ${({theme:e})=>e==="dark"?"var(--white)":"var(--dark)"};
`,Oe=r.label`
  width: 200px;
  position: relative;
  height: 35px;
  display: flex;
  justify-content: space-between;
  padding-left: 3px;
  color: ${({theme:e})=>e==="dark"?d.colors.transp:c.colors.transp};
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
`,K=({ingNumber:e,setIngNumber:i,register:x,control:w,handleSubmit:b,errors:y,onSubmit:m})=>{const l=f(F),j=B(),v=f(xe),[a,T]=k.useState(3);k.useEffect(()=>{j(ie())},[j]);const $=v==null?void 0:v.map(({title:s})=>({label:s,value:s})),u=s=>{s.preventDefault(),i([...e,a]),T(a+1)},C=s=>{s.preventDefault();const p=e.slice(0,e.length-1);i(p)},g=(s,p)=>{if(s.preventDefault(),e.length<=2)return;const S=e.filter(z=>z!==p);i(S)};return t.jsx("form",{onSubmit:b(m),encType:"multipart/form-data",children:t.jsxs(Ce,{children:[t.jsxs(Pe,{children:[t.jsx(J,{theme:l,children:"Ingredients"}),t.jsxs(Fe,{theme:l,children:[t.jsx(N,{theme:l,onClick:s=>{C(s)},disabled:e.length<=2,children:"-"}),t.jsx(qe,{theme:l,children:e.length}),t.jsx(N,{theme:l,onClick:s=>u(s),children:"+"})]})]}),e.map((s,p)=>t.jsxs(ze,{theme:l,children:[t.jsxs(Oe,{theme:l,children:[t.jsx(E,{name:`Ingredients${p}`,control:w,render:({field:S})=>t.jsx(M,{styles:ke,...S,options:$,theme:l}),rules:{required:"!"}}),y[`Ingredients${p}`]&&t.jsx(fe,{children:y[`Ingredients${p}`].message})]}),t.jsx(Ae,{theme:l,children:t.jsx(De,{type:"text",placeholder:"1 cl",minLength:2,...x(`IngNumber${p}`),theme:l})}),t.jsx(Re,{theme:l,onClick:S=>g(S,s),children:t.jsx(Le,{theme:l,width:"18",height:"18",children:t.jsx("use",{href:`${R}#icon-X`})})})]},e[p]))]})})};K.propTypes={ingNumber:n.array.isRequired,setIngNumber:n.func.isRequired,register:n.func.isRequired,control:n.object.isRequired,handleSubmit:n.func.isRequired,errors:n.object.isRequired,onSubmit:n.func.isRequired};const Q=({register:e,handleSubmit:i,errors:x,onSubmit:w})=>{const b=f(F);return t.jsx("form",{onSubmit:i(w),encType:"multipart/form-data",children:t.jsxs(V,{children:[t.jsx(J,{theme:b,children:"Recipe Preparation"}),t.jsx(be,{theme:b,type:"text",...e("recipeDesc",{required:!0}),placeholder:"Enter the recipe",minLength:7}),x.recipeDesc&&t.jsx(we,{children:"This field is required and must contain minimum 7 symbols"})]})})};Q.propTypes={register:n.func.isRequired,control:n.object.isRequired,handleSubmit:n.func.isRequired,errors:n.object.isRequired,onSubmit:n.func.isRequired};const Ee=r.div`
  margin-top: 80px;

  @media ${o.tablet} {
    width: 261px;
  }

  @media ${o.desktop} {
    position: absolute;
    top: 14%;
    right: 15%;
  }
`,Me=r.div`
  margin-bottom: 40px;
`,Ve=r.p`
  color: ${({theme:e})=>e==="dark"?d.colors.main:c.colors.main};
  font-size: 18px;
  line-height: 24px;
  margin-bottom: 20px;
`,Be=r.p`
  margin-bottom: 28px;
  color: black;
  font-size: 18px;

  line-height: 1.33;
  color: ${({theme:e})=>e==="dark"?d.colors.main:c.colors.main};
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
`,He=r.img`
  width: 90px;
  height: 90px;
  border-radius: 12px;

  @media ${o.tablet} {
  }
`,We=r.p`
  font-size: 16px;
  line-height: 22px;
  width: 232px;
  margin: 0;
  color: ${({theme:e})=>e==="dark"?d.colors.main:c.colors.main};
  @media ${o.tablet} {
  }
  @media ${o.desktop} {
  }
`,Ne=r.p`
  font-size: 14px;
  line-height: 18px;
  font-weight: 400;
  color: ${({theme:e})=>e==="dark"?d.colors.transp:c.colors.transp};
  text-overflow: ellipsis;
  line-height: 18px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;

  @media ${o.tablet} {
    line-height: 20px;
  }
`,Xe=r.ul`
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
`,Y=()=>{const e=f(ue),i=f(F);return t.jsxs(Ee,{children:[t.jsxs(Me,{children:[t.jsx(Ve,{theme:i,children:"Follow Us"}),t.jsxs(Xe,{children:[t.jsx(P,{theme:i,children:t.jsx(L,{theme:i,href:"https://www.facebook.com/goITclub/",target:"_blank",rel:"noopener noreferrer",children:t.jsx(O,{theme:i,children:t.jsx("use",{href:R+"#icon-facebook"})})})}),t.jsx(P,{theme:i,children:t.jsx(L,{theme:i,href:"https://www.instagram.com/goitclub/",target:"_blank",rel:"noopener noreferrer",children:t.jsx(O,{theme:i,children:t.jsx("use",{href:R+"#icon-instagram"})})})}),t.jsx(P,{theme:i,children:t.jsx(L,{theme:i,href:"https://www.youtube.com/c/GoIT",target:"_blank",rel:"noopener noreferrer",children:t.jsx(O,{theme:i,children:t.jsx("use",{href:R+"#icon-youtube"})})})})]})]}),t.jsx(Be,{theme:i,children:"Popular drinks"}),t.jsx(Ge,{children:e.map((x,w)=>t.jsxs(Ue,{children:[t.jsx(ne,{to:`/drink/${x._id}`,children:t.jsx(He,{src:x.drinkThumb,alt:x.drink})}),t.jsxs(_e,{children:[t.jsx(We,{theme:i,children:x.drink}),t.jsx(Ne,{theme:i,children:x.description})]})]},x._id||w))})]})};Y.propTypes={popularDrinks:n.arrayOf(n.shape({_id:n.oneOfType([n.string,n.number]),drinkThumb:n.string,drink:n.string,description:n.string}))};const et=()=>{const e=B(),[i,x]=k.useState(!1);k.useEffect(()=>{e(ae()),window.scrollTo({top:0})},[e]);const w=se(),b=f(F),{register:y,control:m,handleSubmit:l,setValue:j,formState:{errors:v}}=le(),[a,T]=k.useState([0,1]),$=u=>{const C=a.map((s,p)=>({title:u[`Ingredients${p}`].value,measure:u[`IngNumber${p}`]})),g=new FormData;C.forEach((s,p)=>{g.append(`ingredients[${p}][title]`,s.title),g.append(`ingredients[${p}][measure]`,s.measure)}),u.photo&&g.append("drinkThumb",u.photo),g.append("category",u.category.label),g.append("glass",u.glass.label),g.append("description",u.recipeDesc),g.append("instructions",u.aboutRecipe),g.append("alcoholic",u.alcohol),g.append("drink",u.itemTitle),x(!0),e(de(g)).unwrap().then(()=>{x(!1),w("/my")}).catch(s=>console.log(s))};return t.jsxs(t.Fragment,{children:[t.jsx(ge,{}),t.jsx(ce,{title:"Add drink"}),t.jsx(X,{register:y,control:m,setValue:j,handleSubmit:l,errors:v,onSubmit:$}),t.jsx(K,{ingNumber:a,setIngNumber:T,register:y,control:m,handleSubmit:l,errors:v,onSubmit:$}),t.jsx(Q,{register:y,control:m,handleSubmit:l,errors:v,onSubmit:$}),t.jsx(me,{type:"button",onClick:l($),theme:b,disabled:i,children:"Add"}),t.jsx(Y,{})]})};export{et as default};
