'use client';
import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{aD as D,P as i,B as F}from"./idContext-Bnw4pj21.js";import"./Details-BqhNeA-K.js";import"./kyvDivider-GkhM6YIE.js";import"./typography-CdiQYpGP.js";import"./skillingsbuoye-BG85ofhS.js";import"./Logo-DajRw6N7.js";import{S as U}from"./index-Ba4PAqFe.js";import{c as W}from"./lite-DaUVFjkg.js";import{r as K}from"./iframe-BhmXTjBE.js";import{u as A}from"./index-BaQCzXTN.js";import{H as d}from"./heading-BdOx7Qsw.js";import"./index-CaJk13To.js";import"./index-DFftvwDE.js";import"./label-Cxlmn-Py.js";import"./index-Df_dbwgn.js";import"./translations-DCgBNHDh.js";import"./preload-helper-Dp1pzeXC.js";const t=K.forwardRef(function({asChild:b,className:C,height:I,style:p,variant:l="rectangle",width:m,...N},z){const R=b?U:"span",c=l==="text",B=D("ds-skeleton-opacity-fade"),T=A([B,z]);return e.jsx(R,{"aria-hidden":"true",className:W("ds-skeleton",C),"data-text":c?"-".repeat(Number(m)||1):void 0,"data-variant":l,ref:T,style:c?p:{width:m,height:I,...p},...N})}),oe={title:"Components/Loaders/Skeleton",component:t,tags:["autodocs","ds"],parameters:{a11y:{config:{rules:[{id:"empty-heading",selector:":has(.ds-skeleton)"}]}},docs:{description:{component:"[Dokumentasjon fra Designsystemet](https://designsystemet.no/no/components/docs/skeleton/overview)"}}}},o={args:{width:200,height:100}},r=()=>e.jsxs(e.Fragment,{children:[e.jsx(t,{variant:"circle",width:"50px",height:"50px"}),e.jsx(t,{variant:"rectangle",width:"100px",height:"50px"}),e.jsx(i,{children:e.jsx(t,{variant:"text",width:"10"})})]});r.parameters={customStyles:{display:"flex",flexWrap:"wrap",alignItems:"center",gap:"20px"}};const a=()=>e.jsxs(e.Fragment,{children:[e.jsx(t,{height:"150px"}),e.jsxs("div",{style:{display:"flex",gap:"10px",alignItems:"center",padding:"5px 0 5px 0"},children:[e.jsx(t,{variant:"circle",width:"30px",height:"30px"}),e.jsx(d,{children:e.jsx(t,{variant:"text",children:"En medium tittel"})})]}),e.jsx(t,{variant:"text",width:"140"})]});a.parameters={customStyles:{maxWidth:400}};const s=()=>e.jsxs(t,{variant:"rectangle",children:[e.jsx(i,{children:"Her er en tekst som blir sendt inn som barn av en Skeleton."}),e.jsx(i,{children:"Se hvordan Skeleton da dekker den samlede bredden og høyden til barna."}),e.jsx(F,{children:"Knapp"})]}),n=()=>e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{flex:"1 1 200px"},children:[e.jsx(d,{children:"En tittel"}),e.jsx(i,{"data-size":"sm",children:"Her er en paragraf som går over flere linjer"})]}),e.jsxs("div",{style:{flex:"1 1 200px"},children:[e.jsx(d,{children:e.jsx(t,{variant:"text",children:"En tittel"})}),e.jsx(i,{"data-size":"sm",children:e.jsx(t,{variant:"text",width:40})})]})]});n.parameters={customStyles:{display:"flex",gap:"20px",maxWidth:300}};r.__docgenInfo={description:"",methods:[],displayName:"Components"};a.__docgenInfo={description:"",methods:[],displayName:"UsageExample"};s.__docgenInfo={description:"",methods:[],displayName:"Children"};n.__docgenInfo={description:"",methods:[],displayName:"Text"};var x,h,g;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    width: 200,
    height: 100
  }
}`,...(g=(h=o.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var u,v,f;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
  return <>
      <Skeleton variant="circle" width="50px" height="50px" />
      <Skeleton variant="rectangle" width="100px" height="50px" />
      <Paragraph>
        <Skeleton variant="text" width="10" />
      </Paragraph>
    </>;
}`,...(f=(v=r.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var S,k,j;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`() => {
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
}`,...(j=(k=a.parameters)==null?void 0:k.docs)==null?void 0:j.source}}};var y,w,P;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`() => {
  return <Skeleton variant="rectangle">
      <Paragraph>Her er en tekst som blir sendt inn som barn av en Skeleton.</Paragraph>
      <Paragraph>Se hvordan Skeleton da dekker den samlede bredden og høyden til barna.</Paragraph>
      <Button>Knapp</Button>
    </Skeleton>;
}`,...(P=(w=s.parameters)==null?void 0:w.docs)==null?void 0:P.source}}};var E,H,_;n.parameters={...n.parameters,docs:{...(E=n.parameters)==null?void 0:E.docs,source:{originalSource:`() => <>
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
  </>`,...(_=(H=n.parameters)==null?void 0:H.docs)==null?void 0:_.source}}};const de=["Preview","Components","UsageExample","Children","Text"];export{s as Children,r as Components,o as Preview,n as Text,a as UsageExample,de as __namedExportsOrder,oe as default};
