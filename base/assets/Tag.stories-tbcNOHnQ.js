import{j as e}from"./iframe-Czv3AHya.js";import{T as a}from"./SlotDialog-DWY9LpQH.js";import"./Details-32TxQ_PH.js";import"./kyvDivider-BCRc_Uf9.js";import"./typography-hnOE2O5i.js";import"./skillingsbuoye-CCNtNPj1.js";import"./Logo-C52OS84m.js";import"./tooltip-DjKviRXa.js";import"./preload-helper-Dp1pzeXC.js";import"./index-D1vxHnYL.js";import"./index-BU31YQ6P.js";const hr={title:"Components/Tag",component:a,tags:["autodocs","ds"],parameters:{customStyles:{justifyContent:"start"},docs:{description:{component:"[Dokumentasjon fra Designsystemet](https://designsystemet.no/no/components/docs/tag/overview)"}}}},s=["accent","extra1","neutral","success","warning","danger","info"],g={args:{children:"New"}},ar=["sm","md","lg"],n=({...o})=>e.jsx(e.Fragment,{children:ar.map(r=>e.jsx(a,{"data-size":r,...o,children:r},r))});n.parameters={customStyles:{display:"flex",alignItems:"center",gap:"var(--ds-size-2)"}};const t=({...o})=>e.jsx(e.Fragment,{children:s.map(r=>e.jsx(a,{"data-color":r,...o,children:r},r))});t.parameters={customStyles:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:"var(--ds-size-2)",height:"100%",width:"100%",placeItems:"center"}};const c=({...o})=>e.jsx(e.Fragment,{children:s.map(r=>e.jsx(a,{bordered:!0,"data-color":r,...o,children:r},r))});c.parameters={customStyles:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:"var(--ds-size-2)",height:"100%",width:"100%",placeItems:"center"}};const p=({...o})=>e.jsx(e.Fragment,{children:s.map(r=>e.jsx(a,{rounded:!0,"data-color":r,...o,children:r},r))}),m=({...o})=>e.jsx(e.Fragment,{children:ar.map(r=>e.jsx(a,{rounded:!0,"data-size":r,...o,children:r},r))}),u=({...o})=>e.jsx(e.Fragment,{children:s.map(r=>e.jsx(a,{rounded:!0,bordered:!0,"data-color":r,...o,children:r},r))}),h={args:{children:"Status",icon:"check_circle"}},y={args:{children:"Status",plainBackground:!0}},S={args:{children:"Status",icon:"check_circle",plainBackground:!0,rounded:!0,"data-color":"accent"}},d=({...o})=>e.jsx(e.Fragment,{children:s.map(r=>e.jsx(a,{icon:"info","data-color":r,...o,children:r},r))});d.parameters={customStyles:{display:"flex",flexWrap:"wrap",gap:"var(--ds-size-2)"}};const i=({...o})=>e.jsx(e.Fragment,{children:s.map(r=>e.jsx(a,{rounded:!0,icon:"info",bordered:!0,"data-color":r,...o,children:r},r))});i.parameters={customStyles:{display:"flex",flexWrap:"wrap",gap:"var(--ds-size-2)"}};const l=({...o})=>e.jsx(e.Fragment,{children:s.map(r=>e.jsx(a,{rounded:!0,icon:"info",plainBackground:!0,"data-color":r,...o,children:r},r))});l.parameters={customStyles:{display:"flex",flexWrap:"wrap",gap:"var(--ds-size-2)"}};n.__docgenInfo={description:"",methods:[],displayName:"Sizes"};t.__docgenInfo={description:"",methods:[],displayName:"Colors"};c.__docgenInfo={description:"",methods:[],displayName:"Borders"};p.__docgenInfo={description:"",methods:[],displayName:"Rounded"};m.__docgenInfo={description:"",methods:[],displayName:"RoundedWithSizes"};u.__docgenInfo={description:"",methods:[],displayName:"RoundedWithBorders"};d.__docgenInfo={description:"",methods:[],displayName:"WithIconColors"};i.__docgenInfo={description:"",methods:[],displayName:"RoundedWithIconColors"};l.__docgenInfo={description:"",methods:[],displayName:"RoundedWithIconPlainColors"};var T,f,x;g.parameters={...g.parameters,docs:{...(T=g.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    children: 'New'
  }
}`,...(x=(f=g.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var I,_,k;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`({
  ...rest
}) => {
  return <>
      {sizes.map(size => <Tag key={size} data-size={size} {...rest}>
          {size}
        </Tag>)}
    </>;
}`,...(k=(_=n.parameters)==null?void 0:_.docs)==null?void 0:k.source}}};var z,j,W;t.parameters={...t.parameters,docs:{...(z=t.parameters)==null?void 0:z.docs,source:{originalSource:`({
  ...rest
}) => {
  return <>
      {colorVariants.map(color => <Tag key={color} data-color={color as TagProps['data-color']} {...rest}>
          {color}
        </Tag>)}
    </>;
}`,...(W=(j=t.parameters)==null?void 0:j.docs)==null?void 0:W.source}}};var R,B,C;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`({
  ...rest
}) => {
  return <>
      {colorVariants.map(color => <Tag key={color} bordered data-color={color as TagProps['data-color']} {...rest}>
          {color}
        </Tag>)}
    </>;
}`,...(C=(B=c.parameters)==null?void 0:B.docs)==null?void 0:C.source}}};var P,w,N;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`({
  ...rest
}) => {
  return <>
      {colorVariants.map(color => <Tag key={color} rounded data-color={color as TagProps['data-color']} {...rest}>
          {color}
        </Tag>)}
    </>;
}`,...(N=(w=p.parameters)==null?void 0:w.docs)==null?void 0:N.source}}};var v,F,V;m.parameters={...m.parameters,docs:{...(v=m.parameters)==null?void 0:v.docs,source:{originalSource:`({
  ...rest
}) => {
  return <>
      {sizes.map(size => <Tag key={size} rounded data-size={size} {...rest}>
          {size}
        </Tag>)}
    </>;
}`,...(V=(F=m.parameters)==null?void 0:F.docs)==null?void 0:V.source}}};var b,D,E;u.parameters={...u.parameters,docs:{...(b=u.parameters)==null?void 0:b.docs,source:{originalSource:`({
  ...rest
}) => {
  return <>
      {colorVariants.map(color => <Tag key={color} rounded bordered data-color={color as TagProps['data-color']} {...rest}>
          {color}
        </Tag>)}
    </>;
}`,...(E=(D=u.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};var O,q,A;h.parameters={...h.parameters,docs:{...(O=h.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    children: 'Status',
    icon: 'check_circle'
  }
}`,...(A=(q=h.parameters)==null?void 0:q.docs)==null?void 0:A.source}}};var G,H,J;y.parameters={...y.parameters,docs:{...(G=y.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    children: 'Status',
    plainBackground: true
  }
}`,...(J=(H=y.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var K,L,M;S.parameters={...S.parameters,docs:{...(K=S.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    children: 'Status',
    icon: 'check_circle',
    plainBackground: true,
    rounded: true,
    'data-color': 'accent'
  }
}`,...(M=(L=S.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var Q,U,X;d.parameters={...d.parameters,docs:{...(Q=d.parameters)==null?void 0:Q.docs,source:{originalSource:`({
  ...rest
}) => {
  return <>
      {colorVariants.map(color => <Tag key={color} icon="info" data-color={color as TagProps['data-color']} {...rest}>
          {color}
        </Tag>)}
    </>;
}`,...(X=(U=d.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Y,Z,$;i.parameters={...i.parameters,docs:{...(Y=i.parameters)==null?void 0:Y.docs,source:{originalSource:`({
  ...rest
}) => {
  return <>
      {colorVariants.map(color => <Tag key={color} rounded icon="info" bordered data-color={color as TagProps['data-color']} {...rest}>
          {color}
        </Tag>)}
    </>;
}`,...($=(Z=i.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var rr,er,or;l.parameters={...l.parameters,docs:{...(rr=l.parameters)==null?void 0:rr.docs,source:{originalSource:`({
  ...rest
}) => {
  return <>
      {colorVariants.map(color => <Tag key={color} rounded icon="info" plainBackground data-color={color as TagProps['data-color']} {...rest}>
          {color}
        </Tag>)}
    </>;
}`,...(or=(er=l.parameters)==null?void 0:er.docs)==null?void 0:or.source}}};const yr=["Preview","Sizes","Colors","Borders","Rounded","RoundedWithSizes","RoundedWithBorders","WithIcon","PlainBackground","PlainBackgroundRoundedWithIcon","WithIconColors","RoundedWithIconColors","RoundedWithIconPlainColors"];export{c as Borders,t as Colors,y as PlainBackground,S as PlainBackgroundRoundedWithIcon,g as Preview,p as Rounded,u as RoundedWithBorders,i as RoundedWithIconColors,l as RoundedWithIconPlainColors,m as RoundedWithSizes,n as Sizes,h as WithIcon,d as WithIconColors,yr as __namedExportsOrder,hr as default};
