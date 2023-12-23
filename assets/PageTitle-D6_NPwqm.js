import{u as n,a as o,l as t,d as i,b,j as c}from"./index-L0e07m4l.js";const h=n.h1`
  font-size: 32px;
  font-weight: 600;
  line-height: 38px;
  margin-bottom: ${e=>e.$mbMobile||"40"}px;
  color: ${({theme:e})=>e==="dark"?o.colors.main:t.colors.main};

  @media ${i.tablet} {
    font-size: 56px;
    line-height: 60px;
    margin-bottom: ${e=>e.$mbTablet||"60"}px;
    color: ${({theme:e})=>e==="dark"?o.colors.main:t.colors.main};
  }

  @media ${i.desktop} {
    font-size: 64px;
    line-height: 68px;
    margin-bottom: ${e=>e.$mbDesktop||"60"}px;
    color: ${({theme:e})=>e==="dark"?o.colors.main:t.colors.main};
  }
`,$=({title:e,mbMobile:a,mbTablet:m,mbDesktop:s})=>{const l=b(r=>r.theme.theme);return c.jsx(h,{$mbMobile:a,$mbTablet:m,$mbDesktop:s,theme:l,children:e})};export{$ as P};
