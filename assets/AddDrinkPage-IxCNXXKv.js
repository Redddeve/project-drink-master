import{s as n,d as r,u as _,a as g,f as ee,h as te,i as ie,r as d,k as ne,g as oe,b as re,j as e,C as j,e as se,l as ae}from"./index-GKUeT4jD.js";import{S as k}from"./react-select.esm-IYAOIcAi.js";import{c as le,b as de,a as pe}from"./selectors-U2SLgOji.js";import{B as ce}from"./ButtonUpToTop-gcoAj70-.js";const he=n.h1`
  font-size: 32px;
  font-weight: 600;
  line-height: 38px;
  margin-bottom: 40px;
`,xe=n.label`
  width: 335px;
  height: 320px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background: rgba(22, 31, 55, 0.5);
  margin-bottom: 40px;
  background-repeat: no-repeat;
  background-size: cover;
  &::before {
    content: '+';
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
  }
  &::after {
    content: 'Add image';
    color: var(--white);
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
  }
  @media ${r.tablet} {
    min-width: 320px;
    margin-bottom: 0;
  }
  @media ${r.desktop} {
    min-width: 400px;
  }
`,ge=n.input`
  display: none;
`,T=n.input`
  width: 335px;
  position: relative;
  height: 35px;
  background-color: transparent;
  outline: none;
  border: none;
  border-bottom: 1px solid var(--white);
  padding-bottom: 14px;
  margin-bottom: 31px;
  color: var(--white);
  @media ${r.tablet} {
    padding-bottom: 18px;
    width: 352px;
  }
`,q=n.label`
  width: 335px;
  position: relative;
  height: 35px;
  align-items: center;
  padding-bottom: 14px;
  display: flex;
  margin-bottom: 31px;
  justify-content: space-between;
  border-bottom: 1px solid var(--white);
  color: var(--transp-white);
  padding-left: 3px;
  @media ${r.tablet} {
    padding-bottom: 18px;
    width: 352px;
  }
`,z=n.label`
  color: rgba(243, 243, 243, 0.5);
  display: flex;
  cursor: pointer;
  margin-bottom: 80px;
  input[type='radio']:checked + p {
    color: var(--white);
    &::before {
      content: '';
      background-color: white;
      border: 2px solid var(--transp-white);
    }
    &::after {
      content: '';
      display: flex;
      border-radius: 50%;
      top: 2.5px;
      left: 2.5px;
      border: 3.1px solid black;
      width: 12px;
      height: 12px;
      opacity: 1;
      position: absolute;
      z-index: 3;
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
      border: 3px solid var(--transp-white);
      width: 17px;
      height: 17px;
      opacity: 1;
      position: absolute;
      z-index: 2;
      top: 0;
      left: 0;
    }
  }
`,ue=n.label`
  display: flex;
  gap: 30px;
  position: relative;
  @media ${r.tablet} {
    padding-top: 20px;
    max-height: 32px;
  }
`,R=n.p`
  font-size: 28px;
  font-weight: 600;
  line-height: 32px;
`,be=n.div`
  display: flex;
  justify-content: space-between;
`,me=n.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 104px;
  border-radius: 200px;
  border: 1px solid var(--transp-white);
  height: 38px;
  margin-bottom: 34px;
`,O=n.button`
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
  &:disabled {
    color: var(--transp-white);
  }
`,fe=n.input`
  width: 101px;
  height: 50px;
  border-radius: 200px;
  border: 1px solid var(--transp-white);
  background: transparent;
  color: var(--white);
  padding: 0 60px 0 24px;
  position: relative;

  @media ${r.tablet} {
    width: 150px;
  }
`,ye=n.label`
  display: flex;
  margin-bottom: 18px;
  gap: 8px;
`,we=n.div`
  position: relative;
`,ve=n.button`
  background: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
  *:hover > svg {
    stroke: aqua;
  }
  @media ${r.tablet} {
    margin-left: 188px;
  }
  @media ${r.desktop} {
    margin-left: 20px;
  }
`,je=n.div`
  padding-bottom: 80px;
  @media ${r.tablet} {
    max-width: 704px;
  }
  @media ${r.desktop} {
    max-width: 540px;
  }
`,ke=n.div`
  @media ${r.tablet} {
    display: flex;
    gap: 32px;
    padding-bottom: 80px;
    max-width: 833px;
  }
`,Se=n.textarea`
  width: 335px;
  min-height: 184px;
  margin-top: 40px;
  padding: 16px;
  margin-bottom: 20px;
  background: transparent;
  border-radius: 14px;
  border: 1px solid var(--transp-white);
  color: var(--white);
  line-height: 1;
  vertical-align: top;
  @media ${r.tablet} {
    width: 480px;
  }
`,Ie=n.button`
  border-radius: 42px;
  background: var(--white);
  display: inline-flex;
  padding: 14px 40px;
  align-items: flex-start;
  gap: 10px;
  color: var(--black);
  font-family: inherit;
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
  transition: all var(--tran-fast);
  @media ${r.tablet} {
    display: block;
  }

  &:hover {
    box-shadow: rgba(233, 233, 233, 0.3) 0px 0px 28px,
      rgba(233, 233, 233, 0.32) 0px 6px 23px;
  }
`,b={control:o=>({...o,width:200,height:50,color:"var(--white)",border:"none",textAlign:"right",background:"transparent"}),option:(o,x)=>({...o,padding:"3px 10px",fontSize:"12px",backgroundColor:x.isSelected?"rgba(255, 255, 255, 0.10)":"",color:x.isSelected?"var(--white)":"var(--transp-white)",":hover":{background:"rgba(255, 255, 255, 0.10)",color:"#F3F3F3"}}),menu:o=>({...o,background:"#161F37",border:"none ",borderRadius:"12px ",maxHeight:"300px",width:"131px",right:"0"})},$e={...b,control:o=>({...o,width:200,height:50,color:"var(--white)",border:"border: 1px solid rgba(243, 243, 243, 0.30)",borderRadius:"200px",textAlign:"left",background:"transparent","@media only screen and (min-width:768px)":{...b["@media only screen and (min-width: 768px)"],width:332}}),menu:o=>({...o,background:"#161F37",border:"none ",borderRadius:"12px ",maxHeight:"300px",width:"100%",left:"0"})},h=n.p`
  position: absolute;
  top: 40px;
  color: #ff7c31;
  font-size: 13px;
  width: 100%;
`,Ce=n(h)`
  top: 7px;
  left: -15px;
  font-size: 26px;
  font-weight: 700;
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
`,u=n.label`
  position: relative;
`,qe=()=>{var D,F;const o=_(),x=g(le),L=g(de),m=g(pe),S=g(ee),N=te(),{register:p,control:f,handleSubmit:E,formState:{errors:l}}=ie();console.log(S);const[M,G]=d.useState(""),[a,y]=d.useState([1,2,3]),[w,B]=d.useState("Cocktail"),[v,P]=d.useState("Highball glass"),[I,$]=d.useState(!1),[C,A]=d.useState(!1);d.useEffect(()=>{o(ne())},[o]),d.useEffect(()=>{o(oe())},[o]),d.useEffect(()=>{o(re())},[o]);const H=(D=L[0])==null?void 0:D.categories.map(t=>({label:t,value:t})),U=m==null?void 0:m.map(({title:t})=>({label:t,value:t})),V=(F=x[0])==null?void 0:F.glasses.map(t=>({label:t,value:t})),W={...b,dropdownIndicator:t=>({...t,transition:"transform 0.2s ease",transform:I?"rotate(180deg)":null})},X={...b,dropdownIndicator:t=>({...t,transition:"transform 0.2s ease",transform:C?"rotate(180deg)":null})},J=t=>{t.preventDefault(),y([...a,a.length+1])},K=t=>{t.preventDefault();const i=a.slice(0,a.length-1);y(i)},Q=(t,i)=>{if(t.preventDefault(),a.length<4)return;const s=a.filter(c=>c!==i);y(s)},Y=t=>{const i=a.map((s,c)=>({title:t[`Ingredients${c}`].value,measure:t[`IngNumber${c}`]}));o(ae({ingredients:i,glass:v,category:w,instructions:t.aboutRecipe,drink:t.itemTitle,photo:t.photo,description:t.recipeDesc,alcoholic:t.alcohol})).unwrap().then(()=>N("/my")).catch(s=>console.log(s))},Z=t=>{const i=t.target.files[0];if(i){const s=new FileReader;s.onloadend=()=>{G(s.result)},s.readAsDataURL(i)}};return e.jsxs("div",{children:[e.jsx(he,{children:"Add drink"}),e.jsxs("form",{onSubmit:E(Y),children:[e.jsxs(ke,{children:[e.jsx(xe,{style:{backgroundImage:`url(${M})`},children:e.jsx(ge,{type:"file",...p("photo"),onChange:Z})}),e.jsxs("div",{children:[e.jsxs(u,{children:[e.jsx(T,{type:"text",...p("itemTitle",{required:!0}),placeholder:"Enter item title"}),l.itemTitle&&e.jsx(h,{children:"Item title is required."})]}),e.jsxs(u,{children:[e.jsx(T,{type:"text",...p("aboutRecipe",{required:!0}),placeholder:"Enter about recipe"}),l.aboutRecipe&&e.jsx(h,{children:"About recipe field is required."})]}),e.jsxs(q,{children:[e.jsx("p",{children:"Category"}),e.jsx(j,{name:"category",control:f,render:({field:t})=>e.jsx(k,{...t,styles:W,options:H,value:{label:w,value:w},onChange:i=>{t.onChange(i),B(i.value)},theme:i=>({...i,colors:{neutral50:"#fff"}}),menuIsOpen:I,onMenuOpen:()=>$(!0),onMenuClose:()=>$(!1)}),rules:{required:"Category field is required"}}),l.category&&e.jsx(h,{children:l.category.message})]}),e.jsxs(q,{children:[e.jsx("p",{children:"Glass"}),e.jsx(j,{name:"glass",control:f,render:({field:t})=>e.jsx(k,{styles:X,...t,options:V,value:{label:v,value:v},onChange:i=>{t.onChange(i),P(i.value)},theme:i=>({...i,colors:{neutral50:"#fff"}}),menuIsOpen:C,onMenuOpen:()=>A(!0),onMenuClose:()=>A(!1)}),rules:{required:"Glass field is required"}}),l.glass&&e.jsx(h,{children:l.glass.message})]}),e.jsxs(ue,{children:[e.jsxs(z,{children:[e.jsx("input",{type:"radio",value:"Non alcoholic",name:"alcohol",...p("alcohol",{required:!0}),defaultChecked:!0}),e.jsx("p",{children:"Non alcoholic"})]}),e.jsxs(z,{children:[e.jsx("input",{type:"radio",name:"alcohol",value:"Alcoholic",...p("alcohol",{required:!0}),disabled:!S}),e.jsx("p",{children:"Alcoholic"})]})]})]})]}),e.jsxs(je,{children:[e.jsxs(be,{children:[e.jsx(R,{children:"Ingredients"}),e.jsxs(me,{children:[e.jsx(O,{onClick:t=>{K(t)},disabled:a.length<=3,children:"-"}),e.jsx("p",{children:a.length}),e.jsx(O,{onClick:t=>J(t),children:"+"})]})]}),a.map((t,i)=>e.jsxs(ye,{children:[e.jsxs(u,{children:[e.jsx(j,{name:`Ingredients${i}`,control:f,render:({field:s})=>e.jsx(k,{styles:$e,...s,options:U,theme:c=>({...c,colors:{neutral50:"rgba(243, 243, 243, 0.8)"}})}),rules:{required:"!"}}),l[`Ingredients${i}`]&&e.jsx(Ce,{children:l[`Ingredients${i}`].message})]}),e.jsx(we,{children:e.jsx(fe,{type:"text",placeholder:"1 cl",minLength:2,...p(`IngNumber${i}`)})}),e.jsx(ve,{onClick:s=>Q(s,i),children:e.jsx("svg",{width:"18",height:"18",children:e.jsx("use",{href:`${se}#icon-X`,style:{stroke:"white"}})})})]},t))]}),e.jsxs(u,{children:[e.jsx(R,{children:"Recipe Preparation"}),e.jsx(Se,{type:"text",...p("recipeDesc",{required:!0}),placeholder:"Enter the recipe",minLength:7}),l.recipeDesc&&e.jsx(h,{children:"This field is required and must contain minimum 7 symbols"})]}),e.jsx(Ie,{type:"submit",children:"Add"})]}),e.jsx(ce,{})]})};export{qe as default};
