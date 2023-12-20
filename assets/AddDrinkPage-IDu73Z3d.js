import{s as t,d as o,P as n,a as A,b as q,l as Y,e as m,m as M,g as G,j as e,C as F,h as B,k as Z,F as ee,L as te,n as ie,o as ne,p as oe,q as re}from"./index-CJO0Qxxs.js";import{B as se}from"./ButtonUpToTop-ODOoSHqf.js";import{P as ae}from"./PageTitle-LCPlhtKT.js";import{S as D}from"./react-select.esm-n6Y28yhf.js";import{d as le,c as de,b as pe,e as ce}from"./selectors-3DDbZiSm.js";t.h1`
  font-size: 32px;
  font-weight: 600;
  line-height: 38px;
  margin-bottom: 40px;
`;const U=t.p`
  font-size: 28px;
  font-weight: 600;
  line-height: 32px;
`,xe=t.textarea`
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
  @media ${o.tablet} {
    width: 480px;
  }
`,he=t.button`
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
  @media ${o.tablet} {
    display: block;
  }

  &:hover {
    box-shadow: rgba(233, 233, 233, 0.3) 0px 0px 28px,
      rgba(233, 233, 233, 0.32) 0px 6px 23px;
  }
`,T={control:i=>({...i,width:200,height:50,color:"var(--white)",border:"none",textAlign:"right",background:"transparent"}),option:(i,s)=>({...i,padding:"3px 10px",fontSize:"12px",backgroundColor:s.isSelected?"rgba(255, 255, 255, 0.10)":"",color:s.isSelected?"var(--white)":"var(--transp-white)",":hover":{background:"rgba(255, 255, 255, 0.10)",color:"#F3F3F3"}}),menu:i=>({...i,background:"#161F37",border:"none ",borderRadius:"12px ",maxHeight:"300px",width:"131px",right:"0"})},ue={...T,control:i=>({...i,width:200,height:50,color:"var(--white)",border:"border: 1px solid rgba(243, 243, 243, 0.30)",borderRadius:"200px",textAlign:"left",background:"transparent","@media only screen and (min-width:768px)":{...T["@media only screen and (min-width: 768px)"],width:332}}),menu:i=>({...i,background:"#161F37",border:"none ",borderRadius:"12px ",maxHeight:"300px",width:"100%",left:"0"})},$=t.p`
  position: absolute;
  top: 40px;
  color: #ff7c31;
  font-size: 13px;
  width: 100%;
`,ge=t($)`
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
`,R=t.label`
  position: relative;
`,me=t.input`
  display: none;
`,be=t.label`
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
  @media ${o.tablet} {
    min-width: 320px;
    margin-bottom: 0;
  }
  @media ${o.desktop} {
    min-width: 400px;
  }
`,fe=t.div`
  @media ${o.tablet} {
    display: flex;
    gap: 32px;
    padding-bottom: 80px;
    max-width: 833px;
  }
`,P=t.label`
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
`,ye=t.label`
  display: flex;
  gap: 30px;
  position: relative;
  @media ${o.tablet} {
    padding-top: 20px;
    max-height: 32px;
  }
`,O=t.label`
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
  @media ${o.tablet} {
    padding-bottom: 18px;
    width: 352px;
  }
`,L=t.input`
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
  @media ${o.tablet} {
    padding-bottom: 18px;
    width: 352px;
  }
`,je=t.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,we=t.p`
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
`,ve=t.p`
  color: var(--white);
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
`,V=({category:i,setCategory:s,glass:x,setGlass:b,register:h,control:j,handleSubmit:w,setValue:v,errors:u,onSubmit:I})=>{const f=A(),k=q(le),S=q(de),y=q(Y),[d,a]=m.useState(""),[r,p]=m.useState(!1),[g,z]=m.useState(),W={...T,dropdownIndicator:l=>({...l,transition:"transform 0.2s ease",transform:r?"rotate(180deg)":null})},X={...T,dropdownIndicator:l=>({...l,transition:"transform 0.2s ease",transform:g?"rotate(180deg)":null})},J=k==null?void 0:k.map(l=>({label:l,value:l})),K=S==null?void 0:S.map(l=>({label:l,value:l}));m.useEffect(()=>{f(M())},[f]),m.useEffect(()=>{f(G())},[f]);const Q=l=>{const c=l.target.files[0];if(v("photo",c),c){const C=new FileReader;C.onloadend=()=>{a(C.result)},C.readAsDataURL(c)}};return e.jsx("form",{onSubmit:w(I),encType:"multipart/form-data",children:e.jsxs(fe,{children:[e.jsxs(be,{style:{backgroundImage:`url(${d})`},children:[e.jsx(me,{type:"file",accept:".png, .jpeg, .jpg",...h("photo"),onChange:Q}),!d&&e.jsxs(je,{children:[e.jsx(we,{children:"+"}),e.jsx(ve,{children:"Add image"})]})]}),e.jsxs("div",{children:[e.jsxs(R,{children:[e.jsx(L,{type:"text",...h("itemTitle",{required:!0}),placeholder:"Enter item title"}),u.itemTitle&&e.jsx($,{children:"Item title is required."})]}),e.jsxs(R,{children:[e.jsx(L,{type:"text",...h("aboutRecipe",{required:!0}),placeholder:"Enter about recipe"}),u.aboutRecipe&&e.jsx($,{children:"About recipe field is required."})]}),e.jsxs(O,{children:[e.jsx("p",{children:"Category"}),e.jsx(F,{name:"category",control:j,render:({field:l})=>e.jsx(D,{...l,styles:W,options:K,value:{label:i,value:i},onChange:c=>{l.onChange(c),s(c.value)},theme:c=>({...c,colors:{neutral50:"#fff"}}),menuIsOpen:r,onMenuOpen:()=>p(!0),onMenuClose:()=>p(!1)}),rules:{required:"Category field is required"}}),u.category&&e.jsx($,{children:u.category.message})]}),e.jsxs(O,{children:[e.jsx("p",{children:"Glass"}),e.jsx(F,{name:"glass",control:j,render:({field:l})=>e.jsx(D,{styles:X,...l,options:J,value:{label:x,value:x},onChange:c=>{l.onChange(c),b(c.value)},theme:c=>({...c,colors:{neutral50:"#fff"}}),menuIsOpen:g,onMenuOpen:()=>z(!0),onMenuClose:()=>z(!1)}),rules:{required:"Glass field is required"}}),u.glass&&e.jsx($,{children:u.glass.message})]}),e.jsxs(ye,{children:[e.jsxs(P,{children:[e.jsx("input",{type:"radio",value:"Non alcoholic",name:"alcohol",...h("alcohol",{required:!0}),defaultChecked:!0}),e.jsx("p",{children:"Non alcoholic"})]}),y&&e.jsxs(P,{children:[e.jsx("input",{type:"radio",name:"alcohol",value:"Alcoholic",...h("alcohol",{required:!0})}),e.jsx("p",{children:"Alcoholic"})]})]})]})]})})};V.propTypes={category:n.string.isRequired,glass:n.string.isRequired,setCategory:n.func.isRequired,setGlass:n.func.isRequired,register:n.func.isRequired,control:n.object.isRequired,handleSubmit:n.func.isRequired,errors:n.object.isRequired,setValue:n.func,onSubmit:n.func.isRequired};const E=t.button`
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
`,ke=t.div`
  padding-bottom: 80px;
  @media ${o.tablet} {
    max-width: 704px;
  }
  @media ${o.desktop} {
    max-width: 540px;
  }
`,Se=t.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 104px;
  border-radius: 200px;
  border: 1px solid var(--transp-white);
  height: 38px;
  margin-bottom: 34px;
`,Ie=t.button`
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
`,$e=t.input`
  width: 101px;
  height: 50px;
  border-radius: 200px;
  border: 1px solid var(--transp-white);
  background: transparent;
  color: var(--white);
  padding: 0 60px 0 24px;
  position: relative;

  @media ${o.tablet} {
    width: 150px;
  }
`,qe=t.label`
  display: flex;
  margin-bottom: 18px;
  gap: 8px;
`,Te=t.div`
  position: relative;
`,Re=t.div`
  display: flex;
  justify-content: space-between;
`,H=({ingNumber:i,setIngNumber:s,register:x,control:b,handleSubmit:h,errors:j,onSubmit:w})=>{const v=A(),u=q(pe),[I,f]=m.useState(4);m.useEffect(()=>{v(B())},[v]);const k=u==null?void 0:u.map(({title:a})=>({label:a,value:a})),S=a=>{a.preventDefault(),s([...i,I]),f(I+1)},y=a=>{a.preventDefault();const r=i.slice(0,i.length-1);s(r)},d=(a,r)=>{if(a.preventDefault(),i.length<=3)return;const p=i.filter(g=>g!==r);s(p)};return e.jsx("form",{onSubmit:h(w),encType:"multipart/form-data",children:e.jsxs(ke,{children:[e.jsxs(Re,{children:[e.jsx(U,{children:"Ingredients"}),e.jsxs(Se,{children:[e.jsx(E,{onClick:a=>{y(a)},disabled:i.length<=3,children:"-"}),e.jsx("p",{children:i.length}),e.jsx(E,{onClick:a=>S(a),children:"+"})]})]}),i.map((a,r)=>e.jsxs(qe,{children:[e.jsxs(R,{children:[e.jsx(F,{name:`Ingredients${r}`,control:b,render:({field:p})=>e.jsx(D,{styles:ue,...p,options:k,theme:g=>({...g,colors:{neutral50:"rgba(243, 243, 243, 0.8)"}})}),rules:{required:"!"}}),j[`Ingredients${r}`]&&e.jsx(ge,{children:j[`Ingredients${r}`].message})]}),e.jsx(Te,{children:e.jsx($e,{type:"text",placeholder:"1 cl",minLength:2,...x(`IngNumber${r}`)})}),e.jsx(Ie,{onClick:p=>d(p,a),children:e.jsx("svg",{width:"18",height:"18",children:e.jsx("use",{href:`${Z}#icon-X`,style:{stroke:"white"}})})})]},i[r]))]})})};H.propTypes={ingNumber:n.array.isRequired,setIngNumber:n.func.isRequired,register:n.func.isRequired,control:n.object.isRequired,handleSubmit:n.func.isRequired,errors:n.object.isRequired,onSubmit:n.func.isRequired};const _=({register:i,handleSubmit:s,errors:x,onSubmit:b})=>e.jsx("form",{onSubmit:s(b),encType:"multipart/form-data",children:e.jsxs(R,{children:[e.jsx(U,{children:"Recipe Preparation"}),e.jsx(xe,{type:"text",...i("recipeDesc",{required:!0}),placeholder:"Enter the recipe",minLength:7}),x.recipeDesc&&e.jsx($,{children:"This field is required and must contain minimum 7 symbols"})]})});_.propTypes={register:n.func.isRequired,control:n.object.isRequired,handleSubmit:n.func.isRequired,errors:n.object.isRequired,onSubmit:n.func.isRequired};const Ce=t.div`
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
`,Fe=t.div`
  margin-bottom: 40px;
`,De=t.p`
  color: var(--white);
  font-size: 18px;
  line-height: 24px;
  margin-bottom: 20px;
`,Ae=t.p`
  margin-bottom: 28px;
  color: black;
  font-size: 18px;

  line-height: 24px; /* 133.333% */
  color: var(--white);
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
`,ze=t.div`
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
`,Pe=t.div`
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
`,Oe=t.div`
  width: 232px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  

  @media ${o.tablet} {
  }
  @media ${o.desktop} {
    
  }
`,Le=t.img`

  width: 90px;
  height: 90px;
  border-radius: 12px;

  @media ${o.tablet} {
  }
`,Ee=t.p`
  width: 232px;
  margin: 0;
  @media ${o.tablet} {
    color: var(--white);

    font-size: 16px;

    line-height: 22px;
  }
  @media ${o.desktop} {
  }
`,Me=t.p`
  color: rgba(243, 243, 243, 0.5);
  text-overflow: ellipsis;
  line-height: 18px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;

  @media ${o.tablet} {
    line-height: 20px;
  }
`,N=()=>{const i=q(ce);return e.jsxs(Ce,{children:[e.jsxs(Fe,{children:[e.jsx(De,{children:"Follow Us"}),e.jsx(ee,{})]}),e.jsx(Ae,{children:"Popular drinks"}),e.jsx(ze,{children:i.map((s,x)=>e.jsxs(Pe,{children:[e.jsx(te,{to:`/drink/${s._id}`,children:e.jsx(Le,{src:s.drinkThumb,alt:s.drink})}),e.jsxs(Oe,{children:[e.jsx(Ee,{children:s.drink}),e.jsx(Me,{children:s.description})]})]},s._id||x))})]})};N.propTypes={popularDrinks:n.arrayOf(n.shape({_id:n.oneOfType([n.string,n.number]),drinkThumb:n.string,drink:n.string,description:n.string}))};const _e=()=>{const i=A(),s=ie(),{register:x,control:b,handleSubmit:h,setValue:j,formState:{errors:w}}=ne(),[v,u]=m.useState([0,1,2]),[I,f]=m.useState("Cocktail"),[k,S]=m.useState("Highball glass");m.useEffect(()=>{i(M()),i(G()),i(B()),i(oe())},[i]);const y=d=>{const a=v.map((p,g)=>({title:d[`Ingredients${g}`].value,measure:d[`IngNumber${g}`]})),r=new FormData;a.forEach((p,g)=>{r.append(`ingredients[${g}][title]`,p.title),r.append(`ingredients[${g}][measure]`,p.measure)}),d.photo&&r.append("drinkThumb",d.photo),r.append("category",d.category.label),r.append("glass",d.glass.label),r.append("description",d.recipeDesc),r.append("instructions",d.aboutRecipe),r.append("alcoholic",d.alcohol),r.append("drink",d.itemTitle),i(re(r)).unwrap().then(()=>s("/my")).catch(p=>console.log(p))};return e.jsxs(e.Fragment,{children:[e.jsx(ae,{title:"Add drink"}),e.jsxs("div",{children:[e.jsx(V,{setGlass:S,setCategory:f,glass:k,category:I,register:x,control:b,setValue:j,handleSubmit:h,errors:w,onSubmit:y}),e.jsx(H,{ingNumber:v,setIngNumber:u,register:x,control:b,handleSubmit:h,errors:w,onSubmit:y}),e.jsx(_,{register:x,control:b,handleSubmit:h,errors:w,onSubmit:y}),e.jsx(he,{type:"button",onClick:h(y),children:"Add"})]}),e.jsx(N,{}),e.jsx(se,{})]})};export{_e as default};
