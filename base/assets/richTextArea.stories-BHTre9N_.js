import{S as W,j as e,r as o}from"./iframe-iZ4XiIu8.js";import{R as f,C as x,B as p,I as y,d as $,F as P,v as q}from"./Dialog-Cwm0YOOu.js";import{a as G}from"./atlas 1-DK2KYHpu.js";import"./shipTypes-hFnSBndP.js";import"./Details-DhLcoDEo.js";import"./KyvDivider--tXNW3JF.js";import{B as d}from"./typography-BWYFi2sF.js";import"./KyvSpinner-DdPSQ1xt.js";import"./skillingsbuoye-Bxnw_i0Q.js";import"./Logo-BVdDHpoI.js";import{d as H}from"./tooltip-DyQpg3_0.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BUIFYONC.js";import"./index-BrsAFw8f.js";const ce={title:"Form/RichTextArea/RichTextArea",component:f,decorators:[r=>e.jsx(P.Provider,{value:{deriveFileInfosFromStorageIds:_},children:e.jsx(r,{})}),W],tags:["autodocs","kyv","beta"]},u={value:"",onChange:()=>{},rows:"md",label:"Rikt tekstfelt",description:"Dette er et tekstfelt som støtter rik tekstformatering.",optional:"Valgfritt"},_=async()=>new Promise(r=>{setTimeout(()=>{r([{storageId:"image://86062b3c-ebc8-48d0-9d08-8c282f5d8c69",previewUri:G}])},1e3)}),J=async()=>new Promise(r=>{setTimeout(()=>{r({storageId:q(),success:!0})},1500)}),K=async()=>new Promise(r=>{setTimeout(()=>{r()},1e3)}),R=r=>{const a=()=>{const[s,l]=o.useState(r.value??"");return e.jsx(f,{...r,value:s,onChange:i=>{l(i),console.log("RichTextArea markdown:",i),r.onChange(i)}})};return e.jsx(a,{})},g={args:u,render:R},h={args:{...u,disabled:!0,value:"Skrivebeskyttet innhold"},render:R},b={args:{...u,error:"Du må fylle ut dette feltet."},render:R},v={parameters:{docs:{source:{type:"code"}}},args:{...u,label:"Rikt tekstfelt med bottomToolbar",description:"Et eksempel på hvordan bottomToolbar kan brukes i richTextArea"},render:r=>{const[a,s]=o.useState(r.value??""),[l,i]=o.useState(!1),m=o.useRef(new Set),[k,t]=o.useState(!0);return o.useEffect(()=>()=>{m.current.forEach(n=>URL.revokeObjectURL(n))},[]),e.jsx(f,{showToolbar:k,...r,value:a,onChange:n=>{s(n),r.onChange(n)},bottomToolbar:e.jsxs(d,{gap:12,px:8,children:[e.jsxs(d,{horizontal:!0,px:4,gap:8,children:[e.jsx(x.Removable,{"data-color":"primary/subtle",children:"@Admin Etternavn"}),e.jsx(x.Removable,{"data-color":"primary/subtle",children:"@Saksbehandler Etternavn"})]}),e.jsxs(d,{align:"center",justify:"between",pb:12,horizontal:!0,children:[e.jsxs(d,{horizontal:!0,children:[e.jsxs(d,{horizontal:!0,gap:4,pr:4,children:[e.jsx(p,{onClick:()=>t(n=>!n),variant:"ghost",title:"Toggle toolbar",size:"sm",color:"neutral",icon:!0,children:e.jsx(y,{material:"match_case",size:"lg"})}),e.jsx(p,{title:"Add tag",variant:"ghost",size:"sm",color:"neutral",icon:!0,popoverTarget:"addTag",children:e.jsx(y,{material:"alternate_email"})}),e.jsx(H,{id:"addTag",popover:"manual",children:"Example"})]}),e.jsx("div",{style:{width:"1px",backgroundColor:"var(--ds-color-neutral-surface-hover)",marginBlock:"6px"}}),e.jsx(d,{horizontal:!0,align:"center",pl:12,children:e.jsx(x.Checkbox,{"data-color":"neutral",checked:l,onChange:()=>i(!l),children:"Marker som konklusjon"})})]}),e.jsxs(d,{horizontal:!0,gap:16,children:[e.jsx(p,{size:"sm",color:"neutral",variant:"ghost",onClick:()=>{alert("Avbryt")},children:"Avbryt"}),e.jsx(p,{size:"sm",variant:"filled",onClick:()=>{alert("Lagre")},children:"Lagre"})]})]})]})})}},c={parameters:{docs:{source:{type:"code"}}},args:{...u,value:`
Bilde av Atlas
![Bilde_av_atlas.png](image://86062b3c-ebc8-48d0-9d08-8c282f5d8c69)`,label:"Rikt tekstfelt med bildereferanse",description:"Last opp et bilde — markdownutdata vil inneholde en stabil referanse til bildet.",onImageUpload:async r=>{const a=URL.createObjectURL(r),s=`image://${crypto.randomUUID()}`;return{src:a,ref:s,alt:r.name}},onImageRemove:async r=>{alert("Removed image "+r)}},render:r=>{const[a,s]=o.useState(r.value??""),[l,i]=o.useState(""),m=o.useRef(new Set);o.useEffect(()=>()=>{m.current.forEach(t=>URL.revokeObjectURL(t))},[]);const k=async t=>{const n=URL.createObjectURL(t);m.current.add(n);const V=`image://${crypto.randomUUID()}`;return{src:n,ref:V,alt:t.name}};return e.jsx($.Provider,{value:{uploadFile:J,deleteFile:K},children:e.jsxs(P.Provider,{value:{deriveFileInfosFromStorageIds:_},children:[e.jsx(f,{...r,onImageUpload:k,value:a,onChange:t=>{s(t),i(t),r.onChange(t)}}),l&&e.jsxs("div",{style:{marginTop:"12px"},children:[e.jsx("p",{style:{marginBottom:"0.25rem",fontWeight:"bold",fontSize:"0.875rem"},children:"Markdown sendt til onChange:"}),e.jsx("pre",{style:{background:"#f4f4f4",border:"1px solid #ddd",borderRadius:"4px",padding:"0.75rem",fontSize:"0.8rem",whiteSpace:"pre-wrap",wordBreak:"break-all"},children:l})]})]})})}};var S,j,w;g.parameters={...g.parameters,docs:{...(S=g.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: defaultArgs,
  render: renderInteractive
}`,...(w=(j=g.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};var C,U,A;h.parameters={...h.parameters,docs:{...(C=h.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    disabled: true,
    value: 'Skrivebeskyttet innhold'
  },
  render: renderInteractive
}`,...(A=(U=h.parameters)==null?void 0:U.docs)==null?void 0:A.source}}};var I,T,B;b.parameters={...b.parameters,docs:{...(I=b.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    error: 'Du må fylle ut dette feltet.'
  },
  render: renderInteractive
}`,...(B=(T=b.parameters)==null?void 0:T.docs)==null?void 0:B.source}}};var O,L,z;v.parameters={...v.parameters,docs:{...(O=v.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
    const [isToolbarShown, setIsToolbarShown] = useState<boolean>(true); // NOSONAR - Storybook render fungerer som en React-komponent, hooks er gyldige her

    useEffect(() => {
      return () => {
        // Cleanup: revoke all object URLs on unmount
        objectUrlsRef.current.forEach(url => URL.revokeObjectURL(url));
      };
    }, []);
    return <RichTextArea showToolbar={isToolbarShown} {...args} value={value} onChange={nextMarkdown => {
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
                  <Button onClick={() => setIsToolbarShown(prev => !prev)} variant="ghost" title="Toggle toolbar" size="sm" color="neutral" icon>
                    <Icon material="match_case" size="lg" />
                  </Button>
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
}`,...(z=(L=v.parameters)==null?void 0:L.docs)==null?void 0:z.source}}};var E,D,F,M,N;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(F=(D=c.parameters)==null?void 0:D.docs)==null?void 0:F.source},description:{story:"Demonstrates stable image references in markdown.\n\n`onImageUpload` returns both:\n- `src` — a data URL used by the editor to display the image immediately\n- `ref` — a stable opaque ID (e.g. Azure blob path / UUID) stored in the markdown instead of the SAS URL.\n\n`onImageRemove` is called with the stable ref when an image is removed from the editor,\nso a backend can delete the persisted image resource.\n\nThe `onChange` output will contain `![alt](image://uuid-...)` rather than the raw data URL,\nand a `MarkdownToReact` resolver can map that ref to a displayable URL.",...(N=(M=c.parameters)==null?void 0:M.docs)==null?void 0:N.description}}};const ue=["Default","Disabled","WithError","WithBottomToolbar","WithImageRef"];export{g as Default,h as Disabled,v as WithBottomToolbar,b as WithError,c as WithImageRef,ue as __namedExportsOrder,ce as default};
