import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as i}from"./iframe-Chfu11GR.js";import{S as Ne,V as Je,B as We,a as Ae,C as Ee}from"./MapCenterAction-CFTjHP9i.js";import{G as n}from"./GeoJsonEditor-BGPULigf.js";import"./preload-helper-Dp1pzeXC.js";const $e={title:"Kart/GeoJsonEditor",component:n,decorators:[Ne],tags:["autodocs","kyv"],parameters:{layout:"padded",docs:{story:{inline:!1,iframeHeight:"600px"}}}},b={type:"FeatureCollection",features:[{type:"Feature",properties:{type:"harbor",name:"Ålesund Havn",capacity:500},geometry:{type:"Polygon",coordinates:[[[6.151401,62.469249],[6.151305,62.468719],[6.152655,62.468677],[6.152711,62.469208],[6.151401,62.469249]]]}},{type:"Feature",properties:{type:"lighthouse",name:"Kråkenes Fyr",height:35},geometry:{type:"Point",coordinates:[4.999,62.032]}},{type:"Feature",properties:{type:"shipping_lane",name:"Hovedled Sør–Nord",traffic:"høy"},geometry:{type:"LineString",coordinates:[[5.3221,60.3913],[6.151,62.469],[10.395,63.43]]}}]},ze={type:"FeatureCollection",features:[{type:"Feature",properties:{mode:"directional-point",direction:45,name:"MS Nordlys"},geometry:{type:"Point",coordinates:[10.3951,63.4305]}},{type:"Feature",properties:{mode:"directional-point",direction:200,name:"MS Trollfjord"},geometry:{type:"Point",coordinates:[5.3221,60.3913]}}]},d={},l={args:{value:b,fitBounds:!0,showCenterAction:!0}},Ve={type:"FeatureCollection",features:[{type:"Feature",properties:{type:"harbor",name:"Havneområde (referanse)"},geometry:{type:"Polygon",coordinates:[[[6.145,62.4715],[6.145,62.4665],[6.16,62.4665],[6.16,62.4715],[6.145,62.4715]]]}}]},Ge=()=>{const[o,a]=i.useState({type:"FeatureCollection",features:[]});return e.jsx(n,{value:o,onChange:a,referenceData:Ve,fitBounds:!0})},v={render:Ge},Ie=()=>{const[o,a]=i.useState({type:"FeatureCollection",features:[]});return e.jsxs("div",{children:[e.jsx(n,{value:o,onChange:a,showCenterAction:!0}),e.jsx("pre",{style:{marginTop:16,padding:12,background:"#f5f5f5",borderRadius:8,fontSize:"0.8rem",maxHeight:280,overflow:"auto"},children:JSON.stringify(o,null,2)})]})},f={render:Ie},c={args:{modes:["point"]}},p={args:{modes:["linestring"]}},u={args:{modes:["polygon"]}},m={args:{modes:["directional-point"]}},Ke=()=>{const[o,a]=i.useState(ze);return e.jsxs("div",{children:[e.jsx(n,{value:o,onChange:a,modes:["point","directional-point","linestring","polygon"],fitBounds:!0,showCenterAction:!0}),e.jsx("pre",{style:{marginTop:16,padding:12,background:"#f5f5f5",borderRadius:8,fontSize:"0.8rem",maxHeight:280,overflow:"auto"},children:JSON.stringify(o,null,2)})]})},S={render:Ke},g={args:{value:b,fitBounds:!0,disabled:!0}},_e=()=>{const[o,a]=i.useState(null),[P,ke]=i.useState([]);return e.jsxs("div",{children:[e.jsx(n,{value:b,fitBounds:!0,showCenterAction:!0,hoverContent:{harbor:r=>{var t,s;return e.jsxs("div",{children:[e.jsx("strong",{children:(t=r.properties)==null?void 0:t.name}),e.jsxs("div",{children:["Kapasitet: ",(s=r.properties)==null?void 0:s.capacity," båter"]})]})},lighthouse:r=>{var t,s;return e.jsxs("div",{children:[e.jsx("strong",{children:(t=r.properties)==null?void 0:t.name}),e.jsxs("div",{children:["Høyde: ",(s=r.properties)==null?void 0:s.height," m"]})]})},shipping_lane:r=>{var t,s;return e.jsxs("div",{children:[e.jsx("strong",{children:(t=r.properties)==null?void 0:t.name}),e.jsxs("div",{children:["Trafikk: ",(s=r.properties)==null?void 0:s.traffic]})]})}},onHover:r=>{var t;return a(((t=r==null?void 0:r.properties)==null?void 0:t.name)??null)},onSelect:r=>ke((r==null?void 0:r.map(t=>{var s;return((s=t.properties)==null?void 0:s.name)??"ukjent"}))??[])}),e.jsxs("div",{style:{marginTop:12,padding:10,background:"#f5f5f5",borderRadius:8,fontSize:"0.85rem"},children:[e.jsxs("div",{children:[e.jsx("strong",{children:"Hover:"})," ",o??"–"]}),e.jsxs("div",{children:[e.jsx("strong",{children:"Valgt:"})," ",P.length>0?P.join(", "):"–"]})]})]})},x={render:_e},y={render:()=>e.jsx(Je,{children:e.jsx(We,{children:e.jsx(Ae,{children:e.jsx(Ee,{children:e.jsx(n,{value:b,fitBounds:!0,showCenterAction:!0})})})})})},Me=()=>{const[o,a]=i.useState({type:"FeatureCollection",features:[]});return e.jsxs("div",{children:[e.jsx(n,{singleFeature:!0,modes:["point"],value:o,onChange:a}),e.jsx("pre",{style:{marginTop:16,padding:12,background:"#f5f5f5",borderRadius:8,fontSize:"0.8rem",maxHeight:180,overflow:"auto"},children:JSON.stringify(o,null,2)})]})},j={render:Me},Ue=()=>{const[o,a]=i.useState({type:"FeatureCollection",features:[]});return e.jsxs("div",{children:[e.jsx(n,{singleFeature:!0,modes:["directional-point"],value:o,onChange:a}),e.jsx("pre",{style:{marginTop:16,padding:12,background:"#f5f5f5",borderRadius:8,fontSize:"0.8rem",maxHeight:180,overflow:"auto"},children:JSON.stringify(o,null,2)})]})},C={render:Ue},h={args:{singleFeature:!0,modes:["polygon"]}};var D,F,w,T,B;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:"{}",...(w=(F=d.parameters)==null?void 0:F.docs)==null?void 0:w.source},description:{story:`The default state: an empty map with all drawing tools available.
Use the toolbar to draw points, lines, and polygons.`,...(B=(T=d.parameters)==null?void 0:T.docs)==null?void 0:B.description}}};var O,H,L,R,k;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    value: norwegianCoastData,
    fitBounds: true,
    showCenterAction: true
  }
}`,...(L=(H=l.parameters)==null?void 0:H.docs)==null?void 0:L.source},description:{story:"The editor pre-loaded with a FeatureCollection containing a polygon (Ålesund\nHavn), a point (Kråkenes Fyr) and a linestring (Hovedled Sør–Nord).\n`fitBounds` zooms the map to fit all features on mount.",...(k=(R=l.parameters)==null?void 0:R.docs)==null?void 0:k.description}}};var N,J,W;v.parameters={...v.parameters,docs:{...(N=v.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: ReferenceDataTemplate
}`,...(W=(J=v.parameters)==null?void 0:J.docs)==null?void 0:W.source}}};var A,E,z;f.parameters={...f.parameters,docs:{...(A=f.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: ControlledTemplate
}`,...(z=(E=f.parameters)==null?void 0:E.docs)==null?void 0:z.source}}};var V,G,I,K,_;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    modes: ["point"]
  }
}`,...(I=(G=c.parameters)==null?void 0:G.docs)==null?void 0:I.source},description:{story:"Only the point tool is available in the toolbar.",...(_=(K=c.parameters)==null?void 0:K.docs)==null?void 0:_.description}}};var M,U,q,Q,X;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    modes: ["linestring"]
  }
}`,...(q=(U=p.parameters)==null?void 0:U.docs)==null?void 0:q.source},description:{story:"Only the linestring tool is available in the toolbar.",...(X=(Q=p.parameters)==null?void 0:Q.docs)==null?void 0:X.description}}};var Y,Z,$,ee,re;u.parameters={...u.parameters,docs:{...(Y=u.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    modes: ["polygon"]
  }
}`,...($=(Z=u.parameters)==null?void 0:Z.docs)==null?void 0:$.source},description:{story:"Only the polygon tool is available in the toolbar.",...(re=(ee=u.parameters)==null?void 0:ee.docs)==null?void 0:re.description}}};var oe,te,ae,se,ne;m.parameters={...m.parameters,docs:{...(oe=m.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    modes: ["directional-point"]
  }
}`,...(ae=(te=m.parameters)==null?void 0:te.docs)==null?void 0:ae.source},description:{story:"Only directional-point mode. Each placed point stores a `direction` angle\n(0–360°) that can be used to represent headings, bearings, etc.",...(ne=(se=m.parameters)==null?void 0:se.docs)==null?void 0:ne.description}}};var ie,de,le;S.parameters={...S.parameters,docs:{...(ie=S.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  render: DirectionalControlledTemplate
}`,...(le=(de=S.parameters)==null?void 0:de.docs)==null?void 0:le.source}}};var ce,pe,ue,me,ge;g.parameters={...g.parameters,docs:{...(ce=g.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    value: norwegianCoastData,
    fitBounds: true,
    disabled: true
  }
}`,...(ue=(pe=g.parameters)==null?void 0:pe.docs)==null?void 0:ue.source},description:{story:"`disabled` removes the toolbar and all interaction. Use this to display\nGeoJSON data without allowing any edits.",...(ge=(me=g.parameters)==null?void 0:me.docs)==null?void 0:ge.description}}};var ye,he,ve;x.parameters={...x.parameters,docs:{...(ye=x.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  render: HoverTemplate
}`,...(ve=(he=x.parameters)==null?void 0:he.docs)==null?void 0:ve.source}}};var fe,Se,xe,je,Ce;y.parameters={...y.parameters,docs:{...(fe=y.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  render: () => <ViewBoundsProvider>
      <BaseLayersProvider>
        <BuiltInLayersProvider>
          <CustomLayersProvider>
            <GeoJsonEditor value={norwegianCoastData} fitBounds showCenterAction />
          </CustomLayersProvider>
        </BuiltInLayersProvider>
      </BaseLayersProvider>
    </ViewBoundsProvider>
}`,...(xe=(Se=y.parameters)==null?void 0:Se.docs)==null?void 0:xe.source},description:{story:"Shows the built-in layer toggle control. Requires the full layer context\nstack (`ViewBoundsProvider`, `BaseLayersProvider`, etc.).",...(Ce=(je=y.parameters)==null?void 0:je.docs)==null?void 0:Ce.description}}};var be,Pe,De;j.parameters={...j.parameters,docs:{...(be=j.parameters)==null?void 0:be.docs,source:{originalSource:`{
  render: SingleFeatureTemplate
}`,...(De=(Pe=j.parameters)==null?void 0:Pe.docs)==null?void 0:De.source}}};var Fe,we,Te;C.parameters={...C.parameters,docs:{...(Fe=C.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
  render: SingleDirectionalTemplate
}`,...(Te=(we=C.parameters)==null?void 0:we.docs)==null?void 0:Te.source}}};var Be,Oe,He,Le,Re;h.parameters={...h.parameters,docs:{...(Be=h.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  args: {
    singleFeature: true,
    modes: ["polygon"]
  }
}`,...(He=(Oe=h.parameters)==null?void 0:Oe.docs)==null?void 0:He.source},description:{story:"`singleFeature` with `polygon` mode — only one polygon at a time.",...(Re=(Le=h.parameters)==null?void 0:Le.docs)==null?void 0:Re.description}}};const er=["Default","WithInitialData","WithReferenceData","Controlled","PointsOnly","LinesOnly","PolygonsOnly","DirectionalPointsOnly","DirectionalControlled","ReadOnly","WithHoverContent","WithLayerToggle","SingleFeaturePoint","SingleFeatureDirectionalPoint","SingleFeaturePolygon"];export{f as Controlled,d as Default,S as DirectionalControlled,m as DirectionalPointsOnly,p as LinesOnly,c as PointsOnly,u as PolygonsOnly,g as ReadOnly,C as SingleFeatureDirectionalPoint,j as SingleFeaturePoint,h as SingleFeaturePolygon,x as WithHoverContent,l as WithInitialData,y as WithLayerToggle,v as WithReferenceData,er as __namedExportsOrder,$e as default};
