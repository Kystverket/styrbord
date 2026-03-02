import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{T as i}from"./Avatar-ByE1-G29.js";import"./Details-BRc03RtG.js";import"./kyvDivider-GkhM6YIE.js";import"./typography-CdiQYpGP.js";import"./skillingsbuoye-BG85ofhS.js";import"./Logo-DajRw6N7.js";import"./iframe-Fup_5jJr.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BThTE4hJ.js";import"./index-EFqP11ex.js";import"./index-MbVUQDGA.js";import"./lite-DaUVFjkg.js";import"./index-CW454lWB.js";import"./label-D6ACcJ2B.js";import"./heading-DWGgcp9w.js";import"./index-CxaBHavo.js";const q={title:"Components/Tag",component:i,tags:["autodocs","ds"],parameters:{customStyles:{justifyContent:"start"},docs:{description:{component:"[Dokumentasjon fra Designsystemet](https://designsystemet.no/no/components/docs/tag/overview)"}}}},z=["accent","extra1","neutral","success","warning","danger","info"],n={args:{children:"New"}},S=["sm","md","lg"],s=({...a})=>e.jsx(e.Fragment,{children:S.map(r=>e.jsx(i,{"data-size":r,...a,children:r},r))});s.parameters={customStyles:{display:"flex",alignItems:"center",gap:"var(--ds-size-2)"}};const o=({...a})=>e.jsx(e.Fragment,{children:z.map(r=>e.jsx(i,{"data-color":r,...a,children:r},r))});o.parameters={customStyles:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:"var(--ds-size-2)",height:"100%",width:"100%",placeItems:"center"}};const t=({...a})=>e.jsx(e.Fragment,{children:z.map(r=>e.jsx(i,{bordered:!0,"data-color":r,...a,children:r},r))});t.parameters={customStyles:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:"var(--ds-size-2)",height:"100%",width:"100%",placeItems:"center"}};s.__docgenInfo={description:"",methods:[],displayName:"Sizes"};o.__docgenInfo={description:"",methods:[],displayName:"Colors"};t.__docgenInfo={description:"",methods:[],displayName:"Borders"};var c,m,p;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    children: 'New'
  }
}`,...(p=(m=n.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var d,l,g;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`({
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
}`,...(x=(f=t.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};const A=["Preview","Sizes","Colors","Borders"];export{t as Borders,o as Colors,n as Preview,s as Sizes,A as __namedExportsOrder,q as default};
