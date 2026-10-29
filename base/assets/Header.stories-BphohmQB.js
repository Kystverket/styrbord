import{S as lr,j as o}from"./iframe-Ccq3OV6b.js";import{H as ir,a as tr}from"./Dialog-DOnpb3hu.js";import{c as dr}from"./Cat 3-BufVA38a.js";import"./preload-helper-Dp1pzeXC.js";import"./tooltip-Bgifg7WJ.js";import"./index-D5L0FOws.js";import"./index-C3opyzbR.js";import"./shipTypes-hFnSBndP.js";import"./Details-odWxZYUY.js";import"./KyvDivider-BVBMyOmU.js";import"./KyvSpinner-YPDo_c9L.js";import"./skillingsbuoye-BRXVEwkJ.js";import"./Logo-BXu3XPm8.js";import"./color-tokens-DRys5hYJ.js";const Hr={title:"Page/Header",component:ir,decorators:[lr],tags:["autodocs","kyv"],argTypes:{logo:{control:{type:"object"}}}},sr={logo:{product:"Saksbehandling",url:"/"},applications:[{id:"sak",name:"Saksbehandling",icon:"data_table"},{id:"is",name:"Ismelding",icon:"severe_cold"},{id:"hoer",name:"Høring",icon:"export_notes"},{id:"dev",name:"Utvikling",icon:"anchor"}],links:[{applicationId:"sak",position:"main",label:"Arbeidsliste",url:"#"},{applicationId:"sak",position:"main",label:"Alle saker",url:"#"},{applicationId:"dev",position:"main",label:"Innsendinger",url:"#"},{applicationId:"dev",position:"main",label:"Tilbakemeldinger",url:"#"},{applicationId:"hoer",position:"main",label:"Høring",url:"#"},{applicationId:"is",position:"main",label:"Ismelding",url:"#"},{position:"main",label:"Saksbehandlere",url:"#"},{position:"profile",icon:"person",label:"Min side",url:"#"}],profile:{name:"Ola Nordmann",department:"Hav- og kystforvaltning"},logoutHandler:()=>alert("Logger ut")},n={args:sr,decorators:[e=>o.jsx("div",{style:{marginBottom:"150px"},children:o.jsx(tr.Provider,{value:{applicationId:"sak"},children:o.jsx(e,{})})})]},a={args:sr,decorators:[e=>o.jsx("div",{style:{marginBottom:"150px"},children:o.jsx(tr.Provider,{value:{applicationId:"dev"},children:o.jsx(e,{})})})]},r={logo:{url:"#"}},t={args:{...r,logo:{...r.logo}}},s={args:{...r,logo:{...r.logo,title:"Styrbord"}}},l={args:{...r,logo:{...r.logo,product:"Datakatalog"}}},i={args:{...r,logo:{...r.logo,product:"Fyr"}}},d={args:{...r,logo:{...r.logo,product:"Historisk AIS"}}},p={args:{...r,logo:{...r.logo,product:"Maritim Sikring"}}},c={args:{...r,logo:{...r.logo,product:"Selvbetjening"}}},g={args:{...r,links:[{icon:"anchor",label:"Kystverket",url:"https://kystverket.no"},{icon:"settings",label:"Settings",url:"#"}],profile:{name:"Ola Nordmann",department:"Hav- og kystforvaltning"},logoutHandler:()=>alert("Logger ut")},decorators:[e=>o.jsx("div",{style:{marginBottom:"300px"},children:o.jsx(e,{})})]},m={args:{...r,links:[{icon:"anchor",label:"Kystverket",url:"https://kystverket.no"},{icon:"settings",label:"Settings",url:"#"}],logoutHandler:()=>alert("Logger ut")}},u={args:{...r,profile:{name:"Ola Nordmann",department:"Hav- og kystforvaltning"}},decorators:[e=>o.jsx("div",{style:{marginBottom:"150px"},children:o.jsx(e,{})})]},v={args:{...r,profile:{name:"Ola Nordmann",department:"Hav- og kystforvaltning",image:dr}},decorators:[e=>o.jsx("div",{style:{marginBottom:"150px"},children:o.jsx(e,{})})]},k={args:{...r,links:[...r.links||[],{position:"profile",icon:"anchor",label:"Kystverket",url:"https://kystverket.no"},{position:"profile",icon:"settings",label:"Settings",url:"#"}],profile:{name:"Ola Nordmann"},logoutHandler:()=>alert("Logger ut")},decorators:[e=>o.jsx("div",{style:{marginBottom:"300px"},children:o.jsx(e,{})})]};var y,f,S;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(S=(f=n.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var b,P,x;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(x=(P=a.parameters)==null?void 0:P.docs)==null?void 0:x.source}}};var h,H,j;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    logo: {
      ...defaultProps.logo
    }
  }
}`,...(j=(H=t.parameters)==null?void 0:H.docs)==null?void 0:j.source}}};var I,A,B;s.parameters={...s.parameters,docs:{...(I=s.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    logo: {
      ...defaultProps.logo,
      title: 'Styrbord'
    }
  }
}`,...(B=(A=s.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};var M,O,L;l.parameters={...l.parameters,docs:{...(M=l.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    logo: {
      ...defaultProps.logo,
      product: 'Datakatalog'
    }
  }
}`,...(L=(O=l.parameters)==null?void 0:O.docs)==null?void 0:L.source}}};var N,K,C;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    logo: {
      ...defaultProps.logo,
      product: 'Fyr'
    }
  }
}`,...(C=(K=i.parameters)==null?void 0:K.docs)==null?void 0:C.source}}};var D,_,F;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    logo: {
      ...defaultProps.logo,
      product: 'Historisk AIS'
    }
  }
}`,...(F=(_=d.parameters)==null?void 0:_.docs)==null?void 0:F.source}}};var U,E,T;p.parameters={...p.parameters,docs:{...(U=p.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    logo: {
      ...defaultProps.logo,
      product: 'Maritim Sikring'
    }
  }
}`,...(T=(E=p.parameters)==null?void 0:E.docs)==null?void 0:T.source}}};var R,q,w;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    logo: {
      ...defaultProps.logo,
      product: 'Selvbetjening'
    }
  }
}`,...(w=(q=c.parameters)==null?void 0:q.docs)==null?void 0:w.source}}};var z,G,J;g.parameters={...g.parameters,docs:{...(z=g.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(J=(G=g.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var Q,V,W;m.parameters={...m.parameters,docs:{...(Q=m.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(W=(V=m.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};var X,Y,Z;u.parameters={...u.parameters,docs:{...(X=u.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(Z=(Y=u.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,rr,or;v.parameters={...v.parameters,docs:{...($=v.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    profile: {
      name: 'Ola Nordmann',
      department: 'Hav- og kystforvaltning',
      image: cat
    }
  },
  decorators: [Story => <div style={{
    marginBottom: '150px'
  }}>
        <Story />
      </div>]
}`,...(or=(rr=v.parameters)==null?void 0:rr.docs)==null?void 0:or.source}}};var er,nr,ar;k.parameters={...k.parameters,docs:{...(er=k.parameters)==null?void 0:er.docs,source:{originalSource:`{
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
}`,...(ar=(nr=k.parameters)==null?void 0:nr.docs)==null?void 0:ar.source}}};const jr=["Saksbehandling","SaksbehandlingAnnenApplikasjon","Kystverket","MedUndertittel","Datakatalog","Fyr","Hais","Pfsa","Selvbetjening","medProfilOgMenyItems","medMenyItems","medProfil","medProfilbilde","medProfilLenker"];export{l as Datakatalog,i as Fyr,d as Hais,t as Kystverket,s as MedUndertittel,p as Pfsa,n as Saksbehandling,a as SaksbehandlingAnnenApplikasjon,c as Selvbetjening,jr as __namedExportsOrder,Hr as default,m as medMenyItems,u as medProfil,k as medProfilLenker,g as medProfilOgMenyItems,v as medProfilbilde};
