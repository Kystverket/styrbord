import{S as W,j as e,r as t}from"./iframe-C7v4yl2J.js";import{R as f,C as v,B as k,I as _,d as $,F as N,v as q}from"./Dialog-DK_STYvC.js";import{a as G}from"./atlas 1-DK2KYHpu.js";import"./shipTypes-hFnSBndP.js";import"./Details-DeY5olzK.js";import"./KyvDivider-RgI2IJq0.js";import{B as i}from"./typography-C-2Dk0qU.js";import"./KyvSpinner-KzT_Z5P3.js";import"./skillingsbuoye-DlbTSsj7.js";import"./Logo-B3_tIxfF.js";import{d as H}from"./tooltip-TyAXlcCq.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Cj9QRynV.js";import"./index-BCXsrxGj.js";const ce={title:"Form/RichTextArea/RichTextArea",component:f,decorators:[r=>e.jsx(N.Provider,{value:{deriveFileInfosFromStorageIds:P},children:e.jsx(r,{})}),W],tags:["autodocs","kyv","beta"]},u={value:"",onChange:()=>{},label:"Rikt tekstfelt",description:"Dette er et tekstfelt som støtter rik tekstformatering.",optional:"Valgfritt"},P=async()=>new Promise(r=>{setTimeout(()=>{r([{storageId:"image://86062b3c-ebc8-48d0-9d08-8c282f5d8c69",previewUri:G}])},1e3)}),J=async()=>new Promise(r=>{setTimeout(()=>{r({storageId:q(),success:!0})},1500)}),K=async()=>new Promise(r=>{setTimeout(()=>{r()},1e3)}),x=r=>{const n=()=>{const[a,s]=t.useState(r.value??"");return e.jsx(f,{...r,value:a,onChange:l=>{s(l),console.log("RichTextArea markdown:",l),r.onChange(l)}})};return e.jsx(n,{})},p={args:u,render:x},g={args:{...u,disabled:!0,value:"Skrivebeskyttet innhold"},render:x},h={args:{...u,error:"Du må fylle ut dette feltet."},render:x},b={parameters:{docs:{source:{type:"code"}}},args:{...u,label:"Rikt tekstfelt med bottomToolbar",description:"Et eksempel på hvordan bottomToolbar kan brukes i richTextArea"},render:r=>{const[n,a]=t.useState(r.value??""),[s,l]=t.useState(!1),m=t.useRef(new Set);return t.useEffect(()=>()=>{m.current.forEach(d=>URL.revokeObjectURL(d))},[]),e.jsx(f,{...r,value:n,onChange:d=>{a(d),r.onChange(d)},bottomToolbar:e.jsxs(i,{gap:12,px:8,children:[e.jsxs(i,{horizontal:!0,px:4,gap:8,children:[e.jsx(v.Removable,{"data-color":"primary/subtle",children:"@Admin Etternavn"}),e.jsx(v.Removable,{"data-color":"primary/subtle",children:"@Saksbehandler Etternavn"})]}),e.jsxs(i,{align:"center",justify:"between",pb:12,horizontal:!0,children:[e.jsxs(i,{horizontal:!0,children:[e.jsxs(i,{horizontal:!0,gap:4,pr:4,children:[e.jsx(k,{title:"Add tag",variant:"ghost",size:"sm",color:"neutral",icon:!0,popoverTarget:"addTag",children:e.jsx(_,{material:"alternate_email"})}),e.jsx(H,{id:"addTag",popover:"manual",children:"Example"})]}),e.jsx("div",{style:{width:"1px",backgroundColor:"var(--ds-color-neutral-surface-hover)",marginBlock:"6px"}}),e.jsx(i,{horizontal:!0,align:"center",pl:12,children:e.jsx(v.Checkbox,{"data-color":"neutral",checked:s,onChange:()=>l(!s),children:"Marker som konklusjon"})})]}),e.jsxs(i,{horizontal:!0,gap:16,children:[e.jsx(k,{size:"sm",color:"neutral",variant:"ghost",onClick:()=>{alert("Avbryt")},children:"Avbryt"}),e.jsx(k,{size:"sm",variant:"filled",onClick:()=>{alert("Lagre")},children:"Lagre"})]})]})]})})}},c={parameters:{docs:{source:{type:"code"}}},args:{...u,value:`
Bilde av Atlas
![Bilde_av_atlas.png](image://86062b3c-ebc8-48d0-9d08-8c282f5d8c69)`,label:"Rikt tekstfelt med bildereferanse",description:"Last opp et bilde — markdownutdata vil inneholde en stabil referanse til bildet.",onImageUpload:async r=>{const n=URL.createObjectURL(r),a=`image://${crypto.randomUUID()}`;return{src:n,ref:a,alt:r.name}},onImageRemove:async r=>{alert("Removed image "+r)}},render:r=>{const[n,a]=t.useState(r.value??""),[s,l]=t.useState(""),m=t.useRef(new Set);t.useEffect(()=>()=>{m.current.forEach(o=>URL.revokeObjectURL(o))},[]);const d=async o=>{const R=URL.createObjectURL(o);m.current.add(R);const V=`image://${crypto.randomUUID()}`;return{src:R,ref:V,alt:o.name}};return e.jsx($.Provider,{value:{uploadFile:J,deleteFile:K},children:e.jsxs(N.Provider,{value:{deriveFileInfosFromStorageIds:P},children:[e.jsx(f,{...r,onImageUpload:d,value:n,onChange:o=>{a(o),l(o),r.onChange(o)}}),s&&e.jsxs("div",{style:{marginTop:"12px"},children:[e.jsx("p",{style:{marginBottom:"0.25rem",fontWeight:"bold",fontSize:"0.875rem"},children:"Markdown sendt til onChange:"}),e.jsx("pre",{style:{background:"#f4f4f4",border:"1px solid #ddd",borderRadius:"4px",padding:"0.75rem",fontSize:"0.8rem",whiteSpace:"pre-wrap",wordBreak:"break-all"},children:s})]})]})})}};var y,S,U;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: defaultArgs,
  render: renderInteractive
}`,...(U=(S=p.parameters)==null?void 0:S.docs)==null?void 0:U.source}}};var j,C,w;g.parameters={...g.parameters,docs:{...(j=g.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    disabled: true,
    value: 'Skrivebeskyttet innhold'
  },
  render: renderInteractive
}`,...(w=(C=g.parameters)==null?void 0:C.docs)==null?void 0:w.source}}};var A,B,I;h.parameters={...h.parameters,docs:{...(A=h.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    error: 'Du må fylle ut dette feltet.'
  },
  render: renderInteractive
}`,...(I=(B=h.parameters)==null?void 0:B.docs)==null?void 0:I.source}}};var O,T,L;b.parameters={...b.parameters,docs:{...(O=b.parameters)==null?void 0:O.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        // Prevent Storybook from pretty-printing runtime-heavy render output for this interactive story.
        type: 'code'
      }
    }
  },
  args: {
    ...defaultArgs,
    label: 'Rikt tekstfelt med bottomToolbar',
    description: 'Et eksempel på hvordan bottomToolbar kan brukes i richTextArea'
  },
  render: args => {
    const [value, setValue] = useState(args.value ?? ''); // NOSONAR - Storybook render fungerer som en React-komponent, hooks er gyldige her
    const [isMarkedAsConclusion, setIsMarkedAsConclusion] = useState(false); // NOSONAR - Storybook render fungerer som en React-komponent, hooks er gyldige her
    const objectUrlsRef = useRef<Set<string>>(new Set()); // NOSONAR - Storybook render fungerer som en React-komponent, hooks er gyldige her

    useEffect(() => {
      return () => {
        // Cleanup: revoke all object URLs on unmount
        objectUrlsRef.current.forEach(url => URL.revokeObjectURL(url));
      };
    }, []);
    return <RichTextArea {...args} value={value} onChange={nextMarkdown => {
      setValue(nextMarkdown);
      args.onChange(nextMarkdown);
    }} bottomToolbar={<Box gap={12} px={8}>
            <Box horizontal px={4} gap={8}>
              <Chip.Removable data-color="primary/subtle">@Admin Etternavn</Chip.Removable>
              <Chip.Removable data-color="primary/subtle">@Saksbehandler Etternavn</Chip.Removable>
            </Box>

            <Box align="center" justify="between" pb={12} horizontal>
              <Box horizontal>
                <Box horizontal gap={4} pr={4}>
                  <Button title="Add tag" variant="ghost" size="sm" color="neutral" icon popoverTarget="addTag">
                    <Icon material="alternate_email" />
                  </Button>
                  <Dropdown id="addTag" popover="manual">
                    Example
                  </Dropdown>
                </Box>
                <div style={{
            width: '1px',
            backgroundColor: 'var(--ds-color-neutral-surface-hover)',
            marginBlock: '6px'
          }} />
                <Box horizontal align="center" pl={12}>
                  <Chip.Checkbox data-color="neutral" checked={isMarkedAsConclusion} onChange={() => setIsMarkedAsConclusion(!isMarkedAsConclusion)}>
                    Marker som konklusjon
                  </Chip.Checkbox>
                </Box>
              </Box>
              <Box horizontal gap={16}>
                <Button size="sm" color="neutral" variant="ghost" onClick={() => {
            alert('Avbryt');
          }}>
                  Avbryt
                </Button>
                <Button size="sm" variant="filled" onClick={() => {
            alert('Lagre');
          }}>
                  Lagre
                </Button>
              </Box>
            </Box>
          </Box>} />;
  }
}`,...(L=(T=b.parameters)==null?void 0:T.docs)==null?void 0:L.source}}};var z,E,D,F,M;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        // Prevent Storybook from pretty-printing runtime-heavy render output for this interactive story.
        type: 'code'
      }
    }
  },
  args: {
    ...defaultArgs,
    value: \`
Bilde av Atlas
![Bilde_av_atlas.png](image://86062b3c-ebc8-48d0-9d08-8c282f5d8c69)\`,
    label: 'Rikt tekstfelt med bildereferanse',
    description: 'Last opp et bilde — markdownutdata vil inneholde en stabil referanse til bildet.',
    onImageUpload: async file => {
      const src = URL.createObjectURL(file);
      // Simulate a stable blob reference that would be generated server-side
      const ref = \`image://\${crypto.randomUUID()}\`;
      return {
        src,
        ref,
        alt: file.name
      };
    },
    onImageRemove: async (ref: string) => {
      alert('Removed image ' + ref);
    }
  },
  render: args => {
    const [value, setValue] = useState(args.value ?? ''); // NOSONAR - Storybook render fungerer som en React-komponent, hooks er gyldige her
    const [markdownOutput, setMarkdownOutput] = useState(''); // NOSONAR - Storybook render fungerer som en React-komponent, hooks er gyldige her
    const objectUrlsRef = useRef<Set<string>>(new Set()); // NOSONAR - Storybook render fungerer som en React-komponent, hooks er gyldige her

    useEffect(() => {
      // NOSONAR - Storybook render fungerer som en React-komponent, hooks er gyldige her
      return () => {
        // Cleanup: revoke all object URLs on unmount
        objectUrlsRef.current.forEach(url => URL.revokeObjectURL(url));
      };
    }, []);
    const handleImageUpload = async (file: File) => {
      const src = URL.createObjectURL(file);
      objectUrlsRef.current.add(src);
      const ref = \`image://\${crypto.randomUUID()}\`;
      return {
        src,
        ref,
        alt: file.name
      };
    };
    return <FileUploaderContext.Provider value={{
      uploadFile,
      deleteFile
    }}>
        <FileRetrieverContext.Provider value={{
        deriveFileInfosFromStorageIds
      }}>
          <RichTextArea {...args} onImageUpload={handleImageUpload} value={value} onChange={nextMarkdown => {
          setValue(nextMarkdown);
          setMarkdownOutput(nextMarkdown);
          args.onChange(nextMarkdown);
        }} />
          {markdownOutput && <div style={{
          marginTop: '12px'
        }}>
              <p style={{
            marginBottom: '0.25rem',
            fontWeight: 'bold',
            fontSize: '0.875rem'
          }}>
                Markdown sendt til onChange:
              </p>
              <pre style={{
            background: '#f4f4f4',
            border: '1px solid #ddd',
            borderRadius: '4px',
            padding: '0.75rem',
            fontSize: '0.8rem',
            whiteSpace: 'pre-wrap',
            wordBreak: 'break-all'
          }}>
                {markdownOutput}
              </pre>
            </div>}
        </FileRetrieverContext.Provider>
      </FileUploaderContext.Provider>;
  }
}`,...(D=(E=c.parameters)==null?void 0:E.docs)==null?void 0:D.source},description:{story:"Demonstrates stable image references in markdown.\n\n`onImageUpload` returns both:\n- `src` — a data URL used by the editor to display the image immediately\n- `ref` — a stable opaque ID (e.g. Azure blob path / UUID) stored in the markdown instead of the SAS URL.\n\n`onImageRemove` is called with the stable ref when an image is removed from the editor,\nso a backend can delete the persisted image resource.\n\nThe `onChange` output will contain `![alt](image://uuid-...)` rather than the raw data URL,\nand a `MarkdownToReact` resolver can map that ref to a displayable URL.",...(M=(F=c.parameters)==null?void 0:F.docs)==null?void 0:M.description}}};const ue=["Default","Disabled","WithError","WithBottomToolbar","WithImageRef"];export{p as Default,g as Disabled,b as WithBottomToolbar,h as WithError,c as WithImageRef,ue as __namedExportsOrder,ce as default};
