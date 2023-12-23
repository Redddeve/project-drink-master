import{u as r,a as d,l as c,d as o,P as n,e as O,b as v,o as Q,s as R,g as j,p as Y,i as Z,j as t,C as A,k as ee,n as te,F as re,L as oe,q as ie,t as ne,v as ae,w as se}from"./index-L0e07m4l.js";import{B as le}from"./ButtonUpToTop-TolZH_Vr.js";import{P as de}from"./PageTitle-D6_NPwqm.js";import{S as P}from"./react-select.esm-bd-pmoTj.js";import{d as ce,c as pe,b as he,e as xe}from"./selectors-KAzit_J-.js";r.h1`
  font-size: 32px;
  font-weight: 600;
  line-height: 38px;
  margin-bottom: 40px;
`;r.p`
  font-size: 28px;
  font-weight: 600;
  line-height: 32px;
`;const ue=r.textarea`
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
`,ge=r.button`
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
  @media ${o.tablet} {
    display: block;
  }

  &:hover {
    box-shadow: rgba(233, 233, 233, 0.3) 0px 0px 28px,
      rgba(233, 233, 233, 0.32) 0px 6px 23px;
  }
`,F={control:e=>({...e,width:200,height:50,color:"var(--white)",border:"none",textAlign:"right",background:"transparent"}),option:(e,s)=>({...e,padding:"4px 14px",fontSize:"12px",backgroundColor:s.isSelected?"rgba(255, 255, 255, 0.10)":"",color:s.isSelected?"var(--white)":"var(--transp-white)",":hover":{background:"rgba(255, 255, 255, 0.10)",color:"#F3F3F3"}}),menu:e=>({...e,background:"#161F37",border:"none ",borderRadius:"12px ",maxHeight:"300px",width:"151px",right:"0"}),menuList:e=>({...e,"::-webkit-scrollbar":{width:"2px",height:"0px"},"::-webkit-scrollbar-track":{background:"#161F37"},"::-webkit-scrollbar-thumb":{background:"#5d6b90"}})},me={...F,control:e=>({...e,width:200,height:50,color:"var(--white)",border:"border: 1px solid rgba(243, 243, 243, 0.30)",borderRadius:"200px",textAlign:"left",background:"transparent","@media only screen and (min-width:768px)":{...F["@media only screen and (min-width: 768px)"],width:332}}),menu:e=>({...e,background:"#161F37",border:"none ",borderRadius:"12px ",maxHeight:"300px",width:"100%",left:"0"})},C=r.p`
  position: absolute;
  top: 40px;
  color: #ff7c31;
  font-size: 13px;
  width: 100%;
`,be=r(C)`
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
`,L=r.label`
  position: relative;
`,ke=r.p`
  position: absolute;
  top: 280px;
  color: #ff7c31;
  font-size: 13px;
  width: 100%;
`,fe=r.input`
  display: none;
`,ve=r.label`
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
`,ye=r.div`
  @media ${o.tablet} {
    display: flex;
    gap: 32px;
    padding-bottom: 80px;
    max-width: 833px;
  }
`,E=r.label`
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
`,we=r.label`
  display: flex;
  gap: 30px;
  position: relative;
  @media ${o.tablet} {
    padding-top: 20px;
    max-height: 32px;
  }
`,M=r.p`
  color: ${({theme:e})=>e==="dark"?d.colors.transp:c.colors.transp};
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
`,V=r.input`
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

  &::placeholder {
    color: ${({theme:e})=>e==="dark"?d.colors.transp:c.colors.transp};
  }
  @media ${o.tablet} {
    padding-bottom: 18px;
    width: 352px;
  }
`,je=r.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,$e=r.p`
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
`,Se=r.p`
  color: var(--white);
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
`,G=r.p`
  color: ${({theme:e})=>e==="dark"?d.colors.transp:c.colors.transp};
`,_=({register:e,control:s,handleSubmit:l,setValue:m,errors:x,onSubmit:y})=>{const $=O(),a=v(ce),w=v(pe),S=v(Q),i=v(R),[u,q]=j.useState(""),[g,k]=j.useState(!1),[f,p]=j.useState(),b={...F,dropdownIndicator:h=>({...h,transition:"transform 0.2s ease",transform:g?"rotate(180deg)":null})},I={...F,dropdownIndicator:h=>({...h,transition:"transform 0.2s ease",transform:f?"rotate(180deg)":null})},D=a==null?void 0:a.map(h=>({label:h,value:h})),J=w==null?void 0:w.map(h=>({label:h,value:h}));j.useEffect(()=>{$(Y())},[$]),j.useEffect(()=>{$(Z())},[$]);const K=h=>{const T=h.target.files[0];if(m("photo",T),T){const z=new FileReader;z.onloadend=()=>{q(z.result)},z.readAsDataURL(T)}};return t.jsx("form",{onSubmit:l(y),encType:"multipart/form-data",children:t.jsxs(ye,{children:[t.jsxs(ve,{theme:i,style:{backgroundImage:`url(${u})`},children:[t.jsx(fe,{theme:i,type:"file",accept:".png, .jpeg, .jpg",...e("photo"),onChange:K}),!u&&t.jsxs(je,{theme:i,children:[t.jsx($e,{theme:i,children:"+"}),t.jsx(Se,{theme:i,children:"Add image"})]})]}),t.jsxs("div",{children:[t.jsxs(L,{theme:i,children:[t.jsx(V,{theme:i,type:"text",...e("itemTitle",{required:!0}),placeholder:"Enter item title"}),x.itemTitle&&t.jsx(C,{theme:i,children:"Item title is required."})]}),t.jsxs(L,{children:[t.jsx(V,{theme:i,type:"text",...e("aboutRecipe",{required:!0}),placeholder:"Enter about recipe"}),x.aboutRecipe&&t.jsx(C,{children:"About recipe field is required."})]}),t.jsxs(B,{theme:i,children:[t.jsx(M,{theme:i,children:"Category"}),t.jsx(A,{name:"category",control:s,render:({field:h})=>t.jsx(P,{...h,styles:b,options:J,isSearchable:!1,onChange:T=>{h.onChange(T)},theme:i,menuIsOpen:g,onMenuOpen:()=>k(!0),onMenuClose:()=>k(!1)}),rules:{required:"Category field is required"}}),x.category&&t.jsx(C,{children:x.category.message})]}),t.jsxs(B,{theme:i,children:[t.jsx(M,{theme:i,children:"Glass"}),t.jsx(A,{name:"glass",control:s,render:({field:h})=>t.jsx(P,{styles:I,...h,options:D,onChange:T=>{h.onChange(T)},theme:i,menuIsOpen:f,onMenuOpen:()=>p(!0),onMenuClose:()=>p(!1)}),rules:{required:"Glass field is required"}}),x.glass&&t.jsx(C,{children:x.glass.message})]}),t.jsxs(we,{children:[t.jsxs(E,{theme:i,children:[t.jsx("input",{type:"radio",value:"Non alcoholic",name:"alcohol",...e("alcohol",{required:!0}),defaultChecked:!0}),t.jsx(G,{theme:i,children:"Non alcoholic"})]}),S&&t.jsxs(E,{theme:i,children:[t.jsx("input",{type:"radio",name:"alcohol",value:"Alcoholic",...e("alcohol",{required:!0})}),t.jsx(G,{theme:i,children:"Alcoholic"})]})]})]})]})})};_.propTypes={register:n.func.isRequired,control:n.object.isRequired,handleSubmit:n.func.isRequired,errors:n.object.isRequired,setValue:n.func,onSubmit:n.func.isRequired};const U=r.button`
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
`,Ie=r.div`
  padding-bottom: 80px;
  @media ${o.tablet} {
    max-width: 704px;
  }
  @media ${o.desktop} {
    max-width: 540px;
  }
`,Te=r.p`
  color: ${({theme:e})=>e==="dark"?d.colors.main:c.colors.main};
`,qe=r.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 104px;
  border-radius: 200px;
  border: ${({theme:e})=>e==="dark"?d.borderColor.main:c.borderColor.main};
  height: 38px;
  margin-bottom: 34px;
`,Ce=r.button`
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
`,Fe=r.label`
  display: flex;
  margin-bottom: 18px;
  gap: 14px;
`,De=r.div`
  position: relative;
`,ze=r.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`,H=r.h3`
  font-size: 28px;
  font-weight: 600;
  line-height: 1.38em;
  margin-bottom: 40px;
  color: ${({theme:e})=>e==="dark"?d.colors.main:c.colors.main};

  @media ${o.tablet} {
    font-size: 40px;
    line-height: 1.38em;
  }
`,Ae=r.svg`
  stroke: ${({theme:e})=>e==="dark"?"var(--white)":"var(--dark)"};
`,Pe=r.label`
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
`,N=({ingNumber:e,setIngNumber:s,register:l,control:m,handleSubmit:x,errors:y,onSubmit:$})=>{const a=v(R),w=O(),S=v(he),[i,u]=j.useState(3);j.useEffect(()=>{w(ee())},[w]);const q=S==null?void 0:S.map(({title:p})=>({label:p,value:p})),g=p=>{p.preventDefault(),s([...e,i]),u(i+1)},k=p=>{p.preventDefault();const b=e.slice(0,e.length-1);s(b)},f=(p,b)=>{if(p.preventDefault(),e.length<=2)return;const I=e.filter(D=>D!==b);s(I)};return t.jsx("form",{onSubmit:x($),encType:"multipart/form-data",children:t.jsxs(Ie,{children:[t.jsxs(ze,{children:[t.jsx(H,{theme:a,children:"Ingredients"}),t.jsxs(qe,{theme:a,children:[t.jsx(U,{theme:a,onClick:p=>{k(p)},disabled:e.length<=2,children:"-"}),t.jsx(Te,{theme:a,children:e.length}),t.jsx(U,{theme:a,onClick:p=>g(p),children:"+"})]})]}),e.map((p,b)=>t.jsxs(Fe,{theme:a,children:[t.jsxs(Pe,{theme:a,children:[t.jsx(A,{name:`Ingredients${b}`,control:m,render:({field:I})=>t.jsx(P,{styles:me,...I,options:q,theme:a}),rules:{required:"!"}}),y[`Ingredients${b}`]&&t.jsx(be,{children:y[`Ingredients${b}`].message})]}),t.jsx(De,{theme:a,children:t.jsx(Re,{type:"text",placeholder:"1 cl",minLength:2,...l(`IngNumber${b}`),theme:a})}),t.jsx(Ce,{theme:a,onClick:I=>f(I,p),children:t.jsx(Ae,{theme:a,width:"18",height:"18",children:t.jsx("use",{href:`${te}#icon-X`})})})]},e[b]))]})})};N.propTypes={ingNumber:n.array.isRequired,setIngNumber:n.func.isRequired,register:n.func.isRequired,control:n.object.isRequired,handleSubmit:n.func.isRequired,errors:n.object.isRequired,onSubmit:n.func.isRequired};const W=({register:e,handleSubmit:s,errors:l,onSubmit:m})=>{const x=v(R);return t.jsx("form",{onSubmit:s(m),encType:"multipart/form-data",children:t.jsxs(L,{children:[t.jsx(H,{theme:x,children:"Recipe Preparation"}),t.jsx(ue,{theme:x,type:"text",...e("recipeDesc",{required:!0}),placeholder:"Enter the recipe",minLength:7}),l.recipeDesc&&t.jsx(ke,{children:"This field is required and must contain minimum 7 symbols"})]})})};W.propTypes={register:n.func.isRequired,control:n.object.isRequired,handleSubmit:n.func.isRequired,errors:n.object.isRequired,onSubmit:n.func.isRequired};const Le=r.div`
  margin-top: 80px;

  @media ${o.tablet} {
    /* margin: 100px auto 0; */
    width: 261px;
  }

  @media ${o.desktop} {
    position: absolute;
    top: 40%;
    right: 15%;
  }
`,Oe=r.div`
  margin-bottom: 40px;
`,Ee=r.p`
  color: ${({theme:e})=>e==="dark"?d.colors.main:c.colors.main};
  font-size: 18px;
  line-height: 24px;
  margin-bottom: 20px;
`,Me=r.p`
  margin-bottom: 28px;
  color: black;
  font-size: 18px;

  line-height: 24px; /* 133.333% */
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
`,Be=r.div`
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
`,Ve=r.div`
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
`,Ge=r.div`
  width: 232px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media ${o.tablet} {
  }
  @media ${o.desktop} {
  }
`,Ue=r.img`
  width: 90px;
  height: 90px;
  border-radius: 12px;

  @media ${o.tablet} {
  }
`,_e=r.p`
  font-size: 16px;
  line-height: 22px;
  width: 232px;
  margin: 0;
  color: ${({theme:e})=>e==="dark"?d.colors.main:c.colors.main};
  @media ${o.tablet} {
  }
  @media ${o.desktop} {
  }
`,He=r.p`
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
`,X=()=>{const e=v(xe),s=v(R);return t.jsxs(Le,{children:[t.jsxs(Oe,{children:[t.jsx(Ee,{theme:s,children:"Follow Us"}),t.jsx(re,{theme:s})]}),t.jsx(Me,{theme:s,children:"Popular drinks"}),t.jsx(Be,{children:e.map((l,m)=>t.jsxs(Ve,{children:[t.jsx(oe,{to:`/drink/${l._id}`,children:t.jsx(Ue,{src:l.drinkThumb,alt:l.drink})}),t.jsxs(Ge,{children:[t.jsx(_e,{theme:s,children:l.drink}),t.jsx(He,{theme:s,children:l.description})]})]},l._id||m))})]})};X.propTypes={popularDrinks:n.arrayOf(n.shape({_id:n.oneOfType([n.string,n.number]),drinkThumb:n.string,drink:n.string,description:n.string}))};const Qe=()=>{const e=O();j.useEffect(()=>{e(ie())},[e]);const s=ne(),l=v(R),{register:m,control:x,handleSubmit:y,setValue:$,formState:{errors:a}}=ae(),[w,S]=j.useState([0,1]),i=u=>{const q=w.map((k,f)=>({title:u[`Ingredients${f}`].value,measure:u[`IngNumber${f}`]})),g=new FormData;q.forEach((k,f)=>{g.append(`ingredients[${f}][title]`,k.title),g.append(`ingredients[${f}][measure]`,k.measure)}),u.photo&&g.append("drinkThumb",u.photo),g.append("category",u.category.label),g.append("glass",u.glass.label),g.append("description",u.recipeDesc),g.append("instructions",u.aboutRecipe),g.append("alcoholic",u.alcohol),g.append("drink",u.itemTitle),e(se(g)).unwrap().then(()=>s("/my")).catch(k=>console.log(k))};return t.jsxs(t.Fragment,{children:[t.jsx(de,{title:"Add drink"}),t.jsxs("div",{children:[t.jsx(_,{register:m,control:x,setValue:$,handleSubmit:y,errors:a,onSubmit:i,theme:l}),t.jsx(N,{ingNumber:w,setIngNumber:S,register:m,control:x,handleSubmit:y,errors:a,onSubmit:i,theme:l}),t.jsx(W,{register:m,control:x,handleSubmit:y,errors:a,onSubmit:i,theme:l}),t.jsx(ge,{type:"button",onClick:y(i),theme:l,children:"Add"})]}),t.jsx(X,{}),t.jsx(le,{theme:l})]})};export{Qe as default};
