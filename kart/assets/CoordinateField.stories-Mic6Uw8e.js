import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as k}from"./iframe-B6UJ01be.js";import{S as T}from"./MapCenterAction-BzrGzTm0.js";import{C as p}from"./CoordinateField-DkVkk2G6.js";import"./preload-helper-Dp1pzeXC.js";import"./style-CQx_XDRG.js";import"./index-C_iaFZVi.js";import"./index-l_6N_Pjv.js";import"./GeoJsonEditor-YCIdNyYI.js";const A={title:"Kart/CoordinateField",component:p,decorators:[T],tags:["autodocs","kyv"],parameters:{layout:"padded",docs:{story:{inline:!1,iframeHeight:"600px"}}}},l=a=>{const{initialValue:d,...D}=a,[E,F]=k.useState(d);return e.jsx(p,{value:E,onChange:F,...D})},r=()=>{},n={args:{value:void 0,onChange:r},render:()=>e.jsx(l,{label:"Plassering"})},W=()=>{const[a,d]=k.useState({type:"Feature",geometry:{type:"Point",coordinates:[10.3951,63.4305]}});return e.jsxs("div",{style:{maxWidth:700},children:[e.jsx(p,{label:"Skiltplassering",value:a,onChange:d,showCenterAction:!0}),e.jsx("pre",{style:{marginTop:16,fontSize:12,background:"#f5f5f5",padding:12,borderRadius:4},children:JSON.stringify(a,null,2)})]})},o={args:{value:void 0,onChange:r},render:()=>e.jsx(W,{})},t={args:{value:void 0,onChange:r},render:()=>e.jsx(l,{label:"Plassering",error:"Koordinat er påkrevd"})},s={args:{value:void 0,onChange:r},render:()=>e.jsx(l,{height:"1600px"}),parameters:{docs:{story:{iframeHeight:"1750px"}}}},i={args:{value:void 0,onChange:r},render:()=>e.jsx(l,{label:"Plassering",initialValue:{type:"Feature",geometry:{type:"Point",coordinates:[10.3951,63.4305]}},disabled:!0})};var c,u,m;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    value: undefined,
    onChange: noop
  },
  render: () => <Controlled label="Plassering" />
}`,...(m=(u=n.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var g,h,C;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    value: undefined,
    onChange: noop
  },
  render: () => <ControlledTemplate />
}`,...(C=(h=o.parameters)==null?void 0:h.docs)==null?void 0:C.source}}};var f,v,x;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    value: undefined,
    onChange: noop
  },
  render: () => <Controlled label="Plassering" error="Koordinat er påkrevd" />
}`,...(x=(v=t.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var y,b,S;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    value: undefined,
    onChange: noop
  },
  render: () => <Controlled height="1600px" />,
  parameters: {
    docs: {
      story: {
        iframeHeight: "1750px"
      }
    }
  }
}`,...(S=(b=s.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};var j,P,V;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    value: undefined,
    onChange: noop
  },
  render: () => <Controlled label="Plassering" initialValue={{
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [10.3951, 63.4305]
    }
  }} disabled />
}`,...(V=(P=i.parameters)==null?void 0:P.docs)==null?void 0:V.source}}};const J=["Default","WithInitialValue","WithError","TallMap","Disabled"];export{n as Default,i as Disabled,s as TallMap,t as WithError,o as WithInitialValue,J as __namedExportsOrder,A as default};
