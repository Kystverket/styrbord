import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{r as j}from"./iframe-DwN8Zb5S.js";import{S as C}from"./useMaplibreMap-Clegi6e1.js";import{C as k}from"./CoordinatePicker-DljssslL.js";import"./preload-helper-Dp1pzeXC.js";import"./style-DtRa4plU.js";import"./index-B6cj4iac.js";import"./index-CsPIaTC_.js";const O={title:"Kart/CoordinatePicker",component:k,decorators:[C],tags:["autodocs","kyv"],parameters:{layout:"padded"}},r={args:{label:"Plassering"}},D=()=>{const[n,v]=j.useState({type:"Feature",geometry:{type:"Point",coordinates:[10.3951,63.4305]}});return o.jsxs("div",{style:{maxWidth:700},children:[o.jsx(k,{label:"Skiltplassering",value:n,onChange:v}),o.jsx("pre",{style:{marginTop:16,fontSize:12,background:"#f5f5f5",padding:12,borderRadius:4},children:JSON.stringify(n,null,2)})]})},e={render:()=>o.jsx(D,{})},a={args:{label:"Plassering",error:"Koordinat er påkrevd"}},s={args:{height:"1600px"}},t={args:{label:"Plassering",value:{type:"Feature",geometry:{type:"Point",coordinates:[10.3951,63.4305]}},disabled:!0}};var i,l,p;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    label: "Plassering"
  }
}`,...(p=(l=r.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var c,d,m;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <ControlledTemplate />
}`,...(m=(d=e.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var u,g,y;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    label: "Plassering",
    error: "Koordinat er påkrevd"
  }
}`,...(y=(g=a.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var b,f,h;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    height: "1600px"
  }
}`,...(h=(f=s.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var x,P,S;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    label: "Plassering",
    value: {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [10.3951, 63.4305]
      }
    },
    disabled: true
  }
}`,...(S=(P=t.parameters)==null?void 0:P.docs)==null?void 0:S.source}}};const R=["Default","WithInitialValue","WithError","TallMap","Disabled"];export{r as Default,t as Disabled,s as TallMap,a as WithError,e as WithInitialValue,R as __namedExportsOrder,O as default};
