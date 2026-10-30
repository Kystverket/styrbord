import{S as F,j as e,r as m}from"./iframe-MOqJ1xnB.js";import{I as t,S as i,f as _,i as v}from"./Dialog-CEDqKSvJ.js";import"./shipTypes-hFnSBndP.js";import"./Details-DnWS4mw5.js";import"./KyvDivider-DAp63iEE.js";import"./KyvSpinner-C9ur4cGV.js";import"./skillingsbuoye-COYiTdHv.js";import"./Logo-DNokL_1V.js";import{P as s}from"./tooltip-Clv1VWko.js";import{s as E,a as N}from"./color-tokens-DRys5hYJ.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DGI-B7AG.js";import"./index-Bh96P0qC.js";const Q={title:"Helpers/Icon",component:t,decorators:[F],tags:["autodocs","kyv"],argTypes:{}},L={arrow_back:"Navigerer tilbake",arrow_right_alt:"Navigerer framover, indikere at handlingen vil føre til en annen side eller visning",content_copy:"Kopierer eller dupliserer"},p=["2xs","xs","sm","md","lg","xl","2xl","3xl"],o=[...E,...N],c=()=>e.jsx("table",{children:v.map((r,a)=>e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"1rem"},children:e.jsx(t,{material:r})}),e.jsxs("td",{style:{padding:"0.5rem"},children:[e.jsx(s,{"data-weight":"medium",children:r}),e.jsx(s,{"data-size":"sm",children:L[r]})]}),e.jsx("td",{style:{padding:"0rem"},children:e.jsx(t,{material:r,background:o[a%o.length],title:o[a%o.length]})}),e.jsx("td",{style:{padding:"0.5rem"},children:o[a%o.length]})]},r))}),d=()=>e.jsx("table",{children:p.map(r=>e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"0.5rem",textAlign:"center"},children:e.jsx(t,{size:r,material:"anchor"})}),e.jsx("td",{style:{padding:"0.5rem",textAlign:"center"},children:e.jsx(t,{size:r,material:"anchor",background:"lyng"})}),e.jsxs("td",{style:{padding:"0.5rem"},children:['size="',r,'" ',r==="md"?"(default)":""]})]},r))}),l=()=>e.jsx(i,{gap:4,children:p.map(r=>e.jsx(m.Fragment,{children:["description","mail","water"].map(a=>e.jsx(i,{gap:1,p:1,children:["bottom-right","bottom-left","top-right","top-left"].map(g=>e.jsx(m.Fragment,{children:e.jsxs(i,{horizontal:!0,gap:4,align:"center",p:2,children:[e.jsx(t,{size:r,material:a,background:"hav"}),["arrow_back","arrow_forward","mail","person","add","delete"].map(h=>e.jsx(m.Fragment,{children:e.jsx(t,{size:r,material:a,indicator:h,indicatorPosition:g,background:"lyng"})},r+a+h))]})},r+a+g))},r+a))},r))}),T=["svg","gif","webp"],n=({file:r})=>e.jsxs(i,{gap:6,children:[e.jsxs(i,{gap:1,children:[e.jsx(s,{"data-weight":"medium",children:"Sizes"}),e.jsx(s,{"data-size":"sm",children:"Try to change file in story"})]}),e.jsxs(i,{horizontal:!0,gap:4,align:"center",children:[p.map(a=>e.jsx(t,{size:a,file:r},a)),e.jsx(t,{size:"lg",file:r,background:"lyng"})]}),e.jsx(s,{"data-weight":"medium",children:"Examples:"}),e.jsx(i,{gap:2,children:[..._,...T].map(a=>e.jsxs(i,{horizontal:!0,gap:3,align:"center",children:[e.jsx(t,{size:"xl",file:a}),e.jsx(s,{children:a})]},a))})]});n.args={file:"pdf"};n.argTypes={file:{control:"text",description:`Try these file extensions: ${_.join(", ")}. Longer ones get their usual short form (docx → DOC, json → JSO); anything else is cut to three characters.`}};c.__docgenInfo={description:"",methods:[],displayName:"IconShowcase"};d.__docgenInfo={description:"",methods:[],displayName:"IconSizing"};l.__docgenInfo={description:"",methods:[],displayName:"IconIndicator"};n.__docgenInfo={description:"",methods:[],displayName:"IconFile"};var u,x,f;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
  return <table>
      {iconIdList.map((iconId, index) => <tr key={iconId}>
          <td style={{
        padding: '1rem'
      }}>
            <Icon material={iconId} />
          </td>
          <td style={{
        padding: '0.5rem'
      }}>
            <Paragraph data-weight="medium">{iconId}</Paragraph>
            <Paragraph data-size="sm">{iconDescriptions[iconId]}</Paragraph>
          </td>
          <td style={{
        padding: '0rem'
      }}>
            <Icon material={iconId} background={colors[index % colors.length]} title={colors[index % colors.length]} />
          </td>
          <td style={{
        padding: '0.5rem'
      }}>{colors[index % colors.length]}</td>
        </tr>)}
    </table>;
}`,...(f=(x=c.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var I,y,j;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`() => {
  return <table>
      {sizes.map(size => <tr key={size}>
          <td style={{
        padding: '0.5rem',
        textAlign: 'center'
      }}>
            <Icon size={size} material="anchor" />
          </td>
          <td style={{
        padding: '0.5rem',
        textAlign: 'center'
      }}>
            <Icon size={size} material="anchor" background="lyng" />
          </td>
          <td style={{
        padding: '0.5rem'
      }}>
            size="{size}" {size === 'md' ? '(default)' : ''}
          </td>
        </tr>)}
    </table>;
}`,...(j=(y=d.parameters)==null?void 0:y.docs)==null?void 0:j.source}}};var z,S,b;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`() => {
  return <Surface gap={4}>
      {sizes.map(size => <Fragment key={size}>
          {(['description', 'mail', 'water'] as IconId[]).map(iconId => <Surface gap={1} p={1} key={size + iconId}>
              {(['bottom-right', 'bottom-left', 'top-right', 'top-left'] as const).map(indicatorPosition => <Fragment key={size + iconId + indicatorPosition}>
                  <Surface horizontal gap={4} align="center" p={2}>
                    <Icon size={size} material={iconId} background="hav" />
                    {(['arrow_back', 'arrow_forward', 'mail', 'person', 'add', 'delete'] as IconId[]).map(indicatorId => <Fragment key={size + iconId + indicatorId}>
                          <Icon size={size} material={iconId} indicator={indicatorId} indicatorPosition={indicatorPosition} background="lyng" />
                        </Fragment>)}
                  </Surface>
                </Fragment>)}
            </Surface>)}
        </Fragment>)}
    </Surface>;
}`,...(b=(S=l.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var k,w,P;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`({
  file
}) => {
  return <Surface gap={6}>
      <Surface gap={1}>
        <Paragraph data-weight="medium">Sizes</Paragraph>
        <Paragraph data-size="sm">Try to change file in story</Paragraph>
      </Surface>
      <Surface horizontal gap={4} align="center">
        {sizes.map(size => <Icon key={size} size={size} file={file} />)}
        <Icon size="lg" file={file} background="lyng" />
      </Surface>
      <Paragraph data-weight="medium">Examples:</Paragraph>
      <Surface gap={2}>
        {[...fileIconIdList, ...otherFileExamples].map(id => <Surface key={id} horizontal gap={3} align="center">
            <Icon size="xl" file={id} />
            <Paragraph>{id}</Paragraph>
          </Surface>)}
      </Surface>
    </Surface>;
}`,...(P=(w=n.parameters)==null?void 0:w.docs)==null?void 0:P.source}}};const U=["IconShowcase","IconSizing","IconIndicator","IconFile"];export{n as IconFile,l as IconIndicator,c as IconShowcase,d as IconSizing,U as __namedExportsOrder,Q as default};
