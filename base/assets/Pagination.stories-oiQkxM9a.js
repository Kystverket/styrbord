import{j as a}from"./jsx-runtime-BjG_zV1W.js";import"./Card-KeqL4nDM.js";import"./Details-8YZFjHTH.js";import"./kyvDivider-DSk0K4x1.js";import"./typography-9ubeq_Vx.js";import"./skillingsbuoye-mzpk6Jp8.js";import"./Logo-CEva0-QL.js";import{P as n,u as v}from"./index-7YueyGDK.js";import"./index-BWu4c2F4.js";import"./index-B8jaNLVP.js";import"./index-DtgyEQ7Q.js";import"./lite-DaUVFjkg.js";import"./index-BtN5BFRV.js";import"./label-CT_xXrm7.js";import"./heading-B8SX_GYc.js";import"./index-eaWjzoNI.js";const{useArgs:y}=__STORYBOOK_MODULE_PREVIEW_API__,R={title:"Components/Pagination",component:n,tags:["autodocs","ds"],parameters:{docs:{description:{component:"[Dokumentasjon fra Designsystemet](https://designsystemet.no/no/components/docs/pagination/overview)"}}}},e=()=>a.jsx(n,{children:a.jsxs(n.List,{children:[a.jsx(n.Item,{children:a.jsx(n.Button,{"aria-label":"Forrige side","data-variant":"tertiary",children:"Forrige"})}),a.jsx(n.Item,{children:a.jsx(n.Button,{"aria-label":"Side 1","data-variant":"tertiary",children:"1"})}),a.jsx(n.Item,{children:a.jsx(n.Button,{"aria-label":"Side 2","data-variant":"primary",children:"2"})}),a.jsx(n.Item,{}),a.jsx(n.Item,{children:a.jsx(n.Button,{"aria-label":"Side 9","data-variant":"tertiary",children:"9"})}),a.jsx(n.Item,{children:a.jsx(n.Button,{"aria-label":"Side 10","data-variant":"tertiary",children:"10"})}),a.jsx(n.Item,{children:a.jsx(n.Button,{"aria-label":"Neste side","data-variant":"tertiary",children:"Neste"})})]})}),i=p=>{const[,h]=y(),{pages:I,nextButtonProps:B,prevButtonProps:x}=v({...p,setCurrentPage:t=>h({currentPage:t})});return a.jsx(n,{"aria-label":"Sidenavigering",children:a.jsxs(n.List,{children:[a.jsx(n.Item,{children:a.jsx(n.Button,{asChild:!0,"aria-label":"Forrige side",...x,children:a.jsx("a",{href:"#forrige-side",children:"Forrige"})})}),I.map(({page:t,itemKey:j,buttonProps:b})=>a.jsx(n.Item,{children:typeof t=="number"&&a.jsx(n.Button,{asChild:!0,"aria-label":`Side ${t}`,...b,children:a.jsx("a",{href:`#side-${t}`,children:t})})},j)),a.jsx(n.Item,{children:a.jsx(n.Button,{asChild:!0,"aria-label":"Neste side",...B,children:a.jsx("a",{href:"#neste-side",children:"Neste"})})})]})})};i.args={currentPage:2,onChange:console.log,totalPages:10,showPages:7};const r=()=>a.jsx(n,{children:a.jsxs(n.List,{children:[a.jsx(n.Item,{children:a.jsx(n.Button,{"aria-label":"Forrige side","data-variant":"tertiary"})}),a.jsx(n.Item,{children:a.jsx(n.Button,{"aria-label":"Side 2","data-variant":"tertiary",children:"2"})}),a.jsx(n.Item,{children:a.jsx(n.Button,{"aria-label":"Side 3",children:"3"})}),a.jsx(n.Item,{children:a.jsx(n.Button,{"aria-label":"Side 4","data-variant":"tertiary",children:"4"})}),a.jsx(n.Item,{children:a.jsx(n.Button,{"aria-label":"Neste side","data-variant":"tertiary"})})]})});e.__docgenInfo={description:"",methods:[],displayName:"Preview"};i.__docgenInfo={description:"",methods:[],displayName:"WithAnchor"};r.__docgenInfo={description:"",methods:[],displayName:"Mobile"};var o,s,d;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`() => {
  return <Pagination>
      <Pagination.List>
        <Pagination.Item>
          <Pagination.Button aria-label="Forrige side" data-variant="tertiary">
            Forrige
          </Pagination.Button>
        </Pagination.Item>

        <Pagination.Item>
          <Pagination.Button aria-label="Side 1" data-variant="tertiary">
            1
          </Pagination.Button>
        </Pagination.Item>

        <Pagination.Item>
          <Pagination.Button aria-label="Side 2" data-variant="primary">
            2
          </Pagination.Button>
        </Pagination.Item>

        <Pagination.Item />

        <Pagination.Item>
          <Pagination.Button aria-label="Side 9" data-variant="tertiary">
            9
          </Pagination.Button>
        </Pagination.Item>

        <Pagination.Item>
          <Pagination.Button aria-label="Side 10" data-variant="tertiary">
            10
          </Pagination.Button>
        </Pagination.Item>

        <Pagination.Item>
          <Pagination.Button aria-label="Neste side" data-variant="tertiary">
            Neste
          </Pagination.Button>
        </Pagination.Item>
      </Pagination.List>
    </Pagination>;
}`,...(d=(s=e.parameters)==null?void 0:s.docs)==null?void 0:d.source}}};var g,l,m;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`args => {
  const [, updateArgs] = useArgs();
  const {
    pages,
    nextButtonProps,
    prevButtonProps
  } = usePagination({
    ...args,
    setCurrentPage: currentPage => updateArgs({
      currentPage
    })
  });
  return <Pagination aria-label="Sidenavigering">
      <Pagination.List>
        <Pagination.Item>
          <Pagination.Button asChild aria-label="Forrige side" {...prevButtonProps}>
            <a href="#forrige-side">Forrige</a>
          </Pagination.Button>
        </Pagination.Item>
        {pages.map(({
        page,
        itemKey,
        buttonProps
      }) => <Pagination.Item key={itemKey}>
            {typeof page === 'number' && <Pagination.Button asChild aria-label={\`Side \${page}\`} {...buttonProps}>
                <a href={\`#side-\${page}\`}>{page}</a>
              </Pagination.Button>}
          </Pagination.Item>)}
        <Pagination.Item>
          <Pagination.Button asChild aria-label="Neste side" {...nextButtonProps}>
            <a href="#neste-side">Neste</a>
          </Pagination.Button>
        </Pagination.Item>
      </Pagination.List>
    </Pagination>;
}`,...(m=(l=i.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var P,c,u;r.parameters={...r.parameters,docs:{...(P=r.parameters)==null?void 0:P.docs,source:{originalSource:`() => <Pagination>
    <Pagination.List>
      <Pagination.Item>
        <Pagination.Button aria-label="Forrige side" data-variant="tertiary" />
      </Pagination.Item>

      <Pagination.Item>
        <Pagination.Button aria-label="Side 2" data-variant="tertiary">
          2
        </Pagination.Button>
      </Pagination.Item>

      <Pagination.Item>
        <Pagination.Button aria-label="Side 3">3</Pagination.Button>
      </Pagination.Item>

      <Pagination.Item>
        <Pagination.Button aria-label="Side 4" data-variant="tertiary">
          4
        </Pagination.Button>
      </Pagination.Item>

      <Pagination.Item>
        <Pagination.Button aria-label="Neste side" data-variant="tertiary" />
      </Pagination.Item>
    </Pagination.List>
  </Pagination>`,...(u=(c=r.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};const k=["Preview","WithAnchor","Mobile"];export{r as Mobile,e as Preview,i as WithAnchor,k as __namedExportsOrder,R as default};
