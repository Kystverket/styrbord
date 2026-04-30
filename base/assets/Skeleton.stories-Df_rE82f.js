import{j as e}from"./iframe-DEa5CtWz.js";import{B as P}from"./SlotDialog-DxuGsvIF.js";import"./Details-NCjmJlGS.js";import"./KyvDivider-DbG94LfO.js";import"./typography-Bh1pBJ3-.js";import"./KyvSpinner-DyyCEFVM.js";import"./skillingsbuoye-DGmhGI5B.js";import"./Logo-B699lny2.js";import{S as t,P as i,H as d}from"./tooltip-CLj5ps21.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CCrF873T.js";import"./index-aK8o0k8i.js";const W={title:"Components/Loaders/Skeleton",component:t,tags:["autodocs","ds"],parameters:{a11y:{config:{rules:[{id:"empty-heading",selector:":has(.ds-skeleton)"}]}},docs:{description:{component:"[Dokumentasjon fra Designsystemet](https://designsystemet.no/no/components/docs/skeleton/overview)"}}}},o={args:{width:200,height:100}},r=()=>e.jsxs(e.Fragment,{children:[e.jsx(t,{variant:"circle",width:"50px",height:"50px"}),e.jsx(t,{variant:"rectangle",width:"100px",height:"50px"}),e.jsx(i,{children:e.jsx(t,{variant:"text",width:"10"})})]});r.parameters={customStyles:{display:"flex",flexWrap:"wrap",alignItems:"center",gap:"20px"}};const a=()=>e.jsxs(e.Fragment,{children:[e.jsx(t,{height:"150px"}),e.jsxs("div",{style:{display:"flex",gap:"10px",alignItems:"center",padding:"5px 0 5px 0"},children:[e.jsx(t,{variant:"circle",width:"30px",height:"30px"}),e.jsx(d,{children:e.jsx(t,{variant:"text",children:"En medium tittel"})})]}),e.jsx(t,{variant:"text",width:"140"})]});a.parameters={customStyles:{maxWidth:400}};const s=()=>e.jsxs(t,{variant:"rectangle",children:[e.jsx(i,{children:"Her er en tekst som blir sendt inn som barn av en Skeleton."}),e.jsx(i,{children:"Se hvordan Skeleton da dekker den samlede bredden og høyden til barna."}),e.jsx(P,{children:"Knapp"})]}),n=()=>e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{flex:"1 1 200px"},children:[e.jsx(d,{children:"En tittel"}),e.jsx(i,{"data-size":"sm",children:"Her er en paragraf som går over flere linjer"})]}),e.jsxs("div",{style:{flex:"1 1 200px"},children:[e.jsx(d,{children:e.jsx(t,{variant:"text",children:"En tittel"})}),e.jsx(i,{"data-size":"sm",children:e.jsx(t,{variant:"text",width:40})})]})]});n.parameters={customStyles:{display:"flex",gap:"20px",maxWidth:300}};r.__docgenInfo={description:"",methods:[],displayName:"Components"};a.__docgenInfo={description:"",methods:[],displayName:"UsageExample"};s.__docgenInfo={description:"",methods:[],displayName:"Children"};n.__docgenInfo={description:"",methods:[],displayName:"Text"};var p,l,c;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    width: 200,
    height: 100
  }
}`,...(c=(l=o.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var m,x,h;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
  return <>
      <Skeleton variant="circle" width="50px" height="50px" />
      <Skeleton variant="rectangle" width="100px" height="50px" />
      <Paragraph>
        <Skeleton variant="text" width="10" />
      </Paragraph>
    </>;
}`,...(h=(x=r.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var g,v,u;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`() => {
  return <>
      <Skeleton height="150px" />
      <div style={{
      display: 'flex',
      gap: '10px',
      alignItems: 'center',
      padding: '5px 0 5px 0'
    }}>
        <Skeleton variant="circle" width="30px" height="30px" />
        <Heading>
          <Skeleton variant="text">En medium tittel</Skeleton>
        </Heading>
      </div>
      <Skeleton variant="text" width="140" />
    </>;
}`,...(u=(v=a.parameters)==null?void 0:v.docs)==null?void 0:u.source}}};var S,j,k;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`() => {
  return <Skeleton variant="rectangle">
      <Paragraph>Her er en tekst som blir sendt inn som barn av en Skeleton.</Paragraph>
      <Paragraph>Se hvordan Skeleton da dekker den samlede bredden og høyden til barna.</Paragraph>
      <Button>Knapp</Button>
    </Skeleton>;
}`,...(k=(j=s.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};var f,y,w;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`() => <>
    <div style={{
    flex: '1 1 200px'
  }}>
      <Heading>En tittel</Heading>
      <Paragraph data-size="sm">Her er en paragraf som går over flere linjer</Paragraph>
    </div>
    <div style={{
    flex: '1 1 200px'
  }}>
      <Heading>
        <Skeleton variant="text">En tittel</Skeleton>
      </Heading>
      <Paragraph data-size="sm">
        <Skeleton variant="text" width={40} />
      </Paragraph>
    </div>
  </>`,...(w=(y=n.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};const D=["Preview","Components","UsageExample","Children","Text"];export{s as Children,r as Components,o as Preview,n as Text,a as UsageExample,D as __namedExportsOrder,W as default};
