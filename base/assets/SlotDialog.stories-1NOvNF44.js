import{r,j as t}from"./iframe-C8M-VeIj.js";import{o as s,B as o}from"./Dialog-B9KxNoKm.js";import"./Details-WhE9vrcR.js";import"./KyvDivider-C2UJ23Nn.js";import{B as $}from"./typography-BEkYQZbB.js";import"./KyvSpinner-fUmgDD5m.js";import"./skillingsbuoye-C-SStW0M.js";import"./Logo-CToxfNH3.js";import{P as l,L as B,I as O}from"./tooltip-BBROsufm.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BUBX68yo.js";import"./index-sHKts_Ar.js";const Z={title:"Components/SlotDialog",component:s,tags:["autodocs","beta"],parameters:{layout:"fullscreen",docs:{source:{type:"code"}}}},u=a=>{const[n,e]=r.useState(!1);return t.jsxs(t.Fragment,{children:[t.jsx(o,{onClick:()=>e(!0),children:"Open dialog"}),t.jsxs(s,{...a,open:n,onClose:()=>e(!1),title:"Dialog title",children:[t.jsx(l,{children:"Some random filler text that fills the entire width to test that it wraps correctly or that it at least looks nice"}),t.jsxs(s.Buttons,{children:[t.jsx(o,{variant:"filled",onClick:()=>e(!1),children:"Confirm"}),t.jsx(o,{variant:"outline",onClick:()=>e(!1),children:"Cancel"})]})]})]})},g=a=>{const n=r.useRef(null);return t.jsxs(t.Fragment,{children:[t.jsx(o,{onClick:()=>{var e;return(e=n.current)==null?void 0:e.showModal()},children:"Open dialog"}),t.jsxs(s,{...a,ref:n,title:"Dialog title",subtitle:"Subtitle",children:[t.jsx(l,{children:"Some random filler text that fills the entire width to test that it wraps correctly or that it at least looks nice"}),t.jsx(s.Buttons,{children:t.jsx(o,{variant:"filled",onClick:()=>{var e;return(e=n.current)==null?void 0:e.close()},children:"Close"})})]})]})},d=a=>{const[n,e]=r.useState(!1);return t.jsxs(t.Fragment,{children:[t.jsx(o,{onClick:()=>e(!0),children:"Open dialog"}),t.jsxs(s,{...a,longContent:!0,open:n,onClose:()=>e(!1),title:"Dialog title",subtitle:"Subtitle",children:[t.jsx(l,{children:"Some random filler text that fills the entire width to test that it wraps correctly or that it at least looks nice"}),Array.from({length:30},(p,c)=>t.jsx(l,{children:"Dialog content goes here."},c)),t.jsx(o,{variant:"outline",onClick:()=>e(!1),children:"Cancel"})]})]})},h=a=>{const[n,e]=r.useState(!1);return t.jsxs(t.Fragment,{children:[t.jsx(o,{onClick:()=>e(!0),children:"Open dialog"}),t.jsxs(s,{...a,longContent:!0,open:n,onClose:()=>e(!1),title:"Dialog title",subtitle:"Subtitle",children:[t.jsx(l,{children:"Some random filler text that fills the entire width to test that it wraps correctly or that it at least looks nice"}),Array.from({length:30},(p,c)=>t.jsx(l,{children:"Dialog content goes here."},c))]})]})},m=a=>{const[n,e]=r.useState(!1),[i,p]=r.useState(0),c=4,S=i===c-1,C=()=>{e(!1),p(0)};return t.jsxs(t.Fragment,{children:[t.jsx(o,{onClick:()=>e(!0),children:"Open dialog"}),t.jsxs(s,{...a,longContent:!0,open:n,onClose:C,title:"Multi-page dialog",subtitle:`Step ${i+1} of ${c}`,children:[t.jsxs($,{gap:16,children:[t.jsxs(l,{children:["This is page ",i+1,"."]}),t.jsxs(l,{children:["Use ",S?'"Submit"':'"Next"'," to continue."]}),[0,2].includes(i)&&t.jsxs(t.Fragment,{children:[t.jsxs(B,{children:["Navn",t.jsx(O,{})]}),t.jsxs(B,{children:["Input 2",t.jsx(O,{})]})]})]}),t.jsxs(s.Buttons,{children:[!S&&t.jsx(o,{variant:"filled",onClick:()=>p(x=>x+1),children:"Next"}),S&&t.jsx(o,{variant:"filled",onClick:C,children:"Submit"}),i>0&&t.jsx(o,{variant:"outline",onClick:()=>p(x=>x-1),children:"Back"}),t.jsx(o,{variant:"ghost",onClick:C,children:"Cancel"})]})]})]})},f=()=>{const[a,n]=r.useState(null);return t.jsxs($,{horizontal:!0,gap:8,children:[["sm","md","lg"].map(e=>t.jsxs(o,{onClick:()=>n(e),children:["Open ",e]},e)),["sm","md","lg"].map(e=>t.jsxs(s,{size:e,open:a===e,onClose:()=>n(null),title:`Dialog — ${e}`,children:[t.jsx(l,{children:"Some random filler text that fills the entire width to test that it wraps correctly or that it at least looks nice"}),t.jsxs(s.Buttons,{children:[t.jsx(o,{variant:"filled",onClick:()=>n(null),children:"Confirm"}),t.jsx(o,{variant:"outline",onClick:()=>n(null),children:"Cancel"})]})]},e))]})};u.__docgenInfo={description:"",methods:[],displayName:"Default"};g.__docgenInfo={description:"",methods:[],displayName:"WithRef"};d.__docgenInfo={description:"",methods:[],displayName:"LotsOfContentWithLongContentProp"};h.__docgenInfo={description:"",methods:[],displayName:"NoButtons"};m.__docgenInfo={description:"",methods:[],displayName:"MultiplePages"};f.__docgenInfo={description:"",methods:[],displayName:"Sizes"};var j,k,P;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`args => {
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
}`,...(P=(k=u.parameters)==null?void 0:k.docs)==null?void 0:P.source}}};var D,I,v;g.parameters={...g.parameters,docs:{...(D=g.parameters)==null?void 0:D.docs,source:{originalSource:`args => {
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
}`,...(v=(I=g.parameters)==null?void 0:I.docs)==null?void 0:v.source}}};var y,b,w;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`args => {
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
}`,...(w=(b=d.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};var z,_,L;h.parameters={...h.parameters,docs:{...(z=h.parameters)==null?void 0:z.docs,source:{originalSource:`args => {
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
}`,...(L=(_=h.parameters)==null?void 0:_.docs)==null?void 0:L.source}}};var R,N,A;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`args => {
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
}`,...(A=(N=m.parameters)==null?void 0:N.docs)==null?void 0:A.source}}};var M,F,W;f.parameters={...f.parameters,docs:{...(M=f.parameters)==null?void 0:M.docs,source:{originalSource:`() => {
  const [openSize, setOpenSize] = useState<DialogSize | null>(null);
  return <Box horizontal gap={8}>
      {(['sm', 'md', 'lg'] as DialogSize[]).map(size => <Button key={size} onClick={() => setOpenSize(size)}>
          Open {size}
        </Button>)}
      {(['sm', 'md', 'lg'] as DialogSize[]).map(size => <SlotDialog key={size} size={size} open={openSize === size} onClose={() => setOpenSize(null)} title={\`Dialog — \${size}\`}>
          <Paragraph>
            Some random filler text that fills the entire width to test that it wraps correctly or that it at least
            looks nice
          </Paragraph>
          <SlotDialog.Buttons>
            <Button variant="filled" onClick={() => setOpenSize(null)}>
              Confirm
            </Button>
            <Button variant="outline" onClick={() => setOpenSize(null)}>
              Cancel
            </Button>
          </SlotDialog.Buttons>
        </SlotDialog>)}
    </Box>;
}`,...(W=(F=f.parameters)==null?void 0:F.docs)==null?void 0:W.source}}};const tt=["Default","WithRef","LotsOfContentWithLongContentProp","NoButtons","MultiplePages","Sizes"];export{u as Default,d as LotsOfContentWithLongContentProp,m as MultiplePages,h as NoButtons,f as Sizes,g as WithRef,tt as __namedExportsOrder,Z as default};
