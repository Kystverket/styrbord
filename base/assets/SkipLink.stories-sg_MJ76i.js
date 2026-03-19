'use client';
import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{P as f}from"./SlotDialog-nfXuKour.js";import"./Details-CaPMb9_N.js";import"./kyvDivider-GkhM6YIE.js";import"./typography-CdiQYpGP.js";import"./skillingsbuoye-BG85ofhS.js";import"./Logo-DajRw6N7.js";import{c as u}from"./lite-DaUVFjkg.js";import{r as x}from"./iframe-CHebWKUH.js";import"./index-C64O6qC_.js";import"./index-aYDSQn-O.js";import"./index-DRaCY49s.js";import"./index-D7LApSQN.js";import"./heading-BhuFf8TJ.js";import"./label-CGgCzrC0.js";import"./index-DKKy1AyJ.js";import"./translations-Bf8d8dsQ.js";import"./preload-helper-Dp1pzeXC.js";const r=x.forwardRef(function({children:a,className:n,...b},g){return e.jsx("a",{className:u("ds-skip-link",n),...b,ref:g,children:a})}),{expect:s,userEvent:v,within:y}=__STORYBOOK_MODULE_TEST__,M={title:"Components/SkipLink",component:r,tags:["autodocs","ds"],parameters:{docs:{description:{component:"[Dokumentasjon fra Designsystemet](https://designsystemet.no/no/components/docs/skiplinks/overview)"}}}},o=i=>e.jsxs(e.Fragment,{children:[e.jsxs(f,{children:["For å vise skiplinken, tab til dette eksempelet, eller klikk inni eksempelet og trykk ",e.jsx("kbd",{children:"Tab"}),".",e.jsx(r,{...i,href:"#main-content",children:"Hopp til hovedinnhold"})]}),e.jsx("main",{id:"main-content",tabIndex:-1,children:"Region som kan motta fokus fra skiplink."})]}),t=()=>e.jsxs(f,{children:["For å vise skiplinken, tab til dette eksempelet, eller klikk inni eksempelet og trykk ",e.jsx("kbd",{children:"Tab"}),".",e.jsx(r,{href:"#main-content",children:"Hopp til hovedinnhold"}),e.jsx("main",{id:"main-content",tabIndex:-1,children:"Region som kan motta fokus fra skiplink."})]});t.play=async i=>{const n=y(i.canvasElement).getByRole("link");await s(n).not.toSatisfy(p),await v.tab(),await s(n).toSatisfy(p),await s(n).toHaveFocus()};function p(i){const{height:a,width:n}=i.getBoundingClientRect();return a>1&&n>1}o.__docgenInfo={description:"",methods:[],displayName:"Preview"};t.__docgenInfo={description:"",methods:[{name:"play",docblock:null,modifiers:["static"],params:[{name:"ctx",optional:!1,type:null}],returns:null}],displayName:"Tabbed"};var k,m,l;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`args => <>
    <Paragraph>
      For å vise skiplinken, tab til dette eksempelet, eller klikk inni eksempelet og trykk <kbd>Tab</kbd>.
      <SkipLink {...args} href="#main-content">
        Hopp til hovedinnhold
      </SkipLink>
    </Paragraph>
    <main id="main-content" tabIndex={-1}>
      Region som kan motta fokus fra skiplink.
    </main>
  </>`,...(l=(m=o.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var c,d,h;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`() => <Paragraph>
    For å vise skiplinken, tab til dette eksempelet, eller klikk inni eksempelet og trykk <kbd>Tab</kbd>.
    <SkipLink href="#main-content">Hopp til hovedinnhold</SkipLink>
    <main id="main-content" tabIndex={-1}>
      Region som kan motta fokus fra skiplink.
    </main>
  </Paragraph>`,...(h=(d=t.parameters)==null?void 0:d.docs)==null?void 0:h.source}}};const U=["Preview","Tabbed"];export{o as Preview,t as Tabbed,U as __namedExportsOrder,M as default};
