import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as i}from"./iframe-CFehSRcA.js";import{S as He,V as Le,B as ke,a as Ne,C as Re}from"./MapCenterAction-D-Zds0KP.js";import{G as a}from"./GeoJsonEditor-yPNezZ25.js";import"./preload-helper-Dp1pzeXC.js";const Ue={title:"Kart/GeoJsonEditor",component:a,decorators:[He],tags:["autodocs","kyv"],parameters:{layout:"padded",docs:{story:{inline:!1,iframeHeight:"600px"}}}},C={type:"FeatureCollection",features:[{type:"Feature",properties:{type:"harbor",name:"Ålesund Havn",capacity:500},geometry:{type:"Polygon",coordinates:[[[6.151401,62.469249],[6.151305,62.468719],[6.152655,62.468677],[6.152711,62.469208],[6.151401,62.469249]]]}},{type:"Feature",properties:{type:"lighthouse",name:"Kråkenes Fyr",height:35},geometry:{type:"Point",coordinates:[4.999,62.032]}},{type:"Feature",properties:{type:"shipping_lane",name:"Hovedled Sør–Nord",traffic:"høy"},geometry:{type:"LineString",coordinates:[[5.3221,60.3913],[6.151,62.469],[10.395,63.43]]}}]},Je={type:"FeatureCollection",features:[{type:"Feature",properties:{mode:"directional-point",direction:45,name:"MS Nordlys"},geometry:{type:"Point",coordinates:[10.3951,63.4305]}},{type:"Feature",properties:{mode:"directional-point",direction:200,name:"MS Trollfjord"},geometry:{type:"Point",coordinates:[5.3221,60.3913]}}]},d={},l={args:{value:C,fitBounds:!0,showCenterAction:!0}},Ae=()=>{const[o,n]=i.useState({type:"FeatureCollection",features:[]});return e.jsxs("div",{children:[e.jsx(a,{value:o,onChange:n,showCenterAction:!0}),e.jsx("pre",{style:{marginTop:16,padding:12,background:"#f5f5f5",borderRadius:8,fontSize:"0.8rem",maxHeight:280,overflow:"auto"},children:JSON.stringify(o,null,2)})]})},v={render:Ae},c={args:{modes:["point"]}},p={args:{modes:["linestring"]}},u={args:{modes:["polygon"]}},m={args:{modes:["directional-point"]}},Ee=()=>{const[o,n]=i.useState(Je);return e.jsxs("div",{children:[e.jsx(a,{value:o,onChange:n,modes:["point","directional-point","linestring","polygon"],fitBounds:!0,showCenterAction:!0}),e.jsx("pre",{style:{marginTop:16,padding:12,background:"#f5f5f5",borderRadius:8,fontSize:"0.8rem",maxHeight:280,overflow:"auto"},children:JSON.stringify(o,null,2)})]})},f={render:Ee},g={args:{value:C,fitBounds:!0,disabled:!0}},ze=()=>{const[o,n]=i.useState(null),[P,Oe]=i.useState([]);return e.jsxs("div",{children:[e.jsx(a,{value:C,fitBounds:!0,showCenterAction:!0,hoverContent:{harbor:r=>{var t,s;return e.jsxs("div",{children:[e.jsx("strong",{children:(t=r.properties)==null?void 0:t.name}),e.jsxs("div",{children:["Kapasitet: ",(s=r.properties)==null?void 0:s.capacity," båter"]})]})},lighthouse:r=>{var t,s;return e.jsxs("div",{children:[e.jsx("strong",{children:(t=r.properties)==null?void 0:t.name}),e.jsxs("div",{children:["Høyde: ",(s=r.properties)==null?void 0:s.height," m"]})]})},shipping_lane:r=>{var t,s;return e.jsxs("div",{children:[e.jsx("strong",{children:(t=r.properties)==null?void 0:t.name}),e.jsxs("div",{children:["Trafikk: ",(s=r.properties)==null?void 0:s.traffic]})]})}},onHover:r=>{var t;return n(((t=r==null?void 0:r.properties)==null?void 0:t.name)??null)},onSelect:r=>Oe((r==null?void 0:r.map(t=>{var s;return((s=t.properties)==null?void 0:s.name)??"ukjent"}))??[])}),e.jsxs("div",{style:{marginTop:12,padding:10,background:"#f5f5f5",borderRadius:8,fontSize:"0.85rem"},children:[e.jsxs("div",{children:[e.jsx("strong",{children:"Hover:"})," ",o??"–"]}),e.jsxs("div",{children:[e.jsx("strong",{children:"Valgt:"})," ",P.length>0?P.join(", "):"–"]})]})]})},S={render:ze},y={render:()=>e.jsx(Le,{children:e.jsx(ke,{children:e.jsx(Ne,{children:e.jsx(Re,{children:e.jsx(a,{value:C,fitBounds:!0,showCenterAction:!0})})})})})},Ve=()=>{const[o,n]=i.useState({type:"FeatureCollection",features:[]});return e.jsxs("div",{children:[e.jsx(a,{singleFeature:!0,modes:["point"],value:o,onChange:n}),e.jsx("pre",{style:{marginTop:16,padding:12,background:"#f5f5f5",borderRadius:8,fontSize:"0.8rem",maxHeight:180,overflow:"auto"},children:JSON.stringify(o,null,2)})]})},x={render:Ve},We=()=>{const[o,n]=i.useState({type:"FeatureCollection",features:[]});return e.jsxs("div",{children:[e.jsx(a,{singleFeature:!0,modes:["directional-point"],value:o,onChange:n}),e.jsx("pre",{style:{marginTop:16,padding:12,background:"#f5f5f5",borderRadius:8,fontSize:"0.8rem",maxHeight:180,overflow:"auto"},children:JSON.stringify(o,null,2)})]})},j={render:We},h={args:{singleFeature:!0,modes:["polygon"]}};var b,w,F,D,B;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:"{}",...(F=(w=d.parameters)==null?void 0:w.docs)==null?void 0:F.source},description:{story:`The default state: an empty map with all drawing tools available.
Use the toolbar to draw points, lines, and polygons.`,...(B=(D=d.parameters)==null?void 0:D.docs)==null?void 0:B.description}}};var T,O,H,L,k;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    value: norwegianCoastData,
    fitBounds: true,
    showCenterAction: true
  }
}`,...(H=(O=l.parameters)==null?void 0:O.docs)==null?void 0:H.source},description:{story:"The editor pre-loaded with a FeatureCollection containing a polygon (Ålesund\nHavn), a point (Kråkenes Fyr) and a linestring (Hovedled Sør–Nord).\n`fitBounds` zooms the map to fit all features on mount.",...(k=(L=l.parameters)==null?void 0:L.docs)==null?void 0:k.description}}};var N,R,J;v.parameters={...v.parameters,docs:{...(N=v.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: ControlledTemplate
}`,...(J=(R=v.parameters)==null?void 0:R.docs)==null?void 0:J.source}}};var A,E,z,V,W;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    modes: ["point"]
  }
}`,...(z=(E=c.parameters)==null?void 0:E.docs)==null?void 0:z.source},description:{story:"Only the point tool is available in the toolbar.",...(W=(V=c.parameters)==null?void 0:V.docs)==null?void 0:W.description}}};var G,I,K,_,M;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    modes: ["linestring"]
  }
}`,...(K=(I=p.parameters)==null?void 0:I.docs)==null?void 0:K.source},description:{story:"Only the linestring tool is available in the toolbar.",...(M=(_=p.parameters)==null?void 0:_.docs)==null?void 0:M.description}}};var U,q,Q,X,Y;u.parameters={...u.parameters,docs:{...(U=u.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    modes: ["polygon"]
  }
}`,...(Q=(q=u.parameters)==null?void 0:q.docs)==null?void 0:Q.source},description:{story:"Only the polygon tool is available in the toolbar.",...(Y=(X=u.parameters)==null?void 0:X.docs)==null?void 0:Y.description}}};var Z,$,ee,re,oe;m.parameters={...m.parameters,docs:{...(Z=m.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    modes: ["directional-point"]
  }
}`,...(ee=($=m.parameters)==null?void 0:$.docs)==null?void 0:ee.source},description:{story:"Only directional-point mode. Each placed point stores a `direction` angle\n(0–360°) that can be used to represent headings, bearings, etc.",...(oe=(re=m.parameters)==null?void 0:re.docs)==null?void 0:oe.description}}};var te,se,ne;f.parameters={...f.parameters,docs:{...(te=f.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: DirectionalControlledTemplate
}`,...(ne=(se=f.parameters)==null?void 0:se.docs)==null?void 0:ne.source}}};var ae,ie,de,le,ce;g.parameters={...g.parameters,docs:{...(ae=g.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    value: norwegianCoastData,
    fitBounds: true,
    disabled: true
  }
}`,...(de=(ie=g.parameters)==null?void 0:ie.docs)==null?void 0:de.source},description:{story:"`disabled` removes the toolbar and all interaction. Use this to display\nGeoJSON data without allowing any edits.",...(ce=(le=g.parameters)==null?void 0:le.docs)==null?void 0:ce.description}}};var pe,ue,me;S.parameters={...S.parameters,docs:{...(pe=S.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  render: HoverTemplate
}`,...(me=(ue=S.parameters)==null?void 0:ue.docs)==null?void 0:me.source}}};var ge,ye,he,ve,fe;y.parameters={...y.parameters,docs:{...(ge=y.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  render: () => <ViewBoundsProvider>
      <BaseLayersProvider>
        <BuiltInLayersProvider>
          <CustomLayersProvider>
            <GeoJsonEditor value={norwegianCoastData} fitBounds showCenterAction />
          </CustomLayersProvider>
        </BuiltInLayersProvider>
      </BaseLayersProvider>
    </ViewBoundsProvider>
}`,...(he=(ye=y.parameters)==null?void 0:ye.docs)==null?void 0:he.source},description:{story:"Shows the built-in layer toggle control. Requires the full layer context\nstack (`ViewBoundsProvider`, `BaseLayersProvider`, etc.).",...(fe=(ve=y.parameters)==null?void 0:ve.docs)==null?void 0:fe.description}}};var Se,xe,je;x.parameters={...x.parameters,docs:{...(Se=x.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  render: SingleFeatureTemplate
}`,...(je=(xe=x.parameters)==null?void 0:xe.docs)==null?void 0:je.source}}};var Ce,Pe,be;j.parameters={...j.parameters,docs:{...(Ce=j.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  render: SingleDirectionalTemplate
}`,...(be=(Pe=j.parameters)==null?void 0:Pe.docs)==null?void 0:be.source}}};var we,Fe,De,Be,Te;h.parameters={...h.parameters,docs:{...(we=h.parameters)==null?void 0:we.docs,source:{originalSource:`{
  args: {
    singleFeature: true,
    modes: ["polygon"]
  }
}`,...(De=(Fe=h.parameters)==null?void 0:Fe.docs)==null?void 0:De.source},description:{story:"`singleFeature` with `polygon` mode — only one polygon at a time.",...(Te=(Be=h.parameters)==null?void 0:Be.docs)==null?void 0:Te.description}}};const qe=["Default","WithInitialData","Controlled","PointsOnly","LinesOnly","PolygonsOnly","DirectionalPointsOnly","DirectionalControlled","ReadOnly","WithHoverContent","WithLayerToggle","SingleFeaturePoint","SingleFeatureDirectionalPoint","SingleFeaturePolygon"];export{v as Controlled,d as Default,f as DirectionalControlled,m as DirectionalPointsOnly,p as LinesOnly,c as PointsOnly,u as PolygonsOnly,g as ReadOnly,j as SingleFeatureDirectionalPoint,x as SingleFeaturePoint,h as SingleFeaturePolygon,S as WithHoverContent,l as WithInitialData,y as WithLayerToggle,qe as __namedExportsOrder,Ue as default};
