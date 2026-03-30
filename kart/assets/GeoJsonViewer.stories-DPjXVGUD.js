import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{S as ae,V as re,B as oe,W as ie,C as ne,a as le}from"./MapCenterAction-C23-Wfxj.js";import{G as C}from"./GeoJsonViewer-CPCCCrnj.js";import"./iframe-vaUSPR8c.js";import"./preload-helper-Dp1pzeXC.js";const ce="FeatureCollection",pe="sql_statement",de={type:"name",properties:{name:"urn:ogc:def:crs:OGC:1.3:CRS84"}},ye=[{type:"Feature",properties:{name:"",category:""},geometry:{type:"Polygon",coordinates:[[[6.151401062571232,62.46924959625232],[6.151305862466872,62.46871966665647],[6.152655794227293,62.46867771111397],[6.152711116945804,62.46920875405775],[6.151401062571232,62.46924959625232]]]}},{type:"Feature",properties:{name:"",category:""},geometry:{type:"LineString",coordinates:[[6.154030006373439,62.46916480077377],[6.153425380886375,62.46739712191547]]}}],v={type:ce,name:pe,crs:de,features:ye},Se={title:"Kart/GeoJsonViewer",component:C,decorators:[ae],tags:["autodocs","kyv"],parameters:{layout:"padded"}},s={args:{data:v}},me={type:"Feature",properties:{name:"Ålesund havn"},geometry:{type:"Polygon",coordinates:[[[6.151401,62.469249],[6.151305,62.468719],[6.152655,62.468677],[6.152711,62.469208],[6.151401,62.469249]]]}},a={args:{data:me}},se={type:"FeatureCollection",features:[{type:"Feature",properties:{name:"Trondheim"},geometry:{type:"Point",coordinates:[10.3951,63.4305]}},{type:"Feature",properties:{name:"Bergen"},geometry:{type:"Point",coordinates:[5.3221,60.3913]}},{type:"Feature",properties:{name:"Tromsø"},geometry:{type:"Point",coordinates:[18.9553,69.6496]}}]},i={args:{data:se}},l={args:{data:v,geoJsonStyle:{fillColor:"rgba(223, 60, 27, 0.25)",lineColor:"#df3c1b",lineWidth:3}}},c={args:{data:v,height:"1600px"}},ge={type:"FeatureCollection",features:[{type:"Feature",properties:{name:"Lindesnes fyr",type:"Point"},geometry:{type:"Point",coordinates:[7.0485,57.9825]}},{type:"Feature",properties:{name:"Nordsjø-fyrstasjonar",type:"MultiPoint"},geometry:{type:"MultiPoint",coordinates:[[5.624,58.97],[4.869,61.156],[5.018,62.335]]}},{type:"Feature",properties:{name:"Skipsled Oslo–Kristiansand",type:"LineString"},geometry:{type:"LineString",coordinates:[[10.757,59.912],[10.22,59.13],[9.61,58.68],[8.76,58.46],[8.01,58.15]]}},{type:"Feature",properties:{name:"Ferjesamband",type:"MultiLineString"},geometry:{type:"MultiLineString",coordinates:[[[10.655,59.438],[10.489,59.416]],[[5.733,58.973],[5.917,59.065]]]}},{type:"Feature",properties:{name:"Stavanger hamn",type:"Polygon"},geometry:{type:"Polygon",coordinates:[[[5.726,58.975],[5.726,58.969],[5.738,58.969],[5.738,58.975],[5.726,58.975]]]}},{type:"Feature",properties:{name:"Bergen hamneområde",type:"MultiPolygon"},geometry:{type:"MultiPolygon",coordinates:[[[[5.308,60.401],[5.308,60.397],[5.319,60.397],[5.319,60.401],[5.308,60.401]]],[[[5.309,60.389],[5.309,60.385],[5.321,60.385],[5.321,60.389],[5.309,60.389]]]]}},{type:"Feature",properties:{name:"Avgrensa sone – Oslofjorden",type:"Polygon (with hole)"},geometry:{type:"Polygon",coordinates:[[[10.55,59.82],[10.55,59.78],[10.65,59.78],[10.65,59.82],[10.55,59.82]],[[10.58,59.81],[10.58,59.79],[10.62,59.79],[10.62,59.81],[10.58,59.81]]]}},{type:"Feature",properties:{name:"Tromsø – punkt og hamn",type:"GeometryCollection"},geometry:{type:"GeometryCollection",geometries:[{type:"Point",coordinates:[18.955,69.649]},{type:"Polygon",coordinates:[[[18.94,69.655],[18.94,69.645],[18.97,69.645],[18.97,69.655],[18.94,69.655]]]}]}}]},p={args:{data:ge,height:"600px",geoJsonStyle:{fillColor:"rgba(0, 6, 103, 0.15)",lineColor:"#000667",lineWidth:3,pointRadius:7,pointColor:"#df3c1b",pointStrokeColor:"#000667",pointStrokeWidth:2}}},d={args:{data:v},render:e=>t.jsx(re,{children:t.jsx(oe,{children:t.jsx(le,{children:t.jsx(ne,{children:t.jsx(C,{...e})})})})})},f={type:"FeatureCollection",features:[{id:1,type:"Feature",properties:{type:"harbor",name:"Stavanger havn",capacity:250,status:"operational"},geometry:{type:"Polygon",coordinates:[[[5.726,58.975],[5.726,58.969],[5.738,58.969],[5.738,58.975],[5.726,58.975]]]}},{id:2,type:"Feature",properties:{type:"lighthouse",name:"Lindesnes fyr",established:1656,height:16},geometry:{type:"Point",coordinates:[7.0485,57.9825]}},{id:3,type:"Feature",properties:{type:"shipping_lane",name:"Skagerrak skipslei",depth:45,traffic:"high"},geometry:{type:"LineString",coordinates:[[10.757,59.912],[10.22,59.13],[9.61,58.68],[8.76,58.46]]}},{id:4,type:"Feature",properties:{type:"harbor",name:"Bergen havn",capacity:400,status:"maintenance"},geometry:{type:"Polygon",coordinates:[[[5.308,60.401],[5.308,60.393],[5.321,60.393],[5.321,60.401],[5.308,60.401]]]}},{id:5,type:"Feature",properties:{type:"lighthouse",name:"Runde fyr",established:1767,height:24},geometry:{type:"Point",coordinates:[5.018,62.335]}}]},y={args:{data:f,height:"500px",hoverable:!0,selectable:!0,hoverContent:{harbor:e=>{var r,n,o;return t.jsxs("div",{style:{padding:"4px 0"},children:[t.jsx("div",{style:{fontWeight:600,color:"#0062ba"},children:"🏭 Havn"}),t.jsx("div",{children:(r=e.properties)==null?void 0:r.name}),t.jsxs("div",{style:{fontSize:"0.85em",color:"#666"},children:["Kapasitet: ",(n=e.properties)==null?void 0:n.capacity," skip"]}),t.jsxs("div",{style:{fontSize:"0.85em",color:"#666"},children:["Status: ",(o=e.properties)==null?void 0:o.status]})]})},lighthouse:e=>{var r,n,o;return t.jsxs("div",{style:{padding:"4px 0"},children:[t.jsx("div",{style:{fontWeight:600,color:"#df3c1b"},children:"🏠 Fyrtårn"}),t.jsx("div",{children:(r=e.properties)==null?void 0:r.name}),t.jsxs("div",{style:{fontSize:"0.85em",color:"#666"},children:["Etablert: ",(n=e.properties)==null?void 0:n.established]}),t.jsxs("div",{style:{fontSize:"0.85em",color:"#666"},children:["Høyde: ",(o=e.properties)==null?void 0:o.height,"m"]})]})},shipping_lane:e=>{var r,n,o;return t.jsxs("div",{style:{padding:"4px 0"},children:[t.jsx("div",{style:{fontWeight:600,color:"#000667"},children:"🚢 Skipslei"}),t.jsx("div",{children:(r=e.properties)==null?void 0:r.name}),t.jsxs("div",{style:{fontSize:"0.85em",color:"#666"},children:["Dybde: ",(n=e.properties)==null?void 0:n.depth,"m"]}),t.jsxs("div",{style:{fontSize:"0.85em",color:"#666"},children:["Trafikk: ",(o=e.properties)==null?void 0:o.traffic]})]})}},onSelect:e=>{console.log("Selection changed:",e)},onHover:e=>{var r;e&&console.log("Hovering:",(r=e.properties)==null?void 0:r.name)}},parameters:{docs:{description:{story:"Demonstrates custom hover content based on feature type. Hover over different features to see type-specific tooltips. Click features to select them (use Ctrl/Cmd for multi-select)."}}}},m={args:{data:f,height:"500px",selectable:!0,onSelect:e=>{if(e&&e.length>0){const r=e.map(n=>{var o;return(o=n.properties)==null?void 0:o.name}).join(", ");alert(`Selected: ${r}

Use Ctrl/Cmd + Click to multi-select.`)}else console.log("Selection cleared")}},parameters:{docs:{description:{story:"Click a feature to select it and see an alert. Click empty space to deselect. Hold Ctrl (Windows) or Cmd (Mac) while clicking to add/remove from selection."}}}},g={args:{data:f,height:"500px",hoverable:!0,selectable:!1,onHover:e=>{var r;e&&console.log("Hovering:",(r=e.properties)==null?void 0:r.name)}},parameters:{docs:{description:{story:"Hover events are enabled but selection is disabled. Features can still be hovered for tooltips."}}}},u={args:{data:f,height:"500px",hoverable:!1,selectable:!1},parameters:{docs:{description:{story:"Both hover and selection are disabled. The map is view-only."}}}},h={args:{data:se,height:"500px",showLayerToggle:!0,onCoordinateClick:e=>{console.log("Coordinate clicked:",e.coordinate),console.log("WMS layer results:",e.layerResults);for(const r of e.layerResults)console.log(`  ${r.layerName}:`,r.html)}},render:e=>t.jsx(re,{children:t.jsx(oe,{children:t.jsx(ie,{capabilitiesUrl:"https://services.kystverket.no/wms.ashx?service=WMS&request=GetCapabilities",attribution:'© <a href="https://www.kystverket.no/">Kystverket</a>',children:t.jsx(ne,{children:t.jsx(C,{...e})})})})}),parameters:{docs:{description:{story:"Click on the map to trigger `onCoordinateClick`. Enable WMS catalog layers via the layer toggle, then click to see GetFeatureInfo results logged to the console. Open the browser console or the Storybook Actions panel to see the output."}}}};var S,b,x;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    data: sampleGeoJson as FeatureCollection
  }
}`,...(x=(b=s.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var k,P,F;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    data: singlePolygon
  }
}`,...(F=(P=a.parameters)==null?void 0:P.docs)==null?void 0:F.source}}};var j,w,L;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    data: pointCollection
  }
}`,...(L=(w=i.parameters)==null?void 0:w.docs)==null?void 0:L.source}}};var W,H,M;l.parameters={...l.parameters,docs:{...(W=l.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    data: sampleGeoJson as FeatureCollection,
    geoJsonStyle: {
      fillColor: "rgba(223, 60, 27, 0.25)",
      lineColor: "#df3c1b",
      lineWidth: 3
    }
  }
}`,...(M=(H=l.parameters)==null?void 0:H.docs)==null?void 0:M.source}}};var B,G,T;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    data: sampleGeoJson as FeatureCollection,
    height: "1600px"
  }
}`,...(T=(G=c.parameters)==null?void 0:G.docs)==null?void 0:T.source}}};var D,J,z;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(z=(J=p.parameters)==null?void 0:J.docs)==null?void 0:z.source}}};var V,I,R;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    data: sampleGeoJson as FeatureCollection
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
}`,...(R=(I=d.parameters)==null?void 0:I.docs)==null?void 0:R.source}}};var O,E,K;y.parameters={...y.parameters,docs:{...(O=y.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    data: interactiveData,
    height: "500px",
    hoverable: true,
    selectable: true,
    hoverContent: {
      harbor: feature => <div style={{
        padding: "4px 0"
      }}>
          <div style={{
          fontWeight: 600,
          color: "#0062ba"
        }}>🏭 Havn</div>
          <div>{feature.properties?.name}</div>
          <div style={{
          fontSize: "0.85em",
          color: "#666"
        }}>
            Kapasitet: {feature.properties?.capacity} skip
          </div>
          <div style={{
          fontSize: "0.85em",
          color: "#666"
        }}>
            Status: {feature.properties?.status}
          </div>
        </div>,
      lighthouse: feature => <div style={{
        padding: "4px 0"
      }}>
          <div style={{
          fontWeight: 600,
          color: "#df3c1b"
        }}>🏠 Fyrtårn</div>
          <div>{feature.properties?.name}</div>
          <div style={{
          fontSize: "0.85em",
          color: "#666"
        }}>
            Etablert: {feature.properties?.established}
          </div>
          <div style={{
          fontSize: "0.85em",
          color: "#666"
        }}>
            Høyde: {feature.properties?.height}m
          </div>
        </div>,
      shipping_lane: feature => <div style={{
        padding: "4px 0"
      }}>
          <div style={{
          fontWeight: 600,
          color: "#000667"
        }}>🚢 Skipslei</div>
          <div>{feature.properties?.name}</div>
          <div style={{
          fontSize: "0.85em",
          color: "#666"
        }}>
            Dybde: {feature.properties?.depth}m
          </div>
          <div style={{
          fontSize: "0.85em",
          color: "#666"
        }}>
            Trafikk: {feature.properties?.traffic}
          </div>
        </div>
    },
    onSelect: features => {
      console.log("Selection changed:", features);
    },
    onHover: feature => {
      if (feature) {
        console.log("Hovering:", feature.properties?.name);
      }
    }
  },
  parameters: {
    docs: {
      description: {
        story: "Demonstrates custom hover content based on feature type. Hover over different features to see type-specific tooltips. Click features to select them (use Ctrl/Cmd for multi-select)."
      }
    }
  }
}`,...(K=(E=y.parameters)==null?void 0:E.docs)==null?void 0:K.source}}};var _,N,U;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    data: interactiveData,
    height: "500px",
    selectable: true,
    onSelect: features => {
      if (features && features.length > 0) {
        const names = features.map(f => f.properties?.name).join(", ");
        alert(\`Selected: \${names}\\n\\nUse Ctrl/Cmd + Click to multi-select.\`);
      } else {
        console.log("Selection cleared");
      }
    }
  },
  parameters: {
    docs: {
      description: {
        story: "Click a feature to select it and see an alert. Click empty space to deselect. Hold Ctrl (Windows) or Cmd (Mac) while clicking to add/remove from selection."
      }
    }
  }
}`,...(U=(N=m.parameters)==null?void 0:N.docs)==null?void 0:U.source}}};var $,q,A;g.parameters={...g.parameters,docs:{...($=g.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    data: interactiveData,
    height: "500px",
    hoverable: true,
    selectable: false,
    onHover: feature => {
      if (feature) {
        console.log("Hovering:", feature.properties?.name);
      }
    }
  },
  parameters: {
    docs: {
      description: {
        story: "Hover events are enabled but selection is disabled. Features can still be hovered for tooltips."
      }
    }
  }
}`,...(A=(q=g.parameters)==null?void 0:q.docs)==null?void 0:A.source}}};var Q,X,Y;u.parameters={...u.parameters,docs:{...(Q=u.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    data: interactiveData,
    height: "500px",
    hoverable: false,
    selectable: false
  },
  parameters: {
    docs: {
      description: {
        story: "Both hover and selection are disabled. The map is view-only."
      }
    }
  }
}`,...(Y=(X=u.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,te;h.parameters={...h.parameters,docs:{...(Z=h.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    data: pointCollection,
    height: "500px",
    showLayerToggle: true,
    onCoordinateClick: result => {
      console.log("Coordinate clicked:", result.coordinate);
      console.log("WMS layer results:", result.layerResults);
      for (const layer of result.layerResults) {
        console.log(\`  \${layer.layerName}:\`, layer.html);
      }
    }
  },
  render: args => <ViewBoundsProvider>
      <BaseLayersProvider>
        <WmsCatalogLayersProvider capabilitiesUrl="https://services.kystverket.no/wms.ashx?service=WMS&request=GetCapabilities" attribution='&copy; <a href="https://www.kystverket.no/">Kystverket</a>'>
          <CustomLayersProvider>
            <GeoJsonViewer {...args} />
          </CustomLayersProvider>
        </WmsCatalogLayersProvider>
      </BaseLayersProvider>
    </ViewBoundsProvider>,
  parameters: {
    docs: {
      description: {
        story: "Click on the map to trigger \`onCoordinateClick\`. Enable WMS catalog layers via the layer toggle, then click to see GetFeatureInfo results logged to the console. Open the browser console or the Storybook Actions panel to see the output."
      }
    }
  }
}`,...(te=(ee=h.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};const be=["Default","SinglePolygon","Points","CustomStyle","TallMap","ComplexMultiType","WithLayerToggle","Interactive","SelectionDemo","HoverOnly","NonInteractive","CoordinateClick"];export{p as ComplexMultiType,h as CoordinateClick,l as CustomStyle,s as Default,g as HoverOnly,y as Interactive,u as NonInteractive,i as Points,m as SelectionDemo,a as SinglePolygon,c as TallMap,d as WithLayerToggle,be as __namedExportsOrder,Se as default};
