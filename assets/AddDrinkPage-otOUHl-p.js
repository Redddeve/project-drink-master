import{s as i,d as n,P as o,a as A,b as T,l as H,e as j,m as N,g as W,j as e,C,h as X,k as J,F as K,L as Q,n as Y,o as Z,p as ee,q as te}from"./index-fPRPe_fI.js";import{B as ie}from"./ButtonUpToTop-K0Rp9Gkt.js";import{P as ne}from"./PageTitle-qT73tSi5.js";import{S as D}from"./react-select.esm-EK85DqAF.js";import{d as oe,c as re,b as se,e as ae}from"./selectors-3DDbZiSm.js";i.h1`
  font-size: 32px;
  font-weight: 600;
  line-height: 38px;
  margin-bottom: 40px;
`;const E=i.p`
  font-size: 28px;
  font-weight: 600;
  line-height: 32px;
`,le=i.textarea`
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
  resize: none;
  @media ${n.tablet} {
    width: 480px;
  }
`,de=i.button`
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
  @media ${n.tablet} {
    display: block;
  }

  &:hover {
    box-shadow: rgba(233, 233, 233, 0.3) 0px 0px 28px,
      rgba(233, 233, 233, 0.32) 0px 6px 23px;
  }
`,q={control:t=>({...t,width:200,height:50,color:"var(--white)",border:"none",textAlign:"right",background:"transparent"}),option:(t,r)=>({...t,padding:"4px 14px",fontSize:"12px",backgroundColor:r.isSelected?"rgba(255, 255, 255, 0.10)":"",color:r.isSelected?"var(--white)":"var(--transp-white)",":hover":{background:"rgba(255, 255, 255, 0.10)",color:"#F3F3F3"}}),menu:t=>({...t,background:"#161F37",border:"none ",borderRadius:"12px ",maxHeight:"300px",width:"151px",right:"0"}),menuList:t=>({...t,"::-webkit-scrollbar":{width:"2px",height:"0px"},"::-webkit-scrollbar-track":{background:"#161F37"},"::-webkit-scrollbar-thumb":{background:"#5d6b90"}})},pe={...q,control:t=>({...t,width:200,height:50,color:"var(--white)",border:"border: 1px solid rgba(243, 243, 243, 0.30)",borderRadius:"200px",textAlign:"left",background:"transparent","@media only screen and (min-width:768px)":{...q["@media only screen and (min-width: 768px)"],width:332}}),menu:t=>({...t,background:"#161F37",border:"none ",borderRadius:"12px ",maxHeight:"300px",width:"100%",left:"0"})},S=i.p`
  position: absolute;
  top: 40px;
  color: #ff7c31;
  font-size: 13px;
  width: 100%;
`,ce=i(S)`
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
`,F=i.label`
  position: relative;
`,xe=i.input`
  display: none;
`,he=i.label`
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
  @media ${n.tablet} {
    min-width: 320px;
    margin-bottom: 0;
  }
  @media ${n.desktop} {
    min-width: 400px;
  }
`,ue=i.div`
  @media ${n.tablet} {
    display: flex;
    gap: 32px;
    padding-bottom: 80px;
    max-width: 833px;
  }
`,z=i.label`
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
      left: 2px;
      border: 2.9px solid black;
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
      border: 2px solid var(--transp-white);
      width: 17px;
      height: 17px;
      opacity: 1;
      position: absolute;
      z-index: 2;
      top: 0;
      left: 0;
    }
  }
`,ge=i.label`
  display: flex;
  gap: 30px;
  position: relative;
  @media ${n.tablet} {
    padding-top: 20px;
    max-height: 32px;
  }
`,P=i.label`
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
  @media ${n.tablet} {
    padding-bottom: 18px;
    width: 352px;
  }
`,O=i.input`
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
  @media ${n.tablet} {
    padding-bottom: 18px;
    width: 352px;
  }
`,me=i.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,be=i.p`
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
`,fe=i.p`
  color: var(--white);
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
`,M=({register:t,control:r,handleSubmit:c,setValue:b,errors:p,onSubmit:k})=>{const u=A(),f=T(oe),y=T(re),w=T(H),[l,I]=j.useState(""),[d,g]=j.useState(!1),[m,s]=j.useState(),x={...q,dropdownIndicator:a=>({...a,transition:"transform 0.2s ease",transform:d?"rotate(180deg)":null})},v={...q,dropdownIndicator:a=>({...a,transition:"transform 0.2s ease",transform:m?"rotate(180deg)":null})},$=f==null?void 0:f.map(a=>({label:a,value:a})),V=y==null?void 0:y.map(a=>({label:a,value:a}));j.useEffect(()=>{u(N())},[u]),j.useEffect(()=>{u(W())},[u]);const _=a=>{const h=a.target.files[0];if(b("photo",h),h){const R=new FileReader;R.onloadend=()=>{I(R.result)},R.readAsDataURL(h)}};return e.jsx("form",{onSubmit:c(k),encType:"multipart/form-data",children:e.jsxs(ue,{children:[e.jsxs(he,{style:{backgroundImage:`url(${l})`},children:[e.jsx(xe,{type:"file",accept:".png, .jpeg, .jpg",...t("photo"),onChange:_}),!l&&e.jsxs(me,{children:[e.jsx(be,{children:"+"}),e.jsx(fe,{children:"Add image"})]})]}),e.jsxs("div",{children:[e.jsxs(F,{children:[e.jsx(O,{type:"text",...t("itemTitle",{required:!0}),placeholder:"Enter item title"}),p.itemTitle&&e.jsx(S,{children:"Item title is required."})]}),e.jsxs(F,{children:[e.jsx(O,{type:"text",...t("aboutRecipe",{required:!0}),placeholder:"Enter about recipe"}),p.aboutRecipe&&e.jsx(S,{children:"About recipe field is required."})]}),e.jsxs(P,{children:[e.jsx("p",{children:"Category"}),e.jsx(C,{name:"category",control:r,render:({field:a})=>e.jsx(D,{...a,styles:x,options:V,isSearchable:!1,onChange:h=>{a.onChange(h)},theme:h=>({...h,colors:{neutral50:"#fff"}}),menuIsOpen:d,onMenuOpen:()=>g(!0),onMenuClose:()=>g(!1)}),rules:{required:"Category field is required"}}),p.category&&e.jsx(S,{children:p.category.message})]}),e.jsxs(P,{children:[e.jsx("p",{children:"Glass"}),e.jsx(C,{name:"glass",control:r,render:({field:a})=>e.jsx(D,{styles:v,...a,options:$,onChange:h=>{a.onChange(h)},theme:h=>({...h,colors:{neutral50:"#fff"}}),menuIsOpen:m,onMenuOpen:()=>s(!0),onMenuClose:()=>s(!1)}),rules:{required:"Glass field is required"}}),p.glass&&e.jsx(S,{children:p.glass.message})]}),e.jsxs(ge,{children:[e.jsxs(z,{children:[e.jsx("input",{type:"radio",value:"Non alcoholic",name:"alcohol",...t("alcohol",{required:!0}),defaultChecked:!0}),e.jsx("p",{children:"Non alcoholic"})]}),w&&e.jsxs(z,{children:[e.jsx("input",{type:"radio",name:"alcohol",value:"Alcoholic",...t("alcohol",{required:!0})}),e.jsx("p",{children:"Alcoholic"})]})]})]})]})})};M.propTypes={register:o.func.isRequired,control:o.object.isRequired,handleSubmit:o.func.isRequired,errors:o.object.isRequired,setValue:o.func,onSubmit:o.func.isRequired};const L=i.button`
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
`,ye=i.div`
  padding-bottom: 80px;
  @media ${n.tablet} {
    max-width: 704px;
  }
  @media ${n.desktop} {
    max-width: 540px;
  }
`,we=i.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 104px;
  border-radius: 200px;
  border: 1px solid var(--transp-white);
  height: 38px;
  margin-bottom: 34px;
`,je=i.button`
  background: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
  *:hover > svg {
    stroke: aqua;
  }
  @media ${n.tablet} {
    margin-left: 188px;
  }
  @media ${n.desktop} {
    margin-left: 20px;
  }
`,ve=i.input`
  width: 101px;
  height: 50px;
  border-radius: 200px;
  border: 1px solid var(--transp-white);
  background: transparent;
  color: var(--white);
  padding: 0 60px 0 24px;
  position: relative;

  @media ${n.tablet} {
    width: 150px;
  }
`,ke=i.label`
  display: flex;
  margin-bottom: 18px;
  gap: 8px;
`,Se=i.div`
  position: relative;
`,Ie=i.div`
  display: flex;
  justify-content: space-between;
`,B=({ingNumber:t,setIngNumber:r,register:c,control:b,handleSubmit:p,errors:k,onSubmit:u})=>{const f=A(),y=T(se),[w,l]=j.useState(3);j.useEffect(()=>{f(X())},[f]);const I=y==null?void 0:y.map(({title:s})=>({label:s,value:s})),d=s=>{s.preventDefault(),r([...t,w]),l(w+1)},g=s=>{s.preventDefault();const x=t.slice(0,t.length-1);r(x)},m=(s,x)=>{if(s.preventDefault(),t.length<=2)return;const v=t.filter($=>$!==x);r(v)};return e.jsx("form",{onSubmit:p(u),encType:"multipart/form-data",children:e.jsxs(ye,{children:[e.jsxs(Ie,{children:[e.jsx(E,{children:"Ingredients"}),e.jsxs(we,{children:[e.jsx(L,{onClick:s=>{g(s)},disabled:t.length<=2,children:"-"}),e.jsx("p",{children:t.length}),e.jsx(L,{onClick:s=>d(s),children:"+"})]})]}),t.map((s,x)=>e.jsxs(ke,{children:[e.jsxs(F,{children:[e.jsx(C,{name:`Ingredients${x}`,control:b,render:({field:v})=>e.jsx(D,{styles:pe,...v,options:I,theme:$=>({...$,colors:{neutral50:"rgba(243, 243, 243, 0.8)"}})}),rules:{required:"!"}}),k[`Ingredients${x}`]&&e.jsx(ce,{children:k[`Ingredients${x}`].message})]}),e.jsx(Se,{children:e.jsx(ve,{type:"text",placeholder:"1 cl",minLength:2,...c(`IngNumber${x}`)})}),e.jsx(je,{onClick:v=>m(v,s),children:e.jsx("svg",{width:"18",height:"18",children:e.jsx("use",{href:`${J}#icon-X`,style:{stroke:"white"}})})})]},t[x]))]})})};B.propTypes={ingNumber:o.array.isRequired,setIngNumber:o.func.isRequired,register:o.func.isRequired,control:o.object.isRequired,handleSubmit:o.func.isRequired,errors:o.object.isRequired,onSubmit:o.func.isRequired};const G=({register:t,handleSubmit:r,errors:c,onSubmit:b})=>e.jsx("form",{onSubmit:r(b),encType:"multipart/form-data",children:e.jsxs(F,{children:[e.jsx(E,{children:"Recipe Preparation"}),e.jsx(le,{type:"text",...t("recipeDesc",{required:!0}),placeholder:"Enter the recipe",minLength:7}),c.recipeDesc&&e.jsx(S,{children:"This field is required and must contain minimum 7 symbols"})]})});G.propTypes={register:o.func.isRequired,control:o.object.isRequired,handleSubmit:o.func.isRequired,errors:o.object.isRequired,onSubmit:o.func.isRequired};const $e=i.div`
  margin-top: 80px;

  @media ${n.tablet} {
    /* margin: 100px auto 0; */
    width: 261px;
  }

  @media ${n.desktop} {
    position: absolute;
    top: 40%;
    right: 15%;
  }
`,Te=i.div`
  margin-bottom: 40px;
`,qe=i.p`
  color: var(--white);
  font-size: 18px;
  line-height: 24px;
  margin-bottom: 20px;
`,Fe=i.p`
  margin-bottom: 28px;
  color: black;
  font-size: 18px;

  line-height: 24px; /* 133.333% */
  color: var(--white);
  border: none;
  border-radius: 6px;
  width: fit-content;
  padding: 4px;

  @media ${n.tablet} {
    margin-bottom: 40px;
    font-size: 24px;
    line-height: 32px;
  }
  @media ${n.desktop} {
  }
`,Re=i.div`
  @media ${n.tablet} {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 704px;
  }

  @media ${n.desktop} {
    flex-direction: column;
    width: 340px;
  }
`,Ce=i.div`
  margin-bottom: 24px;
  display: flex;
  gap: 14px;
  

  @media ${n.tablet} {
  }

  @media ${n.desktop} {
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
`,De=i.div`
  width: 232px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  

  @media ${n.tablet} {
  }
  @media ${n.desktop} {
    
  }
`,Ae=i.img`

  width: 90px;
  height: 90px;
  border-radius: 12px;

  @media ${n.tablet} {
  }
`,ze=i.p`
  width: 232px;
  margin: 0;
  @media ${n.tablet} {
    color: var(--white);

    font-size: 16px;

    line-height: 22px;
  }
  @media ${n.desktop} {
  }
`,Pe=i.p`
  color: rgba(243, 243, 243, 0.5);
  text-overflow: ellipsis;
  line-height: 18px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;

  @media ${n.tablet} {
    line-height: 20px;
  }
`,U=()=>{const t=T(ae);return e.jsxs($e,{children:[e.jsxs(Te,{children:[e.jsx(qe,{children:"Follow Us"}),e.jsx(K,{})]}),e.jsx(Fe,{children:"Popular drinks"}),e.jsx(Re,{children:t.map((r,c)=>e.jsxs(Ce,{children:[e.jsx(Q,{to:`/drink/${r._id}`,children:e.jsx(Ae,{src:r.drinkThumb,alt:r.drink})}),e.jsxs(De,{children:[e.jsx(ze,{children:r.drink}),e.jsx(Pe,{children:r.description})]})]},r._id||c))})]})};U.propTypes={popularDrinks:o.arrayOf(o.shape({_id:o.oneOfType([o.string,o.number]),drinkThumb:o.string,drink:o.string,description:o.string}))};const Ge=()=>{const t=A();j.useEffect(()=>{t(Y())},[t]);const r=Z(),{register:c,control:b,handleSubmit:p,setValue:k,formState:{errors:u}}=ee(),[f,y]=j.useState([0,1]),w=l=>{const I=f.map((g,m)=>({title:l[`Ingredients${m}`].value,measure:l[`IngNumber${m}`]})),d=new FormData;I.forEach((g,m)=>{d.append(`ingredients[${m}][title]`,g.title),d.append(`ingredients[${m}][measure]`,g.measure)}),l.photo&&d.append("drinkThumb",l.photo),console.log(l),d.append("category",l.category.label),d.append("glass",l.glass.label),d.append("description",l.recipeDesc),d.append("instructions",l.aboutRecipe),d.append("alcoholic",l.alcohol),d.append("drink",l.itemTitle),t(te(d)).unwrap().then(()=>r("/my")).catch(g=>console.log(g))};return e.jsxs(e.Fragment,{children:[e.jsx(ne,{title:"Add drink"}),e.jsxs("div",{children:[e.jsx(M,{register:c,control:b,setValue:k,handleSubmit:p,errors:u,onSubmit:w}),e.jsx(B,{ingNumber:f,setIngNumber:y,register:c,control:b,handleSubmit:p,errors:u,onSubmit:w}),e.jsx(G,{register:c,control:b,handleSubmit:p,errors:u,onSubmit:w}),e.jsx(de,{type:"button",onClick:p(w),children:"Add"})]}),e.jsx(U,{}),e.jsx(ie,{})]})};export{Ge as default};
