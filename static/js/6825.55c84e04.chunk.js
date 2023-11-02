"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[6825],{64850:function(e,t,n){n.d(t,{m:function(){return a}});var i=n(42893);const a=e=>(0,i.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:(0,i.jsx)("path",{d:"M13 4.99092C13 4.09592 14.094 3.66096 14.709 4.31196L20.637 10.582C21.121 11.094 21.121 11.894 20.637 12.406L14.709 18.676C14.094 19.326 13 18.891 13 17.997V14.4919C5.437 14.4919 4.93602 16.962 4.96802 19.529C4.97402 20.019 4.32501 20.1811 4.08301 19.7561C3.46701 18.6751 3 17.1999 3 15.4909C3 8.99592 10 8.49702 13 8.49702V4.99092Z",fill:"#9B9B9B"})})},13352:function(e,t,n){const i=n(87253).default.button.withConfig({displayName:"FilterOption",componentId:"sc-f01a2a07-0"})`
  height: 100%;
  color: ${({theme:e,active:t})=>e.neutral1};
  background-color: ${({theme:e,active:t})=>e.surface1};
  margin: 0;
  padding: 6px 6px 6px 14px;
  border-radius: 12px;
  font-size: 16px;
  line-height: 24px;
  font-weight: 535;
  transition-duration: ${({theme:e})=>e.transition.duration.fast};
  border: 1px solid ${({theme:e})=>e.surface3};
  outline: ${({theme:e,active:t,highlight:n})=>t&&n?`1px solid ${e.accent1}`:"none"};

  :hover {
    cursor: pointer;
    background-color: ${({theme:e,active:t})=>t?e.accent2:e.surface2};
    opacity: ${({theme:e,active:t})=>t?e.opacity.hover:1};
  }
  :focus {
    background-color: ${({theme:e,active:t})=>t?e.surface2:e.surface3};
  }
`;t.Z=i},1670:function(e,t,n){n.d(t,{W9:function(){return w},ZP:function(){return _},rD:function(){return C}});var i=n(42893),a=n(12204),o=n(11569),r=n(17487),s=n(55338),d=n(30719),c=n(13712),l=n(96315),h=n(83931),u=n(29304),p=n(56564),m=n(13120),x=n(87253),f=n(35458),g=n(86403),y=n(13352);const C={[r.XH.HOUR]:"1H",[r.XH.DAY]:"1D",[r.XH.WEEK]:"1W",[r.XH.MONTH]:"1M",[r.XH.YEAR]:"1Y"},w=[r.XH.HOUR,r.XH.DAY,r.XH.WEEK,r.XH.MONTH,r.XH.YEAR],j=x.default.div.withConfig({displayName:"TimeSelector__InternalMenuItem",componentId:"sc-5b10af64-0"})`
  flex: 1;
  padding: 8px;
  color: ${({theme:e})=>e.neutral1};
  border-radius: 8px;

  :hover {
    cursor: pointer;
    text-decoration: none;
  }
`,v=(0,x.default)(j).withConfig({displayName:"TimeSelector__InternalLinkMenuItem",componentId:"sc-5b10af64-1"})`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px 8px;
  justify-content: space-between;
  text-decoration: none;
  cursor: pointer;

  :hover {
    background-color: ${({theme:e})=>e.surface3};
    text-decoration: none;
  }
`,k=x.default.span.withConfig({displayName:"TimeSelector__MenuTimeFlyout",componentId:"sc-5b10af64-2"})`
  min-width: ${({isInfoExplorePageEnabled:e})=>e?"150px":"240px"};
  max-height: 300px;
  overflow: auto;
  background-color: ${({theme:e})=>e.surface1};
  box-shadow: ${({theme:e})=>e.deprecated_deepShadow};
  border: 0.5px solid ${({theme:e})=>e.surface3};
  border-radius: 12px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  font-size: 16px;
  position: absolute;
  top: 48px;
  z-index: 100;
  left: 0px;

  ${({isInfoExplorePageEnabled:e})=>!e&&x.css`
      @media only screen and (max-width: ${f.T1}) {
        left: unset;
        right: 0px;
      }
    `}
`,b=x.default.div.withConfig({displayName:"TimeSelector__StyledMenu",componentId:"sc-5b10af64-3"})`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border: none;
  text-align: left;

  ${({isInfoExplorePageEnabled:e})=>!e&&x.css`
      @media only screen and (max-width: ${f.QD}) {
        width: 72px;
      }
    `}
`,T=x.default.div.withConfig({displayName:"TimeSelector__StyledMenuContent",componentId:"sc-5b10af64-4"})`
  display: flex;
  justify-content: space-between;
  gap: 8px;
  align-items: center;
  border: none;
  width: 100%;
  vertical-align: middle;
  ${({isInfoExplorePageEnabled:e})=>e&&"white-space: nowrap;"}
`,I=x.default.span.withConfig({displayName:"TimeSelector__Chevron",componentId:"sc-5b10af64-5"})`
  padding-top: 1px;
  color: ${({open:e,theme:t})=>e?t.neutral1:t.neutral2};
`;function _(){const e=(0,x.useTheme)(),t=(0,c.useRef)(null),n=(0,p.Wt)(m.Lk.TIME_SELECTOR),r=(0,p.xk)(m.Lk.TIME_SELECTOR);(0,s.t)(t,n?r:void 0);const[f,j]=(0,d.KO)(g.X3),_=(0,o.C)();return(0,i.jsxs)(b,{ref:t,isInfoExplorePageEnabled:_,children:[(0,i.jsx)(y.Z,{onClick:r,"aria-label":"timeSelector",active:n,"data-testid":"time-selector",children:(0,i.jsxs)(T,{isInfoExplorePageEnabled:_,children:[_?(0,i.jsxs)(i.Fragment,{children:[C[f]," ",(0,i.jsx)(a.cC,{id:"94M5XH"})]}):C[f],(0,i.jsx)(I,{open:n,children:n?(0,i.jsx)(l.Z,{width:20,height:15,viewBox:"0 0 24 20"}):(0,i.jsx)(h.Z,{width:20,height:15,viewBox:"0 0 24 20"})})]})}),n&&(0,i.jsx)(k,{isInfoExplorePageEnabled:_,children:w.map((t=>(0,i.jsxs)(v,{"data-testid":C[t],onClick:()=>{j(t),r()},children:[_?(0,i.jsxs)("div",{children:[C[t]," ",(0,i.jsx)(a.cC,{id:"94M5XH"})]}):(0,i.jsx)("div",{children:C[t]}),t===f&&(0,i.jsx)(u.Z,{color:e.accent1,size:16})]},C[t])))})]})}},6825:function(e,t,n){n.r(t),n.d(t,{default:function(){return Ft},pageTimePeriodAtom:function(){return zt}});var i=n(42893),a=n(12204),o=n(19903),r=n(80815),s=n(66196),d=n(90315),c=n(81223),l=n(87253),h=n(39839);const u=l.default.div.withConfig({displayName:"AddressSection__ContractAddressSection",componentId:"sc-fe4f50e6-0"})`
  display: flex;
  flex-direction: column;
  color: ${({theme:e})=>e.neutral2};
  font-size: 0.9em;
  gap: 4px;
  padding: 4px 0px;
`,p=l.default.button.withConfig({displayName:"AddressSection__ContractAddress",componentId:"sc-fe4f50e6-1"})`
  display: flex;
  color: ${({theme:e})=>e.neutral1};
  gap: 10px;
  align-items: center;
  background: transparent;
  border: none;
  min-height: 38px;
  padding: 0px;
`;function m({address:e}){return(0,i.jsxs)(u,{children:[(0,i.jsx)(h.Tv.SubHeaderSmall,{children:(0,i.jsx)(a.cC,{id:"TPQ9LW"})}),(0,i.jsx)(p,{children:(0,i.jsx)(h.Qv,{address:e})})]})}var x=n(15387),f=n(68040),g=n(48141),y=n(95202),C=n(79847),w=n(13712),j=n(57482);const v=l.default.div.withConfig({displayName:"BalanceSummary__BalancesCard",componentId:"sc-6d9fd0fa-0"})`
  border-radius: 16px;
  color: ${({theme:e})=>e.neutral1};
  display: none;
  height: fit-content;
  padding: 16px;
  width: 100%;

  // 768 hardcoded to match NFT-redesign navbar breakpoints
  // src/nft/css/sprinkles.css.ts
  // change to match theme breakpoints when this navbar is updated
  @media screen and (min-width: 768px) {
    display: flex;
  }
`,k=l.default.div.withConfig({displayName:"BalanceSummary__BalanceSection",componentId:"sc-6d9fd0fa-1"})`
  height: fit-content;
  width: 100%;
`,b=l.default.div.withConfig({displayName:"BalanceSummary__BalanceRow",componentId:"sc-6d9fd0fa-2"})`
  align-items: center;
  display: flex;
  flex-direction: row;
  margin-top: 12px;
`,T=l.default.div.withConfig({displayName:"BalanceSummary__BalanceItem",componentId:"sc-6d9fd0fa-3"})`
  display: flex;
  align-items: center;
`,I=l.default.div.withConfig({displayName:"BalanceSummary__BalanceContainer",componentId:"sc-6d9fd0fa-4"})`
  display: flex;
  flex-direction: column;
  margin-left: 8px;
  flex: 1;
`,_=l.default.div.withConfig({displayName:"BalanceSummary__BalanceAmountsContainer",componentId:"sc-6d9fd0fa-5"})`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`,S=l.default.div.withConfig({displayName:"BalanceSummary__StyledNetworkLabel",componentId:"sc-6d9fd0fa-6"})`
  color: ${({color:e})=>e};
  font-size: 12px;
  line-height: 16px;
`;function N({token:e}){const{account:t,chainId:n}=(0,r.useWeb3React)(),o=(0,l.useTheme)(),{label:s,color:c}=(0,f.bt)((0,g.oG)(n)??x.ChainId.MAINNET),u=(0,C.ZP)(t,e),{formatCurrencyAmount:p}=(0,j.Gb)(),m=p({amount:u,type:j.sw.TokenNonTx}),N=p({amount:(0,y.sq)(u),type:j.sw.FiatTokenStats}),$=(0,w.useMemo)((()=>[e]),[e]);return t&&u?(0,i.jsx)(v,{children:(0,i.jsxs)(k,{children:[(0,i.jsx)(h.Tv.SubHeaderSmall,{color:o.neutral1,children:(0,i.jsx)(a.cC,{id:"n3wXA/",values:{label:s}})}),(0,i.jsxs)(b,{children:[(0,i.jsx)(d.V,{currencies:$,chainId:e.chainId,size:"2rem"}),(0,i.jsxs)(I,{children:[(0,i.jsxs)(_,{children:[(0,i.jsx)(T,{children:(0,i.jsxs)(h.Tv.SubHeader,{children:[m," ",e.symbol]})}),(0,i.jsx)(T,{children:(0,i.jsx)(h.Tv.BodyPrimary,{children:N})})]}),(0,i.jsx)(S,{color:c,children:s})]})]})]})}):null}var $=n(63148),A=n(4271),P=n(35225),E=n(17487),H=n(67621),L=n(56584),R=n(54236),B=n(45921),M=n(64521),O=n(47244),W=n(14045),D=n(11275),Z=n(55831),z=n.n(Z),F=n(68830);const U={duration:z()("0.8s"),easing:D.p4T};function V({data:e,getX:t,getY:n,marginTop:a,curve:o,color:r,strokeWidth:s}){const d=(0,w.useRef)(null),[c,h]=(0,w.useState)(0),[u,p]=(0,w.useState)(!1),[m,x]=(0,w.useState)(!1),f=(0,F.useSpring)({frame:u?0:1,config:U,onRest:()=>{p(!1),x(!0)}});(0,w.useEffect)((()=>{if(d.current){const e=d.current.getTotalLength();e!==c&&h(e),e>0&&!u&&!m&&p(!0)}}));const g=(0,l.useTheme)(),y=r??g.accent1;return(0,i.jsx)(O.Z,{top:a,children:(0,i.jsx)(W.Z,{curve:o,x:t,y:n,children:({path:t})=>{const n=t(e)||"";return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(F.animated.path,{d:n,ref:d,strokeWidth:s,strokeOpacity:m?1:0,fill:"none",stroke:y}),u&&0!==c&&(0,i.jsx)(F.animated.path,{d:n,strokeWidth:s,fill:"none",stroke:y,strokeDashoffset:f.frame.to((e=>e*c)),strokeDasharray:c})]})}})})}var X=w.memo(V);const Y={duration:3e3,easing:D.cCj};function K({data:e,getX:t,getY:n,marginTop:a,curve:o,color:r,strokeWidth:s,dashed:d}){const c=(0,w.useRef)(null),[h,u]=(0,w.useState)(0),[p,m]=(0,w.useState)(!1),[x,f]=(0,w.useState)(!1),g=(0,F.useSpring)({frame:p?0:1,config:Y,onRest:()=>{m(!1),f(!0)}});(0,w.useEffect)((()=>{if(c.current){const e=c.current.getTotalLength();e!==h&&u(e),e>0&&!p&&!x&&m(!0)}}));const y=(0,l.useTheme)(),C=r??y.accent1;return(0,i.jsx)(O.Z,{top:a,children:(0,i.jsx)(W.Z,{curve:o,x:t,y:n,children:({path:t})=>{const n=t(e)||"";return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(F.animated.path,{d:n,ref:c,strokeWidth:s,strokeOpacity:x?1:g.frame.to((e=>1-e)),fill:"none",stroke:C,strokeDasharray:d?"4,4":void 0})})}})})}var Q,G=w.memo(K),q=n(91443);!function(e){e[e.NO_DATA_AVAILABLE=0]="NO_DATA_AVAILABLE",e[e.NO_RECENT_VOLUME=1]="NO_RECENT_VOLUME",e[e.INVALID_CHART=2]="INVALID_CHART"}(Q||(Q={}));const J={hour:"numeric",minute:"numeric",hour12:!0},ee={month:"short",day:"numeric",hour:"numeric",minute:"2-digit",hour12:!0};var te;!function(e){e.TICK="tick",e.CROSSHAIR="crosshair"}(te||(te={}));const ne={[E.XH.HOUR]:{[te.TICK]:J,[te.CROSSHAIR]:ee},[E.XH.DAY]:{[te.TICK]:J,[te.CROSSHAIR]:ee},[E.XH.WEEK]:{[te.TICK]:{weekday:"long"},[te.CROSSHAIR]:ee},[E.XH.MONTH]:{[te.TICK]:{month:"long",day:"numeric"},[te.CROSSHAIR]:ee},[E.XH.YEAR]:{[te.TICK]:{month:"long"},[te.CROSSHAIR]:{month:"short",year:"numeric",day:"numeric"}}};function ie(e,t,n){const i=ne[e][n],a=new Intl.DateTimeFormat(t,i);return e=>{const t=1e3*e.valueOf();return a.format(t)}}var ae=n(65647),oe=n(44455),re=n(7178),se=n(47371),de=n(86682);const ce={top:100,bottom:48,crosshair:72},le=l.default.div.withConfig({displayName:"PriceChart__ChartHeaderWrapper",componentId:"sc-dab2ea9a-0"})`
  position: absolute;
  ${se.Sj};
  animation-duration: ${({theme:e})=>e.transition.duration.medium};
  ${({theme:e,stale:t})=>t&&`color: ${e.neutral2}`};
`,he=l.default.div.withConfig({displayName:"PriceChart__PriceContainer",componentId:"sc-dab2ea9a-1"})`
  display: flex;
  gap: 6px;
  font-size: 24px;
  line-height: 44px;
`,ue=l.default.div.withConfig({displayName:"PriceChart__DeltaContainer",componentId:"sc-dab2ea9a-2"})`
  height: 16px;
  display: flex;
  align-items: center;
  margin-top: 4px;
  color: ${({theme:e})=>e.neutral2};
`;function pe({startingPrice:e,endingPrice:t,noColor:n}){const a=(0,de.YD)(e.value,t.value),{formatDelta:o}=(0,j.Gb)();return(0,i.jsxs)(ue,{children:[o(a),(0,i.jsx)(de.Kx,{delta:a,noColor:n})]})}function me({crosshairPrice:e,chart:t}){const{formatFiatPrice:n}=(0,j.Gb)(),{startingPrice:o,endingPrice:r,lastValidPrice:s}=t,d=s!==r,c=e??(d?s:r),l=d&&!e;return(0,i.jsxs)(le,{"data-cy":"chart-header",stale:l,children:[(0,i.jsxs)(he,{children:[(0,i.jsx)(h.Tv.HeadlineLarge,{color:"inherit",children:n({price:c.value})}),l&&(0,i.jsx)(ae.ud,{text:(0,i.jsx)(a.cC,{id:"y9L4V6"}),children:(0,i.jsx)(re.Z,{size:16,"data-testid":"chart-stale-icon"})})]}),(0,i.jsx)(pe,{startingPrice:o,endingPrice:c,noColor:d})]})}function xe({chart:e,timePeriod:t}){const n=(0,oe.eQ)(),{prices:a,blanks:o,timeScale:r,priceScale:s,dimensions:d}=e,{ticks:c,tickTimestampFormatter:h,crosshairTimestampFormatter:u}=(0,w.useMemo)((()=>{const i=Math.floor(d.width/100);return{ticks:(0,q.fj)(e.startingPrice.timestamp,e.endingPrice.timestamp,t,i),tickTimestampFormatter:ie(t,n,te.TICK),crosshairTimestampFormatter:ie(t,n,te.CROSSHAIR)}}),[d.width,e.startingPrice.timestamp,e.endingPrice.timestamp,t,n]),p=(0,l.useTheme)(),[m,x]=(0,w.useState)(),f=(0,w.useCallback)((()=>x(void 0)),[x]),g=(0,w.useCallback)((e=>{const{x:t}=(0,R.Z)(e)||{x:0},n=(0,q.HM)(t,a,r);if(n){const e=r(n.timestamp),t=s(n.value);x({x:e,y:t,price:n})}}),[s,r,a]);(0,w.useEffect)((()=>f()),[f,t]);const y=.85*d.width,C=!!m&&m.x>y,j=t===E.XH.HOUR?1:.9,v=(0,w.useCallback)((e=>r(e.timestamp)),[r]),k=(0,w.useCallback)((e=>s(e.value)),[s]),b=(0,w.useMemo)((()=>D.YY7.tension(j)),[j]);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(me,{chart:e,crosshairPrice:m?.price}),(0,i.jsxs)("svg",{"data-cy":"price-chart",width:d.width,height:d.height,style:{minWidth:"100%"},children:[(0,i.jsx)(X,{data:a,getX:v,getY:k,marginTop:d.marginTop,curve:b,strokeWidth:2}),o.map(((e,t)=>(0,i.jsx)(G,{data:e,getX:v,getY:k,marginTop:d.marginTop,curve:b,strokeWidth:2,color:p.neutral3,dashed:!0},t))),void 0!==m?(0,i.jsxs)("g",{children:[(0,i.jsx)(L.Z,{top:d.height-1,scale:r,stroke:p.surface3,hideTicks:!0,tickValues:c,tickFormat:h,tickLabelProps:()=>({fill:p.neutral2,fontSize:12,textAnchor:"middle",transform:"translate(0 -29)"})}),(0,i.jsx)("text",{x:m.x+(C?-4:4),y:ce.crosshair+10,textAnchor:C?"end":"start",fontSize:12,fill:p.neutral2,children:u(m.price.timestamp)}),(0,i.jsx)(M.Z,{from:{x:m.x,y:ce.crosshair},to:{x:m.x,y:d.height},stroke:p.surface3,strokeWidth:1,pointerEvents:"none",strokeDasharray:"4,4"}),(0,i.jsx)(B.Z,{left:m.x,top:m.y+d.marginTop,size:50,fill:p.accent1,stroke:p.surface3,strokeWidth:.5})]}):(0,i.jsx)(L.Z,{hideAxisLine:!0,scale:r,stroke:p.surface3,top:d.height-1,hideTicks:!0}),!d.width&&(0,i.jsx)("line",{x1:0,y1:d.height-1,x2:"100%",y2:d.height-1,fill:"transparent",shapeRendering:"crispEdges",stroke:p.surface3,strokeWidth:1}),(0,i.jsx)("rect",{x:0,y:0,width:d.width,height:d.height,fill:"transparent",onTouchStart:g,onTouchMove:g,onMouseMove:g,onMouseLeave:f})]})]})}const fe={[Q.NO_DATA_AVAILABLE]:(0,i.jsx)(a.cC,{id:"g0qrI3"}),[Q.NO_RECENT_VOLUME]:(0,i.jsx)(a.cC,{id:"7OwMjb"}),[Q.INVALID_CHART]:(0,i.jsx)(a.cC,{id:"0WBcSC"})};function ge({chart:e}){const t=(0,l.useTheme)(),n=e.dimensions.height/2+45;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(le,{"data-cy":"chart-header",children:[(0,i.jsx)(h.Tv.HeadlineLarge,{fontSize:24,color:"neutral3",children:"Price unavailable"}),(0,i.jsx)(h.Tv.BodySmall,{color:"neutral3",children:fe[e.error]})]}),(0,i.jsx)("svg",{"data-cy":"missing-chart",width:e.dimensions.width,height:e.dimensions.height,style:{minWidth:"100%"},children:(0,i.jsx)("path",{d:`M 0 ${n} Q 104 ${n-70}, 208 ${n} T 416 ${n}\n          M 416 ${n} Q 520 ${n-70}, 624 ${n} T 832 ${n}`,stroke:t.surface3,fill:"transparent",strokeWidth:"2"})})]})}function ye({width:e,height:t,prices:n,timePeriod:a}){const o=(0,w.useMemo)((()=>function({dimensions:e,prices:t}){if(!t)return{error:Q.NO_DATA_AVAILABLE,dimensions:e};const n=e.height-e.marginTop-e.marginBottom;if(n<0)return{error:Q.INVALID_CHART,dimensions:e};const{prices:i,blanks:a,lastValidPrice:o}=(0,q.Bz)(t);if(i.length<2||!o)return{error:Q.NO_RECENT_VOLUME,dimensions:e};const r=t[0],s=t[t.length-1],{min:d,max:c}=(0,q.VC)(t);return{prices:i,startingPrice:r,endingPrice:s,lastValidPrice:o,blanks:a,timeScale:(0,D.BYU)().domain([r.timestamp,s.timestamp]).range([0,e.width]),priceScale:(0,D.BYU)().domain([d,c]).range([n,0]),dimensions:e,error:void 0}}({dimensions:{width:e,height:t,marginBottom:ce.bottom,marginTop:ce.top},prices:n})),[e,t,n]);return void 0!==o.error?(0,i.jsx)(ge,{chart:o}):(0,i.jsx)(xe,{chart:o,timePeriod:a})}var Ce=n(35458),we=n(1670);const je=l.default.div.withConfig({displayName:"TimeSelector__TimeOptionsWrapper",componentId:"sc-305d298a-0"})`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`,ve=l.default.div.withConfig({displayName:"TimeSelector__TimeOptionsContainer",componentId:"sc-305d298a-1"})`
  display: flex;
  justify-content: flex-end;
  margin-top: 4px;
  gap: 4px;
  border-radius: 16px;
  height: 40px;
  padding: 4px;
  width: fit-content;

  @media only screen and (max-width: ${Ce.Uw}) {
    width: 100%;
    justify-content: space-between;
    border: none;
  }
`,ke=l.default.button.withConfig({displayName:"TimeSelector__TimeButton",componentId:"sc-305d298a-2"})`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({theme:e,active:t})=>t?e.surface3:"transparent"};
  font-weight: 535;
  font-size: 16px;
  padding: 6px 12px;
  border-radius: 12px;
  line-height: 20px;
  border: none;
  cursor: pointer;
  color: ${({theme:e,active:t})=>t?e.neutral1:e.neutral2};
  transition-duration: ${({theme:e})=>e.transition.duration.fast};
  :hover {
    ${({active:e,theme:t})=>!e&&`opacity: ${t.opacity.hover};`}
  }
`;function be({currentTimePeriod:e,onTimeChange:t}){const[n,a]=(0,w.useState)(e);return(0,i.jsx)(je,{children:(0,i.jsx)(ve,{children:we.W9.map((e=>(0,i.jsx)(ke,{active:n===e,onClick:()=>{(0,w.startTransition)((()=>t(e))),a(e)},children:we.rD[e]},we.rD[e])))})})}function Te({tokenPriceQuery:e,onChangeTimePeriod:t}){return e?(0,i.jsx)(w.Suspense,{fallback:(0,i.jsx)(P.sT,{}),children:(0,i.jsx)(P.BO,{children:(0,i.jsx)(Ie,{tokenPriceQuery:e,onChangeTimePeriod:t})})}):(0,i.jsx)(P.sT,{})}function Ie({tokenPriceQuery:e,onChangeTimePeriod:t}){const n=(a=e,(0,w.useMemo)((()=>{const e=a.token?.market,t=e?.priceHistory?.filter(E.yL),n=e?.price?.value;if(Array.isArray(t)&&void 0!==n){const e=Date.now()/1e3;return[...t,{timestamp:e,value:n}]}return t}),[a]));var a;const o=(0,H.Dv)(zt);return(0,i.jsxs)(P.BO,{"data-testid":"chart-container",children:[(0,i.jsx)(A.Z,{children:({width:e})=>(0,i.jsx)(ye,{prices:n,width:e,height:392,timePeriod:o})}),(0,i.jsx)(be,{currentTimePeriod:o,onTimeChange:e=>{(0,w.startTransition)((()=>t(e)))}})]})}var _e=n(58025);const Se=l.default.div.withConfig({displayName:"MobileBalanceSummaryFooter__Wrapper",componentId:"sc-619f2185-0"})`
  align-content: center;
  align-items: center;
  border: 1px solid ${({theme:e})=>e.surface3};
  border-bottom: none;
  background-color: ${({theme:e})=>e.surface1};
  border-radius: 20px 20px 0px 0px;
  bottom: 52px;
  color: ${({theme:e})=>e.neutral2};
  display: flex;
  flex-direction: row;
  font-weight: 535;
  font-size: 14px;
  height: fit-content;
  justify-content: space-between;
  left: 0;
  line-height: 20px;
  padding: 12px 16px;
  position: fixed;
  width: 100%;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.md}px) {
    bottom: 0px;
  }
  @media screen and (min-width: ${({theme:e})=>e.breakpoint.lg}px) {
    display: none;
  }
`,Ne=l.default.div.withConfig({displayName:"MobileBalanceSummaryFooter__BalanceValue",componentId:"sc-619f2185-1"})`
  color: ${({theme:e})=>e.neutral1};
  font-size: 20px;
  line-height: 28px;
  display: flex;
  gap: 8px;
`,$e=l.default.div.withConfig({displayName:"MobileBalanceSummaryFooter__Balance",componentId:"sc-619f2185-2"})`
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 8px;
`,Ae=l.default.div.withConfig({displayName:"MobileBalanceSummaryFooter__BalanceInfo",componentId:"sc-619f2185-3"})`
  display: flex;
  flex: 10 1 auto;
  flex-direction: column;
  justify-content: flex-start;
`,Pe=l.default.span.withConfig({displayName:"MobileBalanceSummaryFooter__FiatValue",componentId:"sc-619f2185-4"})`
  font-size: 12px;
  line-height: 16px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.sm}px) {
    line-height: 24px;
  }
`,Ee=(0,l.default)(h.m_).withConfig({displayName:"MobileBalanceSummaryFooter__SwapButton",componentId:"sc-619f2185-5"})`
  background-color: ${({theme:e})=>e.accent1};
  border: none;
  border-radius: 12px;
  color: ${({theme:e})=>e.deprecated_accentTextLightPrimary};
  display: flex;
  flex: 1 1 auto;
  padding: 12px 16px;
  font-size: 1em;
  font-weight: 535;
  height: 44px;
  justify-content: center;
  margin: auto;
  max-width: 100vw;
`;function He({token:e}){const{account:t}=(0,r.useWeb3React)(),n=(0,C.ZP)(t,e),{formatCurrencyAmount:o}=(0,j.Gb)(),s=o({amount:n,type:j.sw.TokenNonTx}),d=o({amount:(0,y.sq)(n),type:j.sw.FiatTokenStats}),c=E.yC[e.chainId].toLowerCase();return(0,i.jsxs)(Se,{children:[Boolean(t&&n)&&(0,i.jsxs)(Ae,{children:[(0,i.jsx)(a.cC,{id:"xn9ewN",values:{0:e.symbol}}),(0,i.jsxs)($e,{children:[(0,i.jsxs)(Ne,{children:[s," ",e.symbol]}),(0,i.jsx)(Pe,{children:d})]})]}),(0,i.jsx)(Ee,{to:`/swap?chainName=${c}&outputCurrency=${e.isNative?_e.dt:e.address}`,children:(0,i.jsx)(a.cC,{id:"vH2C/2"})})]})}var Le=n(64850),Re=n(28156),Be=n(55338),Me=n(13678),Oe=n(77300),We=n(56564),De=n(13120),Ze=n(62878),ze=n(18030),Fe=n(437);const Ue=560,Ve=480,Xe=l.default.div.withConfig({displayName:"ShareButton__ShareButtonDisplay",componentId:"sc-32f6e930-0"})`
  display: flex;
  position: relative;
`,Ye=(0,l.default)(Le.m).withConfig({displayName:"ShareButton__Share",componentId:"sc-32f6e930-1"})`
  height: 24px;
  width: 24px;
  ${h.iV}
  ${({open:e,theme:t})=>e&&`opacity: ${t.opacity.click} !important`};
`,Ke=l.default.div.withConfig({displayName:"ShareButton__ShareActions",componentId:"sc-32f6e930-2"})`
  position: absolute;
  z-index: ${Fe.k.dropdown};
  width: 240px;
  top: 36px;
  right: 0px;
  justify-content: center;
  display: flex;
  flex-direction: column;
  overflow: auto;
  padding: 8px;
  background-color: ${({theme:e})=>e.surface1};
  border: 0.5px solid ${({theme:e})=>e.surface3};
  box-shadow: ${({theme:e})=>e.deprecated_deepShadow};
  border-radius: 12px;
`,Qe=l.default.div.withConfig({displayName:"ShareButton__ShareAction",componentId:"sc-32f6e930-3"})`
  display: flex;
  align-items: center;
  padding: 8px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 485;
  gap: 12px;
  height: 40px;
  color: ${({theme:e})=>e.neutral1};
  cursor: pointer;
  :hover {
    background-color: ${({theme:e})=>(0,ze.j)(10,e.darkMode?Ze.O9.gray200:Ze.O9.gray300)};
  }
`;function Ge({currency:e}){const t=(0,l.useTheme)(),n=(0,w.useRef)(null),o=(0,We.Wt)(De.Lk.SHARE),r=(0,We.xk)(De.Lk.SHARE);(0,Be.t)(n,o?r:void 0);const s=(window.screen.width-Ue)/2,d=(window.screen.height-Ve)/2,c=e.isNative?_e.dt:e.wrapped.address;(0,Re.Z)(o);const u=(0,w.useRef)(null);return(0,i.jsxs)(Xe,{ref:n,children:[(0,i.jsx)(Ye,{onClick:r,"aria-label":"ShareOptions",open:o}),o&&(0,i.jsxs)(Ke,{children:[(0,i.jsx)(Qe,{onClick:()=>u.current?.forceCopy(),children:(0,i.jsx)(h.WD,{InitialIcon:Me.Z,color:t.neutral1,iconPosition:"left",gap:12,toCopy:window.location.href,ref:u,children:(0,i.jsx)(a.cC,{id:"ENCIQz"})})}),(0,i.jsxs)(Qe,{onClick:()=>{r(),window.open(`https://twitter.com/intent/tweet?text=Check%20out%20${e.name}%20(${e.symbol})%20https://app.uniswap.org/%23/tokens/${(0,E.Ld)(e.chainId).toLowerCase()}/${c}%20via%20@uniswap`,"newwindow",`left=${s}, top=${d}, width=${Ue}, height=${Ve}`)},children:[(0,i.jsx)(Oe.Z,{color:t.neutral1,size:20,strokeWidth:1.5}),(0,i.jsx)(a.cC,{id:"uvt91Z"})]})]})]})}var qe=n(94556),Je=n(94220),et=n(77669),tt=n(34578),nt=n(84071),it=n(47096);const at=l.default.div.withConfig({displayName:"TokenSafetyMessage__Label",componentId:"sc-e122e2d8-0"})`
  width: 100%;
  padding: 12px 20px 16px;
  background-color: ${({backgroundColor:e})=>e};
  border-radius: 16px;
  border: 1px solid ${({theme:e})=>e.surface3};
  color: ${({color:e})=>e};
`,ot=l.default.div.withConfig({displayName:"TokenSafetyMessage__TitleRow",componentId:"sc-e122e2d8-1"})`
  align-items: center;
  font-weight: 535;
  display: inline-flex;
`,rt=(0,l.default)(it.xv).withConfig({displayName:"TokenSafetyMessage__Title",componentId:"sc-e122e2d8-2"})`
  font-weight: 535;
  font-size: 16px;
  line-height: 24px;
  margin-left: 7px;
`,st=l.default.div.withConfig({displayName:"TokenSafetyMessage__DetailsRow",componentId:"sc-e122e2d8-3"})`
  margin-top: 8px;
  font-size: 12px;
  line-height: 16px;
  color: ${({theme:e})=>e.neutral2};
`,dt=(0,l.default)(h.dL).withConfig({displayName:"TokenSafetyMessage__StyledLink",componentId:"sc-e122e2d8-4"})`
  color: ${({theme:e})=>e.accent1};

  font-weight: 535;
`;function ct({warning:e,tokenAddress:t}){const n=(0,et.g)(e.level),o=(0,et.A)(e.level),{heading:r,description:s}=(0,Je.N6)(e);return(0,i.jsxs)(at,{"data-cy":"token-safety-message",color:o,backgroundColor:n,children:[(0,Je._x)(e)&&(0,i.jsxs)(ot,{children:[e.canProceed?(0,i.jsx)(tt.Z,{size:"16px"}):(0,i.jsx)(nt.Z,{size:"16px"}),(0,i.jsx)(rt,{marginLeft:"7px",children:e.message})]}),(0,i.jsxs)(st,{children:[r,Boolean(r)&&" ",s,Boolean(s)&&" ",t&&(0,i.jsx)(dt,{href:Je.W3,children:(0,i.jsx)(a.cC,{id:"zwWKhA"})})]})]})}var lt=n(8356),ht=n(11569),ut=n(73633),pt=n(1152),mt=n(86545);pt.ZP`
  query Token($chain: Chain!, $address: String = null) {
    token(chain: $chain, address: $address) {
      id
      decimals
      name
      chain
      address
      symbol
      standard
      market(currency: USD) {
        id
        totalValueLocked {
          id
          value
          currency
        }
        price {
          id
          value
          currency
        }
        volume24H: volume(duration: DAY) {
          id
          value
          currency
        }
        priceHigh52W: priceHighLow(duration: YEAR, highLow: HIGH) {
          id
          value
        }
        priceLow52W: priceHighLow(duration: YEAR, highLow: LOW) {
          id
          value
        }
      }
      project {
        id
        description
        homepageUrl
        twitterName
        logoUrl
        tokens {
          id
          chain
          address
        }
      }
    }
  }
`,pt.ZP`
  query TokenProject($chain: Chain!, $address: String = null) {
    token(chain: $chain, address: $address) {
      id
      decimals
      name
      chain
      address
      symbol
      standard
      project {
        id
        description
        homepageUrl
        twitterName
        logoUrl
        tokens {
          id
          chain
          address
        }
      }
    }
  }
`;class xt extends mt.D{constructor(e,t,n){const i=(0,E.Tz)(t.chain);i&&super({chainId:i,address:e,decimals:t.decimals??_e.GW,symbol:t.symbol??"",name:t.name??"",logoURI:n??t.project?.logoUrl??void 0})}}const ft=e=>{const{chainId:t}=(0,r.useWeb3React)(),n=(0,E.Ld)(t),i=(0,w.useRef)(n);(0,w.useEffect)((()=>{i.current!==n&&e(n),i.current=n}),[n])};var gt,yt=n(97337),Ct=n(74284),wt=n(46591),jt=n(80657),vt=n(92883),kt=n(83777),bt=n(80608),Tt=n(60198),It=n(89882);function _t(){return _t=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},_t.apply(this,arguments)}function St(e,t){let{title:n,titleId:i,...a}=e;return w.createElement("svg",_t({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",ref:t,"aria-labelledby":i},a),n?w.createElement("title",{id:i},n):null,gt||(gt=w.createElement("path",{d:"M14.75 12C14.75 13.517 13.517 14.75 12 14.75C10.483 14.75 9.25004 13.517 9.25004 12C9.25004 11.651 9.32196 11.32 9.44096 11.012C9.63496 11.166 9.86903 11.272 10.136 11.272C10.763 11.272 11.272 10.763 11.272 10.136C11.272 9.86899 11.166 9.63492 11.012 9.44092C11.32 9.32192 11.651 9.25 12 9.25C13.517 9.25 14.75 10.483 14.75 12ZM20.5921 13.4771C19.3651 15.5311 16.609 19 12 19C7.39104 19 4.635 15.5311 3.408 13.4771C2.864 12.5671 2.864 11.4329 3.408 10.5229C4.635 8.46895 7.39104 5 12 5C16.609 5 19.3651 8.46895 20.5921 10.5229C21.1361 11.4329 21.1361 12.5671 20.5921 13.4771ZM16.25 12C16.25 9.657 14.344 7.75 12 7.75C9.65604 7.75 7.75004 9.657 7.75004 12C7.75004 14.343 9.65604 16.25 12 16.25C14.344 16.25 16.25 14.343 16.25 12Z",fill:"currentColor"})))}const Nt=w.forwardRef(St);n.p;const $t=l.default.div.withConfig({displayName:"InvalidTokenDetails__InvalidDetailsContainer",componentId:"sc-6489a4a1-0"})`
  padding-top: 128px;
  display: flex;
  flex-direction: column;
  align-items: center;
`,At=l.default.span.withConfig({displayName:"InvalidTokenDetails__InvalidDetailsText",componentId:"sc-6489a4a1-1"})`
  margin-top: 28px;
  margin-bottom: 20px;

  text-align: center;

  color: ${({theme:e})=>e.neutral2};
  font-size: 20px;
  font-weight: 535;
  line-height: 28px;
`,Pt=(0,l.default)(Tt.DF).withConfig({displayName:"InvalidTokenDetails__TokenExploreButton",componentId:"sc-6489a4a1-2"})`
  width: fit-content;
  padding: 12px 16px;
  border-radius: 12px;

  color: ${({theme:e})=>e.neutral1};
  font-size: 16px;
  font-weight: 535;
`;function Et({pageChainId:e,isInvalidAddress:t}){const{chainId:n}=(0,r.useWeb3React)(),o=(0,jt.s0)(),s=(0,It.Z)(),d=!t&&e===n,c=n?(0,f.bt)(n)?.label:void 0;return(0,i.jsxs)($t,{children:[(0,i.jsx)(Nt,{}),t||d?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(At,{children:(0,i.jsx)(a.cC,{id:"5pThdE"})}),(0,i.jsx)(Pt,{onClick:()=>o("/tokens"),children:(0,i.jsx)(h.Tv.SubHeader,{children:(0,i.jsx)(a.cC,{id:"1ru2CS"})})})]}):(0,i.jsxs)(i.Fragment,{children:[c&&(0,i.jsx)(At,{children:(0,i.jsx)(a.cC,{id:"xNuZYG",values:{connectedChainLabel:c}})}),(0,i.jsx)(Pt,{onClick:()=>s(e),children:(0,i.jsx)(h.Tv.SubHeader,{children:(0,i.jsx)(a.cC,{id:"1+P9RR",values:{0:(0,f.bt)(e).label}})})})]})]})}const Ht=l.default.span.withConfig({displayName:"TokenDetails__TokenSymbol",componentId:"sc-99bca4a7-0"})`
  text-transform: uppercase;
  color: ${({theme:e})=>e.neutral2};
  margin-left: 8px;
`,Lt=l.default.div.withConfig({displayName:"TokenDetails__TokenActions",componentId:"sc-99bca4a7-1"})`
  display: flex;
  gap: 16px;
  color: ${({theme:e})=>e.neutral2};
`,Rt=l.default.div.withConfig({displayName:"TokenDetails__TokenTitle",componentId:"sc-99bca4a7-2"})`
  display: flex;
  @media screen and (max-width: ${({theme:e})=>e.breakpoint.md}px) {
    display: inline;
  }
`;function Bt(e,t,n){const{chainId:i}=(0,r.useWeb3React)(),a=(0,w.useMemo)((()=>{if(e)return e===_e.dt?(0,_e.gX)(t):n?new xt(e,n):void 0}),[t,e,n]),o=Boolean(a)||t!==i,s=function(e,t){const n=(0,yt.zA)(t||!e?void 0:e);return t||!e||n&&n?.symbol===yt.eu?void 0:n}(e,o);return(0,w.useMemo)((()=>({token:a??s,didFetchFromChain:!a})),[s,a])}function Mt({urlAddress:e,inputTokenAddress:t,chain:n,tokenQuery:l,tokenPriceQuery:h,onChangeTimePeriod:u}){if(!e)throw new Error("Invalid token details route: tokenAddress param is undefined");const p=(0,w.useMemo)((()=>e===_e.dt?e:(0,kt.UJ)(e)||void 0),[e]),{chainId:x}=(0,r.useWeb3React)(),f=(0,E.Tz)(n),g=l.token,y=(0,w.useMemo)((()=>g?.project?.tokens.reduce(((e,t)=>(t&&(e[t.chain]=t.address),e)),{})??{}),[g]),C=(0,ut.e)(),{token:j,didFetchFromChain:v}=Bt(p,f,g),k=p?(0,Je.y8)(p):null,b=!1===k?.canProceed,T=(0,jt.s0)(),I=(0,ht.C)(),[_,S]=(0,w.useTransition)(),A=(0,w.useCallback)((e=>{if(!p)return;const t=y[e];t?S((()=>T((0,E.dG)({address:t,chain:e,isInfoExplorePageEnabled:I})))):(v||j?.isNative)&&S((()=>T((0,E.dG)({address:p,chain:e,isInfoExplorePageEnabled:I}))))}),[p,y,v,j?.isNative,T,I]);ft(A);const H=(0,w.useCallback)((e=>{if((0,bt.K)(e[vt.gN.INPUT]?.currencyId,p)||(0,bt.K)(e[vt.gN.OUTPUT]?.currencyId,p))return;const t=e[vt.gN.OUTPUT]?.currencyId??e[vt.gN.INPUT]?.currencyId;S((()=>T((0,E.dG)({address:"ETH"===t?null:t,chain:n,inputAddress:e[vt.gN.INPUT]&&e[vt.gN.INPUT]?.currencyId!==t?e[vt.gN.INPUT]?.currencyId:null,isInfoExplorePageEnabled:I}))))}),[p,n,I,T]),[L,R]=(0,w.useState)(),[B,M]=(0,w.useState)(!1),O=(0,w.useCallback)((e=>{L?.resolve(e),R(void 0)}),[L,R]);return void 0!==j&&p?(0,i.jsx)(s.fM,{page:o.yJ.TOKEN_DETAILS_PAGE,properties:{tokenAddress:p,tokenName:j?.name},shouldLogImpression:!0,children:(0,i.jsxs)(P.Gy,{children:[j&&!_?(0,i.jsxs)(P.WQ,{children:[(0,i.jsxs)($.y,{to:`${I?"/explore":""}/tokens/${n.toLowerCase()}`,children:[(0,i.jsx)(wt.Z,{"data-testid":"token-details-return-button",size:14})," Tokens"]}),(0,i.jsxs)(P.Pn,{"data-testid":"token-info-container",children:[(0,i.jsxs)(P.yn,{children:[(0,i.jsx)(d.V,{currencies:[j],chainId:j.chainId,size:"32px"}),(0,i.jsxs)(Rt,{children:[j.name??(0,i.jsx)(a.cC,{id:"zKpHYG"}),(0,i.jsx)(Ht,{children:j.symbol??(0,i.jsx)(a.cC,{id:"F2FJu3"})})]})]}),(0,i.jsx)(Lt,{children:(0,i.jsx)(Ge,{currency:j})})]}),(0,i.jsx)(Te,{tokenPriceQuery:h,onChangeTimePeriod:u}),(0,i.jsx)(qe.ZP,{chainId:f,address:p,TVL:g?.market?.totalValueLocked?.value,volume24H:g?.market?.volume24H?.value,priceHigh52W:g?.market?.priceHigh52W?.value,priceLow52W:g?.market?.priceLow52W?.value}),(0,i.jsx)(P.Hr,{}),(0,i.jsx)(c.ez,{address:p,chainId:f,description:g?.project?.description,homepageUrl:g?.project?.homepageUrl,twitterName:g?.project?.twitterName}),!j.isNative&&(0,i.jsx)(m,{address:p})]}):(0,i.jsx)(P.ZP,{}),(0,i.jsxs)(P.QN,{onClick:()=>b&&M(!0),children:[(0,i.jsx)("div",{style:{pointerEvents:b?"none":"auto"},children:(0,i.jsx)(Ct.HY,{chainId:f,initialInputCurrencyId:t,initialOutputCurrencyId:p===_e.dt?"ETH":p,onCurrencyChange:H,disableTokenInputs:f!==x})}),k&&(0,i.jsx)(ct,{tokenAddress:p,warning:k}),!C&&j&&(0,i.jsx)(N,{token:j})]}),!C&&j&&(0,i.jsx)(He,{token:j}),(0,i.jsx)(lt.Z,{isOpen:B||!!L,tokenAddress:p,onContinue:()=>O(!0),onBlocked:()=>{M(!1)},onCancel:()=>O(!1),showCancel:!0})]})}):(0,i.jsx)(Et,{pageChainId:f,isInvalidAddress:!p})}var Ot=n(79954),Wt=n(42713),Dt=n(30719),Zt=n(41054);const zt=(0,H.O4)("tokenDetailsTimePeriod",E.XH.DAY);function Ft(){const{tokenAddress:e,chainName:t}=(0,jt.UO)(),n=(0,E.Qj)(t),a=e===_e.dt,[o,r]=(0,Dt.KO)(zt),[s,d]=(0,w.useMemo)((()=>[a?(0,Zt.P)(n):e??"",(0,E.uw)(o)]),[n,a,o,e]),c=(0,Wt.Z)(),l=(0,w.useMemo)((()=>"string"===typeof c.inputCurrency?c.inputCurrency:void 0),[c]),{data:h}=(0,Ot.rS)({variables:{address:s,chain:n},errorPolicy:"all"}),{data:u}=(0,Ot.m)({variables:{address:s,chain:n,duration:d},errorPolicy:"all"}),[p,m]=(0,w.useState)(u);return(0,w.useEffect)((()=>{u&&m(u)}),[m,u]),h?(0,i.jsx)(Mt,{urlAddress:e,chain:n,tokenQuery:h,tokenPriceQuery:p,onChangeTimePeriod:r,inputTokenAddress:l}):(0,i.jsx)(P.lJ,{})}},80608:function(e,t,n){function i(e,t){return!(!e||!t)&&(e===t||e.toLowerCase()===t.toLowerCase())}n.d(t,{K:function(){return i}})}}]);
//# sourceMappingURL=6825.55c84e04.chunk.js.map