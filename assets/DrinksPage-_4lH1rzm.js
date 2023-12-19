import{s as a,d as r,L as j,P as s,j as t,u as C,a as d,r as i,g as I,b as O,c as T,e as D}from"./index-GKUeT4jD.js";import{S as M}from"./react-select.esm-IYAOIcAi.js";import{s as E,a as P,b as z}from"./selectors-U2SLgOji.js";import{B as L}from"./ButtonUpToTop-gcoAj70-.js";const N=a.li`
  width: 335px;

  @media ${r.tablet} {
    width: 342px;
  }

  @media ${r.desktop} {
    width: 400px;
  }
`,B=a.img`
  width: 100%;
  height: 360px;
  border-radius: 8px;

  @media ${r.desktop} {
    height: 400px;
  }
`,F=a.div`
  width: 100%;
  margin-top: 14px;
  display: flex;
  justify-content: space-between;
`,A=a(j)`
  color: var(--transp-white);
  cursor: pointer;
`,f=({drink:e})=>t.jsxs(N,{children:[t.jsx(B,{src:e.drinkThumb,alt:e.drink}),t.jsxs(F,{children:[t.jsx("span",{children:e.drink}),t.jsx(A,{to:`../drink/${e._id}`,children:"See more"})]})]});f.propTypes={drink:s.shape({drinkThumb:s.string,drink:s.string,_id:s.string})};const H=a.h2`
  margin-bottom: 40px;
  color: var(--white);
  font-size: 32px;
  font-weight: 600;
  line-height: 1.19;

  @media ${r.tablet} {
    margin-bottom: 60px;
    font-size: 56px;
    font-weight: 600;
    line-height: 1.07;
  }

  @media ${r.desktop} {
    margin-bottom: 80px;
    font-size: 64px;
  }
`,R=a.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 40px;

  @media ${r.tablet} {
    max-width: 678px;
    flex-direction: row;
    gap: 8px;
  }
`,U=a.ul`
  display: flex;
  flex-direction: column;
  gap: 28px;
  list-style: none;

  @media ${r.tablet} {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;
    row-gap: 40px;
  }

  @media ${r.desktop} {
    row-gap: 80px;
  }
`,V=a.input`
  width: 100%;
  height: 54px;
  padding: 0 24px;
  border-radius: 200px;
  border: 1px solid rgba(243, 243, 243, 0.2);
  opacity: 0.8;
  outline: none;
  background: transparent;
  color: var(--white);

  @media ${r.tablet} {
    width: 264px;
  }
`,q=a.svg`
  position: absolute;
  width: 20px;
  height: 20px;
  top: 18px;
  left: 220px;
  stroke: white;

  @media screen and (max-width: 767px) {
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;

    white-space: nowrap;
    clip-path: inset(100%);
    clip: rect(0 0 0 0);
    overflow: hidden;
  }
`,m=a(M)`
  .Select__control {
    height: 54px;
    padding: 0 14px;
    width: 100%;
    border: none;
    box-shadow: none;
    cursor: pointer;
    color: var(--white);
    border-radius: 200px;
    background: var(--black);

    @media ${r.tablet} {
      width: 199px;
    }
  }

  .Select__placeholder {
    color: var(--white);
  }

  .Select__indicator {
    position: absolute;
    right: 24px;
    padding: 0;

    transform: ${e=>e.$menuIsOpen?"rotate(180deg)":"none"};
    display: ${e=>e.$menuIsOpen?"block":"display"};
  }

  .Select__indicator-separator {
    display: none;
  }

  .Select__option {
    background: none;
    cursor: pointer;
    color: rgba(243, 243, 243, 0.4);
    transition: var(--tran-fast);
  }

  .Select__option--is-focused {
    color: var(--white);
  }

  .Select__menu {
    height: ${e=>e.$small?"240px":"314px"};
    border-radius: 20px;
    background: var(--black);
    padding-top: 9px;
    padding-right: 7px;
    overflow-y: hidden;

    @media ${r.tablet} {
      font-size: 17px;
      line-height: 1.56;
      height: ${e=>e.$small?"295px":"405px"};
    }

    .Select__menu-list {
      &::-webkit-scrollbar {
        width: 8px;
      }

      &::-webkit-scrollbar-thumb {
        background: var(--gray);
        border-radius: 12px;
      }
    }

    .Select__value-container--has-value {
      color: var(--white);
    }

    .Select__option--is-selected {
      color: var(--orange);
      cursor: pointer;
    }
  }
`,b={singleValue:()=>({color:"var(--white)"}),valueContainer:()=>({display:"flex",paddingLeft:"10px"})},W=()=>{const e=C(),o=d(E),l=d(P),p=d(z),[c,S]=i.useState(""),[h,w]=i.useState(""),[x,y]=i.useState(""),[k,u]=i.useState(!1),[v,g]=i.useState(!1);i.useEffect(()=>{e(I()),e(O())},[e]),i.useEffect(()=>{e(T({drink:c,ingredients:h,category:x}))},[c,h,x,e]);const $=l==null?void 0:l.map(n=>({value:n.title,label:n.title})),_=p==null?void 0:p.map(n=>({value:n,label:n}));return t.jsxs(t.Fragment,{children:[t.jsx(H,{children:"Drinks"}),t.jsxs(R,{children:[t.jsx("form",{action:"",onSubmit:n=>{n.preventDefault(),S(n.currentTarget.name.value)},children:t.jsx(V,{placeholder:"Enter the text",name:"name"})}),t.jsx(q,{children:t.jsx("use",{href:`${D}#icon-search`})}),t.jsx(m,{classNamePrefix:"Select",options:_,placeholder:"All categories",isSearchable:!1,onChange:n=>{y(n.label)},onMenuOpen:()=>g(!0),onMenuClose:()=>{g(!1)},$menuIsOpen:v,styles:b}),t.jsx(m,{classNamePrefix:"Select",options:$,placeholder:"Ingredients",isSearchable:!1,onChange:n=>{w(n.label)},onMenuOpen:()=>u(!0),onMenuClose:()=>{u(!1)},$menuIsOpen:k,styles:b,$small:!0})]}),t.jsx(U,{children:o==null?void 0:o.map(n=>t.jsx(f,{drink:n},n._id))}),t.jsx(L,{})]})};export{W as default};
