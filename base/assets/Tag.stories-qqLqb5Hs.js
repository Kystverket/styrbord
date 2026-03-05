import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{T as s}from"./Avatar-jthAwMGU.js";import"./Details--JgYP_rG.js";import"./kyvDivider-GkhM6YIE.js";import"./typography-CdiQYpGP.js";import"./skillingsbuoye-BG85ofhS.js";import"./Logo-DajRw6N7.js";import"./iframe-CGdkqAfW.js";import"./preload-helper-Dp1pzeXC.js";import"./index-9mFn5T4L.js";import"./index-BB5JWHNQ.js";import"./index-BMFLGPM_.js";import"./lite-DaUVFjkg.js";import"./index-kVn2gsck.js";import"./label-BC5kPztK.js";import"./heading-BLMFrSzQ.js";import"./index-D_BFCGgZ.js";const Y={title:"Components/Tag",component:s,tags:["autodocs","ds"],parameters:{customStyles:{justifyContent:"start"},docs:{description:{component:"[Dokumentasjon fra Designsystemet](https://designsystemet.no/no/components/docs/tag/overview)"}}}},p=["accent","extra1","neutral","success","warning","danger","info"],m={args:{children:"New"}},P=["sm","md","lg"],a=({...o})=>e.jsx(e.Fragment,{children:P.map(r=>e.jsx(s,{"data-size":r,...o,children:r},r))});a.parameters={customStyles:{display:"flex",alignItems:"center",gap:"var(--ds-size-2)"}};const t=({...o})=>e.jsx(e.Fragment,{children:p.map(r=>e.jsx(s,{"data-color":r,...o,children:r},r))});t.parameters={customStyles:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:"var(--ds-size-2)",height:"100%",width:"100%",placeItems:"center"}};const n=({...o})=>e.jsx(e.Fragment,{children:p.map(r=>e.jsx(s,{bordered:!0,"data-color":r,...o,children:r},r))});n.parameters={customStyles:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:"var(--ds-size-2)",height:"100%",width:"100%",placeItems:"center"}};const d=({...o})=>e.jsx(e.Fragment,{children:p.map(r=>e.jsx(s,{rounded:!0,"data-color":r,...o,children:r},r))}),c=({...o})=>e.jsx(e.Fragment,{children:P.map(r=>e.jsx(s,{rounded:!0,"data-size":r,...o,children:r},r))}),i=({...o})=>e.jsx(e.Fragment,{children:p.map(r=>e.jsx(s,{rounded:!0,bordered:!0,"data-color":r,...o,children:r},r))});a.__docgenInfo={description:"",methods:[],displayName:"Sizes"};t.__docgenInfo={description:"",methods:[],displayName:"Colors"};n.__docgenInfo={description:"",methods:[],displayName:"Borders"};d.__docgenInfo={description:"",methods:[],displayName:"Rounded"};c.__docgenInfo={description:"",methods:[],displayName:"RoundedWithSizes"};i.__docgenInfo={description:"",methods:[],displayName:"RoundedWithBorders"};var l,u,g;m.parameters={...m.parameters,docs:{...(l=m.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    children: 'New'
  }
}`,...(g=(u=m.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var h,y,T;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`({
  ...rest
}) => {
  return <>
      {sizes.map(size => <Tag key={size} data-size={size} {...rest}>
          {size}
        </Tag>)}
    </>;
}`,...(T=(y=a.parameters)==null?void 0:y.docs)==null?void 0:T.source}}};var z,x,S;t.parameters={...t.parameters,docs:{...(z=t.parameters)==null?void 0:z.docs,source:{originalSource:`({
  ...rest
}) => {
  return <>
      {colorVariants.map(color => <Tag key={color} data-color={color as TagProps['data-color']} {...rest}>
          {color}
        </Tag>)}
    </>;
}`,...(S=(x=t.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var j,f,_;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`({
  ...rest
}) => {
  return <>
      {colorVariants.map(color => <Tag key={color} bordered data-color={color as TagProps['data-color']} {...rest}>
          {color}
        </Tag>)}
    </>;
}`,...(_=(f=n.parameters)==null?void 0:f.docs)==null?void 0:_.source}}};var R,I,w;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`({
  ...rest
}) => {
  return <>
      {colorVariants.map(color => <Tag key={color} rounded data-color={color as TagProps['data-color']} {...rest}>
          {color}
        </Tag>)}
    </>;
}`,...(w=(I=d.parameters)==null?void 0:I.docs)==null?void 0:w.source}}};var N,k,v;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`({
  ...rest
}) => {
  return <>
      {sizes.map(size => <Tag key={size} rounded data-size={size} {...rest}>
          {size}
        </Tag>)}
    </>;
}`,...(v=(k=c.parameters)==null?void 0:k.docs)==null?void 0:v.source}}};var C,B,F;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`({
  ...rest
}) => {
  return <>
      {colorVariants.map(color => <Tag key={color} rounded bordered data-color={color as TagProps['data-color']} {...rest}>
          {color}
        </Tag>)}
    </>;
}`,...(F=(B=i.parameters)==null?void 0:B.docs)==null?void 0:F.source}}};const Z=["Preview","Sizes","Colors","Borders","Rounded","RoundedWithSizes","RoundedWithBorders"];export{n as Borders,t as Colors,m as Preview,d as Rounded,i as RoundedWithBorders,c as RoundedWithSizes,a as Sizes,Z as __namedExportsOrder,Y as default};
