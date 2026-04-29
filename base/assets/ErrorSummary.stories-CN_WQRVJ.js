import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{n as e,l}from"./tooltip-DMuGhVQ9.js";import{r as d}from"./iframe-C_0V18ee.js";import{B as v}from"./SlotDialog-Ds7-ek3v.js";import"./Details-C8iTZlYa.js";import"./translations-B2h4bsCg.js";import"./kyvDivider-GkhM6YIE.js";import"./typography-CdiQYpGP.js";import"./skillingsbuoye-BG85ofhS.js";import"./Logo-DajRw6N7.js";import"./index-DbereDgs.js";import"./index-DDsTTpaJ.js";import"./preload-helper-Dp1pzeXC.js";const{expect:u,userEvent:x,within:j}=__STORYBOOK_MODULE_TEST__,z={title:"Components/ErrorSummary",component:e,tags:["autodocs","ds"],parameters:{docs:{description:{component:"[Dokumentasjon fra Designsystemet](https://designsystemet.no/no/components/docs/error-summary/overview)"}}}},s=n=>r.jsxs(e,{...n,children:[r.jsx(e.Heading,{children:"For å gå videre må du rette opp følgende feil:"}),r.jsxs(e.List,{children:[r.jsx(e.Item,{children:r.jsx(e.Link,{href:"#",children:"Fødselsdato kan ikke være etter år 2005"})}),r.jsx(e.Item,{children:r.jsx(e.Link,{href:"#",children:"Telefonnummer kan kun inneholde siffer"})}),r.jsx(e.Item,{children:r.jsx(e.Link,{href:"#",children:"E-post må være gyldig"})})]})]}),o=()=>r.jsxs(r.Fragment,{children:[r.jsx(l,{label:"Fornavn",id:"fornavn",error:"Fornavn må være minst 2 tegn"}),r.jsx(l,{label:"Telefon",id:"telefon",type:"tel",error:"Telefonnummer kan kun inneholde siffer"}),r.jsxs(e,{children:[r.jsx(e.Heading,{children:"For å gå videre må du rette opp følgende feil:"}),r.jsxs(e.List,{children:[r.jsx(e.Item,{children:r.jsx(e.Link,{href:"#fornavn",children:"Fornavn må være minst 2 tegn"})}),r.jsx(e.Item,{children:r.jsx(e.Link,{href:"#telefon",children:"Telefonnummer kan kun inneholde siffer"})})]})]})]});o.decorators=[n=>r.jsx("div",{style:{display:"grid",alignItems:"stretch",gap:"var(--ds-size-4)"},children:r.jsx(n,{})})];const m=()=>{const[n,i]=d.useState(!1),a=d.useRef(null);return d.useEffect(()=>{var t;n&&((t=a.current)==null||t.focus())},[n]),r.jsxs(r.Fragment,{children:[r.jsx("div",{style:{display:"grid",placeItems:"center",marginBottom:"var(--ds-size-4)"},children:r.jsx(v,{onClick:()=>i(!n),children:n?"Skjul":"Send inn skjema"})}),n&&r.jsxs(e,{"data-testid":"show-hide",ref:a,children:[r.jsx(e.Heading,{children:"For å gå videre må du rette opp følgende feil:"}),r.jsxs(e.List,{children:[r.jsx(e.Item,{children:r.jsx(e.Link,{href:"#fornavn",children:"Fornavn må være minst 2 tegn"})}),r.jsx(e.Item,{children:r.jsx(e.Link,{href:"#telefon",children:"Telefonnummer kan kun inneholde siffer"})})]})]})]})};m.play=async n=>{const i=j(n.canvasElement),a=i.getByRole("button");await x.click(a);const t=i.getByTestId("show-hide");await u(t).toBeVisible(),await u(t).toHaveFocus()};s.__docgenInfo={description:"",methods:[],displayName:"Preview"};o.__docgenInfo={description:"",methods:[],displayName:"WithForm"};m.__docgenInfo={description:"",methods:[{name:"play",docblock:null,modifiers:["static"],params:[{name:"ctx",optional:!1,type:null}],returns:null}],displayName:"ShowHideReact"};var c,f,h;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`args => <ErrorSummary {...args}>
    <ErrorSummary.Heading>For å gå videre må du rette opp følgende feil:</ErrorSummary.Heading>
    <ErrorSummary.List>
      <ErrorSummary.Item>
        <ErrorSummary.Link href="#">Fødselsdato kan ikke være etter år 2005</ErrorSummary.Link>
      </ErrorSummary.Item>
      <ErrorSummary.Item>
        <ErrorSummary.Link href="#">Telefonnummer kan kun inneholde siffer</ErrorSummary.Link>
      </ErrorSummary.Item>
      <ErrorSummary.Item>
        <ErrorSummary.Link href="#">E-post må være gyldig</ErrorSummary.Link>
      </ErrorSummary.Item>
    </ErrorSummary.List>
  </ErrorSummary>`,...(h=(f=s.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var y,p,S;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`() => <>
    <Textfield label="Fornavn" id="fornavn" error="Fornavn må være minst 2 tegn" />

    <Textfield label="Telefon" id="telefon" type="tel" error="Telefonnummer kan kun inneholde siffer" />

    <ErrorSummary>
      <ErrorSummary.Heading>For å gå videre må du rette opp følgende feil:</ErrorSummary.Heading>
      <ErrorSummary.List>
        <ErrorSummary.Item>
          <ErrorSummary.Link href="#fornavn">Fornavn må være minst 2 tegn</ErrorSummary.Link>
        </ErrorSummary.Item>
        <ErrorSummary.Item>
          <ErrorSummary.Link href="#telefon">Telefonnummer kan kun inneholde siffer</ErrorSummary.Link>
        </ErrorSummary.Item>
      </ErrorSummary.List>
    </ErrorSummary>
  </>`,...(S=(p=o.parameters)==null?void 0:p.docs)==null?void 0:S.source}}};var E,g,k;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`() => {
  const [show, setShow] = useState(false);
  const summaryRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (show) {
      summaryRef.current?.focus();
    }
  }, [show]);
  return <>
      <div style={{
      display: 'grid',
      placeItems: 'center',
      marginBottom: 'var(--ds-size-4)'
    }}>
        <Button onClick={() => setShow(!show)}>{show ? 'Skjul' : 'Send inn skjema'}</Button>
      </div>
      {show && <ErrorSummary data-testid="show-hide" ref={summaryRef}>
          <ErrorSummary.Heading>For å gå videre må du rette opp følgende feil:</ErrorSummary.Heading>
          <ErrorSummary.List>
            <ErrorSummary.Item>
              <ErrorSummary.Link href="#fornavn">Fornavn må være minst 2 tegn</ErrorSummary.Link>
            </ErrorSummary.Item>
            <ErrorSummary.Item>
              <ErrorSummary.Link href="#telefon">Telefonnummer kan kun inneholde siffer</ErrorSummary.Link>
            </ErrorSummary.Item>
          </ErrorSummary.List>
        </ErrorSummary>}
    </>;
}`,...(k=(g=m.parameters)==null?void 0:g.docs)==null?void 0:k.source}}};const N=["Preview","WithForm","ShowHideReact"];export{s as Preview,m as ShowHideReact,o as WithForm,N as __namedExportsOrder,z as default};
