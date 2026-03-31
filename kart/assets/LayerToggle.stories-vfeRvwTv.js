import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{S as K,L as S,V as o,B as i,W as O,a as d,C as l,K as V,u as C}from"./MapCenterAction-BzrGzTm0.js";import"./CoordinateDirectionField-DAoxGpmJ.js";import"./CoordinateField-DkVkk2G6.js";import"./GeoJsonViewer-DU6YOxOY.js";import"./GeoJsonEditor-YCIdNyYI.js";import"./style-CQx_XDRG.js";import"./MapField-c3-_J1QB.js";import"./iframe-B6UJ01be.js";import"./index-C_iaFZVi.js";import"./index-l_6N_Pjv.js";import"./preload-helper-Dp1pzeXC.js";const Z={title:"Kart/LayerToggle",component:S,decorators:[K],tags:["autodocs","kyv"],parameters:{layout:"padded"}},M={position:"relative",width:"100%",height:500,borderRadius:8,overflow:"hidden"};function n({defaultOpen:T}){const{mapContainerRef:_}=C({height:"500px"});return e.jsx("div",{ref:_,style:M,children:e.jsx(S,{defaultOpen:T})})}const r={render:()=>e.jsx(o,{children:e.jsx(i,{children:e.jsx(O,{capabilitiesUrl:"https://services.kystverket.no/wms.ashx?service=WMS&request=GetCapabilities",attribution:'© <a href="https://www.kystverket.no/">Kystverket</a>',children:e.jsx(n,{})})})})},t={render:()=>e.jsx(o,{children:e.jsx(i,{children:e.jsx(d,{children:e.jsx(l,{children:e.jsx(n,{defaultOpen:!0})})})})})},a={render:()=>e.jsx(o,{children:e.jsx(i,{children:e.jsx(d,{include:["Havnedata","Bilder"],children:e.jsx(l,{children:e.jsx(n,{defaultOpen:!0})})})})})},W={id:"kartverket-sea",label:"Sjøkart",sources:{"kartverket-sea":{type:"raster",tiles:["https://cache.kartverket.no/v1/wmts/1.0.0/sjokartraster/default/webmercator/{z}/{y}/{x}.png"],tileSize:256,maxzoom:18,attribution:'&copy; <a href="https://www.kartverket.no/">Kartverket</a>'}},layers:[{id:"kartverket-sea-raster",type:"raster",source:"kartverket-sea"}]},I={id:"kartverket-graatone",label:"Gråtone",sources:{"kartverket-graatone":{type:"raster",tiles:["https://cache.kartverket.no/v1/wmts/1.0.0/topograatone/default/webmercator/{z}/{y}/{x}.png"],tileSize:256,maxzoom:18,attribution:'&copy; <a href="https://www.kartverket.no/">Kartverket</a>'}},layers:[{id:"kartverket-graatone-raster",type:"raster",source:"kartverket-graatone"}]},s={render:()=>e.jsx(o,{children:e.jsx(i,{baseLayers:[V,W,I],children:e.jsx(d,{children:e.jsx(l,{children:e.jsx(n,{defaultOpen:!0})})})})})};var p,c,u,y,v;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <ViewBoundsProvider>
      <BaseLayersProvider>
        <WmsCatalogLayersProvider capabilitiesUrl="https://services.kystverket.no/wms.ashx?service=WMS&request=GetCapabilities" attribution='&copy; <a href="https://www.kystverket.no/">Kystverket</a>'>
          <MapWithLayerToggle />
        </WmsCatalogLayersProvider>
      </BaseLayersProvider>
    </ViewBoundsProvider>
}`,...(u=(c=r.parameters)==null?void 0:c.docs)==null?void 0:u.source},description:{story:"Default — collapsed, with built-in layers available.",...(v=(y=r.parameters)==null?void 0:y.docs)==null?void 0:v.description}}};var m,h,L,k,P;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <ViewBoundsProvider>
      <BaseLayersProvider>
        <BuiltInLayersProvider>
          <CustomLayersProvider>
            <MapWithLayerToggle defaultOpen />
          </CustomLayersProvider>
        </BuiltInLayersProvider>
      </BaseLayersProvider>
    </ViewBoundsProvider>
}`,...(L=(h=t.parameters)==null?void 0:h.docs)==null?void 0:L.source},description:{story:"Starts open so layers are immediately visible.",...(P=(k=t.parameters)==null?void 0:k.docs)==null?void 0:P.description}}};var B,g,x,w,E;a.parameters={...a.parameters,docs:{...(B=a.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <ViewBoundsProvider>
      <BaseLayersProvider>
        <BuiltInLayersProvider include={["Havnedata", "Bilder"]}>
          <CustomLayersProvider>
            <MapWithLayerToggle defaultOpen />
          </CustomLayersProvider>
        </BuiltInLayersProvider>
      </BaseLayersProvider>
    </ViewBoundsProvider>
}`,...(x=(g=a.parameters)==null?void 0:g.docs)==null?void 0:x.source},description:{story:"Only a subset of built-in layers (using include filter).",...(E=(w=a.parameters)==null?void 0:w.docs)==null?void 0:E.description}}};var b,j,f,A,R;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <ViewBoundsProvider>
      <BaseLayersProvider baseLayers={[KARTVERKET_TOPO_BASE_LAYER, KARTVERKET_SEA_BASE_LAYER, KARTVERKET_GRAATONE_BASE_LAYER]}>
        <BuiltInLayersProvider>
          <CustomLayersProvider>
            <MapWithLayerToggle defaultOpen />
          </CustomLayersProvider>
        </BuiltInLayersProvider>
      </BaseLayersProvider>
    </ViewBoundsProvider>
}`,...(f=(j=s.parameters)==null?void 0:j.docs)==null?void 0:f.source},description:{story:"Multiple base layers — demonstrates the radio-button base layer switcher.",...(R=(A=s.parameters)==null?void 0:A.docs)==null?void 0:R.description}}};const $=["Default","StartOpen","FilteredLayers","MultipleBaseLayers"];export{r as Default,a as FilteredLayers,s as MultipleBaseLayers,t as StartOpen,$ as __namedExportsOrder,Z as default};
