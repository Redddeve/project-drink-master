import{u as a,d as t}from"./index-X7_WEst2.js";const o=a.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 205px;
  gap: 32px;
  margin: 90px auto 0;

  @media ${t.tablet} {
    margin: 100px auto 0;
    width: 261px;
  }

  @media ${t.desktop} {
    margin: 67px auto 0;
  }
`,p=a.img`
  height: 247px;

  @media ${t.tablet} {
    height: 326px;
  }
`,r=a.p`
  text-align: center;
  font-weight: 500;
  color: ${({theme:e})=>e==="dark"?"var(--white)":"var(--black)"};
`;export{o as E,p as a,r as b};
