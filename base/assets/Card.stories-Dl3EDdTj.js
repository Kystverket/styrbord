import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{S as F}from"./styrbordDecorator-DRAyl1VQ.js";import{b as p}from"./Card-KeqL4nDM.js";import"./Details-8YZFjHTH.js";import"./kyvDivider-DSk0K4x1.js";import{B as m}from"./typography-9ubeq_Vx.js";import"./skillingsbuoye-mzpk6Jp8.js";import"./Logo-CEva0-QL.js";import{C as E,a as M}from"./index-eaWjzoNI.js";/* empty css                        */import"./index-BWu4c2F4.js";import"./index-B8jaNLVP.js";import"./index-DtgyEQ7Q.js";import"./lite-DaUVFjkg.js";import"./index-BtN5BFRV.js";import"./label-CT_xXrm7.js";import"./heading-B8SX_GYc.js";const ne={title:"Components/Card",component:E,decorators:[F],tags:["autodocs","ds-override"],argTypes:{variant:{options:["default","tinted"],control:{type:"radio"}}}},o={args:{children:e.jsx("p",{children:"Dette er et default kort med standardinnhold."}),variant:"default"}},U=[void 0,"primary","neutral","success","danger","warning","accent","extra1","extra2"],N=["default","tinted"],t=()=>e.jsx(m,{gap:16,children:U.map(r=>N.map(l=>e.jsx(m,{horizontal:!0,align:"center",gap:8,children:e.jsx(E,{"data-color":r,variant:l,children:e.jsxs(M,{children:[e.jsxs(p,{children:[r?r.toString().substring(0,1).toUpperCase()+r.toString().substring(1):"Default"," ",l]}),e.jsx("p",{children:"Most provide as with carried business are much better more the perfected designer. Writing slightly explain desk unable at supposedly about this"})]})})},r+l)))}),a={args:{children:e.jsx("p",{children:"Dette er et tinted kort med standardinnhold."}),variant:"tinted"}},n={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(p,{icon:"anchor",children:"Tittel"}),e.jsx("p",{children:"Dette er et kort med tittel og et ikon"})]})}},s={args:{children:"Dette er et kort med en tittel",title:"Kort med tittel"}},i={args:{variant:"tinted",children:e.jsxs(e.Fragment,{children:[e.jsx(p,{icon:"arrow_right_alt",href:"'/?path=/docs/komponenter-card--docs'",children:"Kort med lenke i tittel og ikon"}),e.jsx("p",{children:"Dette er et kort med linktittel og et ikon"})]})}},d={args:{asChild:!0,children:e.jsx("a",{href:"/?path=/docs/komponenter-card--docs",rel:"noopener noreferrer",target:"_blank",children:"Dette er et kort med navigering"})}},c={args:{asChild:!0,children:e.jsx("button",{type:"button",children:"Dette er et kort som en knapp"})}};t.__docgenInfo={description:"",methods:[],displayName:"ColorVariants"};var h,u,g;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    children: <p>Dette er et default kort med standardinnhold.</p>,
    variant: 'default'
  }
}`,...(g=(u=o.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var k,C,x;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:`() => <Box gap={16}>
    {colors.map(color => colorVariants.map(colorVariant => <Box key={color + colorVariant} horizontal align="center" gap={8}>
          <Card data-color={color} variant={colorVariant}>
            <CardBlock>
              <CardTitle>
                {color ? color.toString().substring(0, 1).toUpperCase() + color.toString().substring(1) : 'Default'}{' '}
                {colorVariant}
              </CardTitle>
              <p>
                Most provide as with carried business are much better more the perfected designer. Writing slightly
                explain desk unable at supposedly about this
              </p>
            </CardBlock>
          </Card>
        </Box>))}
  </Box>`,...(x=(C=t.parameters)==null?void 0:C.docs)==null?void 0:x.source}}};var f,b,D;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    children: <p>Dette er et tinted kort med standardinnhold.</p>,
    variant: 'tinted'
  }
}`,...(D=(b=a.parameters)==null?void 0:b.docs)==null?void 0:D.source}}};var j,T,v;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    children: <>
        <CardTitle icon="anchor">Tittel</CardTitle>
        <p>Dette er et kort med tittel og et ikon</p>
      </>
  }
}`,...(v=(T=n.parameters)==null?void 0:T.docs)==null?void 0:v.source}}};var S,y,B;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    children: 'Dette er et kort med en tittel',
    title: 'Kort med tittel'
  }
}`,...(B=(y=s.parameters)==null?void 0:y.docs)==null?void 0:B.source}}};var _,W,V;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    variant: 'tinted',
    children: <>
        <CardTitle icon="arrow_right_alt" href="'/?path=/docs/komponenter-card--docs'">
          Kort med lenke i tittel og ikon
        </CardTitle>
        <p>Dette er et kort med linktittel og et ikon</p>
      </>
  }
}`,...(V=(W=i.parameters)==null?void 0:W.docs)==null?void 0:V.source}}};var A,w,I;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    asChild: true,
    children: <a href="/?path=/docs/komponenter-card--docs" rel="noopener noreferrer" target="_blank">
        Dette er et kort med navigering
      </a>
  }
}`,...(I=(w=d.parameters)==null?void 0:w.docs)==null?void 0:I.source}}};var K,L,z;c.parameters={...c.parameters,docs:{...(K=c.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    asChild: true,
    children: <button type="button">Dette er et kort som en knapp</button>
  }
}`,...(z=(L=c.parameters)==null?void 0:L.docs)==null?void 0:z.source}}};const se=["Default","ColorVariants","Colors","CardWithTitleAndIcon","CardWithTitle","CardWithLinkInTitle","CardAsLink","CardAsButton"];export{c as CardAsButton,d as CardAsLink,i as CardWithLinkInTitle,s as CardWithTitle,n as CardWithTitleAndIcon,t as ColorVariants,a as Colors,o as Default,se as __namedExportsOrder,ne as default};
