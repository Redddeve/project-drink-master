import{u as r,a as d,l as p,d as i,P as o,e as V,b as k,t as te,s as R,g as f,v as re,k as ie,j as t,C as L,m as oe,p as D,q as ne,w as ae,x as se,y as le,z as de}from"./index-wsK3-jJn.js";import{P as pe}from"./PageTitle-uUufNSsD.js";import{S as M,s as B,i as ce}from"./Dropdown.styled-XHvA3vxX.js";import{g as xe,b as he,a as ue,h as ge}from"./selectors-CfjYkjme.js";import{C as be}from"./CircleBg-UGVgMk0w.js";r.h1`
  font-size: 32px;
  font-weight: 600;
  line-height: 38px;
  margin-bottom: 40px;
`;r.p`
  font-size: 28px;
  font-weight: 600;
  line-height: 32px;
`;const me=r.textarea`
  width: 335px;
  min-height: 184px;
  padding: 16px;
  margin-bottom: 20px;
  background: transparent;
  border-radius: 14px;
  border: ${({theme:e})=>e==="dark"?"1px solid var(--transp-white)":"1px solid var(--transp-dark)"};
  color: ${({theme:e})=>e==="dark"?d.colors.main:p.colors.main};
  line-height: 1;
  vertical-align: top;
  resize: none;
  @media ${i.tablet} {
    width: 480px;
  }
`,fe=r.button`
  border-radius: 42px;
  background-color: ${({theme:e})=>e==="dark"?"var(--white)":"var(--black)"};
  display: inline-flex;
  padding: 14px 40px;
  align-items: flex-start;
  gap: 10px;
  color: ${({theme:e})=>e==="dark"?p.colors.main:d.colors.main};
  font-family: inherit;
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
  transition: all var(--tran-fast);
  border: none;
  cursor: pointer;
  @media ${i.tablet} {
    display: block;
  }

  &:hover {
    box-shadow: rgba(233, 233, 233, 0.3) 0px 0px 28px,
      rgba(233, 233, 233, 0.32) 0px 6px 23px;
  }
`,C=r.p`
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
`,E=r.label`
  position: relative;
`,we=r.p`
  position: absolute;
  top: 280px;
  color: #ff7c31;
  font-size: 13px;
  width: 100%;
`,ve=r.div`
  border: 3px solid lightblue;
  border-top: 3px blue solid;
  border-radius: 50%;
  height: 20px;
  width: 20px;
  animation: spin 2s linear infinite;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`,ye=r.input`
  display: none;
`;r.form`
  max-width: 850px;
`;const je=r.label`
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
  background-color: ${({theme:e})=>e==="dark"?d.background.darkBg:p.background.lightBg};
  margin-bottom: 40px;
  background-repeat: no-repeat;
  background-size: cover;
  @media ${i.tablet} {
    min-width: 320px;
    margin-bottom: 0;
  }
  @media ${i.desktop} {
    min-width: 400px;
  }
`,$e=r.div`
  @media ${i.tablet} {
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
    color: ${({theme:e})=>e==="dark"?d.colors.main:p.colors.main};
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
`,Se=r.label`
  display: flex;
  gap: 30px;
  align-items: center;
  position: relative;

  @media ${i.tablet} {
    padding-top: 80px;
    max-height: 32px;
  }
  @media ${i.desktop} {
    padding-top: 50px;
  }
`,U=r.p`
  color: ${({theme:e})=>e==="dark"?d.colors.transp:p.colors.transp};
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
  color: ${({theme:e})=>e==="dark"?d.colors.transp:p.colors.transp};
  padding-left: 3px;
  @media ${i.tablet} {
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
`,N=r.input`
  width: 335px;
  position: relative;
  height: 35px;
  background-color: transparent;
  outline: none;
  border: none;
  border-bottom: ${({theme:e})=>e==="dark"?"1px solid var(--white)":"1px solid var(--dark)"};
  padding-bottom: 14px;
  margin-bottom: 31px;
  color: ${({theme:e})=>e==="dark"?d.colors.main:p.colors.main};
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-background-clip: text;
    -webkit-text-fill-color: ${({theme:e})=>e==="dark"?d.colors.main:p.colors.main};
    -webkit-background-color: transparent !important;
    -webkit-border-bottom: ${({theme:e})=>e==="dark"?"1px solid var(--white)":"1px solid var(--dark)"};
    transition: all 0s 50000s;
    transition: background-color 5000s ease-in-out 0s;
  }
  &::placeholder {
    color: ${({theme:e})=>e==="dark"?d.colors.transp:p.colors.transp};
  }
  @media ${i.tablet} {
    padding-bottom: 18px;
    width: 352px;
  }
`,Ie=r.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,Te=r.p`
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
`,qe=r.p`
  color: var(--white);
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
`,W=r.p`
  color: ${({theme:e})=>e==="dark"?d.colors.transp:p.colors.transp};
`,H=({register:e,control:n,handleSubmit:h,setValue:w,errors:b,onSubmit:v})=>{const m=V(),l=k(xe),j=k(he),y=k(te),a=k(R),[T,$]=f.useState(""),[u,q]=f.useState(!1),[g,s]=f.useState(),c={...B,dropdownIndicator:x=>({...x,transition:"transform 0.2s ease",transform:u?"rotate(180deg)":null})},S={...B,dropdownIndicator:x=>({...x,transition:"transform 0.2s ease",transform:g?"rotate(180deg)":null})},z=l==null?void 0:l.map(x=>({label:x,value:x})),Z=j==null?void 0:j.map(x=>({label:x,value:x}));f.useEffect(()=>{m(re())},[m]),f.useEffect(()=>{m(ie())},[m]);const ee=x=>{const I=x.target.files[0];if(w("photo",I),I){const F=new FileReader;F.onloadend=()=>{$(F.result)},F.readAsDataURL(I)}};return t.jsx("form",{onSubmit:h(v),encType:"multipart/form-data",children:t.jsxs($e,{children:[t.jsxs(je,{theme:a,style:{backgroundImage:`url(${T})`},children:[t.jsx(ye,{theme:a,type:"file",accept:".png, .jpeg, .jpg",...e("photo"),onChange:ee}),!T&&t.jsxs(Ie,{theme:a,children:[t.jsx(Te,{theme:a,children:"+"}),t.jsx(qe,{theme:a,children:"Add image"})]})]}),t.jsxs("div",{children:[t.jsxs(E,{theme:a,children:[t.jsx(N,{theme:a,type:"text",...e("itemTitle",{required:!0}),placeholder:"Enter item title"}),b.itemTitle&&t.jsx(C,{theme:a,children:"Item title is required."})]}),t.jsxs(E,{children:[t.jsx(N,{theme:a,type:"text",...e("aboutRecipe",{required:!0}),placeholder:"Enter about recipe"}),b.aboutRecipe&&t.jsx(C,{children:"About recipe field is required."})]}),t.jsxs(_,{theme:a,children:[t.jsx(U,{theme:a,children:"Category"}),t.jsx(L,{name:"category",control:n,render:({field:x})=>t.jsx(M,{...x,styles:c,options:Z,isSearchable:!1,onChange:I=>{x.onChange(I)},theme:a,menuIsOpen:u,onMenuOpen:()=>q(!0),onMenuClose:()=>q(!1)}),rules:{required:"Category field is required"}}),b.category&&t.jsx(C,{children:b.category.message})]}),t.jsxs(_,{theme:a,children:[t.jsx(U,{theme:a,children:"Glass"}),t.jsx(L,{name:"glass",control:n,render:({field:x})=>t.jsx(M,{styles:S,...x,options:z,onChange:I=>{x.onChange(I)},theme:a,menuIsOpen:g,onMenuOpen:()=>s(!0),onMenuClose:()=>s(!1)}),rules:{required:"Glass field is required"}}),b.glass&&t.jsx(C,{children:b.glass.message})]}),t.jsxs(Se,{children:[t.jsxs(G,{theme:a,children:[t.jsx("input",{type:"radio",value:"Non alcoholic",name:"alcohol",...e("alcohol",{required:!0}),defaultChecked:!0}),t.jsx(W,{theme:a,children:"Non alcoholic"})]}),y&&t.jsxs(G,{theme:a,children:[t.jsx("input",{type:"radio",name:"alcohol",value:"Alcoholic",...e("alcohol",{required:!0})}),t.jsx(W,{theme:a,children:"Alcoholic"})]})]})]})]})})};H.propTypes={register:o.func.isRequired,control:o.object.isRequired,handleSubmit:o.func.isRequired,errors:o.object.isRequired,setValue:o.func,onSubmit:o.func.isRequired};const X=r.button`
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
  color: ${({theme:e})=>e==="dark"?d.colors.main:p.colors.main};
  &:disabled {
    color: ${({theme:e})=>e==="dark"?"var(--transp-white)":"var(--transp-dark)"};
  }
`,Ce=r.div`
  padding-bottom: 80px;
  @media ${i.tablet} {
    max-width: 704px;
  }
  @media ${i.desktop} {
    max-width: 540px;
  }
`,Re=r.p`
  color: ${({theme:e})=>e==="dark"?d.colors.main:p.colors.main};
`,De=r.div`
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 104px;
  border-radius: 200px;
  border: ${({theme:e})=>e==="dark"?d.borderColor.main:p.borderColor.main};
  height: 38px;
  margin-bottom: 34px;
`,ze=r.button`
  position: relative;
  z-index: 1;
  background: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
  *:hover > svg {
    stroke: aqua;
  }
  @media ${i.tablet} {
    margin-left: 188px;
  }
  @media ${i.desktop} {
    margin-left: 20px;
  }
`,Fe=r.input`
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
    -webkit-text-fill-color: var(--white);
    -webkit-background-color: transparent !important;
    -webkit-border: 1px solid rgba(243, 243, 243, 0.2);
    transition: all 0s 50000s;
    transition: background-color 5000s ease-in-out 0s;
  }
  @media ${i.tablet} {
    width: 150px;
  }
`,Pe=r.label`
  display: flex;
  margin-bottom: 18px;
  gap: 14px;
`,Ae=r.div`
  position: relative;
`,Oe=r.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`,J=r.h3`
  font-size: 28px;
  font-weight: 600;
  line-height: 1.38em;
  margin-bottom: 40px;
  color: ${({theme:e})=>e==="dark"?d.colors.main:p.colors.main};

  @media ${i.tablet} {
    font-size: 40px;
    line-height: 1.38em;
  }
`,Le=r.svg`
  stroke: ${({theme:e})=>e==="dark"?"var(--white)":"var(--dark)"};
`,Me=r.label`
  width: 200px;
  position: relative;
  height: 35px;
  display: flex;
  justify-content: space-between;
  padding-left: 3px;
  color: ${({theme:e})=>e==="dark"?d.colors.transp:p.colors.transp};
  @media ${i.tablet} {
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
`,Ee=r(C)`
  font-size: 11px;
  top: 51px;
  width: 120px;
  @media ${i.tablet} {
    left: 25px;
  }
`,K=({ingNumber:e,setIngNumber:n,register:h,control:w,handleSubmit:b,errors:v,onSubmit:m})=>{const l=k(R),j=V(),y=k(ue),[a,T]=f.useState(3);f.useEffect(()=>{j(oe())},[j]);const $=y==null?void 0:y.map(({title:s})=>({label:s,value:s})),u=s=>{s.preventDefault(),n([...e,a]),T(a+1)},q=s=>{s.preventDefault();const c=e.slice(0,e.length-1);n(c)},g=(s,c)=>{if(s.preventDefault(),e.length<=2)return;const S=e.filter(z=>z!==c);n(S)};return t.jsx("form",{onSubmit:b(m),encType:"multipart/form-data",children:t.jsxs(Ce,{children:[t.jsxs(Oe,{children:[t.jsx(J,{theme:l,children:"Ingredients"}),t.jsxs(De,{theme:l,children:[t.jsx(X,{theme:l,onClick:s=>{q(s)},disabled:e.length<=2,children:"-"}),t.jsx(Re,{theme:l,children:e.length}),t.jsx(X,{theme:l,onClick:s=>u(s),children:"+"})]})]}),e.map((s,c)=>t.jsxs(Pe,{theme:l,children:[t.jsxs(Me,{theme:l,children:[t.jsx(L,{name:`Ingredients${c}`,control:w,render:({field:S})=>t.jsx(M,{styles:ce,...S,options:$,theme:l}),rules:{required:"!"}}),v[`Ingredients${c}`]&&t.jsx(ke,{children:v[`Ingredients${c}`].message})]}),t.jsxs(Ae,{children:[t.jsx(Fe,{theme:l,type:"text",placeholder:"1 cl",...h(`IngNumber${c}`,{required:!0})}),v[`IngNumber${c}`]&&t.jsx(Ee,{children:"measure is required."})]}),t.jsx(ze,{theme:l,onClick:S=>g(S,s),children:t.jsx(Le,{theme:l,width:"18",height:"18",children:t.jsx("use",{href:`${D}#icon-X`})})})]},e[c]))]})})};K.propTypes={ingNumber:o.array.isRequired,setIngNumber:o.func.isRequired,register:o.func.isRequired,control:o.object.isRequired,handleSubmit:o.func.isRequired,errors:o.object.isRequired,onSubmit:o.func.isRequired};const Q=({register:e,handleSubmit:n,errors:h,onSubmit:w})=>{const b=k(R);return t.jsx("form",{onSubmit:n(w),encType:"multipart/form-data",children:t.jsxs(E,{children:[t.jsx(J,{theme:b,children:"Recipe Preparation"}),t.jsx(me,{theme:b,type:"text",...e("recipeDesc",{required:!0}),placeholder:"Enter the recipe",minLength:7}),h.recipeDesc&&t.jsx(we,{children:"This field is required and must contain minimum 7 symbols"})]})})};Q.propTypes={register:o.func.isRequired,control:o.object.isRequired,handleSubmit:o.func.isRequired,errors:o.object.isRequired,onSubmit:o.func.isRequired};const Ve=r.div`
  margin-top: 80px;

  @media ${i.tablet} {
    width: 261px;
  }

  @media ${i.desktop} {
    position: absolute;
    top: 208px;
    right: 15%;
  }
`,Be=r.div`
  margin-bottom: 40px;
`,Ge=r.p`
  color: ${({theme:e})=>e==="dark"?d.colors.main:p.colors.main};
  font-size: 18px;
  line-height: 24px;
  margin-bottom: 20px;
`,Ue=r.p`
  margin-bottom: 28px;
  color: black;
  font-size: 18px;

  line-height: 1.33;
  color: ${({theme:e})=>e==="dark"?d.colors.main:p.colors.main};
  border: none;
  border-radius: 6px;
  width: fit-content;
  padding: 4px;

  @media ${i.tablet} {
    margin-bottom: 40px;
    font-size: 24px;
    line-height: 32px;
  }
  @media ${i.desktop} {
  }
`,_e=r.div`
  @media ${i.tablet} {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 704px;
  }

  @media ${i.desktop} {
    flex-direction: column;
    width: 340px;
  }
`,Ne=r.div`
  margin-bottom: 24px;
  display: flex;
  gap: 14px;

  @media ${i.tablet} {
  }

  @media ${i.desktop} {
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
`,We=r.div`
  width: 232px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media ${i.tablet} {
  }
  @media ${i.desktop} {
  }
`,Xe=r.img`
  width: 90px;
  height: 90px;
  border-radius: 12px;

  @media ${i.tablet} {
  }
`,He=r.p`
  font-size: 16px;
  line-height: 22px;
  width: 232px;
  margin: 0;
  color: ${({theme:e})=>e==="dark"?d.colors.main:p.colors.main};
  @media ${i.tablet} {
  }
  @media ${i.desktop} {
  }
`,Je=r.p`
  font-size: 14px;
  line-height: 18px;
  font-weight: 400;
  color: ${({theme:e})=>e==="dark"?d.colors.transp:p.colors.transp};
  text-overflow: ellipsis;
  line-height: 18px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;

  @media ${i.tablet} {
    line-height: 20px;
  }
`,Ke=r.ul`
  display: flex;
  gap: 14px;

  @media ${i.tablet} {
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

  @media ${i.tablet} {
    width: 44px;
    height: 44px;
  }
`,A=r.a``,O=r.svg`
  width: 22px;
  height: 22px;
  fill: ${({theme:e})=>e==="dark"?"var(--transp-white)":"rgba(22, 31, 55, 0.8)"};
  transition: fill(--tran-fast);
  @media ${i.tablet} {
    width: 28px;
    height: 28px;
  }
`,Y=()=>{const e=k(ge),n=k(R);return t.jsxs(Ve,{children:[t.jsxs(Be,{children:[t.jsx(Ge,{theme:n,children:"Follow Us"}),t.jsxs(Ke,{children:[t.jsx(P,{theme:n,children:t.jsx(A,{theme:n,href:"https://www.facebook.com/goITclub/",target:"_blank",rel:"noopener noreferrer",children:t.jsx(O,{theme:n,children:t.jsx("use",{href:D+"#icon-facebook"})})})}),t.jsx(P,{theme:n,children:t.jsx(A,{theme:n,href:"https://www.instagram.com/goitclub/",target:"_blank",rel:"noopener noreferrer",children:t.jsx(O,{theme:n,children:t.jsx("use",{href:D+"#icon-instagram"})})})}),t.jsx(P,{theme:n,children:t.jsx(A,{theme:n,href:"https://www.youtube.com/c/GoIT",target:"_blank",rel:"noopener noreferrer",children:t.jsx(O,{theme:n,children:t.jsx("use",{href:D+"#icon-youtube"})})})})]})]}),t.jsx(Ue,{theme:n,children:"Popular drinks"}),t.jsx(_e,{children:e.map((h,w)=>t.jsxs(Ne,{children:[t.jsx(ne,{to:`/drink/${h._id}`,children:t.jsx(Xe,{src:h.drinkThumb,alt:h.drink})}),t.jsxs(We,{children:[t.jsx(He,{theme:n,children:h.drink}),t.jsx(Je,{theme:n,children:h.description})]})]},h._id||w))})]})};Y.propTypes={popularDrinks:o.arrayOf(o.shape({_id:o.oneOfType([o.string,o.number]),drinkThumb:o.string,drink:o.string,description:o.string}))};const rt=()=>{const e=V(),[n,h]=f.useState(!1);f.useEffect(()=>{e(ae()),window.scrollTo({top:0})},[e]);const w=se(),b=k(R),{register:v,control:m,handleSubmit:l,setValue:j,formState:{errors:y}}=le(),[a,T]=f.useState([0,1]),$=u=>{const q=a.map((s,c)=>({title:u[`Ingredients${c}`].value,measure:u[`IngNumber${c}`]})),g=new FormData;q.forEach((s,c)=>{g.append(`ingredients[${c}][title]`,s.title),g.append(`ingredients[${c}][measure]`,s.measure)}),u.photo&&g.append("drinkThumb",u.photo),g.append("category",u.category.label),g.append("glass",u.glass.label),g.append("description",u.recipeDesc),g.append("instructions",u.aboutRecipe),g.append("alcoholic",u.alcohol),g.append("drink",u.itemTitle),h(!0),e(de(g)).unwrap().then(()=>{h(!1),w("/my")}).catch(s=>console.log(s))};return t.jsxs(t.Fragment,{children:[t.jsx(be,{}),t.jsx(pe,{title:"Add drink"}),t.jsx(H,{register:v,control:m,setValue:j,handleSubmit:l,errors:y,onSubmit:$}),t.jsx(K,{ingNumber:a,setIngNumber:T,register:v,control:m,handleSubmit:l,errors:y,onSubmit:$}),t.jsx(Q,{register:v,control:m,handleSubmit:l,errors:y,onSubmit:$}),t.jsx(fe,{type:"button",onClick:l($),theme:b,disabled:n,children:n?t.jsx(ve,{}):"Add"}),t.jsx(Y,{})]})};export{rt as default};
