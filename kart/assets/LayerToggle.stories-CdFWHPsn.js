import{j as e}from"./index-B7Xji0VT.js";import{r as k}from"./iframe-BBA9jaCq.js";import{S as z,L as J,V as u,B as p,W as Q,a as v,C as h,K as $,u as X,c as ee,b as re,x as L}from"./MapCenterAction-BPsMCyFi.js";/* empty css              */import"./CoordinateDirectionField-BNU_iKnJ.js";import"./CoordinateField-C2VibGKX.js";import"./GeoJsonViewer-CDTxah9l.js";import"./GeoJsonEditor-DCmx4q7H.js";import"./MapField-DZ-EGH-K.js";import"./index-VSLqOYU_.js";import"./preload-helper-Dp1pzeXC.js";const ke={title:"Kart/LayerToggle",component:J,decorators:[z],tags:["autodocs","kyv"],parameters:{layout:"padded"}},te={position:"relative",width:"100%",borderRadius:8,overflow:"hidden"};function y({defaultOpen:s,height:a=500}){const{mapContainerRef:t}=X({height:`${a}px`});return e.jsx("div",{ref:t,style:{...te,height:a},children:e.jsx(J,{defaultOpen:s})})}const i={render:()=>e.jsx(u,{children:e.jsx(p,{children:e.jsx(Q,{capabilitiesUrl:"https://services.kystverket.no/wms.ashx?service=WMS&request=GetCapabilities",attribution:'© <a href="https://www.kystverket.no/">Kystverket</a>',children:e.jsx(y,{})})})})},n={render:()=>e.jsx(u,{children:e.jsx(p,{children:e.jsx(v,{children:e.jsx(h,{children:e.jsx(y,{defaultOpen:!0})})})})})},d={render:()=>e.jsx(u,{children:e.jsx(p,{children:e.jsx(v,{include:["Havnedata","Bilder"],children:e.jsx(h,{children:e.jsx(y,{defaultOpen:!0})})})})})},N={id:"kartverket-sea",label:"Sjøkart",sources:{"kartverket-sea":{type:"raster",tiles:["https://cache.kartverket.no/v1/wmts/1.0.0/sjokartraster/default/webmercator/{z}/{y}/{x}.png"],tileSize:256,maxzoom:18,attribution:'&copy; <a href="https://www.kartverket.no/">Kartverket</a>'}},layers:[{id:"kartverket-sea-raster",type:"raster",source:"kartverket-sea"}]},ae={id:"kartverket-graatone",label:"Gråtone",sources:{"kartverket-graatone":{type:"raster",tiles:["https://cache.kartverket.no/v1/wmts/1.0.0/topograatone/default/webmercator/{z}/{y}/{x}.png"],tileSize:256,maxzoom:18,attribution:'&copy; <a href="https://www.kartverket.no/">Kartverket</a>'}},layers:[{id:"kartverket-graatone-raster",type:"raster",source:"kartverket-graatone"}]},l={render:()=>e.jsx(u,{children:e.jsx(p,{baseLayers:[$,N,ae],children:e.jsx(v,{children:e.jsx(h,{children:e.jsx(y,{defaultOpen:!0})})})})})},o=ee.light;function se([s,a],t=.02){return{type:"FeatureCollection",features:[{type:"Feature",properties:{},geometry:{type:"Polygon",coordinates:[[[s-t,a-t/2],[s+t,a-t/2],[s+t,a+t/2],[s-t,a+t/2],[s-t,a-t/2]]]}}]}}const oe=[{id:"tiltak-1",filename:"tillatelse-til-tiltak-wgs84[1]",date:"16.10.2026",status:"Ettersending av informasjon",color:o.primary.baseDefault,borderColor:o.primary.baseDefault,center:[5.32,60.39]},{id:"tiltak-2",filename:"tillatelse-til-tiltak-wgs84",date:"14.10.2026",status:"Søknad",color:o.danger.baseDefault,borderColor:o.danger.borderDefault,center:[5.27,60.41]}];function ie(){const[s,a]=k.useState(oe),t=k.useMemo(()=>s.map(r=>re({type:"geojson",id:r.id,label:r.filename,description:`${r.date} · ${r.status}`,category:"Tiltak",data:se(r.center),fillColor:r.color,lineColor:r.borderColor})),[s]),q=()=>a(r=>[...r,{id:`tiltak-${Date.now()}`,filename:`nytt-tiltak-${r.length+1}.geojson`,date:"10.11.2026",status:"Utkast",color:o.success.baseDefault,borderColor:o.success.borderDefault,center:[5.3+r.length*.03,60.36]}]),U=()=>a(r=>r.slice(0,-1)),H=()=>a(r=>r.map((m,Z)=>Z===0?{...m,center:[m.center[0]+.02,m.center[1]]}:m));return e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{display:"flex",gap:8,marginBottom:8},children:[e.jsx(L,{"data-size":"sm",variant:"outline",onClick:q,children:"Legg til fil"}),e.jsx(L,{"data-size":"sm",variant:"outline",onClick:U,children:"Fjern siste fil"}),e.jsx(L,{"data-size":"sm",variant:"outline",onClick:H,children:"Flytt første fil"})]}),e.jsx(p,{baseLayers:[$,N],children:e.jsx(v,{children:e.jsx(h,{layers:t,children:e.jsx(y,{defaultOpen:!0,height:800})})})})]})}const c={render:()=>e.jsx(u,{defaultCenter:{latitude:60.39,longitude:5.3},defaultZoom:11,children:e.jsx(ie,{})})};var f,g,x,b,P;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <ViewBoundsProvider>
      <BaseLayersProvider>
        <WmsCatalogLayersProvider capabilitiesUrl="https://services.kystverket.no/wms.ashx?service=WMS&request=GetCapabilities" attribution='&copy; <a href="https://www.kystverket.no/">Kystverket</a>'>
          <MapWithLayerToggle />
        </WmsCatalogLayersProvider>
      </BaseLayersProvider>
    </ViewBoundsProvider>
}`,...(x=(g=i.parameters)==null?void 0:g.docs)==null?void 0:x.source},description:{story:"Default — collapsed, with built-in layers available.",...(P=(b=i.parameters)==null?void 0:b.docs)==null?void 0:P.description}}};var j,w,B,E,T;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <ViewBoundsProvider>
      <BaseLayersProvider>
        <BuiltInLayersProvider>
          <CustomLayersProvider>
            <MapWithLayerToggle defaultOpen />
          </CustomLayersProvider>
        </BuiltInLayersProvider>
      </BaseLayersProvider>
    </ViewBoundsProvider>
}`,...(B=(w=n.parameters)==null?void 0:w.docs)==null?void 0:B.source},description:{story:"Starts open so layers are immediately visible.",...(T=(E=n.parameters)==null?void 0:E.docs)==null?void 0:T.description}}};var C,S,A,R,_;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <ViewBoundsProvider>
      <BaseLayersProvider>
        <BuiltInLayersProvider include={["Havnedata", "Bilder"]}>
          <CustomLayersProvider>
            <MapWithLayerToggle defaultOpen />
          </CustomLayersProvider>
        </BuiltInLayersProvider>
      </BaseLayersProvider>
    </ViewBoundsProvider>
}`,...(A=(S=d.parameters)==null?void 0:S.docs)==null?void 0:A.source},description:{story:"Only a subset of built-in layers (using include filter).",...(_=(R=d.parameters)==null?void 0:R.docs)==null?void 0:_.description}}};var K,O,V,M,W;l.parameters={...l.parameters,docs:{...(K=l.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => <ViewBoundsProvider>
      <BaseLayersProvider baseLayers={[KARTVERKET_TOPO_BASE_LAYER, KARTVERKET_SEA_BASE_LAYER, KARTVERKET_GRAATONE_BASE_LAYER]}>
        <BuiltInLayersProvider>
          <CustomLayersProvider>
            <MapWithLayerToggle defaultOpen />
          </CustomLayersProvider>
        </BuiltInLayersProvider>
      </BaseLayersProvider>
    </ViewBoundsProvider>
}`,...(V=(O=l.parameters)==null?void 0:O.docs)==null?void 0:V.source},description:{story:"Multiple base layers — demonstrates the radio-button base layer switcher.",...(W=(M=l.parameters)==null?void 0:M.docs)==null?void 0:W.description}}};var D,I,G,F,Y;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <ViewBoundsProvider defaultCenter={{
    latitude: 60.39,
    longitude: 5.3
  }} defaultZoom={11}>
      <MapWithGeoJsonLayers />
    </ViewBoundsProvider>
}`,...(G=(I=c.parameters)==null?void 0:I.docs)==null?void 0:G.source},description:{story:`GeoJSON files supplied by the application through
\`<CustomLayersProvider layers={...}>\`. Each file becomes its own layer with a
colour swatch and a description line. Adding, removing and changing the
data of a file updates both the map and the menu.`,...(Y=(F=c.parameters)==null?void 0:F.docs)==null?void 0:Y.description}}};const fe=["Default","StartOpen","FilteredLayers","MultipleBaseLayers","WithGeoJsonLayers"];export{i as Default,d as FilteredLayers,l as MultipleBaseLayers,n as StartOpen,c as WithGeoJsonLayers,fe as __namedExportsOrder,ke as default};
