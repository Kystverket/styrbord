import{S as T,j as n,r as u}from"./iframe-8JSnxaD5.js";import{R as p}from"./Dialog-BERfbiST.js";import{a as C}from"./atlas 1-DK2KYHpu.js";import"./preload-helper-Dp1pzeXC.js";import"./tooltip-ywyqinSH.js";import"./index-vJGcxFVX.js";import"./index-BbBYJXej.js";import"./Details-LKO2ykR1.js";import"./KyvDivider-MGfrnm6E.js";import"./typography-jCbIUGOW.js";import"./KyvSpinner-2qJju56u.js";import"./skillingsbuoye-nYrvuJc3.js";import"./Logo-BUv8n3or.js";const G={title:"Form/RichTextArea/RichTextArea",component:p,decorators:[T],tags:["autodocs","kyv","beta"]},M=e=>new Promise((t,a)=>{const r=new FileReader;r.onload=()=>{if(typeof r.result=="string"){t(r.result);return}a(new Error("Could not read image file"))},r.onerror=()=>a(r.error??new Error("Could not read image file")),r.readAsDataURL(e)}),m={value:"",onChange:()=>{},label:"Rikt tekstfelt",description:"Dette er et tekstfelt som støtter rik tekstformatering.",optional:"Valgfritt"},g=e=>{const t=()=>{const[a,r]=u.useState(e.value??"");return n.jsx(p,{...e,value:a,onChange:o=>{r(o),console.log("RichTextArea markdown:",o),e.onChange(o)}})};return n.jsx(t,{})},d={args:m,render:g},i={args:{...m,disabled:!0,value:"Skrivebeskyttet innhold"},render:g},l={args:{...m,error:"Du må fylle ut dette feltet."},render:g},s={args:{...m,value:`
Bilde av Atlas
![Bilde_av_atlas.png](image://86062b3c-ebc8-48d0-9d08-8c282f5d8c69)`,label:"Rikt tekstfelt med bildereferanse",description:"Last opp et bilde — markdownutdata vil inneholde en stabil referanse til bildet.",resolveImageRefs:async()=>{const e={"image://86062b3c-ebc8-48d0-9d08-8c282f5d8c69":{src:C}};return await new Promise(t=>{setTimeout(t,1e3)}),e},onImageUpload:async e=>{const t=await M(e),a=`image://${crypto.randomUUID()}`;return{src:t,ref:a,alt:e.name}},onImageRemove:async e=>{alert("Removed image "+e)}},render:e=>{const[t,a]=u.useState(e.value??""),[r,o]=u.useState("");return n.jsxs(n.Fragment,{children:[n.jsx(p,{...e,value:t,onChange:c=>{a(c),o(c),e.onChange(c)}}),r&&n.jsxs("div",{style:{marginTop:"12px"},children:[n.jsx("p",{style:{marginBottom:"0.25rem",fontWeight:"bold",fontSize:"0.875rem"},children:"Markdown sendt til onChange:"}),n.jsx("pre",{style:{background:"#f4f4f4",border:"1px solid #ddd",borderRadius:"4px",padding:"0.75rem",fontSize:"0.8rem",whiteSpace:"pre-wrap",wordBreak:"break-all"},children:r})]})]})}};var f,b,h;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: defaultArgs,
  render: renderInteractive
}`,...(h=(b=d.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var v,k,w;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    disabled: true,
    value: 'Skrivebeskyttet innhold'
  },
  render: renderInteractive
}`,...(w=(k=i.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};var R,y,x;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    error: 'Du må fylle ut dette feltet.'
  },
  render: renderInteractive
}`,...(x=(y=l.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var S,I,D,U,A;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    value: \`
Bilde av Atlas
![Bilde_av_atlas.png](image://86062b3c-ebc8-48d0-9d08-8c282f5d8c69)\`,
    label: 'Rikt tekstfelt med bildereferanse',
    description: 'Last opp et bilde — markdownutdata vil inneholde en stabil referanse til bildet.',
    resolveImageRefs: async () => {
      const imageRefMap: Record<string, ResolvedImageRef> = {
        'image://86062b3c-ebc8-48d0-9d08-8c282f5d8c69': {
          src: atlas
        }
      };
      await new Promise<void>(resolve => {
        setTimeout(resolve, 1000);
      });
      return imageRefMap;
    },
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
    return <>
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
      </>;
  }
}`,...(D=(I=s.parameters)==null?void 0:I.docs)==null?void 0:D.source},description:{story:"Demonstrates stable image references in markdown.\n\n`onImageUpload` returns both:\n- `src` — a data URL used by the editor to display the image immediately\n- `ref` — a stable opaque ID (e.g. Azure blob path / UUID) stored in the markdown instead of the SAS URL.\n\n`onImageRemove` is called with the stable ref when an image is removed from the editor,\nso a backend can delete the persisted image resource.\n\nThe `onChange` output will contain `![alt](image://uuid-...)` rather than the raw data URL,\nand a `MarkdownToReact` resolver can map that ref to a displayable URL.",...(A=(U=s.parameters)==null?void 0:U.docs)==null?void 0:A.description}}};const H=["Default","Disabled","WithError","WithImageRef"];export{d as Default,i as Disabled,l as WithError,s as WithImageRef,H as __namedExportsOrder,G as default};
