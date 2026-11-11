import{S as re,j as e,r as n}from"./iframe-BhUsGYJv.js";import{R as y,S as c,B as p,I as j,j as te,F as Y,v as ne}from"./Dialog-BmTf8vdl.js";import{a as oe}from"./atlas 1-DK2KYHpu.js";import"./shipTypes-hFnSBndP.js";import"./Details-USoVTXtq.js";import"./KyvDivider-ByTZJ349.js";import"./KyvSpinner-BDBtODN3.js";import"./skillingsbuoye-CF0xB41P.js";import"./Logo-BrA2lcDJ.js";import{a as w,e as ae}from"./tooltip-VXD2EHor.js";import"./preload-helper-Dp1pzeXC.js";import"./color-tokens-DRys5hYJ.js";import"./index-DyZ2hIba.js";import"./index-aB0m4J5l.js";const ye={title:"Form/RichTextArea/RichTextArea",component:y,decorators:[r=>e.jsx(Y.Provider,{value:{deriveFileInfosFromStorageIds:Z},children:e.jsx(r,{})}),re],tags:["autodocs","kyv","beta"]},a={value:"",onChange:()=>{},rows:"md",label:"Rikt tekstfelt",description:"Dette er et tekstfelt som støtter rik tekstformatering.",optional:"Valgfritt"},Z=async()=>new Promise(r=>{setTimeout(()=>{r([{storageId:"image://86062b3c-ebc8-48d0-9d08-8c282f5d8c69",previewUri:oe}])},1e3)}),se=async()=>new Promise(r=>{setTimeout(()=>{r({storageId:ne(),success:!0})},1500)}),ie=async()=>new Promise(r=>{setTimeout(()=>{r()},1e3)}),u=r=>{const s=()=>{const[i,l]=n.useState(r.value??"");return e.jsx(y,{...r,value:i,onChange:d=>{l(d),console.log("RichTextArea markdown:",d),r.onChange(d)}})};return e.jsx(s,{})},k={args:a,render:u},h={args:{...a,disabled:!0,value:"Skrivebeskyttet innhold"},render:u},f={args:{...a,label:"Rikt tekstfelt med kode",description:"Viser at editoren kan laste markdown med inline-kode og kodeblokker.",value:"Inline-kode: `const answer = 42;`\n\n```ts\nconst greet = (name: string) => `Hei, ${name}`;\n```"},render:u},v={args:{...a,label:"Rikt tekstfelt uten overskrifter og lenker",description:"Overskrifter i verdien lastes som avsnitt, og lenker som teksten sin.",allowHeading:!1,allowLink:!1,value:`## Overskrift

Les mer på [Kystverkets nettsider](https://www.kystverket.no).`},render:u},b={args:{...a,error:"Du må fylle ut dette feltet."},render:u},R={parameters:{docs:{description:{story:"Med `maxLength` stopper editoren ved grensen, som `TextArea`: skriving stopper, og innliming blir kuttet til det som får plass. En teller under feltet viser hvor mange tegn som er igjen. Grensen gjelder markdown-verdien som sendes til `onChange`, så formatering, lenker og bilder bruker også tegn. Da kan samme grense brukes i API-et og databasen."}}},args:{...a,maxLength:200,value:`Dette er **fet** tekst og en [lenke](https://www.kystverket.no).

Andre avsnitt.`},render:u},S={parameters:{docs:{source:{type:"code"}}},args:{...a,label:"Rikt tekstfelt med bottomToolbar",description:"Et eksempel på hvordan bottomToolbar kan brukes i richTextArea"},render:r=>{const[s,i]=n.useState(r.value??""),[l,d]=n.useState(!1),g=n.useRef(new Set),[x,t]=n.useState(!0);return n.useEffect(()=>()=>{g.current.forEach(o=>URL.revokeObjectURL(o))},[]),e.jsx(y,{showToolbar:x,...r,value:s,onChange:o=>{i(o),r.onChange(o)},bottomToolbar:e.jsxs(c,{gap:3,px:2,children:[e.jsxs(c,{horizontal:!0,px:1,gap:2,children:[e.jsx(w.Removable,{"data-color":"primary/subtle",children:"@Admin Etternavn"}),e.jsx(w.Removable,{"data-color":"primary/subtle",children:"@Saksbehandler Etternavn"})]}),e.jsxs(c,{align:"center",justify:"between",pb:3,horizontal:!0,children:[e.jsxs(c,{horizontal:!0,children:[e.jsxs(c,{horizontal:!0,gap:1,pr:1,children:[e.jsx(p,{onClick:()=>t(o=>!o),variant:"ghost",title:"Toggle toolbar",size:"sm",color:"neutral",icon:!0,children:e.jsx(j,{material:"match_case",size:"lg"})}),e.jsx(p,{title:"Add tag",variant:"ghost",size:"sm",color:"neutral",icon:!0,popoverTarget:"addTag",children:e.jsx(j,{material:"alternate_email"})}),e.jsx(ae,{id:"addTag",popover:"manual",children:"Example"})]}),e.jsx("div",{style:{width:"1px",backgroundColor:"var(--ds-color-neutral-surface-hover)",marginBlock:"6px"}}),e.jsx(c,{horizontal:!0,align:"center",pl:3,children:e.jsx(w.Checkbox,{"data-color":"neutral",checked:l,onChange:()=>d(!l),children:"Marker som konklusjon"})})]}),e.jsxs(c,{horizontal:!0,gap:4,children:[e.jsx(p,{size:"sm",color:"neutral",variant:"ghost",onClick:()=>{alert("Avbryt")},children:"Avbryt"}),e.jsx(p,{size:"sm",variant:"filled",onClick:()=>{alert("Lagre")},children:"Lagre"})]})]})]})})}},m={parameters:{docs:{source:{type:"code"}}},args:{...a,value:`
Bilde av Atlas
![Bilde_av_atlas.png](image://86062b3c-ebc8-48d0-9d08-8c282f5d8c69)`,label:"Rikt tekstfelt med bildereferanse",description:"Last opp et bilde — markdownutdata vil inneholde en stabil referanse til bildet.",onImageUpload:async r=>{const s=URL.createObjectURL(r),i=`image://${crypto.randomUUID()}`;return{src:s,ref:i,alt:r.name}},onImageRemove:async r=>{alert("Removed image "+r)}},render:r=>{const[s,i]=n.useState(r.value??""),[l,d]=n.useState(""),g=n.useRef(new Set);n.useEffect(()=>()=>{g.current.forEach(t=>URL.revokeObjectURL(t))},[]);const x=async t=>{const o=URL.createObjectURL(t);g.current.add(o);const ee=`image://${crypto.randomUUID()}`;return{src:o,ref:ee,alt:t.name}};return e.jsx(te.Provider,{value:{uploadFile:se,deleteFile:ie},children:e.jsxs(Y.Provider,{value:{deriveFileInfosFromStorageIds:Z},children:[e.jsx(y,{...r,onImageUpload:x,value:s,onChange:t=>{i(t),d(t),r.onChange(t)}}),l&&e.jsxs("div",{style:{marginTop:"12px"},children:[e.jsx("p",{style:{marginBottom:"0.25rem",fontWeight:"bold",fontSize:"0.875rem"},children:"Markdown sendt til onChange:"}),e.jsx("pre",{style:{background:"#f4f4f4",border:"1px solid #ddd",borderRadius:"4px",padding:"0.75rem",fontSize:"0.8rem",whiteSpace:"pre-wrap",wordBreak:"break-all"},children:l})]})]})})}};var C,A,U;k.parameters={...k.parameters,docs:{...(C=k.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: defaultArgs,
  render: renderInteractive
}`,...(U=(A=k.parameters)==null?void 0:A.docs)==null?void 0:U.source}}};var I,T,L;h.parameters={...h.parameters,docs:{...(I=h.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    disabled: true,
    value: 'Skrivebeskyttet innhold'
  },
  render: renderInteractive
}`,...(L=(T=h.parameters)==null?void 0:T.docs)==null?void 0:L.source}}};var O,z,E;f.parameters={...f.parameters,docs:{...(O=f.parameters)==null?void 0:O.docs,source:{originalSource:"{\n  args: {\n    ...defaultArgs,\n    label: 'Rikt tekstfelt med kode',\n    description: 'Viser at editoren kan laste markdown med inline-kode og kodeblokker.',\n    value: `Inline-kode: \\`const answer = 42;\\`\n\n\\`\\`\\`ts\nconst greet = (name: string) => \\`Hei, \\${name}\\`;\n\\`\\`\\``\n  },\n  render: renderInteractive\n}",...(E=(z=f.parameters)==null?void 0:z.docs)==null?void 0:E.source}}};var B,D,M;v.parameters={...v.parameters,docs:{...(B=v.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    label: 'Rikt tekstfelt uten overskrifter og lenker',
    description: 'Overskrifter i verdien lastes som avsnitt, og lenker som teksten sin.',
    allowHeading: false,
    allowLink: false,
    value: \`## Overskrift

Les mer på [Kystverkets nettsider](https://www.kystverket.no).\`
  },
  render: renderInteractive
}`,...(M=(D=v.parameters)==null?void 0:D.docs)==null?void 0:M.source}}};var F,N,P;b.parameters={...b.parameters,docs:{...(F=b.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    error: 'Du må fylle ut dette feltet.'
  },
  render: renderInteractive
}`,...(P=(N=b.parameters)==null?void 0:N.docs)==null?void 0:P.source}}};var W,V,_;R.parameters={...R.parameters,docs:{...(W=R.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(_=(V=R.parameters)==null?void 0:V.docs)==null?void 0:_.source}}};var H,$,G;S.parameters={...S.parameters,docs:{...(H=S.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(G=($=S.parameters)==null?void 0:$.docs)==null?void 0:G.source}}};var K,q,J,Q,X;m.parameters={...m.parameters,docs:{...(K=m.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(J=(q=m.parameters)==null?void 0:q.docs)==null?void 0:J.source},description:{story:"Demonstrates stable image references in markdown.\n\n`onImageUpload` returns both:\n- `src` — a data URL used by the editor to display the image immediately\n- `ref` — a stable opaque ID (e.g. Azure blob path / UUID) stored in the markdown instead of the SAS URL.\n\n`onImageRemove` is called with the stable ref when an image is removed from the editor,\nso a backend can delete the persisted image resource.\n\nThe `onChange` output will contain `![alt](image://uuid-...)` rather than the raw data URL,\nand a `MarkdownToReact` resolver can map that ref to a displayable URL.",...(X=(Q=m.parameters)==null?void 0:Q.docs)==null?void 0:X.description}}};const xe=["Default","Disabled","WithCodeFormatting","WithoutHeadingsAndLinks","WithError","WithMaxLength","WithBottomToolbar","WithImageRef"];export{k as Default,h as Disabled,S as WithBottomToolbar,f as WithCodeFormatting,b as WithError,m as WithImageRef,R as WithMaxLength,v as WithoutHeadingsAndLinks,xe as __namedExportsOrder,ye as default};
