import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{ab as i,P as s,B as u,at as X,ae as Y}from"./SlotDialog-CI__n36y.js";import"./Details-DkJzHTWI.js";import"./translations-_F81yf29.js";import"./kyvDivider-GkhM6YIE.js";import"./typography-CdiQYpGP.js";import"./skillingsbuoye-BG85ofhS.js";import"./Logo-DajRw6N7.js";import{r as l}from"./iframe-BsoipRQr.js";import{H as n}from"./heading-DzoQnr5e.js";import{L as G}from"./label-ld8O2xqo.js";import{E as d}from"./index-DeqmWXQ8.js";import"./index-CR93wX3u.js";import"./index-7bhz2axD.js";import"./index-CGweXS-U.js";import"./lite-DaUVFjkg.js";import"./index-5ja4OLjF.js";import"./index-Lx1FvRbD.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BD_XDLDy.js";const{expect:j,userEvent:J,within:Z}=__STORYBOOK_MODULE_TEST__,ye={title:"Components/Dialog",component:i,tags:["autodocs","ds"],parameters:{layout:"fullscreen",customStyles:{display:"grid",alignItems:"start",justifyItems:"center",story:{boxSizing:"border-box",height:"100cqh",width:"100cqw"}},chromatic:{disableSnapshot:!1,modes:{mobile:{viewport:{height:600}},desktop:{viewport:{height:1080}}}},docs:{description:{component:"[Dokumentasjon fra Designsystemet](https://designsystemet.no/no/components/docs/modal/overview)"}}},play:async a=>{const o=Z(a.canvasElement),r=o.getByRole("button");await J.click(r);const t=o.getByRole("dialog");await new Promise(U=>{t.addEventListener("animationend",()=>{U()})}),await j(t).toBeInTheDocument(),await j(t).toHaveAttribute("open")}},m=a=>e.jsxs(i.TriggerContext,{children:[e.jsx(i.Trigger,{"data-color":a["data-color"],"data-size":a["data-size"],children:"Open Dialog"}),e.jsxs(i,{...a,children:[e.jsx(n,{style:{marginBottom:"var(--ds-size-2)"},children:"Dialog header"}),e.jsx(s,{style:{marginBottom:"var(--ds-size-2)"},children:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis doloremque obcaecati assumenda odio ducimus sunt et."}),e.jsx(s,{"data-size":"sm",children:"Dialog footer"})]})]}),p=a=>{const o=l.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(u,{onClick:()=>{var r;return(r=o.current)==null?void 0:r.showModal()},children:"Open Dialog with ref"}),e.jsxs(i,{...a,ref:o,children:[e.jsx(s,{"data-size":"sm",children:"Dialog subtittel"}),e.jsx(n,{style:{marginBottom:"var(--ds-size-2)"},children:"Dialog header"}),e.jsx(s,{style:{marginBottom:"var(--ds-size-2)"},children:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis doloremque obcaecati assumenda odio ducimus sunt et."}),"Dialog footer"]})]})},h=a=>{const[o,r]=l.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(u,{onClick:()=>r(t=>!t),children:"Open Dialog with prop"}),e.jsxs(i,{...a,open:o,onClose:()=>r(!1),children:[e.jsx(s,{"data-size":"sm",children:"Dialog subtittel"}),e.jsx(n,{style:{marginBottom:"var(--ds-size-2)"},children:"Dialog header"}),e.jsx(s,{style:{marginBottom:"var(--ds-size-2)"},children:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis doloremque obcaecati assumenda odio ducimus sunt et."}),"Dialog footer"]})]})},D=()=>{const a=l.useRef(null);return e.jsxs(i.TriggerContext,{children:[e.jsx(i.Trigger,{children:"Open Dialog"}),e.jsxs(i,{ref:a,closedby:"any",children:[e.jsxs(n,{children:["Dialog med ",e.jsx("code",{children:'closedby="any"'})," og en veldig lang tittel"]}),e.jsx(s,{children:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis doloremque obcaecati assumenda odio ducimus sunt et."}),e.jsx(s,{"data-size":"sm",children:"Dialog footer"})]})]})},x=()=>e.jsxs(i.TriggerContext,{children:[e.jsx(i.Trigger,{children:"Open Dialog"}),e.jsxs(i,{children:[e.jsxs(i.Block,{children:[e.jsx(s,{"data-size":"sm",children:"Her er det også divider"}),e.jsx(n,{children:"Vi kan legge divider under header"})]}),e.jsxs(i.Block,{children:[e.jsx(s,{style:{marginBottom:"var(--ds-size-2)"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sodales eros justo. Aenean non mi ipsum. Cras viverra elit nec vulputate mattis. Nunc placerat euismod pulvinar. Sed nec fringilla nulla, sit amet ultricies ante. Morbi egestas venenatis massa, eu interdum leo rutrum eu. Nulla varius, mi ac feugiat lacinia, magna eros ullamcorper arcu, vel tincidunt erat leo nec tortor. Sed ut dui arcu. Morbi commodo ipsum hendrerit est imperdiet imperdiet. Etiam sed maximus nisi. Quisque posuere posuere orci, non egestas risus facilisis a. Vivamus non tempus felis, in maximus lorem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."}),e.jsx(s,{children:"Etiam nec tincidunt est. Integer semper sodales efficitur. Pellentesque pellentesque varius leo id congue. Integer lacinia porttitor massa id euismod. Maecenas porta, magna nec interdum eleifend, risus magna condimentum neque, a gravida nisl risus a elit. Donec accumsan metus et lectus placerat varius. Donec tristique odio arcu. Donec cursus leo a dui auctor pulvinar. Sed in elit urna. Nunc vitae magna sed nibh elementum dignissim et ut massa."})]}),e.jsx(i.Block,{children:"Og over footer"})]})]}),f=()=>{const a=l.useRef(null),[o,r]=l.useState("");return e.jsxs(i.TriggerContext,{children:[e.jsx(i.Trigger,{children:"Open Dialog"}),e.jsxs(i,{ref:a,onClose:()=>r(""),closedby:"any",children:[e.jsx(n,{style:{marginBottom:"var(--ds-size-2)"},children:"Dialog med skjema"}),e.jsx(X,{autofocus:"true",label:"Navn",value:o,onChange:t=>r(t.target.value)}),e.jsxs("div",{style:{display:"flex",gap:"var(--ds-size-4)",marginTop:"var(--ds-size-4)"},children:[e.jsx(u,{onClick:()=>{var t;window.alert(`Du har sendt inn skjema med navn: ${o}`),(t=a.current)==null||t.close()},children:"Send inn skjema"}),e.jsx(u,{variant:"outline",onClick:()=>{var t;return(t=a.current)==null?void 0:t.close()},children:"Avbryt"})]})]})]})},v=()=>e.jsxs(i.TriggerContext,{children:[e.jsx(i.Trigger,{children:"Open Dialog"}),e.jsxs(i,{style:{maxWidth:1200},children:[e.jsx(n,{style:{marginBottom:"var(--ds-size-2)"},children:"Dialog med en veldig lang bredde"}),e.jsx(s,{children:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis doloremque obcaecati assumenda odio ducimus sunt et."})]})]}),ee=["Sogndal","Oslo","Brønnøysund","Stavanger","Trondheim","Bergen","Lillestrøm"],g=()=>{const a=l.useRef(null);return e.jsx(e.Fragment,{children:e.jsxs(i.TriggerContext,{children:[e.jsx(i.Trigger,{children:"Open Dialog"}),e.jsxs(i,{style:{overflow:"visible"},ref:a,children:[e.jsx(i.Block,{children:e.jsx(n,{children:"Dialog med suggestion"})}),e.jsx(i.Block,{children:e.jsxs(Y,{children:[e.jsx(G,{children:"Velg en destinasjon"}),e.jsxs(d,{children:[e.jsx(d.Input,{}),e.jsx(d.Clear,{}),e.jsxs(d.List,{children:[e.jsx(d.Empty,{children:"Tomt"}),ee.map(o=>e.jsxs(d.Option,{value:o,children:[o,e.jsx("div",{children:"Kommune"})]},o))]})]})]})}),e.jsx(i.Block,{children:e.jsx(u,{variant:"outline",onClick:()=>{var o;return(o=a.current)==null?void 0:o.close()},children:"Avbryt"})})]})]})})};g.parameters={a11y:{config:{rules:[{id:"aria-allowed-role",enabled:!1}]}}};const c=()=>{const a=l.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(u,{onClick:()=>{var o;return(o=a.current)==null?void 0:o.show()},children:"Open Dialog"}),e.jsxs(i,{ref:a,modal:!1,children:[e.jsx(n,{children:"Non-modal dialog"}),e.jsx(s,{children:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis doloremque obcaecati assumenda odio ducimus sunt et."})]})]})};c.parameters={customStyles:{padding:"var(--ds-size-18)"}};m.__docgenInfo={description:"",methods:[],displayName:"Preview"};p.__docgenInfo={description:"",methods:[],displayName:"WithoutDialogTriggerContext"};h.__docgenInfo={description:"",methods:[],displayName:"DialogWithOpenProp"};D.__docgenInfo={description:"",methods:[],displayName:"BackdropClosedbyAny"};x.__docgenInfo={description:"",methods:[],displayName:"WithHeaderAndFooter"};f.__docgenInfo={description:"",methods:[],displayName:"DialogWithForm"};v.__docgenInfo={description:"",methods:[],displayName:"DialogWithMaxWidth"};g.__docgenInfo={description:"",methods:[],displayName:"DialogWithSuggestion"};c.__docgenInfo={description:"",methods:[],displayName:"DialogNonModal"};var y,B,b;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`args => <Dialog.TriggerContext>
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
  </Dialog.TriggerContext>`,...(b=(B=m.parameters)==null?void 0:B.docs)==null?void 0:b.source}}};var T,C,k;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`args => {
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
}`,...(k=(C=p.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};var S,P,z;h.parameters={...h.parameters,docs:{...(S=h.parameters)==null?void 0:S.docs,source:{originalSource:`args => {
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
}`,...(z=(P=h.parameters)==null?void 0:P.docs)==null?void 0:z.source}}};var O,R,L;D.parameters={...D.parameters,docs:{...(O=D.parameters)==null?void 0:O.docs,source:{originalSource:`() => {
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
}`,...(L=(R=D.parameters)==null?void 0:R.docs)==null?void 0:L.source}}};var H,w,_;x.parameters={...x.parameters,docs:{...(H=x.parameters)==null?void 0:H.docs,source:{originalSource:`() => <Dialog.TriggerContext>
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
  </Dialog.TriggerContext>`,...(_=(w=x.parameters)==null?void 0:w.docs)==null?void 0:_.source}}};var q,E,W;f.parameters={...f.parameters,docs:{...(q=f.parameters)==null?void 0:q.docs,source:{originalSource:`() => {
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
}`,...(W=(E=f.parameters)==null?void 0:E.docs)==null?void 0:W.source}}};var I,N,M;v.parameters={...v.parameters,docs:{...(I=v.parameters)==null?void 0:I.docs,source:{originalSource:`() => <Dialog.TriggerContext>
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
  </Dialog.TriggerContext>`,...(M=(N=v.parameters)==null?void 0:N.docs)==null?void 0:M.source}}};var A,F,V;g.parameters={...g.parameters,docs:{...(A=g.parameters)==null?void 0:A.docs,source:{originalSource:`() => {
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
}`,...(V=(F=g.parameters)==null?void 0:F.docs)==null?void 0:V.source}}};var K,Q,$;c.parameters={...c.parameters,docs:{...(K=c.parameters)==null?void 0:K.docs,source:{originalSource:`() => {
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
}`,...($=(Q=c.parameters)==null?void 0:Q.docs)==null?void 0:$.source}}};const Be=["Preview","WithoutDialogTriggerContext","DialogWithOpenProp","BackdropClosedbyAny","WithHeaderAndFooter","DialogWithForm","DialogWithMaxWidth","DialogWithSuggestion","DialogNonModal"];export{D as BackdropClosedbyAny,c as DialogNonModal,f as DialogWithForm,v as DialogWithMaxWidth,h as DialogWithOpenProp,g as DialogWithSuggestion,m as Preview,x as WithHeaderAndFooter,p as WithoutDialogTriggerContext,Be as __namedExportsOrder,ye as default};
