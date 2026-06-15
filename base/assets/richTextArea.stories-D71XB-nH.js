import{S as C,j as n,r as u}from"./iframe-GTro-CeT.js";import{R as p,F,v as T}from"./Dialog-2XkTVUi2.js";import{a as j}from"./atlas 1-DK2KYHpu.js";import"./preload-helper-Dp1pzeXC.js";import"./tooltip-DhGVUA5c.js";import"./index-Betcu_pf.js";import"./index-Bq37y_7i.js";import"./Details-DRD9D1sM.js";import"./KyvDivider-gY3yDB10.js";import"./typography-B0UMawaR.js";import"./KyvSpinner-Wv3hT0al.js";import"./skillingsbuoye-IUFpT2G4.js";import"./Logo-BXfQGSx5.js";const Q={title:"Form/RichTextArea/RichTextArea",component:p,decorators:[C],tags:["autodocs","kyv","beta"]},B=e=>new Promise((a,t)=>{const r=new FileReader;r.onload=()=>{if(typeof r.result=="string"){a(r.result);return}t(new Error("Could not read image file"))},r.onerror=()=>t(r.error??new Error("Could not read image file")),r.readAsDataURL(e)}),m={value:"",onChange:()=>{},label:"Rikt tekstfelt",description:"Dette er et tekstfelt som støtter rik tekstformatering.",optional:"Valgfritt"},O=async()=>new Promise(e=>{setTimeout(()=>{e([{storageId:"image://86062b3c-ebc8-48d0-9d08-8c282f5d8c69",previewUri:j}])},1e3)}),E=async()=>new Promise(e=>{setTimeout(()=>{e({storageId:T(),success:!0})},1500)}),L=async()=>new Promise(e=>{setTimeout(()=>{e()},1e3)}),g=e=>{const a=()=>{const[t,r]=u.useState(e.value??"");return n.jsx(p,{...e,value:t,onChange:o=>{r(o),console.log("RichTextArea markdown:",o),e.onChange(o)}})};return n.jsx(a,{})},d={args:m,render:g},i={args:{...m,disabled:!0,value:"Skrivebeskyttet innhold"},render:g},l={args:{...m,error:"Du må fylle ut dette feltet."},render:g},s={args:{...m,value:`
Bilde av Atlas
![Bilde_av_atlas.png](image://86062b3c-ebc8-48d0-9d08-8c282f5d8c69)`,label:"Rikt tekstfelt med bildereferanse",description:"Last opp et bilde — markdownutdata vil inneholde en stabil referanse til bildet.",onImageUpload:async e=>{const a=await B(e),t=`image://${crypto.randomUUID()}`;return{src:a,ref:t,alt:e.name}},onImageRemove:async e=>{alert("Removed image "+e)}},render:e=>{const[a,t]=u.useState(e.value??""),[r,o]=u.useState("");return n.jsxs(F.Provider,{value:{uploadFile:E,deleteFile:L,deriveFileInfosFromStorageIds:O},children:[n.jsx(p,{...e,value:a,onChange:c=>{t(c),o(c),e.onChange(c)}}),r&&n.jsxs("div",{style:{marginTop:"12px"},children:[n.jsx("p",{style:{marginBottom:"0.25rem",fontWeight:"bold",fontSize:"0.875rem"},children:"Markdown sendt til onChange:"}),n.jsx("pre",{style:{background:"#f4f4f4",border:"1px solid #ddd",borderRadius:"4px",padding:"0.75rem",fontSize:"0.8rem",whiteSpace:"pre-wrap",wordBreak:"break-all"},children:r})]})]})}};var f,b,h;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: defaultArgs,
  render: renderInteractive
}`,...(h=(b=d.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var v,k,w;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    disabled: true,
    value: 'Skrivebeskyttet innhold'
  },
  render: renderInteractive
}`,...(w=(k=i.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};var y,x,R;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    error: 'Du må fylle ut dette feltet.'
  },
  render: renderInteractive
}`,...(R=(x=l.parameters)==null?void 0:x.docs)==null?void 0:R.source}}};var S,I,U,D,A;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    value: \`
Bilde av Atlas
![Bilde_av_atlas.png](image://86062b3c-ebc8-48d0-9d08-8c282f5d8c69)\`,
    label: 'Rikt tekstfelt med bildereferanse',
    description: 'Last opp et bilde — markdownutdata vil inneholde en stabil referanse til bildet.',
    onImageUpload: async file => {
      const src = await fileToDataUrl(file);
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
    const [value, setValue] = useState(args.value ?? '');
    const [markdownOutput, setMarkdownOutput] = useState('');
    return <FileUploaderContext.Provider value={{
      uploadFile,
      deleteFile,
      deriveFileInfosFromStorageIds
    }}>
        <RichTextArea {...args} value={value} onChange={nextMarkdown => {
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
      </FileUploaderContext.Provider>;
  }
}`,...(U=(I=s.parameters)==null?void 0:I.docs)==null?void 0:U.source},description:{story:"Demonstrates stable image references in markdown.\n\n`onImageUpload` returns both:\n- `src` — a data URL used by the editor to display the image immediately\n- `ref` — a stable opaque ID (e.g. Azure blob path / UUID) stored in the markdown instead of the SAS URL.\n\n`onImageRemove` is called with the stable ref when an image is removed from the editor,\nso a backend can delete the persisted image resource.\n\nThe `onChange` output will contain `![alt](image://uuid-...)` rather than the raw data URL,\nand a `MarkdownToReact` resolver can map that ref to a displayable URL.",...(A=(D=s.parameters)==null?void 0:D.docs)==null?void 0:A.description}}};const X=["Default","Disabled","WithError","WithImageRef"];export{d as Default,i as Disabled,l as WithError,s as WithImageRef,X as __namedExportsOrder,Q as default};
