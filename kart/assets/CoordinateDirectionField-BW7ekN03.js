import{j as o}from"./index-ChszBRXs.js";import{r}from"./iframe-CJkVeEnS.js";import{d as E,g as D,t as y,e as L,f as O,h as P,i as B}from"./MapCenterAction-CEVGZ88k.js";import{g as R,G as I}from"./GeoJsonEditor-CKHRW3pF.js";function T({value:e,onChange:s,error:h,disabled:d=!1,className:G,height:S,showCenterAction:V,showFullscreenControl:J}){const m=r.useId(),{t:n}=E(),C=r.useRef(R()),u=r.useRef((e==null?void 0:e.properties.direction)??0),N=r.useMemo(()=>{if(e)return{type:"FeatureCollection",features:[{type:"Feature",geometry:e.geometry,properties:{mode:"directional-point",direction:e.properties.direction,id:C.current}}]}},[e]),q=r.useCallback(t=>{var c,w;const i=t.features.find(p=>{var l;return((l=p.properties)==null?void 0:l.mode)==="directional-point"});if(i){(c=i.properties)!=null&&c.id&&(C.current=i.properties.id);const p=((w=i.properties)==null?void 0:w.direction)??u.current;u.current=p;const l={type:"Feature",geometry:i.geometry,properties:{direction:p}};s(l)}},[s]),[g,b]=r.useState((e==null?void 0:e.geometry.coordinates[1])??void 0),[f,j]=r.useState((e==null?void 0:e.geometry.coordinates[0])??void 0),[x,F]=r.useState((e==null?void 0:e.properties.direction)??void 0);r.useEffect(()=>{const t=e==null?void 0:e.geometry.coordinates;b(t?t[1]:void 0),j(t?t[0]:void 0),F((e==null?void 0:e.properties.direction)??void 0),(e==null?void 0:e.properties.direction)!=null&&(u.current=e.properties.direction)},[e]);const a=r.useCallback(t=>{s(t)},[s]),k=r.useCallback((t,i)=>{if(!(t==null&&i==null)&&t!=null&&i!=null){const c={type:"Feature",geometry:{type:"Point",coordinates:[O(i),P(t)]},properties:{direction:(e==null?void 0:e.properties.direction)??0}};a(c)}},[e==null?void 0:e.properties.direction,a]),M=r.useCallback(t=>{if(!e)return;const i={type:"Feature",geometry:e.geometry,properties:{direction:t!=null?Math.round(B(t)):0}};a(i)},[e,a]);return o.jsxs(D,{gap:4,className:[G].filter(Boolean).join(" "),children:[o.jsx(I,{singleFeature:!0,modes:["directional-point"],value:N,onChange:q,disabled:d,height:S,showCenterAction:V,showFullscreenControl:J}),o.jsxs(D,{horizontal:!0,gap:4,children:[o.jsx(y,{id:`${m}-lat`,inputMode:"decimal",label:n("fields.latitude"),value:g??null,disabled:d,placeholder:n("fields.latitudePlaceholder"),onChange:t=>b(t),onBlur:()=>k(g,f)}),o.jsx(y,{id:`${m}-lon`,inputMode:"decimal",label:n("fields.longitude"),value:f??null,disabled:d,placeholder:n("fields.longitudePlaceholder"),onChange:t=>j(t),onBlur:()=>k(g,f)}),o.jsx(y,{id:`${m}-dir`,inputMode:"decimal",label:n("fields.direction"),value:x??null,disabled:d,placeholder:n("fields.directionPlaceholder"),min:0,max:360,onChange:t=>F(t),onBlur:()=>M(x)})]}),h&&o.jsx(L,{children:h})]})}T.__docgenInfo={description:`CoordinateDirectionField — select a geographic coordinate and a facing
direction (0–360°) via an interactive map or manual input fields.

Internally delegates to GeoJsonEditor in single-feature directional-point mode.`,methods:[],displayName:"CoordinateDirectionField",props:{value:{required:!0,tsType:{name:"union",raw:"CoordinateDirectionGeoJSON | undefined",elements:[{name:"intersection",raw:`CoordinateGeoJSON & {
  properties: {
    direction: number;
  };
}`,elements:[{name:"CoordinateGeoJSON"},{name:"signature",type:"object",raw:`{
  properties: {
    direction: number;
  };
}`,signature:{properties:[{key:"properties",value:{name:"signature",type:"object",raw:`{
  direction: number;
}`,signature:{properties:[{key:"direction",value:{name:"number",required:!0}}]},required:!0}}]}}]},{name:"undefined"}]},description:"Controlled value."},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: CoordinateDirectionGeoJSON) => void",signature:{arguments:[{type:{name:"intersection",raw:`CoordinateGeoJSON & {
  properties: {
    direction: number;
  };
}`,elements:[{name:"CoordinateGeoJSON"},{name:"signature",type:"object",raw:`{
  properties: {
    direction: number;
  };
}`,signature:{properties:[{key:"properties",value:{name:"signature",type:"object",raw:`{
  direction: number;
}`,signature:{properties:[{key:"direction",value:{name:"number",required:!0}}]},required:!0}}]}}]},name:"value"}],return:{name:"void"}}},description:"Called when the user changes the coordinate or direction."},disabled:{defaultValue:{value:"false",computed:!1},required:!1}},composes:["MapPickerBaseProps"]};export{T as C};
