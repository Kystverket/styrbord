import{j as e}from"./iframe-tRSwKzMd.js";import"./Dialog-CZ3oo3rE.js";import"./shipTypes-hFnSBndP.js";import"./Details-jtp_IHP_.js";import"./KyvDivider-DFwcKNrN.js";import{P as b}from"./typography-D8gUJzsN.js";import"./KyvSpinner-5-aYBCtr.js";import"./skillingsbuoye-B7g4mHO_.js";import"./Logo-BgXoLW5i.js";import{q as s}from"./tooltip-_q7BVRen.js";import"./preload-helper-Dp1pzeXC.js";import"./color-tokens-BaFqaga0.js";import"./index-B9GFplko.js";import"./index-Bk76LeD0.js";const{expect:a,userEvent:g,within:f}=__STORYBOOK_MODULE_TEST__,I={title:"Components/SkipLink",component:s,tags:["autodocs","ds"],parameters:{docs:{description:{component:"[Dokumentasjon fra Designsystemet](https://designsystemet.no/no/components/docs/skiplinks/overview)"}}}},o=i=>e.jsxs(e.Fragment,{children:[e.jsxs(b,{children:["For å vise skiplinken, tab til dette eksempelet, eller klikk inni eksempelet og trykk ",e.jsx("kbd",{children:"Tab"}),".",e.jsx(s,{...i,href:"#main-content",children:"Hopp til hovedinnhold"})]}),e.jsx("main",{id:"main-content",tabIndex:-1,children:"Region som kan motta fokus fra skiplink."})]}),n=()=>e.jsxs(b,{children:["For å vise skiplinken, tab til dette eksempelet, eller klikk inni eksempelet og trykk ",e.jsx("kbd",{children:"Tab"}),".",e.jsx(s,{href:"#main-content",children:"Hopp til hovedinnhold"}),e.jsx("main",{id:"main-content",tabIndex:-1,children:"Region som kan motta fokus fra skiplink."})]});n.play=async i=>{const t=f(i.canvasElement).getByRole("link");await a(t).not.toSatisfy(p),await g.tab(),await a(t).toSatisfy(p),await a(t).toHaveFocus()};function p(i){const{height:r,width:t}=i.getBoundingClientRect();return r>1&&t>1}o.__docgenInfo={description:"",methods:[],displayName:"Preview"};n.__docgenInfo={description:"",methods:[{name:"play",docblock:null,modifiers:["static"],params:[{name:"ctx",optional:!1,type:null}],returns:null}],displayName:"Tabbed"};var k,m,l;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`args => <>
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
