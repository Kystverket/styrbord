import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{r as c}from"./iframe-C0YZ71MY.js";import{aC as s,B as n,P as r,ai as S}from"./SlotDialog-zYmBPil7.js";import"./Details-tLT0SL0J.js";import"./translations-DwH8f8qE.js";import"./kyvDivider-GkhM6YIE.js";import{B as M}from"./typography-CdiQYpGP.js";import"./skillingsbuoye-BG85ofhS.js";import"./Logo-DajRw6N7.js";import{L as B}from"./label-CMP6AGfT.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CF7t5c18.js";import"./lite-DaUVFjkg.js";import"./index-XeDiAs9i.js";import"./index-DJ4MHqeE.js";import"./index-DdTRPKrS.js";import"./heading-BLg_FAXN.js";import"./index-Dcieys5M.js";const et={title:"Components/SlotDialog",component:s,tags:["autodocs","beta"],parameters:{layout:"fullscreen",docs:{source:{type:"code"}}}},g=a=>{const[o,e]=c.useState(!1);return t.jsxs(t.Fragment,{children:[t.jsx(n,{onClick:()=>e(!0),children:"Open dialog"}),t.jsxs(s,{...a,open:o,onClose:()=>e(!1),title:"Dialog title",children:[t.jsx(r,{children:"Some random filler text that fills the entire width to test that it wraps correctly or that it at least looks nice"}),t.jsxs(s.Buttons,{children:[t.jsx(n,{variant:"filled",onClick:()=>e(!1),children:"Confirm"}),t.jsx(n,{variant:"outline",onClick:()=>e(!1),children:"Cancel"})]})]})]})},u=a=>{const o=c.useRef(null);return t.jsxs(t.Fragment,{children:[t.jsx(n,{onClick:()=>{var e;return(e=o.current)==null?void 0:e.showModal()},children:"Open dialog"}),t.jsxs(s,{...a,ref:o,title:"Dialog title",subtitle:"Subtitle",children:[t.jsx(r,{children:"Some random filler text that fills the entire width to test that it wraps correctly or that it at least looks nice"}),t.jsx(s.Buttons,{children:t.jsx(n,{variant:"filled",onClick:()=>{var e;return(e=o.current)==null?void 0:e.close()},children:"Close"})})]})]})},d=a=>{const[o,e]=c.useState(!1);return t.jsxs(t.Fragment,{children:[t.jsx(n,{onClick:()=>e(!0),children:"Open dialog"}),t.jsxs(s,{...a,longContent:!0,open:o,onClose:()=>e(!1),title:"Dialog title",subtitle:"Subtitle",children:[t.jsx(r,{children:"Some random filler text that fills the entire width to test that it wraps correctly or that it at least looks nice"}),Array.from({length:30},(p,i)=>t.jsx(r,{children:"Dialog content goes here."},i)),t.jsx(n,{variant:"outline",onClick:()=>e(!1),children:"Cancel"})]})]})},h=a=>{const[o,e]=c.useState(!1);return t.jsxs(t.Fragment,{children:[t.jsx(n,{onClick:()=>e(!0),children:"Open dialog"}),t.jsxs(s,{...a,longContent:!0,open:o,onClose:()=>e(!1),title:"Dialog title",subtitle:"Subtitle",children:[t.jsx(r,{children:"Some random filler text that fills the entire width to test that it wraps correctly or that it at least looks nice"}),Array.from({length:30},(p,i)=>t.jsx(r,{children:"Dialog content goes here."},i))]})]})},m=a=>{const[o,e]=c.useState(!1),[l,p]=c.useState(0),i=4,f=l===i-1,C=()=>{e(!1),p(0)};return t.jsxs(t.Fragment,{children:[t.jsx(n,{onClick:()=>e(!0),children:"Open dialog"}),t.jsxs(s,{...a,longContent:!0,open:o,onClose:C,title:"Multi-page dialog",subtitle:`Step ${l+1} of ${i}`,children:[t.jsxs(M,{gap:16,children:[t.jsxs(r,{children:["This is page ",l+1,"."]}),t.jsxs(r,{children:["Use ",f?'"Submit"':'"Next"'," to continue."]}),[0,2].includes(l)&&t.jsxs(t.Fragment,{children:[t.jsxs(B,{children:["Navn",t.jsx(S,{})]}),t.jsxs(B,{children:["Input 2",t.jsx(S,{})]})]})]}),t.jsxs(s.Buttons,{children:[!f&&t.jsx(n,{variant:"filled",onClick:()=>p(x=>x+1),children:"Next"}),f&&t.jsx(n,{variant:"filled",onClick:C,children:"Submit"}),l>0&&t.jsx(n,{variant:"outline",onClick:()=>p(x=>x-1),children:"Back"}),t.jsx(n,{variant:"ghost",onClick:C,children:"Cancel"})]})]})]})};g.__docgenInfo={description:"",methods:[],displayName:"Default"};u.__docgenInfo={description:"",methods:[],displayName:"WithRef"};d.__docgenInfo={description:"",methods:[],displayName:"LotsOfContentWithLongContentProp"};h.__docgenInfo={description:"",methods:[],displayName:"NoButtons"};m.__docgenInfo={description:"",methods:[],displayName:"MultiplePages"};var P,O,j;g.parameters={...g.parameters,docs:{...(P=g.parameters)==null?void 0:P.docs,source:{originalSource:`args => {
  const [isOpen, setIsOpen] = useState(false);
  return <>
      <Button onClick={() => setIsOpen(true)}>Open dialog</Button>
      <SlotDialog {...args} open={isOpen} onClose={() => setIsOpen(false)} title="Dialog title">
        <Paragraph>
          Some random filler text that fills the entire width to test that it wraps correctly or that it at least looks
          nice
        </Paragraph>
        <SlotDialog.Buttons>
          <Button variant="filled" onClick={() => setIsOpen(false)}>
            Confirm
          </Button>
          <Button variant="outline" onClick={() => setIsOpen(false)}>
            Cancel
          </Button>
        </SlotDialog.Buttons>
      </SlotDialog>
    </>;
}`,...(j=(O=g.parameters)==null?void 0:O.docs)==null?void 0:j.source}}};var k,D,I;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`args => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  return <>
      <Button onClick={() => dialogRef.current?.showModal()}>Open dialog</Button>
      <SlotDialog {...args} ref={dialogRef} title="Dialog title" subtitle="Subtitle">
        <Paragraph>
          Some random filler text that fills the entire width to test that it wraps correctly or that it at least looks
          nice
        </Paragraph>
        <SlotDialog.Buttons>
          <Button variant="filled" onClick={() => dialogRef.current?.close()}>
            Close
          </Button>
        </SlotDialog.Buttons>
      </SlotDialog>
    </>;
}`,...(I=(D=u.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};var b,v,y;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`args => {
  const [isOpen, setIsOpen] = useState(false);
  const contentParagraphCount = 30;
  return <>
      <Button onClick={() => setIsOpen(true)}>Open dialog</Button>
      <SlotDialog {...args} longContent open={isOpen} onClose={() => setIsOpen(false)} title="Dialog title" subtitle="Subtitle">
        <Paragraph>
          Some random filler text that fills the entire width to test that it wraps correctly or that it at least looks
          nice
        </Paragraph>
        {Array.from({
        length: contentParagraphCount
      }, (_, index) => <Paragraph key={index}>Dialog content goes here.</Paragraph>)}
        <Button variant="outline" onClick={() => setIsOpen(false)}>
          Cancel
        </Button>
      </SlotDialog>
    </>;
}`,...(y=(v=d.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var w,L,_;h.parameters={...h.parameters,docs:{...(w=h.parameters)==null?void 0:w.docs,source:{originalSource:`args => {
  const [isOpen, setIsOpen] = useState(false);
  const contentParagraphCount = 30;
  return <>
      <Button onClick={() => setIsOpen(true)}>Open dialog</Button>
      <SlotDialog {...args} longContent open={isOpen} onClose={() => setIsOpen(false)} title="Dialog title" subtitle="Subtitle">
        <Paragraph>
          Some random filler text that fills the entire width to test that it wraps correctly or that it at least looks
          nice
        </Paragraph>
        {Array.from({
        length: contentParagraphCount
      }, (_, index) => <Paragraph key={index}>Dialog content goes here.</Paragraph>)}
      </SlotDialog>
    </>;
}`,...(_=(L=h.parameters)==null?void 0:L.docs)==null?void 0:_.source}}};var R,N,A;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`args => {
  const [isOpen, setIsOpen] = useState(false);
  const [page, setPage] = useState(0);
  const totalPages = 4;
  const isLastPage = page === totalPages - 1;
  const closeAndReset = () => {
    setIsOpen(false);
    setPage(0);
  };
  return <>
      <Button onClick={() => setIsOpen(true)}>Open dialog</Button>
      <SlotDialog {...args} longContent open={isOpen} onClose={closeAndReset} title="Multi-page dialog" subtitle={\`Step \${page + 1} of \${totalPages}\`}>
        <Box gap={16}>
          <Paragraph>This is page {page + 1}.</Paragraph>
          <Paragraph>Use {isLastPage ? '"Submit"' : '"Next"'} to continue.</Paragraph>
          {[0, 2].includes(page) && <>
              <Label>
                Navn
                <Input />
              </Label>
              <Label>
                Input 2
                <Input />
              </Label>
            </>}
        </Box>

        <SlotDialog.Buttons>
          {!isLastPage && <Button variant="filled" onClick={() => setPage(prev => prev + 1)}>
              Next
            </Button>}
          {isLastPage && <Button variant="filled" onClick={closeAndReset}>
              Submit
            </Button>}
          {page > 0 && <Button variant="outline" onClick={() => setPage(prev => prev - 1)}>
              Back
            </Button>}
          <Button variant="ghost" onClick={closeAndReset}>
            Cancel
          </Button>
        </SlotDialog.Buttons>
      </SlotDialog>
    </>;
}`,...(A=(N=m.parameters)==null?void 0:N.docs)==null?void 0:A.source}}};const nt=["Default","WithRef","LotsOfContentWithLongContentProp","NoButtons","MultiplePages"];export{g as Default,d as LotsOfContentWithLongContentProp,m as MultiplePages,h as NoButtons,u as WithRef,nt as __namedExportsOrder,et as default};
