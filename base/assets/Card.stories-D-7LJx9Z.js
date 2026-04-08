import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{S as F}from"./styrbordDecorator-BfXgtUUc.js";import{au as p}from"./SlotDialog-F6hW8fhN.js";import"./Details-dL8eMSPR.js";import"./translations-ygyvb3F3.js";import"./kyvDivider-GkhM6YIE.js";import{B as m}from"./typography-CdiQYpGP.js";import"./skillingsbuoye-BG85ofhS.js";import"./Logo-DajRw6N7.js";import{C as E,a as M}from"./index-C54ICqck.js";import"./iframe-D02NDwPW.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DpGbaZvl.js";import"./index-nifpsw8y.js";import"./index-CeyKNI-_.js";import"./lite-DaUVFjkg.js";import"./index-Du264kYH.js";import"./heading-Bd_p5-cx.js";import"./label-C3AbJwKw.js";const ir={title:"Components/Card",component:E,decorators:[F],tags:["autodocs","ds-override"],argTypes:{variant:{options:["default","tinted"],control:{type:"radio"}}}},o={args:{children:r.jsx("p",{children:"Dette er et default kort med standardinnhold."}),variant:"default"}},U=[void 0,"primary","neutral","success","danger","warning","accent","extra1","extra2"],N=["default","tinted"],t=()=>r.jsx(m,{gap:16,children:U.map(e=>N.map(l=>r.jsx(m,{horizontal:!0,align:"center",gap:8,children:r.jsx(E,{"data-color":e,variant:l,children:r.jsxs(M,{children:[r.jsxs(p,{children:[e?e.toString().substring(0,1).toUpperCase()+e.toString().substring(1):"Default"," ",l]}),r.jsx("p",{children:"Most provide as with carried business are much better more the perfected designer. Writing slightly explain desk unable at supposedly about this"})]})})},String(e)+String(l))))}),a={args:{children:r.jsx("p",{children:"Dette er et tinted kort med standardinnhold."}),variant:"tinted"}},n={args:{children:r.jsxs(r.Fragment,{children:[r.jsx(p,{icon:"anchor",children:"Tittel"}),r.jsx("p",{children:"Dette er et kort med tittel og et ikon"})]})}},s={args:{children:"Dette er et kort med en tittel",title:"Kort med tittel"}},i={args:{variant:"tinted",children:r.jsxs(r.Fragment,{children:[r.jsx(p,{icon:"arrow_right_alt",href:"'/?path=/docs/komponenter-card--docs'",children:"Kort med lenke i tittel og ikon"}),r.jsx("p",{children:"Dette er et kort med linktittel og et ikon"})]})}},d={args:{asChild:!0,children:r.jsx("a",{href:"/?path=/docs/komponenter-card--docs",rel:"noopener noreferrer",target:"_blank",children:"Dette er et kort med navigering"})}},c={args:{asChild:!0,children:r.jsx("button",{type:"button",children:"Dette er et kort som en knapp"})}};t.__docgenInfo={description:"",methods:[],displayName:"ColorVariants"};var h,g,u;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    children: <p>Dette er et default kort med standardinnhold.</p>,
    variant: 'default'
  }
}`,...(u=(g=o.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var k,C,x;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:`() => <Box gap={16}>
    {colors.map(color => colorVariants.map(colorVariant => <Box key={String(color) + String(colorVariant)} horizontal align="center" gap={8}>
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
}`,...(D=(b=a.parameters)==null?void 0:b.docs)==null?void 0:D.source}}};var j,S,T;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    children: <>
        <CardTitle icon="anchor">Tittel</CardTitle>
        <p>Dette er et kort med tittel og et ikon</p>
      </>
  }
}`,...(T=(S=n.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var v,y,B;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(z=(L=c.parameters)==null?void 0:L.docs)==null?void 0:z.source}}};const dr=["Default","ColorVariants","Colors","CardWithTitleAndIcon","CardWithTitle","CardWithLinkInTitle","CardAsLink","CardAsButton"];export{c as CardAsButton,d as CardAsLink,i as CardWithLinkInTitle,s as CardWithTitle,n as CardWithTitleAndIcon,t as ColorVariants,a as Colors,o as Default,dr as __namedExportsOrder,ir as default};
