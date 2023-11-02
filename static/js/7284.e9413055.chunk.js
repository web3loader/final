"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[7284],{91443:function(e,n,t){t.d(n,{Bz:function(){return r},HM:function(){return l},VC:function(){return o},fj:function(){return c}});var i=t(11275),a=t(17487);function o(e){if(!e.length)return{min:0,max:0};let n=e[0].value,t=e[0].value;for(const i of e)i.value<n&&(n=i.value),i.value>t&&(t=i.value);return{min:n,max:t}}function r(e){const n=[],t=[];let i;if(e.forEach(((a,o)=>{if(0!==a.value){if(0===n.length&&0!==o){const n={timestamp:e[0].timestamp,value:a.value};t.push([n,a])}i=a,n.push(a)}})),i){if(i!==e[e.length-1]){const n={timestamp:e[e.length-1].timestamp,value:i.value};t.push([i,n])}}return{prices:n,blanks:t,lastValidPrice:i}}function l(e,n,t){const a=t.invert(e),o=(0,(0,i.YFb)((e=>e.timestamp)).left)(n,a,1),r=n[o-1],l=n[o];if(!l)return r;return Math.abs(a.valueOf()-r.timestamp.valueOf())<Math.abs(l.timestamp.valueOf()-a.valueOf())?r:l}const s=i.Z_i.every(5),d={[a.XH.HOUR]:s?{interval:s,step:2}:{interval:i.Z_i,step:10},[a.XH.DAY]:{interval:i.WQD,step:4},[a.XH.WEEK]:{interval:i.rr1,step:1},[a.XH.MONTH]:{interval:i.rr1,step:7},[a.XH.YEAR]:{interval:i.F0B,step:2}};function c(e,n,t,i){if(0===i||n<=e)return[];const a=(n-e)/24,o=new Date(1e3*(e+a)),r=new Date(1e3*(n-a)),{interval:l,step:s}=d[t],c=l.range(o,r,s).map((e=>e.valueOf()/1e3));if(c.length<=i)return c;const p=[],h=Math.floor(c.length/i);for(let d=1;d<c.length;d+=h)p.push(c[d]);return p}},57284:function(e,n,t){t.d(n,{h8:function(){return de},VJ:function(){return he},pS:function(){return ue},PI:function(){return me},_j:function(){return le}});var i=t(42893),a=t(12204),o=t(19903),r=t(4271),l=t(66196),s=t(11275),d=t(13712),c=t(87253),p=t(47244),h=t(14045);function m({data:e,getX:n,getY:t,marginTop:a,curve:o,color:r,strokeWidth:l,width:s,height:d,children:m}){const u=(0,c.useTheme)();return(0,i.jsxs)("svg",{width:s,height:d,children:[(0,i.jsx)(p.Z,{top:a,children:(0,i.jsx)(h.Z,{curve:o,stroke:r??u.accent1,strokeWidth:l,data:e,x:n,y:t})}),m]})}var u=d.memo(m),f=t(91443);const x=c.default.div.withConfig({displayName:"SparklineChart__LoadingContainer",componentId:"sc-c1c8d779-0"})`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;function g({width:e,height:n,tokenData:t,pricePercentChange:a,sparklineMap:o}){const r=(0,c.useTheme)(),l=t?.address?o[t.address]:null;if(!l||l.length<=1)return(0,i.jsx)(x,{children:(0,i.jsx)(le,{})});const d=l[0],p=l[l.length-1],h=(0,s.BYU)().domain([d.timestamp,p.timestamp]).range([0,110]),{min:m,max:g}=(0,f.VC)(l),w=(0,s.BYU)().domain([m,g]).range([30,0]);return(0,i.jsx)(u,{data:l,getX:e=>h(e.timestamp),getY:e=>w(e.value),curve:s.YY7.tension(.9),marginTop:5,color:a&&a<0?r.critical:r.success,strokeWidth:1.5,width:e,height:n})}var w=(0,d.memo)(g),C=t(83246),k=t(37636);const _=e=>(0,i.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:(0,i.jsx)("path",{d:"M12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2ZM12.75 16.5C12.75 16.914 12.414 17.25 12 17.25C11.586 17.25 11.25 16.914 11.25 16.5V11.929C11.25 11.515 11.586 11.179 12 11.179C12.414 11.179 12.75 11.515 12.75 11.929V16.5ZM12.02 9.5C11.468 9.5 11.0149 9.052 11.0149 8.5C11.0149 7.948 11.458 7.5 12.01 7.5H12.02C12.573 7.5 13.02 7.948 13.02 8.5C13.02 9.052 12.572 9.5 12.02 9.5Z",fill:"#9B9B9B"})});var y=t(3077),b=t(65647),j=t(11569),v=t(17487),T=t(67621),$=t(41440),N=t(80657),I=t(1990),R=t(39839),L=t(57482),E=t(35458),P=t(80343),O=t(86403),U=t(86682);const X=c.default.div.withConfig({displayName:"TokenRow__Cell",componentId:"sc-b135e31a-0"})`
  display: flex;
  align-items: center;
  justify-content: center;
`,V=c.default.div.withConfig({displayName:"TokenRow__StyledTokenRow",componentId:"sc-b135e31a-1"})`
  background-color: transparent;
  display: grid;
  font-size: 16px;
  grid-template-columns: 1fr 7fr 4fr 4fr 4fr 4fr 5fr;
  line-height: 24px;
  max-width: ${E.y5};
  min-width: 390px;
  ${({first:e,last:n})=>c.css`
    height: ${e||n?"72px":"64px"};
    padding-top: ${e?"8px":"0px"};
    padding-bottom: ${n?"8px":"0px"};
  `}
  padding-left: 12px;
  padding-right: 12px;
  transition: ${({theme:{transition:{duration:e,timing:n}}})=>c.css`background-color ${e.medium} ${n.ease}`};
  width: 100%;
  transition-duration: ${({theme:e})=>e.transition.duration.fast};

  &:hover {
    ${({$loading:e,theme:n})=>!e&&c.css`
        background-color: ${n.deprecated_hoverDefault};
      `}
    ${({last:e})=>e&&c.css`
        border-radius: 0px 0px 8px 8px;
      `}
  }

  @media only screen and (max-width: ${E.y5}) {
    grid-template-columns: 1fr 6.5fr 4.5fr 4.5fr 4.5fr 4.5fr 1.7fr;
  }

  @media only screen and (max-width: ${E.$l}) {
    grid-template-columns: 1fr 7.5fr 4.5fr 4.5fr 4.5fr 1.7fr;
  }

  @media only screen and (max-width: ${E.Uw}) {
    grid-template-columns: 1fr 10fr 5fr 5fr 1.2fr;
  }

  @media only screen and (max-width: ${E.T1}) {
    grid-template-columns: 2fr 3fr;
    min-width: unset;
    border-bottom: 0.5px solid ${({theme:e})=>e.surface2};

    :last-of-type {
      border-bottom: none;
    }
  }
`,D=c.default.div.withConfig({displayName:"TokenRow__ClickableContent",componentId:"sc-b135e31a-2"})`
  display: flex;
  ${({gap:e})=>e&&`gap: ${e}px`};
  text-decoration: none;
  color: ${({theme:e})=>e.neutral1};
  align-items: center;
  cursor: pointer;
`,M=(0,c.default)(D).withConfig({displayName:"TokenRow__ClickableName",componentId:"sc-b135e31a-3"})`
  gap: 12px;
  max-width: 100%;
`,H=(0,c.default)(V).withConfig({displayName:"TokenRow__StyledHeaderRow",componentId:"sc-b135e31a-4"})`
  border-bottom: 1px solid;
  border-color: ${({theme:e})=>e.surface3};
  border-radius: 8px 8px 0px 0px;
  color: ${({theme:e})=>e.neutral2};
  font-size: 14px;
  height: 48px;
  line-height: 16px;
  padding: 0px 12px;
  width: 100%;
  justify-content: center;

  &:hover {
    background-color: transparent;
  }

  @media only screen and (max-width: ${E.T1}) {
    justify-content: space-between;
  }
`,A=(0,c.default)(X).withConfig({displayName:"TokenRow__ListNumberCell",componentId:"sc-b135e31a-5"})`
  color: ${({theme:e})=>e.neutral2};
  min-width: 32px;
  font-size: 14px;

  @media only screen and (max-width: ${E.T1}) {
    display: none;
  }
`,B=(0,c.default)(X).withConfig({displayName:"TokenRow__DataCell",componentId:"sc-b135e31a-6"})`
  justify-content: flex-end;
  min-width: 80px;
  user-select: ${({sortable:e})=>e?"none":"unset"};
  transition: ${({theme:{transition:{duration:e,timing:n}}})=>c.css`background-color ${e.medium} ${n.ease}`};
`,S=(0,c.default)(B).withConfig({displayName:"TokenRow__TvlCell",componentId:"sc-b135e31a-7"})`
  padding-right: 8px;
  @media only screen and (max-width: ${E.Uw}) {
    display: none;
  }
`,Y=(0,c.default)(X).withConfig({displayName:"TokenRow__NameCell",componentId:"sc-b135e31a-8"})`
  justify-content: flex-start;
  padding: 0px 8px;
  min-width: 240px;
  gap: 8px;

  @media only screen and (max-width: ${I.j$.xs}px) {
    min-width: 200px;
  }
`,K=(0,c.default)(B).withConfig({displayName:"TokenRow__PriceCell",componentId:"sc-b135e31a-9"})`
  padding-right: 8px;
`,z=(0,c.default)(B).withConfig({displayName:"TokenRow__PercentChangeCell",componentId:"sc-b135e31a-10"})`
  padding-right: 8px;
  @media only screen and (max-width: ${E.T1}) {
    display: none;
  }
`,Z=(0,c.default)(X).withConfig({displayName:"TokenRow__PercentChangeInfoCell",componentId:"sc-b135e31a-11"})`
  display: none;

  @media only screen and (max-width: ${E.T1}) {
    display: flex;
    gap: 3px;
    justify-content: flex-end;
    color: ${({theme:e})=>e.neutral2};
    font-size: 12px;
    line-height: 16px;
  }
`,W=(0,c.default)(X).withConfig({displayName:"TokenRow__PriceInfoCell",componentId:"sc-b135e31a-12"})`
  justify-content: flex-end;
  flex: 1;

  @media only screen and (max-width: ${E.T1}) {
    flex-direction: column;
    align-items: flex-end;
  }
`,F=c.default.span.withConfig({displayName:"TokenRow__HeaderCellWrapper",componentId:"sc-b135e31a-13"})`
  align-items: center;
  cursor: ${({onClick:e})=>e?"pointer":"unset"};
  display: flex;
  gap: 4px;
  justify-content: flex-end;
  width: 100%;

  &:hover {
    ${R.iV}
  }
`,G=(0,c.default)(X).withConfig({displayName:"TokenRow__SparkLineCell",componentId:"sc-b135e31a-14"})`
  padding: 0px 24px;
  min-width: 120px;

  @media only screen and (max-width: ${E.y5}) {
    display: none;
  }
`,J=(0,c.default)(X).withConfig({displayName:"TokenRow__SparkLine",componentId:"sc-b135e31a-15"})`
  width: 124px;
  height: 42px;
`,Q=(0,c.default)($.rU).withConfig({displayName:"TokenRow__StyledLink",componentId:"sc-b135e31a-16"})`
  text-decoration: none;
`,q=(0,c.default)(X).withConfig({displayName:"TokenRow__TokenInfoCell",componentId:"sc-b135e31a-17"})`
  gap: 8px;
  line-height: 24px;
  font-size: 16px;
  max-width: inherit;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media only screen and (max-width: ${E.T1}) {
    justify-content: flex-start;
    flex-direction: column;
    gap: 0px;
    width: max-content;
    font-weight: 535;
  }
`,ee=c.default.div.withConfig({displayName:"TokenRow__TokenName",componentId:"sc-b135e31a-18"})`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 100%;
`,ne=(0,c.default)(X).withConfig({displayName:"TokenRow__TokenSymbol",componentId:"sc-b135e31a-19"})`
  color: ${({theme:e})=>e.neutral2};
  text-transform: uppercase;

  @media only screen and (max-width: ${E.T1}) {
    font-size: 12px;
    height: 16px;
    justify-content: flex-start;
    width: 100%;
  }
`,te=(0,c.default)(B).withConfig({displayName:"TokenRow__VolumeCell",componentId:"sc-b135e31a-20"})`
  padding-right: 8px;
  @media only screen and (max-width: ${E.$l}) {
    display: none;
  }
`,ie=(0,c.default)(P.X).withConfig({displayName:"TokenRow__SmallLoadingBubble",componentId:"sc-b135e31a-21"})`
  width: 25%;
`,ae=(0,c.default)(P.X).withConfig({displayName:"TokenRow__MediumLoadingBubble",componentId:"sc-b135e31a-22"})`
  width: 65%;
`,oe=(0,c.default)(P.X).withConfig({displayName:"TokenRow__LongLoadingBubble",componentId:"sc-b135e31a-23"})`
  width: 90%;
`,re=(0,c.default)(P.X).withConfig({displayName:"TokenRow__IconLoadingBubble",componentId:"sc-b135e31a-24"})`
  border-radius: 50%;
  width: 24px;
`,le=(0,c.default)(oe).withConfig({displayName:"TokenRow__SparkLineLoadingBubble",componentId:"sc-b135e31a-25"})`
  height: 4px;
`,se=c.default.div.withConfig({displayName:"TokenRow__InfoIconContainer",componentId:"sc-b135e31a-26"})`
  width: 16px;
  margin-left: 2px;
  display: flex;
  align-items: center;
  cursor: help;
`,de={[O.PU.PRICE]:void 0,[O.PU.PERCENT_CHANGE]:void 0,[O.PU.TOTAL_VALUE_LOCKED]:(0,i.jsx)(a.cC,{id:"b2kIOW"}),[O.PU.VOLUME]:(0,i.jsx)(a.cC,{id:"UOqQih"})};function ce({category:e}){const n=(0,c.useTheme)(),t=(0,T.Dv)(O.$E),a=(0,O.OX)(e),o=(0,T.Dv)(O.AY),r=de[e];return(0,i.jsxs)(F,{onClick:a,children:[o===e&&(0,i.jsx)(i.Fragment,{children:t?(0,i.jsx)(k.V,{width:16,height:16,color:n.neutral2}):(0,i.jsx)(C.c,{width:16,height:16,color:n.neutral2})}),e,r&&(0,i.jsx)(b.ud,{text:r,placement:"right",children:(0,i.jsx)(se,{children:(0,i.jsx)(_,{width:"16px",height:"16px"})})})]})}function pe({header:e,listNumber:n,tokenInfo:t,price:a,percentChange:o,tvl:r,volume:l,sparkLine:s,...d}){const c=(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(A,{header:e,children:n}),(0,i.jsx)(Y,{"data-testid":"name-cell",children:t}),(0,i.jsx)(K,{"data-testid":"price-cell",sortable:e,children:a}),(0,i.jsx)(z,{"data-testid":"percent-change-cell",sortable:e,children:o}),(0,i.jsx)(S,{"data-testid":"tvl-cell",sortable:e,children:r}),(0,i.jsx)(te,{"data-testid":"volume-cell",sortable:e,children:l}),(0,i.jsx)(G,{children:s})]});return e?(0,i.jsx)(H,{"data-testid":"header-row",children:c}):(0,i.jsx)(V,{...d,children:c})}function he(){return(0,i.jsx)(pe,{header:!0,listNumber:"#",tokenInfo:(0,i.jsx)(a.cC,{id:"SKZhW9"}),price:(0,i.jsx)(ce,{category:O.PU.PRICE}),percentChange:(0,i.jsx)(ce,{category:O.PU.PERCENT_CHANGE}),tvl:(0,i.jsx)(ce,{category:O.PU.TOTAL_VALUE_LOCKED}),volume:(0,i.jsx)(ce,{category:O.PU.VOLUME}),sparkLine:null})}function me(e){return(0,i.jsx)(pe,{header:!1,listNumber:(0,i.jsx)(ie,{}),$loading:!0,tokenInfo:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(re,{}),(0,i.jsx)(ae,{})]}),price:(0,i.jsx)(ae,{}),percentChange:(0,i.jsx)(P.X,{}),tvl:(0,i.jsx)(P.X,{}),volume:(0,i.jsx)(P.X,{}),sparkLine:(0,i.jsx)(le,{}),...e})}const ue=(0,d.forwardRef)(((e,n)=>{const{formatFiatPrice:t,formatNumber:a,formatDelta:s}=(0,L.Gb)(),{tokenListIndex:d,tokenListLength:c,token:p,sortRank:h}=e,m=(0,T.Dv)(O.fO),u=(0,v.Qj)((0,N.UO)().chainName?.toUpperCase()),f=(0,v.Tz)(u),x=(0,T.Dv)(O.X3),g=p.market?.pricePercentChange?.value,C=s(g),k={chain_id:f,token_address:p.address,token_symbol:p.symbol,token_list_index:d,token_list_rank:h,token_list_length:c,time_frame:x,search_token_address_input:m},_=0===p.market?.price?.value?"-":t({price:p.market?.price?.value}),b=(0,j.C)();return(0,i.jsx)("div",{ref:n,"data-testid":`token-table-row-${p.address}`,children:(0,i.jsx)(Q,{to:(0,v.dG)({...p,isInfoExplorePageEnabled:b}),onClick:()=>(0,l._P)(o.Je.EXPLORE_TOKEN_ROW_CLICKED,k),children:(0,i.jsx)(pe,{header:!1,listNumber:h,tokenInfo:(0,i.jsxs)(M,{children:[(0,i.jsx)(y.Z,{token:p,size:"32px"}),(0,i.jsxs)(q,{children:[(0,i.jsx)(ee,{"data-cy":"token-name",children:p.name}),(0,i.jsx)(ne,{children:p.symbol})]})]}),price:(0,i.jsx)(D,{children:(0,i.jsxs)(W,{children:[_,(0,i.jsxs)(Z,{children:[(0,i.jsx)(U.Kx,{delta:g,size:14}),(0,i.jsx)(U.Jp,{delta:g,children:C})]})]})}),percentChange:(0,i.jsxs)(D,{gap:3,children:[(0,i.jsx)(U.Kx,{delta:g}),(0,i.jsx)(U.Jp,{delta:g,children:C})]}),tvl:(0,i.jsx)(D,{children:a({input:p.market?.totalValueLocked?.value,type:L.sw.FiatTokenStats})}),volume:(0,i.jsx)(D,{children:a({input:p.market?.volume?.value,type:L.sw.FiatTokenStats})}),sparkLine:(0,i.jsx)(J,{children:(0,i.jsx)(r.Z,{children:({width:n,height:t})=>e.sparklineMap&&(0,i.jsx)(w,{width:n,height:t,tokenData:p,pricePercentChange:p.market?.pricePercentChange?.value,sparklineMap:e.sparklineMap})})}),first:0===d,last:d===c-1})})})}));ue.displayName="LoadedRow"},86403:function(e,n,t){t.d(n,{$E:function(){return p},AY:function(){return c},OX:function(){return h},PU:function(){return i},X3:function(){return d},fO:function(){return s}});var i,a=t(17487),o=t(30719),r=t(67621),l=t(13712);!function(e){e.PRICE="Price",e.PERCENT_CHANGE="Change",e.TOTAL_VALUE_LOCKED="TVL",e.VOLUME="Volume"}(i||(i={}));const s=(0,r.rw)(""),d=(0,o.cn)(a.XH.DAY),c=(0,o.cn)(i.VOLUME),p=(0,o.cn)(!1);function h(e){const[n,t]=(0,o.KO)(c),[i,a]=(0,o.KO)(p);return(0,l.useCallback)((()=>{n===e?a(!i):(t(e),a(!1))}),[n,t,a,i,e])}}}]);
//# sourceMappingURL=7284.e9413055.chunk.js.map