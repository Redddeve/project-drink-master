import{P as i,j as t,c as p,r as u,e as d,b as r,s as g,g as c,V as P,m as f}from"./index-JNQRRAzc.js";import{C as x}from"./CocktailList-q3L7oAg0.js";import{E as h,a as k,b as y,P as j,u as C}from"./Paginator-HUVithRK.js";import{P as E}from"./PageTitle-ZHMDK6Dr.js";import{c as b,f as R,k as D}from"./selectors-p8WfivJo.js";import"./LazyLoad-h5PEO29w.js";const m=({pageCount:a,theme:s,items:e,destination:n})=>e.length===0?t.jsxs(h,{children:[t.jsx(k,{srcSet:`${p} 1x, ${u} 2x`,alt:"Cocktail"}),t.jsx(y,{theme:s,children:"You haven’t added any cocktails yet"})]}):t.jsx(j,{pageCount:a,items:e,destination:n,ListComponent:x,theme:s});m.propTypes={destination:i.string.isRequired,pageCount:i.number.isRequired,setSelectedPage:i.func,theme:i.string.isRequired,selectedPage:i.number,items:i.array.isRequired};const L=()=>{const a=d(),s=r(b),e=r(R),n=r(D),l=r(g),o=C({mobile:9,tablet:8,desktop:9,default:9});return c.useEffect(()=>{a(P({page:s,limit:o}))},[a,o,s]),c.useEffect(()=>{length===0&&s===e&&e>1&&a(f(e-1))},[a,e,s]),t.jsxs("section",{children:[t.jsx(E,{title:"My drinks"}),t.jsx(m,{destination:"my",pageCount:e,theme:l,items:n})]})};export{L as default};