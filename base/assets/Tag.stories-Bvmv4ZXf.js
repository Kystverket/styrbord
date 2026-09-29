import{j as a}from"./iframe-DR0OYCpq.js";import{b as o,S as y}from"./Dialog-ZBxDd1Uk.js";import"./shipTypes-hFnSBndP.js";import"./Details-gblrFMVs.js";import"./KyvDivider-D67Jstwx.js";import"./KyvSpinner-zXYCJit5.js";import"./skillingsbuoye-DjMihQYC.js";import"./Logo-BKoiHjcJ.js";import"./tooltip-DnfQk6b_.js";import{s as tr,a as nr}from"./color-tokens-DRys5hYJ.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DNwtzyee.js";import"./index-CPkxmeg0.js";const xr={title:"Components/Tag",component:o,tags:["autodocs","ds"],parameters:{customStyles:{justifyContent:"start"},docs:{description:{component:"[Dokumentasjon fra Designsystemet](https://designsystemet.no/no/components/docs/tag/overview)"}}}},s=[...tr,...nr],g={args:{children:"New"}},sr=["sm","md","lg"],t=({...e})=>a.jsx(y,{horizontal:!0,wrap:!0,gap:2,children:sr.map(r=>a.jsxs(a.Fragment,{children:[a.jsx(o,{"data-size":r,...e,children:r},r),a.jsx(o,{icon:"anchor","data-size":r,...e,children:r},r)]}))});t.parameters={customStyles:{display:"flex",alignItems:"center",gap:"var(--ds-size-2)"}};const n=({...e})=>a.jsx(y,{horizontal:!0,wrap:!0,gap:2,children:s.map(r=>a.jsx(o,{"data-color":r,...e,children:r},r))});n.parameters={customStyles:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:"var(--ds-size-2)",height:"100%",width:"100%",placeItems:"center"}};const c=({...e})=>a.jsx(y,{horizontal:!0,wrap:!0,gap:2,children:s.map(r=>a.jsx(o,{variant:"outline","data-color":r,...e,children:r},r))});c.parameters={customStyles:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:"var(--ds-size-2)",height:"100%",width:"100%",placeItems:"center"}};const p=({...e})=>a.jsx(a.Fragment,{children:s.map(r=>a.jsx(o,{radius:"full","data-color":r,...e,children:r},r))}),u=({...e})=>a.jsx(a.Fragment,{children:sr.map(r=>a.jsx(o,{radius:"full","data-size":r,...e,children:r},r))}),m=({...e})=>a.jsx(a.Fragment,{children:s.map(r=>a.jsx(o,{radius:"full",variant:"outline","data-color":r,...e,children:r},r))}),h={args:{children:"Status",icon:"check_circle"}},f={args:{children:"Status","data-color-transparent":!0}},S={args:{children:"Status",icon:"check_circle",radius:"full","data-color":"accent","data-color-transparent":!0}},i=({...e})=>a.jsx(a.Fragment,{children:s.map(r=>a.jsx(o,{icon:"info","data-color":r,...e,children:r},r))});i.parameters={customStyles:{display:"flex",flexWrap:"wrap",gap:"var(--ds-size-2)"}};const d=({...e})=>a.jsx(a.Fragment,{children:s.map(r=>a.jsx(o,{radius:"full",icon:"info",variant:"outline","data-color":r,...e,children:r},r))});d.parameters={customStyles:{display:"flex",flexWrap:"wrap",gap:"var(--ds-size-2)"}};const l=({...e})=>a.jsx(a.Fragment,{children:s.map(r=>a.jsx(o,{radius:"full",icon:"info",variant:"outline","data-color":r,"data-color-transparent":!0,...e,children:r},r))});l.parameters={customStyles:{display:"flex",flexWrap:"wrap",gap:"var(--ds-size-2)"}};t.__docgenInfo={description:"",methods:[],displayName:"Sizes"};n.__docgenInfo={description:"",methods:[],displayName:"Colors"};c.__docgenInfo={description:"",methods:[],displayName:"Borders"};p.__docgenInfo={description:"",methods:[],displayName:"Rounded"};u.__docgenInfo={description:"",methods:[],displayName:"RoundedWithSizes"};m.__docgenInfo={description:"",methods:[],displayName:"RoundedWithBorders"};i.__docgenInfo={description:"",methods:[],displayName:"WithIconColors"};d.__docgenInfo={description:"",methods:[],displayName:"RoundedWithIconColors"};l.__docgenInfo={description:"",methods:[],displayName:"RoundedWithIconPlainColors"};var T,x,z;g.parameters={...g.parameters,docs:{...(T=g.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    children: 'New'
  }
}`,...(z=(x=g.parameters)==null?void 0:x.docs)==null?void 0:z.source}}};var I,_,j;t.parameters={...t.parameters,docs:{...(I=t.parameters)==null?void 0:I.docs,source:{originalSource:`({
  ...rest
}) => {
  return <Surface horizontal wrap gap={2}>
      {sizes.map(size => <>
          <Tag key={size} data-size={size} {...rest}>
            {size}
          </Tag>
          <Tag key={size} icon="anchor" data-size={size} {...rest}>
            {size}
          </Tag>
        </>)}
    </Surface>;
}`,...(j=(_=t.parameters)==null?void 0:_.docs)==null?void 0:j.source}}};var W,k,v;n.parameters={...n.parameters,docs:{...(W=n.parameters)==null?void 0:W.docs,source:{originalSource:`({
  ...rest
}) => {
  return <Surface horizontal wrap gap={2}>
      {colorVariants.map(color => <Tag key={color} data-color={color as TagProps['data-color']} {...rest}>
          {color}
        </Tag>)}
    </Surface>;
}`,...(v=(k=n.parameters)==null?void 0:k.docs)==null?void 0:v.source}}};var C,R,P;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`({
  ...rest
}) => {
  return <Surface horizontal wrap gap={2}>
      {colorVariants.map(color => <Tag key={color} variant="outline" data-color={color as TagProps['data-color']} {...rest}>
          {color}
        </Tag>)}
    </Surface>;
}`,...(P=(R=c.parameters)==null?void 0:R.docs)==null?void 0:P.source}}};var w,N,B;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`({
  ...rest
}) => {
  return <>
      {colorVariants.map(color => <Tag key={color} radius="full" data-color={color as TagProps['data-color']} {...rest}>
          {color}
        </Tag>)}
    </>;
}`,...(B=(N=p.parameters)==null?void 0:N.docs)==null?void 0:B.source}}};var V,F,b;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`({
  ...rest
}) => {
  return <>
      {sizes.map(size => <Tag key={size} radius="full" data-size={size} {...rest}>
          {size}
        </Tag>)}
    </>;
}`,...(b=(F=u.parameters)==null?void 0:F.docs)==null?void 0:b.source}}};var D,E,O;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`({
  ...rest
}) => {
  return <>
      {colorVariants.map(color => <Tag key={color} radius="full" variant="outline" data-color={color as TagProps['data-color']} {...rest}>
          {color}
        </Tag>)}
    </>;
}`,...(O=(E=m.parameters)==null?void 0:E.docs)==null?void 0:O.source}}};var q,A,G;h.parameters={...h.parameters,docs:{...(q=h.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    children: 'Status',
    icon: 'check_circle'
  }
}`,...(G=(A=h.parameters)==null?void 0:A.docs)==null?void 0:G.source}}};var H,J,K;f.parameters={...f.parameters,docs:{...(H=f.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    children: 'Status',
    'data-color-transparent': true
  }
}`,...(K=(J=f.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var L,M,Q;S.parameters={...S.parameters,docs:{...(L=S.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    children: 'Status',
    icon: 'check_circle',
    radius: 'full',
    'data-color': 'accent',
    'data-color-transparent': true
  }
}`,...(Q=(M=S.parameters)==null?void 0:M.docs)==null?void 0:Q.source}}};var U,X,Y;i.parameters={...i.parameters,docs:{...(U=i.parameters)==null?void 0:U.docs,source:{originalSource:`({
  ...rest
}) => {
  return <>
      {colorVariants.map(color => <Tag key={color} icon="info" data-color={color as TagProps['data-color']} {...rest}>
          {color}
        </Tag>)}
    </>;
}`,...(Y=(X=i.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,$,rr;d.parameters={...d.parameters,docs:{...(Z=d.parameters)==null?void 0:Z.docs,source:{originalSource:`({
  ...rest
}) => {
  return <>
      {colorVariants.map(color => <Tag key={color} radius="full" icon="info" variant="outline" data-color={color as TagProps['data-color']} {...rest}>
          {color}
        </Tag>)}
    </>;
}`,...(rr=($=d.parameters)==null?void 0:$.docs)==null?void 0:rr.source}}};var ar,er,or;l.parameters={...l.parameters,docs:{...(ar=l.parameters)==null?void 0:ar.docs,source:{originalSource:`({
  ...rest
}) => {
  return <>
      {colorVariants.map(color => <Tag key={color} radius="full" icon="info" variant="outline" data-color={color as TagProps['data-color']} data-color-transparent {...rest}>
          {color}
        </Tag>)}
    </>;
}`,...(or=(er=l.parameters)==null?void 0:er.docs)==null?void 0:or.source}}};const zr=["Preview","Sizes","Colors","Borders","Rounded","RoundedWithSizes","RoundedWithBorders","WithIcon","PlainBackground","PlainBackgroundRoundedWithIcon","WithIconColors","RoundedWithIconColors","RoundedWithIconPlainColors"];export{c as Borders,n as Colors,f as PlainBackground,S as PlainBackgroundRoundedWithIcon,g as Preview,p as Rounded,m as RoundedWithBorders,d as RoundedWithIconColors,l as RoundedWithIconPlainColors,u as RoundedWithSizes,t as Sizes,h as WithIcon,i as WithIconColors,zr as __namedExportsOrder,xr as default};
