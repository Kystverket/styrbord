import{S as I,j as n,r as m}from"./iframe-Cd9osEDc.js";import{R as p}from"./SlotDialog-BMdG5_OK.js";import"./preload-helper-Dp1pzeXC.js";import"./Details-BXXb3W8_.js";import"./tooltip-BnARmx_x.js";import"./index-BL-ZXW-0.js";import"./index-Bdgah_EL.js";import"./KyvDivider-BTGv_RzA.js";import"./typography-CvteIT1N.js";import"./KyvSpinner-CEVIWl8i.js";import"./skillingsbuoye-BRhM6PEv.js";import"./Logo-PHwD-nxz.js";const q={title:"Form/RichTextArea/RichTextArea",component:p,decorators:[I],tags:["autodocs","kyv","beta"]},T=e=>new Promise((a,t)=>{const r=new FileReader;r.onload=()=>{if(typeof r.result=="string"){a(r.result);return}t(new Error("Could not read image file"))},r.onerror=()=>t(r.error??new Error("Could not read image file")),r.readAsDataURL(e)}),u={value:"",onChange:()=>{},label:"Rikt tekstfelt",description:"Dette er et tekstfelt som støtter rik tekstformatering.",optional:"Valgfritt"},f=e=>{const a=()=>{const[t,r]=m.useState(e.value??"");return n.jsx(p,{...e,value:t,onChange:o=>{r(o),console.log("RichTextArea markdown:",o),e.onChange(o)}})};return n.jsx(a,{})},i={args:u,render:f},d={args:{...u,disabled:!0,value:"Skrivebeskyttet innhold"},render:f},l={args:{...u,error:"Du må fylle ut dette feltet."},render:f},s={args:{...u,label:"Rikt tekstfelt med bildereferanse",description:"Last opp et bilde — markdownutdata vil inneholde en stabil referanse til bildet,.",onUpload:async e=>{const a=await T(e),t=`image://${crypto.randomUUID()}`;return{src:a,ref:t,alt:e.name}}},render:e=>{const[a,t]=m.useState(e.value??""),[r,o]=m.useState("");return n.jsxs(n.Fragment,{children:[n.jsx(p,{...e,value:a,onChange:c=>{t(c),o(c),e.onChange(c)}}),r&&n.jsxs("div",{style:{marginTop:"12px"},children:[n.jsx("p",{style:{marginBottom:"0.25rem",fontWeight:"bold",fontSize:"0.875rem"},children:"Markdown sendt til onChange:"}),n.jsx("pre",{style:{background:"#f4f4f4",border:"1px solid #ddd",borderRadius:"4px",padding:"0.75rem",fontSize:"0.8rem",whiteSpace:"pre-wrap",wordBreak:"break-all"},children:r})]})]})}};var g,h,b;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: defaultArgs,
  render: renderInteractive
}`,...(b=(h=i.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var k,w,v;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    disabled: true,
    value: 'Skrivebeskyttet innhold'
  },
  render: renderInteractive
}`,...(v=(w=d.parameters)==null?void 0:w.docs)==null?void 0:v.source}}};var S,x,y;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    error: 'Du må fylle ut dette feltet.'
  },
  render: renderInteractive
}`,...(y=(x=l.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var R,D,U,A,C;s.parameters={...s.parameters,docs:{...(R=s.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    label: 'Rikt tekstfelt med bildereferanse',
    description: 'Last opp et bilde — markdownutdata vil inneholde en stabil referanse til bildet,.',
    onUpload: async file => {
      const src = await fileToDataUrl(file);
      // Simulate a stable blob reference that would be generated server-side
      const ref = \`image://\${crypto.randomUUID()}\`;
      return {
        src,
        ref,
        alt: file.name
      };
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
}`,...(U=(D=s.parameters)==null?void 0:D.docs)==null?void 0:U.source},description:{story:"Demonstrates stable image references in markdown.\n\n`onUpload` returns both:\n- `src` — a data URL used by the editor to display the image immediately\n- `ref` — a stable opaque ID (e.g. Azure blob path / UUID) stored in the markdown instead of the SAS URL\n\nThe `onChange` output will contain `![alt](image://uuid-...)` rather than the raw data URL,\nwhich is what a `MarkdownToReact` or similar renderers would receive where you implement a resolver function to provide a SAS URI or similar.",...(C=(A=s.parameters)==null?void 0:A.docs)==null?void 0:C.description}}};const P=["Default","Disabled","WithError","WithImageRef"];export{i as Default,d as Disabled,l as WithError,s as WithImageRef,P as __namedExportsOrder,q as default};
