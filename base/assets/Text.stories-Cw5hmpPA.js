import{S as q,j as e}from"./iframe-a92PiZDk.js";import{B as n,P as F}from"./typography-B3Xe137V.js";import{t as $,a as C,b as O,c as R,T as s}from"./Dialog-US4NiUe7.js";import"./shipTypes-hFnSBndP.js";import"./Details-BKt2vF5d.js";import"./KyvDivider-D0cQWsm2.js";import"./KyvSpinner-CStDtRO-.js";import"./skillingsbuoye-CnuVz1Kf.js";import"./Logo-BlFH4ZLF.js";import{H as G}from"./tooltip-BhTvqi4o.js";import"./preload-helper-Dp1pzeXC.js";import"./color-tokens-BaFqaga0.js";import"./index-C0JGS7j4.js";import"./index-CjcbQYLd.js";const ie={title:"Typography/Text",parameters:{docs:{description:{component:"Denne komponenten tillater for ekstra styling på tekst. Den legger inn et span element"}}},component:s,decorators:[q],tags:["autodocs"],argTypes:{"data-size":{control:"select",options:["xs","sm","md","lg","xl"],table:{defaultValue:{summary:"arver størrelse fra omgivelsene"}}},weight:{control:"select",options:[void 0,"regular","medium","semibold"],table:{defaultValue:{summary:"regular"}}},"data-color":{control:"select",options:[void 0,...R],table:{defaultValue:{summary:"ingen (arver farge)"}}},"data-color-subtle":{control:"boolean",table:{defaultValue:{summary:"false"}}},wrap:{control:"select",options:[void 0,...O],table:{defaultValue:{summary:"wrap"}}},transform:{control:"select",options:[void 0,...C],table:{defaultValue:{summary:"none"}}},align:{control:"select",options:[void 0,...$],table:{defaultValue:{summary:"left"}}}}},x={args:{children:"Sandnessjøen havn","data-size":"md"}},J=["xs","sm","md","lg","xl"],o=({children:t,...a})=>e.jsx(n,{gap:8,children:J.map(r=>e.jsx(s,{"data-size":r,...a,children:t??`Text ${r}`},r))});o.args={children:void 0};const K=["regular","medium","semibold"],i=({children:t,...a})=>e.jsx(n,{gap:8,children:K.map(r=>e.jsx(s,{weight:r,...a,children:t??`Text ${r}`},r))});i.args={"data-size":"md",children:void 0};const l=({...t})=>e.jsx(n,{gap:16,children:R.map(a=>e.jsxs(n,{gap:4,children:[e.jsx(s,{weight:"semibold","data-color":a,...t,children:a}),e.jsxs(s,{weight:"semibold","data-color":a,"data-color-subtle":!0,...t,children:[a," subtle"]})]},a))});l.args={"data-size":"md"};const d=({children:t,...a})=>e.jsx(n,{gap:16,children:O.map(r=>e.jsxs(n,{width:"form",gap:4,children:[e.jsx(s,{"data-size":"sm",weight:"medium",children:r}),e.jsx(s,{wrap:r,...a,children:t??"Denne teksten brytes over flere linjer for å vise hvordan text-wrap påvirker linjeskift og lesbarhet."})]},r))});d.args={"data-size":"md",children:void 0};const m=({children:t,...a})=>e.jsx(n,{gap:8,children:C.map(r=>e.jsx(s,{transform:r,...a,children:t??"Sandnessjøen havn"},r))});m.args={"data-size":"md",children:void 0};const c=({children:t,...a})=>e.jsx(n,{gap:16,children:$.map(r=>e.jsxs(n,{width:"form",gap:4,children:[e.jsx(s,{"data-size":"sm",weight:"medium",children:r}),e.jsx(s,{align:r,style:{display:"block"},...a,children:t??"Denne teksten brytes over flere linjer for å vise hvordan text-align påvirker justering av tekst."})]},r))});c.args={"data-size":"md",children:void 0};const p=()=>e.jsx(n,{gap:24,children:e.jsxs(n,{width:"form",gap:8,children:[e.jsx(G,{children:e.jsx(s,{"data-color":"primary",children:"Sak 2026-0142 — Søknad om utslippstillatelse"})}),e.jsx(F,{size:"md",children:e.jsxs(s,{"data-color":"neutral",weight:"medium",children:["Saken gjelder utslippstillatelse for Sandnessjøen havn. Status er under behandling,",e.jsx("br",{}),"og saksbehandler har markert fristen som forsinket."]})})]})});o.__docgenInfo={description:"",methods:[],displayName:"Sizes"};i.__docgenInfo={description:"",methods:[],displayName:"Weights"};l.__docgenInfo={description:"",methods:[],displayName:"Colors"};d.__docgenInfo={description:"",methods:[],displayName:"TextWrap"};m.__docgenInfo={description:"",methods:[],displayName:"TextTransform"};c.__docgenInfo={description:"",methods:[],displayName:"TextAlign"};p.__docgenInfo={description:"",methods:[],displayName:"Examples"};var g,u,h;x.parameters={...x.parameters,docs:{...(g=x.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    children: 'Sandnessjøen havn',
    'data-size': 'md'
  }
}`,...(h=(u=x.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var f,T,j;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`({
  children,
  ...rest
}) => {
  return <Box gap={8}>
      {sizes.map(size => <Text key={size} data-size={size} {...rest}>
          {children ?? \`Text \${size}\`}
        </Text>)}
    </Box>;
}`,...(j=(T=o.parameters)==null?void 0:T.docs)==null?void 0:j.source}}};var v,b,k;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`({
  children,
  ...rest
}) => {
  return <Box gap={8}>
      {weights.map(fontWeight => <Text key={fontWeight} weight={fontWeight} {...rest}>
          {children ?? \`Text \${fontWeight}\`}
        </Text>)}
    </Box>;
}`,...(k=(b=i.parameters)==null?void 0:b.docs)==null?void 0:k.source}}};var y,w,S;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`({
  ...rest
}) => {
  return <Box gap={16}>
      {colorValues.map(color => <Box key={color} gap={4}>
          <Text weight="semibold" data-color={color} {...rest}>
            {color}
          </Text>
          <Text weight="semibold" data-color={color} data-color-subtle {...rest}>
            {color} subtle
          </Text>
        </Box>)}
    </Box>;
}`,...(S=(w=l.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var B,z,_;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`({
  children,
  ...rest
}) => {
  return <Box gap={16}>
      {textWrapValues.map(textWrap => <Box key={textWrap} width="form" gap={4}>
          <Text data-size="sm" weight="medium">
            {textWrap}
          </Text>
          <Text wrap={textWrap} {...rest}>
            {children ?? 'Denne teksten brytes over flere linjer for å vise hvordan text-wrap påvirker linjeskift og lesbarhet.'}
          </Text>
        </Box>)}
    </Box>;
}`,...(_=(z=d.parameters)==null?void 0:z.docs)==null?void 0:_.source}}};var V,W,A;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`({
  children,
  ...rest
}) => {
  return <Box gap={8}>
      {textTransformValues.map(textTransform => <Text key={textTransform} transform={textTransform} {...rest}>
          {children ?? 'Sandnessjøen havn'}
        </Text>)}
    </Box>;
}`,...(A=(W=m.parameters)==null?void 0:W.docs)==null?void 0:A.source}}};var D,I,N;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`({
  children,
  ...rest
}) => {
  return <Box gap={16}>
      {textAlignValues.map(textAlign => <Box key={textAlign} width="form" gap={4}>
          <Text data-size="sm" weight="medium">
            {textAlign}
          </Text>
          <Text align={textAlign} style={{
        display: 'block'
      }} {...rest}>
            {children ?? 'Denne teksten brytes over flere linjer for å vise hvordan text-align påvirker justering av tekst.'}
          </Text>
        </Box>)}
    </Box>;
}`,...(N=(I=c.parameters)==null?void 0:I.docs)==null?void 0:N.source}}};var P,E,H;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`() => {
  return <Box gap={24}>
      <Box width="form" gap={8}>
        <Heading>
          <Text data-color="primary">Sak 2026-0142 — Søknad om utslippstillatelse</Text>
        </Heading>
        <Paragraph size="md">
          <Text data-color="neutral" weight="medium">
            Saken gjelder utslippstillatelse for Sandnessjøen havn. Status er under behandling,
            <br />
            og saksbehandler har markert fristen som forsinket.
          </Text>
        </Paragraph>
      </Box>
    </Box>;
}`,...(H=(E=p.parameters)==null?void 0:E.docs)==null?void 0:H.source}}};const le=["Preview","Sizes","Weights","Colors","TextWrap","TextTransform","TextAlign","Examples"];export{l as Colors,p as Examples,x as Preview,o as Sizes,c as TextAlign,m as TextTransform,d as TextWrap,i as Weights,le as __namedExportsOrder,ie as default};
