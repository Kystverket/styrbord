import{S as er,j as e}from"./iframe-XM4Dzqx4.js";import{G as sr,S as s}from"./Dialog-D7-ELyyt.js";import"./shipTypes-hFnSBndP.js";import"./Details-DpCbxRow.js";import"./KyvDivider-B1Jakrv1.js";import"./KyvSpinner-N3quthdO.js";import"./skillingsbuoye-Sxya4neZ.js";import"./Logo-Ce6IYUwn.js";import"./tooltip-DsDhmCFI.js";import"./preload-helper-Dp1pzeXC.js";import"./color-tokens-DRys5hYJ.js";import"./index-BS4A_uQ_.js";import"./index--KFnCWr5.js";const gr={title:"Components/Stepper",component:sr,decorators:[er],tags:["autodocs","kyv"],argTypes:{}},o=[{label:"Lage vaffelrøre"},{label:"Steke vafler"},{label:"Vente på vafler"},{label:"Ha syltetøy på vafler"},{label:"Selge vafler"},{label:"Ta imot betaling"},{label:"Profitt"}],a={step:3,steps:[...o]},n={args:a},c={args:a,decorators:[r=>e.jsx(s,{width:"form-sidebar",p:4,children:e.jsx(r,{})})]},p={args:{...a,orientation:"vertical"},decorators:[r=>e.jsx(s,{p:4,children:e.jsx(r,{})})]},i={args:{...a,orientation:"horizontal",forceOrientation:!0},decorators:[r=>e.jsx(s,{p:4,children:e.jsx(r,{})})]},l={args:{...a,orientation:"horizontal",forceOrientation:!0},decorators:[r=>e.jsx(s,{p:4,children:e.jsx("div",{"data-size":"sm",children:e.jsx(r,{})})})]},d={args:{...a,labels:"never"},decorators:[r=>e.jsx(s,{p:4,children:e.jsx(r,{})})]},m={args:{...a,labels:"current"},decorators:[r=>e.jsx(s,{p:4,children:e.jsx(r,{})})]},u={args:{step:5,steps:o.map(r=>({...r,onClick:()=>{}}))},decorators:[r=>e.jsx(s,{p:4,children:e.jsx(r,{})})]},S={args:{"data-size":"sm",step:5,steps:o.map(r=>({...r,onClick:()=>{}}))},decorators:[r=>e.jsx(s,{p:4,children:e.jsx(r,{})})]},f={args:{"data-size":"lg",step:5,steps:o.map(r=>({...r,onClick:()=>{}}))},decorators:[r=>e.jsx(s,{p:4,children:e.jsx(r,{})})]},y=["accent","success","warning","danger","neutral"],g={args:{step:5,steps:o.map((r,t)=>({...r,onClick:()=>{},variant:"filled","data-color":y[t%y.length]}))},decorators:[r=>e.jsx(s,{p:4,children:e.jsx(r,{})})]},x={args:{step:5,steps:o.map((r,t)=>({...r,onClick:()=>{},icon:t%3===0?"anchor":t%3===1?"archive":"chat"}))},decorators:[r=>e.jsx(s,{p:4,children:e.jsx(r,{})})]};var h,j,b;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: defaultProps
}`,...(b=(j=n.parameters)==null?void 0:j.docs)==null?void 0:b.source}}};var v,C,k;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: defaultProps,
  decorators: [Story => <Surface width="form-sidebar" p={4}>
        <Story />
      </Surface>]
}`,...(k=(C=c.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};var z,P,H;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    orientation: 'vertical'
  },
  decorators: [Story => <Surface p={4}>
        <Story />
      </Surface>]
}`,...(H=(P=p.parameters)==null?void 0:P.docs)==null?void 0:H.source}}};var L,O,V;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    orientation: 'horizontal',
    forceOrientation: true
  },
  decorators: [Story => <Surface p={4}>
        <Story />
      </Surface>]
}`,...(V=(O=i.parameters)==null?void 0:O.docs)==null?void 0:V.source}}};var F,w,D;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    orientation: 'horizontal',
    forceOrientation: true
  },
  decorators: [Story => <Surface p={4}>
        <div data-size="sm">
          <Story />
        </div>
      </Surface>]
}`,...(D=(w=l.parameters)==null?void 0:w.docs)==null?void 0:D.source}}};var A,E,I;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    labels: 'never'
  },
  decorators: [Story => <Surface p={4}>
        <Story />
      </Surface>]
}`,...(I=(E=d.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};var T,_,G;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    labels: 'current'
  },
  decorators: [Story => <Surface p={4}>
        <Story />
      </Surface>]
}`,...(G=(_=m.parameters)==null?void 0:_.docs)==null?void 0:G.source}}};var R,q,B;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    step: 5,
    steps: steps.map(step => ({
      ...step,
      onClick: () => {}
    }))
  },
  decorators: [Story => <Surface p={4}>
        <Story />
      </Surface>]
}`,...(B=(q=u.parameters)==null?void 0:q.docs)==null?void 0:B.source}}};var J,K,M;S.parameters={...S.parameters,docs:{...(J=S.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    'data-size': 'sm',
    step: 5,
    steps: steps.map(step => ({
      ...step,
      onClick: () => {}
    }))
  },
  decorators: [Story => <Surface p={4}>
        <Story />
      </Surface>]
}`,...(M=(K=S.parameters)==null?void 0:K.docs)==null?void 0:M.source}}};var N,Q,U;f.parameters={...f.parameters,docs:{...(N=f.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    'data-size': 'lg',
    step: 5,
    steps: steps.map(step => ({
      ...step,
      onClick: () => {}
    }))
  },
  decorators: [Story => <Surface p={4}>
        <Story />
      </Surface>]
}`,...(U=(Q=f.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var W,X,Y;g.parameters={...g.parameters,docs:{...(W=g.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    step: 5,
    steps: steps.map((step, index) => ({
      ...step,
      onClick: () => {},
      variant: 'filled',
      'data-color': colors[index % colors.length]
    }))
  },
  decorators: [Story => <Surface p={4}>
        <Story />
      </Surface>]
}`,...(Y=(X=g.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,$,rr;x.parameters={...x.parameters,docs:{...(Z=x.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    step: 5,
    steps: steps.map((step, index) => ({
      ...step,
      onClick: () => {},
      icon: index % 3 === 0 ? 'anchor' : index % 3 === 1 ? 'archive' : 'chat'
    }))
  },
  decorators: [Story => <Surface p={4}>
        <Story />
      </Surface>]
}`,...(rr=($=x.parameters)==null?void 0:$.docs)==null?void 0:rr.source}}};const xr=["Default","AutoVertical","Vertical","HorizontalForced","HorizontalForcedSmall","HideLabels","OnlyCurrentLabel","Clickable","Smaller","Larger","Colors","Icons"];export{c as AutoVertical,u as Clickable,g as Colors,n as Default,d as HideLabels,i as HorizontalForced,l as HorizontalForcedSmall,x as Icons,f as Larger,m as OnlyCurrentLabel,S as Smaller,p as Vertical,xr as __namedExportsOrder,gr as default};
