import{r as a,j as o}from"./iframe-lNRdFShv.js";import{B as c,I as m}from"./Dialog-C8sPYvHF.js";import"./shipTypes-hFnSBndP.js";import"./Details-B-p1ClNh.js";import"./KyvDivider-CoXecebZ.js";import"./KyvSpinner-CCBPLzUi.js";import"./skillingsbuoye-CIYallCL.js";import"./Logo-Do4HbnNI.js";import{e as n}from"./tooltip-BWR0O2Xk.js";import{s as T}from"./color-tokens-BWmLKHwz.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Cx5X4j0R.js";import"./index-4wfFBRc0.js";const{expect:L,userEvent:S,within:E}=__STORYBOOK_MODULE_TEST__,u=[...T],K={title:"Components/Dropdown",component:n,tags:["autodocs","ds"],parameters:{layout:"fullscreen",customStyles:{display:"grid",alignItems:"start",justifyItems:"center",story:{boxSizing:"border-box",width:"100cqw",height:"100cqh",maxWidth:"800px",maxHeight:"800px"}},chromatic:{disableSnapshot:!1},docs:{description:{component:"[Dokumentasjon fra Designsystemet](https://designsystemet.no/no/components/docs/select/overview)"}}},argTypes:{"data-color":{control:"select",options:[...u]}},play:async r=>{const e=E(r.canvasElement).getByRole("button");await S.click(e);const t=r.canvasElement.querySelector("[popover]");await L(t).toBeVisible()}},s=r=>{const e=a.useId();return o.jsxs(o.Fragment,{children:[o.jsx(c,{popoverTarget:e,"data-color":r["data-color"],children:"Dropdown"}),o.jsxs(n,{...r,id:e,children:[o.jsx(n.Heading,{children:"First heading"}),o.jsxs(n.List,{children:[o.jsx(n.Item,{children:o.jsx(n.Button,{children:"Button 1.1"})}),o.jsx(n.Item,{children:o.jsx(n.Button,{children:"Button 1.2"})})]}),o.jsx(n.Heading,{children:"Second heading"}),o.jsxs(n.List,{children:[o.jsx(n.Item,{children:o.jsx(n.Button,{children:"Button 2.1"})}),o.jsx(n.Item,{children:o.jsx(n.Button,{children:"Button 2.2"})})]})]})]})};s.args={placement:"bottom-end"};const i=r=>{const e=a.useId();return o.jsxs(o.Fragment,{children:[o.jsx(c,{popoverTarget:e,children:"Dropdown"}),o.jsx(n,{...r,id:e,children:o.jsxs(n.List,{children:[o.jsx(n.Item,{children:o.jsx(n.Button,{asChild:!0,children:o.jsxs("a",{href:"https://github.com/digdir/designsystemet",target:"_blank",rel:"noreferrer",children:[o.jsx(m,{material:"link","aria-hidden":!0}),"Github"]})})}),o.jsx(n.Item,{children:o.jsx(n.Button,{asChild:!0,children:o.jsxs("a",{href:"https://designsystemet.no",target:"_blank",rel:"noreferrer",children:[o.jsx(m,{material:"link","aria-hidden":!0}),"Designsystemet.no"]})})})]})})]})},p=()=>{const r=a.useId(),[e,t]=a.useState(!1);return o.jsxs(o.Fragment,{children:[o.jsxs(c,{popoverTarget:r,onClick:()=>t(!e),children:["Dropdown",e?o.jsx(m,{material:"keyboard_arrow_down","aria-hidden":!0}):o.jsx(m,{material:"keyboard_arrow_up","aria-hidden":!0})]}),o.jsx(n,{id:r,open:e,onClose:()=>t(!1),children:o.jsxs(n.List,{children:[o.jsx(n.Item,{children:o.jsx(n.Button,{onClick:()=>t(!1),children:"Trykk på meg lukker"})}),o.jsx(n.Item,{children:o.jsx(n.Button,{onClick:()=>t(!1),children:"Eg lukker også"})})]})})]})},d=()=>{const r=a.useId();return o.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 15rem)",gap:"1rem 2rem",gridAutoRows:"13rem"},children:u.map(e=>o.jsxs(a.Fragment,{children:[o.jsx(c,{popoverTarget:`${r}-${e}`,"data-color":e,children:e}),o.jsx(n,{id:`${r}-${e}`,"data-color":e,placement:"bottom-start",open:!0,children:o.jsxs(n.List,{"data-color":"neutral",children:[o.jsx(n.Item,{children:o.jsx(n.Button,{children:"Val 1"})}),o.jsx(n.Item,{children:o.jsx(n.Button,{children:"Val 2"})})]})})]},e))})};d.play=async r=>{const e=r.canvasElement.querySelectorAll("[popover]");await L(e).toHaveLength(u.length)};const l=()=>o.jsxs(o.Fragment,{children:[o.jsx(c,{popovertarget:"dropdown",children:"Dropdown"}),o.jsx(n,{id:"dropdown",children:o.jsx(n.List,{children:o.jsx(n.Item,{children:o.jsx(n.Button,{children:"Item"})})})})]});s.__docgenInfo={description:"",methods:[],displayName:"Preview"};i.__docgenInfo={description:"",methods:[],displayName:"Icons"};p.__docgenInfo={description:"",methods:[],displayName:"Controlled"};d.__docgenInfo={description:"",methods:[{name:"play",docblock:null,modifiers:["static"],params:[{name:"ctx",optional:!1,type:null}],returns:null}],displayName:"Colors"};l.__docgenInfo={description:"",methods:[],displayName:"WithoutTrigger"};var w,h,g;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`args => {
  const id = useId();
  return <>
      <Button popoverTarget={id} data-color={args['data-color']}>
        Dropdown
      </Button>
      <Dropdown {...args} id={id}>
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
    </>;
}`,...(g=(h=s.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var D,x,I;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`args => {
  const id = useId();
  return <>
      <Button popoverTarget={id}>Dropdown</Button>
      <Dropdown {...args} id={id}>
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
    </>;
}`,...(I=(x=i.parameters)==null?void 0:x.docs)==null?void 0:I.source}}};var j,B,y;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`() => {
  const id = useId();
  const [open, setOpen] = useState(false);
  return <>
      <Button popoverTarget={id} onClick={() => setOpen(!open)}>
        Dropdown
        {open ? <Icon material="keyboard_arrow_down" aria-hidden /> : <Icon material="keyboard_arrow_up" aria-hidden />}
      </Button>
      <Dropdown id={id} open={open} onClose={() => setOpen(false)}>
        <Dropdown.List>
          <Dropdown.Item>
            <Dropdown.Button onClick={() => setOpen(false)}>Trykk på meg lukker</Dropdown.Button>
          </Dropdown.Item>
          <Dropdown.Item>
            <Dropdown.Button onClick={() => setOpen(false)}>Eg lukker også</Dropdown.Button>
          </Dropdown.Item>
        </Dropdown.List>
      </Dropdown>
    </>;
}`,...(y=(B=p.parameters)==null?void 0:B.docs)==null?void 0:y.source}}};var k,f,_;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`() => {
  const id = useId();
  return <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 15rem)',
    gap: '1rem 2rem',
    // Room below each trigger for the open dropdown, which is positioned absolutely
    gridAutoRows: '13rem'
  }}>
      {colorVariants.map(color => <Fragment key={color}>
          <Button popoverTarget={\`\${id}-\${color}\`} data-color={color}>
            {color}
          </Button>
          <Dropdown id={\`\${id}-\${color}\`} data-color={color} placement="bottom-start" open>
            <Dropdown.List data-color="neutral">
              <Dropdown.Item>
                <Dropdown.Button>Val 1</Dropdown.Button>
              </Dropdown.Item>
              <Dropdown.Item>
                <Dropdown.Button>Val 2</Dropdown.Button>
              </Dropdown.Item>
            </Dropdown.List>
          </Dropdown>
        </Fragment>)}
    </div>;
}`,...(_=(f=d.parameters)==null?void 0:f.docs)==null?void 0:_.source}}};var b,v,C;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`() => {
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
}`,...(C=(v=l.parameters)==null?void 0:v.docs)==null?void 0:C.source}}};const M=["Preview","Icons","Controlled","Colors","WithoutTrigger"];export{d as Colors,p as Controlled,i as Icons,s as Preview,l as WithoutTrigger,M as __namedExportsOrder,K as default};
