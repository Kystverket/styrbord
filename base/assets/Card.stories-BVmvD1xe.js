import{S as F,j as e}from"./iframe-DMKAaGf9.js";import{k as E,l as M}from"./tooltip-CNY8vMwI.js";import{C as p,S as m}from"./Dialog-ffeW2bp3.js";import"./shipTypes-hFnSBndP.js";import"./Details-0lajeVmw.js";import"./KyvDivider-B8qHsZQy.js";import"./KyvSpinner-DY1MGCQa.js";import"./skillingsbuoye-BrWleNup.js";import"./Logo-CjDqXog2.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CviRK8dn.js";import"./index-Du9vRAeu.js";import"./color-tokens-DRys5hYJ.js";const re={title:"Components/Card",component:E,decorators:[F],tags:["autodocs","ds-override"],argTypes:{variant:{options:["default","tinted"],control:{type:"radio"}}}},a={args:{children:e.jsx("p",{children:"Dette er et default kort med standardinnhold."}),variant:"default"}},U=[void 0,"primary","neutral","success","danger","warning","accent","extra1","extra2"],N=["default","tinted"],t=()=>e.jsx(m,{gap:4,children:U.map(r=>N.map(l=>e.jsx(m,{horizontal:!0,align:"center",gap:2,children:e.jsx(E,{"data-color":r,variant:l,children:e.jsxs(M,{children:[e.jsxs(p,{children:[r?r.toString().substring(0,1).toUpperCase()+r.toString().substring(1):"Default"," ",l]}),e.jsx("p",{children:"Most provide as with carried business are much better more the perfected designer. Writing slightly explain desk unable at supposedly about this"})]})})},String(r)+String(l))))}),o={args:{children:e.jsx("p",{children:"Dette er et tinted kort med standardinnhold."}),variant:"tinted"}},n={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(p,{icon:"anchor",children:"Tittel"}),e.jsx("p",{children:"Dette er et kort med tittel og et ikon"})]})}},s={args:{children:"Dette er et kort med en tittel",title:"Kort med tittel"}},i={args:{variant:"tinted",children:e.jsxs(e.Fragment,{children:[e.jsx(p,{icon:"arrow_right_alt",href:"'/?path=/docs/komponenter-card--docs'",children:"Kort med lenke i tittel og ikon"}),e.jsx("p",{children:"Dette er et kort med linktittel og et ikon"})]})}},d={args:{asChild:!0,children:e.jsx("a",{href:"/?path=/docs/komponenter-card--docs",rel:"noopener noreferrer",target:"_blank",children:"Dette er et kort med navigering"})}},c={args:{asChild:!0,children:e.jsx("button",{type:"button",children:"Dette er et kort som en knapp"})}};t.__docgenInfo={description:"",methods:[],displayName:"ColorVariants"};var u,h,g;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    children: <p>Dette er et default kort med standardinnhold.</p>,
    variant: 'default'
  }
}`,...(g=(h=a.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var k,C,f;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:`() => <Surface gap={4}>
    {colors.map(color => colorVariants.map(colorVariant => <Surface key={String(color) + String(colorVariant)} horizontal align="center" gap={2}>
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
        </Surface>))}
  </Surface>`,...(f=(C=t.parameters)==null?void 0:C.docs)==null?void 0:f.source}}};var x,S,b;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    children: <p>Dette er et tinted kort med standardinnhold.</p>,
    variant: 'tinted'
  }
}`,...(b=(S=o.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var D,j,T;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    children: <>
        <CardTitle icon="anchor">Tittel</CardTitle>
        <p>Dette er et kort med tittel og et ikon</p>
      </>
  }
}`,...(T=(j=n.parameters)==null?void 0:j.docs)==null?void 0:T.source}}};var v,y,_;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    children: 'Dette er et kort med en tittel',
    title: 'Kort med tittel'
  }
}`,...(_=(y=s.parameters)==null?void 0:y.docs)==null?void 0:_.source}}};var W,V,A;i.parameters={...i.parameters,docs:{...(W=i.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    variant: 'tinted',
    children: <>
        <CardTitle icon="arrow_right_alt" href="'/?path=/docs/komponenter-card--docs'">
          Kort med lenke i tittel og ikon
        </CardTitle>
        <p>Dette er et kort med linktittel og et ikon</p>
      </>
  }
}`,...(A=(V=i.parameters)==null?void 0:V.docs)==null?void 0:A.source}}};var w,B,I;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    asChild: true,
    children: <a href="/?path=/docs/komponenter-card--docs" rel="noopener noreferrer" target="_blank">
        Dette er et kort med navigering
      </a>
  }
}`,...(I=(B=d.parameters)==null?void 0:B.docs)==null?void 0:I.source}}};var K,L,z;c.parameters={...c.parameters,docs:{...(K=c.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    asChild: true,
    children: <button type="button">Dette er et kort som en knapp</button>
  }
}`,...(z=(L=c.parameters)==null?void 0:L.docs)==null?void 0:z.source}}};const te=["Default","ColorVariants","Colors","CardWithTitleAndIcon","CardWithTitle","CardWithLinkInTitle","CardAsLink","CardAsButton"];export{c as CardAsButton,d as CardAsLink,i as CardWithLinkInTitle,s as CardWithTitle,n as CardWithTitleAndIcon,t as ColorVariants,o as Colors,a as Default,te as __namedExportsOrder,re as default};
