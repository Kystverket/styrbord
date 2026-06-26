import{S as T,j as t,r as u}from"./iframe-CcRwlcHT.js";import{R as p,d as j,F as D,v as P}from"./Dialog-BUIqbhtH.js";import{a as B}from"./atlas 1-DK2KYHpu.js";import"./preload-helper-Dp1pzeXC.js";import"./tooltip-BWbZtot7.js";import"./index-hn6V7SU2.js";import"./index-Cx5WKcyR.js";import"./shipTypes-hFnSBndP.js";import"./Details-B3M6BjQ7.js";import"./KyvDivider-CSqLkURi.js";import"./typography-DBGIi4O5.js";import"./KyvSpinner-D69tDHsA.js";import"./skillingsbuoye-DQ3cnKkE.js";import"./Logo-DIy8URU2.js";const Y={title:"Form/RichTextArea/RichTextArea",component:p,decorators:[e=>t.jsx(D.Provider,{value:{deriveFileInfosFromStorageIds:A},children:t.jsx(e,{})}),T],tags:["autodocs","kyv","beta"]},O=e=>new Promise((n,a)=>{const r=new FileReader;r.onload=()=>{if(typeof r.result=="string"){n(r.result);return}a(new Error("Could not read image file"))},r.onerror=()=>a(r.error??new Error("Could not read image file")),r.readAsDataURL(e)}),m={value:"",onChange:()=>{},label:"Rikt tekstfelt",description:"Dette er et tekstfelt som støtter rik tekstformatering.",optional:"Valgfritt"},A=async()=>new Promise(e=>{setTimeout(()=>{e([{storageId:"image://86062b3c-ebc8-48d0-9d08-8c282f5d8c69",previewUri:B}])},1e3)}),E=async()=>new Promise(e=>{setTimeout(()=>{e({storageId:P(),success:!0})},1500)}),L=async()=>new Promise(e=>{setTimeout(()=>{e()},1e3)}),g=e=>{const n=()=>{const[a,r]=u.useState(e.value??"");return t.jsx(p,{...e,value:a,onChange:o=>{r(o),console.log("RichTextArea markdown:",o),e.onChange(o)}})};return t.jsx(n,{})},i={args:m,render:g},d={args:{...m,disabled:!0,value:"Skrivebeskyttet innhold"},render:g},l={args:{...m,error:"Du må fylle ut dette feltet."},render:g},s={args:{...m,value:`
Bilde av Atlas
![Bilde_av_atlas.png](image://86062b3c-ebc8-48d0-9d08-8c282f5d8c69)`,label:"Rikt tekstfelt med bildereferanse",description:"Last opp et bilde — markdownutdata vil inneholde en stabil referanse til bildet.",onImageUpload:async e=>{const n=await O(e),a=`image://${crypto.randomUUID()}`;return{src:n,ref:a,alt:e.name}},onImageRemove:async e=>{alert("Removed image "+e)}},render:e=>{const[n,a]=u.useState(e.value??""),[r,o]=u.useState("");return t.jsx(j.Provider,{value:{uploadFile:E,deleteFile:L},children:t.jsxs(D.Provider,{value:{deriveFileInfosFromStorageIds:A},children:[t.jsx(p,{...e,value:n,onChange:c=>{a(c),o(c),e.onChange(c)}}),r&&t.jsxs("div",{style:{marginTop:"12px"},children:[t.jsx("p",{style:{marginBottom:"0.25rem",fontWeight:"bold",fontSize:"0.875rem"},children:"Markdown sendt til onChange:"}),t.jsx("pre",{style:{background:"#f4f4f4",border:"1px solid #ddd",borderRadius:"4px",padding:"0.75rem",fontSize:"0.8rem",whiteSpace:"pre-wrap",wordBreak:"break-all"},children:r})]})]})})}};var f,v,h;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: defaultArgs,
  render: renderInteractive
}`,...(h=(v=i.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var b,k,w;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    disabled: true,
    value: 'Skrivebeskyttet innhold'
  },
  render: renderInteractive
}`,...(w=(k=d.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};var x,R,y;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    error: 'Du må fylle ut dette feltet.'
  },
  render: renderInteractive
}`,...(y=(R=l.parameters)==null?void 0:R.docs)==null?void 0:y.source}}};var S,I,U,C,F;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
      deleteFile
    }}>
        <FileRetrieverContext.Provider value={{
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
        </FileRetrieverContext.Provider>
      </FileUploaderContext.Provider>;
  }
}`,...(U=(I=s.parameters)==null?void 0:I.docs)==null?void 0:U.source},description:{story:"Demonstrates stable image references in markdown.\n\n`onImageUpload` returns both:\n- `src` — a data URL used by the editor to display the image immediately\n- `ref` — a stable opaque ID (e.g. Azure blob path / UUID) stored in the markdown instead of the SAS URL.\n\n`onImageRemove` is called with the stable ref when an image is removed from the editor,\nso a backend can delete the persisted image resource.\n\nThe `onChange` output will contain `![alt](image://uuid-...)` rather than the raw data URL,\nand a `MarkdownToReact` resolver can map that ref to a displayable URL.",...(F=(C=s.parameters)==null?void 0:C.docs)==null?void 0:F.description}}};const Z=["Default","Disabled","WithError","WithImageRef"];export{i as Default,d as Disabled,l as WithError,s as WithImageRef,Z as __namedExportsOrder,Y as default};
