import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as R}from"./iframe-WbX0AX1K.js";import{S as _,V as z,B as H,a as N,C as q}from"./useMaplibreMap-BWLuc_Pd.js";import{G as l}from"./GeoJsonEditor-aIrAxx-e.js";import"./preload-helper-Dp1pzeXC.js";import"./LayerToggle-CkDy2WVs.js";const ee={title:"Kart/GeoJsonEditor",component:l,decorators:[_],tags:["autodocs","kyv"],parameters:{layout:"padded"}},r={},p={type:"FeatureCollection",features:[{type:"Feature",properties:{name:"Ålesund havn"},geometry:{type:"Polygon",coordinates:[[[6.151401,62.469249],[6.151305,62.468719],[6.152655,62.468677],[6.152711,62.469208],[6.151401,62.469249]]]}},{type:"Feature",properties:{name:"Trondheim"},geometry:{type:"Point",coordinates:[10.3951,63.4305]}},{type:"Feature",properties:{name:"Kystlinje"},geometry:{type:"LineString",coordinates:[[5.3221,60.3913],[6.151,62.469],[10.395,63.43]]}}]},a={args:{value:p}},s={args:{modes:["point"]}},o={args:{modes:["linestring"]}},t={args:{modes:["polygon"]}},n={args:{value:p,disabled:!0}},i={args:{height:"1200px"}},A=()=>{const[m,M]=R.useState({type:"FeatureCollection",features:[]});return e.jsxs("div",{children:[e.jsx(l,{value:m,onChange:M}),e.jsx("pre",{style:{marginTop:16,padding:12,background:"#f5f5f5",borderRadius:8,fontSize:"0.8rem",maxHeight:300,overflow:"auto"},children:JSON.stringify(m,null,2)})]})},d={render:A},c={render:()=>e.jsx(z,{children:e.jsx(H,{children:e.jsx(N,{children:e.jsx(q,{children:e.jsx(l,{value:p,showLayerToggle:!0})})})})})};var u,g,y;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(y=(g=r.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var v,h,P;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    value: sampleData
  }
}`,...(P=(h=a.parameters)==null?void 0:h.docs)==null?void 0:P.source}}};var x,L,f;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    modes: ["point"]
  }
}`,...(f=(L=s.parameters)==null?void 0:L.docs)==null?void 0:f.source}}};var S,D,j;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    modes: ["linestring"]
  }
}`,...(j=(D=o.parameters)==null?void 0:D.docs)==null?void 0:j.source}}};var C,B,T;t.parameters={...t.parameters,docs:{...(C=t.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    modes: ["polygon"]
  }
}`,...(T=(B=t.parameters)==null?void 0:B.docs)==null?void 0:T.source}}};var O,b,w;n.parameters={...n.parameters,docs:{...(O=n.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    value: sampleData,
    disabled: true
  }
}`,...(w=(b=n.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};var E,F,I;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    height: "1200px"
  }
}`,...(I=(F=i.parameters)==null?void 0:F.docs)==null?void 0:I.source}}};var G,J,V;d.parameters={...d.parameters,docs:{...(G=d.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: ControlledTemplate
}`,...(V=(J=d.parameters)==null?void 0:J.docs)==null?void 0:V.source}}};var W,k,K;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <ViewBoundsProvider>
      <BaseLayersProvider>
        <BuiltInLayersProvider>
          <CustomLayersProvider>
            <GeoJsonEditor value={sampleData} showLayerToggle />
          </CustomLayersProvider>
        </BuiltInLayersProvider>
      </BaseLayersProvider>
    </ViewBoundsProvider>
}`,...(K=(k=c.parameters)==null?void 0:k.docs)==null?void 0:K.source}}};const re=["Default","WithInitialData","PointsOnly","LinesOnly","PolygonsOnly","Disabled","TallMap","Controlled","WithLayerToggle"];export{d as Controlled,r as Default,n as Disabled,o as LinesOnly,s as PointsOnly,t as PolygonsOnly,i as TallMap,a as WithInitialData,c as WithLayerToggle,re as __namedExportsOrder,ee as default};
