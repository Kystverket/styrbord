import{S as C,j as n,r as u}from"./iframe-Bc0iwzJg.js";import{R as p}from"./Suggestion-CVgjYBSF.js";import{a as T}from"./atlas 1-DK2KYHpu.js";import"./preload-helper-Dp1pzeXC.js";import"./tooltip-BYDoFezS.js";import"./index-CRNhjEzP.js";import"./index-Bn4qVYvC.js";import"./Details-D8tQI6yP.js";import"./KyvDivider-D59bgKYZ.js";import"./typography-B--PWgnB.js";import"./KyvSpinner-BmbdfWGW.js";import"./skillingsbuoye-DGYYF_3C.js";import"./Logo-BhDDaUEN.js";const G={title:"Form/RichTextArea/RichTextArea",component:p,decorators:[C],tags:["autodocs","kyv","beta"]},M=e=>new Promise((a,r)=>{const t=new FileReader;t.onload=()=>{if(typeof t.result=="string"){a(t.result);return}r(new Error("Could not read image file"))},t.onerror=()=>r(t.error??new Error("Could not read image file")),t.readAsDataURL(e)}),c={value:"",onChange:()=>{},label:"Rikt tekstfelt",description:"Dette er et tekstfelt som støtter rik tekstformatering.",optional:"Valgfritt"},g=e=>{const a=()=>{const[r,t]=u.useState(e.value??"");return n.jsx(p,{...e,value:r,onChange:o=>{t(o),console.log("RichTextArea markdown:",o),e.onChange(o)}})};return n.jsx(a,{})},i={args:c,render:g},d={args:{...c,disabled:!0,value:"Skrivebeskyttet innhold"},render:g},l={args:{...c,error:"Du må fylle ut dette feltet."},render:g},s={args:{...c,value:"![bilde.png](image://86062b3c-ebc8-48d0-9d08-8c282f5d8c69)",label:"Rikt tekstfelt med bildereferanse",description:"Last opp et bilde — markdownutdata vil inneholde en stabil referanse til bildet,.",resolveImageRef:e=>{var r;return(r={"image://86062b3c-ebc8-48d0-9d08-8c282f5d8c69":{src:T}}[e])==null?void 0:r.src},onImageUpload:async e=>{const a=await M(e),r=`image://${crypto.randomUUID()}`;return{src:a,ref:r,alt:e.name}}},render:e=>{const[a,r]=u.useState(e.value??""),[t,o]=u.useState("");return n.jsxs(n.Fragment,{children:[n.jsx(p,{...e,value:a,onChange:m=>{r(m),o(m),e.onChange(m)}}),t&&n.jsxs("div",{style:{marginTop:"12px"},children:[n.jsx("p",{style:{marginBottom:"0.25rem",fontWeight:"bold",fontSize:"0.875rem"},children:"Markdown sendt til onChange:"}),n.jsx("pre",{style:{background:"#f4f4f4",border:"1px solid #ddd",borderRadius:"4px",padding:"0.75rem",fontSize:"0.8rem",whiteSpace:"pre-wrap",wordBreak:"break-all"},children:t})]})]})}};var f,b,h;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: defaultArgs,
  render: renderInteractive
}`,...(h=(b=i.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var k,w,v;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    disabled: true,
    value: 'Skrivebeskyttet innhold'
  },
  render: renderInteractive
}`,...(v=(w=d.parameters)==null?void 0:w.docs)==null?void 0:v.source}}};var R,S,x;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    error: 'Du må fylle ut dette feltet.'
  },
  render: renderInteractive
}`,...(x=(S=l.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};var y,D,I,U,A;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    value: '![bilde.png](image://86062b3c-ebc8-48d0-9d08-8c282f5d8c69)',
    label: 'Rikt tekstfelt med bildereferanse',
    description: 'Last opp et bilde — markdownutdata vil inneholde en stabil referanse til bildet,.',
    resolveImageRef: (ref: string) => {
      const imageRefMap: Record<string, {
        src: string;
      }> = {
        'image://86062b3c-ebc8-48d0-9d08-8c282f5d8c69': {
          src: atlas
        }
      };
      return imageRefMap[ref]?.src;
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
}`,...(I=(D=s.parameters)==null?void 0:D.docs)==null?void 0:I.source},description:{story:"Demonstrates stable image references in markdown.\n\n`onUpload` returns both:\n- `src` — a data URL used by the editor to display the image immediately\n- `ref` — a stable opaque ID (e.g. Azure blob path / UUID) stored in the markdown instead of the SAS URL\n\nThe `onChange` output will contain `![alt](image://uuid-...)` rather than the raw data URL,\nwhich is what a `MarkdownToReact` or similar renderers would receive where you implement a resolver function to provide a SAS URI or similar.",...(A=(U=s.parameters)==null?void 0:U.docs)==null?void 0:A.description}}};const H=["Default","Disabled","WithError","WithImageRef"];export{i as Default,d as Disabled,l as WithError,s as WithImageRef,H as __namedExportsOrder,G as default};
