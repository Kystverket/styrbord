import{j as o}from"./jsx-runtime-BjG_zV1W.js";import{a,B as k}from"./Card-KeqL4nDM.js";import"./Details-8YZFjHTH.js";import"./kyvDivider-DSk0K4x1.js";import"./typography-9ubeq_Vx.js";import"./skillingsbuoye-mzpk6Jp8.js";import"./Logo-CEva0-QL.js";import{within as f,userEvent as y,expect as C}from"./index-DgAF9SIF.js";import{r as T}from"./index-BWu4c2F4.js";import{D as n}from"./index-xa0uT1XH.js";import"./index-B8jaNLVP.js";import"./index-DtgyEQ7Q.js";import"./lite-DaUVFjkg.js";import"./index-BtN5BFRV.js";import"./label-CT_xXrm7.js";import"./heading-B8SX_GYc.js";import"./index-eaWjzoNI.js";import"./popover-trigger-DjnIfo7F.js";const J={title:"Components/Dropdown",component:n,tags:["autodocs","ds"],parameters:{layout:"fullscreen",customStyles:{display:"grid",alignItems:"start",justifyItems:"center",story:{boxSizing:"border-box",width:"100cqw",height:"100cqh",maxWidth:"800px",maxHeight:"800px"}},chromatic:{disableSnapshot:!1},docs:{description:{component:"[Dokumentasjon fra Designsystemet](https://designsystemet.no/no/components/docs/select/overview)"}}},play:async r=>{const e=f(r.canvasElement).getByRole("button");await y.click(e);const B=r.canvasElement.querySelector("[popover]");await C(B).toBeVisible()}},t=r=>o.jsxs(n.TriggerContext,{children:[o.jsx(n.Trigger,{"data-color":r["data-color"],children:"Dropdown"}),o.jsxs(n,{...r,children:[o.jsx(n.Heading,{children:"First heading"}),o.jsxs(n.List,{children:[o.jsx(n.Item,{children:o.jsx(n.Button,{children:"Button 1.1"})}),o.jsx(n.Item,{children:o.jsx(n.Button,{children:"Button 1.2"})})]}),o.jsx(n.Heading,{children:"Second heading"}),o.jsxs(n.List,{children:[o.jsx(n.Item,{children:o.jsx(n.Button,{children:"Button 2.1"})}),o.jsx(n.Item,{children:o.jsx(n.Button,{children:"Button 2.2"})})]})]})]});t.args={placement:"bottom-end"};const s=r=>o.jsxs(n.TriggerContext,{children:[o.jsx(n.Trigger,{children:"Dropdown"}),o.jsx(n,{...r,children:o.jsxs(n.List,{children:[o.jsx(n.Item,{children:o.jsx(n.Button,{asChild:!0,children:o.jsxs("a",{href:"https://github.com/digdir/designsystemet",target:"_blank",rel:"noreferrer",children:[o.jsx(a,{material:"link","aria-hidden":!0}),"Github"]})})}),o.jsx(n.Item,{children:o.jsx(n.Button,{asChild:!0,children:o.jsxs("a",{href:"https://designsystemet.no",target:"_blank",rel:"noreferrer",children:[o.jsx(a,{material:"link","aria-hidden":!0}),"Designsystemet.no"]})})})]})})]}),d=()=>{const[r,e]=T.useState(!1);return o.jsxs(n.TriggerContext,{children:[o.jsxs(n.Trigger,{onClick:()=>e(!r),children:["Dropdown",r?o.jsx(a,{material:"keyboard_arrow_down","aria-hidden":!0}):o.jsx(a,{material:"keyboard_arrow_up","aria-hidden":!0})]}),o.jsx(n,{open:r,onClose:()=>e(!1),children:o.jsxs(n.List,{children:[o.jsx(n.Item,{children:o.jsx(n.Button,{onClick:()=>e(!1),children:"Trykk på meg lukker"})}),o.jsx(n.Item,{children:o.jsx(n.Button,{onClick:()=>e(!1),children:"Eg lukker også"})})]})})]})},i=()=>o.jsxs(o.Fragment,{children:[o.jsx(k,{popovertarget:"dropdown",children:"Dropdown"}),o.jsx(n,{id:"dropdown",children:o.jsx(n.List,{children:o.jsx(n.Item,{children:o.jsx(n.Button,{children:"Item"})})})})]});t.__docgenInfo={description:"",methods:[],displayName:"Preview"};s.__docgenInfo={description:"",methods:[],displayName:"Icons"};d.__docgenInfo={description:"",methods:[],displayName:"Controlled"};i.__docgenInfo={description:"",methods:[],displayName:"WithoutTrigger"};var p,c,l;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`args => {
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
}`,...(l=(c=t.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var m,w,g;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
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
}`,...(g=(w=s.parameters)==null?void 0:w.docs)==null?void 0:g.source}}};var u,D,h;d.parameters={...d.parameters,docs:{...(u=d.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
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
}`,...(h=(D=d.parameters)==null?void 0:D.docs)==null?void 0:h.source}}};var x,j,I;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`() => {
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
}`,...(I=(j=i.parameters)==null?void 0:j.docs)==null?void 0:I.source}}};const K=["Preview","Icons","Controlled","WithoutTrigger"];export{d as Controlled,s as Icons,t as Preview,i as WithoutTrigger,K as __namedExportsOrder,J as default};
