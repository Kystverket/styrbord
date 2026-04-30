import{j as e}from"./iframe-Czv3AHya.js";import"./SlotDialog-DWY9LpQH.js";import"./Details-32TxQ_PH.js";import"./kyvDivider-BCRc_Uf9.js";import"./typography-hnOE2O5i.js";import"./skillingsbuoye-CCNtNPj1.js";import"./Logo-C52OS84m.js";import{s,P as b}from"./tooltip-DjKviRXa.js";import"./preload-helper-Dp1pzeXC.js";import"./index-D1vxHnYL.js";import"./index-BU31YQ6P.js";const{expect:a,userEvent:g,within:f}=__STORYBOOK_MODULE_TEST__,R={title:"Components/SkipLink",component:s,tags:["autodocs","ds"],parameters:{docs:{description:{component:"[Dokumentasjon fra Designsystemet](https://designsystemet.no/no/components/docs/skiplinks/overview)"}}}},o=i=>e.jsxs(e.Fragment,{children:[e.jsxs(b,{children:["For å vise skiplinken, tab til dette eksempelet, eller klikk inni eksempelet og trykk ",e.jsx("kbd",{children:"Tab"}),".",e.jsx(s,{...i,href:"#main-content",children:"Hopp til hovedinnhold"})]}),e.jsx("main",{id:"main-content",tabIndex:-1,children:"Region som kan motta fokus fra skiplink."})]}),n=()=>e.jsxs(b,{children:["For å vise skiplinken, tab til dette eksempelet, eller klikk inni eksempelet og trykk ",e.jsx("kbd",{children:"Tab"}),".",e.jsx(s,{href:"#main-content",children:"Hopp til hovedinnhold"}),e.jsx("main",{id:"main-content",tabIndex:-1,children:"Region som kan motta fokus fra skiplink."})]});n.play=async i=>{const t=f(i.canvasElement).getByRole("link");await a(t).not.toSatisfy(k),await g.tab(),await a(t).toSatisfy(k),await a(t).toHaveFocus()};function k(i){const{height:r,width:t}=i.getBoundingClientRect();return r>1&&t>1}o.__docgenInfo={description:"",methods:[],displayName:"Preview"};n.__docgenInfo={description:"",methods:[{name:"play",docblock:null,modifiers:["static"],params:[{name:"ctx",optional:!1,type:null}],returns:null}],displayName:"Tabbed"};var p,l,m;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`args => <>
    <Paragraph>
      For å vise skiplinken, tab til dette eksempelet, eller klikk inni eksempelet og trykk <kbd>Tab</kbd>.
      <SkipLink {...args} href="#main-content">
        Hopp til hovedinnhold
      </SkipLink>
    </Paragraph>
    <main id="main-content" tabIndex={-1}>
      Region som kan motta fokus fra skiplink.
    </main>
  </>`,...(m=(l=o.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var d,c,h;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`() => <Paragraph>
    For å vise skiplinken, tab til dette eksempelet, eller klikk inni eksempelet og trykk <kbd>Tab</kbd>.
    <SkipLink href="#main-content">Hopp til hovedinnhold</SkipLink>
    <main id="main-content" tabIndex={-1}>
      Region som kan motta fokus fra skiplink.
    </main>
  </Paragraph>`,...(h=(c=n.parameters)==null?void 0:c.docs)==null?void 0:h.source}}};const E=["Preview","Tabbed"];export{o as Preview,n as Tabbed,E as __namedExportsOrder,R as default};
