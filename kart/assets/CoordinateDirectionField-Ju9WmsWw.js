import{j as o}from"./index-DgquiNwV.js";import{r as t}from"./iframe-cUdYDeHx.js";import{e as E,s as w,q as y,f as L,g as O,h as P,i as B}from"./MapCenterAction-D1nDxXYz.js";import{g as R,G as I}from"./GeoJsonEditor-wJMZFXoF.js";function T({value:e,onChange:s,error:h,disabled:d=!1,className:D,height:G,showCenterAction:S,showFullscreenControl:V}){const m=t.useId(),{t:n}=E(),C=t.useRef(R()),u=t.useRef((e==null?void 0:e.properties.direction)??0),J=t.useMemo(()=>{if(e)return{type:"FeatureCollection",features:[{type:"Feature",geometry:e.geometry,properties:{mode:"directional-point",direction:e.properties.direction,id:C.current}}]}},[e]),N=t.useCallback(r=>{var c,q;const i=r.features.find(p=>{var l;return((l=p.properties)==null?void 0:l.mode)==="directional-point"});if(i){(c=i.properties)!=null&&c.id&&(C.current=i.properties.id);const p=((q=i.properties)==null?void 0:q.direction)??u.current;u.current=p;const l={type:"Feature",geometry:i.geometry,properties:{direction:p}};s(l)}},[s]),[g,b]=t.useState((e==null?void 0:e.geometry.coordinates[1])??void 0),[f,j]=t.useState((e==null?void 0:e.geometry.coordinates[0])??void 0),[x,F]=t.useState((e==null?void 0:e.properties.direction)??void 0);t.useEffect(()=>{const r=e==null?void 0:e.geometry.coordinates;b(r?r[1]:void 0),j(r?r[0]:void 0),F((e==null?void 0:e.properties.direction)??void 0),(e==null?void 0:e.properties.direction)!=null&&(u.current=e.properties.direction)},[e]);const a=t.useCallback(r=>{s(r)},[s]),k=t.useCallback((r,i)=>{if(!(r==null&&i==null)&&r!=null&&i!=null){const c={type:"Feature",geometry:{type:"Point",coordinates:[O(i),P(r)]},properties:{direction:(e==null?void 0:e.properties.direction)??0}};a(c)}},[e==null?void 0:e.properties.direction,a]),M=t.useCallback(r=>{if(!e)return;const i={type:"Feature",geometry:e.geometry,properties:{direction:r!=null?Math.round(B(r)):0}};a(i)},[e,a]);return o.jsxs(w,{gap:4,className:[D].filter(Boolean).join(" "),children:[o.jsx(I,{singleFeature:!0,modes:["directional-point"],value:J,onChange:N,disabled:d,height:G,showCenterAction:S,showFullscreenControl:V}),o.jsxs(w,{horizontal:!0,gap:4,children:[o.jsx(y,{id:`${m}-lat`,inputMode:"decimal",label:n("fields.latitude"),value:g??null,disabled:d,placeholder:n("fields.latitudePlaceholder"),onChange:r=>b(r),onBlur:()=>k(g,f)}),o.jsx(y,{id:`${m}-lon`,inputMode:"decimal",label:n("fields.longitude"),value:f??null,disabled:d,placeholder:n("fields.longitudePlaceholder"),onChange:r=>j(r),onBlur:()=>k(g,f)}),o.jsx(y,{id:`${m}-dir`,inputMode:"decimal",label:n("fields.direction"),value:x??null,disabled:d,placeholder:n("fields.directionPlaceholder"),min:0,max:360,onChange:r=>F(r),onBlur:()=>M(x)})]}),h&&o.jsx(L,{children:h})]})}T.__docgenInfo={description:`CoordinateDirectionField — select a geographic coordinate and a facing
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
