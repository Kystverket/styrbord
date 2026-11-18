import{j as e}from"./index-B7Xji0VT.js";import{r as S}from"./iframe-BBA9jaCq.js";import{S as V}from"./MapCenterAction-BPsMCyFi.js";import{C as l}from"./CoordinateDirectionField-BNU_iKnJ.js";import"./index-VSLqOYU_.js";import"./preload-helper-Dp1pzeXC.js";import"./GeoJsonEditor-DCmx4q7H.js";const R={title:"Kart/CoordinateDirectionField",component:l,decorators:[V],tags:["autodocs","kyv"],parameters:{layout:"padded",docs:{story:{inline:!1,iframeHeight:"600px"}}}},d=r=>{const{initialValue:i,...j}=r,[P,D]=S.useState(i);return e.jsx(l,{value:P,onChange:D,...j})},s=()=>{},n={args:{value:void 0,onChange:s},render:()=>e.jsx(d,{label:"Plassering og retning"})},k=()=>{const[r,i]=S.useState({type:"Feature",geometry:{type:"Point",coordinates:[10.3951,63.4305]},properties:{direction:45}});return e.jsxs("div",{style:{maxWidth:700},children:[e.jsx(l,{label:"Skiltplassering",value:r,onChange:i}),e.jsx("pre",{style:{marginTop:16,fontSize:12,background:"#f5f5f5",padding:12,borderRadius:4},children:JSON.stringify(r,null,2)})]})},o={args:{value:void 0,onChange:s},render:()=>e.jsx(k,{})},a={args:{value:void 0,onChange:s},render:()=>e.jsx(d,{label:"Plassering og retning",error:"Koordinat er påkrevd"})},t={args:{value:void 0,onChange:s},render:()=>e.jsx(d,{label:"Plassering og retning",initialValue:{type:"Feature",geometry:{type:"Point",coordinates:[10.3951,63.4305]},properties:{direction:45}},disabled:!0})};var p,c,g;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    value: undefined,
    onChange: noop
  },
  render: () => <Controlled label="Plassering og retning" />
}`,...(g=(c=n.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};var u,m,C;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    value: undefined,
    onChange: noop
  },
  render: () => <ControlledTemplate />
}`,...(C=(m=o.parameters)==null?void 0:m.docs)==null?void 0:C.source}}};var f,h,v;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    value: undefined,
    onChange: noop
  },
  render: () => <Controlled label="Plassering og retning" error="Koordinat er påkrevd" />
}`,...(v=(h=a.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var y,x,b;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    value: undefined,
    onChange: noop
  },
  render: () => <Controlled label="Plassering og retning" initialValue={{
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [10.3951, 63.4305]
    },
    properties: {
      direction: 45
    }
  }} disabled />
}`,...(b=(x=t.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};const _=["Default","WithInitialValue","WithError","Disabled"];export{n as Default,t as Disabled,a as WithError,o as WithInitialValue,_ as __namedExportsOrder,R as default};
