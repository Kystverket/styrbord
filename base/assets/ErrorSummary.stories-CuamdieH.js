'use client';
import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{r as t}from"./iframe-BpTrYzJe.js";import{aP as H,B as F,at as f}from"./SlotDialog-0WPRGNAe.js";import"./Details-BZZPzvbz.js";import"./translations-BZWMhBJL.js";import"./kyvDivider-GkhM6YIE.js";import"./typography-CdiQYpGP.js";import"./skillingsbuoye-BG85ofhS.js";import"./Logo-DajRw6N7.js";import{S as T}from"./index-CxGbxOmg.js";import{c as R}from"./lite-DaUVFjkg.js";import{H as _}from"./heading-DA-xEXxM.js";import{a as b,L as B}from"./index-EHeVhtkK.js";import"./preload-helper-Dp1pzeXC.js";import"./index-D2_lJmrK.js";import"./index-lru3SYWb.js";import"./index-DCzlVFJy.js";import"./label-paFhPXLu.js";import"./index-Dv1RRaFZ.js";const j=t.createContext({headingId:"heading",setHeadingId:()=>{}}),C=t.forwardRef(function({asChild:m,className:n,...a},c){const d=t.useId(),[u,I]=t.useState(d),w=m?T:"div";return r.jsx(j.Provider,{value:{headingId:u,setHeadingId:I},children:r.jsx(w,{tabIndex:-1,"aria-labelledby":u,className:R("ds-error-summary",n),ref:c,...a})})}),N=t.forwardRef(function({className:m,id:n,...a},c){const{headingId:d,setHeadingId:u}=t.useContext(j);return t.useEffect(()=>{n&&d!==n&&u(n)},[d,n,u]),r.jsx(_,{id:d,ref:c,...a})}),O=t.forwardRef(function({...m},n){return r.jsx(b,{ref:n,...m})}),P=t.forwardRef(function({...m},n){return r.jsx(H,{ref:n,"data-color":"neutral",...m})}),D=t.forwardRef(function({...m},n){return r.jsx(B.Unordered,{...m,ref:n})}),e=Object.assign(C,{Heading:N,Item:O,List:D,Link:P});e.Item.displayName="ErrorSummary.Item";e.Heading.displayName="ErrorSummary.Heading";e.List.displayName="ErrorSummary.List";e.Link.displayName="ErrorSummary.Link";const{expect:y,userEvent:z,within:W}=__STORYBOOK_MODULE_TEST__,ar={title:"Components/ErrorSummary",component:e,tags:["autodocs","ds"],parameters:{docs:{description:{component:"[Dokumentasjon fra Designsystemet](https://designsystemet.no/no/components/docs/error-summary/overview)"}}}},l=o=>r.jsxs(e,{...o,children:[r.jsx(e.Heading,{children:"For å gå videre må du rette opp følgende feil:"}),r.jsxs(e.List,{children:[r.jsx(e.Item,{children:r.jsx(e.Link,{href:"#",children:"Fødselsdato kan ikke være etter år 2005"})}),r.jsx(e.Item,{children:r.jsx(e.Link,{href:"#",children:"Telefonnummer kan kun inneholde siffer"})}),r.jsx(e.Item,{children:r.jsx(e.Link,{href:"#",children:"E-post må være gyldig"})})]})]}),s=()=>r.jsxs(r.Fragment,{children:[r.jsx(f,{label:"Fornavn",id:"fornavn",error:"Fornavn må være minst 2 tegn"}),r.jsx(f,{label:"Telefon",id:"telefon",type:"tel",error:"Telefonnummer kan kun inneholde siffer"}),r.jsxs(e,{children:[r.jsx(e.Heading,{children:"For å gå videre må du rette opp følgende feil:"}),r.jsxs(e.List,{children:[r.jsx(e.Item,{children:r.jsx(e.Link,{href:"#fornavn",children:"Fornavn må være minst 2 tegn"})}),r.jsx(e.Item,{children:r.jsx(e.Link,{href:"#telefon",children:"Telefonnummer kan kun inneholde siffer"})})]})]})]});s.decorators=[o=>r.jsx("div",{style:{display:"grid",alignItems:"stretch",gap:"var(--ds-size-4)"},children:r.jsx(o,{})})];const i=()=>{const[o,m]=t.useState(!1),n=t.useRef(null);return t.useEffect(()=>{var a;o&&((a=n.current)==null||a.focus())},[o]),r.jsxs(r.Fragment,{children:[r.jsx("div",{style:{display:"grid",placeItems:"center",marginBottom:"var(--ds-size-4)"},children:r.jsx(F,{onClick:()=>m(!o),children:o?"Skjul":"Send inn skjema"})}),o&&r.jsxs(e,{"data-testid":"show-hide",ref:n,children:[r.jsx(e.Heading,{children:"For å gå videre må du rette opp følgende feil:"}),r.jsxs(e.List,{children:[r.jsx(e.Item,{children:r.jsx(e.Link,{href:"#fornavn",children:"Fornavn må være minst 2 tegn"})}),r.jsx(e.Item,{children:r.jsx(e.Link,{href:"#telefon",children:"Telefonnummer kan kun inneholde siffer"})})]})]})]})};i.play=async o=>{const m=W(o.canvasElement),n=m.getByRole("button");await z.click(n);const a=m.getByTestId("show-hide");await y(a).toBeVisible(),await y(a).toHaveFocus()};l.__docgenInfo={description:"",methods:[],displayName:"Preview"};s.__docgenInfo={description:"",methods:[],displayName:"WithForm"};i.__docgenInfo={description:"",methods:[{name:"play",docblock:null,modifiers:["static"],params:[{name:"ctx",optional:!1,type:null}],returns:null}],displayName:"ShowHideReact"};var S,h,p;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`args => <ErrorSummary {...args}>
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
  </ErrorSummary>`,...(p=(h=l.parameters)==null?void 0:h.docs)==null?void 0:p.source}}};var E,g,k;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`() => <>
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
  </>`,...(k=(g=s.parameters)==null?void 0:g.docs)==null?void 0:k.source}}};var x,v,L;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`() => {
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
}`,...(L=(v=i.parameters)==null?void 0:v.docs)==null?void 0:L.source}}};const sr=["Preview","WithForm","ShowHideReact"];export{l as Preview,i as ShowHideReact,s as WithForm,sr as __namedExportsOrder,ar as default};
