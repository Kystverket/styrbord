import{j as r}from"./jsx-runtime-BjG_zV1W.js";import{g as i}from"./Card-KeqL4nDM.js";import"./Details-8YZFjHTH.js";import"./kyvDivider-DSk0K4x1.js";import"./typography-9ubeq_Vx.js";import"./skillingsbuoye-mzpk6Jp8.js";import"./Logo-CEva0-QL.js";import"./index-BWu4c2F4.js";import"./index-B8jaNLVP.js";import"./index-DtgyEQ7Q.js";import"./lite-DaUVFjkg.js";import"./index-BtN5BFRV.js";import"./label-CT_xXrm7.js";import"./heading-B8SX_GYc.js";import"./index-eaWjzoNI.js";const O={title:"Components/Tag",component:i,tags:["autodocs","ds"],parameters:{customStyles:{justifyContent:"start"},docs:{description:{component:"[Dokumentasjon fra Designsystemet](https://designsystemet.no/no/components/docs/tag/overview)"}}}},z=["accent","extra1","neutral","success","warning","danger","info"],n={args:{children:"New"}},S=["sm","md","lg"],s=({...a})=>r.jsx(r.Fragment,{children:S.map(e=>r.jsx(i,{"data-size":e,...a,children:e},e))});s.parameters={customStyles:{display:"flex",alignItems:"center",gap:"var(--ds-size-2)"}};const o=({...a})=>r.jsx(r.Fragment,{children:z.map(e=>r.jsx(i,{"data-color":e,...a,children:e},e))});o.parameters={customStyles:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:"var(--ds-size-2)",height:"100%",width:"100%",placeItems:"center"}};const t=({...a})=>r.jsx(r.Fragment,{children:z.map(e=>r.jsx(i,{bordered:!0,"data-color":e,...a,children:e},e))});t.parameters={customStyles:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:"var(--ds-size-2)",height:"100%",width:"100%",placeItems:"center"}};s.__docgenInfo={description:"",methods:[],displayName:"Sizes"};o.__docgenInfo={description:"",methods:[],displayName:"Colors"};t.__docgenInfo={description:"",methods:[],displayName:"Borders"};var c,m,d;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    children: 'New'
  }
}`,...(d=(m=n.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var p,l,g;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`({
  ...rest
}) => {
  return <>
      {sizes.map(size => <Tag key={size} data-size={size} {...rest}>
          {size}
        </Tag>)}
    </>;
}`,...(g=(l=s.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,h,y;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`({
  ...rest
}) => {
  return <>
      {colorVariants.map(color => <Tag key={color} data-color={color as TagProps['data-color']} {...rest}>
          {color}
        </Tag>)}
    </>;
}`,...(y=(h=o.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var T,f,x;t.parameters={...t.parameters,docs:{...(T=t.parameters)==null?void 0:T.docs,source:{originalSource:`({
  ...rest
}) => {
  return <>
      {colorVariants.map(color => <Tag key={color} bordered data-color={color as TagProps['data-color']} {...rest}>
          {color}
        </Tag>)}
    </>;
}`,...(x=(f=t.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};const R=["Preview","Sizes","Colors","Borders"];export{t as Borders,o as Colors,n as Preview,s as Sizes,R as __namedExportsOrder,O as default};
