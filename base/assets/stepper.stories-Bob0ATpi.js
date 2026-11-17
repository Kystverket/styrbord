import{S as er,j as e}from"./iframe-D8QZv9gp.js";import{W as sr,S as s}from"./Dialog-B6LvoOK-.js";import"./shipTypes-hFnSBndP.js";import"./Details-Cgh96-cG.js";import"./KyvDivider-36Ab1G5c.js";import"./KyvSpinner-D3CHcOIs.js";import"./skillingsbuoye-CUU7oQtg.js";import"./Logo-DW3MH3fU.js";import"./tooltip-CntjQeKw.js";import"./preload-helper-Dp1pzeXC.js";import"./color-tokens-DRys5hYJ.js";import"./index-BGVP26BL.js";import"./index-DVI5LKQf.js";const gr={title:"Components/Stepper",component:sr,decorators:[er],tags:["autodocs","kyv"],argTypes:{}},o=[{label:"Lage vaffelrøre"},{label:"Steke vafler"},{label:"Vente på vafler"},{label:"Ha syltetøy på vafler"},{label:"Selge vafler"},{label:"Ta imot betaling"},{label:"Profitt"}],a={step:3,steps:[...o]},n={args:a},c={args:a,decorators:[r=>e.jsx(s,{width:"form-sidebar",p:4,children:e.jsx(r,{})})]},p={args:{...a,orientation:"vertical"},decorators:[r=>e.jsx(s,{p:4,children:e.jsx(r,{})})]},i={args:{...a,orientation:"horizontal",forceOrientation:!0},decorators:[r=>e.jsx(s,{p:4,children:e.jsx(r,{})})]},l={args:{...a,orientation:"horizontal",forceOrientation:!0},decorators:[r=>e.jsx(s,{p:4,children:e.jsx("div",{"data-size":"sm",children:e.jsx(r,{})})})]},d={args:{...a,labels:"never"},decorators:[r=>e.jsx(s,{p:4,children:e.jsx(r,{})})]},m={args:{...a,labels:"current"},decorators:[r=>e.jsx(s,{p:4,children:e.jsx(r,{})})]},u={args:{step:5,steps:o.map(r=>({...r,onClick:()=>{}}))},decorators:[r=>e.jsx(s,{p:4,children:e.jsx(r,{})})]},S={args:{"data-size":"sm",step:5,steps:o.map(r=>({...r,onClick:()=>{}}))},decorators:[r=>e.jsx(s,{p:4,children:e.jsx(r,{})})]},f={args:{"data-size":"lg",step:5,steps:o.map(r=>({...r,onClick:()=>{}}))},decorators:[r=>e.jsx(s,{p:4,children:e.jsx(r,{})})]},y=["accent","success","warning","danger","neutral"],g={args:{step:5,steps:o.map((r,t)=>({...r,onClick:()=>{},variant:"filled","data-color":y[t%y.length]}))},decorators:[r=>e.jsx(s,{p:4,children:e.jsx(r,{})})]},x={args:{step:5,steps:o.map((r,t)=>({...r,onClick:()=>{},icon:t%3===0?"anchor":t%3===1?"archive":"chat"}))},decorators:[r=>e.jsx(s,{p:4,children:e.jsx(r,{})})]};var h,j,b;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(I=(E=d.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};var T,_,R;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    labels: 'current'
  },
  decorators: [Story => <Surface p={4}>
        <Story />
      </Surface>]
}`,...(R=(_=m.parameters)==null?void 0:_.docs)==null?void 0:R.source}}};var W,q,B;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(B=(q=u.parameters)==null?void 0:q.docs)==null?void 0:B.source}}};var G,J,K;S.parameters={...S.parameters,docs:{...(G=S.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(K=(J=S.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var M,N,Q;f.parameters={...f.parameters,docs:{...(M=f.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(Q=(N=f.parameters)==null?void 0:N.docs)==null?void 0:Q.source}}};var U,X,Y;g.parameters={...g.parameters,docs:{...(U=g.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
