import{j as o,r as b}from"./iframe-WKIRg0XG.js";import{I as p,B as L}from"./Dialog-D4qjwnD9.js";import"./shipTypes-hFnSBndP.js";import"./Details-CRHO2nlV.js";import"./KyvDivider-L4aYN3Mp.js";import"./typography-DVDzzXfp.js";import"./KyvSpinner-DMTidkHX.js";import"./skillingsbuoye-DkUwV7IG.js";import"./Logo-DF4wfcVh.js";import{c as r}from"./tooltip-Cb0cksK0.js";import{s as v}from"./color-tokens-DRys5hYJ.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BprNiIUZ.js";import"./index-B46LPQkM.js";const{expect:f,userEvent:S,within:E}=__STORYBOOK_MODULE_TEST__,l=[...v],U={title:"Components/Dropdown",component:r,tags:["autodocs","ds"],parameters:{layout:"fullscreen",customStyles:{display:"grid",alignItems:"start",justifyItems:"center",story:{boxSizing:"border-box",width:"100cqw",height:"100cqh",maxWidth:"800px",maxHeight:"800px"}},chromatic:{disableSnapshot:!1},docs:{description:{component:"[Dokumentasjon fra Designsystemet](https://designsystemet.no/no/components/docs/select/overview)"}}},argTypes:{"data-color":{control:"select",options:[...l]}},play:async n=>{const e=E(n.canvasElement).getByRole("button");await S.click(e);const _=n.canvasElement.querySelector("[popover]");await f(_).toBeVisible()}},t=n=>o.jsxs(r.TriggerContext,{children:[o.jsx(r.Trigger,{"data-color":n["data-color"],children:"Dropdown"}),o.jsxs(r,{...n,children:[o.jsx(r.Heading,{children:"First heading"}),o.jsxs(r.List,{children:[o.jsx(r.Item,{children:o.jsx(r.Button,{children:"Button 1.1"})}),o.jsx(r.Item,{children:o.jsx(r.Button,{children:"Button 1.2"})})]}),o.jsx(r.Heading,{children:"Second heading"}),o.jsxs(r.List,{children:[o.jsx(r.Item,{children:o.jsx(r.Button,{children:"Button 2.1"})}),o.jsx(r.Item,{children:o.jsx(r.Button,{children:"Button 2.2"})})]})]})]});t.args={placement:"bottom-end"};const d=n=>o.jsxs(r.TriggerContext,{children:[o.jsx(r.Trigger,{children:"Dropdown"}),o.jsx(r,{...n,children:o.jsxs(r.List,{children:[o.jsx(r.Item,{children:o.jsx(r.Button,{asChild:!0,children:o.jsxs("a",{href:"https://github.com/digdir/designsystemet",target:"_blank",rel:"noreferrer",children:[o.jsx(p,{material:"link","aria-hidden":!0}),"Github"]})})}),o.jsx(r.Item,{children:o.jsx(r.Button,{asChild:!0,children:o.jsxs("a",{href:"https://designsystemet.no",target:"_blank",rel:"noreferrer",children:[o.jsx(p,{material:"link","aria-hidden":!0}),"Designsystemet.no"]})})})]})})]}),i=()=>{const[n,e]=b.useState(!1);return o.jsxs(r.TriggerContext,{children:[o.jsxs(r.Trigger,{onClick:()=>e(!n),children:["Dropdown",n?o.jsx(p,{material:"keyboard_arrow_down","aria-hidden":!0}):o.jsx(p,{material:"keyboard_arrow_up","aria-hidden":!0})]}),o.jsx(r,{open:n,onClose:()=>e(!1),children:o.jsxs(r.List,{children:[o.jsx(r.Item,{children:o.jsx(r.Button,{onClick:()=>e(!1),children:"Trykk på meg lukker"})}),o.jsx(r.Item,{children:o.jsx(r.Button,{onClick:()=>e(!1),children:"Eg lukker også"})})]})})]})},s=()=>o.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 15rem)",gap:"1rem 2rem",gridAutoRows:"13rem"},children:l.map(n=>o.jsxs(r.TriggerContext,{children:[o.jsx(r.Trigger,{"data-color":n,children:n}),o.jsx(r,{"data-color":n,placement:"bottom-start",open:!0,children:o.jsxs(r.List,{children:[o.jsx(r.Item,{children:o.jsx(r.Button,{children:"Val 1"})}),o.jsx(r.Item,{children:o.jsx(r.Button,{children:"Val 2"})})]})})]},n))});s.play=async n=>{const e=n.canvasElement.querySelectorAll("[popover]");await f(e).toHaveLength(l.length)};const a=()=>o.jsxs(o.Fragment,{children:[o.jsx(L,{popovertarget:"dropdown",children:"Dropdown"}),o.jsx(r,{id:"dropdown",children:o.jsx(r.List,{children:o.jsx(r.Item,{children:o.jsx(r.Button,{children:"Item"})})})})]});t.__docgenInfo={description:"",methods:[],displayName:"Preview"};d.__docgenInfo={description:"",methods:[],displayName:"Icons"};i.__docgenInfo={description:"",methods:[],displayName:"Controlled"};s.__docgenInfo={description:"",methods:[{name:"play",docblock:null,modifiers:["static"],params:[{name:"ctx",optional:!1,type:null}],returns:null}],displayName:"Colors"};a.__docgenInfo={description:"",methods:[],displayName:"WithoutTrigger"};var c,m,g;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`args => {
  return <Dropdown.TriggerContext>
      <Dropdown.Trigger data-color={args['data-color']}>Dropdown</Dropdown.Trigger>
      <Dropdown {...args}>
        <Dropdown.Heading>First heading</Dropdown.Heading>
        <Dropdown.List>
          <Dropdown.Item>
            <Dropdown.Button>Button 1.1</Dropdown.Button>
          </Dropdown.Item>
          <Dropdown.Item>
            <Dropdown.Button>Button 1.2</Dropdown.Button>
          </Dropdown.Item>
        </Dropdown.List>
        <Dropdown.Heading>Second heading</Dropdown.Heading>
        <Dropdown.List>
          <Dropdown.Item>
            <Dropdown.Button>Button 2.1</Dropdown.Button>
          </Dropdown.Item>
          <Dropdown.Item>
            <Dropdown.Button>Button 2.2</Dropdown.Button>
          </Dropdown.Item>
        </Dropdown.List>
      </Dropdown>
    </Dropdown.TriggerContext>;
}`,...(g=(m=t.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var w,u,D;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`args => {
  return <Dropdown.TriggerContext>
      <Dropdown.Trigger>Dropdown</Dropdown.Trigger>
      <Dropdown {...args}>
        <Dropdown.List>
          <Dropdown.Item>
            <Dropdown.Button asChild>
              <a href="https://github.com/digdir/designsystemet" target="_blank" rel="noreferrer">
                <Icon material="link" aria-hidden />
                Github
              </a>
            </Dropdown.Button>
          </Dropdown.Item>
          <Dropdown.Item>
            <Dropdown.Button asChild>
              <a href="https://designsystemet.no" target="_blank" rel="noreferrer">
                <Icon material="link" aria-hidden />
                Designsystemet.no
              </a>
            </Dropdown.Button>
          </Dropdown.Item>
        </Dropdown.List>
      </Dropdown>
    </Dropdown.TriggerContext>;
}`,...(D=(u=d.parameters)==null?void 0:u.docs)==null?void 0:D.source}}};var h,x,j;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`() => {
  const [open, setOpen] = useState(false);
  return <Dropdown.TriggerContext>
      <Dropdown.Trigger onClick={() => setOpen(!open)}>
        Dropdown
        {open ? <Icon material="keyboard_arrow_down" aria-hidden /> : <Icon material="keyboard_arrow_up" aria-hidden />}
      </Dropdown.Trigger>
      <Dropdown open={open} onClose={() => setOpen(false)}>
        <Dropdown.List>
          <Dropdown.Item>
            <Dropdown.Button onClick={() => setOpen(false)}>Trykk på meg lukker</Dropdown.Button>
          </Dropdown.Item>
          <Dropdown.Item>
            <Dropdown.Button onClick={() => setOpen(false)}>Eg lukker også</Dropdown.Button>
          </Dropdown.Item>
        </Dropdown.List>
      </Dropdown>
    </Dropdown.TriggerContext>;
}`,...(j=(x=i.parameters)==null?void 0:x.docs)==null?void 0:j.source}}};var I,B,y;s.parameters={...s.parameters,docs:{...(I=s.parameters)==null?void 0:I.docs,source:{originalSource:`() => {
  return <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 15rem)',
    gap: '1rem 2rem',
    // Room below each trigger for the open dropdown, which is positioned absolutely
    gridAutoRows: '13rem'
  }}>
      {colorVariants.map(color => <Dropdown.TriggerContext key={color}>
          <Dropdown.Trigger data-color={color}>{color}</Dropdown.Trigger>
          <Dropdown data-color={color} placement="bottom-start" open>
            <Dropdown.List>
              <Dropdown.Item>
                <Dropdown.Button>Val 1</Dropdown.Button>
              </Dropdown.Item>
              <Dropdown.Item>
                <Dropdown.Button>Val 2</Dropdown.Button>
              </Dropdown.Item>
            </Dropdown.List>
          </Dropdown>
        </Dropdown.TriggerContext>)}
    </div>;
}`,...(y=(B=s.parameters)==null?void 0:B.docs)==null?void 0:y.source}}};var C,T,k;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`() => {
  return <>
      <Button popovertarget="dropdown">Dropdown</Button>
      <Dropdown id="dropdown">
        <Dropdown.List>
          <Dropdown.Item>
            <Dropdown.Button>Item</Dropdown.Button>
          </Dropdown.Item>
        </Dropdown.List>
      </Dropdown>
    </>;
}`,...(k=(T=a.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};const Y=["Preview","Icons","Controlled","Colors","WithoutTrigger"];export{s as Colors,i as Controlled,d as Icons,t as Preview,a as WithoutTrigger,Y as __namedExportsOrder,U as default};
