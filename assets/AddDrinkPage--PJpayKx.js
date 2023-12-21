import{s as t,d as n,P as o,a as A,b as T,l as H,e as j,m as N,g as W,j as e,C,h as X,k as J,F as K,L as Q,n as Y,o as Z,p as ee}from"./index-1JjgqQIc.js";import{B as te}from"./ButtonUpToTop-a6hTtOqn.js";import{P as ie}from"./PageTitle-9CtcAglW.js";import{S as D}from"./react-select.esm-v8rTAsWW.js";import{d as ne,c as oe,b as re,e as se}from"./selectors-3DDbZiSm.js";t.h1`
  font-size: 32px;
  font-weight: 600;
  line-height: 38px;
  margin-bottom: 40px;
`;const M=t.p`
  font-size: 28px;
  font-weight: 600;
  line-height: 32px;
`,ae=t.textarea`
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
`,le=t.button`
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
`,q={control:i=>({...i,width:200,height:50,color:"var(--white)",border:"none",textAlign:"right",background:"transparent"}),option:(i,r)=>({...i,padding:"4px 14px",fontSize:"12px",backgroundColor:r.isSelected?"rgba(255, 255, 255, 0.10)":"",color:r.isSelected?"var(--white)":"var(--transp-white)",":hover":{background:"rgba(255, 255, 255, 0.10)",color:"#F3F3F3"}}),menu:i=>({...i,background:"#161F37",border:"none ",borderRadius:"12px ",maxHeight:"300px",width:"151px",right:"0"}),menuList:i=>({...i,"::-webkit-scrollbar":{width:"2px",height:"0px"},"::-webkit-scrollbar-track":{background:"#161F37"},"::-webkit-scrollbar-thumb":{background:"#5d6b90"}})},de={...q,control:i=>({...i,width:200,height:50,color:"var(--white)",border:"border: 1px solid rgba(243, 243, 243, 0.30)",borderRadius:"200px",textAlign:"left",background:"transparent","@media only screen and (min-width:768px)":{...q["@media only screen and (min-width: 768px)"],width:332}}),menu:i=>({...i,background:"#161F37",border:"none ",borderRadius:"12px ",maxHeight:"300px",width:"100%",left:"0"})},S=t.p`
  position: absolute;
  top: 40px;
  color: #ff7c31;
  font-size: 13px;
  width: 100%;
`,pe=t(S)`
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
`,F=t.label`
  position: relative;
`,ce=t.input`
  display: none;
`,xe=t.label`
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
`,he=t.div`
  @media ${n.tablet} {
    display: flex;
    gap: 32px;
    padding-bottom: 80px;
    max-width: 833px;
  }
`,z=t.label`
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
`,ue=t.label`
  display: flex;
  gap: 30px;
  position: relative;
  @media ${n.tablet} {
    padding-top: 20px;
    max-height: 32px;
  }
`,P=t.label`
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
`,O=t.input`
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
`,ge=t.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,me=t.p`
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
`,be=t.p`
  color: var(--white);
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
`,E=({register:i,control:r,handleSubmit:c,setValue:b,errors:p,onSubmit:k})=>{const u=A(),f=T(ne),y=T(oe),w=T(H),[l,I]=j.useState(""),[d,g]=j.useState(!1),[m,s]=j.useState(),x={...q,dropdownIndicator:a=>({...a,transition:"transform 0.2s ease",transform:d?"rotate(180deg)":null})},v={...q,dropdownIndicator:a=>({...a,transition:"transform 0.2s ease",transform:m?"rotate(180deg)":null})},$=f==null?void 0:f.map(a=>({label:a,value:a})),V=y==null?void 0:y.map(a=>({label:a,value:a}));j.useEffect(()=>{u(N())},[u]),j.useEffect(()=>{u(W())},[u]);const _=a=>{const h=a.target.files[0];if(b("photo",h),h){const R=new FileReader;R.onloadend=()=>{I(R.result)},R.readAsDataURL(h)}};return e.jsx("form",{onSubmit:c(k),encType:"multipart/form-data",children:e.jsxs(he,{children:[e.jsxs(xe,{style:{backgroundImage:`url(${l})`},children:[e.jsx(ce,{type:"file",accept:".png, .jpeg, .jpg",...i("photo"),onChange:_}),!l&&e.jsxs(ge,{children:[e.jsx(me,{children:"+"}),e.jsx(be,{children:"Add image"})]})]}),e.jsxs("div",{children:[e.jsxs(F,{children:[e.jsx(O,{type:"text",...i("itemTitle",{required:!0}),placeholder:"Enter item title"}),p.itemTitle&&e.jsx(S,{children:"Item title is required."})]}),e.jsxs(F,{children:[e.jsx(O,{type:"text",...i("aboutRecipe",{required:!0}),placeholder:"Enter about recipe"}),p.aboutRecipe&&e.jsx(S,{children:"About recipe field is required."})]}),e.jsxs(P,{children:[e.jsx("p",{children:"Category"}),e.jsx(C,{name:"category",control:r,render:({field:a})=>e.jsx(D,{...a,styles:x,options:V,isSearchable:!1,onChange:h=>{a.onChange(h)},theme:h=>({...h,colors:{neutral50:"#fff"}}),menuIsOpen:d,onMenuOpen:()=>g(!0),onMenuClose:()=>g(!1)}),rules:{required:"Category field is required"}}),p.category&&e.jsx(S,{children:p.category.message})]}),e.jsxs(P,{children:[e.jsx("p",{children:"Glass"}),e.jsx(C,{name:"glass",control:r,render:({field:a})=>e.jsx(D,{styles:v,...a,options:$,onChange:h=>{a.onChange(h)},theme:h=>({...h,colors:{neutral50:"#fff"}}),menuIsOpen:m,onMenuOpen:()=>s(!0),onMenuClose:()=>s(!1)}),rules:{required:"Glass field is required"}}),p.glass&&e.jsx(S,{children:p.glass.message})]}),e.jsxs(ue,{children:[e.jsxs(z,{children:[e.jsx("input",{type:"radio",value:"Non alcoholic",name:"alcohol",...i("alcohol",{required:!0}),defaultChecked:!0}),e.jsx("p",{children:"Non alcoholic"})]}),w&&e.jsxs(z,{children:[e.jsx("input",{type:"radio",name:"alcohol",value:"Alcoholic",...i("alcohol",{required:!0})}),e.jsx("p",{children:"Alcoholic"})]})]})]})]})})};E.propTypes={register:o.func.isRequired,control:o.object.isRequired,handleSubmit:o.func.isRequired,errors:o.object.isRequired,setValue:o.func,onSubmit:o.func.isRequired};const L=t.button`
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
`,fe=t.div`
  padding-bottom: 80px;
  @media ${n.tablet} {
    max-width: 704px;
  }
  @media ${n.desktop} {
    max-width: 540px;
  }
`,ye=t.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 104px;
  border-radius: 200px;
  border: 1px solid var(--transp-white);
  height: 38px;
  margin-bottom: 34px;
`,we=t.button`
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
`,je=t.input`
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
`,ve=t.label`
  display: flex;
  margin-bottom: 18px;
  gap: 8px;
`,ke=t.div`
  position: relative;
`,Se=t.div`
  display: flex;
  justify-content: space-between;
`,B=({ingNumber:i,setIngNumber:r,register:c,control:b,handleSubmit:p,errors:k,onSubmit:u})=>{const f=A(),y=T(re),[w,l]=j.useState(3);j.useEffect(()=>{f(X())},[f]);const I=y==null?void 0:y.map(({title:s})=>({label:s,value:s})),d=s=>{s.preventDefault(),r([...i,w]),l(w+1)},g=s=>{s.preventDefault();const x=i.slice(0,i.length-1);r(x)},m=(s,x)=>{if(s.preventDefault(),i.length<=2)return;const v=i.filter($=>$!==x);r(v)};return e.jsx("form",{onSubmit:p(u),encType:"multipart/form-data",children:e.jsxs(fe,{children:[e.jsxs(Se,{children:[e.jsx(M,{children:"Ingredients"}),e.jsxs(ye,{children:[e.jsx(L,{onClick:s=>{g(s)},disabled:i.length<=2,children:"-"}),e.jsx("p",{children:i.length}),e.jsx(L,{onClick:s=>d(s),children:"+"})]})]}),i.map((s,x)=>e.jsxs(ve,{children:[e.jsxs(F,{children:[e.jsx(C,{name:`Ingredients${x}`,control:b,render:({field:v})=>e.jsx(D,{styles:de,...v,options:I,theme:$=>({...$,colors:{neutral50:"rgba(243, 243, 243, 0.8)"}})}),rules:{required:"!"}}),k[`Ingredients${x}`]&&e.jsx(pe,{children:k[`Ingredients${x}`].message})]}),e.jsx(ke,{children:e.jsx(je,{type:"text",placeholder:"1 cl",minLength:2,...c(`IngNumber${x}`)})}),e.jsx(we,{onClick:v=>m(v,s),children:e.jsx("svg",{width:"18",height:"18",children:e.jsx("use",{href:`${J}#icon-X`,style:{stroke:"white"}})})})]},i[x]))]})})};B.propTypes={ingNumber:o.array.isRequired,setIngNumber:o.func.isRequired,register:o.func.isRequired,control:o.object.isRequired,handleSubmit:o.func.isRequired,errors:o.object.isRequired,onSubmit:o.func.isRequired};const G=({register:i,handleSubmit:r,errors:c,onSubmit:b})=>e.jsx("form",{onSubmit:r(b),encType:"multipart/form-data",children:e.jsxs(F,{children:[e.jsx(M,{children:"Recipe Preparation"}),e.jsx(ae,{type:"text",...i("recipeDesc",{required:!0}),placeholder:"Enter the recipe",minLength:7}),c.recipeDesc&&e.jsx(S,{children:"This field is required and must contain minimum 7 symbols"})]})});G.propTypes={register:o.func.isRequired,control:o.object.isRequired,handleSubmit:o.func.isRequired,errors:o.object.isRequired,onSubmit:o.func.isRequired};const Ie=t.div`
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
`,$e=t.div`
  margin-bottom: 40px;
`,Te=t.p`
  color: var(--white);
  font-size: 18px;
  line-height: 24px;
  margin-bottom: 20px;
`,qe=t.p`
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
`,Fe=t.div`
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
`,Re=t.div`
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
`,Ce=t.div`
  width: 232px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  

  @media ${n.tablet} {
  }
  @media ${n.desktop} {
    
  }
`,De=t.img`

  width: 90px;
  height: 90px;
  border-radius: 12px;

  @media ${n.tablet} {
  }
`,Ae=t.p`
  width: 232px;
  margin: 0;
  @media ${n.tablet} {
    color: var(--white);

    font-size: 16px;

    line-height: 22px;
  }
  @media ${n.desktop} {
  }
`,ze=t.p`
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
`,U=()=>{const i=T(se);return e.jsxs(Ie,{children:[e.jsxs($e,{children:[e.jsx(Te,{children:"Follow Us"}),e.jsx(K,{})]}),e.jsx(qe,{children:"Popular drinks"}),e.jsx(Fe,{children:i.map((r,c)=>e.jsxs(Re,{children:[e.jsx(Q,{to:`/drink/${r._id}`,children:e.jsx(De,{src:r.drinkThumb,alt:r.drink})}),e.jsxs(Ce,{children:[e.jsx(Ae,{children:r.drink}),e.jsx(ze,{children:r.description})]})]},r._id||c))})]})};U.propTypes={popularDrinks:o.arrayOf(o.shape({_id:o.oneOfType([o.string,o.number]),drinkThumb:o.string,drink:o.string,description:o.string}))};const Be=()=>{const i=A(),r=Y(),{register:c,control:b,handleSubmit:p,setValue:k,formState:{errors:u}}=Z(),[f,y]=j.useState([0,1]),w=l=>{const I=f.map((g,m)=>({title:l[`Ingredients${m}`].value,measure:l[`IngNumber${m}`]})),d=new FormData;I.forEach((g,m)=>{d.append(`ingredients[${m}][title]`,g.title),d.append(`ingredients[${m}][measure]`,g.measure)}),l.photo&&d.append("drinkThumb",l.photo),console.log(l),d.append("category",l.category.label),d.append("glass",l.glass.label),d.append("description",l.recipeDesc),d.append("instructions",l.aboutRecipe),d.append("alcoholic",l.alcohol),d.append("drink",l.itemTitle),i(ee(d)).unwrap().then(()=>r("/my")).catch(g=>console.log(g))};return e.jsxs(e.Fragment,{children:[e.jsx(ie,{title:"Add drink"}),e.jsxs("div",{children:[e.jsx(E,{register:c,control:b,setValue:k,handleSubmit:p,errors:u,onSubmit:w}),e.jsx(B,{ingNumber:f,setIngNumber:y,register:c,control:b,handleSubmit:p,errors:u,onSubmit:w}),e.jsx(G,{register:c,control:b,handleSubmit:p,errors:u,onSubmit:w}),e.jsx(le,{type:"button",onClick:p(w),children:"Add"})]}),e.jsx(U,{}),e.jsx(te,{})]})};export{Be as default};
