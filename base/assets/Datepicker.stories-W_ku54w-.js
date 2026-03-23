import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{B as P,ab as ue,ac as ge}from"./SlotDialog-CI__n36y.js";import{S as w}from"./styrbordDecorator-BDpDwMAX.js";import{r as de}from"./iframe-BsoipRQr.js";import"./Details-DkJzHTWI.js";import"./translations-_F81yf29.js";import"./kyvDivider-GkhM6YIE.js";import"./typography-CdiQYpGP.js";import"./skillingsbuoye-BG85ofhS.js";import"./Logo-DajRw6N7.js";import{H as De}from"./heading-DzoQnr5e.js";import"./index-CR93wX3u.js";import"./index-7bhz2axD.js";import"./index-CGweXS-U.js";import"./lite-DaUVFjkg.js";import"./index-5ja4OLjF.js";import"./label-ld8O2xqo.js";import"./index-Lx1FvRbD.js";import"./preload-helper-Dp1pzeXC.js";const fe=r=>{const[o,t]=de.useState(r.value),me=v=>{var y;t(v),(y=r.onChange)==null||y.call(r,v)};return e.jsx(ge,{...r,value:o,onChange:me})},Ve={title:"Form/Datepicker",component:fe,decorators:[w,r=>e.jsx("div",{style:{margin:"0 auto",width:"fit-content"},children:e.jsx(r,{})})],tags:["autodocs","kyv"],argTypes:{}},a={label:"Datepicker",description:"Description",value:void 0,onChange:r=>console.log("onChange ",r)},n={args:a},s={args:{...a,showCalendarIcon:!1}},i={args:{...a,description:""}},p={args:{...a,value:new Date}},l={args:{...a,value:new Date,optional:!0}},c={args:{...a,value:new Date,optional:"Spesialtilpasset Verdi"}},d={args:{...a,value:new Date,required:!0}},m={args:{...a,value:new Date,error:"Error message"}},u={args:{...a,label:"Dato fra i dag",description:"Kun framtidige datoer kan velges",minDate:new Date}},g={args:{...a,label:"Dato til i dag",description:"Kun tidligere og dagens dato kan velges",maxDate:new Date}},D={args:{...a,label:"Velg dato innen 2 uker",description:"Du kan velge dato fra i dag og inntil 2 uker frem i tid",minDate:new Date,maxDate:new Date(Date.now()+336*60*60*1e3)}},f={args:{...a,label:"Plassering av popup",description:'Endre plassering av kalender-popup via "popperPlacement" prop',popperPlacement:"top"},argTypes:{popperPlacement:{control:{type:"select"},options:["top","bottom","left","right"]}},decorators:[w,r=>e.jsx("div",{style:{minHeight:"400px",display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx("div",{style:{},children:e.jsx(r,{})})})]},h={args:{...a,withPortal:!0},decorators:[w,r=>{const o=de.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(P,{onClick:()=>{var t;return(t=o.current)==null?void 0:t.showModal()},children:"Åpne Dialog"}),e.jsxs(ue,{ref:o,style:{maxWidth:"400px",maxHeight:"200px"},children:[e.jsx(De,{style:{marginBottom:"16px"},children:"Dialog med Datepicker"}),e.jsx("div",{style:{marginBottom:"24px"},children:e.jsx(r,{})}),e.jsx(P,{variant:"filled",onClick:()=>{var t;return(t=o.current)==null?void 0:t.close()},children:"Lukk Dialog"})]})]})}]},x={args:{...a,showYearDropdown:!0,showMonthDropdown:!0,value:new Date,minDate:new Date(2015,1,1),maxDate:new Date,description:"Også begrenset med minDate og maxDate"}};var k,S,W;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: defaultProps
}`,...(W=(S=n.parameters)==null?void 0:S.docs)==null?void 0:W.source}}};var b,j,C;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    showCalendarIcon: false
  }
}`,...(C=(j=s.parameters)==null?void 0:j.docs)==null?void 0:C.source}}};var M,E,B;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    description: ''
  }
}`,...(B=(E=i.parameters)==null?void 0:E.docs)==null?void 0:B.source}}};var R,H,I;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    value: new Date()
  }
}`,...(I=(H=p.parameters)==null?void 0:H.docs)==null?void 0:I.source}}};var O,V,T;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    value: new Date(),
    optional: true
  }
}`,...(T=(V=l.parameters)==null?void 0:V.docs)==null?void 0:T.source}}};var q,A,K;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    value: new Date(),
    optional: 'Spesialtilpasset Verdi'
  }
}`,...(K=(A=c.parameters)==null?void 0:A.docs)==null?void 0:K.source}}};var Y,L,F;d.parameters={...d.parameters,docs:{...(Y=d.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    value: new Date(),
    required: true
  }
}`,...(F=(L=d.parameters)==null?void 0:L.docs)==null?void 0:F.source}}};var N,_,z;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    value: new Date(),
    error: 'Error message'
  }
}`,...(z=(_=m.parameters)==null?void 0:_.docs)==null?void 0:z.source}}};var G,J,Q;u.parameters={...u.parameters,docs:{...(G=u.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    label: 'Dato fra i dag',
    description: 'Kun framtidige datoer kan velges',
    minDate: new Date()
  }
}`,...(Q=(J=u.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var U,X,Z;g.parameters={...g.parameters,docs:{...(U=g.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    label: 'Dato til i dag',
    description: 'Kun tidligere og dagens dato kan velges',
    maxDate: new Date()
  }
}`,...(Z=(X=g.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var $,ee,ae;D.parameters={...D.parameters,docs:{...($=D.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    label: 'Velg dato innen 2 uker',
    description: 'Du kan velge dato fra i dag og inntil 2 uker frem i tid',
    minDate: new Date(),
    maxDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000) // 2 weeks from today
  }
}`,...(ae=(ee=D.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var re,te,oe;f.parameters={...f.parameters,docs:{...(re=f.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    label: 'Plassering av popup',
    description: 'Endre plassering av kalender-popup via "popperPlacement" prop',
    popperPlacement: 'top'
  },
  argTypes: {
    popperPlacement: {
      control: {
        type: 'select'
      },
      options: ['top', 'bottom', 'left', 'right']
    }
  },
  decorators: [StyrbordDecorator, Story => <div style={{
    minHeight: '400px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }}>
        <div style={{}}>
          <Story />
        </div>
      </div>]
}`,...(oe=(te=f.parameters)==null?void 0:te.docs)==null?void 0:oe.source}}};var ne,se,ie;h.parameters={...h.parameters,docs:{...(ne=h.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    withPortal: true
  },
  decorators: [StyrbordDecorator, Story => {
    const dialogRef = useRef<HTMLDialogElement>(null);
    return <>
          <Button onClick={() => dialogRef.current?.showModal()}>Åpne Dialog</Button>
          <Dialog ref={dialogRef} style={{
        maxWidth: '400px',
        maxHeight: '200px'
      }}>
            <Heading style={{
          marginBottom: '16px'
        }}>Dialog med Datepicker</Heading>
            <div style={{
          marginBottom: '24px'
        }}>
              <Story />
            </div>
            <Button variant="filled" onClick={() => dialogRef.current?.close()}>
              Lukk Dialog
            </Button>
          </Dialog>
        </>;
  }]
}`,...(ie=(se=h.parameters)==null?void 0:se.docs)==null?void 0:ie.source}}};var pe,le,ce;x.parameters={...x.parameters,docs:{...(pe=x.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    showYearDropdown: true,
    showMonthDropdown: true,
    value: new Date(),
    minDate: new Date(2015, 1, 1),
    maxDate: new Date(),
    description: 'Også begrenset med minDate og maxDate'
  }
}`,...(ce=(le=x.parameters)==null?void 0:le.docs)==null?void 0:ce.source}}};const Te=["Default","WithoutCalendarIcon","WithoutDescription","WithValue","Optional","OptionalText","Required","WithError","WithMinDate","WithMaxDate","WithMinAndMaxDate","PopperPlacement","InDialogNearEdge","WithYearAndMonthDropdown"];export{n as Default,h as InDialogNearEdge,l as Optional,c as OptionalText,f as PopperPlacement,d as Required,m as WithError,g as WithMaxDate,D as WithMinAndMaxDate,u as WithMinDate,p as WithValue,x as WithYearAndMonthDropdown,s as WithoutCalendarIcon,i as WithoutDescription,Te as __namedExportsOrder,Ve as default};
