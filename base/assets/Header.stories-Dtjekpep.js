import{S as nr,j as o}from"./iframe-D4mIml8x.js";import{H as ar,a as or}from"./Dialog-rOcMemAx.js";import"./preload-helper-Dp1pzeXC.js";import"./tooltip-yGjSZFEg.js";import"./index-CrmYDhwh.js";import"./index-aCR1m0dD.js";import"./shipTypes-hFnSBndP.js";import"./Details-BkuytDIo.js";import"./KyvDivider-DxqKKSIk.js";import"./KyvSpinner-DSW0Dhhn.js";import"./skillingsbuoye-BAIpU4PV.js";import"./Logo-CJ3avd7n.js";import"./color-tokens-DRys5hYJ.js";const fr={title:"Page/Header",component:ar,decorators:[nr],tags:["autodocs","kyv"],argTypes:{logo:{control:{type:"object"}}}},er={logo:{product:"Saksbehandling",url:"/"},applications:[{id:"sak",name:"Saksbehandling",icon:"data_table"},{id:"is",name:"Ismelding",icon:"severe_cold"},{id:"hoer",name:"Høring",icon:"export_notes"},{id:"dev",name:"Utvikling",icon:"anchor"}],links:[{applicationId:"sak",position:"main",label:"Arbeidsliste",url:"#"},{applicationId:"sak",position:"main",label:"Alle saker",url:"#"},{applicationId:"dev",position:"main",label:"Innsendinger",url:"#"},{applicationId:"dev",position:"main",label:"Tilbakemeldinger",url:"#"},{applicationId:"hoer",position:"main",label:"Høring",url:"#"},{applicationId:"is",position:"main",label:"Ismelding",url:"#"},{position:"main",label:"Saksbehandlere",url:"#"},{position:"profile",icon:"person",label:"Min side",url:"#"}],profile:{name:"Ola Nordmann",department:"Hav- og kystforvaltning"},logoutHandler:()=>alert("Logger ut")},n={args:er,decorators:[e=>o.jsx("div",{style:{marginBottom:"150px"},children:o.jsx(or.Provider,{value:{applicationId:"sak"},children:o.jsx(e,{})})})]},a={args:er,decorators:[e=>o.jsx("div",{style:{marginBottom:"150px"},children:o.jsx(or.Provider,{value:{applicationId:"dev"},children:o.jsx(e,{})})})]},r={logo:{url:"#"}},t={args:{...r,logo:{...r.logo}}},s={args:{...r,logo:{...r.logo,title:"Styrbord"}}},l={args:{...r,logo:{...r.logo,product:"Datakatalog"}}},i={args:{...r,logo:{...r.logo,product:"Fyr"}}},d={args:{...r,logo:{...r.logo,product:"Historisk AIS"}}},p={args:{...r,logo:{...r.logo,product:"Maritim Sikring"}}},c={args:{...r,logo:{...r.logo,product:"Selvbetjening"}}},g={args:{...r,links:[{icon:"anchor",label:"Kystverket",url:"https://kystverket.no"},{icon:"settings",label:"Settings",url:"#"}],profile:{name:"Ola Nordmann",department:"Hav- og kystforvaltning"},logoutHandler:()=>alert("Logger ut")},decorators:[e=>o.jsx("div",{style:{marginBottom:"300px"},children:o.jsx(e,{})})]},m={args:{...r,links:[{icon:"anchor",label:"Kystverket",url:"https://kystverket.no"},{icon:"settings",label:"Settings",url:"#"}],logoutHandler:()=>alert("Logger ut")}},u={args:{...r,profile:{name:"Ola Nordmann",department:"Hav- og kystforvaltning"}},decorators:[e=>o.jsx("div",{style:{marginBottom:"150px"},children:o.jsx(e,{})})]},k={args:{...r,links:[...r.links||[],{position:"profile",icon:"anchor",label:"Kystverket",url:"https://kystverket.no"},{position:"profile",icon:"settings",label:"Settings",url:"#"}],profile:{name:"Ola Nordmann"},logoutHandler:()=>alert("Logger ut")},decorators:[e=>o.jsx("div",{style:{marginBottom:"300px"},children:o.jsx(e,{})})]};var v,y,f;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: saksbehandlingMeny,
  decorators: [Story => <div style={{
    marginBottom: '150px'
  }}>
        <ApplicationHeaderContext.Provider value={{
      applicationId: 'sak'
    }}>
          <Story />
        </ApplicationHeaderContext.Provider>
      </div>]
}`,...(f=(y=n.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var S,b,P;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: saksbehandlingMeny,
  decorators: [Story => <div style={{
    marginBottom: '150px'
  }}>
        <ApplicationHeaderContext.Provider value={{
      applicationId: 'dev'
    }}>
          <Story />
        </ApplicationHeaderContext.Provider>
      </div>]
}`,...(P=(b=a.parameters)==null?void 0:b.docs)==null?void 0:P.source}}};var h,x,H;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    logo: {
      ...defaultProps.logo
    }
  }
}`,...(H=(x=t.parameters)==null?void 0:x.docs)==null?void 0:H.source}}};var j,I,A;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    logo: {
      ...defaultProps.logo,
      title: 'Styrbord'
    }
  }
}`,...(A=(I=s.parameters)==null?void 0:I.docs)==null?void 0:A.source}}};var M,B,O;l.parameters={...l.parameters,docs:{...(M=l.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    logo: {
      ...defaultProps.logo,
      product: 'Datakatalog'
    }
  }
}`,...(O=(B=l.parameters)==null?void 0:B.docs)==null?void 0:O.source}}};var L,K,N;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    logo: {
      ...defaultProps.logo,
      product: 'Fyr'
    }
  }
}`,...(N=(K=i.parameters)==null?void 0:K.docs)==null?void 0:N.source}}};var C,D,_;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    logo: {
      ...defaultProps.logo,
      product: 'Historisk AIS'
    }
  }
}`,...(_=(D=d.parameters)==null?void 0:D.docs)==null?void 0:_.source}}};var F,U,E;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    logo: {
      ...defaultProps.logo,
      product: 'Maritim Sikring'
    }
  }
}`,...(E=(U=p.parameters)==null?void 0:U.docs)==null?void 0:E.source}}};var T,R,q;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    logo: {
      ...defaultProps.logo,
      product: 'Selvbetjening'
    }
  }
}`,...(q=(R=c.parameters)==null?void 0:R.docs)==null?void 0:q.source}}};var w,z,G;g.parameters={...g.parameters,docs:{...(w=g.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    links: [{
      icon: 'anchor',
      label: 'Kystverket',
      url: 'https://kystverket.no'
    }, {
      icon: 'settings',
      label: 'Settings',
      url: '#'
    }],
    profile: {
      name: 'Ola Nordmann',
      department: 'Hav- og kystforvaltning'
    },
    logoutHandler: () => alert('Logger ut')
  },
  decorators: [Story => <div style={{
    marginBottom: '300px'
  }}>
        <Story />
      </div>]
}`,...(G=(z=g.parameters)==null?void 0:z.docs)==null?void 0:G.source}}};var J,Q,V;m.parameters={...m.parameters,docs:{...(J=m.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    links: [{
      icon: 'anchor',
      label: 'Kystverket',
      url: 'https://kystverket.no'
    }, {
      icon: 'settings',
      label: 'Settings',
      url: '#'
    }],
    logoutHandler: () => alert('Logger ut')
  }
}`,...(V=(Q=m.parameters)==null?void 0:Q.docs)==null?void 0:V.source}}};var W,X,Y;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    profile: {
      name: 'Ola Nordmann',
      department: 'Hav- og kystforvaltning'
    }
  },
  decorators: [Story => <div style={{
    marginBottom: '150px'
  }}>
        <Story />
      </div>]
}`,...(Y=(X=u.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,$,rr;k.parameters={...k.parameters,docs:{...(Z=k.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    links: [...(defaultProps.links || []), {
      position: 'profile',
      icon: 'anchor',
      label: 'Kystverket',
      url: 'https://kystverket.no'
    }, {
      position: 'profile',
      icon: 'settings',
      label: 'Settings',
      url: '#'
    }],
    profile: {
      name: 'Ola Nordmann'
    },
    logoutHandler: () => alert('Logger ut')
  },
  decorators: [Story => <div style={{
    marginBottom: '300px'
  }}>
        <Story />
      </div>]
}`,...(rr=($=k.parameters)==null?void 0:$.docs)==null?void 0:rr.source}}};const Sr=["Saksbehandling","SaksbehandlingAnnenApplikasjon","Kystverket","MedUndertittel","Datakatalog","Fyr","Hais","Pfsa","Selvbetjening","medProfilOgMenyItems","medMenyItems","medProfil","medProfilLenker"];export{l as Datakatalog,i as Fyr,d as Hais,t as Kystverket,s as MedUndertittel,p as Pfsa,n as Saksbehandling,a as SaksbehandlingAnnenApplikasjon,c as Selvbetjening,Sr as __namedExportsOrder,fr as default,m as medMenyItems,u as medProfil,k as medProfilLenker,g as medProfilOgMenyItems};
