import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{r as S}from"./iframe-WbX0AX1K.js";import{S as h}from"./useMaplibreMap-BWLuc_Pd.js";import{C as P}from"./CoordinateDirectionPicker-BGuGqg0K.js";import"./preload-helper-Dp1pzeXC.js";import"./style-CIRqKYHb.js";import"./index-CQivvdUf.js";import"./index-Cyx1RDxJ.js";const T={title:"Kart/CoordinateDirectionPicker",component:P,decorators:[h],tags:["autodocs","kyv"],parameters:{layout:"padded"}},e={args:{label:"Plassering og retning"}},k=()=>{const[s,x]=S.useState({type:"Feature",geometry:{type:"Point",coordinates:[10.3951,63.4305]},properties:{direction:45}});return a.jsxs("div",{style:{maxWidth:700},children:[a.jsx(P,{label:"Skiltplassering",value:s,onChange:x}),a.jsx("pre",{style:{marginTop:16,fontSize:12,background:"#f5f5f5",padding:12,borderRadius:4},children:JSON.stringify(s,null,2)})]})},r={render:()=>a.jsx(k,{})},t={args:{label:"Plassering og retning",error:"Koordinat er påkrevd"}},o={args:{label:"Plassering og retning",value:{type:"Feature",geometry:{type:"Point",coordinates:[10.3951,63.4305]},properties:{direction:45}},disabled:!0}};var n,i,l;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    label: "Plassering og retning"
  }
}`,...(l=(i=e.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var d,p,c;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <ControlledTemplate />
}`,...(c=(p=r.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var m,g,u;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: "Plassering og retning",
    error: "Koordinat er påkrevd"
  }
}`,...(u=(g=t.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var y,b,f;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    label: "Plassering og retning",
    value: {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [10.3951, 63.4305]
      },
      properties: {
        direction: 45
      }
    },
    disabled: true
  }
}`,...(f=(b=o.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};const V=["Default","WithInitialValue","WithError","Disabled"];export{e as Default,o as Disabled,t as WithError,r as WithInitialValue,V as __namedExportsOrder,T as default};
