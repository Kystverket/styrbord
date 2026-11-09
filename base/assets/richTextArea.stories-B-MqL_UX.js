import{S as X,j as e,r as n}from"./iframe-B8bSLhMk.js";import{R as S,S as d,B as p,I as w,g as Y,F as J,v as Z}from"./Dialog-BjPET42e.js";import{a as ee}from"./atlas 1-DK2KYHpu.js";import"./shipTypes-hFnSBndP.js";import"./Details-B02HzDk2.js";import"./KyvDivider-Bf613Cpo.js";import"./KyvSpinner-Ck39aEzU.js";import"./skillingsbuoye-gOSkYkoJ.js";import"./Logo-Dq8iB3bU.js";import{a as y,e as re}from"./tooltip-DgEH0MSZ.js";import"./preload-helper-Dp1pzeXC.js";import"./color-tokens-DRys5hYJ.js";import"./index-CcyZF6Lh.js";import"./index-CXGCkjkH.js";const fe={title:"Form/RichTextArea/RichTextArea",component:S,decorators:[r=>e.jsx(J.Provider,{value:{deriveFileInfosFromStorageIds:K},children:e.jsx(r,{})}),X],tags:["autodocs","kyv","beta"]},c={value:"",onChange:()=>{},rows:"md",label:"Rikt tekstfelt",description:"Dette er et tekstfelt som støtter rik tekstformatering.",optional:"Valgfritt"},K=async()=>new Promise(r=>{setTimeout(()=>{r([{storageId:"image://86062b3c-ebc8-48d0-9d08-8c282f5d8c69",previewUri:ee}])},1e3)}),te=async()=>new Promise(r=>{setTimeout(()=>{r({storageId:Z(),success:!0})},1500)}),ne=async()=>new Promise(r=>{setTimeout(()=>{r()},1e3)}),m=r=>{const a=()=>{const[s,l]=n.useState(r.value??"");return e.jsx(S,{...r,value:s,onChange:i=>{l(i),console.log("RichTextArea markdown:",i),r.onChange(i)}})};return e.jsx(a,{})},h={args:c,render:m},k={args:{...c,disabled:!0,value:"Skrivebeskyttet innhold"},render:m},b={args:{...c,label:"Rikt tekstfelt med kode",description:"Viser at editoren kan laste markdown med inline-kode og kodeblokker.",value:"Inline-kode: `const answer = 42;`\n\n```ts\nconst greet = (name: string) => `Hei, ${name}`;\n```"},render:m},f={args:{...c,error:"Du må fylle ut dette feltet."},render:m},v={parameters:{docs:{description:{story:"Med `maxLength` stopper editoren ved grensen, som `TextArea`: skriving stopper, og innliming blir kuttet til det som får plass. En teller under feltet viser hvor mange tegn som er igjen. Grensen gjelder markdown-verdien som sendes til `onChange`, så formatering, lenker og bilder bruker også tegn. Da kan samme grense brukes i API-et og databasen."}}},args:{...c,maxLength:200,value:`Dette er **fet** tekst og en [lenke](https://www.kystverket.no).

Andre avsnitt.`},render:m},R={parameters:{docs:{source:{type:"code"}}},args:{...c,label:"Rikt tekstfelt med bottomToolbar",description:"Et eksempel på hvordan bottomToolbar kan brukes i richTextArea"},render:r=>{const[a,s]=n.useState(r.value??""),[l,i]=n.useState(!1),g=n.useRef(new Set),[x,t]=n.useState(!0);return n.useEffect(()=>()=>{g.current.forEach(o=>URL.revokeObjectURL(o))},[]),e.jsx(S,{showToolbar:x,...r,value:a,onChange:o=>{s(o),r.onChange(o)},bottomToolbar:e.jsxs(d,{gap:3,px:2,children:[e.jsxs(d,{horizontal:!0,px:1,gap:2,children:[e.jsx(y.Removable,{"data-color":"primary/subtle",children:"@Admin Etternavn"}),e.jsx(y.Removable,{"data-color":"primary/subtle",children:"@Saksbehandler Etternavn"})]}),e.jsxs(d,{align:"center",justify:"between",pb:3,horizontal:!0,children:[e.jsxs(d,{horizontal:!0,children:[e.jsxs(d,{horizontal:!0,gap:1,pr:1,children:[e.jsx(p,{onClick:()=>t(o=>!o),variant:"ghost",title:"Toggle toolbar",size:"sm",color:"neutral",icon:!0,children:e.jsx(w,{material:"match_case",size:"lg"})}),e.jsx(p,{title:"Add tag",variant:"ghost",size:"sm",color:"neutral",icon:!0,popoverTarget:"addTag",children:e.jsx(w,{material:"alternate_email"})}),e.jsx(re,{id:"addTag",popover:"manual",children:"Example"})]}),e.jsx("div",{style:{width:"1px",backgroundColor:"var(--ds-color-neutral-surface-hover)",marginBlock:"6px"}}),e.jsx(d,{horizontal:!0,align:"center",pl:3,children:e.jsx(y.Checkbox,{"data-color":"neutral",checked:l,onChange:()=>i(!l),children:"Marker som konklusjon"})})]}),e.jsxs(d,{horizontal:!0,gap:4,children:[e.jsx(p,{size:"sm",color:"neutral",variant:"ghost",onClick:()=>{alert("Avbryt")},children:"Avbryt"}),e.jsx(p,{size:"sm",variant:"filled",onClick:()=>{alert("Lagre")},children:"Lagre"})]})]})]})})}},u={parameters:{docs:{source:{type:"code"}}},args:{...c,value:`
Bilde av Atlas
![Bilde_av_atlas.png](image://86062b3c-ebc8-48d0-9d08-8c282f5d8c69)`,label:"Rikt tekstfelt med bildereferanse",description:"Last opp et bilde — markdownutdata vil inneholde en stabil referanse til bildet.",onImageUpload:async r=>{const a=URL.createObjectURL(r),s=`image://${crypto.randomUUID()}`;return{src:a,ref:s,alt:r.name}},onImageRemove:async r=>{alert("Removed image "+r)}},render:r=>{const[a,s]=n.useState(r.value??""),[l,i]=n.useState(""),g=n.useRef(new Set);n.useEffect(()=>()=>{g.current.forEach(t=>URL.revokeObjectURL(t))},[]);const x=async t=>{const o=URL.createObjectURL(t);g.current.add(o);const Q=`image://${crypto.randomUUID()}`;return{src:o,ref:Q,alt:t.name}};return e.jsx(Y.Provider,{value:{uploadFile:te,deleteFile:ne},children:e.jsxs(J.Provider,{value:{deriveFileInfosFromStorageIds:K},children:[e.jsx(S,{...r,onImageUpload:x,value:a,onChange:t=>{s(t),i(t),r.onChange(t)}}),l&&e.jsxs("div",{style:{marginTop:"12px"},children:[e.jsx("p",{style:{marginBottom:"0.25rem",fontWeight:"bold",fontSize:"0.875rem"},children:"Markdown sendt til onChange:"}),e.jsx("pre",{style:{background:"#f4f4f4",border:"1px solid #ddd",borderRadius:"4px",padding:"0.75rem",fontSize:"0.8rem",whiteSpace:"pre-wrap",wordBreak:"break-all"},children:l})]})]})})}};var j,C,U;h.parameters={...h.parameters,docs:{...(j=h.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: defaultArgs,
  render: renderInteractive
}`,...(U=(C=h.parameters)==null?void 0:C.docs)==null?void 0:U.source}}};var A,I,T;k.parameters={...k.parameters,docs:{...(A=k.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    disabled: true,
    value: 'Skrivebeskyttet innhold'
  },
  render: renderInteractive
}`,...(T=(I=k.parameters)==null?void 0:I.docs)==null?void 0:T.source}}};var L,O,z;b.parameters={...b.parameters,docs:{...(L=b.parameters)==null?void 0:L.docs,source:{originalSource:"{\n  args: {\n    ...defaultArgs,\n    label: 'Rikt tekstfelt med kode',\n    description: 'Viser at editoren kan laste markdown med inline-kode og kodeblokker.',\n    value: `Inline-kode: \\`const answer = 42;\\`\n\n\\`\\`\\`ts\nconst greet = (name: string) => \\`Hei, \\${name}\\`;\n\\`\\`\\``\n  },\n  render: renderInteractive\n}",...(z=(O=b.parameters)==null?void 0:O.docs)==null?void 0:z.source}}};var E,B,D;f.parameters={...f.parameters,docs:{...(E=f.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    error: 'Du må fylle ut dette feltet.'
  },
  render: renderInteractive
}`,...(D=(B=f.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};var M,F,N;v.parameters={...v.parameters,docs:{...(M=v.parameters)==null?void 0:M.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Med \`maxLength\` stopper editoren ved grensen, som \`TextArea\`: skriving stopper, og innliming blir kuttet til det som får plass. En teller under feltet viser hvor mange tegn som er igjen. Grensen gjelder markdown-verdien som sendes til \`onChange\`, så formatering, lenker og bilder bruker også tegn. Da kan samme grense brukes i API-et og databasen.'
      }
    }
  },
  args: {
    ...defaultArgs,
    maxLength: 200,
    value: 'Dette er **fet** tekst og en [lenke](https://www.kystverket.no).\\n\\nAndre avsnitt.'
  },
  render: renderInteractive
}`,...(N=(F=v.parameters)==null?void 0:F.docs)==null?void 0:N.source}}};var P,W,V;R.parameters={...R.parameters,docs:{...(P=R.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
    }} bottomToolbar={<Surface gap={3} px={2}>
            <Surface horizontal px={1} gap={2}>
              <Chip.Removable data-color="primary/subtle">@Admin Etternavn</Chip.Removable>
              <Chip.Removable data-color="primary/subtle">@Saksbehandler Etternavn</Chip.Removable>
            </Surface>

            <Surface align="center" justify="between" pb={3} horizontal>
              <Surface horizontal>
                <Surface horizontal gap={1} pr={1}>
                  <Button onClick={() => setIsToolbarShown(prev => !prev)} variant="ghost" title="Toggle toolbar" size="sm" color="neutral" icon>
                    <Icon material="match_case" size="lg" />
                  </Button>
                  <Button title="Add tag" variant="ghost" size="sm" color="neutral" icon popoverTarget="addTag">
                    <Icon material="alternate_email" />
                  </Button>
                  <Dropdown id="addTag" popover="manual">
                    Example
                  </Dropdown>
                </Surface>
                <div style={{
            width: '1px',
            backgroundColor: 'var(--ds-color-neutral-surface-hover)',
            marginBlock: '6px'
          }} />
                <Surface horizontal align="center" pl={3}>
                  <Chip.Checkbox data-color="neutral" checked={isMarkedAsConclusion} onChange={() => setIsMarkedAsConclusion(!isMarkedAsConclusion)}>
                    Marker som konklusjon
                  </Chip.Checkbox>
                </Surface>
              </Surface>
              <Surface horizontal gap={4}>
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
              </Surface>
            </Surface>
          </Surface>} />;
  }
}`,...(V=(W=R.parameters)==null?void 0:W.docs)==null?void 0:V.source}}};var _,$,G,H,q;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(G=($=u.parameters)==null?void 0:$.docs)==null?void 0:G.source},description:{story:"Demonstrates stable image references in markdown.\n\n`onImageUpload` returns both:\n- `src` — a data URL used by the editor to display the image immediately\n- `ref` — a stable opaque ID (e.g. Azure blob path / UUID) stored in the markdown instead of the SAS URL.\n\n`onImageRemove` is called with the stable ref when an image is removed from the editor,\nso a backend can delete the persisted image resource.\n\nThe `onChange` output will contain `![alt](image://uuid-...)` rather than the raw data URL,\nand a `MarkdownToReact` resolver can map that ref to a displayable URL.",...(q=(H=u.parameters)==null?void 0:H.docs)==null?void 0:q.description}}};const ve=["Default","Disabled","WithCodeFormatting","WithError","WithMaxLength","WithBottomToolbar","WithImageRef"];export{h as Default,k as Disabled,R as WithBottomToolbar,b as WithCodeFormatting,f as WithError,u as WithImageRef,v as WithMaxLength,ve as __namedExportsOrder,fe as default};
