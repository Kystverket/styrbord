import{j as e}from"./iframe-B9-yjDGi.js";import"./Dialog-DpRjgFic.js";import"./shipTypes-hFnSBndP.js";import"./Details-DlH4Y5Bu.js";import"./KyvDivider-CVN2Y6-7.js";import{P as b}from"./typography-lOLIvvUr.js";import"./KyvSpinner-DAFKdaUB.js";import"./skillingsbuoye-BH0NYPEG.js";import"./Logo-CGIJgWOZ.js";import{r as s}from"./tooltip-U8UQRzWx.js";import"./preload-helper-Dp1pzeXC.js";import"./color-tokens-DRys5hYJ.js";import"./index-wmdR2T-Z.js";import"./index-DET-fz-T.js";const{expect:a,userEvent:g,within:f}=__STORYBOOK_MODULE_TEST__,I={title:"Components/SkipLink",component:s,tags:["autodocs","ds"],parameters:{docs:{description:{component:"[Dokumentasjon fra Designsystemet](https://designsystemet.no/no/components/docs/skiplinks/overview)"}}}},o=i=>e.jsxs(e.Fragment,{children:[e.jsxs(b,{children:["For å vise skiplinken, tab til dette eksempelet, eller klikk inni eksempelet og trykk ",e.jsx("kbd",{children:"Tab"}),".",e.jsx(s,{...i,href:"#main-content",children:"Hopp til hovedinnhold"})]}),e.jsx("main",{id:"main-content",tabIndex:-1,children:"Region som kan motta fokus fra skiplink."})]}),n=()=>e.jsxs(b,{children:["For å vise skiplinken, tab til dette eksempelet, eller klikk inni eksempelet og trykk ",e.jsx("kbd",{children:"Tab"}),".",e.jsx(s,{href:"#main-content",children:"Hopp til hovedinnhold"}),e.jsx("main",{id:"main-content",tabIndex:-1,children:"Region som kan motta fokus fra skiplink."})]});n.play=async i=>{const t=f(i.canvasElement).getByRole("link");await a(t).not.toSatisfy(p),await g.tab(),await a(t).toSatisfy(p),await a(t).toHaveFocus()};function p(i){const{height:r,width:t}=i.getBoundingClientRect();return r>1&&t>1}o.__docgenInfo={description:"",methods:[],displayName:"Preview"};n.__docgenInfo={description:"",methods:[{name:"play",docblock:null,modifiers:["static"],params:[{name:"ctx",optional:!1,type:null}],returns:null}],displayName:"Tabbed"};var k,m,l;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`args => <>
    <Paragraph>
      For å vise skiplinken, tab til dette eksempelet, eller klikk inni eksempelet og trykk <kbd>Tab</kbd>.
      <SkipLink {...args} href="#main-content">
        Hopp til hovedinnhold
      </SkipLink>
    </Paragraph>
    <main id="main-content" tabIndex={-1}>
      Region som kan motta fokus fra skiplink.
    </main>
  </>`,...(l=(m=o.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var d,c,h;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`() => <Paragraph>
    For å vise skiplinken, tab til dette eksempelet, eller klikk inni eksempelet og trykk <kbd>Tab</kbd>.
    <SkipLink href="#main-content">Hopp til hovedinnhold</SkipLink>
    <main id="main-content" tabIndex={-1}>
      Region som kan motta fokus fra skiplink.
    </main>
  </Paragraph>`,...(h=(c=n.parameters)==null?void 0:c.docs)==null?void 0:h.source}}};const O=["Preview","Tabbed"];export{o as Preview,n as Tabbed,O as __namedExportsOrder,I as default};
