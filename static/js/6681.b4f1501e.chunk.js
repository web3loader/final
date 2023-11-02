/*! For license information please see 6681.b4f1501e.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[6681],{19969:function(e,t,n){n.d(t,{SS:function(){return u},sq:function(){return d},MN:function(){return c},RF:function(){return p},uO:function(){return h},I8:function(){return l}});var i=n(87253),r=n.p+"static/media/big_unicorn.595c49962d708abbaaec.png",a=n.p+"static/media/noise.3c7efafc83614205bd1a.png",o=n.p+"static/media/xl_uni.9c9e061bed67e15ad3c8.png",s=n(60476);const l=(0,i.default)(s.Tz).withConfig({displayName:"styled__DataCard",componentId:"sc-6a13bc9-0"})`
  background: radial-gradient(76.02% 75.41% at 1.84% 0%, #ff007a 0%, #2172e5 100%);
  border-radius: 12px;
  width: 100%;
  position: relative;
  overflow: hidden;
`,d=i.default.span.withConfig({displayName:"styled__CardBGImage",componentId:"sc-6a13bc9-1"})`
  background: url(${r});
  width: 1000px;
  height: 600px;
  position: absolute;
  border-radius: 12px;
  opacity: 0.4;
  top: -100px;
  left: -100px;
  transform: rotate(-15deg);
  user-select: none;
  ${({desaturate:e})=>e&&"filter: saturate(0)"}
`,c=i.default.span.withConfig({displayName:"styled__CardBGImageSmaller",componentId:"sc-6a13bc9-2"})`
  background: url(${o});
  width: 1200px;
  height: 1200px;
  position: absolute;
  border-radius: 12px;
  top: -300px;
  left: -300px;
  opacity: 0.4;
  user-select: none;

  ${({desaturate:e})=>e&&"filter: saturate(0)"}
`,p=i.default.span.withConfig({displayName:"styled__CardNoise",componentId:"sc-6a13bc9-3"})`
  background: url(${a});
  background-size: cover;
  mix-blend-mode: overlay;
  border-radius: 12px;
  width: 100%;
  height: 100%;
  opacity: 0.15;
  position: absolute;
  top: 0;
  left: 0;
  user-select: none;
`,h=(0,i.default)(s.Tz).withConfig({displayName:"styled__CardSection",componentId:"sc-6a13bc9-4"})`
  padding: 1rem;
  z-index: 1;
  opacity: ${({disabled:e})=>e&&"0.4"};
`,u=i.default.div.withConfig({displayName:"styled__Break",componentId:"sc-6a13bc9-5"})`
  width: 100%;
  background-color: rgba(255, 255, 255, 0.2);
  height: 1px;
`},96130:function(e,t,n){n.r(t),n.d(t,{default:function(){return bi}});var i=n(42893),r=n(12204),a=n(80815),o=n(2304),s=n(68040),l=n(63362),d=n(80657);var c=n(62069),p=n(1579),h=n(13712);var u=e=>{const[t,n]=(0,h.useState)(Date.now());return(0,p.Z)((0,h.useCallback)((()=>{n(Date.now())}),[]),e),t},m=n(92796),g=n(55831),f=n.n(g),x=n(87253),w=n(39839),y=n(34120),b=n(65647),C=n(15387),j=n(34578),v=n(1990);const z=x.default.div.withConfig({displayName:"ChainConnectivityWarning__BodyRow",componentId:"sc-a6d617dc-0"})`
  color: ${({theme:e})=>e.neutral1};
  font-size: 12px;
  font-weight: 485;
  font-size: 14px;
  line-height: 20px;
`,k=(0,x.default)(j.Z).withConfig({displayName:"ChainConnectivityWarning__CautionTriangle",componentId:"sc-a6d617dc-1"})`
  color: ${({theme:e})=>e.deprecated_accentWarning};
`,N=(0,x.default)(w.dL).withConfig({displayName:"ChainConnectivityWarning__Link",componentId:"sc-a6d617dc-2"})`
  color: ${({theme:e})=>e.black};
  text-decoration: underline;
`,A=x.default.div.withConfig({displayName:"ChainConnectivityWarning__TitleRow",componentId:"sc-a6d617dc-3"})`
  align-items: center;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 8px;
`,T=x.default.div.withConfig({displayName:"ChainConnectivityWarning__TitleText",componentId:"sc-a6d617dc-4"})`
  color: ${({theme:e})=>e.neutral1};
  font-weight: 535;
  font-size: 16px;
  line-height: 24px;
  margin: 0px 12px;
`,S=x.default.div.withConfig({displayName:"ChainConnectivityWarning__Wrapper",componentId:"sc-a6d617dc-5"})`
  background-color: ${({theme:e})=>e.surface1};
  border-radius: 12px;
  border: 1px solid ${({theme:e})=>e.surface3};
  bottom: 60px;
  display: none;
  max-width: 348px;
  padding: 16px 20px;
  position: fixed;
  right: 16px;
  @media screen and (min-width: ${v.e.deprecated_upToMedium}px) {
    display: block;
  }
`;function E(){const{chainId:e}=(0,a.useWeb3React)(),t=(0,s.o7)(e),n=t?.label;return(0,i.jsxs)(S,{children:[(0,i.jsxs)(A,{children:[(0,i.jsx)(k,{}),(0,i.jsx)(T,{children:(0,i.jsx)(r.cC,{id:"3xf/uJ"})})]}),(0,i.jsxs)(z,{children:[e===C.ChainId.MAINNET?(0,i.jsx)(r.cC,{id:"iXzD8t"}):(0,i.jsx)(r.cC,{id:"3Fxw1j",values:{label:n}})," ",void 0!==t.statusPage&&(0,i.jsxs)("span",{children:[(0,i.jsx)(r.cC,{id:"IHlLC8"})," ",(0,i.jsx)(N,{href:t.statusPage||"",children:(0,i.jsx)(r.cC,{id:"jqVo/k"})})]})]})]})}const I=x.default.div.withConfig({displayName:"Polling__StyledPolling",componentId:"sc-1647183e-0"})`
  align-items: center;
  bottom: 0;
  color: ${({theme:e})=>e.neutral3};
  display: none;
  padding: 1rem;
  position: fixed;
  right: 0;
  transition: 250ms ease color;

  a {
    color: unset;
  }
  a:hover {
    color: unset;
    text-decoration: none;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.md}px) {
    display: flex;
  }
`,R=(0,x.default)(w.Tv.DeprecatedSmall).withConfig({displayName:"Polling__StyledPollingBlockNumber",componentId:"sc-1647183e-1"})`
  color: ${({theme:e,warning:t})=>t?e.deprecated_yellow3:e.success};
  transition: opacity 0.25s ease;
  opacity: ${({breathe:e,hovering:t})=>t?.7:e?1:.5};
  :hover {
    opacity: 1;
  }

  a {
    color: unset;
  }
  a:hover {
    text-decoration: none;
    color: unset;
  }
`,M=x.default.div.withConfig({displayName:"Polling__StyledPollingDot",componentId:"sc-1647183e-2"})`
  width: 8px;
  height: 8px;
  min-height: 8px;
  min-width: 8px;
  border-radius: 50%;
  position: relative;
  background-color: ${({theme:e,warning:t})=>t?e.deprecated_yellow3:e.success};
  transition: 250ms ease background-color;
`,_=x.keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,D=x.default.div.withConfig({displayName:"Polling__Spinner",componentId:"sc-1647183e-3"})`
  animation: ${_} 1s cubic-bezier(0.83, 0, 0.17, 1) infinite;
  transform: translateZ(0);

  border-top: 1px solid transparent;
  border-right: 1px solid transparent;
  border-bottom: 1px solid transparent;
  border-left: 2px solid ${({theme:e,warning:t})=>t?e.deprecated_yellow3:e.success};
  background: transparent;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  position: relative;
  transition: 250ms ease border-color;

  left: -3px;
  top: -3px;
`,L=f()("10m"),O=f()("10s");function P(){const{chainId:e}=(0,a.useWeb3React)(),t=(0,m.ZP)(),[n,p]=(0,h.useState)(!1),[g,f]=(0,h.useState)(!1),x=u(O),C=(0,l.Z)(),j=(0,c.GZ)(),v=function(){const{pathname:e}=(0,d.TH)();return e.endsWith("/")}(),z=(e?(0,s.bt)(e)?.blockWaitMsBeforeWarning:L)??L,k=Boolean(!!C&&x-C.mul(1e3).toNumber()>z);(0,h.useEffect)((()=>{if(!t)return;p(!0);const e=setTimeout((()=>p(!1)),1e3);return()=>{clearTimeout(e)}}),[t]);const N=(0,h.useMemo)((()=>e&&t?(0,y.E)(e,t.toString(),y.r.BLOCK):""),[t,e]);return j||v?null:(0,i.jsxs)(o.DA,{children:[(0,i.jsxs)(I,{onMouseEnter:()=>f(!0),onMouseLeave:()=>f(!1),children:[(0,i.jsx)(R,{breathe:n,hovering:g,warning:k,children:(0,i.jsx)(w.dL,{href:N,children:(0,i.jsxs)(b.ud,{text:(0,i.jsx)(r.cC,{id:"MCr7bN"}),children:[t,"\u2002"]})})}),(0,i.jsx)(M,{warning:k,children:n&&(0,i.jsx)(D,{warning:k})})," "]}),k&&(0,i.jsx)(E,{})]})}var F=n(56564),W=n(437),U=n(18646),B=n(60476),H=n(50595),q=n(41432),V=n.n(q);function Q(){return Q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},Q.apply(this,arguments)}function J(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var Z=(0,h.forwardRef)((function(e,t){var n=e.color,i=void 0===n?"currentColor":n,r=e.size,a=void 0===r?24:r,o=J(e,["color","size"]);return h.createElement("svg",Q({ref:t,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:i,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},o),h.createElement("path",{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"}))}));Z.propTypes={color:V().string,size:V().oneOfType([V().string,V().number])},Z.displayName="Heart";var Y=Z,G="data:image/png;base64,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",X=n(13120),K=n(44996),$=n(60198),ee=n(19969);const te=(0,x.default)(B.Tz).withConfig({displayName:"ClaimPopup__StyledClaimPopup",componentId:"sc-9e646efd-0"})`
  background: radial-gradient(76.02% 75.41% at 1.84% 0%, #ff007a 0%, #021d43 100%);
  border-radius: 20px;
  padding: 1.5rem;
  overflow: hidden;
  position: relative;
  max-width: 360px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`,ne=(0,x.default)(H.Z).withConfig({displayName:"ClaimPopup__StyledClose",componentId:"sc-9e646efd-1"})`
  position: absolute;
  right: 10px;
  top: 10px;

  :hover {
    cursor: pointer;
  }
`,ie=x.keyframes`
  0% {
    transform: perspective(1000px) rotateY(0deg);
  }

  100% {
    transform: perspective(1000px) rotateY(360deg);
  }
`,re=x.default.img.withConfig({displayName:"ClaimPopup__UniToken",componentId:"sc-9e646efd-2"})`
  animation: ${ie} 5s cubic-bezier(0.83, 0, 0.17, 1) infinite;
`;function ae(){const{account:e}=(0,a.useWeb3React)(),t=(0,F.uL)(),n=(0,F.Lb)(),o=(0,F.Wt)(X.Lk.SELF_CLAIM),s=(0,F.G_)(),l=(0,h.useCallback)((()=>{s()}),[s]),d=(0,K.ot)(e),c=(0,K.jX)(e);return(0,h.useEffect)((()=>{d&&n()}),[d]),(0,i.jsx)(i.Fragment,{children:t&&!o&&(0,i.jsxs)(te,{gap:"md",children:[(0,i.jsx)(ee.sq,{}),(0,i.jsx)(ee.RF,{}),(0,i.jsx)(ne,{stroke:"white",onClick:n}),(0,i.jsxs)(B.Tz,{style:{padding:"2rem 0",zIndex:10},justify:"center",children:[(0,i.jsx)(re,{width:"48px",src:G})," ",(0,i.jsxs)(w.Tv.DeprecatedWhite,{style:{marginTop:"1rem"},fontSize:36,fontWeight:535,children:[c?.toFixed(0,{groupSeparator:","}??"-")," UNI"]}),(0,i.jsxs)(w.Tv.DeprecatedWhite,{style:{paddingTop:"1.25rem",textAlign:"center"},fontWeight:535,color:"white",children:[(0,i.jsx)("span",{role:"img","aria-label":"party",children:"\ud83c\udf89"})," ",(0,i.jsx)(r.cC,{id:"ayzlbD"})," ",(0,i.jsx)("span",{role:"img","aria-label":"party",children:"\ud83c\udf89"})]}),(0,i.jsx)(w.Tv.DeprecatedSubHeader,{style:{paddingTop:"0.5rem",textAlign:"center"},color:"white",children:(0,i.jsx)(r.cC,{id:"sPI8ot",components:{0:(0,i.jsx)(Y,{size:12})}})})]}),(0,i.jsx)(B.Tz,{style:{zIndex:10},justify:"center",children:(0,i.jsx)($.DF,{padding:"8px",$borderRadius:"8px",width:"fit-content",onClick:l,children:(0,i.jsx)(r.cC,{id:"Hn7ais"})})})]})})}var oe=n(31502),se=n(83379),le=n(90315),de=n(2158),ce=n(38526),pe=n(79954),he=n(15627),ue=n(55680),me=n(28051),ge=n(97905),fe=n(57482);const xe=(0,x.default)(H.Z).withConfig({displayName:"PopupContent__StyledClose",componentId:"sc-86f179ed-0"})`
  position: absolute;
  right: ${({$padding:e})=>`${e}px`};
  top: ${({$padding:e})=>`${e}px`};
  color: ${({theme:e})=>e.neutral2};

  :hover {
    cursor: pointer;
  }
`,we=x.default.div.withConfig({displayName:"PopupContent__PopupContainer",componentId:"sc-86f179ed-1"})`
  display: inline-block;
  width: 100%;
  background-color: ${({theme:e})=>e.surface1};
  position: relative;
  border: 1px solid ${({theme:e})=>e.surface3};
  border-radius: 16px;
  overflow: hidden;
  box-shadow: ${({theme:e})=>e.deprecated_deepShadow};
  transition: ${({theme:e})=>`visibility ${e.transition.duration.fast} ease-in-out`};

  padding: ${({padded:e})=>e?"20px 35px 20px 20px":"2px 0px"};

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToSmall`
  min-width: 290px;
  &:not(:last-of-type) {
    margin-right: 20px;
  }
`}
`,ye=(0,x.default)(o.BA).withConfig({displayName:"PopupContent__RowNoFlex",componentId:"sc-86f179ed-2"})`
  flex-wrap: nowrap;
`,be=(0,x.default)(B.Tz).withConfig({displayName:"PopupContent__ColumnContainer",componentId:"sc-86f179ed-3"})`
  margin: 0 12px;
`,Ce=(0,x.default)(ce.Z).withConfig({displayName:"PopupContent__PopupAlertTriangle",componentId:"sc-86f179ed-4"})`
  flex-shrink: 0;
  width: 32px;
  height: 32px;
`;function je({chainId:e,onClose:t}){const n=(0,s.bt)(e);return(0,i.jsxs)(we,{padded:!0,children:[(0,i.jsx)(xe,{$padding:20,onClick:t}),(0,i.jsxs)(ye,{gap:"12px",children:[(0,i.jsx)(Ce,{}),(0,i.jsxs)(be,{gap:"sm",children:[(0,i.jsx)(w.Tv.SubHeader,{color:"neutral2",children:(0,i.jsx)(r.cC,{id:"HV8AwX"})}),(0,i.jsx)(w.Tv.BodySmall,{color:"neutral2",children:(0,i.jsx)(r.cC,{id:"qwMRCz",values:{0:n.label}})})]})]})]})}const ve=(0,x.default)(w.Tv.BodySmall).withConfig({displayName:"PopupContent__Descriptor",componentId:"sc-86f179ed-5"})`
  ${w.cw}
`;function ze({activity:e,onClick:t,onClose:n}){const r=e.status===pe.LN.Confirmed&&!e.cancelled,{ENSName:a}=(0,ue.Z)(e?.otherAccount);return(0,i.jsxs)(we,{children:[(0,i.jsx)(xe,{$padding:16,onClick:n}),(0,i.jsx)(de.ZP,{left:r?(0,i.jsx)(B.ZP,{children:(0,i.jsx)(le.V,{chainId:e.chainId,currencies:e.currencies,images:e.logos,accountAddress:e.otherAccount})}):(0,i.jsx)(Ce,{}),title:(0,i.jsx)(w.Tv.SubHeader,{children:e.title}),descriptor:(0,i.jsxs)(ve,{color:"neutral2",children:[e.descriptor,a??e.otherAccount]}),onClick:t})]})}function ke({chainId:e,hash:t,onClose:n}){const r=(0,ge.kF)(t),a=(0,he.UF)(),{formatNumber:o}=(0,fe.Gb)();if(!r)return null;const s=(0,se.tI)(r,e,a,o);if(!s)return null;return(0,i.jsx)(ze,{activity:s,onClose:n,onClick:()=>window.open((0,y.E)(s.chainId,s.hash,y.r.TRANSACTION),"_blank")})}function Ne({orderHash:e,onClose:t}){const n=(0,me.Aj)(e),r=(0,he.UF)(),a=(0,oe.y2)(),{formatNumber:o}=(0,fe.Gb)();if(!n)return null;const s=(0,se.h1)(n,r,o);if(!s)return null;return(0,i.jsx)(ze,{activity:s,onClose:t,onClick:()=>a({orderHash:e,status:n.status})})}function Ae({removeAfterMs:e,content:t,popKey:n}){const r=(0,F.J3)(),o=()=>r(n);(0,h.useEffect)((()=>{if(null===e)return;const t=setTimeout((()=>{r(n)}),e);return()=>{clearTimeout(t)}}),[n,e,r]);const{chainId:s}=(0,a.useWeb3React)();switch(t.type){case X.kQ.Transaction:return s?(0,i.jsx)(ke,{hash:t.hash,chainId:s,onClose:o}):null;case X.kQ.Order:return(0,i.jsx)(Ne,{orderHash:t.orderHash,onClose:o});case X.kQ.FailedSwitchNetwork:return(0,i.jsx)(je,{chainId:t.failedSwitchNetwork,onClose:o})}}const Te=x.default.div.withConfig({displayName:"Popups__MobilePopupWrapper",componentId:"sc-542c5d8f-0"})`
  position: relative;
  max-width: 100%;
  margin: 0 auto;
  display: none;
  padding-left: 20px;
  padding-right: 20px;

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToSmall`
    display: block;
    padding-top: 20px;
  `};
`,Se=x.default.div.withConfig({displayName:"Popups__MobilePopupInner",componentId:"sc-542c5d8f-1"})`
  height: 99%;
  overflow-x: auto;
  overflow-y: hidden;
  display: flex;
  flex-direction: row;
  -webkit-overflow-scrolling: touch;
  ::-webkit-scrollbar {
    display: none;
  }
`,Ee=(0,x.default)(B.Tz).withConfig({displayName:"Popups__FixedPopupColumn",componentId:"sc-542c5d8f-2"})`
  position: fixed;
  top: ${({drawerOpen:e})=>64+(e?-50:0)+"px"};
  right: 1rem;
  max-width: 348px !important;
  width: 100%;
  z-index: ${W.k.modal};
  transition: ${({theme:e})=>`top ${e.transition.timing.inOut} ${e.transition.duration.slow}`};

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToSmall`
    display: none;
  `};
`;function Ie(){const[e]=(0,U.Q5)(),t=(0,F.iT)();return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(Ee,{gap:"20px",drawerOpen:e,"data-testid":"popups",children:[(0,i.jsx)(ae,{}),t.map((e=>(0,i.jsx)(Ae,{content:e.content,popKey:e.key,removeAfterMs:e.removeAfterMs},e.key)))]}),t?.length>0&&(0,i.jsx)(Te,{"data-testid":"popups",children:(0,i.jsx)(Se,{children:t.slice(0).reverse().map((e=>(0,i.jsx)(Ae,{content:e.content,popKey:e.key,removeAfterMs:e.removeAfterMs},e.key)))})})]})}var Re,Me=n(19903),_e=n(66196),De=n(79371),Le=n(50786),Oe=n(50091),Pe=n(8809),Fe=n(46920),We=Object.defineProperty,Ue=Object.getOwnPropertySymbols,Be=Object.prototype.hasOwnProperty,He=Object.prototype.propertyIsEnumerable,qe=(e,t,n)=>t in e?We(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Ve=(e,t)=>{for(var n in t||(t={}))Be.call(t,n)&&qe(e,n,t[n]);if(Ue)for(var n of Ue(t))He.call(t,n)&&qe(e,n,t[n]);return e},Qe=(e,t)=>{var n={};for(var i in e)Be.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&Ue)for(var i of Ue(e))t.indexOf(i)<0&&He.call(e,i)&&(n[i]=e[i]);return n};(e=>{const t=class{static encodeText(n,i){const r=e.QrSegment.makeSegments(n);return t.encodeSegments(r,i)}static encodeBinary(n,i){const r=e.QrSegment.makeBytes(n);return t.encodeSegments([r],i)}static encodeSegments(e,n,r=1,o=40,l=-1,d=!0){if(!(t.MIN_VERSION<=r&&r<=o&&o<=t.MAX_VERSION)||l<-1||l>7)throw new RangeError("Invalid value");let c,p;for(c=r;;c++){const i=8*t.getNumDataCodewords(c,n),r=s.getTotalBits(e,c);if(r<=i){p=r;break}if(c>=o)throw new RangeError("Data too long")}for(const i of[t.Ecc.MEDIUM,t.Ecc.QUARTILE,t.Ecc.HIGH])d&&p<=8*t.getNumDataCodewords(c,i)&&(n=i);let h=[];for(const t of e){i(t.mode.modeBits,4,h),i(t.numChars,t.mode.numCharCountBits(c),h);for(const e of t.getData())h.push(e)}a(h.length==p);const u=8*t.getNumDataCodewords(c,n);a(h.length<=u),i(0,Math.min(4,u-h.length),h),i(0,(8-h.length%8)%8,h),a(h.length%8==0);for(let t=236;h.length<u;t^=253)i(t,8,h);let m=[];for(;8*m.length<h.length;)m.push(0);return h.forEach(((e,t)=>m[t>>>3]|=e<<7-(7&t))),new t(c,n,m,l)}getModule(e,t){return 0<=e&&e<this.size&&0<=t&&t<this.size&&this.modules[t][e]}getModules(){return this.modules}drawFunctionPatterns(){for(let n=0;n<this.size;n++)this.setFunctionModule(6,n,n%2==0),this.setFunctionModule(n,6,n%2==0);this.drawFinderPattern(3,3),this.drawFinderPattern(this.size-4,3),this.drawFinderPattern(3,this.size-4);const e=this.getAlignmentPatternPositions(),t=e.length;for(let n=0;n<t;n++)for(let i=0;i<t;i++)0==n&&0==i||0==n&&i==t-1||n==t-1&&0==i||this.drawAlignmentPattern(e[n],e[i]);this.drawFormatBits(0),this.drawVersion()}drawFormatBits(e){const t=this.errorCorrectionLevel.formatBits<<3|e;let n=t;for(let r=0;r<10;r++)n=n<<1^1335*(n>>>9);const i=21522^(t<<10|n);a(i>>>15==0);for(let a=0;a<=5;a++)this.setFunctionModule(8,a,r(i,a));this.setFunctionModule(8,7,r(i,6)),this.setFunctionModule(8,8,r(i,7)),this.setFunctionModule(7,8,r(i,8));for(let a=9;a<15;a++)this.setFunctionModule(14-a,8,r(i,a));for(let a=0;a<8;a++)this.setFunctionModule(this.size-1-a,8,r(i,a));for(let a=8;a<15;a++)this.setFunctionModule(8,this.size-15+a,r(i,a));this.setFunctionModule(8,this.size-8,!0)}drawVersion(){if(this.version<7)return;let e=this.version;for(let n=0;n<12;n++)e=e<<1^7973*(e>>>11);const t=this.version<<12|e;a(t>>>18==0);for(let n=0;n<18;n++){const e=r(t,n),i=this.size-11+n%3,a=Math.floor(n/3);this.setFunctionModule(i,a,e),this.setFunctionModule(a,i,e)}}drawFinderPattern(e,t){for(let n=-4;n<=4;n++)for(let i=-4;i<=4;i++){const r=Math.max(Math.abs(i),Math.abs(n)),a=e+i,o=t+n;0<=a&&a<this.size&&0<=o&&o<this.size&&this.setFunctionModule(a,o,2!=r&&4!=r)}}drawAlignmentPattern(e,t){for(let n=-2;n<=2;n++)for(let i=-2;i<=2;i++)this.setFunctionModule(e+i,t+n,1!=Math.max(Math.abs(i),Math.abs(n)))}setFunctionModule(e,t,n){this.modules[t][e]=n,this.isFunction[t][e]=!0}addEccAndInterleave(e){const n=this.version,i=this.errorCorrectionLevel;if(e.length!=t.getNumDataCodewords(n,i))throw new RangeError("Invalid argument");const r=t.NUM_ERROR_CORRECTION_BLOCKS[i.ordinal][n],o=t.ECC_CODEWORDS_PER_BLOCK[i.ordinal][n],s=Math.floor(t.getNumRawDataModules(n)/8),l=r-s%r,d=Math.floor(s/r);let c=[];const p=t.reedSolomonComputeDivisor(o);for(let a=0,u=0;a<r;a++){let n=e.slice(u,u+d-o+(a<l?0:1));u+=n.length;const i=t.reedSolomonComputeRemainder(n,p);a<l&&n.push(0),c.push(n.concat(i))}let h=[];for(let t=0;t<c[0].length;t++)c.forEach(((e,n)=>{(t!=d-o||n>=l)&&h.push(e[t])}));return a(h.length==s),h}drawCodewords(e){if(e.length!=Math.floor(t.getNumRawDataModules(this.version)/8))throw new RangeError("Invalid argument");let n=0;for(let t=this.size-1;t>=1;t-=2){6==t&&(t=5);for(let i=0;i<this.size;i++)for(let a=0;a<2;a++){const o=t-a,s=0==(t+1&2)?this.size-1-i:i;!this.isFunction[s][o]&&n<8*e.length&&(this.modules[s][o]=r(e[n>>>3],7-(7&n)),n++)}}a(n==8*e.length)}applyMask(e){if(e<0||e>7)throw new RangeError("Mask value out of range");for(let t=0;t<this.size;t++)for(let n=0;n<this.size;n++){let i;switch(e){case 0:i=(n+t)%2==0;break;case 1:i=t%2==0;break;case 2:i=n%3==0;break;case 3:i=(n+t)%3==0;break;case 4:i=(Math.floor(n/3)+Math.floor(t/2))%2==0;break;case 5:i=n*t%2+n*t%3==0;break;case 6:i=(n*t%2+n*t%3)%2==0;break;case 7:i=((n+t)%2+n*t%3)%2==0;break;default:throw new Error("Unreachable")}!this.isFunction[t][n]&&i&&(this.modules[t][n]=!this.modules[t][n])}}getPenaltyScore(){let e=0;for(let a=0;a<this.size;a++){let n=!1,i=0,r=[0,0,0,0,0,0,0];for(let o=0;o<this.size;o++)this.modules[a][o]==n?(i++,5==i?e+=t.PENALTY_N1:i>5&&e++):(this.finderPenaltyAddHistory(i,r),n||(e+=this.finderPenaltyCountPatterns(r)*t.PENALTY_N3),n=this.modules[a][o],i=1);e+=this.finderPenaltyTerminateAndCount(n,i,r)*t.PENALTY_N3}for(let a=0;a<this.size;a++){let n=!1,i=0,r=[0,0,0,0,0,0,0];for(let o=0;o<this.size;o++)this.modules[o][a]==n?(i++,5==i?e+=t.PENALTY_N1:i>5&&e++):(this.finderPenaltyAddHistory(i,r),n||(e+=this.finderPenaltyCountPatterns(r)*t.PENALTY_N3),n=this.modules[o][a],i=1);e+=this.finderPenaltyTerminateAndCount(n,i,r)*t.PENALTY_N3}for(let a=0;a<this.size-1;a++)for(let n=0;n<this.size-1;n++){const i=this.modules[a][n];i==this.modules[a][n+1]&&i==this.modules[a+1][n]&&i==this.modules[a+1][n+1]&&(e+=t.PENALTY_N2)}let n=0;for(const t of this.modules)n=t.reduce(((e,t)=>e+(t?1:0)),n);const i=this.size*this.size,r=Math.ceil(Math.abs(20*n-10*i)/i)-1;return a(0<=r&&r<=9),e+=r*t.PENALTY_N4,a(0<=e&&e<=2568888),e}getAlignmentPatternPositions(){if(1==this.version)return[];{const e=Math.floor(this.version/7)+2,t=32==this.version?26:2*Math.ceil((4*this.version+4)/(2*e-2));let n=[6];for(let i=this.size-7;n.length<e;i-=t)n.splice(1,0,i);return n}}static getNumRawDataModules(e){if(e<t.MIN_VERSION||e>t.MAX_VERSION)throw new RangeError("Version number out of range");let n=(16*e+128)*e+64;if(e>=2){const t=Math.floor(e/7)+2;n-=(25*t-10)*t-55,e>=7&&(n-=36)}return a(208<=n&&n<=29648),n}static getNumDataCodewords(e,n){return Math.floor(t.getNumRawDataModules(e)/8)-t.ECC_CODEWORDS_PER_BLOCK[n.ordinal][e]*t.NUM_ERROR_CORRECTION_BLOCKS[n.ordinal][e]}static reedSolomonComputeDivisor(e){if(e<1||e>255)throw new RangeError("Degree out of range");let n=[];for(let t=0;t<e-1;t++)n.push(0);n.push(1);let i=1;for(let r=0;r<e;r++){for(let e=0;e<n.length;e++)n[e]=t.reedSolomonMultiply(n[e],i),e+1<n.length&&(n[e]^=n[e+1]);i=t.reedSolomonMultiply(i,2)}return n}static reedSolomonComputeRemainder(e,n){let i=n.map((e=>0));for(const r of e){const e=r^i.shift();i.push(0),n.forEach(((n,r)=>i[r]^=t.reedSolomonMultiply(n,e)))}return i}static reedSolomonMultiply(e,t){if(e>>>8!=0||t>>>8!=0)throw new RangeError("Byte out of range");let n=0;for(let i=7;i>=0;i--)n=n<<1^285*(n>>>7),n^=(t>>>i&1)*e;return a(n>>>8==0),n}finderPenaltyCountPatterns(e){const t=e[1];a(t<=3*this.size);const n=t>0&&e[2]==t&&e[3]==3*t&&e[4]==t&&e[5]==t;return(n&&e[0]>=4*t&&e[6]>=t?1:0)+(n&&e[6]>=4*t&&e[0]>=t?1:0)}finderPenaltyTerminateAndCount(e,t,n){return e&&(this.finderPenaltyAddHistory(t,n),t=0),t+=this.size,this.finderPenaltyAddHistory(t,n),this.finderPenaltyCountPatterns(n)}finderPenaltyAddHistory(e,t){0==t[0]&&(e+=this.size),t.pop(),t.unshift(e)}constructor(e,n,i,r){if(this.version=e,this.errorCorrectionLevel=n,this.modules=[],this.isFunction=[],e<t.MIN_VERSION||e>t.MAX_VERSION)throw new RangeError("Version value out of range");if(r<-1||r>7)throw new RangeError("Mask value out of range");this.size=4*e+17;let o=[];for(let t=0;t<this.size;t++)o.push(!1);for(let t=0;t<this.size;t++)this.modules.push(o.slice()),this.isFunction.push(o.slice());this.drawFunctionPatterns();const s=this.addEccAndInterleave(i);if(this.drawCodewords(s),-1==r){let e=1e9;for(let t=0;t<8;t++){this.applyMask(t),this.drawFormatBits(t);const n=this.getPenaltyScore();n<e&&(r=t,e=n),this.applyMask(t)}}a(0<=r&&r<=7),this.mask=r,this.applyMask(r),this.drawFormatBits(r),this.isFunction=[]}};let n=t;function i(e,t,n){if(t<0||t>31||e>>>t!=0)throw new RangeError("Value out of range");for(let i=t-1;i>=0;i--)n.push(e>>>i&1)}function r(e,t){return 0!=(e>>>t&1)}function a(e){if(!e)throw new Error("Assertion error")}n.MIN_VERSION=1,n.MAX_VERSION=40,n.PENALTY_N1=3,n.PENALTY_N2=3,n.PENALTY_N3=40,n.PENALTY_N4=10,n.ECC_CODEWORDS_PER_BLOCK=[[-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],[-1,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]],n.NUM_ERROR_CORRECTION_BLOCKS=[[-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],[-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],[-1,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],[-1,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]],e.QrCode=n;const o=class{static makeBytes(e){let t=[];for(const n of e)i(n,8,t);return new o(o.Mode.BYTE,e.length,t)}static makeNumeric(e){if(!o.isNumeric(e))throw new RangeError("String contains non-numeric characters");let t=[];for(let n=0;n<e.length;){const r=Math.min(e.length-n,3);i(parseInt(e.substr(n,r),10),3*r+1,t),n+=r}return new o(o.Mode.NUMERIC,e.length,t)}static makeAlphanumeric(e){if(!o.isAlphanumeric(e))throw new RangeError("String contains unencodable characters in alphanumeric mode");let t,n=[];for(t=0;t+2<=e.length;t+=2){let r=45*o.ALPHANUMERIC_CHARSET.indexOf(e.charAt(t));r+=o.ALPHANUMERIC_CHARSET.indexOf(e.charAt(t+1)),i(r,11,n)}return t<e.length&&i(o.ALPHANUMERIC_CHARSET.indexOf(e.charAt(t)),6,n),new o(o.Mode.ALPHANUMERIC,e.length,n)}static makeSegments(e){return""==e?[]:o.isNumeric(e)?[o.makeNumeric(e)]:o.isAlphanumeric(e)?[o.makeAlphanumeric(e)]:[o.makeBytes(o.toUtf8ByteArray(e))]}static makeEci(e){let t=[];if(e<0)throw new RangeError("ECI assignment value out of range");if(e<128)i(e,8,t);else if(e<16384)i(2,2,t),i(e,14,t);else{if(!(e<1e6))throw new RangeError("ECI assignment value out of range");i(6,3,t),i(e,21,t)}return new o(o.Mode.ECI,0,t)}static isNumeric(e){return o.NUMERIC_REGEX.test(e)}static isAlphanumeric(e){return o.ALPHANUMERIC_REGEX.test(e)}getData(){return this.bitData.slice()}static getTotalBits(e,t){let n=0;for(const i of e){const e=i.mode.numCharCountBits(t);if(i.numChars>=1<<e)return 1/0;n+=4+e+i.bitData.length}return n}static toUtf8ByteArray(e){e=encodeURI(e);let t=[];for(let n=0;n<e.length;n++)"%"!=e.charAt(n)?t.push(e.charCodeAt(n)):(t.push(parseInt(e.substr(n+1,2),16)),n+=2);return t}constructor(e,t,n){if(this.mode=e,this.numChars=t,this.bitData=n,t<0)throw new RangeError("Invalid argument");this.bitData=n.slice()}};let s=o;s.NUMERIC_REGEX=/^[0-9]*$/,s.ALPHANUMERIC_REGEX=/^[A-Z0-9 $%*+.\/:-]*$/,s.ALPHANUMERIC_CHARSET="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:",e.QrSegment=s})(Re||(Re={})),(e=>{let t;(e=>{const t=class{constructor(e,t){this.ordinal=e,this.formatBits=t}};let n=t;n.LOW=new t(0,1),n.MEDIUM=new t(1,0),n.QUARTILE=new t(2,3),n.HIGH=new t(3,2),e.Ecc=n})(t=e.QrCode||(e.QrCode={}))})(Re||(Re={})),(e=>{let t;(e=>{const t=class{numCharCountBits(e){return this.numBitsCharCount[Math.floor((e+7)/17)]}constructor(e,t){this.modeBits=e,this.numBitsCharCount=t}};let n=t;n.NUMERIC=new t(1,[10,12,14]),n.ALPHANUMERIC=new t(2,[9,11,13]),n.BYTE=new t(4,[8,16,16]),n.KANJI=new t(8,[8,10,12]),n.ECI=new t(7,[0,0,0]),e.Mode=n})(t=e.QrSegment||(e.QrSegment={}))})(Re||(Re={}));var Je=Re,Ze={L:Je.QrCode.Ecc.LOW,M:Je.QrCode.Ecc.MEDIUM,Q:Je.QrCode.Ecc.QUARTILE,H:Je.QrCode.Ecc.HIGH},Ye=128,Ge="L",Xe="#FFFFFF",Ke="#000000",$e=!1,et=4,tt=.1;function nt(e,t=0){const n=[];return e.forEach((function(e,i){let r=null;e.forEach((function(a,o){if(!a&&null!==r)return n.push(`M${r+t} ${i+t}h${o-r}v1H${r+t}z`),void(r=null);if(o!==e.length-1)a&&null===r&&(r=o);else{if(!a)return;null===r?n.push(`M${o+t},${i+t} h1v1H${o+t}z`):n.push(`M${r+t},${i+t} h${o+1-r}v1H${r+t}z`)}}))})),n.join("")}function it(e,t){return e.slice().map(((e,n)=>n<t.y||n>=t.y+t.h?e:e.map(((e,n)=>(n<t.x||n>=t.x+t.w)&&e))))}function rt(e,t,n,i){if(null==i)return null;const r=n?et:0,a=e.length+2*r,o=Math.floor(t*tt),s=a/t,l=(i.width||o)*s,d=(i.height||o)*s,c=null==i.x?e.length/2-l/2:i.x*s,p=null==i.y?e.length/2-d/2:i.y*s;let h=null;if(i.excavate){let e=Math.floor(c),t=Math.floor(p);h={x:e,y:t,w:Math.ceil(l+c-e),h:Math.ceil(d+p-t)}}return{x:c,y:p,h:d,w:l,excavation:h}}!function(){try{(new Path2D).addPath(new Path2D)}catch(e){return!1}}();function at(e){const t=e,{value:n,size:i=Ye,level:r=Ge,bgColor:a=Xe,fgColor:o=Ke,includeMargin:s=$e,imageSettings:l}=t,d=Qe(t,["value","size","level","bgColor","fgColor","includeMargin","imageSettings"]);let c=Je.QrCode.encodeText(n,Ze[r]).getModules();const p=s?et:0,u=c.length+2*p,m=rt(c,i,s,l);let g=null;null!=l&&null!=m&&(null!=m.excavation&&(c=it(c,m.excavation)),g=h.createElement("image",{xlinkHref:l.src,height:m.h,width:m.w,x:m.x+p,y:m.y+p,preserveAspectRatio:"none"}));const f=nt(c,p);return h.createElement("svg",Ve({height:i,width:i,viewBox:`0 0 ${u} ${u}`},d),h.createElement("path",{fill:a,d:`M0,0 h${u}v${u}H0z`,shapeRendering:"crispEdges"}),h.createElement("path",{fill:o,d:f,shapeRendering:"crispEdges"}),g)}var ot=n(36633),st=n.p+"static/media/uniwallet_modal_icon.e17cdec93dd86d3fe3b7.png",lt=n(27936);const dt=x.default.button.withConfig({displayName:"DownloadButton__StyledButton",componentId:"sc-2117474d-0"})`
  ${w.iV}
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: row;
  gap: 6px;
  padding: 8px 24px;
  border: none;
  white-space: nowrap;
  background: ${({theme:e,branded:t})=>t?e.accent1:e.surface3};
  border-radius: 12px;

  font-weight: 535;
  font-size: 14px;
  line-height: 16px;
  color: ${({theme:e,branded:t})=>t?e.deprecated_accentTextLightPrimary:e.neutral1};
`;function ct({onClick:e,branded:t,children:n}){return(0,i.jsx)(dt,{branded:t,onClick:e,children:n})}function pt({onClick:e,text:t="Download",element:n}){const r=(0,h.useCallback)((()=>{e?.(),(0,lt.J8)({element:n})}),[n,e]);return(0,i.jsx)(ct,{branded:!0,onClick:r,children:t})}const ht=(0,x.default)(o.m0).withConfig({displayName:"UniwalletModal__UniwalletConnectWrapper",componentId:"sc-d7f88bbb-0"})`
  display: flex;
  flex-direction: column;
  padding: 20px 16px 16px;
`,ut=(0,x.default)(o.m0).withConfig({displayName:"UniwalletModal__HeaderRow",componentId:"sc-d7f88bbb-1"})`
  display: flex;
`,mt=(0,x.default)(o.m0).withConfig({displayName:"UniwalletModal__QRCodeWrapper",componentId:"sc-d7f88bbb-2"})`
  aspect-ratio: 1;
  border-radius: 12px;
  background-color: ${({theme:e})=>e.white};
  margin: 24px 32px 20px;
  padding: 10px;
`,gt=x.default.div.withConfig({displayName:"UniwalletModal__Divider",componentId:"sc-d7f88bbb-3"})`
  border-bottom: 1px solid ${({theme:e})=>e.surface3};
  width: 100%;
`;function ft(){const{activationState:e,cancelActivation:t}=(0,Oe.Y)(),[n,a]=(0,h.useState)(),o=!ot.gn&&e.status===Oe.o.PENDING&&e.connection.type===Pe.R.UNISWAP_WALLET_V2&&!!n;(0,h.useEffect)((()=>{Le.uq.connector.events.addListener(Fe.Z.UNI_URI_AVAILABLE,(e=>{e&&a(e)}))}),[]),(0,h.useEffect)((()=>{o&&(0,_e._P)("Uniswap wallet modal opened")}),[o]);const s=(0,x.useTheme)();return(0,i.jsx)(De.Z,{isOpen:o,onDismiss:t,children:(0,i.jsxs)(ht,{children:[(0,i.jsxs)(ut,{children:[(0,i.jsx)(w.Tv.SubHeader,{children:(0,i.jsx)(r.cC,{id:"4Ock4M"})}),(0,i.jsx)(w.Tw,{onClick:t})]}),(0,i.jsx)(mt,{children:n&&(0,i.jsx)(at,{value:n,width:"100%",height:"100%",level:"M",fgColor:s.darkMode?s.surface1:s.black,imageSettings:{src:st,height:33,width:33,excavate:!1}})}),(0,i.jsx)(gt,{}),(0,i.jsx)(wt,{})]})})}const xt=(0,x.default)(o.m0).withConfig({displayName:"UniwalletModal__InfoSectionWrapper",componentId:"sc-d7f88bbb-4"})`
  display: flex;
  flex-direction: row;
  padding-top: 20px;
  gap: 20px;
`;function wt(){return(0,i.jsxs)(xt,{children:[(0,i.jsxs)(B.Tz,{gap:"4px",children:[(0,i.jsx)(w.Tv.SubHeaderSmall,{color:"neutral1",children:(0,i.jsx)(r.cC,{id:"IikX52"})}),(0,i.jsx)(w.Tv.BodySmall,{color:"neutral2",children:(0,i.jsx)(r.cC,{id:"Hmd9BI"})})]}),(0,i.jsx)(B.ZP,{children:(0,i.jsx)(pt,{element:Me.xo.UNISWAP_WALLET_MODAL_DOWNLOAD_BUTTON})})]})}var yt=n(86003),bt=JSON.parse('[{"inputs":[{"internalType":"address","name":"token_","type":"address"},{"internalType":"bytes32","name":"merkleRoot_","type":"bytes32"},{"internalType":"uint256","name":"endTime_","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"AlreadyClaimed","type":"error"},{"inputs":[],"name":"ClaimWindowFinished","type":"error"},{"inputs":[],"name":"EndTimeInPast","type":"error"},{"inputs":[],"name":"InvalidProof","type":"error"},{"inputs":[],"name":"NoWithdrawDuringClaim","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"index","type":"uint256"},{"indexed":false,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Claimed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"},{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bytes32[]","name":"merkleProof","type":"bytes32[]"}],"name":"claim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"endTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"isClaimed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"merkleRoot","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"token","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]'),Ct=n.p+"static/media/airdopBackground.7f54f314ceca6a012b57.png",jt=n(62329),vt=n(25575),zt=n(36665),kt=n(26030),Nt=n(634);var At;!function(e){e.LOOKS_RARE_NFT_COMMERCE_REWARDS="LOOKS_RARE_NFT_COMMERCE_REWARDS",e.GENIE_UNISWAP_USDC_AIRDROP="GENIE_UNISWAP_USDC_AIRDROP"}(At||(At={}));const Tt=x.default.div.withConfig({displayName:"AirdropModal__ModalWrap",componentId:"sc-2e5fa0a7-0"})`
  display: flex;
  flex-direction: column;
`,St=x.default.div.withConfig({displayName:"AirdropModal__Body",componentId:"sc-2e5fa0a7-1"})`
  padding: 28px 20px 20px 20px;
`,Et=(0,x.default)($.UH).withConfig({displayName:"AirdropModal__ClaimButton",componentId:"sc-2e5fa0a7-2"})`
  width: 100%;
  background-color: ${({theme:e})=>e.accent1};
  border-radius: 12px;
  color: ${({theme:e})=>e.white};
`,It=x.default.div.withConfig({displayName:"AirdropModal__Line",componentId:"sc-2e5fa0a7-3"})`
  height: 1px;
  width: 100%;
  background-color: ${({theme:e})=>e.white};
  opacity: 0.24;
  margin-top: 12px;
  margin-bottom: 12px;
`,Rt=x.default.a.withConfig({displayName:"AirdropModal__LinkWrap",componentId:"sc-2e5fa0a7-4"})`
  text-decoration: none;
  ${jt.c}
`,Mt=x.default.div.withConfig({displayName:"AirdropModal__ImageContainer",componentId:"sc-2e5fa0a7-5"})`
  position: relative;
  width: 100%;
`,_t=x.default.img.withConfig({displayName:"AirdropModal__StyledImage",componentId:"sc-2e5fa0a7-6"})`
  width: 100%;
  height: 170px;
`,Dt=x.default.div.withConfig({displayName:"AirdropModal__USDCLabel",componentId:"sc-2e5fa0a7-7"})`
  font-weight: 535;
  font-size: 36px;
  line-height: 44px;
  margin-top: 8px;
  color: white;
`,Lt=x.default.div.withConfig({displayName:"AirdropModal__TextContainer",componentId:"sc-2e5fa0a7-8"})`
  position: absolute;
  left: 16px;
  top: 16px;
  right: 16px;
`,Ot=x.default.div.withConfig({displayName:"AirdropModal__RewardsDetailsContainer",componentId:"sc-2e5fa0a7-9"})`
  display: flex;
  width: 100%;
  justify-content: space-between;
`,Pt=x.default.span.withConfig({displayName:"AirdropModal__CurrencyText",componentId:"sc-2e5fa0a7-10"})`
  color: white;
  font-weight: 535;
  font-size: 12px;
  line-height: 14.5px;
`,Ft=x.default.div.withConfig({displayName:"AirdropModal__ClaimContainer",componentId:"sc-2e5fa0a7-11"})`
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 380px;
  padding: 60px 28px;
  padding-bottom: 20px;
`,Wt=x.default.div.withConfig({displayName:"AirdropModal__SuccessText",componentId:"sc-2e5fa0a7-12"})`
  font-weight: 485;
  font-size: 16px;
  line-height: 24px;
  margin-top: 24px;
  margin-bottom: 8px;
`,Ut=x.default.a.withConfig({displayName:"AirdropModal__EtherscanLink",componentId:"sc-2e5fa0a7-13"})`
  text-decoration: none;

  ${jt.c}
`,Bt=(0,x.default)($.UH).withConfig({displayName:"AirdropModal__CloseButton",componentId:"sc-2e5fa0a7-14"})`
  max-width: 68px;
  margin-top: auto;
  margin-left: auto;
  margin-right: auto;
`,Ht=(0,x.default)(w.Tw).withConfig({displayName:"AirdropModal__SyledCloseIcon",componentId:"sc-2e5fa0a7-15"})`
  float: right;
  height: 24px;

  ${jt.c}
`,qt=x.default.div.withConfig({displayName:"AirdropModal__Error",componentId:"sc-2e5fa0a7-16"})`
  display: flex;
  color: ${({theme:e})=>e.critical};
  font-weight: 535;
  line-height: 24px;
  border-radius: 16px;
  padding: 12px 20px;
  font-size: 14px;
  align-items: center;
  gap: 12px;
`,Vt=x.default.div.withConfig({displayName:"AirdropModal__ReactLinkWrap",componentId:"sc-2e5fa0a7-17"})`
  margin-bottom: 40px;
`,Qt=x.default.span.withConfig({displayName:"AirdropModal__RewardsText",componentId:"sc-2e5fa0a7-18"})`
  font-size: 12px;
  line-height: 16px;
  color: ${({theme:e})=>e.white};

  &:first-child {
    margin-bottom: 8px;
  }
`,Jt=x.default.span.withConfig({displayName:"AirdropModal__RewardsInformationText",componentId:"sc-2e5fa0a7-19"})`
  display: inline-block;
  font-size: 14px;
  line-height: 20px;
  color: ${({theme:e})=>e.neutral1};
  margin-bottom: 28px;
`,Zt=x.default.span.withConfig({displayName:"AirdropModal__MainHeader",componentId:"sc-2e5fa0a7-20"})`
  font-weight: 535;
  font-size: 16px;
  line-height: 20px;
  color: ${({theme:e})=>e.white};
`,Yt=x.default.div.withConfig({displayName:"AirdropModal__EtherscanLinkWrap",componentId:"sc-2e5fa0a7-21"})`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;var Gt;!function(e){e[e.tradingRewardAmount=300]="tradingRewardAmount",e[e.holderRewardAmount=1e3]="holderRewardAmount",e[e.combinedAmount=1300]="combinedAmount"}(Gt||(Gt={}));var Xt=()=>{const{account:e,provider:t}=(0,a.useWeb3React)(),[n,r]=(0,h.useState)(),[o,s]=(0,h.useState)(!1),[l,d]=(0,h.useState)(""),[c,p]=(0,h.useState)(!1),u=(0,Nt.k)((e=>e.setIsClaimAvailable)),[m,g]=(0,h.useState)(!1),[f,x]=(0,h.useState)(0),y=(0,F.Wt)(X.Lk.UNISWAP_NFT_AIRDROP_CLAIM),b=(0,F.xk)(X.Lk.UNISWAP_NFT_AIRDROP_CLAIM),v=(0,zt.cq)(C.UNISWAP_NFT_AIRDROP_CLAIM_ADDRESS,bt),z=()=>{g(!1),p(!0),setTimeout((()=>{p(!1)}),5e3)};(0,h.useEffect)((()=>{e&&t&&v&&(async()=>{try{const{data:n}=await(async e=>{const t=`https://temp.api.uniswap.org/v1/nft/rewards/${e}?category=GENIE_UNISWAP_USDC_AIRDROP`,n=new AbortController,i=setTimeout((()=>n.abort()),3e3),r=await fetch(t,{method:"GET",headers:{"Content-Type":"application/json"}});return clearInterval(i),await r.json()})(e),i=n.find((e=>e?.rewardType===At.GENIE_UNISWAP_USDC_AIRDROP));if(!i)return;const[a]=await v.connect(t).functions.isClaimed(i?.index);if(i&&!1===a){const e=yt.O$.from(i.amount).div(10**6);r(i),x(e.toNumber()),u(!0)}}catch(n){z()}})()}),[e,v,t,u]);return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(De.Z,{hideBorder:!0,isOpen:y,onDismiss:b,maxHeight:90,maxWidth:400,children:(0,i.jsx)(Tt,{children:o?(0,i.jsxs)(Ft,{children:[(0,i.jsx)(w.Tv.HeadlineSmall,{children:"Congratulations!"}),(0,i.jsxs)(Wt,{children:["You have successfully claimed ",f," USDC. Thank you for supporting Genie.xyz."]}),(0,i.jsx)(Ut,{href:`https://etherscan.io/tx/${l}`,target:"_blank",children:(0,i.jsx)(w.Tv.Link,{children:(0,i.jsxs)(Yt,{children:[(0,i.jsx)("span",{children:"Etherscan"}),(0,i.jsx)(kt.XC,{})]})})}),(0,i.jsx)(Bt,{size:$.qE.medium,emphasis:$.eI.medium,onClick:b,children:"Close"})]}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(Mt,{children:[(0,i.jsxs)(Lt,{children:[(0,i.jsx)(Ht,{onClick:b,stroke:"white"}),(0,i.jsx)(Zt,{children:"Uniswap NFT Airdrop"}),(0,i.jsxs)(Dt,{children:[f," USDC"]}),(0,i.jsx)(It,{}),(0,i.jsxs)(Ot,{children:[(0,i.jsx)(Qt,{children:"Trading rewards"})," ",(0,i.jsx)(Pt,{children:f===Gt.tradingRewardAmount||f===Gt.combinedAmount?`${Gt.tradingRewardAmount} USDC`:"0"})]}),(0,i.jsxs)(Ot,{children:[(0,i.jsx)(Qt,{children:"Genie NFT holder rewards"})," ",(0,i.jsx)(Pt,{children:f!==Gt.tradingRewardAmount?`${Gt.holderRewardAmount} USDC`:"0"})]})]}),(0,i.jsx)(_t,{src:Ct})]}),(0,i.jsxs)(St,{children:[(0,i.jsxs)(Jt,{children:["As a long time supporter of Genie, you\u2019ve been awarded ",f," USDC tokens."]}),(0,i.jsx)(Vt,{children:(0,i.jsx)(Rt,{href:"https://uniswap.org/blog/uniswap-nft-aggregator-announcement",target:"_blank",children:(0,i.jsx)(w.Tv.Link,{children:"Read more about Uniswap NFT."})})}),c&&(0,i.jsxs)(qt,{children:[(0,i.jsx)(j.Z,{}),"Claim USDC failed. Please try again later"]}),(0,i.jsxs)(Et,{onClick:async()=>{try{if(v&&n&&n.amount&&n.merkleProof&&t){g(!0);const i=await v.connect(t?.getSigner()).functions.claim(n.index,e,n?.amount,n?.merkleProof);await i.wait(),d(i.hash),g(!1),s(!0),u(!1)}}catch(i){g(!1),z()}},size:$.qE.medium,emphasis:$.eI.medium,disabled:m,children:[m&&(0,i.jsx)(vt.ZP,{stroke:"white"}),(0,i.jsxs)("span",{children:["Claim",m&&"ing"," USDC"]})]})]})]})})})})},Kt=n(50154);var $t=n.p+"static/media/base_background_icon.1690f22892c4fc70751f1475802b2bdb.svg",en=n(94903),tn=n(89243),nn=n(49912),rn=n(64614),an=n.p+"static/media/wallet_banner_phone_image.7458b169d90ac9039783.png";const on=x.default.div.withConfig({displayName:"styled__PopupContainer",componentId:"sc-dba49533-0"})`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${({show:e})=>!e&&"display: none"};

  background: url(${an});
  background-repeat: no-repeat;
  background-position: top 18px right 15px;
  background-size: 166px;

  :hover {
    background-size: 170px;
  }
  transition: background-size ${({theme:e})=>e.transition.duration.medium}
    ${({theme:e})=>e.transition.timing.inOut};

  background-color: ${({theme:e})=>e.chain_84531};
  color: ${({theme:e})=>e.neutral1};
  position: fixed;
  z-index: ${W.k.sticky};

  padding: 24px 16px 16px;

  border-radius: 20px;
  bottom: 20px;
  right: 20px;
  width: 390px;
  height: 164px;

  border: 1px solid ${({theme:e})=>e.surface3};

  box-shadow: ${({theme:e})=>e.deprecated_deepShadow};

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    bottom: 62px;
  }

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    background-position: top 32px right -10px;
    width: unset;
    right: 10px;
    left: 10px;
    height: 144px;
  }

  user-select: none;
`,sn=x.default.img.withConfig({displayName:"styled__BaseBackgroundImage",componentId:"sc-dba49533-1"})`
  position: absolute;
  top: 0;
  left: 0;
  height: 138px;
  width: 138px;
`,ln=(0,x.default)(o.ZP).withConfig({displayName:"styled__ButtonRow",componentId:"sc-dba49533-2"})`
  gap: 16px;
`,dn=(0,x.default)(H.Z).withConfig({displayName:"styled__StyledXButton",componentId:"sc-dba49533-3"})`
  cursor: pointer;
  position: absolute;
  top: 21px;
  right: 17px;

  color: ${({theme:e})=>e.white};
  ${jt.c};
`,cn=(0,x.default)($.Yd).withConfig({displayName:"styled__BannerButton",componentId:"sc-dba49533-4"})`
  height: 40px;
  border-radius: 16px;
  padding: 10px;
  ${jt.c};
`;function pn(){const{chainId:e}=(0,a.useWeb3React)(),[t,n]=(0,rn.tD)(),o=(0,d.TH)(),s="?intro=true"===o.search||"/"===o.pathname,l=Boolean(!t&&!s&&e===C.ChainId.BASE),c=(0,nn.e)(),p=(0,tn.W)();return ot.TL?null:(0,i.jsxs)(on,{show:l,children:[(0,i.jsx)(dn,{"data-testid":"uniswap-wallet-banner",size:20,onClick:e=>{e.preventDefault(),e.stopPropagation(),n()}}),(0,i.jsx)(sn,{src:$t,alt:"transparent base background logo"}),(0,i.jsx)(w.Tv.HeadlineMedium,{fontSize:"24px",lineHeight:"28px",color:"white",maxWidth:"224px",children:(0,i.jsx)(r.cC,{id:"+XqHT+",components:{0:(0,i.jsx)("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"}),1:(0,i.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M19.5689 10C19.5689 15.4038 15.1806 19.7845 9.76737 19.7845C4.63163 19.7845 0.418433 15.8414 0 10.8225H12.9554V9.17755H0C0.418433 4.15863 4.63163 0.215576 9.76737 0.215576C15.1806 0.215576 19.5689 4.59621 19.5689 10Z",fill:"white"})}})}),(0,i.jsx)(ln,{children:ot.gn?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(cn,{backgroundColor:"white",onClick:()=>(0,lt.J8)({element:Me.xo.UNISWAP_WALLET_BANNER_DOWNLOAD_BUTTON,appStoreParams:"pt=123625782&ct=base-app-banner&mt=8"}),children:[p?(0,i.jsx)(en.r,{width:14,height:14}):(0,i.jsx)(Kt.r,{width:14,height:14}),(0,i.jsx)(w.Tv.LabelSmall,{color:"black",marginLeft:"5px",children:c.xs?(0,i.jsx)(r.cC,{id:"n4vt3Q"}):(0,i.jsx)(r.cC,{id:"mzI/c+"})})]}),(0,i.jsx)(cn,{backgroundColor:"black",onClick:()=>(0,lt.Rb)(),children:(0,i.jsx)(w.Tv.LabelSmall,{color:"white",children:(0,i.jsx)(r.cC,{id:"zwWKhA"})})})]}):(0,i.jsx)(cn,{backgroundColor:"white",width:"125px",onClick:()=>(0,lt.Rb)(),children:(0,i.jsx)(w.Tv.LabelSmall,{color:"black",children:(0,i.jsx)(r.cC,{id:"zwWKhA"})})})})]})}var hn=n(23586),un=n(47096),mn=n(83777),gn=n(68456),fn=n(48662),xn=n(73440);const wn=(0,x.default)(B.Tz).withConfig({displayName:"AddressClaimModal__ContentWrapper",componentId:"sc-72f6d890-0"})`
  width: 100%;
`,yn=(0,x.default)(ee.I8).withConfig({displayName:"AddressClaimModal__ModalUpper",componentId:"sc-72f6d890-1"})`
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  background: radial-gradient(76.02% 75.41% at 1.84% 0%, #ff007a 0%, #021d43 100%);
`,bn=x.default.div.withConfig({displayName:"AddressClaimModal__ConfirmOrLoadingWrapper",componentId:"sc-72f6d890-2"})`
  width: 100%;
  padding: 24px;
  position: relative;
  background: ${({activeBG:e})=>e&&"radial-gradient(76.02% 75.41% at 1.84% 0%, rgba(255, 0, 122, 0.2) 0%, rgba(33, 114, 229, 0.2) 100%), #FFFFFF;"};
`,Cn=(0,x.default)(B.lg).withConfig({displayName:"AddressClaimModal__ConfirmedIcon",componentId:"sc-72f6d890-3"})`
  padding: 60px 0;
`;function jn({isOpen:e,onDismiss:t}){const{chainId:n}=(0,a.useWeb3React)(),[s,l]=(0,h.useState)("");const{address:d}=(0,fn.Z)(s),[c,p]=(0,h.useState)(!1),{claimCallback:u}=(0,K.NH)(d),m=(0,K.jX)(d),g=(0,K.ot)(d),[f,x]=(0,h.useState)(),b=(0,ge.ub)(f??""),C=f&&!b;function j(){p(!1),x(void 0),l(""),t()}return(0,i.jsxs)(De.Z,{isOpen:e,onDismiss:j,maxHeight:90,children:[!c&&(0,i.jsxs)(wn,{gap:"lg",children:[(0,i.jsxs)(yn,{children:[(0,i.jsx)(ee.sq,{}),(0,i.jsx)(ee.RF,{}),(0,i.jsxs)(ee.uO,{gap:"md",children:[(0,i.jsxs)(o.m0,{children:[(0,i.jsx)(w.Tv.DeprecatedWhite,{fontWeight:535,children:(0,i.jsx)(r.cC,{id:"OT2U3c"})}),(0,i.jsx)(w.Tw,{onClick:j,style:{zIndex:99},stroke:"white"})]}),(0,i.jsx)(w.Tv.DeprecatedWhite,{fontWeight:535,fontSize:36,children:(0,i.jsx)(r.cC,{id:"191ekK",values:{0:m?.toFixed(0,{groupSeparator:","}??"-")}})})]}),(0,i.jsx)(ee.SS,{})]}),(0,i.jsxs)(B.Tz,{gap:"md",style:{padding:"1rem",paddingTop:"0"},justify:"center",children:[(0,i.jsx)(w.Tv.DeprecatedSubHeader,{fontWeight:535,children:(0,i.jsx)(r.cC,{id:"8Utjse"})}),(0,i.jsx)(xn.Z,{value:s,onChange:function(e){l(e)}}),d&&!g&&(0,i.jsx)(w.Tv.DeprecatedError,{error:!0,children:(0,i.jsx)(r.cC,{id:"YRWR01"})}),(0,i.jsx)($.DF,{disabled:!(0,hn.isAddress)(d??"")||!g,padding:"16px 16px",width:"100%",$borderRadius:"12px",mt:"1rem",onClick:function(){p(!0),u().then((e=>{x(e)})).catch((e=>{p(!1),console.log(e)}))},children:(0,i.jsx)(r.cC,{id:"Vv5NYl"})})]})]}),(c||C)&&(0,i.jsxs)(bn,{activeBG:!0,children:[(0,i.jsx)(ee.RF,{}),(0,i.jsx)(ee.MN,{desaturate:!0}),(0,i.jsxs)(o.m0,{children:[(0,i.jsx)("div",{}),(0,i.jsx)(w.Tw,{onClick:j,style:{zIndex:99},stroke:"black"})]}),(0,i.jsx)(Cn,{children:C?(0,i.jsx)(w.M3,{width:"72px",src:G,alt:"UNI logo"}):(0,i.jsx)(w._1,{src:gn.Z,alt:"loader",size:"90px"})}),(0,i.jsxs)(B.Tz,{gap:"100px",justify:"center",children:[(0,i.jsxs)(B.Tz,{gap:"md",justify:"center",children:[(0,i.jsx)(w.Tv.DeprecatedLargeHeader,{fontWeight:535,color:"black",children:C?(0,i.jsx)(r.cC,{id:"hRWvpI"}):(0,i.jsx)(r.cC,{id:"KvG1xW"})}),!C&&(0,i.jsx)(un.xv,{fontSize:36,color:"#ff007a",fontWeight:535,children:(0,i.jsx)(r.cC,{id:"191ekK",values:{0:m?.toFixed(0,{groupSeparator:","}??"-")}})}),d&&(0,i.jsx)(w.Tv.DeprecatedLargeHeader,{fontWeight:535,color:"black",children:(0,i.jsx)(r.cC,{id:"PqfYW9",values:{0:(0,mn.Xn)(d)}})})]}),C&&(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(w.Tv.DeprecatedSubHeader,{fontWeight:535,color:"black",children:[(0,i.jsxs)("span",{role:"img","aria-label":"party-hat",children:["\ud83c\udf89"," "]}),(0,i.jsx)(r.cC,{id:"zArj19"}),(0,i.jsx)("span",{role:"img","aria-label":"party-hat",children:"\ud83c\udf89"})]})}),c&&!f&&(0,i.jsx)(w.Tv.DeprecatedSubHeader,{color:"black",children:(0,i.jsx)(r.cC,{id:"oG26Rt"})}),c&&f&&!C&&n&&f&&(0,i.jsx)(w.dL,{href:(0,y.E)(n,f,y.r.TRANSACTION),style:{zIndex:99},children:(0,i.jsx)(r.cC,{id:"yVxaEc"})})]})]})]})}var vn=n(22261);const zn=(0,x.default)(B.ZP).withConfig({displayName:"ConnectedAccountBlocked__ContentWrapper",componentId:"sc-be9117f-0"})`
  align-items: center;
  margin: 32px;
  text-align: center;
  font-size: 12px;
`;function kn(e){const t=(0,x.useTheme)();return(0,i.jsx)(De.Z,{isOpen:e.isOpen,onDismiss:Function.prototype(),children:(0,i.jsxs)(zn,{children:[(0,i.jsx)(vn.$,{size:"22px"}),(0,i.jsx)(w.Tv.DeprecatedLargeHeader,{lineHeight:2,marginBottom:1,marginTop:1,children:(0,i.jsx)(r.cC,{id:"c2y/7S"})}),(0,i.jsx)(w.Tv.DeprecatedDarkGray,{fontSize:12,marginBottom:12,children:e.account}),(0,i.jsxs)(w.Tv.DeprecatedMain,{fontSize:14,marginBottom:12,children:[(0,i.jsx)(r.cC,{id:"hycRWp"})," ",(0,i.jsx)(w.dL,{href:"https://help.uniswap.org/en/articles/6149816",children:(0,i.jsx)(r.cC,{id:"Tz0GSZ"})}),"."]}),(0,i.jsxs)(w.Tv.DeprecatedMain,{fontSize:12,children:[(0,i.jsx)(r.cC,{id:"WpREeE"})," "]}),(0,i.jsx)(w.WD,{toCopy:"compliance@uniswap.org",fontSize:14,iconSize:16,color:t.accent1,iconPosition:"right",children:"compliance@uniswap.org"})]})})}var Nn=n(78174);const An=["eth","eth_arbitrum","eth_optimism","eth_polygon","weth","wbtc","matic_polygon","polygon","usdc_arbitrum","usdc_optimism","usdc_polygon","usdc","usdt"];var Tn=n(58025),Sn=n(17487);const En=[pe.qo.Ethereum,pe.qo.Polygon,pe.qo.Arbitrum,pe.qo.Optimism],In={[pe.qo.Ethereum]:{[C.WETH9[C.ChainId.MAINNET]?.address.toLowerCase()]:"weth",[Tn.Hz.address.toLowerCase()]:"usdc",[Tn.AA.address.toLowerCase()]:"usdt",[Tn.ML.address.toLowerCase()]:"wbtc",[Tn.Al.address.toLowerCase()]:"polygon",native:"eth"},[pe.qo.Arbitrum]:{[Tn.pj.address.toLowerCase()]:"usdc_arbitrum",native:"eth_arbitrum"},[pe.qo.Optimism]:{[Tn.SP.address.toLowerCase()]:"usdc_optimism",native:"eth_optimism"},[pe.qo.Polygon]:{[Tn.QF.address.toLowerCase()]:"usdc_polygon",[Tn.H8.address.toLowerCase()]:"eth_polygon",native:"matic_polygon"}};function Rn(e,t){const n=(0,Sn.Qj)(t);if(!e||!n)return"eth";if(En.includes(n)){const t=In[n]?.[e.toLowerCase()];return t??"eth"}return"eth"}const Mn="#1c1c1e",_n=x.default.div.withConfig({displayName:"FiatOnrampModal__Wrapper",componentId:"sc-a6842f3-0"})`
  // #1c1c1e is the background color for the darkmode moonpay iframe as of 2/16/2023
  background-color: ${({isDarkMode:e,theme:t})=>e?Mn:t.white};
  border-radius: 20px;
  box-shadow: ${({theme:e})=>e.deprecated_deepShadow};
  display: flex;
  flex-flow: column nowrap;
  margin: 0;
  flex: 1 1;
  min-width: 375px;
  position: relative;
  width: 100%;
`,Dn=(0,x.default)(w.Tv.BodyPrimary).withConfig({displayName:"FiatOnrampModal__ErrorText",componentId:"sc-a6842f3-1"})`
  color: ${({theme:e})=>e.critical};
  margin: auto !important;
  text-align: center;
  width: 90%;
`,Ln=x.default.iframe.withConfig({displayName:"FiatOnrampModal__StyledIframe",componentId:"sc-a6842f3-2"})`
  // #1c1c1e is the background color for the darkmode moonpay iframe as of 2/16/2023
  background-color: ${({isDarkMode:e,theme:t})=>e?Mn:t.white};
  border-radius: 12px;
  bottom: 0;
  left: 0;
  height: calc(100% - 16px);
  margin: 8px;
  padding: 0;
  position: absolute;
  right: 0;
  top: 0;
  width: calc(100% - 16px);
`,On=(0,x.default)(w._1).withConfig({displayName:"FiatOnrampModal__StyledSpinner",componentId:"sc-a6842f3-3"})`
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
`;function Pn(){const{account:e}=(0,a.useWeb3React)(),t=(0,x.useTheme)(),n=(0,Nn.Gv)(),o=(0,F._x)(),s=(0,F.Wt)(X.Lk.FIAT_ONRAMP),{network:l,tokenAddress:c}=function(e){const t=e.split("/");return{network:t.length>2?t[t.length-2]:void 0,tokenAddress:t.length>2?t[t.length-1]:void 0}}(location.pathname),[p,u]=(0,h.useState)(null),[m,g]=(0,h.useState)(null),[f,y]=(0,h.useState)(!1),b=(0,d.oQ)("/swap"),C=(0,h.useCallback)((async()=>{if(e){y(!0),g(null);try{const i="https://us-central1-uniswap-mobile.cloudfunctions.net/signMoonpayLinkV2?platform=web&env=production",r=await fetch(i,{headers:{Accept:"application/json","Content-Type":"application/json"},method:"POST",body:JSON.stringify({theme:n?"dark":"light",colorCode:t.accent1,defaultCurrencyCode:Rn(c,l),redirectUrl:b,walletAddresses:JSON.stringify(An.reduce(((t,n)=>({...t,[n]:e})),{}))})}),{url:a}=await r.json();u(a)}catch(i){console.log("there was an error fetching the link",i),g(i.toString())}finally{y(!1)}}else g("Please connect an account before making a purchase.")}),[e,n,l,b,t.accent1,c]);return(0,h.useEffect)((()=>{C()}),[C]),(0,i.jsx)(De.Z,{isOpen:s,onDismiss:()=>o(),height:80,children:(0,i.jsx)(_n,{"data-testid":"fiat-onramp-modal",isDarkMode:n,children:m?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(w.Tv.MediumHeader,{children:(0,i.jsx)(r.cC,{id:"hn5VGM"})}),(0,i.jsxs)(Dn,{children:[(0,i.jsx)(r.cC,{id:"ywDBfs"}),(0,i.jsx)("br",{}),m]})]}):f?(0,i.jsx)(On,{src:gn.Z,alt:"loading spinner",size:"90px"}):(0,i.jsx)(Ln,{src:p??"",frameBorder:"0",title:"fiat-onramp-iframe",isDarkMode:n})})})}var Fn=n(57878);const Wn=(0,x.default)(B.ZP).withConfig({displayName:"UkDisclaimerModal__Wrapper",componentId:"sc-8f9673eb-0"})`
  padding: 8px;
`,Un=(0,x.default)(B.ZP).withConfig({displayName:"UkDisclaimerModal__ButtonContainer",componentId:"sc-8f9673eb-1"})`
  padding: 8px 12px 4px;
`,Bn=(0,x.default)(w.oD).withConfig({displayName:"UkDisclaimerModal__CloseIconWrapper",componentId:"sc-8f9673eb-2"})`
  display: flex;
  color: ${({theme:e})=>e.neutral1};
  justify-content: flex-end;
  padding: 8px 0px 4px;

  :focus {
    text-decoration: none;
  }
`,Hn=(0,x.default)($.UH).withConfig({displayName:"UkDisclaimerModal__StyledThemeButton",componentId:"sc-8f9673eb-3"})`
  width: 100%;
`;function qn(){const e=(0,F.Wt)(X.Lk.UK_DISCLAIMER),t=(0,F._x)();return(0,i.jsx)(De.Z,{isOpen:e,onDismiss:t,children:(0,i.jsxs)(Wn,{gap:"md",children:[(0,i.jsx)(Bn,{onClick:()=>t(),children:(0,i.jsx)(H.Z,{size:24})}),(0,i.jsxs)(B.ZP,{gap:"sm",children:[(0,i.jsx)(w.Tv.HeadlineLarge,{padding:"0px 8px",fontSize:"24px",lineHeight:"32px",children:(0,i.jsx)(r.cC,{id:"mCcDO+"})}),(0,i.jsx)(w.Tv.BodyPrimary,{padding:"8px 8px 12px",lineHeight:"24px",children:Fn.Fb})]}),(0,i.jsx)(Un,{gap:"md",children:(0,i.jsx)(Hn,{size:$.qE.large,emphasis:$.eI.medium,onClick:()=>t(),children:(0,i.jsx)(r.cC,{id:"1QfxQT"})})})]})})}var Vn=n(46839),Qn=n(5967),Jn=n(67621),Zn=n(86333),Yn=n(34063);const Gn=x.default.div.withConfig({displayName:"DevFlagsBox__Box",componentId:"sc-16c269a1-0"})`
  position: fixed;
  bottom: 20px;
  left: 20px;
  background-color: ${({theme:e})=>e.surface1};
  padding: 10px;
  border: 1px solid ${({theme:e})=>e.accent1};
  z-index: 1000;

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    bottom: 70px;
  }
`,Xn=x.default.div.withConfig({displayName:"DevFlagsBox__TopBar",componentId:"sc-16c269a1-1"})`
  display: flex;
  justify-content: space-between;
`,Kn=(e,t)=>{const n=(0,Zn.useGate)(e);if(n){const{value:r}=n,a=t[e],o=a===Vn.Wn.Enabled;if(a&&r!==o)return(0,i.jsxs)(w.Tv.LabelSmall,{children:[e,": ",a]},e)}return null},$n=(e,t)=>{const n=(0,Qn.A)(e);if(n){const r=n.getValue(),a=t[e];if(a&&r!==a)return(0,i.jsxs)(w.Tv.LabelSmall,{children:[e,": ",JSON.stringify(a[e])]},e)}return null};function ei(){const e=(0,Jn.Dv)(Vn.Kd),t=(0,h.useMemo)((()=>Object.values(Vn.TT)),[]),n=(0,Jn.Dv)(Vn.zp),r=(0,h.useMemo)((()=>Object.values(Qn.X)),[]),a=t.map((t=>Kn(t,e)));r.forEach((e=>a.push($n(e,n))));const o=a.some((e=>null!==e)),[s,l]=(0,h.useState)(!0);return(0,i.jsxs)(Gn,{children:[(0,i.jsxs)(Xn,{onClick:()=>l((e=>!e)),children:[s?"\ud83d\ude3a\ud83d\udc47":"\ud83d\ude3f\u261d\ufe0f",s&&(0,i.jsxs)(w.Tv.SubHeader,{children:[(0,Yn.mb)()&&"Staging build overrides",(0,Yn.aD)()&&"Development build overrides"]})]}),s&&(o?a:(0,i.jsx)(w.Tv.LabelSmall,{children:"No overrides"}))]})}var ti=n(63498);var ni=n(17790),ii=n(69867),ri=n(56878),ai=n(60120),oi=n(55867),si=n(2994),li=n(54212),di=n(17669),ci=n(5658),pi=n(1004),hi=n(12113),ui=n(43922),mi=(n(98303),"hwks9j7 rgw6ezd9 rgw6ez4b9 rgw6ezbl rgw6ezpr rgw6ezv9 rgw6ezvl rgw6ezfx rgw6ezfm"),gi="hwks9jm rgw6ezb9 rgw6ez4bf rgw6ezvr rgw6ezf3",fi="hwks9jy rgw6ez4bf rgw6ezb3 rgw6ezl3";const xi=x.default.a.withConfig({displayName:"TransactionCompleteModal__UploadLink",componentId:"sc-4f2b79f0-0"})`
  position: absolute;
  right: 32px;
  top: 32px;
  color: ${({theme:e})=>e.neutral2};
  cursor: pointer;

  ${jt.c}

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    right: 12px;
    top: 28px;
  }
`;var wi=()=>{const e=(0,ci.$N)(),{formatEther:t,formatNumberOrString:n}=(0,fe.Gb)(),[a,o]=(0,h.useState)(!1),s=(0,ci.pQ)((e=>e.txHash)),l=(0,ci.pQ)((e=>e.purchasedWithErc20)),d=(0,ci.pQ)((e=>e.setState)),c=(0,ci.pQ)((e=>e.state)),p=(0,h.useRef)(c),u=(0,ci.JC)((e=>e.transactionResponse)),m=(0,ci.JC)((e=>e.setTransactionResponse)),g=(0,ci.dD)(),f=(0,y.E)(1,s,y.r.TRANSACTION),x=(c===pi.c$.Success||c===pi.c$.Failed)&&c,w=(0,_e.oO)({modal:Me.KO.NFT_TX_COMPLETE}),{nftsPurchased:b,nftsNotPurchased:C,showPurchasedModal:j,showRefundModal:v,totalPurchaseValue:z,totalRefundValue:k,totalUSDRefund:N,txFeeFiat:A}=(0,h.useMemo)((()=>(0,hi.lb)(u,e)),[u,e]);function T(){m({}),d(pi.c$.New)}(0,h.useEffect)((()=>{ci.pQ.subscribe((e=>p.current=e.state))}),[]);return(0,i.jsx)(i.Fragment,{children:x&&(0,i.jsxs)(oi.h,{children:[(0,i.jsx)(li.a,{onClick:T}),(0,i.jsxs)(ai.n,{className:"hwks9j1 rgw6ez2dr rgw6ez2j9 rgw6ez2rf rgw6ez2ax rgw6ez44r rgw6ez48r rgw6ez1dr rgw6ez16r rgw6ez16y rgw6ez343 rgw6ez394 rgw6ez3f3 rgw6ez3rl rgw6ez8bp",onClick:T,children:[j&&(0,i.jsx)(_e.fM,{name:Me.Yz.NFT_BUY_BAG_SUCCEEDED,properties:{buy_quantity:b.length,usd_value:parseFloat((0,ii.formatEther)(z))*e,transaction_hash:s,using_erc20:l,...(0,ui.H)(b),...w},shouldLogImpression:!0,children:(0,i.jsxs)(ai.n,{className:"hwks9j3 rgw6ez4qf rgw6ez819 rgw6ez44r rgw6ez443 rgw6ez1dx rgw6ez48x rgw6ez16r rgw6ez16y rgw6ez2pr rgw6ez2ps rgw6ez299 rgw6ez29a",onClick:li.U,children:[(0,i.jsx)(kt.jS,{color:di.gR.color.pink400,width:"36",height:"36",className:"rgw6ez48l rgw6ez359 rgw6ez36g rgw6ez3gl rgw6ez3gy"}),(0,i.jsxs)(ai.n,{display:"flex",flexWrap:"wrap",width:"full",height:"min",children:[(0,i.jsx)("h1",{className:mi,children:(0,i.jsx)(r.cC,{id:"6Mjzfq"})}),(0,i.jsx)("p",{className:"hwks9jd rgw6ez4b9 rgw6ezb9 rgw6ez16r rgw6ez469 rgw6ezpr rgw6ezv9 rgw6ezvl rgw6ezgx",children:(0,i.jsx)(r.cC,{id:"utdv8e"})})]}),(0,i.jsx)(xi,{onClick:()=>{window.open((0,hi.fj)(b,f),"newwindow",`left=${(window.screen.width-560)/2}, top=${(window.screen.height-480)/2}, width=560, height=480`)},target:"_blank",children:(0,i.jsx)(kt.Zm,{width:32,height:32,color:di.Z4.colors.neutral2})}),(0,i.jsx)(ai.n,{className:"hwks9jf rgw6ez44r rgw6ez443 rgw6ez16r rgw6ez8bp rgw6ez47l",style:{maxHeight:b.length>32?g?"172px":"292px":"min-content"},children:[...b].map(((e,t)=>(0,i.jsx)("img",{className:(0,ri.default)("hwks9jh rgw6ez80x rgw6ez3xr",b.length>1&&"rgw6ezql rgw6ezqy rgw6ezfl rgw6ezfy"),style:{maxHeight:`${(0,hi.QP)(b.length,g)}px`,maxWidth:`${(0,hi.QP)(b.length,g)}px`},src:e.imageUrl,alt:e.name},t)))}),b.length>32&&(0,i.jsx)(ai.n,{className:"hwks9jk"}),(0,i.jsxs)(ai.n,{display:"flex",width:"full",height:"min",flexDirection:"row",marginTop:{sm:"20",md:"20"},flexWrap:{sm:"wrap",md:"nowrap"},alignItems:"center",paddingRight:"40",paddingLeft:"40",className:"rgw6ez4b9 rgw6ezb9",justifyContent:"space-between",children:[(0,i.jsxs)(si.X2,{children:[(0,i.jsxs)(ai.n,{marginRight:"16",children:[b.length," NFT",1===b.length?"":"s"]}),(0,i.jsxs)(ai.n,{children:[t({input:z.toString(),type:fe.sw.NFTToken})," ","ETH"]})]}),(0,i.jsx)("a",{href:f,target:"_blank",rel:"noreferrer",style:{textDecoration:"none"},children:(0,i.jsx)(ai.n,{color:"neutral2",fontWeight:"book",children:(0,i.jsx)(r.cC,{id:"rd4eHq"})})})]})]})}),v&&(j?(0,i.jsx)(_e.fM,{name:Me.Yz.NFT_BUY_BAG_REFUNDED,properties:{buy_quantity:b.length,fail_quantity:C.length,refund_amount_usd:N,transaction_hash:s,...w},shouldLogImpression:!0,children:(0,i.jsxs)(ai.n,{className:"hwks9js rgw6ez4qf rgw6ez819 rgw6ez44r rgw6ez443 rgw6ez2pl rgw6ez2py rgw6ez2jl rgw6ez2k4 rgw6ez2el rgw6ez2ey rgw6ez1dx rgw6ez16r rgw6ez16y rgw6ez48x rgw6ezwf",onClick:li.U,children:[(0,i.jsxs)(ai.n,{display:"inline-flex",flexWrap:"wrap",width:{sm:"full",md:"half"},paddingRight:{sm:"0",md:"32"},children:[(0,i.jsx)(kt.YG,{color:"pink"}),(0,i.jsx)("p",{className:"hwks9ju rgw6ez4b9 rgw6ezd9 rgw6ezbf rgw6ezl3 rgw6ezv9 rgw6ezf3 rgw6ezka",children:"Instant Refund"}),(0,i.jsxs)("p",{className:"hwks9jw rgw6ez4b9 rgw6ezb9 rgw6ezpr rgw6ezv9 rgw6ezwl rgw6ezgl rgw6ez16r",children:["Uniswap returned"," ",(0,i.jsxs)("span",{style:{fontWeight:"535"},children:[t({input:k.toString(),type:fe.sw.NFTToken})," ","ETH"]})," ","back to your wallet for unavailable items."]}),(0,i.jsxs)(ai.n,{display:"flex",flexWrap:"wrap",bottom:"24",width:"full",alignSelf:"flex-end",position:{sm:"absolute",md:"static"},children:[(0,i.jsxs)("p",{className:gi,style:{marginBottom:"2px"},children:[t({input:k.toString(),type:fe.sw.NFTToken})," ","ETH"]}),(0,i.jsx)("p",{className:fi,children:n({input:N,type:fe.sw.FiatNFTToken})}),(0,i.jsxs)("p",{className:gi,style:{width:"100%"},children:["for ",C.length," unavailable item",1===C.length?"":"s","."]}),(0,i.jsx)(ai.n,{position:{sm:"absolute",md:"relative"},right:{sm:"0",md:"auto"},bottom:{sm:"0",md:"auto"},justifyContent:{sm:"flex-end",md:"flex-start"},textAlign:{sm:"right",md:"left"},flexShrink:"0",marginRight:{sm:"40",md:"24"},width:{sm:"half",md:"auto"},children:(0,i.jsx)("a",{href:f,target:"_blank",rel:"noreferrer",style:{textDecoration:"none"},children:(0,i.jsx)(ai.n,{fontWeight:"book",marginTop:"16",color:"neutral2",className:gi,children:"View on Etherscan"})})})]})]}),(0,i.jsx)(ai.n,{className:"hwks9j10 rgw6ez1dx rgw6ez1ds rgw6ez16r rgw6ez16m rgw6ez443 rgw6ez8bp rgw6ez46x rgw6ez44x rgw6ez2e4",children:C.map(((e,t)=>(0,i.jsx)(ai.n,{display:"flex",flexWrap:"wrap",height:"min",width:"52",children:(0,i.jsx)("img",{className:"hwks9j12 rgw6ez1ax rgw6ez13x rgw6ez80p rgw6ezql rgw6ezf9",src:e.imageUrl,alt:e.name},t)},t)))}),(0,i.jsx)(ai.n,{className:"hwks9j14 rgw6ez16r rgw6ez16m rgw6ezpr rgw6ez3q3"})]})}):(0,i.jsx)(_e.fM,{name:Me.Yz.NFT_BUY_BAG_REFUNDED,properties:{buy_quantity:0,fail_quantity:C.length,refund_amount_usd:N,...w},shouldLogImpression:!0,children:(0,i.jsxs)(ai.n,{className:"hwks9j16 rgw6ez4qf rgw6ez819 rgw6ez44r rgw6ez443 rgw6ezv9 rgw6ez469 rgw6ezpr rgw6ezoy rgw6ez2vf rgw6ez1dx",onClick:li.U,children:[(0,i.jsx)(ai.n,{marginLeft:"auto",marginRight:"auto",display:"flex",children:c===pi.c$.Success?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(kt.YG,{}),(0,i.jsx)("h1",{className:mi,children:"Instant Refund"})]}):(0,i.jsx)("h1",{className:mi,children:"Failed Transaction"})}),(0,i.jsxs)("p",{className:"hwks9j1c rgw6ez4b9 rgw6ezb9 rgw6ezpr rgw6ezv9 rgw6ezw3",children:[c===pi.c$.Success&&`Selected item${1===b.length?" is":"s are"} no longer available. Uniswap instantly refunded you for this incomplete transaction. `,n({input:A,type:fe.sw.FiatNFTToken})," was used for gas in attempt to complete this transaction. For support, please visit our"," ",(0,i.jsx)("a",{href:"https://discord.gg/FCfyBSbCU5",children:"Discord"})]}),(0,i.jsxs)(ai.n,{className:"hwks9j1e rgw6ez16r",children:[C.length>=3&&(0,i.jsxs)(ai.n,{className:"rgw6ez6rr rgw6ez80p rgw6ez44r rgw6ez443 rgw6ezvr rgw6ezf9 rgw6ez1ax rgw6ez7zd",onClick:()=>{o(!a)},children:[!a&&(0,i.jsx)(ai.n,{paddingLeft:"20",paddingTop:"8",paddingBottom:"8",children:C.slice(0,3).map(((e,t)=>(0,i.jsx)("img",{style:{zIndex:2-t},className:"hwks9j1j rgw6ez80l rgw6ez1a3 rgw6ez133 rgw6ez48x",src:e.imageUrl,alt:e.name},t)))}),(0,i.jsxs)(ai.n,{color:a?"neutral1":"neutral2",className:"hwks9j1l rgw6ez4bf rgw6ezd3 rgw6ezb9 rgw6ez2of rgw6ez27x rgw6ez2dr",children:["Unavailable",(0,i.jsxs)(ai.n,{className:"hwks9j1n rgw6ezd3 rgw6ezb3 rgw6ez44r",children:[C.length," item",1===C.length?"":"s"]})]}),(0,i.jsx)(kt.g8,{className:`${!a&&"hwks9j1t"} hwks9j1s rgw6ezk9 rgw6ezkl rgw6ezv9 rgw6ez199 rgw6ez129`})]}),(a||C.length<3)&&C.map(((e,n)=>(0,i.jsxs)(ai.n,{backgroundColor:"surface1",display:"flex",padding:"4",marginBottom:"1",borderRadius:"8",children:[(0,i.jsx)(ai.n,{className:"hwks9j1o",children:(0,i.jsx)("img",{className:"hwks9j1q rgw6ez80l rgw6ez1er rgw6ez1v3 rgw6ez17r rgw6ez1h3 rgw6ez49f",src:e.imageUrl,alt:e.name})}),(0,i.jsxs)(ai.n,{flexWrap:"wrap",marginTop:"4",children:[(0,i.jsx)(ai.n,{marginLeft:"4",width:"full",display:"flex",children:(0,i.jsxs)("p",{className:gi,style:{marginBottom:"2px"},children:[t({input:e.updatedPriceInfo?e.updatedPriceInfo.ETHPrice:e.priceInfo.ETHPrice,type:fe.sw.NFTToken})," ","ETH"]})}),(0,i.jsx)(ai.n,{color:"neutral1",className:fi,children:c===pi.c$.Success?"Refunded":e.name})]})]},n)))]}),a&&(0,i.jsx)(ai.n,{className:"hwks9j1f"}),(0,i.jsxs)("p",{className:gi,style:{marginBottom:"2px"},children:[t({input:k.toString(),type:fe.sw.NFTToken})," ","ETH"]}),(0,i.jsx)("p",{className:fi,children:n({input:N,type:fe.sw.FiatNFTToken})}),(0,i.jsx)(ai.n,{className:"hwks9j9 rgw6ez4bf rgw6ezax rgw6ez44r rgw6ez3x rgw6ez1dx rgw6ez3b3",marginLeft:"auto",marginRight:"0",children:(0,i.jsx)("a",{href:f,target:"_blank",rel:"noreferrer",children:(0,i.jsx)(ai.n,{className:"hwks9jb rgw6ez4bf rgw6ezax rgw6ezd3 rgw6ezw3",children:"View on Etherscan"})})}),(0,i.jsxs)("p",{className:gi,children:["for ",C.length," unavailable item",1===C.length?"":"s","."]}),(0,i.jsxs)(ai.n,{as:"button",border:"none",backgroundColor:"accent1",cursor:"pointer",className:"hwks9j18 rgw6ez1a9 rgw6ez469 rgw6ezd9 rgw6ezb9 rgw6ez4df rgw6ez6sl rgw6ez44r rgw6ez3x rgw6ezpr rgw6ezv9 rgw6ezwl",type:"button",onClick:()=>T(),children:[(0,i.jsx)(kt.pf,{className:"rgw6ez7mr rgw6ezlr rgw6ezs9"}),"Return to Marketplace"]})]})}))]})]})})};function yi(){const e=(0,F.Wt)(X.Lk.ADDRESS_CLAIM),t=(0,F.xk)(X.Lk.ADDRESS_CLAIM),n=(0,F.Wt)(X.Lk.BLOCKED_ACCOUNT),{account:r}=(0,a.useWeb3React)();!function(e){const t=(0,ti.T)();(0,h.useEffect)((()=>{if(e){const n=`risk-check-${e}`,i=Date.now();try{const r=localStorage.getItem(n);if((r?parseInt(r):i-1)<Date.now()){const n=new Headers({"Content-Type":"application/json"});fetch("https://api.uniswap.org/v1/screen",{method:"POST",headers:n,body:JSON.stringify({address:e})}).then((e=>e.json())).then((e=>{e.block&&t((0,X.i3)(X.Lk.BLOCKED_ACCOUNT))})).catch((()=>{t((0,X.i3)(null))}))}}finally{localStorage.setItem(n,(i+f()("1d")).toString())}}}),[e,t])}(r);const o=Boolean(n&&r),s=(0,Yn.aD)()||(0,Yn.mb)();return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(jn,{isOpen:e,onDismiss:t}),(0,i.jsx)(kn,{account:r,isOpen:o}),(0,i.jsx)(ni.ZP,{}),(0,i.jsx)(ft,{}),(0,i.jsx)(pn,{}),(0,i.jsx)(oe.Cl,{}),(0,i.jsx)(wi,{}),(0,i.jsx)(Xt,{}),(0,i.jsx)(Pn,{}),(0,i.jsx)(qn,{}),s&&(0,i.jsx)(ei,{})]})}function bi(){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(Ie,{}),(0,i.jsx)(P,{}),(0,i.jsx)(yi,{})]})}}}]);
//# sourceMappingURL=6681.b4f1501e.chunk.js.map