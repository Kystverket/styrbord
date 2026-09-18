import{j as a}from"./iframe-B9-yjDGi.js";import{o as e}from"./Dialog-DpRjgFic.js";import"./shipTypes-hFnSBndP.js";import"./Details-DlH4Y5Bu.js";import"./KyvDivider-CVN2Y6-7.js";import"./typography-lOLIvvUr.js";import"./KyvSpinner-DAFKdaUB.js";import"./skillingsbuoye-BH0NYPEG.js";import"./Logo-CGIJgWOZ.js";import{v as r,q as l}from"./tooltip-U8UQRzWx.js";import{c as o}from"./Cat 1-CDyACPiq.js";import{c}from"./Cat 2-CSvMt87v.js";import{c as S}from"./Cat 3-BufVA38a.js";import"./preload-helper-Dp1pzeXC.js";import"./color-tokens-DRys5hYJ.js";import"./index-wmdR2T-Z.js";import"./index-DET-fz-T.js";const H=""+new URL("Cat 4-CQz1b0oN.jpg",import.meta.url).href,U={title:"Components/AvatarStack",component:r,tags:["autodocs","kyv","beta"],parameters:{layout:"padded"}},E=a.jsxs(a.Fragment,{children:[a.jsx("li",{children:a.jsx(e,{"aria-label":"Magnus Ekset",initials:"ME"})}),a.jsx("li",{children:a.jsx(e,{"aria-label":"Ola Nordmann",children:a.jsx("img",{src:o,alt:""})})}),a.jsx("li",{children:a.jsx(e,{"aria-label":"Kari Nordmann",children:a.jsx("img",{src:c,alt:""})})}),a.jsx("li",{children:a.jsx(e,{"aria-label":"Anne Hansen",initials:"AH"})}),a.jsx("li",{children:a.jsx(e,{"aria-label":"Per Hansen",initials:"PH"})}),a.jsx("li",{children:a.jsx(e,{"aria-label":"Lise Dahl",initials:"LD"})})]}),d=a.jsxs(a.Fragment,{children:[a.jsx("li",{children:a.jsx(e,{"aria-label":"Ola Nordmann",children:a.jsx("img",{src:o,alt:""})})}),a.jsx("li",{children:a.jsx(e,{"aria-label":"Kari Nordmann",children:a.jsx("img",{src:c,alt:""})})}),a.jsx("li",{children:a.jsx(e,{"aria-label":"Tore Hansen",children:a.jsx("img",{src:S,alt:""})})})]}),T=a.jsxs(a.Fragment,{children:[a.jsx("li",{children:a.jsx(e,{"aria-label":"Magnus Ekset",initials:"ME"})}),a.jsx("li",{children:a.jsx(e,{"aria-label":"Anne Hansen",initials:"AH"})}),a.jsx("li",{children:a.jsx(e,{"aria-label":"Per Hansen",initials:"PH"})}),a.jsx("li",{children:a.jsx(e,{"aria-label":"Lise Dahl",initials:"LD"})})]}),i=N=>a.jsx(r,{...N,children:T}),n=()=>a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--ds-size-6)"},children:[a.jsxs("div",{children:[a.jsx("p",{children:"expandable (hover or focus to expand)"}),a.jsx(r,{expandable:!0,children:d})]}),a.jsxs("div",{children:[a.jsx("p",{children:'expandable="fixed" (width stays constant)'}),a.jsx(r,{expandable:"fixed",children:d})]})]}),s=()=>a.jsxs(r,{"aria-label":"Deltakere i møtet",children:[E,a.jsx("li",{children:"+14"})]}),t=()=>a.jsxs("div",{children:[a.jsx("p",{children:"expandable — tooltip on hover"}),a.jsxs(r,{expandable:!0,"aria-label":"Deltakere i møtet",children:[a.jsx("li",{children:a.jsx(l,{content:"Ola Nordmann",children:a.jsx(e,{"aria-label":"Ola Nordmann",children:a.jsx("img",{src:o,alt:""})})})}),a.jsx("li",{children:a.jsx(l,{content:"Kari Nordmann",children:a.jsx(e,{"aria-label":"Kari Nordmann",children:a.jsx("img",{src:c,alt:""})})})}),a.jsx("li",{children:a.jsx(l,{content:"Anne Hansen",children:a.jsx(e,{"aria-label":"Anne Hansen",children:a.jsx("img",{src:S,alt:""})})})}),a.jsx("li",{children:a.jsx(l,{content:"Per Hansen",children:a.jsx(e,{"aria-label":"Per Hansen",children:a.jsx("img",{src:H,alt:""})})})})]})]});i.__docgenInfo={description:"",methods:[],displayName:"Preview"};n.__docgenInfo={description:"",methods:[],displayName:"Expandable"};s.__docgenInfo={description:"",methods:[],displayName:"WithSuffix"};t.__docgenInfo={description:"",methods:[],displayName:"ExpandableWithTooltips"};var x,p,m;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:"args => <AvatarStack {...args}>{textAvatars}</AvatarStack>",...(m=(p=i.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var j,h,v;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`() => <div style={{
  display: 'flex',
  flexDirection: 'column',
  gap: 'var(--ds-size-6)'
}}>
    <div>
      <p>expandable (hover or focus to expand)</p>
      <AvatarStack expandable>{imageAvatars}</AvatarStack>
    </div>
    <div>
      <p>expandable="fixed" (width stays constant)</p>
      <AvatarStack expandable="fixed">{imageAvatars}</AvatarStack>
    </div>
  </div>`,...(v=(h=n.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var b,A,g;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`() => <AvatarStack aria-label="Deltakere i møtet">
    {mixedAvatars}
    <li>+14</li>
  </AvatarStack>`,...(g=(A=s.parameters)==null?void 0:A.docs)==null?void 0:g.source}}};var f,u,k;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`() => <div>
    <p>expandable — tooltip on hover</p>
    <AvatarStack expandable aria-label="Deltakere i møtet">
      <li>
        <Tooltip content="Ola Nordmann">
          <Avatar aria-label="Ola Nordmann">
            <img src={cat1} alt="" />
          </Avatar>
        </Tooltip>
      </li>
      <li>
        <Tooltip content="Kari Nordmann">
          <Avatar aria-label="Kari Nordmann">
            <img src={cat2} alt="" />
          </Avatar>
        </Tooltip>
      </li>
      <li>
        <Tooltip content="Anne Hansen">
          <Avatar aria-label="Anne Hansen">
            <img src={cat3} alt="" />
          </Avatar>
        </Tooltip>
      </li>
      <li>
        <Tooltip content="Per Hansen">
          <Avatar aria-label="Per Hansen">
            <img src={cat4} alt="" />
          </Avatar>
        </Tooltip>
      </li>
    </AvatarStack>
  </div>`,...(k=(u=t.parameters)==null?void 0:u.docs)==null?void 0:k.source}}};const X=["Preview","Expandable","WithSuffix","ExpandableWithTooltips"];export{n as Expandable,t as ExpandableWithTooltips,i as Preview,s as WithSuffix,X as __namedExportsOrder,U as default};
