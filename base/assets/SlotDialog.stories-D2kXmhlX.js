import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{r as p}from"./iframe-bklqssbm.js";import{ay as c,B as n,P as s}from"./SlotDialog-BKJPeppt.js";import"./Details-Dzhg-QN9.js";import"./translations-Dvv2FTzf.js";import"./kyvDivider-GkhM6YIE.js";import"./typography-CdiQYpGP.js";import"./skillingsbuoye-BG85ofhS.js";import"./Logo-DajRw6N7.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CT2roTz8.js";import"./index-D22rvomv.js";import"./index-BNVOwd2b.js";import"./lite-DaUVFjkg.js";import"./index-DWSakMH8.js";import"./heading-DpGRLQNn.js";import"./label-BuDN8Omp.js";import"./index-CaMTQNcE.js";const T={title:"Components/SlotDialog",component:c,tags:["autodocs","ds-override","beta"],parameters:{layout:"fullscreen",docs:{source:{type:"code"}}}},a=r=>{const[o,e]=p.useState(!1);return t.jsxs(t.Fragment,{children:[t.jsx(n,{onClick:()=>e(!0),children:"Open dialog"}),t.jsx(c,{...r,open:o,onClose:()=>e(!1),title:"Dialog title",buttons:t.jsxs(t.Fragment,{children:[t.jsx(n,{variant:"filled",onClick:()=>e(!1),children:"Confirm"}),t.jsx(n,{variant:"outline",onClick:()=>e(!1),children:"Cancel"})]}),children:t.jsx(s,{children:"Some random filler text that fills the entire width to test that it wraps correctly or that it at least looks nice"})})]})},l=r=>{const o=p.useRef(null);return t.jsxs(t.Fragment,{children:[t.jsx(n,{onClick:()=>{var e;return(e=o.current)==null?void 0:e.showModal()},children:"Open dialog"}),t.jsx(c,{...r,ref:o,title:"Dialog title",subtitle:"Subtitle",buttons:t.jsxs(t.Fragment,{children:[t.jsx(n,{variant:"filled",onClick:()=>{var e;return(e=o.current)==null?void 0:e.close()},children:"Confirm"}),t.jsx(n,{variant:"outline",onClick:()=>{var e;return(e=o.current)==null?void 0:e.close()},children:"Cancel"})]}),children:t.jsx(s,{children:"Some random filler text that fills the entire width to test that it wraps correctly or that it at least looks nice"})})]})},i=r=>{const[o,e]=p.useState(!1);return t.jsxs(t.Fragment,{children:[t.jsx(n,{onClick:()=>e(!0),children:"Open dialog"}),t.jsxs(c,{...r,longContent:!0,open:o,onClose:()=>e(!1),title:"Dialog title",subtitle:"Subtitle",buttons:t.jsxs(t.Fragment,{children:[t.jsx(n,{variant:"filled",onClick:()=>e(!1),children:"Confirm"}),t.jsx(n,{variant:"outline",onClick:()=>e(!1),children:"Cancel"})]}),children:[t.jsx(s,{children:"Some random filler text that fills the entire width to test that it wraps correctly or that it at least looks nice"}),Array.from({length:30},(j,S)=>t.jsx(s,{children:"Dialog content goes here."},S))]})]})};a.__docgenInfo={description:"",methods:[],displayName:"Default"};l.__docgenInfo={description:"",methods:[],displayName:"WithRef"};i.__docgenInfo={description:"",methods:[],displayName:"LotsOfContentWithLongContentProp"};var u,d,h;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`args => {
  const [isOpen, setIsOpen] = useState(false);
  return <>
      <Button onClick={() => setIsOpen(true)}>Open dialog</Button>
      <SlotDialog {...args} open={isOpen} onClose={() => setIsOpen(false)} title="Dialog title" buttons={<>
            <Button variant="filled" onClick={() => setIsOpen(false)}>
              Confirm
            </Button>
            <Button variant="outline" onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
          </>}>
        <Paragraph>
          Some random filler text that fills the entire width to test that it wraps correctly or that it at least looks
          nice
        </Paragraph>
      </SlotDialog>
    </>;
}`,...(h=(d=a.parameters)==null?void 0:d.docs)==null?void 0:h.source}}};var g,m,f;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`args => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  return <>
      <Button onClick={() => dialogRef.current?.showModal()}>Open dialog</Button>
      <SlotDialog {...args} ref={dialogRef} title="Dialog title" subtitle="Subtitle" buttons={<>
            <Button variant="filled" onClick={() => dialogRef.current?.close()}>
              Confirm
            </Button>
            <Button variant="outline" onClick={() => dialogRef.current?.close()}>
              Cancel
            </Button>
          </>}>
        <Paragraph>
          Some random filler text that fills the entire width to test that it wraps correctly or that it at least looks
          nice
        </Paragraph>
      </SlotDialog>
    </>;
}`,...(f=(m=l.parameters)==null?void 0:m.docs)==null?void 0:f.source}}};var C,x,O;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`args => {
  const [isOpen, setIsOpen] = useState(false);
  const contentParagraphCount = 30;
  return <>
      <Button onClick={() => setIsOpen(true)}>Open dialog</Button>
      <SlotDialog {...args} longContent open={isOpen} onClose={() => setIsOpen(false)} title="Dialog title" subtitle="Subtitle" buttons={<>
            <Button variant="filled" onClick={() => setIsOpen(false)}>
              Confirm
            </Button>
            <Button variant="outline" onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
          </>}>
        <Paragraph>
          Some random filler text that fills the entire width to test that it wraps correctly or that it at least looks
          nice
        </Paragraph>
        {Array.from({
        length: contentParagraphCount
      }, (_, index) => <Paragraph key={index}>Dialog content goes here.</Paragraph>)}
      </SlotDialog>
    </>;
}`,...(O=(x=i.parameters)==null?void 0:x.docs)==null?void 0:O.source}}};const q=["Default","WithRef","LotsOfContentWithLongContentProp"];export{a as Default,i as LotsOfContentWithLongContentProp,l as WithRef,q as __namedExportsOrder,T as default};
