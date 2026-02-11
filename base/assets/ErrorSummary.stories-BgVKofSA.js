'use client';
import{j as r}from"./jsx-runtime-BjG_zV1W.js";import{within as H,userEvent as F,expect as f}from"./index-DgAF9SIF.js";import{r as t}from"./index-BWu4c2F4.js";import{aP as R,B as T,d as y}from"./Card-KeqL4nDM.js";import"./Details-8YZFjHTH.js";import"./kyvDivider-DSk0K4x1.js";import"./typography-9ubeq_Vx.js";import"./skillingsbuoye-mzpk6Jp8.js";import"./Logo-CEva0-QL.js";import{S as b}from"./index-DtgyEQ7Q.js";import{c as B}from"./lite-DaUVFjkg.js";import{H as C}from"./heading-B8SX_GYc.js";import{a as N,L as _}from"./index-qNCBwHwV.js";import"./index-B8jaNLVP.js";import"./index-BtN5BFRV.js";import"./label-CT_xXrm7.js";import"./index-eaWjzoNI.js";const L=t.createContext({headingId:"heading",setHeadingId:()=>{}}),P=t.forwardRef(function({asChild:m,className:n,...a},c){const d=t.useId(),[u,I]=t.useState(d),w=m?b:"div";return r.jsx(L.Provider,{value:{headingId:u,setHeadingId:I},children:r.jsx(w,{tabIndex:-1,"aria-labelledby":u,className:B("ds-error-summary",n),ref:c,...a})})}),z=t.forwardRef(function({className:m,id:n,...a},c){const{headingId:d,setHeadingId:u}=t.useContext(L);return t.useEffect(()=>{n&&d!==n&&u(n)},[d,n,u]),r.jsx(C,{id:d,ref:c,...a})}),D=t.forwardRef(function({...m},n){return r.jsx(N,{ref:n,...m})}),W=t.forwardRef(function({...m},n){return r.jsx(R,{ref:n,"data-color":"neutral",...m})}),O=t.forwardRef(function({...m},n){return r.jsx(_.Unordered,{...m,ref:n})}),e=Object.assign(P,{Heading:z,Item:D,List:O,Link:W});e.Item.displayName="ErrorSummary.Item";e.Heading.displayName="ErrorSummary.Heading";e.List.displayName="ErrorSummary.List";e.Link.displayName="ErrorSummary.Link";const mr={title:"Components/ErrorSummary",component:e,tags:["autodocs","ds"],parameters:{docs:{description:{component:"[Dokumentasjon fra Designsystemet](https://designsystemet.no/no/components/docs/error-summary/overview)"}}}},l=o=>r.jsxs(e,{...o,children:[r.jsx(e.Heading,{children:"For å gå videre må du rette opp følgende feil:"}),r.jsxs(e.List,{children:[r.jsx(e.Item,{children:r.jsx(e.Link,{href:"#",children:"Fødselsdato kan ikke være etter år 2005"})}),r.jsx(e.Item,{children:r.jsx(e.Link,{href:"#",children:"Telefonnummer kan kun inneholde siffer"})}),r.jsx(e.Item,{children:r.jsx(e.Link,{href:"#",children:"E-post må være gyldig"})})]})]}),s=()=>r.jsxs(r.Fragment,{children:[r.jsx(y,{label:"Fornavn",id:"fornavn",error:"Fornavn må være minst 2 tegn"}),r.jsx(y,{label:"Telefon",id:"telefon",type:"tel",error:"Telefonnummer kan kun inneholde siffer"}),r.jsxs(e,{children:[r.jsx(e.Heading,{children:"For å gå videre må du rette opp følgende feil:"}),r.jsxs(e.List,{children:[r.jsx(e.Item,{children:r.jsx(e.Link,{href:"#fornavn",children:"Fornavn må være minst 2 tegn"})}),r.jsx(e.Item,{children:r.jsx(e.Link,{href:"#telefon",children:"Telefonnummer kan kun inneholde siffer"})})]})]})]});s.decorators=[o=>r.jsx("div",{style:{display:"grid",alignItems:"stretch",gap:"var(--ds-size-4)"},children:r.jsx(o,{})})];const i=()=>{const[o,m]=t.useState(!1),n=t.useRef(null);return t.useEffect(()=>{var a;o&&((a=n.current)==null||a.focus())},[o]),r.jsxs(r.Fragment,{children:[r.jsx("div",{style:{display:"grid",placeItems:"center",marginBottom:"var(--ds-size-4)"},children:r.jsx(T,{onClick:()=>m(!o),children:o?"Skjul":"Send inn skjema"})}),o&&r.jsxs(e,{"data-testid":"show-hide",ref:n,children:[r.jsx(e.Heading,{children:"For å gå videre må du rette opp følgende feil:"}),r.jsxs(e.List,{children:[r.jsx(e.Item,{children:r.jsx(e.Link,{href:"#fornavn",children:"Fornavn må være minst 2 tegn"})}),r.jsx(e.Item,{children:r.jsx(e.Link,{href:"#telefon",children:"Telefonnummer kan kun inneholde siffer"})})]})]})]})};i.play=async o=>{const m=H(o.canvasElement),n=m.getByRole("button");await F.click(n);const a=m.getByTestId("show-hide");await f(a).toBeVisible(),await f(a).toHaveFocus()};l.__docgenInfo={description:"",methods:[],displayName:"Preview"};s.__docgenInfo={description:"",methods:[],displayName:"WithForm"};i.__docgenInfo={description:"",methods:[{name:"play",docblock:null,modifiers:["static"],params:[{name:"ctx",optional:!1,type:null}],returns:null}],displayName:"ShowHideReact"};var h,S,p;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`args => <ErrorSummary {...args}>
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
  </ErrorSummary>`,...(p=(S=l.parameters)==null?void 0:S.docs)==null?void 0:p.source}}};var E,g,k;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`() => <>
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
  </>`,...(k=(g=s.parameters)==null?void 0:g.docs)==null?void 0:k.source}}};var x,v,j;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`() => {
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
}`,...(j=(v=i.parameters)==null?void 0:v.docs)==null?void 0:j.source}}};const tr=["Preview","WithForm","ShowHideReact"];export{l as Preview,i as ShowHideReact,s as WithForm,tr as __namedExportsOrder,mr as default};
