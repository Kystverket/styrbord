import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{r as t}from"./iframe-DZ-2y5-_.js";import{p as V,a as f,V as q}from"./style-C2yHXQGs.js";import{c as L,b as M,d as B}from"./MapCenterAction-D_c2S1P6.js";import{g as E,G as O}from"./GeoJsonEditor-BfiAo0IF.js";function R({value:e,onChange:n,error:y,disabled:s=!1,className:w,height:D,showCenterAction:G}){const m=t.useId(),C=t.useRef(E()),u=t.useRef((e==null?void 0:e.properties.direction)??0),S=t.useMemo(()=>{if(e)return{type:"FeatureCollection",features:[{type:"Feature",geometry:e.geometry,properties:{mode:"directional-point",direction:e.properties.direction,id:C.current}}]}},[e]),J=t.useCallback(r=>{var a,F;const i=r.features.find(c=>{var p;return((p=c.properties)==null?void 0:p.mode)==="directional-point"});if(i){(a=i.properties)!=null&&a.id&&(C.current=i.properties.id);const c=((F=i.properties)==null?void 0:F.direction)??u.current;u.current=c;const p={type:"Feature",geometry:i.geometry,properties:{direction:c}};n(p)}},[n]),[l,b]=t.useState((e==null?void 0:e.geometry.coordinates[1])??void 0),[g,h]=t.useState((e==null?void 0:e.geometry.coordinates[0])??void 0),[j,x]=t.useState((e==null?void 0:e.properties.direction)??void 0);t.useEffect(()=>{const r=e==null?void 0:e.geometry.coordinates;b(r?r[1]:void 0),h(r?r[0]:void 0),x((e==null?void 0:e.properties.direction)??void 0),(e==null?void 0:e.properties.direction)!=null&&(u.current=e.properties.direction)},[e]);const d=t.useCallback(r=>{n(r)},[n]),k=t.useCallback((r,i)=>{if(!(r==null&&i==null)&&r!=null&&i!=null){const a={type:"Feature",geometry:{type:"Point",coordinates:[L(i),M(r)]},properties:{direction:(e==null?void 0:e.properties.direction)??0}};d(a)}},[e==null?void 0:e.properties.direction,d]),N=t.useCallback(r=>{if(!e)return;const i={type:"Feature",geometry:e.geometry,properties:{direction:r!=null?Math.round(B(r)):0}};d(i)},[e,d]);return o.jsxs(V,{gap:16,className:[w].filter(Boolean).join(" "),children:[o.jsx(O,{singleFeature:!0,modes:["directional-point"],value:S,onChange:J,disabled:s,height:D,showCenterAction:G}),o.jsxs(V,{horizontal:!0,gap:16,children:[o.jsx(f,{id:`${m}-lat`,inputMode:"decimal",label:"Breddegrad (lat)",value:l??null,disabled:s,placeholder:"f.eks. 63.4305",onChange:r=>b(r),onBlur:()=>k(l,g)}),o.jsx(f,{id:`${m}-lon`,inputMode:"decimal",label:"Lengdegrad (lon)",value:g??null,disabled:s,placeholder:"f.eks. 10.3951",onChange:r=>h(r),onBlur:()=>k(l,g)}),o.jsx(f,{id:`${m}-dir`,inputMode:"decimal",label:"Retning (grader)",value:j??null,disabled:s,placeholder:"0–360",min:0,max:360,onChange:r=>x(r),onBlur:()=>N(j)})]}),y&&o.jsx(q,{children:y})]})}R.__docgenInfo={description:`CoordinateDirectionField — select a geographic coordinate and a facing
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
}`,signature:{properties:[{key:"direction",value:{name:"number",required:!0}}]},required:!0}}]}}]},name:"value"}],return:{name:"void"}}},description:"Called when the user changes the coordinate or direction."},disabled:{defaultValue:{value:"false",computed:!1},required:!1}},composes:["MapPickerBaseProps"]};export{R as C};
