import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{af as s,ae as p,a8 as K,a9 as P,P as W,B as M}from"./SlotDialog-D8Ggu5kx.js";import"./Details-HZ4nwwjM.js";import"./kyvDivider-GkhM6YIE.js";import"./typography-CdiQYpGP.js";import"./skillingsbuoye-BG85ofhS.js";import"./Logo-DajRw6N7.js";import{r as B}from"./iframe-DUvZ48TU.js";import{H as g}from"./heading-QMScACOZ.js";import{L as c}from"./label-BgW5ou-3.js";import"./index-DkaYFwfj.js";import"./index-C0rWwyui.js";import"./index-BSEmr5Ii.js";import"./lite-DaUVFjkg.js";import"./index-CyZWMIEl.js";import"./index-BPH2I_E0.js";import"./translations-DuoQUAev.js";import"./preload-helper-Dp1pzeXC.js";const oe={title:"Form/Input",component:s,tags:["autodocs","ds"],argTypes:{role:{control:"radio",options:["checkbox","switch"],if:{arg:"type",eq:"checkbox"}}},decorators:[r=>e.jsx("div",{style:{display:"flex",gap:"var(--ds-size-2)",flexDirection:"column"},children:e.jsx(r,{})})],parameters:{a11y:{config:{rules:[{id:"color-contrast",selector:":read-only"}]}},docs:{description:{component:"[Dokumentasjon fra Designsystemet](https://designsystemet.no/no/components/docs/textfield/overview)"}}}},b={args:{"aria-invalid":!1,disabled:!1,readOnly:!1,type:"text",role:"checkbox",name:"inputs"},render:r=>(r.role!=="switch"&&(r.role=void 0),e.jsx(s,{...r,"aria-label":"input"}))},h={args:{size:10},render:r=>e.jsxs(p,{children:[e.jsx(c,{children:"Input with size"}),e.jsx(s,{...r})]})},u=r=>{const[l,n]=B.useState();return e.jsxs(e.Fragment,{children:[e.jsxs(p,{children:[e.jsx(c,{children:"Kontroller meg!"}),e.jsx(s,{value:l,onChange:a=>n(a.target.value),...r})]}),e.jsxs("div",{children:[e.jsx(P,{}),e.jsxs(W,{style:{margin:"var(--ds-size-2) 0"},children:["Du har skrevet inn: ",l]}),e.jsx(M,{onClick:()=>n("Kake"),children:"Jeg vil ha Kake"})]})]})},y=["sm","md","lg"],v={sm:"Small",md:"Medium",lg:"Large"},i=r=>{const l=[{label:"Default",props:{}},{label:"Disabled",props:{disabled:!0}},{label:"Invalid",props:{"aria-invalid":!0}},{label:"Read-only",props:{readOnly:!0}}];return e.jsx("div",{children:y.map(n=>e.jsxs("div",{"data-size":n,style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:"1rem",maxWidth:"90vw"},children:[e.jsx(g,{"data-size":"2xs",style:{gridColumn:"1 / -1"},children:v[n]}),l.map(a=>e.jsxs(p,{children:[e.jsx(c,{children:a.label}),e.jsx(s,{...r,name:`${n}-${a.label.toLowerCase()}`,...a.props,"data-size":n}),a.label==="Invalid"&&e.jsx(K,{children:"Feilmelding"})]},a.label))]},n))})};i.args={value:"Value"};const o=r=>{const l=[{label:"Default",props:{}},{label:"Checked",props:{defaultChecked:!0}},{label:"Disabled",props:{disabled:!0}},{label:"Disabled checked",props:{disabled:!0,defaultChecked:!0}},{label:"Invalid",props:{"aria-invalid":!0}},{label:"Invalid checked",props:{"aria-invalid":!0,defaultChecked:!0}},{label:"Read-only",props:{readOnly:!0}},{label:"Read-only checked",props:{readOnly:!0,defaultChecked:!0}}];return e.jsx("div",{children:y.map(n=>e.jsxs("div",{"data-size":n,style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"1rem",maxWidth:"90vw"},children:[e.jsx(g,{"data-size":"2xs",style:{gridColumn:"1 / -1",marginTop:16},children:v[n]}),l.map(a=>e.jsxs(p,{children:[e.jsx(s,{...r,name:`${n}-${a.label.split(" ")[0]}`,...a.props}),e.jsx(c,{children:a.label})]},a.label))]},n))})};o.args={type:"radio"};const t=function(l){B.useEffect(()=>{for(const a of document.getElementsByTagName("input"))a.hasAttribute("data-indeterminate")&&(a.indeterminate=!0)});const n=[{label:"Default",props:{}},{label:"Checked",props:{defaultChecked:!0}},{label:"Indeterminate",props:{"data-indeterminate":!0}},{label:"Disabled",props:{disabled:!0}},{label:"Disabled checked",props:{disabled:!0,defaultChecked:!0}},{label:"Disabled indeterminate",props:{disabled:!0,"data-indeterminate":!0}},{label:"Invalid",props:{"aria-invalid":!0}},{label:"Invalid checked",props:{"aria-invalid":!0,defaultChecked:!0}},{label:"Invalid indeterminate",props:{"aria-invalid":!0,"data-indeterminate":!0}},{label:"Read-only",props:{readOnly:!0}},{label:"Read-only checked",props:{readOnly:!0,defaultChecked:!0}},{label:"Read-only indeterminate",props:{readOnly:!0,"data-indeterminate":!0}}];return e.jsx(e.Fragment,{children:y.map(a=>e.jsxs("div",{"data-size":a,style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"1rem"},children:[e.jsx(g,{"data-size":"2xs",style:{gridColumn:"1 / -1"},children:v[a]}),n.map(m=>e.jsxs(p,{children:[e.jsx(s,{...l,name:`${a}-${m.label.toLowerCase().replace(" ","-")}`,...m.props}),e.jsx(c,{children:m.label})]},m.label))]},a))})};t.args={type:"checkbox"};t.parameters={customStyles:{display:"grid",gap:"2rem"}};const d=r=>{const l=[{label:"Default",props:{}},{label:"Checked",props:{defaultChecked:!0}},{label:"Disabled",props:{disabled:!0}},{label:"Disabled checked",props:{disabled:!0,defaultChecked:!0}},{label:"Read-only",props:{readOnly:!0}},{label:"Read-only checked",props:{readOnly:!0,defaultChecked:!0}}];return e.jsx(e.Fragment,{children:y.map(n=>e.jsxs("div",{"data-size":n,style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"1rem",maxWidth:"90vw"},children:[e.jsx(g,{"data-size":"2xs",style:{gridColumn:"1 / -1"},children:v[n]}),l.map(a=>e.jsxs(p,{children:[e.jsx(s,{...r,name:`${n}-${a.label.toLowerCase().replace(" ","-")}`,...a.props}),e.jsx(c,{children:a.label})]},a.label))]},n))})};d.args={type:"checkbox",role:"switch"};d.parameters={customStyles:{display:"grid",gap:"2rem"}};u.__docgenInfo={description:"",methods:[],displayName:"Controlled"};i.__docgenInfo={description:"",methods:[],displayName:"Text"};o.__docgenInfo={description:"",methods:[],displayName:"Radio"};t.__docgenInfo={description:"",methods:[],displayName:"Checkbox"};d.__docgenInfo={description:"",methods:[],displayName:"Switch"};var f,x,k;b.parameters={...b.parameters,docs:{...(f=b.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    'aria-invalid': false,
    disabled: false,
    readOnly: false,
    type: 'text',
    role: 'checkbox',
    name: 'inputs'
  },
  render: args => {
    if (args.role !== 'switch') args.role = undefined; // Ensure we only keep switch role in storybook

    return <Input {...args} aria-label="input" />;
  }
}`,...(k=(x=b.parameters)==null?void 0:x.docs)==null?void 0:k.source}}};var C,z,j;h.parameters={...h.parameters,docs:{...(C=h.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    size: 10
  },
  render: args => <Field>
      <Label>Input with size</Label>
      <Input {...args} />
    </Field>
}`,...(j=(z=h.parameters)==null?void 0:z.docs)==null?void 0:j.source}}};var I,D,w;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<string>();
  return <>
      <Field>
        <Label>Kontroller meg!</Label>
        <Input value={value} onChange={e => setValue(e.target.value)} {...args} />
      </Field>
      <div>
        <Divider />

        <Paragraph style={{
        margin: 'var(--ds-size-2) 0'
      }}>Du har skrevet inn: {value}</Paragraph>
        <Button onClick={() => setValue('Kake')}>Jeg vil ha Kake</Button>
      </div>
    </>;
}`,...(w=(D=u.parameters)==null?void 0:D.docs)==null?void 0:w.source}}};var R,L,F;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`args => {
  const states = [{
    label: 'Default',
    props: {}
  }, {
    label: 'Disabled',
    props: {
      disabled: true
    }
  }, {
    label: 'Invalid',
    props: {
      'aria-invalid': true
    }
  }, {
    label: 'Read-only',
    props: {
      readOnly: true
    }
  }];
  return <div>
      {sizes.map(size => <div key={size} data-size={size} style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '1rem',
      maxWidth: '90vw'
    }}>
          <Heading data-size="2xs" style={{
        gridColumn: '1 / -1'
      }}>
            {sizenames[size]}
          </Heading>
          {states.map(state => <Field key={state.label}>
              <Label>{state.label}</Label>
              <Input {...args} name={\`\${size}-\${state.label.toLowerCase()}\`} {...state.props} data-size={size} />
              {state.label === 'Invalid' && <ValidationMessage>Feilmelding</ValidationMessage>}
            </Field>)}
        </div>)}
    </div>;
}`,...(F=(L=i.parameters)==null?void 0:L.docs)==null?void 0:F.source}}};var O,S,T;o.parameters={...o.parameters,docs:{...(O=o.parameters)==null?void 0:O.docs,source:{originalSource:`args => {
  const states = [{
    label: 'Default',
    props: {}
  }, {
    label: 'Checked',
    props: {
      defaultChecked: true
    }
  }, {
    label: 'Disabled',
    props: {
      disabled: true
    }
  }, {
    label: 'Disabled checked',
    props: {
      disabled: true,
      defaultChecked: true
    }
  }, {
    label: 'Invalid',
    props: {
      'aria-invalid': true
    }
  }, {
    label: 'Invalid checked',
    props: {
      'aria-invalid': true,
      defaultChecked: true
    }
  }, {
    label: 'Read-only',
    props: {
      readOnly: true
    }
  }, {
    label: 'Read-only checked',
    props: {
      readOnly: true,
      defaultChecked: true
    }
  }];
  return <div>
      {sizes.map(size => <div key={size} data-size={size} style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '1rem',
      maxWidth: '90vw'
    }}>
          <Heading data-size="2xs" style={{
        gridColumn: '1 / -1',
        marginTop: 16
      }}>
            {sizenames[size]}
          </Heading>
          {states.map(state => <Field key={state.label}>
              <Input {...args} name={\`\${size}-\${state.label.split(' ')[0]}\`} // As states are demonstrated in pairs
        {...state.props} />
              <Label>{state.label}</Label>
            </Field>)}
        </div>)}
    </div>;
}`,...(T=(S=o.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var $,_,H;t.parameters={...t.parameters,docs:{...($=t.parameters)==null?void 0:$.docs,source:{originalSource:`function Render(args) {
  useEffect(() => {
    for (const input of document.getElementsByTagName('input')) {
      if (input.hasAttribute('data-indeterminate')) input.indeterminate = true;
    }
  }); // Intentionally run on every render

  const states = [{
    label: 'Default',
    props: {}
  }, {
    label: 'Checked',
    props: {
      defaultChecked: true
    }
  }, {
    label: 'Indeterminate',
    props: {
      'data-indeterminate': true
    }
  }, {
    label: 'Disabled',
    props: {
      disabled: true
    }
  }, {
    label: 'Disabled checked',
    props: {
      disabled: true,
      defaultChecked: true
    }
  }, {
    label: 'Disabled indeterminate',
    props: {
      disabled: true,
      'data-indeterminate': true
    }
  }, {
    label: 'Invalid',
    props: {
      'aria-invalid': true
    }
  }, {
    label: 'Invalid checked',
    props: {
      'aria-invalid': true,
      defaultChecked: true
    }
  }, {
    label: 'Invalid indeterminate',
    props: {
      'aria-invalid': true,
      'data-indeterminate': true
    }
  }, {
    label: 'Read-only',
    props: {
      readOnly: true
    }
  }, {
    label: 'Read-only checked',
    props: {
      readOnly: true,
      defaultChecked: true
    }
  }, {
    label: 'Read-only indeterminate',
    props: {
      readOnly: true,
      'data-indeterminate': true
    }
  }];
  return <>
      {sizes.map(size => <div key={size} data-size={size} style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '1rem'
    }}>
          <Heading data-size="2xs" style={{
        gridColumn: '1 / -1'
      }}>
            {sizenames[size]}
          </Heading>
          {states.map(state => <Field key={state.label}>
              <Input {...args} name={\`\${size}-\${state.label.toLowerCase().replace(' ', '-')}\`} {...state.props} />
              <Label>{state.label}</Label>
            </Field>)}
        </div>)}
    </>;
}`,...(H=(_=t.parameters)==null?void 0:_.docs)==null?void 0:H.source}}};var E,V,N;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`args => {
  const states = [{
    label: 'Default',
    props: {}
  }, {
    label: 'Checked',
    props: {
      defaultChecked: true
    }
  }, {
    label: 'Disabled',
    props: {
      disabled: true
    }
  }, {
    label: 'Disabled checked',
    props: {
      disabled: true,
      defaultChecked: true
    }
  },
  /* { label: 'Invalid', props: { 'aria-invalid': 'true' } },
  {
    label: 'Invalid checked',
    props: { 'aria-invalid': 'true', defaultChecked: true },
  }, */
  {
    label: 'Read-only',
    props: {
      readOnly: true
    }
  }, {
    label: 'Read-only checked',
    props: {
      readOnly: true,
      defaultChecked: true
    }
  }];
  return <>
      {sizes.map(size => <div key={size} data-size={size} style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '1rem',
      maxWidth: '90vw'
    }}>
          <Heading data-size="2xs" style={{
        gridColumn: '1 / -1'
      }}>
            {sizenames[size]}
          </Heading>
          {states.map(state => <Field key={state.label}>
              <Input {...args} name={\`\${size}-\${state.label.toLowerCase().replace(' ', '-')}\`} {...state.props} />
              <Label>{state.label}</Label>
            </Field>)}
        </div>)}
    </>;
}`,...(N=(V=d.parameters)==null?void 0:V.docs)==null?void 0:N.source}}};const pe=["Preview","HtmlSize","Controlled","Text","Radio","Checkbox","Switch"];export{t as Checkbox,u as Controlled,h as HtmlSize,b as Preview,o as Radio,d as Switch,i as Text,pe as __namedExportsOrder,oe as default};
