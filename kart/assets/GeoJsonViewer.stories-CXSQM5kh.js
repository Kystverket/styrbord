import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{S as w,V as W,B as k,a as V,C as O}from"./useMaplibreMap-BWLuc_Pd.js";import{G as j}from"./GeoJsonViewer-Cxk5fW5F.js";import"./iframe-WbX0AX1K.js";import"./preload-helper-Dp1pzeXC.js";import"./LayerToggle-CkDy2WVs.js";const R="FeatureCollection",D="sql_statement",I={type:"name",properties:{name:"urn:ogc:def:crs:OGC:1.3:CRS84"}},_=[{type:"Feature",properties:{name:"",category:""},geometry:{type:"Polygon",coordinates:[[[6.151401062571232,62.46924959625232],[6.151305862466872,62.46871966665647],[6.152655794227293,62.46867771111397],[6.152711116945804,62.46920875405775],[6.151401062571232,62.46924959625232]]]}},{type:"Feature",properties:{name:"",category:""},geometry:{type:"LineString",coordinates:[[6.154030006373439,62.46916480077377],[6.153425380886375,62.46739712191547]]}}],p={type:R,name:D,crs:I,features:_},X={title:"Kart/GeoJsonViewer",component:j,decorators:[w],tags:["autodocs","kyv"],parameters:{layout:"padded"}},o={args:{data:p}},E={type:"Feature",properties:{name:"Ålesund havn"},geometry:{type:"Polygon",coordinates:[[[6.151401,62.469249],[6.151305,62.468719],[6.152655,62.468677],[6.152711,62.469208],[6.151401,62.469249]]]}},r={args:{data:E}},K={type:"FeatureCollection",features:[{type:"Feature",properties:{name:"Trondheim"},geometry:{type:"Point",coordinates:[10.3951,63.4305]}},{type:"Feature",properties:{name:"Bergen"},geometry:{type:"Point",coordinates:[5.3221,60.3913]}},{type:"Feature",properties:{name:"Tromsø"},geometry:{type:"Point",coordinates:[18.9553,69.6496]}}]},t={args:{data:K}},a={args:{data:p,geoJsonStyle:{fillColor:"rgba(223, 60, 27, 0.25)",lineColor:"#df3c1b",lineWidth:3}}},n={args:{data:p,height:"1600px"}},q={type:"FeatureCollection",features:[{type:"Feature",properties:{name:"Lindesnes fyr",type:"Point"},geometry:{type:"Point",coordinates:[7.0485,57.9825]}},{type:"Feature",properties:{name:"Nordsjø-fyrstasjonar",type:"MultiPoint"},geometry:{type:"MultiPoint",coordinates:[[5.624,58.97],[4.869,61.156],[5.018,62.335]]}},{type:"Feature",properties:{name:"Skipsled Oslo–Kristiansand",type:"LineString"},geometry:{type:"LineString",coordinates:[[10.757,59.912],[10.22,59.13],[9.61,58.68],[8.76,58.46],[8.01,58.15]]}},{type:"Feature",properties:{name:"Ferjesamband",type:"MultiLineString"},geometry:{type:"MultiLineString",coordinates:[[[10.655,59.438],[10.489,59.416]],[[5.733,58.973],[5.917,59.065]]]}},{type:"Feature",properties:{name:"Stavanger hamn",type:"Polygon"},geometry:{type:"Polygon",coordinates:[[[5.726,58.975],[5.726,58.969],[5.738,58.969],[5.738,58.975],[5.726,58.975]]]}},{type:"Feature",properties:{name:"Bergen hamneområde",type:"MultiPolygon"},geometry:{type:"MultiPolygon",coordinates:[[[[5.308,60.401],[5.308,60.397],[5.319,60.397],[5.319,60.401],[5.308,60.401]]],[[[5.309,60.389],[5.309,60.385],[5.321,60.385],[5.321,60.389],[5.309,60.389]]]]}},{type:"Feature",properties:{name:"Avgrensa sone – Oslofjorden",type:"Polygon (with hole)"},geometry:{type:"Polygon",coordinates:[[[10.55,59.82],[10.55,59.78],[10.65,59.78],[10.65,59.82],[10.55,59.82]],[[10.58,59.81],[10.58,59.79],[10.62,59.79],[10.62,59.81],[10.58,59.81]]]}},{type:"Feature",properties:{name:"Tromsø – punkt og hamn",type:"GeometryCollection"},geometry:{type:"GeometryCollection",geometries:[{type:"Point",coordinates:[18.955,69.649]},{type:"Polygon",coordinates:[[[18.94,69.655],[18.94,69.645],[18.97,69.645],[18.97,69.655],[18.94,69.655]]]}]}}]},s={args:{data:q,height:"600px",geoJsonStyle:{fillColor:"rgba(0, 6, 103, 0.15)",lineColor:"#000667",lineWidth:3,pointRadius:7,pointColor:"#df3c1b",pointStrokeColor:"#000667",pointStrokeWidth:2}}},i={args:{data:p,showLayerToggle:!0},render:b=>e.jsx(W,{children:e.jsx(k,{children:e.jsx(V,{children:e.jsx(O,{children:e.jsx(j,{...b})})})})})};var l,c,d;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    data: sampleGeoJson as FeatureCollection
  }
}`,...(d=(c=o.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var y,m,g;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    data: singlePolygon
  }
}`,...(g=(m=r.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var u,P,C;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    data: pointCollection
  }
}`,...(C=(P=t.parameters)==null?void 0:P.docs)==null?void 0:C.source}}};var h,S,F;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    data: sampleGeoJson as FeatureCollection,
    geoJsonStyle: {
      fillColor: "rgba(223, 60, 27, 0.25)",
      lineColor: "#df3c1b",
      lineWidth: 3
    }
  }
}`,...(F=(S=a.parameters)==null?void 0:S.docs)==null?void 0:F.source}}};var f,L,x;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    data: sampleGeoJson as FeatureCollection,
    height: "1600px"
  }
}`,...(x=(L=n.parameters)==null?void 0:L.docs)==null?void 0:x.source}}};var v,T,B;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    data: complexMultiType,
    height: "600px",
    geoJsonStyle: {
      fillColor: "rgba(0, 6, 103, 0.15)",
      lineColor: "#000667",
      lineWidth: 3,
      pointRadius: 7,
      pointColor: "#df3c1b",
      pointStrokeColor: "#000667",
      pointStrokeWidth: 2
    }
  }
}`,...(B=(T=s.parameters)==null?void 0:T.docs)==null?void 0:B.source}}};var G,J,M;i.parameters={...i.parameters,docs:{...(G=i.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    data: sampleGeoJson as FeatureCollection,
    showLayerToggle: true
  },
  render: args => <ViewBoundsProvider>
      <BaseLayersProvider>
        <BuiltInLayersProvider>
          <CustomLayersProvider>
            <GeoJsonViewer {...args} />
          </CustomLayersProvider>
        </BuiltInLayersProvider>
      </BaseLayersProvider>
    </ViewBoundsProvider>
}`,...(M=(J=i.parameters)==null?void 0:J.docs)==null?void 0:M.source}}};const Y=["Default","SinglePolygon","Points","CustomStyle","TallMap","ComplexMultiType","WithLayerToggle"];export{s as ComplexMultiType,a as CustomStyle,o as Default,t as Points,r as SinglePolygon,n as TallMap,i as WithLayerToggle,Y as __namedExportsOrder,X as default};
