import{r as i,j as r}from"./iframe-lNRdFShv.js";import{aY as n}from"./Dialog-C8sPYvHF.js";import"./shipTypes-hFnSBndP.js";import"./Details-B-p1ClNh.js";import"./KyvDivider-CoXecebZ.js";import"./KyvSpinner-CCBPLzUi.js";import"./skillingsbuoye-CIYallCL.js";import"./Logo-Do4HbnNI.js";import{P as p}from"./tooltip-BWR0O2Xk.js";import"./preload-helper-Dp1pzeXC.js";import"./color-tokens-BWmLKHwz.js";import"./index-Cx5X4j0R.js";import"./index-4wfFBRc0.js";const d="styrbord-color-scheme",O="(prefers-color-scheme: dark)",S=new Set;let c;function L(e){return e==="light"||e==="dark"}function N(){try{const e=localStorage.getItem(d);return L(e)?e:"system"}catch{return"system"}}function A(){return window.matchMedia(O).matches?"dark":"light"}function _(){const e=c??N();return`${e}:${e==="system"?A():e}`}function I(){return"system:light"}function V(e){S.add(e);const o=window.matchMedia(O);o.addEventListener("change",e);const t=s=>{s.key===d&&(c=L(s.newValue)?s.newValue:"system",e())};return window.addEventListener("storage",t),()=>{S.delete(e),o.removeEventListener("change",e),window.removeEventListener("storage",t)}}function z(e){c=e===A()?"system":e;try{c==="system"?localStorage.removeItem(d):localStorage.setItem(d,c)}catch{}S.forEach(o=>o())}function F(){const e=i.useSyncExternalStore(V,_,I),[o,t]=e.split(":"),s=o==="system";return i.useEffect(()=>{document.documentElement.setAttribute("data-color-scheme",s?"auto":t)},[s,t]),[t,z,s]}const Z={title:"Components/ColorSchemeToggle",component:n,tags:["autodocs","kyv"],args:{colorScheme:"light",onColorSchemeChange:()=>{},variant:"color"},argTypes:{colorScheme:{control:!1},onColorSchemeChange:{control:!1},variant:{control:"inline-radio",options:["color","mono"]}},parameters:{docs:{description:{component:'Rund knapp som bytter mellom lys og mørk modus. I lys modus står sola over havet; i mørk modus synker den bak horisonten og månen og tre stjerner kommer fram. Komponenten er kontrollert — bruk `useColorScheme`. Som standard følger siden systeminnstillingen (`data-color-scheme="auto"` på `<html>`). Velger brukeren noe annet enn systemet, lagres valget i `localStorage` (`styrbord-color-scheme`); velger de det systemet viser, slettes valget og siden følger systemet igjen. Tilgjengelig navn beskriver handlingen («Bytt til mørk modus») og bytter med tilstanden, så knappen har ikke `aria-pressed`. `color` har himmel, hav og gul sol med faste farger; `mono` er et strekikon i `primary-base-default` som følger sidens fargemodus.'}}}},$=()=>window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light",g=({colorScheme:e,children:o})=>r.jsx("div",{"data-color-scheme":e,style:{display:"flex",alignItems:"center",gap:"var(--ds-size-4)",padding:"var(--ds-size-6)",borderRadius:"var(--ds-border-radius-lg)",background:"var(--ds-color-neutral-background-default)",color:"var(--ds-color-neutral-text-default)"},children:o}),l={render:e=>{const[o,t]=i.useState($);return r.jsxs(g,{colorScheme:o,children:[r.jsx(n,{...e,colorScheme:o,onColorSchemeChange:t}),r.jsxs(p,{children:["Fargemodus: ",o]})]})}},m={render:()=>{const[e,o]=i.useState($);return r.jsxs(g,{colorScheme:e,children:[r.jsx(n,{colorScheme:e,onColorSchemeChange:o,variant:"color"}),r.jsx(n,{colorScheme:e,onColorSchemeChange:o,variant:"mono"})]})}},h={render:()=>{const e=()=>{};return r.jsx("div",{style:{display:"grid",gap:"var(--ds-size-4)"},children:["light","dark"].map(o=>r.jsxs(g,{colorScheme:o,children:[r.jsx(n,{colorScheme:o,onColorSchemeChange:e,variant:"color"}),r.jsx(n,{colorScheme:o,onColorSchemeChange:e,variant:"mono"}),r.jsx(p,{children:o})]},o))})}},a={render:e=>{const[o,t,s]=F();return r.jsxs(g,{colorScheme:o,children:[r.jsx(n,{...e,colorScheme:o,onColorSchemeChange:t}),r.jsx(p,{children:s?`Følger systemet (${o}).`:`Lagret valg: ${o}. Last siden på nytt — valget blir stående.`})]})}};var u,y,C;l.parameters={...l.parameters,docs:{...(u=l.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => {
    const [colorScheme, setColorScheme] = useState<ColorScheme>(systemScheme); // NOSONAR - Storybook render fungerer som en React-komponent, hooks er gyldige her
    return <Page colorScheme={colorScheme}>
        <ColorSchemeToggle {...args} colorScheme={colorScheme} onColorSchemeChange={setColorScheme} />
        <Paragraph>Fargemodus: {colorScheme}</Paragraph>
      </Page>;
  }
}`,...(C=(y=l.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};var f,v,k;m.parameters={...m.parameters,docs:{...(f=m.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => {
    const [colorScheme, setColorScheme] = useState<ColorScheme>(systemScheme); // NOSONAR - Storybook render fungerer som en React-komponent, hooks er gyldige her
    return <Page colorScheme={colorScheme}>
        <ColorSchemeToggle colorScheme={colorScheme} onColorSchemeChange={setColorScheme} variant="color" />
        <ColorSchemeToggle colorScheme={colorScheme} onColorSchemeChange={setColorScheme} variant="mono" />
      </Page>;
  }
}`,...(k=(v=m.parameters)==null?void 0:v.docs)==null?void 0:k.source}}};var w,x,b;h.parameters={...h.parameters,docs:{...(w=h.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => {
    const noop = () => {};
    return <div style={{
      display: 'grid',
      gap: 'var(--ds-size-4)'
    }}>
        {(['light', 'dark'] as const).map(scheme => <Page key={scheme} colorScheme={scheme}>
            <ColorSchemeToggle colorScheme={scheme} onColorSchemeChange={noop} variant="color" />
            <ColorSchemeToggle colorScheme={scheme} onColorSchemeChange={noop} variant="mono" />
            <Paragraph>{scheme}</Paragraph>
          </Page>)}
      </div>;
  }
}`,...(b=(x=h.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var j,P,E,R,T;a.parameters={...a.parameters,docs:{...(j=a.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: args => {
    const [colorScheme, setColorScheme, followsSystem] = useColorScheme(); // NOSONAR - Storybook render fungerer som en React-komponent, hooks er gyldige her
    return <Page colorScheme={colorScheme}>
        <ColorSchemeToggle {...args} colorScheme={colorScheme} onColorSchemeChange={setColorScheme} />
        <Paragraph>
          {followsSystem ? \`Følger systemet (\${colorScheme}).\` : \`Lagret valg: \${colorScheme}. Last siden på nytt — valget blir stående.\`}
        </Paragraph>
      </Page>;
  }
}`,...(E=(P=a.parameters)==null?void 0:P.docs)==null?void 0:E.source},description:{story:"With `useColorScheme` the page follows the system until the user picks the other scheme. That choice\nsurvives a reload; picking what the system shows clears it and the page follows the system again.",...(T=(R=a.parameters)==null?void 0:R.docs)==null?void 0:T.description}}};const ee=["Preview","Variants","AllStates","WithHook"];export{h as AllStates,l as Preview,m as Variants,a as WithHook,ee as __namedExportsOrder,Z as default};
