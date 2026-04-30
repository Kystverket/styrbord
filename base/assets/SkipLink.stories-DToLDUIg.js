import{j as e}from"./jsx-runtime-D_zvdyIk.js";import"./SlotDialog-CuE-xZdd.js";import"./Details-BNXegy-d.js";import"./translations-Nqk0a8n1.js";import"./kyvDivider-GkhM6YIE.js";import"./typography-CdiQYpGP.js";import"./skillingsbuoye-BG85ofhS.js";import"./Logo-DajRw6N7.js";import{s,P as b}from"./tooltip-Q5XGAmIk.js";import"./iframe-DkgepJ9T.js";import"./index-OUpqSSdN.js";import"./index-CXCEydTa.js";import"./preload-helper-Dp1pzeXC.js";const{expect:a,userEvent:g,within:f}=__STORYBOOK_MODULE_TEST__,F={title:"Components/SkipLink",component:s,tags:["autodocs","ds"],parameters:{docs:{description:{component:"[Dokumentasjon fra Designsystemet](https://designsystemet.no/no/components/docs/skiplinks/overview)"}}}},o=i=>e.jsxs(e.Fragment,{children:[e.jsxs(b,{children:["For å vise skiplinken, tab til dette eksempelet, eller klikk inni eksempelet og trykk ",e.jsx("kbd",{children:"Tab"}),".",e.jsx(s,{...i,href:"#main-content",children:"Hopp til hovedinnhold"})]}),e.jsx("main",{id:"main-content",tabIndex:-1,children:"Region som kan motta fokus fra skiplink."})]}),n=()=>e.jsxs(b,{children:["For å vise skiplinken, tab til dette eksempelet, eller klikk inni eksempelet og trykk ",e.jsx("kbd",{children:"Tab"}),".",e.jsx(s,{href:"#main-content",children:"Hopp til hovedinnhold"}),e.jsx("main",{id:"main-content",tabIndex:-1,children:"Region som kan motta fokus fra skiplink."})]});n.play=async i=>{const t=f(i.canvasElement).getByRole("link");await a(t).not.toSatisfy(k),await g.tab(),await a(t).toSatisfy(k),await a(t).toHaveFocus()};function k(i){const{height:r,width:t}=i.getBoundingClientRect();return r>1&&t>1}o.__docgenInfo={description:"",methods:[],displayName:"Preview"};n.__docgenInfo={description:"",methods:[{name:"play",docblock:null,modifiers:["static"],params:[{name:"ctx",optional:!1,type:null}],returns:null}],displayName:"Tabbed"};var p,l,m;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`args => <>
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
  </Paragraph>`,...(h=(c=n.parameters)==null?void 0:c.docs)==null?void 0:h.source}}};const I=["Preview","Tabbed"];export{o as Preview,n as Tabbed,I as __namedExportsOrder,F as default};
