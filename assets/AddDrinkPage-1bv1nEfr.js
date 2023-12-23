import{u as r,a as l,l as d,d as o,P as n,e as O,b as v,o as Q,s as R,g as j,p as Y,i as Z,j as t,C as A,k as ee,n as te,F as re,L as oe,q as ie,t as ne,v as ae,w as se}from"./index-YYS55MOt.js";import{P as le}from"./PageTitle-FG52oj3b.js";import{S as P}from"./react-select.esm-Ymmc_B1R.js";import{d as de,c as ce,b as pe,e as he}from"./selectors-KAzit_J-.js";r.h1`
  font-size: 32px;
  font-weight: 600;
  line-height: 38px;
  margin-bottom: 40px;
`;r.p`
  font-size: 28px;
  font-weight: 600;
  line-height: 32px;
`;const xe=r.textarea`
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
`,ue=r.button`
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
`,F={control:e=>({...e,width:200,height:50,color:"var(--white)",border:"none",textAlign:"right",background:"transparent"}),option:(e,s)=>({...e,padding:"4px 14px",fontSize:"12px",backgroundColor:s.isSelected?"rgba(255, 255, 255, 0.10)":"",color:s.isSelected?"var(--white)":"var(--transp-white)",":hover":{background:"rgba(255, 255, 255, 0.10)",color:"#F3F3F3"}}),menu:e=>({...e,background:"#161F37",border:"none ",borderRadius:"12px ",maxHeight:"300px",width:"151px",right:"0"}),menuList:e=>({...e,"::-webkit-scrollbar":{width:"2px",height:"0px"},"::-webkit-scrollbar-track":{background:"#161F37"},"::-webkit-scrollbar-thumb":{background:"#5d6b90"}})},ge={...F,control:e=>({...e,width:200,height:50,color:"var(--white)",border:"border: 1px solid rgba(243, 243, 243, 0.30)",borderRadius:"200px",textAlign:"left",background:"transparent","@media only screen and (min-width:768px)":{...F["@media only screen and (min-width: 768px)"],width:332}}),menu:e=>({...e,background:"#161F37",border:"none ",borderRadius:"12px ",maxHeight:"300px",width:"100%",left:"0"})},C=r.p`
  position: absolute;
  top: 40px;
  color: #ff7c31;
  font-size: 13px;
  width: 100%;
`,me=r(C)`
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
`,be=r.p`
  position: absolute;
  top: 280px;
  color: #ff7c31;
  font-size: 13px;
  width: 100%;
`,ke=r.input`
  display: none;
`,fe=r.label`
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
`,ve=r.div`
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
`,ye=r.label`
  display: flex;
  gap: 30px;
  position: relative;
  @media ${o.tablet} {
    padding-top: 20px;
    max-height: 32px;
  }
`,M=r.p`
  color: ${({theme:e})=>e==="dark"?l.colors.transp:d.colors.transp};
`,V=r.label`
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
`,B=r.input`
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
`,we=r.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,je=r.p`
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
`,$e=r.p`
  color: var(--white);
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
`,G=r.p`
  color: ${({theme:e})=>e==="dark"?l.colors.transp:d.colors.transp};
`,_=({register:e,control:s,handleSubmit:g,setValue:m,errors:h,onSubmit:y})=>{const $=O(),a=v(de),w=v(ce),S=v(Q),i=v(R),[x,q]=j.useState(""),[u,k]=j.useState(!1),[f,c]=j.useState(),b={...F,dropdownIndicator:p=>({...p,transition:"transform 0.2s ease",transform:u?"rotate(180deg)":null})},I={...F,dropdownIndicator:p=>({...p,transition:"transform 0.2s ease",transform:f?"rotate(180deg)":null})},D=a==null?void 0:a.map(p=>({label:p,value:p})),J=w==null?void 0:w.map(p=>({label:p,value:p}));j.useEffect(()=>{$(Y())},[$]),j.useEffect(()=>{$(Z())},[$]);const K=p=>{const T=p.target.files[0];if(m("photo",T),T){const z=new FileReader;z.onloadend=()=>{q(z.result)},z.readAsDataURL(T)}};return t.jsx("form",{onSubmit:g(y),encType:"multipart/form-data",children:t.jsxs(ve,{children:[t.jsxs(fe,{theme:i,style:{backgroundImage:`url(${x})`},children:[t.jsx(ke,{theme:i,type:"file",accept:".png, .jpeg, .jpg",...e("photo"),onChange:K}),!x&&t.jsxs(we,{theme:i,children:[t.jsx(je,{theme:i,children:"+"}),t.jsx($e,{theme:i,children:"Add image"})]})]}),t.jsxs("div",{children:[t.jsxs(L,{theme:i,children:[t.jsx(B,{theme:i,type:"text",...e("itemTitle",{required:!0}),placeholder:"Enter item title"}),h.itemTitle&&t.jsx(C,{theme:i,children:"Item title is required."})]}),t.jsxs(L,{children:[t.jsx(B,{theme:i,type:"text",...e("aboutRecipe",{required:!0}),placeholder:"Enter about recipe"}),h.aboutRecipe&&t.jsx(C,{children:"About recipe field is required."})]}),t.jsxs(V,{theme:i,children:[t.jsx(M,{theme:i,children:"Category"}),t.jsx(A,{name:"category",control:s,render:({field:p})=>t.jsx(P,{...p,styles:b,options:J,isSearchable:!1,onChange:T=>{p.onChange(T)},theme:i,menuIsOpen:u,onMenuOpen:()=>k(!0),onMenuClose:()=>k(!1)}),rules:{required:"Category field is required"}}),h.category&&t.jsx(C,{children:h.category.message})]}),t.jsxs(V,{theme:i,children:[t.jsx(M,{theme:i,children:"Glass"}),t.jsx(A,{name:"glass",control:s,render:({field:p})=>t.jsx(P,{styles:I,...p,options:D,onChange:T=>{p.onChange(T)},theme:i,menuIsOpen:f,onMenuOpen:()=>c(!0),onMenuClose:()=>c(!1)}),rules:{required:"Glass field is required"}}),h.glass&&t.jsx(C,{children:h.glass.message})]}),t.jsxs(ye,{children:[t.jsxs(E,{theme:i,children:[t.jsx("input",{type:"radio",value:"Non alcoholic",name:"alcohol",...e("alcohol",{required:!0}),defaultChecked:!0}),t.jsx(G,{theme:i,children:"Non alcoholic"})]}),S&&t.jsxs(E,{theme:i,children:[t.jsx("input",{type:"radio",name:"alcohol",value:"Alcoholic",...e("alcohol",{required:!0})}),t.jsx(G,{theme:i,children:"Alcoholic"})]})]})]})]})})};_.propTypes={register:n.func.isRequired,control:n.object.isRequired,handleSubmit:n.func.isRequired,errors:n.object.isRequired,setValue:n.func,onSubmit:n.func.isRequired};const U=r.button`
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
`,Se=r.div`
  padding-bottom: 80px;
  @media ${o.tablet} {
    max-width: 704px;
  }
  @media ${o.desktop} {
    max-width: 540px;
  }
`,Ie=r.p`
  color: ${({theme:e})=>e==="dark"?l.colors.main:d.colors.main};
`,Te=r.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 104px;
  border-radius: 200px;
  border: ${({theme:e})=>e==="dark"?l.borderColor.main:d.borderColor.main};
  height: 38px;
  margin-bottom: 34px;
`,qe=r.button`
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
`,Ce=r.input`
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
`,Re=r.label`
  display: flex;
  margin-bottom: 18px;
  gap: 14px;
`,Fe=r.div`
  position: relative;
`,De=r.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`,H=r.h3`
  font-size: 28px;
  font-weight: 600;
  line-height: 1.38em;
  margin-bottom: 40px;
  color: ${({theme:e})=>e==="dark"?l.colors.main:d.colors.main};

  @media ${o.tablet} {
    font-size: 40px;
    line-height: 1.38em;
  }
`,ze=r.svg`
  stroke: ${({theme:e})=>e==="dark"?"var(--white)":"var(--dark)"};
`,Ae=r.label`
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
`,N=({ingNumber:e,setIngNumber:s,register:g,control:m,handleSubmit:h,errors:y,onSubmit:$})=>{const a=v(R),w=O(),S=v(pe),[i,x]=j.useState(3);j.useEffect(()=>{w(ee())},[w]);const q=S==null?void 0:S.map(({title:c})=>({label:c,value:c})),u=c=>{c.preventDefault(),s([...e,i]),x(i+1)},k=c=>{c.preventDefault();const b=e.slice(0,e.length-1);s(b)},f=(c,b)=>{if(c.preventDefault(),e.length<=2)return;const I=e.filter(D=>D!==b);s(I)};return t.jsx("form",{onSubmit:h($),encType:"multipart/form-data",children:t.jsxs(Se,{children:[t.jsxs(De,{children:[t.jsx(H,{theme:a,children:"Ingredients"}),t.jsxs(Te,{theme:a,children:[t.jsx(U,{theme:a,onClick:c=>{k(c)},disabled:e.length<=2,children:"-"}),t.jsx(Ie,{theme:a,children:e.length}),t.jsx(U,{theme:a,onClick:c=>u(c),children:"+"})]})]}),e.map((c,b)=>t.jsxs(Re,{theme:a,children:[t.jsxs(Ae,{theme:a,children:[t.jsx(A,{name:`Ingredients${b}`,control:m,render:({field:I})=>t.jsx(P,{styles:ge,...I,options:q,theme:a}),rules:{required:"!"}}),y[`Ingredients${b}`]&&t.jsx(me,{children:y[`Ingredients${b}`].message})]}),t.jsx(Fe,{theme:a,children:t.jsx(Ce,{type:"text",placeholder:"1 cl",minLength:2,...g(`IngNumber${b}`),theme:a})}),t.jsx(qe,{theme:a,onClick:I=>f(I,c),children:t.jsx(ze,{theme:a,width:"18",height:"18",children:t.jsx("use",{href:`${te}#icon-X`})})})]},e[b]))]})})};N.propTypes={ingNumber:n.array.isRequired,setIngNumber:n.func.isRequired,register:n.func.isRequired,control:n.object.isRequired,handleSubmit:n.func.isRequired,errors:n.object.isRequired,onSubmit:n.func.isRequired};const W=({register:e,handleSubmit:s,errors:g,onSubmit:m})=>{const h=v(R);return t.jsx("form",{onSubmit:s(m),encType:"multipart/form-data",children:t.jsxs(L,{children:[t.jsx(H,{theme:h,children:"Recipe Preparation"}),t.jsx(xe,{theme:h,type:"text",...e("recipeDesc",{required:!0}),placeholder:"Enter the recipe",minLength:7}),g.recipeDesc&&t.jsx(be,{children:"This field is required and must contain minimum 7 symbols"})]})})};W.propTypes={register:n.func.isRequired,control:n.object.isRequired,handleSubmit:n.func.isRequired,errors:n.object.isRequired,onSubmit:n.func.isRequired};const Pe=r.div`
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
`,Le=r.div`
  margin-bottom: 40px;
`,Oe=r.p`
  color: ${({theme:e})=>e==="dark"?l.colors.main:d.colors.main};
  font-size: 18px;
  line-height: 24px;
  margin-bottom: 20px;
`,Ee=r.p`
  margin-bottom: 28px;
  color: black;
  font-size: 18px;

  line-height: 24px; /* 133.333% */
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
`,Me=r.div`
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
`,Be=r.div`
  width: 232px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media ${o.tablet} {
  }
  @media ${o.desktop} {
  }
`,Ge=r.img`
  width: 90px;
  height: 90px;
  border-radius: 12px;

  @media ${o.tablet} {
  }
`,Ue=r.p`
  font-size: 16px;
  line-height: 22px;
  width: 232px;
  margin: 0;
  color: ${({theme:e})=>e==="dark"?l.colors.main:d.colors.main};
  @media ${o.tablet} {
  }
  @media ${o.desktop} {
  }
`,_e=r.p`
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
`,X=()=>{const e=v(he),s=v(R);return t.jsxs(Pe,{children:[t.jsxs(Le,{children:[t.jsx(Oe,{theme:s,children:"Follow Us"}),t.jsx(re,{theme:s})]}),t.jsx(Ee,{theme:s,children:"Popular drinks"}),t.jsx(Me,{children:e.map((g,m)=>t.jsxs(Ve,{children:[t.jsx(oe,{to:`/drink/${g._id}`,children:t.jsx(Ge,{src:g.drinkThumb,alt:g.drink})}),t.jsxs(Be,{children:[t.jsx(Ue,{theme:s,children:g.drink}),t.jsx(_e,{theme:s,children:g.description})]})]},g._id||m))})]})};X.propTypes={popularDrinks:n.arrayOf(n.shape({_id:n.oneOfType([n.string,n.number]),drinkThumb:n.string,drink:n.string,description:n.string}))};const Je=()=>{const e=O();j.useEffect(()=>{e(ie())},[e]);const s=ne(),g=v(R),{register:m,control:h,handleSubmit:y,setValue:$,formState:{errors:a}}=ae(),[w,S]=j.useState([0,1]),i=x=>{const q=w.map((k,f)=>({title:x[`Ingredients${f}`].value,measure:x[`IngNumber${f}`]})),u=new FormData;q.forEach((k,f)=>{u.append(`ingredients[${f}][title]`,k.title),u.append(`ingredients[${f}][measure]`,k.measure)}),x.photo&&u.append("drinkThumb",x.photo),u.append("category",x.category.label),u.append("glass",x.glass.label),u.append("description",x.recipeDesc),u.append("instructions",x.aboutRecipe),u.append("alcoholic",x.alcohol),u.append("drink",x.itemTitle),e(se(u)).unwrap().then(()=>s("/my")).catch(k=>console.log(k))};return t.jsxs(t.Fragment,{children:[t.jsx(le,{title:"Add drink"}),t.jsxs("div",{children:[t.jsx(_,{register:m,control:h,setValue:$,handleSubmit:y,errors:a,onSubmit:i}),t.jsx(N,{ingNumber:w,setIngNumber:S,register:m,control:h,handleSubmit:y,errors:a,onSubmit:i}),t.jsx(W,{register:m,control:h,handleSubmit:y,errors:a,onSubmit:i}),t.jsx(ue,{type:"button",onClick:y(i),theme:g,children:"Add"})]}),t.jsx(X,{})]})};export{Je as default};
