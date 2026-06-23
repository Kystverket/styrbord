import{r as d,j as e}from"./iframe-Drxh8Dju.js";import{p as i,B as l}from"./Dialog-BWk7NcSd.js";import"./Details-DbCakPqs.js";import"./KyvDivider-BGmnL9s5.js";import{B as Z}from"./typography-BoLReSsh.js";import"./KyvSpinner-DjFSqU6j.js";import"./skillingsbuoye-BH2dhu5A.js";import"./Logo-BxVthGtr.js";import{H as n,P as t,l as ee,c as ie,L as ae,E as g}from"./tooltip-C5iSat0F.js";import"./preload-helper-Dp1pzeXC.js";import"./index-C0nsvAE5.js";import"./index-CU9TWJdX.js";const{expect:B,userEvent:oe,within:re}=__STORYBOOK_MODULE_TEST__,fe={title:"Components/Dialog",component:i,tags:["autodocs","ds"],parameters:{layout:"fullscreen",customStyles:{display:"grid",alignItems:"start",justifyItems:"center",story:{boxSizing:"border-box",height:"100cqh",width:"100cqw"}},chromatic:{disableSnapshot:!1,modes:{mobile:{viewport:{height:600}},desktop:{viewport:{height:1080}}}},docs:{description:{component:"[Dokumentasjon fra Designsystemet](https://designsystemet.no/no/components/docs/modal/overview)"}}},play:async a=>{const o=re(a.canvasElement),r=o.getByRole("button");await oe.click(r);const s=o.getByRole("dialog");await new Promise(J=>{s.addEventListener("animationend",()=>{J()})}),await B(s).toBeInTheDocument(),await B(s).toHaveAttribute("open")}},m=a=>e.jsxs(i.TriggerContext,{children:[e.jsx(i.Trigger,{"data-color":a["data-color"],"data-size":a["data-size"],children:"Open Dialog"}),e.jsxs(i,{...a,children:[e.jsx(n,{style:{marginBottom:"var(--ds-size-2)"},children:"Dialog header"}),e.jsx(t,{style:{marginBottom:"var(--ds-size-2)"},children:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis doloremque obcaecati assumenda odio ducimus sunt et."}),e.jsx(t,{"data-size":"sm",children:"Dialog footer"})]})]}),p=a=>{const o=d.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(l,{onClick:()=>{var r;return(r=o.current)==null?void 0:r.showModal()},children:"Open Dialog with ref"}),e.jsxs(i,{...a,ref:o,children:[e.jsx(t,{"data-size":"sm",children:"Dialog subtittel"}),e.jsx(n,{style:{marginBottom:"var(--ds-size-2)"},children:"Dialog header"}),e.jsx(t,{style:{marginBottom:"var(--ds-size-2)"},children:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis doloremque obcaecati assumenda odio ducimus sunt et."}),"Dialog footer"]})]})},h=a=>{const[o,r]=d.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(l,{onClick:()=>r(s=>!s),children:"Open Dialog with prop"}),e.jsxs(i,{...a,open:o,onClose:()=>r(!1),children:[e.jsx(t,{"data-size":"sm",children:"Dialog subtittel"}),e.jsx(n,{style:{marginBottom:"var(--ds-size-2)"},children:"Dialog header"}),e.jsx(t,{style:{marginBottom:"var(--ds-size-2)"},children:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis doloremque obcaecati assumenda odio ducimus sunt et."}),"Dialog footer"]})]})},D=()=>{const a=d.useRef(null);return e.jsxs(i.TriggerContext,{children:[e.jsx(i.Trigger,{children:"Open Dialog"}),e.jsxs(i,{ref:a,closedby:"any",children:[e.jsxs(n,{children:["Dialog med ",e.jsx("code",{children:'closedby="any"'})," og en veldig lang tittel"]}),e.jsx(t,{children:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis doloremque obcaecati assumenda odio ducimus sunt et."}),e.jsx(t,{"data-size":"sm",children:"Dialog footer"})]})]})},x=()=>e.jsxs(i.TriggerContext,{children:[e.jsx(i.Trigger,{children:"Open Dialog"}),e.jsxs(i,{children:[e.jsxs(i.Block,{children:[e.jsx(t,{"data-size":"sm",children:"Her er det også divider"}),e.jsx(n,{children:"Vi kan legge divider under header"})]}),e.jsxs(i.Block,{children:[e.jsx(t,{style:{marginBottom:"var(--ds-size-2)"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sodales eros justo. Aenean non mi ipsum. Cras viverra elit nec vulputate mattis. Nunc placerat euismod pulvinar. Sed nec fringilla nulla, sit amet ultricies ante. Morbi egestas venenatis massa, eu interdum leo rutrum eu. Nulla varius, mi ac feugiat lacinia, magna eros ullamcorper arcu, vel tincidunt erat leo nec tortor. Sed ut dui arcu. Morbi commodo ipsum hendrerit est imperdiet imperdiet. Etiam sed maximus nisi. Quisque posuere posuere orci, non egestas risus facilisis a. Vivamus non tempus felis, in maximus lorem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."}),e.jsx(t,{children:"Etiam nec tincidunt est. Integer semper sodales efficitur. Pellentesque pellentesque varius leo id congue. Integer lacinia porttitor massa id euismod. Maecenas porta, magna nec interdum eleifend, risus magna condimentum neque, a gravida nisl risus a elit. Donec accumsan metus et lectus placerat varius. Donec tristique odio arcu. Donec cursus leo a dui auctor pulvinar. Sed in elit urna. Nunc vitae magna sed nibh elementum dignissim et ut massa."})]}),e.jsx(i.Block,{children:"Og over footer"})]})]}),f=()=>{const a=d.useRef(null),[o,r]=d.useState("");return e.jsxs(i.TriggerContext,{children:[e.jsx(i.Trigger,{children:"Open Dialog"}),e.jsxs(i,{ref:a,onClose:()=>r(""),closedby:"any",children:[e.jsx(n,{style:{marginBottom:"var(--ds-size-2)"},children:"Dialog med skjema"}),e.jsx(ee,{autofocus:"true",label:"Navn",value:o,onChange:s=>r(s.target.value)}),e.jsxs("div",{style:{display:"flex",gap:"var(--ds-size-4)",marginTop:"var(--ds-size-4)"},children:[e.jsx(l,{onClick:()=>{var s;window.alert(`Du har sendt inn skjema med navn: ${o}`),(s=a.current)==null||s.close()},children:"Send inn skjema"}),e.jsx(l,{variant:"outline",onClick:()=>{var s;return(s=a.current)==null?void 0:s.close()},children:"Avbryt"})]})]})]})},v=()=>e.jsxs(i.TriggerContext,{children:[e.jsx(i.Trigger,{children:"Open Dialog"}),e.jsxs(i,{style:{maxWidth:1200},children:[e.jsx(n,{style:{marginBottom:"var(--ds-size-2)"},children:"Dialog med en veldig lang bredde"}),e.jsx(t,{children:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis doloremque obcaecati assumenda odio ducimus sunt et."})]})]}),te=["Sogndal","Oslo","Brønnøysund","Stavanger","Trondheim","Bergen","Lillestrøm"],c=()=>{const a=d.useRef(null);return e.jsx(e.Fragment,{children:e.jsxs(i.TriggerContext,{children:[e.jsx(i.Trigger,{children:"Open Dialog"}),e.jsxs(i,{style:{overflow:"visible"},ref:a,children:[e.jsx(i.Block,{children:e.jsx(n,{children:"Dialog med suggestion"})}),e.jsx(i.Block,{children:e.jsxs(ie,{children:[e.jsx(ae,{children:"Velg en destinasjon"}),e.jsxs(g,{children:[e.jsx(g.Input,{}),e.jsx(g.Clear,{}),e.jsxs(g.List,{children:[e.jsx(g.Empty,{children:"Tomt"}),te.map(o=>e.jsxs(g.Option,{value:o,children:[o,e.jsx("div",{children:"Kommune"})]},o))]})]})]})}),e.jsx(i.Block,{children:e.jsx(l,{variant:"outline",onClick:()=>{var o;return(o=a.current)==null?void 0:o.close()},children:"Avbryt"})})]})]})})};c.parameters={a11y:{config:{rules:[{id:"aria-allowed-role",enabled:!1}]}}};const u=()=>{const a=d.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(l,{onClick:()=>{var o;return(o=a.current)==null?void 0:o.show()},children:"Open Dialog"}),e.jsxs(i,{ref:a,modal:!1,children:[e.jsx(n,{children:"Non-modal dialog"}),e.jsx(t,{children:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis doloremque obcaecati assumenda odio ducimus sunt et."})]})]})};u.parameters={customStyles:{padding:"var(--ds-size-18)"}};const j=()=>{const a=d.useRef(null),o=d.useRef(null);return e.jsxs(i.TriggerContext,{children:[e.jsx(i.Trigger,{children:"Open Outer Dialog"}),e.jsxs(i,{id:"OuterDialog",ref:a,onClose:()=>{var r;(r=a.current)==null||r.close()},children:[e.jsx(n,{style:{marginBottom:"var(--ds-size-2)"},children:"Outer dialog"}),e.jsx(t,{style:{marginBottom:"var(--ds-size-4)"},children:"This is the outer dialog. You can open another dialog from here."}),e.jsxs(Z,{horizontal:!0,gap:8,children:[e.jsx(l,{variant:"filled",onClick:()=>{var r;return(r=o.current)==null?void 0:r.showModal()},children:"Open Inner Dialog"}),e.jsx(l,{command:"close",commandFor:"OuterDialog",children:"Close"})]}),e.jsxs(i,{id:"InnerDialog",ref:o,onClose:()=>{var r;(r=o.current)==null||r.close()},children:[e.jsx(n,{style:{marginBottom:"var(--ds-size-2)"},children:"Inner dialog"}),e.jsx(t,{style:{marginBottom:"var(--ds-size-4)"},children:"This dialog was opened from within the outer dialog."}),e.jsx(l,{variant:"outline",command:"close",commandFor:"InnerDialog",children:"Close"})]})]})]})};m.__docgenInfo={description:"",methods:[],displayName:"Preview"};p.__docgenInfo={description:"",methods:[],displayName:"WithoutDialogTriggerContext"};h.__docgenInfo={description:"",methods:[],displayName:"DialogWithOpenProp"};D.__docgenInfo={description:"",methods:[],displayName:"BackdropClosedbyAny"};x.__docgenInfo={description:"",methods:[],displayName:"WithHeaderAndFooter"};f.__docgenInfo={description:"",methods:[],displayName:"DialogWithForm"};v.__docgenInfo={description:"",methods:[],displayName:"DialogWithMaxWidth"};c.__docgenInfo={description:"",methods:[],displayName:"DialogWithSuggestion"};u.__docgenInfo={description:"",methods:[],displayName:"DialogNonModal"};j.__docgenInfo={description:"",methods:[],displayName:"NestedDialogs"};var y,T,C;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`args => <Dialog.TriggerContext>
    <Dialog.Trigger data-color={args['data-color']} data-size={args['data-size']}>
      Open Dialog
    </Dialog.Trigger>
    <Dialog {...args}>
      <Heading style={{
      marginBottom: 'var(--ds-size-2)'
    }}>Dialog header</Heading>
      <Paragraph style={{
      marginBottom: 'var(--ds-size-2)'
    }}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis doloremque obcaecati assumenda odio ducimus
        sunt et.
      </Paragraph>
      <Paragraph data-size="sm">Dialog footer</Paragraph>
    </Dialog>
  </Dialog.TriggerContext>`,...(C=(T=m.parameters)==null?void 0:T.docs)==null?void 0:C.source}}};var b,R,z;p.parameters={...p.parameters,docs:{...(b=p.parameters)==null?void 0:b.docs,source:{originalSource:`args => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  return <>
      <Button onClick={() => dialogRef.current?.showModal()}>Open Dialog with ref</Button>
      <Dialog {...args} ref={dialogRef}>
        <Paragraph data-size="sm">Dialog subtittel</Paragraph>
        <Heading style={{
        marginBottom: 'var(--ds-size-2)'
      }}>Dialog header</Heading>
        <Paragraph style={{
        marginBottom: 'var(--ds-size-2)'
      }}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis doloremque obcaecati assumenda odio
          ducimus sunt et.
        </Paragraph>
        Dialog footer
      </Dialog>
    </>;
}`,...(z=(R=p.parameters)==null?void 0:R.docs)==null?void 0:z.source}}};var O,k,S;h.parameters={...h.parameters,docs:{...(O=h.parameters)==null?void 0:O.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(false);
  return <>
      <Button onClick={() => setOpen(prev => !prev)}>Open Dialog with prop</Button>
      <Dialog {...args} open={open} onClose={() => setOpen(false)}>
        <Paragraph data-size="sm">Dialog subtittel</Paragraph>
        <Heading style={{
        marginBottom: 'var(--ds-size-2)'
      }}>Dialog header</Heading>
        <Paragraph style={{
        marginBottom: 'var(--ds-size-2)'
      }}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis doloremque obcaecati assumenda odio
          ducimus sunt et.
        </Paragraph>
        Dialog footer
      </Dialog>
    </>;
}`,...(S=(k=h.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};var P,H,w;D.parameters={...D.parameters,docs:{...(P=D.parameters)==null?void 0:P.docs,source:{originalSource:`() => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  return <Dialog.TriggerContext>
      <Dialog.Trigger>Open Dialog</Dialog.Trigger>
      <Dialog ref={dialogRef} closedby="any">
        <Heading>
          Dialog med <code>closedby="any"</code> og en veldig lang tittel
        </Heading>
        <Paragraph>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis doloremque obcaecati assumenda odio
          ducimus sunt et.
        </Paragraph>
        <Paragraph data-size="sm">Dialog footer</Paragraph>
      </Dialog>
    </Dialog.TriggerContext>;
}`,...(w=(H=D.parameters)==null?void 0:H.docs)==null?void 0:w.source}}};var L,I,_;x.parameters={...x.parameters,docs:{...(L=x.parameters)==null?void 0:L.docs,source:{originalSource:`() => <Dialog.TriggerContext>
    <Dialog.Trigger>Open Dialog</Dialog.Trigger>
    <Dialog>
      <Dialog.Block>
        <Paragraph data-size="sm">Her er det også divider</Paragraph>
        <Heading>Vi kan legge divider under header</Heading>
      </Dialog.Block>
      <Dialog.Block>
        <Paragraph style={{
        marginBottom: 'var(--ds-size-2)'
      }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sodales eros justo. Aenean non mi ipsum.
          Cras viverra elit nec vulputate mattis. Nunc placerat euismod pulvinar. Sed nec fringilla nulla, sit amet
          ultricies ante. Morbi egestas venenatis massa, eu interdum leo rutrum eu. Nulla varius, mi ac feugiat lacinia,
          magna eros ullamcorper arcu, vel tincidunt erat leo nec tortor. Sed ut dui arcu. Morbi commodo ipsum hendrerit
          est imperdiet imperdiet. Etiam sed maximus nisi. Quisque posuere posuere orci, non egestas risus facilisis a.
          Vivamus non tempus felis, in maximus lorem. Class aptent taciti sociosqu ad litora torquent per conubia
          nostra, per inceptos himenaeos.
        </Paragraph>
        <Paragraph>
          Etiam nec tincidunt est. Integer semper sodales efficitur. Pellentesque pellentesque varius leo id congue.
          Integer lacinia porttitor massa id euismod. Maecenas porta, magna nec interdum eleifend, risus magna
          condimentum neque, a gravida nisl risus a elit. Donec accumsan metus et lectus placerat varius. Donec
          tristique odio arcu. Donec cursus leo a dui auctor pulvinar. Sed in elit urna. Nunc vitae magna sed nibh
          elementum dignissim et ut massa.
        </Paragraph>
      </Dialog.Block>
      <Dialog.Block>Og over footer</Dialog.Block>
    </Dialog>
  </Dialog.TriggerContext>`,...(_=(I=x.parameters)==null?void 0:I.docs)==null?void 0:_.source}}};var q,E,N;f.parameters={...f.parameters,docs:{...(q=f.parameters)==null?void 0:q.docs,source:{originalSource:`() => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [input, setInput] = useState('');
  return <Dialog.TriggerContext>
      <Dialog.Trigger>Open Dialog</Dialog.Trigger>
      <Dialog ref={dialogRef} onClose={() => setInput('')} closedby="any">
        <Heading style={{
        marginBottom: 'var(--ds-size-2)'
      }}>Dialog med skjema</Heading>
        <Textfield
      // @ts-expect-error We want the native "autofocus" and Reacts onMount smartness (see https://react.dev/reference/react-dom/components/input#input)
      autofocus="true" label="Navn" value={input} onChange={e => setInput(e.target.value)} />
        <div style={{
        display: 'flex',
        gap: 'var(--ds-size-4)',
        marginTop: 'var(--ds-size-4)'
      }}>
          <Button onClick={() => {
          window.alert(\`Du har sendt inn skjema med navn: \${input}\`);
          dialogRef.current?.close();
        }}>
            Send inn skjema
          </Button>
          <Button variant="outline" onClick={() => dialogRef.current?.close()}>
            Avbryt
          </Button>
        </div>
      </Dialog>
    </Dialog.TriggerContext>;
}`,...(N=(E=f.parameters)==null?void 0:E.docs)==null?void 0:N.source}}};var M,W,A;v.parameters={...v.parameters,docs:{...(M=v.parameters)==null?void 0:M.docs,source:{originalSource:`() => <Dialog.TriggerContext>
    <Dialog.Trigger>Open Dialog</Dialog.Trigger>
    <Dialog style={{
    maxWidth: 1200
  }}>
      <Heading style={{
      marginBottom: 'var(--ds-size-2)'
    }}>Dialog med en veldig lang bredde</Heading>
      <Paragraph>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis doloremque obcaecati assumenda odio ducimus
        sunt et.
      </Paragraph>
    </Dialog>
  </Dialog.TriggerContext>`,...(A=(W=v.parameters)==null?void 0:W.docs)==null?void 0:A.source}}};var F,V,K;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`() => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  return <>
      <Dialog.TriggerContext>
        <Dialog.Trigger>Open Dialog</Dialog.Trigger>
        <Dialog style={{
        overflow: 'visible'
      }} ref={dialogRef}>
          <Dialog.Block>
            <Heading>Dialog med suggestion</Heading>
          </Dialog.Block>
          <Dialog.Block>
            <Field>
              <Label>Velg en destinasjon</Label>
              <Suggestion>
                <Suggestion.Input />
                <Suggestion.Clear />
                <Suggestion.List>
                  <Suggestion.Empty>Tomt</Suggestion.Empty>
                  {DATA_PLACES.map(place => <Suggestion.Option key={place} value={place}>
                      {place}
                      <div>Kommune</div>
                    </Suggestion.Option>)}
                </Suggestion.List>
              </Suggestion>
            </Field>
          </Dialog.Block>
          <Dialog.Block>
            <Button variant="outline" onClick={() => dialogRef.current?.close()}>
              Avbryt
            </Button>
          </Dialog.Block>
        </Dialog>
      </Dialog.TriggerContext>
    </>;
}`,...(K=(V=c.parameters)==null?void 0:V.docs)==null?void 0:K.source}}};var Y,Q,$;u.parameters={...u.parameters,docs:{...(Y=u.parameters)==null?void 0:Y.docs,source:{originalSource:`() => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  return <>
      <Button onClick={() => dialogRef.current?.show()}>Open Dialog</Button>
      <Dialog ref={dialogRef} modal={false}>
        <Heading>Non-modal dialog</Heading>
        <Paragraph>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis doloremque obcaecati assumenda odio
          ducimus sunt et.
        </Paragraph>
      </Dialog>
    </>;
}`,...($=(Q=u.parameters)==null?void 0:Q.docs)==null?void 0:$.source}}};var U,X,G;j.parameters={...j.parameters,docs:{...(U=j.parameters)==null?void 0:U.docs,source:{originalSource:`() => {
  const outerDialogRef = useRef<HTMLDialogElement>(null);
  const innerDialogRef = useRef<HTMLDialogElement>(null);
  return <Dialog.TriggerContext>
      <Dialog.Trigger>Open Outer Dialog</Dialog.Trigger>
      <Dialog id={'OuterDialog'} ref={outerDialogRef} onClose={() => {
      outerDialogRef.current?.close();
    }}>
        <Heading style={{
        marginBottom: 'var(--ds-size-2)'
      }}>Outer dialog</Heading>
        <Paragraph style={{
        marginBottom: 'var(--ds-size-4)'
      }}>
          This is the outer dialog. You can open another dialog from here.
        </Paragraph>
        <Box horizontal gap={8}>
          <Button variant="filled" onClick={() => innerDialogRef.current?.showModal()}>
            Open Inner Dialog
          </Button>
          <Button command="close" commandFor="OuterDialog">
            Close
          </Button>
        </Box>

        <Dialog id="InnerDialog" ref={innerDialogRef} onClose={() => {
        innerDialogRef.current?.close();
      }}>
          <Heading style={{
          marginBottom: 'var(--ds-size-2)'
        }}>Inner dialog</Heading>
          <Paragraph style={{
          marginBottom: 'var(--ds-size-4)'
        }}>
            This dialog was opened from within the outer dialog.
          </Paragraph>
          <Button variant="outline" command="close" commandFor="InnerDialog">
            Close
          </Button>
        </Dialog>
      </Dialog>
    </Dialog.TriggerContext>;
}`,...(G=(X=j.parameters)==null?void 0:X.docs)==null?void 0:G.source}}};const ve=["Preview","WithoutDialogTriggerContext","DialogWithOpenProp","BackdropClosedbyAny","WithHeaderAndFooter","DialogWithForm","DialogWithMaxWidth","DialogWithSuggestion","DialogNonModal","NestedDialogs"];export{D as BackdropClosedbyAny,u as DialogNonModal,f as DialogWithForm,v as DialogWithMaxWidth,h as DialogWithOpenProp,c as DialogWithSuggestion,j as NestedDialogs,m as Preview,x as WithHeaderAndFooter,p as WithoutDialogTriggerContext,ve as __namedExportsOrder,fe as default};
