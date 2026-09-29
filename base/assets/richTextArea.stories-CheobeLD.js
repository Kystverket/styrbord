import{S as G,j as e,r as o}from"./iframe-D7H0TpZN.js";import{R as f,C as y,B as p,I as S,h as J,F as $,v as K}from"./Dialog-DC3QeAi8.js";import{a as Q}from"./atlas 1-DK2KYHpu.js";import"./shipTypes-hFnSBndP.js";import"./Details-Cj20ZfXY.js";import"./KyvDivider-DUwNwNjm.js";import{B as d}from"./typography-DZUVsu-a.js";import"./KyvSpinner-DqMYk_e6.js";import"./skillingsbuoye-C9HDQcNP.js";import"./Logo-BKP-Rf6I.js";import{c as X}from"./tooltip-8M5wgfpu.js";import"./preload-helper-Dp1pzeXC.js";import"./color-tokens-DRys5hYJ.js";import"./index-CCgyV8Kw.js";import"./index-LPZpTZ8U.js";const he={title:"Form/RichTextArea/RichTextArea",component:f,decorators:[r=>e.jsx($.Provider,{value:{deriveFileInfosFromStorageIds:H},children:e.jsx(r,{})}),G],tags:["autodocs","kyv","beta"]},c={value:"",onChange:()=>{},rows:"md",label:"Rikt tekstfelt",description:"Dette er et tekstfelt som støtter rik tekstformatering.",optional:"Valgfritt"},H=async()=>new Promise(r=>{setTimeout(()=>{r([{storageId:"image://86062b3c-ebc8-48d0-9d08-8c282f5d8c69",previewUri:Q}])},1e3)}),Y=async()=>new Promise(r=>{setTimeout(()=>{r({storageId:K(),success:!0})},1500)}),Z=async()=>new Promise(r=>{setTimeout(()=>{r()},1e3)}),x=r=>{const a=()=>{const[s,l]=o.useState(r.value??"");return e.jsx(f,{...r,value:s,onChange:i=>{l(i),console.log("RichTextArea markdown:",i),r.onChange(i)}})};return e.jsx(a,{})},g={args:c,render:x},h={args:{...c,disabled:!0,value:"Skrivebeskyttet innhold"},render:x},b={args:{...c,label:"Rikt tekstfelt med kode",description:"Viser at editoren kan laste markdown med inline-kode og kodeblokker.",value:"Inline-kode: `const answer = 42;`\n\n```ts\nconst greet = (name: string) => `Hei, ${name}`;\n```"},render:x},k={args:{...c,error:"Du må fylle ut dette feltet."},render:x},v={parameters:{docs:{source:{type:"code"}}},args:{...c,label:"Rikt tekstfelt med bottomToolbar",description:"Et eksempel på hvordan bottomToolbar kan brukes i richTextArea"},render:r=>{const[a,s]=o.useState(r.value??""),[l,i]=o.useState(!1),m=o.useRef(new Set),[R,t]=o.useState(!0);return o.useEffect(()=>()=>{m.current.forEach(n=>URL.revokeObjectURL(n))},[]),e.jsx(f,{showToolbar:R,...r,value:a,onChange:n=>{s(n),r.onChange(n)},bottomToolbar:e.jsxs(d,{gap:12,px:8,children:[e.jsxs(d,{horizontal:!0,px:4,gap:8,children:[e.jsx(y.Removable,{"data-color":"primary/subtle",children:"@Admin Etternavn"}),e.jsx(y.Removable,{"data-color":"primary/subtle",children:"@Saksbehandler Etternavn"})]}),e.jsxs(d,{align:"center",justify:"between",pb:12,horizontal:!0,children:[e.jsxs(d,{horizontal:!0,children:[e.jsxs(d,{horizontal:!0,gap:4,pr:4,children:[e.jsx(p,{onClick:()=>t(n=>!n),variant:"ghost",title:"Toggle toolbar",size:"sm",color:"neutral",icon:!0,children:e.jsx(S,{material:"match_case",size:"lg"})}),e.jsx(p,{title:"Add tag",variant:"ghost",size:"sm",color:"neutral",icon:!0,popoverTarget:"addTag",children:e.jsx(S,{material:"alternate_email"})}),e.jsx(X,{id:"addTag",popover:"manual",children:"Example"})]}),e.jsx("div",{style:{width:"1px",backgroundColor:"var(--ds-color-neutral-surface-hover)",marginBlock:"6px"}}),e.jsx(d,{horizontal:!0,align:"center",pl:12,children:e.jsx(y.Checkbox,{"data-color":"neutral",checked:l,onChange:()=>i(!l),children:"Marker som konklusjon"})})]}),e.jsxs(d,{horizontal:!0,gap:16,children:[e.jsx(p,{size:"sm",color:"neutral",variant:"ghost",onClick:()=>{alert("Avbryt")},children:"Avbryt"}),e.jsx(p,{size:"sm",variant:"filled",onClick:()=>{alert("Lagre")},children:"Lagre"})]})]})]})})}},u={parameters:{docs:{source:{type:"code"}}},args:{...c,value:`
Bilde av Atlas
![Bilde_av_atlas.png](image://86062b3c-ebc8-48d0-9d08-8c282f5d8c69)`,label:"Rikt tekstfelt med bildereferanse",description:"Last opp et bilde — markdownutdata vil inneholde en stabil referanse til bildet.",onImageUpload:async r=>{const a=URL.createObjectURL(r),s=`image://${crypto.randomUUID()}`;return{src:a,ref:s,alt:r.name}},onImageRemove:async r=>{alert("Removed image "+r)}},render:r=>{const[a,s]=o.useState(r.value??""),[l,i]=o.useState(""),m=o.useRef(new Set);o.useEffect(()=>()=>{m.current.forEach(t=>URL.revokeObjectURL(t))},[]);const R=async t=>{const n=URL.createObjectURL(t);m.current.add(n);const q=`image://${crypto.randomUUID()}`;return{src:n,ref:q,alt:t.name}};return e.jsx(J.Provider,{value:{uploadFile:Y,deleteFile:Z},children:e.jsxs($.Provider,{value:{deriveFileInfosFromStorageIds:H},children:[e.jsx(f,{...r,onImageUpload:R,value:a,onChange:t=>{s(t),i(t),r.onChange(t)}}),l&&e.jsxs("div",{style:{marginTop:"12px"},children:[e.jsx("p",{style:{marginBottom:"0.25rem",fontWeight:"bold",fontSize:"0.875rem"},children:"Markdown sendt til onChange:"}),e.jsx("pre",{style:{background:"#f4f4f4",border:"1px solid #ddd",borderRadius:"4px",padding:"0.75rem",fontSize:"0.8rem",whiteSpace:"pre-wrap",wordBreak:"break-all"},children:l})]})]})})}};var w,C,j;g.parameters={...g.parameters,docs:{...(w=g.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: defaultArgs,
  render: renderInteractive
}`,...(j=(C=g.parameters)==null?void 0:C.docs)==null?void 0:j.source}}};var U,I,A;h.parameters={...h.parameters,docs:{...(U=h.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    disabled: true,
    value: 'Skrivebeskyttet innhold'
  },
  render: renderInteractive
}`,...(A=(I=h.parameters)==null?void 0:I.docs)==null?void 0:A.source}}};var T,B,O;b.parameters={...b.parameters,docs:{...(T=b.parameters)==null?void 0:T.docs,source:{originalSource:"{\n  args: {\n    ...defaultArgs,\n    label: 'Rikt tekstfelt med kode',\n    description: 'Viser at editoren kan laste markdown med inline-kode og kodeblokker.',\n    value: `Inline-kode: \\`const answer = 42;\\`\n\n\\`\\`\\`ts\nconst greet = (name: string) => \\`Hei, \\${name}\\`;\n\\`\\`\\``\n  },\n  render: renderInteractive\n}",...(O=(B=b.parameters)==null?void 0:B.docs)==null?void 0:O.source}}};var L,z,E;k.parameters={...k.parameters,docs:{...(L=k.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    error: 'Du må fylle ut dette feltet.'
  },
  render: renderInteractive
}`,...(E=(z=k.parameters)==null?void 0:z.docs)==null?void 0:E.source}}};var F,D,M;v.parameters={...v.parameters,docs:{...(F=v.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(M=(D=v.parameters)==null?void 0:D.docs)==null?void 0:M.source}}};var N,P,V,W,_;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(V=(P=u.parameters)==null?void 0:P.docs)==null?void 0:V.source},description:{story:"Demonstrates stable image references in markdown.\n\n`onImageUpload` returns both:\n- `src` — a data URL used by the editor to display the image immediately\n- `ref` — a stable opaque ID (e.g. Azure blob path / UUID) stored in the markdown instead of the SAS URL.\n\n`onImageRemove` is called with the stable ref when an image is removed from the editor,\nso a backend can delete the persisted image resource.\n\nThe `onChange` output will contain `![alt](image://uuid-...)` rather than the raw data URL,\nand a `MarkdownToReact` resolver can map that ref to a displayable URL.",...(_=(W=u.parameters)==null?void 0:W.docs)==null?void 0:_.description}}};const be=["Default","Disabled","WithCodeFormatting","WithError","WithBottomToolbar","WithImageRef"];export{g as Default,h as Disabled,v as WithBottomToolbar,b as WithCodeFormatting,k as WithError,u as WithImageRef,be as __namedExportsOrder,he as default};
