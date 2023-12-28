import{u as r,a as d,l as c,d as i,P as o,e as V,b as f,t as te,s as R,g as k,v as re,k as ie,j as t,C as L,m as oe,p as D,q as ne,w as ae,x as se,y as le,z as de}from"./index-pQgUnWTP.js";import{P as ce}from"./PageTitle-2ooZCz3X.js";import{S as M,s as B,i as pe}from"./Dropdown.styled-foI9-wLT.js";import{g as xe,b as he,a as ue,h as ge}from"./selectors-SaLozOcY.js";import{C as be}from"./CircleBg-ErYhBCSd.js";r.h1`
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
  color: ${({theme:e})=>e==="dark"?d.colors.main:c.colors.main};
  line-height: 1;
  vertical-align: top;
  resize: none;
  @media ${i.tablet} {
    width: 480px;
  }
`,ke=r.button`
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
`,fe=r(C)`
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
`,ve=r.input`
  display: none;
`;r.form`
  max-width: 850px;
`;const ye=r.label`
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
  @media ${i.tablet} {
    min-width: 320px;
    margin-bottom: 0;
  }
  @media ${i.desktop} {
    min-width: 400px;
  }
`,je=r.div`
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
  color: ${({theme:e})=>e==="dark"?d.colors.main:c.colors.main};
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-background-clip: text;
    -webkit-text-fill-color: ${({theme:e})=>e==="dark"?d.colors.main:c.colors.main};
    -webkit-background-color: transparent !important;
    -webkit-border-bottom: ${({theme:e})=>e==="dark"?"1px solid var(--white)":"1px solid var(--dark)"};
    transition: all 0s 50000s;
    transition: background-color 5000s ease-in-out 0s;
  }
  &::placeholder {
    color: ${({theme:e})=>e==="dark"?d.colors.transp:c.colors.transp};
  }
  @media ${i.tablet} {
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
`,H=({register:e,control:a,handleSubmit:h,setValue:w,errors:b,onSubmit:v})=>{const m=V(),l=f(xe),j=f(he),y=f(te),n=f(R),[T,$]=k.useState(""),[u,q]=k.useState(!1),[g,s]=k.useState(),p={...B,dropdownIndicator:x=>({...x,transition:"transform 0.2s ease",transform:u?"rotate(180deg)":null})},S={...B,dropdownIndicator:x=>({...x,transition:"transform 0.2s ease",transform:g?"rotate(180deg)":null})},z=l==null?void 0:l.map(x=>({label:x,value:x})),Z=j==null?void 0:j.map(x=>({label:x,value:x}));k.useEffect(()=>{m(re())},[m]),k.useEffect(()=>{m(ie())},[m]);const ee=x=>{const I=x.target.files[0];if(w("photo",I),I){const F=new FileReader;F.onloadend=()=>{$(F.result)},F.readAsDataURL(I)}};return t.jsx("form",{onSubmit:h(v),encType:"multipart/form-data",children:t.jsxs(je,{children:[t.jsxs(ye,{theme:n,style:{backgroundImage:`url(${T})`},children:[t.jsx(ve,{theme:n,type:"file",accept:".png, .jpeg, .jpg",...e("photo"),onChange:ee}),!T&&t.jsxs(Se,{theme:n,children:[t.jsx(Ie,{theme:n,children:"+"}),t.jsx(Te,{theme:n,children:"Add image"})]})]}),t.jsxs("div",{children:[t.jsxs(E,{theme:n,children:[t.jsx(N,{theme:n,type:"text",...e("itemTitle",{required:!0}),placeholder:"Enter item title"}),b.itemTitle&&t.jsx(C,{theme:n,children:"Item title is required."})]}),t.jsxs(E,{children:[t.jsx(N,{theme:n,type:"text",...e("aboutRecipe",{required:!0}),placeholder:"Enter about recipe"}),b.aboutRecipe&&t.jsx(C,{children:"About recipe field is required."})]}),t.jsxs(_,{theme:n,children:[t.jsx(U,{theme:n,children:"Category"}),t.jsx(L,{name:"category",control:a,render:({field:x})=>t.jsx(M,{...x,styles:p,options:Z,isSearchable:!1,onChange:I=>{x.onChange(I)},theme:n,menuIsOpen:u,onMenuOpen:()=>q(!0),onMenuClose:()=>q(!1)}),rules:{required:"Category field is required"}}),b.category&&t.jsx(C,{children:b.category.message})]}),t.jsxs(_,{theme:n,children:[t.jsx(U,{theme:n,children:"Glass"}),t.jsx(L,{name:"glass",control:a,render:({field:x})=>t.jsx(M,{styles:S,...x,options:z,onChange:I=>{x.onChange(I)},theme:n,menuIsOpen:g,onMenuOpen:()=>s(!0),onMenuClose:()=>s(!1)}),rules:{required:"Glass field is required"}}),b.glass&&t.jsx(C,{children:b.glass.message})]}),t.jsxs($e,{children:[t.jsxs(G,{theme:n,children:[t.jsx("input",{type:"radio",value:"Non alcoholic",name:"alcohol",...e("alcohol",{required:!0}),defaultChecked:!0}),t.jsx(W,{theme:n,children:"Non alcoholic"})]}),y&&t.jsxs(G,{theme:n,children:[t.jsx("input",{type:"radio",name:"alcohol",value:"Alcoholic",...e("alcohol",{required:!0})}),t.jsx(W,{theme:n,children:"Alcoholic"})]})]})]})]})})};H.propTypes={register:o.func.isRequired,control:o.object.isRequired,handleSubmit:o.func.isRequired,errors:o.object.isRequired,setValue:o.func,onSubmit:o.func.isRequired};const X=r.button`
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
`,qe=r.div`
  padding-bottom: 80px;
  @media ${i.tablet} {
    max-width: 704px;
  }
  @media ${i.desktop} {
    max-width: 540px;
  }
`,Ce=r.p`
  color: ${({theme:e})=>e==="dark"?d.colors.main:c.colors.main};
`,Re=r.div`
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
`,De=r.button`
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
`,ze=r.input`
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
`,Fe=r.label`
  display: flex;
  margin-bottom: 18px;
  gap: 14px;
`,Pe=r.div`
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
  color: ${({theme:e})=>e==="dark"?d.colors.main:c.colors.main};

  @media ${i.tablet} {
    font-size: 40px;
    line-height: 1.38em;
  }
`,Oe=r.svg`
  stroke: ${({theme:e})=>e==="dark"?"var(--white)":"var(--dark)"};
`,Le=r.label`
  width: 200px;
  position: relative;
  height: 35px;
  display: flex;
  justify-content: space-between;
  padding-left: 3px;
  color: ${({theme:e})=>e==="dark"?d.colors.transp:c.colors.transp};
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
`,Me=r(C)`
  font-size: 11px;
  top: 51px;
  width: 120px;
  @media ${i.tablet} {
    left: 25px;
  }
`,K=({ingNumber:e,setIngNumber:a,register:h,control:w,handleSubmit:b,errors:v,onSubmit:m})=>{const l=f(R),j=V(),y=f(ue),[n,T]=k.useState(3);k.useEffect(()=>{j(oe())},[j]);const $=y==null?void 0:y.map(({title:s})=>({label:s,value:s})),u=s=>{s.preventDefault(),a([...e,n]),T(n+1)},q=s=>{s.preventDefault();const p=e.slice(0,e.length-1);a(p)},g=(s,p)=>{if(s.preventDefault(),e.length<=2)return;const S=e.filter(z=>z!==p);a(S)};return t.jsx("form",{onSubmit:b(m),encType:"multipart/form-data",children:t.jsxs(qe,{children:[t.jsxs(Ae,{children:[t.jsx(J,{theme:l,children:"Ingredients"}),t.jsxs(Re,{theme:l,children:[t.jsx(X,{theme:l,onClick:s=>{q(s)},disabled:e.length<=2,children:"-"}),t.jsx(Ce,{theme:l,children:e.length}),t.jsx(X,{theme:l,onClick:s=>u(s),children:"+"})]})]}),e.map((s,p)=>t.jsxs(Fe,{theme:l,children:[t.jsxs(Le,{theme:l,children:[t.jsx(L,{name:`Ingredients${p}`,control:w,render:({field:S})=>t.jsx(M,{styles:pe,...S,options:$,theme:l}),rules:{required:"!"}}),v[`Ingredients${p}`]&&t.jsx(fe,{children:v[`Ingredients${p}`].message})]}),t.jsxs(Pe,{children:[t.jsx(ze,{theme:l,type:"text",placeholder:"1 cl",...h(`IngNumber${p}`,{required:!0})}),v[`IngNumber${p}`]&&t.jsx(Me,{children:"measure is required."})]}),t.jsx(De,{theme:l,onClick:S=>g(S,s),children:t.jsx(Oe,{theme:l,width:"18",height:"18",children:t.jsx("use",{href:`${D}#icon-X`})})})]},e[p]))]})})};K.propTypes={ingNumber:o.array.isRequired,setIngNumber:o.func.isRequired,register:o.func.isRequired,control:o.object.isRequired,handleSubmit:o.func.isRequired,errors:o.object.isRequired,onSubmit:o.func.isRequired};const Q=({register:e,handleSubmit:a,errors:h,onSubmit:w})=>{const b=f(R);return t.jsx("form",{onSubmit:a(w),encType:"multipart/form-data",children:t.jsxs(E,{children:[t.jsx(J,{theme:b,children:"Recipe Preparation"}),t.jsx(me,{theme:b,type:"text",...e("recipeDesc",{required:!0}),placeholder:"Enter the recipe",minLength:7}),h.recipeDesc&&t.jsx(we,{children:"This field is required and must contain minimum 7 symbols"})]})})};Q.propTypes={register:o.func.isRequired,control:o.object.isRequired,handleSubmit:o.func.isRequired,errors:o.object.isRequired,onSubmit:o.func.isRequired};const Ee=r.div`
  margin-top: 80px;

  @media ${i.tablet} {
    width: 261px;
  }

  @media ${i.desktop} {
    position: absolute;
    top: 208px;
    right: 15%;
  }
`,Ve=r.div`
  margin-bottom: 40px;
`,Be=r.p`
  color: ${({theme:e})=>e==="dark"?d.colors.main:c.colors.main};
  font-size: 18px;
  line-height: 24px;
  margin-bottom: 20px;
`,Ge=r.p`
  margin-bottom: 28px;
  color: black;
  font-size: 18px;

  line-height: 1.33;
  color: ${({theme:e})=>e==="dark"?d.colors.main:c.colors.main};
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
`,Ue=r.div`
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
`,_e=r.div`
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
`,Ne=r.div`
  width: 232px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media ${i.tablet} {
  }
  @media ${i.desktop} {
  }
`,We=r.img`
  width: 90px;
  height: 90px;
  border-radius: 12px;

  @media ${i.tablet} {
  }
`,Xe=r.p`
  font-size: 16px;
  line-height: 22px;
  width: 232px;
  margin: 0;
  color: ${({theme:e})=>e==="dark"?d.colors.main:c.colors.main};
  @media ${i.tablet} {
  }
  @media ${i.desktop} {
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

  @media ${i.tablet} {
    line-height: 20px;
  }
`,Je=r.ul`
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
`,Y=()=>{const e=f(ge),a=f(R);return t.jsxs(Ee,{children:[t.jsxs(Ve,{children:[t.jsx(Be,{theme:a,children:"Follow Us"}),t.jsxs(Je,{children:[t.jsx(P,{theme:a,children:t.jsx(A,{theme:a,href:"https://www.facebook.com/goITclub/",target:"_blank",rel:"noopener noreferrer",children:t.jsx(O,{theme:a,children:t.jsx("use",{href:D+"#icon-facebook"})})})}),t.jsx(P,{theme:a,children:t.jsx(A,{theme:a,href:"https://www.instagram.com/goitclub/",target:"_blank",rel:"noopener noreferrer",children:t.jsx(O,{theme:a,children:t.jsx("use",{href:D+"#icon-instagram"})})})}),t.jsx(P,{theme:a,children:t.jsx(A,{theme:a,href:"https://www.youtube.com/c/GoIT",target:"_blank",rel:"noopener noreferrer",children:t.jsx(O,{theme:a,children:t.jsx("use",{href:D+"#icon-youtube"})})})})]})]}),t.jsx(Ge,{theme:a,children:"Popular drinks"}),t.jsx(Ue,{children:e.map((h,w)=>t.jsxs(_e,{children:[t.jsx(ne,{to:`/drink/${h._id}`,children:t.jsx(We,{src:h.drinkThumb,alt:h.drink})}),t.jsxs(Ne,{children:[t.jsx(Xe,{theme:a,children:h.drink}),t.jsx(He,{theme:a,children:h.description})]})]},h._id||w))})]})};Y.propTypes={popularDrinks:o.arrayOf(o.shape({_id:o.oneOfType([o.string,o.number]),drinkThumb:o.string,drink:o.string,description:o.string}))};const tt=()=>{const e=V(),[a,h]=k.useState(!1);k.useEffect(()=>{e(ae()),window.scrollTo({top:0})},[e]);const w=se(),b=f(R),{register:v,control:m,handleSubmit:l,setValue:j,formState:{errors:y}}=le(),[n,T]=k.useState([0,1]),$=u=>{const q=n.map((s,p)=>({title:u[`Ingredients${p}`].value,measure:u[`IngNumber${p}`]})),g=new FormData;q.forEach((s,p)=>{g.append(`ingredients[${p}][title]`,s.title),g.append(`ingredients[${p}][measure]`,s.measure)}),u.photo&&g.append("drinkThumb",u.photo),g.append("category",u.category.label),g.append("glass",u.glass.label),g.append("description",u.recipeDesc),g.append("instructions",u.aboutRecipe),g.append("alcoholic",u.alcohol),g.append("drink",u.itemTitle),h(!0),e(de(g)).unwrap().then(()=>{h(!1),w("/my")}).catch(s=>console.log(s))};return t.jsxs(t.Fragment,{children:[t.jsx(be,{}),t.jsx(ce,{title:"Add drink"}),t.jsx(H,{register:v,control:m,setValue:j,handleSubmit:l,errors:y,onSubmit:$}),t.jsx(K,{ingNumber:n,setIngNumber:T,register:v,control:m,handleSubmit:l,errors:y,onSubmit:$}),t.jsx(Q,{register:v,control:m,handleSubmit:l,errors:y,onSubmit:$}),t.jsx(ke,{type:"button",onClick:l($),theme:b,disabled:a,children:"Add"}),t.jsx(Y,{})]})};export{tt as default};
