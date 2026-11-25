import{r as n,j as e}from"./iframe-XfBZCEPN.js";import{ay as s,a5 as t,S as Z}from"./Dialog-DJYFinJA.js";import"./shipTypes-hFnSBndP.js";import"./Details-DE_XSW-5.js";import"./KyvDivider-OfUbcri2.js";import"./KyvSpinner-BSg30L3X.js";import"./skillingsbuoye-D5je9UzI.js";import"./Logo-BaU98RJo.js";import{H as l,P as r,T as ee,e as oe,L as ae,s as m}from"./tooltip-BI6fFoMv.js";import"./preload-helper-Dp1pzeXC.js";import"./color-tokens-BWmLKHwz.js";import"./index-Bq4C9D42.js";import"./index-f2TudgNm.js";const{expect:y,userEvent:ie,within:se}=__STORYBOOK_MODULE_TEST__,xe={title:"Components/Overlays/Dialog",component:s,tags:["autodocs","ds"],parameters:{layout:"fullscreen",customStyles:{display:"grid",alignItems:"start",justifyItems:"center",story:{boxSizing:"border-box",height:"100cqh",width:"100cqw"}},chromatic:{disableSnapshot:!1,modes:{mobile:{viewport:{height:600}},desktop:{viewport:{height:1080}}}},docs:{description:{component:"[Dokumentasjon fra Designsystemet](https://designsystemet.no/no/components/docs/modal/overview)"}}},play:async o=>{const a=se(o.canvasElement),i=a.getByRole("button");await ie.click(i);const c=a.getByRole("dialog");await new Promise(d=>{c.addEventListener("animationend",()=>{d()})}),await y(c).toBeInTheDocument(),await y(c).toHaveAttribute("open")}},p=o=>{const a=n.useId();return e.jsxs(e.Fragment,{children:[e.jsx(t,{command:"show-modal",commandfor:a,"data-color":o["data-color"],"data-size":o["data-size"],children:"Open Dialog"}),e.jsxs(s,{...o,id:a,children:[e.jsx(l,{style:{marginBottom:"var(--ds-size-2)"},children:"Dialog header"}),e.jsx(r,{style:{marginBottom:"var(--ds-size-2)"},children:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis doloremque obcaecati assumenda odio ducimus sunt et."}),e.jsx(r,{"data-size":"sm",children:"Dialog footer"})]})]})},h=o=>{const a=n.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(t,{onClick:()=>{var i;return(i=a.current)==null?void 0:i.showModal()},children:"Open Dialog with ref"}),e.jsxs(s,{...o,ref:a,children:[e.jsx(r,{"data-size":"sm",children:"Dialog subtittel"}),e.jsx(l,{style:{marginBottom:"var(--ds-size-2)"},children:"Dialog header"}),e.jsx(r,{style:{marginBottom:"var(--ds-size-2)"},children:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis doloremque obcaecati assumenda odio ducimus sunt et."}),"Dialog footer"]})]})},f=o=>{const[a,i]=n.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(t,{onClick:()=>i(c=>!c),children:"Open Dialog with prop"}),e.jsxs(s,{...o,open:a,onClose:()=>i(!1),children:[e.jsx(r,{"data-size":"sm",children:"Dialog subtittel"}),e.jsx(l,{style:{marginBottom:"var(--ds-size-2)"},children:"Dialog header"}),e.jsx(r,{style:{marginBottom:"var(--ds-size-2)"},children:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis doloremque obcaecati assumenda odio ducimus sunt et."}),"Dialog footer"]})]})},D=()=>{const o=n.useId(),a=n.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(t,{command:"show-modal",commandfor:o,children:"Open Dialog"}),e.jsxs(s,{id:o,ref:a,closedby:"any",children:[e.jsxs(l,{children:["Dialog med ",e.jsx("code",{children:'closedby="any"'})," og en veldig lang tittel"]}),e.jsx(r,{children:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis doloremque obcaecati assumenda odio ducimus sunt et."}),e.jsx(r,{"data-size":"sm",children:"Dialog footer"})]})]})},v=()=>{const o=n.useId();return e.jsxs(e.Fragment,{children:[e.jsx(t,{command:"show-modal",commandfor:o,children:"Open Dialog"}),e.jsxs(s,{id:o,children:[e.jsxs(s.Block,{children:[e.jsx(r,{"data-size":"sm",children:"Her er det også divider"}),e.jsx(l,{children:"Vi kan legge divider under header"})]}),e.jsxs(s.Block,{children:[e.jsx(r,{style:{marginBottom:"var(--ds-size-2)"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sodales eros justo. Aenean non mi ipsum. Cras viverra elit nec vulputate mattis. Nunc placerat euismod pulvinar. Sed nec fringilla nulla, sit amet ultricies ante. Morbi egestas venenatis massa, eu interdum leo rutrum eu. Nulla varius, mi ac feugiat lacinia, magna eros ullamcorper arcu, vel tincidunt erat leo nec tortor. Sed ut dui arcu. Morbi commodo ipsum hendrerit est imperdiet imperdiet. Etiam sed maximus nisi. Quisque posuere posuere orci, non egestas risus facilisis a. Vivamus non tempus felis, in maximus lorem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."}),e.jsx(r,{children:"Etiam nec tincidunt est. Integer semper sodales efficitur. Pellentesque pellentesque varius leo id congue. Integer lacinia porttitor massa id euismod. Maecenas porta, magna nec interdum eleifend, risus magna condimentum neque, a gravida nisl risus a elit. Donec accumsan metus et lectus placerat varius. Donec tristique odio arcu. Donec cursus leo a dui auctor pulvinar. Sed in elit urna. Nunc vitae magna sed nibh elementum dignissim et ut massa."})]}),e.jsx(s.Block,{children:"Og over footer"})]})]})},x=()=>{const o=n.useId(),a=n.useRef(null),[i,c]=n.useState("");return e.jsxs(e.Fragment,{children:[e.jsx(t,{command:"show-modal",commandfor:o,children:"Open Dialog"}),e.jsxs(s,{id:o,ref:a,onClose:()=>c(""),closedby:"any",children:[e.jsx(l,{style:{marginBottom:"var(--ds-size-2)"},children:"Dialog med skjema"}),e.jsx(ee,{autofocus:"true",label:"Navn",value:i,onChange:d=>c(d.target.value)}),e.jsxs("div",{style:{display:"flex",gap:"var(--ds-size-4)",marginTop:"var(--ds-size-4)"},children:[e.jsx(t,{onClick:()=>{var d;window.alert(`Du har sendt inn skjema med navn: ${i}`),(d=a.current)==null||d.close()},children:"Send inn skjema"}),e.jsx(t,{variant:"outline",onClick:()=>{var d;return(d=a.current)==null?void 0:d.close()},children:"Avbryt"})]})]})]})},B=()=>{const o=n.useId();return e.jsxs(e.Fragment,{children:[e.jsx(t,{command:"show-modal",commandfor:o,children:"Open Dialog"}),e.jsxs(s,{id:o,style:{maxWidth:1200},children:[e.jsx(l,{style:{marginBottom:"var(--ds-size-2)"},children:"Dialog med en veldig lang bredde"}),e.jsx(r,{children:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis doloremque obcaecati assumenda odio ducimus sunt et."})]})]})},te=["Sogndal","Oslo","Brønnøysund","Stavanger","Trondheim","Bergen","Lillestrøm"],u=()=>{const o=n.useId(),a=n.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(t,{command:"show-modal",commandfor:o,children:"Open Dialog"}),e.jsxs(s,{id:o,style:{overflow:"visible"},ref:a,children:[e.jsx(s.Block,{children:e.jsx(l,{children:"Dialog med suggestion"})}),e.jsx(s.Block,{children:e.jsxs(oe,{children:[e.jsx(ae,{children:"Velg en destinasjon"}),e.jsxs(m,{children:[e.jsx(m.Input,{}),e.jsx(m.Clear,{}),e.jsxs(m.List,{children:[e.jsx(m.Empty,{children:"Tomt"}),te.map(i=>e.jsxs(m.Option,{value:i,children:[i,e.jsx("div",{children:"Kommune"})]},i))]})]})]})}),e.jsx(s.Block,{children:e.jsx(t,{variant:"outline",onClick:()=>{var i;return(i=a.current)==null?void 0:i.close()},children:"Avbryt"})})]})]})};u.parameters={a11y:{config:{rules:[{id:"aria-allowed-role",enabled:!1}]}}};const g=()=>{const o=n.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(t,{onClick:()=>{var a;return(a=o.current)==null?void 0:a.show()},children:"Open Dialog"}),e.jsxs(s,{ref:o,modal:!1,children:[e.jsx(l,{children:"Non-modal dialog"}),e.jsx(r,{children:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis doloremque obcaecati assumenda odio ducimus sunt et."})]})]})};g.parameters={customStyles:{padding:"var(--ds-size-18)"}};const j=()=>{const o=n.useRef(null),a=n.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(t,{command:"show-modal",commandfor:"OuterDialog",children:"Open Outer Dialog"}),e.jsxs(s,{id:"OuterDialog",ref:o,onClose:()=>{var i;(i=o.current)==null||i.close()},children:[e.jsx(l,{style:{marginBottom:"var(--ds-size-2)"},children:"Outer dialog"}),e.jsx(r,{style:{marginBottom:"var(--ds-size-4)"},children:"This is the outer dialog. You can open another dialog from here."}),e.jsxs(Z,{horizontal:!0,gap:2,children:[e.jsx(t,{variant:"filled",onClick:()=>{var i;return(i=a.current)==null?void 0:i.showModal()},children:"Open Inner Dialog"}),e.jsx(t,{command:"close",commandFor:"OuterDialog",children:"Close"})]}),e.jsxs(s,{id:"InnerDialog",ref:a,onClose:()=>{var i;(i=a.current)==null||i.close()},children:[e.jsx(l,{style:{marginBottom:"var(--ds-size-2)"},children:"Inner dialog"}),e.jsx(r,{style:{marginBottom:"var(--ds-size-4)"},children:"This dialog was opened from within the outer dialog."}),e.jsx(t,{variant:"outline",command:"close",commandFor:"InnerDialog",children:"Close"})]})]})]})};p.__docgenInfo={description:"",methods:[],displayName:"Preview"};h.__docgenInfo={description:"",methods:[],displayName:"WithRef"};f.__docgenInfo={description:"",methods:[],displayName:"DialogWithOpenProp"};D.__docgenInfo={description:"",methods:[],displayName:"BackdropClosedbyAny"};v.__docgenInfo={description:"",methods:[],displayName:"WithHeaderAndFooter"};x.__docgenInfo={description:"",methods:[],displayName:"DialogWithForm"};B.__docgenInfo={description:"",methods:[],displayName:"DialogWithMaxWidth"};u.__docgenInfo={description:"",methods:[],displayName:"DialogWithSuggestion"};g.__docgenInfo={description:"",methods:[],displayName:"DialogNonModal"};j.__docgenInfo={description:"",methods:[],displayName:"NestedDialogs"};var b,R,O;p.parameters={...p.parameters,docs:{...(b=p.parameters)==null?void 0:b.docs,source:{originalSource:`args => {
  const id = useId();
  return <>
      <Button command="show-modal" commandfor={id} data-color={args['data-color']} data-size={args['data-size']}>
        Open Dialog
      </Button>
      <Dialog {...args} id={id}>
        <Heading style={{
        marginBottom: 'var(--ds-size-2)'
      }}>Dialog header</Heading>
        <Paragraph style={{
        marginBottom: 'var(--ds-size-2)'
      }}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis doloremque obcaecati assumenda odio
          ducimus sunt et.
        </Paragraph>
        <Paragraph data-size="sm">Dialog footer</Paragraph>
      </Dialog>
    </>;
}`,...(O=(R=p.parameters)==null?void 0:R.docs)==null?void 0:O.source}}};var w,S,z;h.parameters={...h.parameters,docs:{...(w=h.parameters)==null?void 0:w.docs,source:{originalSource:`args => {
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
}`,...(z=(S=h.parameters)==null?void 0:S.docs)==null?void 0:z.source}}};var k,I,P;f.parameters={...f.parameters,docs:{...(k=f.parameters)==null?void 0:k.docs,source:{originalSource:`args => {
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
}`,...(P=(I=f.parameters)==null?void 0:I.docs)==null?void 0:P.source}}};var C,H,L;D.parameters={...D.parameters,docs:{...(C=D.parameters)==null?void 0:C.docs,source:{originalSource:`() => {
  const id = useId();
  const dialogRef = useRef<HTMLDialogElement>(null);
  return <>
      <Button command="show-modal" commandfor={id}>
        Open Dialog
      </Button>
      <Dialog id={id} ref={dialogRef} closedby="any">
        <Heading>
          Dialog med <code>closedby="any"</code> og en veldig lang tittel
        </Heading>
        <Paragraph>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis doloremque obcaecati assumenda odio
          ducimus sunt et.
        </Paragraph>
        <Paragraph data-size="sm">Dialog footer</Paragraph>
      </Dialog>
    </>;
}`,...(L=(H=D.parameters)==null?void 0:H.docs)==null?void 0:L.source}}};var _,q,E;v.parameters={...v.parameters,docs:{...(_=v.parameters)==null?void 0:_.docs,source:{originalSource:`() => {
  const id = useId();
  return <>
      <Button command="show-modal" commandfor={id}>
        Open Dialog
      </Button>
      <Dialog id={id}>
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
            ultricies ante. Morbi egestas venenatis massa, eu interdum leo rutrum eu. Nulla varius, mi ac feugiat
            lacinia, magna eros ullamcorper arcu, vel tincidunt erat leo nec tortor. Sed ut dui arcu. Morbi commodo
            ipsum hendrerit est imperdiet imperdiet. Etiam sed maximus nisi. Quisque posuere posuere orci, non egestas
            risus facilisis a. Vivamus non tempus felis, in maximus lorem. Class aptent taciti sociosqu ad litora
            torquent per conubia nostra, per inceptos himenaeos.
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
    </>;
}`,...(E=(q=v.parameters)==null?void 0:q.docs)==null?void 0:E.source}}};var N,M,T;x.parameters={...x.parameters,docs:{...(N=x.parameters)==null?void 0:N.docs,source:{originalSource:`() => {
  const id = useId();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [input, setInput] = useState('');
  return <>
      <Button command="show-modal" commandfor={id}>
        Open Dialog
      </Button>
      <Dialog id={id} ref={dialogRef} onClose={() => setInput('')} closedby="any">
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
    </>;
}`,...(T=(M=x.parameters)==null?void 0:M.docs)==null?void 0:T.source}}};var W,F,A;B.parameters={...B.parameters,docs:{...(W=B.parameters)==null?void 0:W.docs,source:{originalSource:`() => {
  const id = useId();
  return <>
      <Button command="show-modal" commandfor={id}>
        Open Dialog
      </Button>
      <Dialog id={id} style={{
      maxWidth: 1200
    }}>
        <Heading style={{
        marginBottom: 'var(--ds-size-2)'
      }}>Dialog med en veldig lang bredde</Heading>
        <Paragraph>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis doloremque obcaecati assumenda odio
          ducimus sunt et.
        </Paragraph>
      </Dialog>
    </>;
}`,...(A=(F=B.parameters)==null?void 0:F.docs)==null?void 0:A.source}}};var V,K,Y;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`() => {
  const id = useId();
  const dialogRef = useRef<HTMLDialogElement>(null);
  return <>
      <Button command="show-modal" commandfor={id}>
        Open Dialog
      </Button>
      <Dialog id={id} style={{
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
    </>;
}`,...(Y=(K=u.parameters)==null?void 0:K.docs)==null?void 0:Y.source}}};var Q,$,U;g.parameters={...g.parameters,docs:{...(Q=g.parameters)==null?void 0:Q.docs,source:{originalSource:`() => {
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
}`,...(U=($=g.parameters)==null?void 0:$.docs)==null?void 0:U.source}}};var X,G,J;j.parameters={...j.parameters,docs:{...(X=j.parameters)==null?void 0:X.docs,source:{originalSource:`() => {
  const outerDialogRef = useRef<HTMLDialogElement>(null);
  const innerDialogRef = useRef<HTMLDialogElement>(null);
  return <>
      <Button command="show-modal" commandfor="OuterDialog">
        Open Outer Dialog
      </Button>
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
        <Surface horizontal gap={2}>
          <Button variant="filled" onClick={() => innerDialogRef.current?.showModal()}>
            Open Inner Dialog
          </Button>
          <Button command="close" commandFor="OuterDialog">
            Close
          </Button>
        </Surface>

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
    </>;
}`,...(J=(G=j.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};const Be=["Preview","WithRef","DialogWithOpenProp","BackdropClosedbyAny","WithHeaderAndFooter","DialogWithForm","DialogWithMaxWidth","DialogWithSuggestion","DialogNonModal","NestedDialogs"];export{D as BackdropClosedbyAny,g as DialogNonModal,x as DialogWithForm,B as DialogWithMaxWidth,f as DialogWithOpenProp,u as DialogWithSuggestion,j as NestedDialogs,p as Preview,v as WithHeaderAndFooter,h as WithRef,Be as __namedExportsOrder,xe as default};
