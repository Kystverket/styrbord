import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{r as t}from"./iframe-Cf_EaroC.js";import{Q as w,a as y,V as M}from"./style-BRX5dAm0.js";import{b as E,c as L,d as O,e as P}from"./MapCenterAction-DnckoRKo.js";import{g as B,G as R}from"./GeoJsonEditor-D8ik6SW6.js";function I({value:e,onChange:s,error:h,disabled:d=!1,className:D,height:G,showCenterAction:S}){const l=t.useId(),{t:n}=E(),C=t.useRef(B()),u=t.useRef((e==null?void 0:e.properties.direction)??0),J=t.useMemo(()=>{if(e)return{type:"FeatureCollection",features:[{type:"Feature",geometry:e.geometry,properties:{mode:"directional-point",direction:e.properties.direction,id:C.current}}]}},[e]),N=t.useCallback(r=>{var c,k;const i=r.features.find(p=>{var m;return((m=p.properties)==null?void 0:m.mode)==="directional-point"});if(i){(c=i.properties)!=null&&c.id&&(C.current=i.properties.id);const p=((k=i.properties)==null?void 0:k.direction)??u.current;u.current=p;const m={type:"Feature",geometry:i.geometry,properties:{direction:p}};s(m)}},[s]),[g,b]=t.useState((e==null?void 0:e.geometry.coordinates[1])??void 0),[f,j]=t.useState((e==null?void 0:e.geometry.coordinates[0])??void 0),[x,F]=t.useState((e==null?void 0:e.properties.direction)??void 0);t.useEffect(()=>{const r=e==null?void 0:e.geometry.coordinates;b(r?r[1]:void 0),j(r?r[0]:void 0),F((e==null?void 0:e.properties.direction)??void 0),(e==null?void 0:e.properties.direction)!=null&&(u.current=e.properties.direction)},[e]);const a=t.useCallback(r=>{s(r)},[s]),V=t.useCallback((r,i)=>{if(!(r==null&&i==null)&&r!=null&&i!=null){const c={type:"Feature",geometry:{type:"Point",coordinates:[L(i),O(r)]},properties:{direction:(e==null?void 0:e.properties.direction)??0}};a(c)}},[e==null?void 0:e.properties.direction,a]),q=t.useCallback(r=>{if(!e)return;const i={type:"Feature",geometry:e.geometry,properties:{direction:r!=null?Math.round(P(r)):0}};a(i)},[e,a]);return o.jsxs(w,{gap:16,className:[D].filter(Boolean).join(" "),children:[o.jsx(R,{singleFeature:!0,modes:["directional-point"],value:J,onChange:N,disabled:d,height:G,showCenterAction:S}),o.jsxs(w,{horizontal:!0,gap:16,children:[o.jsx(y,{id:`${l}-lat`,inputMode:"decimal",label:n("fields.latitude"),value:g??null,disabled:d,placeholder:n("fields.latitudePlaceholder"),onChange:r=>b(r),onBlur:()=>V(g,f)}),o.jsx(y,{id:`${l}-lon`,inputMode:"decimal",label:n("fields.longitude"),value:f??null,disabled:d,placeholder:n("fields.longitudePlaceholder"),onChange:r=>j(r),onBlur:()=>V(g,f)}),o.jsx(y,{id:`${l}-dir`,inputMode:"decimal",label:n("fields.direction"),value:x??null,disabled:d,placeholder:n("fields.directionPlaceholder"),min:0,max:360,onChange:r=>F(r),onBlur:()=>q(x)})]}),h&&o.jsx(M,{children:h})]})}I.__docgenInfo={description:`CoordinateDirectionField — select a geographic coordinate and a facing
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
}`,signature:{properties:[{key:"direction",value:{name:"number",required:!0}}]},required:!0}}]}}]},name:"value"}],return:{name:"void"}}},description:"Called when the user changes the coordinate or direction."},disabled:{defaultValue:{value:"false",computed:!1},required:!1}},composes:["MapPickerBaseProps"]};export{I as C};
