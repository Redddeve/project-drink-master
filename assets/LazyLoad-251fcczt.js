import{g as u,a0 as d}from"./index-yHH0DC9W.js";var c=Object.defineProperty,v=(r,e,t)=>e in r?c(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,a=(r,e,t)=>(v(r,typeof e!="symbol"?e+"":e,t),t);const h=(r,e)=>typeof getComputedStyle<"u"?getComputedStyle(r,null).getPropertyValue(e):r.style.getPropertyValue(e),m=r=>h(r,"overflow")+h(r,"overflow-y")+h(r,"overflow-x"),f=r=>{if(!(r instanceof HTMLElement))return window;let e=r;for(;e&&!(e===document.body||e===document.documentElement||!e.parentNode);){if(/(scroll|auto)/.test(m(e)))return e;e=e.parentNode}return window};class b extends u.Component{constructor(e){super(e),a(this,"elementObserver"),a(this,"wrapper"),a(this,"lazyLoadHandler",t=>{var n,o;const{onContentVisible:s}=this.props,[i]=t,{isIntersecting:p}=i;if(p){this.setState({visible:!0},()=>{s&&s()});const l=(n=this.wrapper)==null?void 0:n.current;l&&l instanceof HTMLElement&&((o=this.elementObserver)==null||o.unobserve(l))}}),this.elementObserver=null,this.wrapper=d.createRef(),this.state={visible:!1}}componentDidMount(){var e;this.getEventNode();const{offset:t,threshold:n}=this.props,o={rootMargin:typeof t=="number"?`${t}px`:t||"0px",threshold:n||0};this.elementObserver=new IntersectionObserver(this.lazyLoadHandler,o);const s=(e=this.wrapper)==null?void 0:e.current;s instanceof HTMLElement&&this.elementObserver.observe(s)}shouldComponentUpdate(e,t){return t.visible}componentWillUnmount(){var e,t;const n=(e=this.wrapper)==null?void 0:e.current;n&&n instanceof HTMLElement&&((t=this.elementObserver)==null||t.unobserve(n))}getEventNode(){var e;return f((e=this.wrapper)==null?void 0:e.current)}render(){const{children:e,className:t,height:n,width:o,elementType:s}=this.props,{visible:i}=this.state,p={height:n,width:o},l=`LazyLoad${i?" is-visible":""}${t?` ${t}`:""}`;return u.createElement(s||"div",{className:l,style:p,ref:this.wrapper},i&&u.Children.only(e))}}a(b,"defaultProps",{elementType:"div",className:"",offset:0,threshold:0,width:null,onContentVisible:null,height:null});export{b as g};
