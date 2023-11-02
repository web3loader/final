"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[5225],{81223:function(e,t,n){n.d(t,{M7:function(){return u},d5:function(){return h},ez:function(){return g}});var i=n(42893),o=n(12204),a=n(15387),d=n(68040),s=n(13712),c=n(87253),l=n(39839),r=n(47371),p=n(98947),f=n(15067);const x=c.default.div.withConfig({displayName:"About__TokenDescriptionContainer",componentId:"sc-94d069e0-0"})`
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
  max-height: fit-content;
  padding-top: 16px;
  line-height: 24px;
  white-space: pre-wrap;
`,u=c.default.div.withConfig({displayName:"About__AboutContainer",componentId:"sc-94d069e0-1"})`
  gap: 16px;
  padding: 24px 0px;
  ${r.Sj}
`,h=(0,c.default)(l.Tv.MediumHeader).withConfig({displayName:"About__AboutHeader",componentId:"sc-94d069e0-2"})`
  font-size: 28px !important;
`,m=c.default.div.withConfig({displayName:"About__ResourcesContainer",componentId:"sc-94d069e0-3"})`
  display: flex;
  padding-top: 12px;
  gap: 14px;
`;function g({address:e,chainId:t,description:n,homepageUrl:c,twitterName:r}){const[g,b]=(0,s.useState)(!0),j=!!n&&n.length>f.ke,w=j&&g?(0,f.Nt)(n):n,{explorer:_,infoLink:y}=(0,d.bt)(t);return(0,i.jsxs)(u,{"data-testid":"token-details-about-section",children:[(0,i.jsx)(h,{children:(0,i.jsx)(o.cC,{id:"uyJsf6"})}),(0,i.jsxs)(x,{children:[!n&&(0,i.jsx)(f.aZ,{children:(0,i.jsx)(o.cC,{id:"kXI9SA"})}),w,j&&(0,i.jsx)(f.ou,{onClick:()=>b(!g),children:g?(0,i.jsx)(o.cC,{id:"fMPkxb"}):(0,i.jsx)(o.cC,{id:"vLyv1R"})})]}),(0,i.jsx)("br",{}),(0,i.jsx)(l.Tv.SubHeaderSmall,{children:(0,i.jsx)(o.cC,{id:"Rj01Fz"})}),(0,i.jsxs)(m,{"data-cy":"resources-container",children:[(0,i.jsx)(p.Z,{name:t===a.ChainId.MAINNET?"Etherscan":"Block Explorer",link:`${_}${"NATIVE"===e?"":"address/"+e}`}),(0,i.jsx)(p.Z,{name:"More analytics",link:`${y}tokens/${e}`}),c&&(0,i.jsx)(p.Z,{name:"Website",link:c}),r&&(0,i.jsx)(p.Z,{name:"Twitter",link:`https://twitter.com/${r}`})]})]})}},63148:function(e,t,n){n.d(t,{y:function(){return o}});var i=n(41440);const o=(0,n(87253).default)(i.rU).withConfig({displayName:"BreadcrumbNavLink",componentId:"sc-55c0ea30-0"})`
  display: flex;
  color: ${({theme:e})=>e.neutral2};
  font-size: 14px;
  line-height: 20px;
  align-items: center;
  gap: 4px;
  text-decoration: none;
  margin-bottom: 16px;
  transition-duration: ${({theme:e})=>e.transition.duration.fast};
  width: fit-content;

  &:hover {
    color: ${({theme:e})=>e.neutral3};
  }
`},98947:function(e,t,n){n.d(t,{Z:function(){return c}});var i=n(42893),o=n(40508),a=n(87253),d=n(39839);const s=(0,a.default)(d.dL).withConfig({displayName:"Resource__ResourceLink",componentId:"sc-fcee131f-0"})`
  display: flex;
  color: ${({theme:e})=>e.accent1};
  font-weight: 535;
  font-size: 14px;
  line-height: 20px;
  gap: 4px;
  text-decoration: none;

  &:hover,
  &:focus {
    color: ${({theme:e})=>(0,o._j)(.1,e.accent1)};
    text-decoration: none;
  }
`;function c({name:e,link:t}){return(0,i.jsxs)(s,{href:t,children:[e,(0,i.jsx)("sup",{children:"\u2197"})]})}},35225:function(e,t,n){n.d(t,{BO:function(){return H},Hr:function(){return T},WQ:function(){return L},sT:function(){return ee},QN:function(){return z},Gy:function(){return B},lJ:function(){return ie},Pn:function(){return W},yn:function(){return Z},ZP:function(){return ne}});var i=n(42893),o=n(12204),a=n(74284),d=n(20837),s=n(87253),c=n(39839),l=n(20095);const r=(0,s.default)(l.nR).withConfig({displayName:"SwapSkeleton__StyledArrowWrapper",componentId:"sc-a3b9f734-0"})`
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
`,p=s.default.div.withConfig({displayName:"SwapSkeleton__LoadingWrapper",componentId:"sc-a3b9f734-1"})`
  display: flex;
  flex-direction: column;
  gap: 4px;
  justify-content: space-between;

  padding: 8px;
  border: ${({theme:e})=>`1px solid ${e.surface3}`};
  border-radius: 16px;
  background-color: ${({theme:e})=>e.surface1};
`,f=s.default.div.withConfig({displayName:"SwapSkeleton__Blob",componentId:"sc-a3b9f734-2"})`
  background-color: ${({theme:e})=>e.surface2};
  border-radius: ${({radius:e})=>(e??4)+"px"};
  height: 56px;
  width: ${({width:e})=>e?e+"px":"100%"};
`,x=(0,s.default)(f).withConfig({displayName:"SwapSkeleton__ModuleBlob",componentId:"sc-a3b9f734-3"})`
  background-color: ${({theme:e})=>e.surface3};
  height: 36px;
`,u=s.default.div.withConfig({displayName:"SwapSkeleton__TitleColumn",componentId:"sc-a3b9f734-4"})`
  padding: 8px;
`,h=s.default.div.withConfig({displayName:"SwapSkeleton__Row",componentId:"sc-a3b9f734-5"})`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,m=s.default.div.withConfig({displayName:"SwapSkeleton__InputColumn",componentId:"sc-a3b9f734-6"})`
  display: flex;
  flex-flow: column;
  background-color: ${({theme:e})=>e.surface2};
  border-radius: 16px;
  display: flex;
  gap: 30px;
  padding: 48px 12px;
`,g=s.default.div.withConfig({displayName:"SwapSkeleton__OutputWrapper",componentId:"sc-a3b9f734-7"})`
  position: relative;
`;function b(){return(0,i.jsx)(u,{children:(0,i.jsx)(c.Tv.SubHeader,{children:(0,i.jsx)(o.cC,{id:"vH2C/2"})})})}function j(){return(0,i.jsxs)(h,{children:[(0,i.jsx)(x,{width:60}),(0,i.jsx)(x,{width:100,radius:16})]})}function w(){return(0,i.jsx)(f,{radius:16})}function _(){const e=(0,s.useTheme)();return(0,i.jsxs)(p,{children:[(0,i.jsx)(b,{}),(0,i.jsx)(m,{children:(0,i.jsx)(j,{})}),(0,i.jsxs)(g,{children:[(0,i.jsx)(r,{clickable:!1,children:(0,i.jsx)(a.Gz,{children:(0,i.jsx)(d.Z,{size:"16",color:e.neutral3})})}),(0,i.jsx)(m,{children:(0,i.jsx)(j,{})})]}),(0,i.jsx)(w,{})]})}var y=n(11569),C=n(46591),S=n(80657),k=n(47371),v=n(80343),N=n(81223),I=n(63148),$=n(94556);const T=s.default.hr.withConfig({displayName:"Skeleton__Hr",componentId:"sc-bc89e6fb-0"})`
  background-color: ${({theme:e})=>e.surface3};
  border: none;
  height: 0.5px;
`,B=s.default.div.withConfig({displayName:"Skeleton__TokenDetailsLayout",componentId:"sc-bc89e6fb-1"})`
  display: flex;
  padding: 0 8px 52px;
  justify-content: center;
  width: 100%;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.sm}px) {
    gap: 16px;
    padding: 0 16px 52px;
  }
  @media screen and (min-width: ${({theme:e})=>e.breakpoint.md}px) {
    gap: 40px;
    padding: 48px 20px;
  }
  @media screen and (min-width: ${({theme:e})=>e.breakpoint.xl}px) {
    gap: 60px;
  }
`,L=s.default.div.withConfig({displayName:"Skeleton__LeftPanel",componentId:"sc-bc89e6fb-2"})`
  flex: 1;
  max-width: 780px;
  overflow: hidden;
`,z=s.default.div.withConfig({displayName:"Skeleton__RightPanel",componentId:"sc-bc89e6fb-3"})`
  display: none;
  flex-direction: column;
  gap: 20px;
  width: ${360}px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.lg}px) {
    display: flex;
  }
`,H=s.default.div.withConfig({displayName:"Skeleton__ChartContainer",componentId:"sc-bc89e6fb-4"})`
  display: flex;
  flex-direction: column;
  height: 436px;
  margin-bottom: 24px;
  align-items: flex-start;
  width: 100%;
`,A=s.default.div.withConfig({displayName:"Skeleton__LoadingChartContainer",componentId:"sc-bc89e6fb-5"})`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  height: 100%;
  margin-bottom: 44px;
  padding-bottom: 66px;
  overflow: hidden;
`,W=s.default.div.withConfig({displayName:"Skeleton__TokenInfoContainer",componentId:"sc-bc89e6fb-6"})`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4px;
  ${k.Sj};
  animation-duration: ${({theme:e})=>e.transition.duration.medium};
`,Z=s.default.div.withConfig({displayName:"Skeleton__TokenNameCell",componentId:"sc-bc89e6fb-7"})`
  display: flex;
  gap: 8px;
  font-size: 20px;
  line-height: 28px;
  align-items: center;
`,F=(0,s.default)(v.X).withConfig({displayName:"Skeleton__DetailBubble",componentId:"sc-bc89e6fb-8"})`
  height: 16px;
  width: 180px;
`,M=(0,s.default)(F).withConfig({displayName:"Skeleton__SquaredBubble",componentId:"sc-bc89e6fb-9"})`
  height: 32px;
  border-radius: 8px;
`,P=(0,s.default)(F).withConfig({displayName:"Skeleton__TokenLogoBubble",componentId:"sc-bc89e6fb-10"})`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`,D=(0,s.default)(F).withConfig({displayName:"Skeleton__TitleBubble",componentId:"sc-bc89e6fb-11"})`
  width: 136px;
`,R=(0,s.default)(M).withConfig({displayName:"Skeleton__PriceBubble",componentId:"sc-bc89e6fb-12"})`
  margin-top: 4px;
  height: 40px;
`,E=(0,s.default)(M).withConfig({displayName:"Skeleton__SectionBubble",componentId:"sc-bc89e6fb-13"})`
  width: 120px;
`,O=(0,s.default)(F).withConfig({displayName:"Skeleton__StatTitleBubble",componentId:"sc-bc89e6fb-14"})`
  width: 80px;
  margin-bottom: 4px;
`,U=(0,s.default)(M).withConfig({displayName:"Skeleton__StatBubble",componentId:"sc-bc89e6fb-15"})`
  width: 116px;
`,Q=(0,s.default)(F).withConfig({displayName:"Skeleton__WideBubble",componentId:"sc-bc89e6fb-16"})`
  margin-bottom: 6px;
  width: 100%;
`,V=(0,s.default)(Q).withConfig({displayName:"Skeleton__ThinTitleBubble",componentId:"sc-bc89e6fb-17"})`
  width: 120px;
`,G=(0,s.default)(Q).withConfig({displayName:"Skeleton__HalfWideBubble",componentId:"sc-bc89e6fb-18"})`
  width: 50%;
`,J=s.default.div.withConfig({displayName:"Skeleton__StatsLoadingContainer",componentId:"sc-bc89e6fb-19"})`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`,K=s.default.div.withConfig({displayName:"Skeleton__ExtraDetailsContainer",componentId:"sc-bc89e6fb-20"})`
  padding-top: 24px;
`,X=s.default.div.withConfig({displayName:"Skeleton__ChartAnimation",componentId:"sc-bc89e6fb-21"})`
  animation: wave 8s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite;
  display: flex;
  overflow: hidden;
  margin-top: 90px;

  @keyframes wave {
    0% {
      margin-left: 0;
    }
    100% {
      margin-left: -800px;
    }
  }
`,q=s.default.div.withConfig({displayName:"Skeleton__Space",componentId:"sc-bc89e6fb-22"})`
  height: ${({heightSize:e})=>`${e}px`};
`;function Y(){const e=(0,s.useTheme)();return(0,i.jsx)("svg",{width:"416",height:"160",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{d:"M 0 80 Q 104 10, 208 80 T 416 80",stroke:e.surface3,fill:"transparent",strokeWidth:"2"})})}function ee(){return(0,i.jsxs)(H,{children:[(0,i.jsx)(c.Tv.HeadlineLarge,{children:(0,i.jsx)(R,{})}),(0,i.jsx)(q,{heightSize:6}),(0,i.jsx)(A,{children:(0,i.jsx)("div",{children:(0,i.jsxs)(X,{children:[(0,i.jsx)(Y,{}),(0,i.jsx)(Y,{}),(0,i.jsx)(Y,{}),(0,i.jsx)(Y,{}),(0,i.jsx)(Y,{})]})})})]})}function te(){return(0,i.jsxs)($.h6,{children:[(0,i.jsx)(E,{}),(0,i.jsxs)(J,{children:[(0,i.jsxs)($.sy,{children:[(0,i.jsxs)($.Fy,{children:[(0,i.jsx)(O,{}),(0,i.jsx)(U,{})]}),(0,i.jsxs)($.Fy,{children:[(0,i.jsx)(O,{}),(0,i.jsx)(U,{})]})]}),(0,i.jsxs)($.sy,{children:[(0,i.jsxs)($.Fy,{children:[(0,i.jsx)(O,{}),(0,i.jsx)(U,{})]}),(0,i.jsxs)($.Fy,{children:[(0,i.jsx)(O,{}),(0,i.jsx)(U,{})]})]})]})]})}function ne(){const{chainName:e}=(0,S.UO)(),t=(0,y.C)();return(0,i.jsxs)(L,{children:[(0,i.jsxs)(I.y,{to:(t?"/explore":"")+(e?`/tokens/${e}`:"/tokens"),children:[(0,i.jsx)(C.Z,{size:14})," Tokens"]}),(0,i.jsx)(W,{children:(0,i.jsxs)(Z,{children:[(0,i.jsx)(P,{}),(0,i.jsx)(D,{})]})}),(0,i.jsx)(ee,{}),(0,i.jsx)(q,{heightSize:4}),(0,i.jsx)(te,{}),(0,i.jsx)(T,{}),(0,i.jsx)(N.M7,{children:(0,i.jsx)(N.d5,{children:(0,i.jsx)(E,{})})}),(0,i.jsx)(Q,{}),(0,i.jsx)(Q,{}),(0,i.jsx)(G,{style:{marginBottom:"24px"}}),(0,i.jsxs)(K,{children:[(0,i.jsx)(V,{}),(0,i.jsx)(G,{})]}),(0,i.jsxs)(K,{children:[(0,i.jsx)(V,{}),(0,i.jsx)(G,{})]})]})}function ie(){return(0,i.jsxs)(B,{children:[(0,i.jsx)(ne,{}),(0,i.jsx)(z,{children:(0,i.jsx)(_,{})})]})}},94556:function(e,t,n){n.d(t,{Fy:function(){return u},ZP:function(){return y},h6:function(){return w},sy:function(){return m}});var i=n(42893),o=n(12204),a=n(65647),d=n(68040),s=n(87253),c=n(39839),l=n(47371),r=n(57482),p=n(35458),f=n(86403),x=n(57284);const u=s.default.div.withConfig({displayName:"StatsSection__StatWrapper",componentId:"sc-ccd2d50f-0"})`
  color: ${({theme:e})=>e.neutral2};
  font-size: 14px;
  min-width: 168px;
  flex: 1;
  padding: 24px 0px;
`,h=s.default.div.withConfig({displayName:"StatsSection__TokenStatsSection",componentId:"sc-ccd2d50f-1"})`
  display: flex;
  flex-wrap: wrap;
`,m=s.default.div.withConfig({displayName:"StatsSection__StatPair",componentId:"sc-ccd2d50f-2"})`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
`,g=(0,s.default)(c.Tv.MediumHeader).withConfig({displayName:"StatsSection__Header",componentId:"sc-ccd2d50f-3"})`
  font-size: 28px !important;
`,b=s.default.div.withConfig({displayName:"StatsSection__StatPrice",componentId:"sc-ccd2d50f-4"})`
  margin-top: 4px;
  font-size: 28px;
  color: ${({theme:e})=>e.neutral1};
`,j=s.default.div.withConfig({displayName:"StatsSection__NoData",componentId:"sc-ccd2d50f-5"})`
  color: ${({theme:e})=>e.neutral3};
`,w=s.default.div.withConfig({displayName:"StatsSection__StatsWrapper",componentId:"sc-ccd2d50f-6"})`
  gap: 16px;
  ${l.Sj}
`;function _({dataCy:e,value:t,title:n,description:o}){const{formatNumber:d}=(0,r.Gb)();return(0,i.jsxs)(u,{"data-cy":`${e}`,children:[(0,i.jsx)(a.ud,{text:o,children:n}),(0,i.jsx)(b,{children:d({input:t,type:r.sw.FiatTokenStats})})]})}function y(e){const{chainId:t,address:n,priceLow52W:a,priceHigh52W:s,TVL:l,volume24H:r}=e,{label:u,infoLink:b}=(0,d.bt)(t);return l||r||a||s?(0,i.jsxs)(w,{"data-testid":"token-details-stats",children:[(0,i.jsx)(g,{children:(0,i.jsx)(o.cC,{id:"29Hx9U"})}),(0,i.jsxs)(h,{children:[(0,i.jsxs)(m,{children:[(0,i.jsx)(_,{dataCy:"tvl",value:l,description:x.h8[f.PU.TOTAL_VALUE_LOCKED],title:(0,i.jsx)(o.cC,{id:"FHKsZF"})}),(0,i.jsx)(_,{dataCy:"volume-24h",value:r,description:(0,i.jsx)(o.cC,{id:"QENWO5"}),title:(0,i.jsx)(o.cC,{id:"0RweTm"})})]}),(0,i.jsxs)(m,{children:[(0,i.jsx)(_,{dataCy:"52w-low",value:a,title:(0,i.jsx)(o.cC,{id:"Dw2kwD"})}),(0,i.jsx)(_,{dataCy:"52w-high",value:s,title:(0,i.jsx)(o.cC,{id:"eh5V57"})})]})]})]}):p.N0.includes(t)?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(g,{children:(0,i.jsx)(o.cC,{id:"29Hx9U"})}),(0,i.jsx)(c.Tv.BodySecondary,{paddingTop:"12px",children:(0,i.jsx)(o.cC,{id:"9BeptC",values:{label:u},components:{0:(0,i.jsx)(c.dL,{color:"currentColor",href:`${b}tokens/${n}`})}})})]}):(0,i.jsx)(j,{children:"No stats available"})}},15067:function(e,t,n){n.d(t,{Nt:function(){return s},aZ:function(){return a},ke:function(){return c},ou:function(){return d}});var i=n(40508),o=n(87253);const a=o.default.span.withConfig({displayName:"shared__NoInfoAvailable",componentId:"sc-b2e1214d-0"})`
  color: ${({theme:e})=>e.neutral3};
  font-weight: 485;
  font-size: 16px;
`,d=o.default.div.withConfig({displayName:"shared__TruncateDescriptionButton",componentId:"sc-b2e1214d-1"})`
  color: ${({theme:e})=>e.neutral2};
  font-weight: 485;
  font-size: 0.85em;
  padding-top: 0.5em;

  &:hover,
  &:focus {
    color: ${({theme:e})=>(0,i._j)(.1,e.neutral2)};
    cursor: pointer;
  }
`,s=(e,t=c)=>{let n=e.slice(0,t);return n=`${n.slice(0,Math.min(n.length,n.lastIndexOf(" ")))}...`,n},c=400}}]);
//# sourceMappingURL=5225.2c3432a7.chunk.js.map