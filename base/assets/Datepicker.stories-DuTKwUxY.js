import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{B as P,ab as pe,ac as ce}from"./Avatar-hM8IPUGV.js";import{S as h}from"./styrbordDecorator-BrW2m4GX.js";import{r as ie}from"./iframe-DqRR50E9.js";import"./Details-B7M9t24E.js";import"./kyvDivider-GkhM6YIE.js";import"./typography-CdiQYpGP.js";import"./skillingsbuoye-BG85ofhS.js";import"./Logo-DajRw6N7.js";import{H as de}from"./heading-By5GeP7s.js";import"./index-CdfhKu1w.js";import"./index-sO2vbd19.js";import"./index-Dgn_LDPa.js";import"./lite-DaUVFjkg.js";import"./index-CgusIGxA.js";import"./label-BwP3asVa.js";import"./index-DyHG_zqa.js";import"./preload-helper-Dp1pzeXC.js";const me=e=>{const[o,t]=ie.useState(e.value),le=v=>{var y;t(v),(y=e.onChange)==null||y.call(e,v)};return r.jsx(ce,{...e,value:o,onChange:le})},Be={title:"Form/Datepicker",component:me,decorators:[h,e=>r.jsx(e,{})],tags:["autodocs","kyv"],argTypes:{}},a={label:"Datepicker",description:"Description",value:void 0,onChange:e=>console.log("onChange ",e)},s={args:a},n={args:{...a,showCalendarIcon:!1}},i={args:{...a,description:""}},l={args:{...a,value:new Date}},p={args:{...a,value:new Date,optional:!0}},c={args:{...a,value:new Date,optional:"Spesialtilpasset Verdi"}},d={args:{...a,value:new Date,required:!0}},m={args:{...a,value:new Date,error:"Error message"}},u={args:{...a,label:"Dato fra i dag",description:"Kun framtidige datoer kan velges",minDate:new Date}},g={args:{...a,label:"Dato til i dag",description:"Kun tidligere og dagens dato kan velges",maxDate:new Date}},D={args:{...a,label:"Velg dato innen 2 uker",description:"Du kan velge dato fra i dag og inntil 2 uker frem i tid",minDate:new Date,maxDate:new Date(Date.now()+336*60*60*1e3)}},f={args:{...a,label:"Plassering av popup",description:'Endre plassering av kalender-popup via "popperPlacement" prop',popperPlacement:"top"},argTypes:{popperPlacement:{control:{type:"select"},options:["top","bottom","left","right"]}},decorators:[h,e=>r.jsx("div",{style:{minHeight:"400px",display:"flex",alignItems:"center",justifyContent:"center"},children:r.jsx("div",{style:{},children:r.jsx(e,{})})})]},x={args:{...a,withPortal:!0},decorators:[h,e=>{const o=ie.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(P,{onClick:()=>{var t;return(t=o.current)==null?void 0:t.showModal()},children:"Åpne Dialog"}),r.jsxs(pe,{ref:o,style:{maxWidth:"400px",maxHeight:"200px"},children:[r.jsx(de,{style:{marginBottom:"16px"},children:"Dialog med Datepicker"}),r.jsx("div",{style:{marginBottom:"24px"},children:r.jsx(e,{})}),r.jsx(P,{variant:"filled",onClick:()=>{var t;return(t=o.current)==null?void 0:t.close()},children:"Lukk Dialog"})]})]})}]};var k,w,S;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: defaultProps
}`,...(S=(w=s.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var W,j,b;n.parameters={...n.parameters,docs:{...(W=n.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    showCalendarIcon: false
  }
}`,...(b=(j=n.parameters)==null?void 0:j.docs)==null?void 0:b.source}}};var C,E,M;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    description: ''
  }
}`,...(M=(E=i.parameters)==null?void 0:E.docs)==null?void 0:M.source}}};var B,R,H;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    value: new Date()
  }
}`,...(H=(R=l.parameters)==null?void 0:R.docs)==null?void 0:H.source}}};var I,V,T;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    value: new Date(),
    optional: true
  }
}`,...(T=(V=p.parameters)==null?void 0:V.docs)==null?void 0:T.source}}};var O,q,K;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    value: new Date(),
    optional: 'Spesialtilpasset Verdi'
  }
}`,...(K=(q=c.parameters)==null?void 0:q.docs)==null?void 0:K.source}}};var L,A,F;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    value: new Date(),
    required: true
  }
}`,...(F=(A=d.parameters)==null?void 0:A.docs)==null?void 0:F.source}}};var N,_,z;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(Q=(J=u.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var U,X,Y;g.parameters={...g.parameters,docs:{...(U=g.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    label: 'Dato til i dag',
    description: 'Kun tidligere og dagens dato kan velges',
    maxDate: new Date()
  }
}`,...(Y=(X=g.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,$,ee;D.parameters={...D.parameters,docs:{...(Z=D.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    label: 'Velg dato innen 2 uker',
    description: 'Du kan velge dato fra i dag og inntil 2 uker frem i tid',
    minDate: new Date(),
    maxDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000) // 2 weeks from today
  }
}`,...(ee=($=D.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var re,ae,te;f.parameters={...f.parameters,docs:{...(re=f.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(te=(ae=f.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};var oe,se,ne;x.parameters={...x.parameters,docs:{...(oe=x.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(ne=(se=x.parameters)==null?void 0:se.docs)==null?void 0:ne.source}}};const Re=["Default","WithoutCalendarIcon","WithoutDescription","WithValue","Optional","OptionalText","Required","WithError","WithMinDate","WithMaxDate","WithMinAndMaxDate","PopperPlacement","InDialogNearEdge"];export{s as Default,x as InDialogNearEdge,p as Optional,c as OptionalText,f as PopperPlacement,d as Required,m as WithError,g as WithMaxDate,D as WithMinAndMaxDate,u as WithMinDate,l as WithValue,n as WithoutCalendarIcon,i as WithoutDescription,Re as __namedExportsOrder,Be as default};
