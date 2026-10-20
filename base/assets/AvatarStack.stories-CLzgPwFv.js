import{j as a}from"./iframe-BQaDMzoJ.js";import{a1 as i,n as e}from"./Dialog-fsmvQvY4.js";import"./shipTypes-hFnSBndP.js";import"./Details-DuifQm54.js";import"./KyvDivider--y7pXPr5.js";import"./KyvSpinner-CsBxI1cI.js";import"./skillingsbuoye-AIycvT8F.js";import"./Logo-BhNJRRiD.js";import{s as o}from"./tooltip-BSP4IHwq.js";import{c}from"./Cat 1-CDyACPiq.js";import{c as d}from"./Cat 2-CSvMt87v.js";import{c as y}from"./Cat 3-BufVA38a.js";import"./preload-helper-Dp1pzeXC.js";import"./color-tokens-DRys5hYJ.js";import"./index-DgnpOpqi.js";import"./index-D-9_luMU.js";const H=""+new URL("Cat 4-CQz1b0oN.jpg",import.meta.url).href,U={title:"Components/AvatarStack",component:i,tags:["autodocs","kyv","beta"],parameters:{layout:"padded"},args:{size:42,gap:2,overlap:16,radius:32},argTypes:{size:{control:{type:"range",min:16,max:128,step:1}},gap:{control:{type:"range",min:0,max:16,step:1}},overlap:{control:{type:"range",min:0,max:128,step:1}},radius:{control:{type:"range",min:0,max:64,step:1}}}},N=a.jsxs(a.Fragment,{children:[a.jsx("li",{children:a.jsx(e,{"aria-label":"Magnus Ekset",initials:"ME"})}),a.jsx("li",{children:a.jsx(e,{"aria-label":"Ola Nordmann",children:a.jsx("img",{src:c,alt:""})})}),a.jsx("li",{children:a.jsx(e,{"aria-label":"Kari Nordmann",children:a.jsx("img",{src:d,alt:""})})}),a.jsx("li",{children:a.jsx(e,{"aria-label":"Anne Hansen",initials:"AH"})}),a.jsx("li",{children:a.jsx(e,{"aria-label":"Per Hansen",initials:"PH"})}),a.jsx("li",{children:a.jsx(e,{"aria-label":"Lise Dahl",initials:"LD"})})]}),p=a.jsxs(a.Fragment,{children:[a.jsx("li",{children:a.jsx(e,{"aria-label":"Ola Nordmann",children:a.jsx("img",{src:c,alt:""})})}),a.jsx("li",{children:a.jsx(e,{"aria-label":"Kari Nordmann",children:a.jsx("img",{src:d,alt:""})})}),a.jsx("li",{children:a.jsx(e,{"aria-label":"Tore Hansen",children:a.jsx("img",{src:y,alt:""})})})]}),T=a.jsxs(a.Fragment,{children:[a.jsx("li",{children:a.jsx(e,{"aria-label":"Magnus Ekset",initials:"ME"})}),a.jsx("li",{children:a.jsx(e,{"aria-label":"Anne Hansen",initials:"AH"})}),a.jsx("li",{children:a.jsx(e,{"aria-label":"Per Hansen",initials:"PH"})}),a.jsx("li",{children:a.jsx(e,{"aria-label":"Lise Dahl",initials:"LD"})})]}),n=r=>a.jsx(i,{...r,children:T}),s=r=>a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--ds-size-6)"},children:[a.jsxs("div",{children:[a.jsx("p",{children:"expandable (hover or focus to expand)"}),a.jsx(i,{...r,expandable:!0,children:p})]}),a.jsxs("div",{children:[a.jsx("p",{children:'expandable="fixed" (width stays constant)'}),a.jsx(i,{...r,expandable:"fixed",children:p})]})]}),t=r=>a.jsxs(i,{...r,"aria-label":"Deltakere i møtet",children:[N,a.jsx("li",{children:"+14"})]}),l=r=>a.jsxs("div",{children:[a.jsx("p",{children:"expandable — tooltip on hover"}),a.jsxs(i,{...r,expandable:!0,"aria-label":"Deltakere i møtet",children:[a.jsx("li",{children:a.jsx(o,{content:"Ola Nordmann",children:a.jsx(e,{"aria-label":"Ola Nordmann",children:a.jsx("img",{src:c,alt:""})})})}),a.jsx("li",{children:a.jsx(o,{content:"Kari Nordmann",children:a.jsx(e,{"aria-label":"Kari Nordmann",children:a.jsx("img",{src:d,alt:""})})})}),a.jsx("li",{children:a.jsx(o,{content:"Anne Hansen",children:a.jsx(e,{"aria-label":"Anne Hansen",children:a.jsx("img",{src:y,alt:""})})})}),a.jsx("li",{children:a.jsx(o,{content:"Per Hansen",children:a.jsx(e,{"aria-label":"Per Hansen",children:a.jsx("img",{src:H,alt:""})})})})]})]});n.__docgenInfo={description:"",methods:[],displayName:"Preview"};s.__docgenInfo={description:"",methods:[],displayName:"Expandable"};t.__docgenInfo={description:"",methods:[],displayName:"WithSuffix"};l.__docgenInfo={description:"",methods:[],displayName:"ExpandableWithTooltips"};var x,m,j;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:"args => <AvatarStack {...args}>{textAvatars}</AvatarStack>",...(j=(m=n.parameters)==null?void 0:m.docs)==null?void 0:j.source}}};var h,v,g;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`args => <div style={{
  display: 'flex',
  flexDirection: 'column',
  gap: 'var(--ds-size-6)'
}}>
    <div>
      <p>expandable (hover or focus to expand)</p>
      <AvatarStack {...args} expandable>
        {imageAvatars}
      </AvatarStack>
    </div>
    <div>
      <p>expandable="fixed" (width stays constant)</p>
      <AvatarStack {...args} expandable="fixed">
        {imageAvatars}
      </AvatarStack>
    </div>
  </div>`,...(g=(v=s.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};var b,A,u;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`args => <AvatarStack {...args} aria-label="Deltakere i møtet">
    {mixedAvatars}
    <li>+14</li>
  </AvatarStack>`,...(u=(A=t.parameters)==null?void 0:A.docs)==null?void 0:u.source}}};var f,k,S;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`args => <div>
    <p>expandable — tooltip on hover</p>
    <AvatarStack {...args} expandable aria-label="Deltakere i møtet">
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
  </div>`,...(S=(k=l.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};const q=["Preview","Expandable","WithSuffix","ExpandableWithTooltips"];export{s as Expandable,l as ExpandableWithTooltips,n as Preview,t as WithSuffix,q as __namedExportsOrder,U as default};
