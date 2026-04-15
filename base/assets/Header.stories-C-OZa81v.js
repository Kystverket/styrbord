import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{H as nr,A as or}from"./SlotDialog-4V89NhgS.js";import{S as ar}from"./styrbordDecorator-bX6R13ob.js";import"./iframe-CBzOzwYC.js";import"./preload-helper-Dp1pzeXC.js";import"./Details-CJUTXrHF.js";import"./index-BY8xXKCW.js";import"./lite-DaUVFjkg.js";import"./translations-Dyd-ZXR0.js";import"./kyvDivider-GkhM6YIE.js";import"./typography-CdiQYpGP.js";import"./skillingsbuoye-BG85ofhS.js";import"./Logo-DajRw6N7.js";import"./index-EYe9u-W3.js";import"./index-DTVySQWM.js";import"./index-tCgyJMmJ.js";import"./heading-CqIbzBkP.js";import"./label-BTQ766NP.js";import"./index-CzC7aqEE.js";const Hr={title:"Page/Header",component:nr,decorators:[ar],tags:["autodocs","kyv"],argTypes:{logo:{control:{type:"object"}}}},er={logo:{variant:"saksbehandling",url:"/"},applications:[{id:"sak",name:"Saksbehandling",icon:"data_table"},{id:"is",name:"Ismelding",icon:"severe_cold"},{id:"hoer",name:"Høring",icon:"export_notes"},{id:"dev",name:"Utvikling",icon:"anchor"}],links:[{applicationId:"sak",position:"main",label:"Arbeidsliste",url:"#"},{applicationId:"sak",position:"main",label:"Alle saker",url:"#"},{applicationId:"dev",position:"main",label:"Innsendinger",url:"#"},{applicationId:"dev",position:"main",label:"Tilbakemeldinger",url:"#"},{applicationId:"hoer",position:"main",label:"Høring",url:"#"},{applicationId:"is",position:"main",label:"Ismelding",url:"#"},{position:"main",label:"Saksbehandlere",url:"#"},{position:"profile",icon:"person",label:"Min side",url:"#"}],profile:{name:"Ola Nordmann",department:"Hav- og kystforvaltning"},logoutHandler:()=>alert("Logger ut")},n={args:er,decorators:[e=>o.jsx("div",{style:{marginBottom:"150px"},children:o.jsx(or.Provider,{value:{applicationId:"sak"},children:o.jsx(e,{})})})]},a={args:er,decorators:[e=>o.jsx("div",{style:{marginBottom:"150px"},children:o.jsx(or.Provider,{value:{applicationId:"dev"},children:o.jsx(e,{})})})]},r={logo:{variant:"blue-horizontal",url:"#"}},t={args:{...r,logo:{...r.logo,variant:"blue-horizontal"}}},s={args:{...r,logo:{...r.logo,title:"Styrbord"}}},i={args:{...r,logo:{...r.logo,variant:"datakatalog"}}},l={args:{...r,logo:{...r.logo,variant:"fyr"}}},d={args:{...r,logo:{...r.logo,variant:"hais"}}},p={args:{...r,logo:{...r.logo,variant:"pfsa"}}},c={args:{...r,logo:{...r.logo,variant:"selvbetjening"}}},g={args:{...r,links:[{icon:"anchor",label:"Kystverket",url:"https://kystverket.no"},{icon:"settings",label:"Settings",url:"#"}],profile:{name:"Ola Nordmann",department:"Hav- og kystforvaltning"},logoutHandler:()=>alert("Logger ut")},decorators:[e=>o.jsx("div",{style:{marginBottom:"300px"},children:o.jsx(e,{})})]},m={args:{...r,links:[{icon:"anchor",label:"Kystverket",url:"https://kystverket.no"},{icon:"settings",label:"Settings",url:"#"}],logoutHandler:()=>alert("Logger ut")}},u={args:{...r,profile:{name:"Ola Nordmann",department:"Hav- og kystforvaltning"}},decorators:[e=>o.jsx("div",{style:{marginBottom:"150px"},children:o.jsx(e,{})})]},v={args:{...r,links:[...r.links||[],{position:"profile",icon:"anchor",label:"Kystverket",url:"https://kystverket.no"},{position:"profile",icon:"settings",label:"Settings",url:"#"}],profile:{name:"Ola Nordmann"},logoutHandler:()=>alert("Logger ut")},decorators:[e=>o.jsx("div",{style:{marginBottom:"300px"},children:o.jsx(e,{})})]};var k,y,f;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(f=(y=n.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var b,S,h;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(h=(S=a.parameters)==null?void 0:S.docs)==null?void 0:h.source}}};var P,x,H;t.parameters={...t.parameters,docs:{...(P=t.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    logo: {
      ...defaultProps.logo,
      variant: 'blue-horizontal'
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
}`,...(A=(I=s.parameters)==null?void 0:I.docs)==null?void 0:A.source}}};var B,M,O;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    logo: {
      ...defaultProps.logo,
      variant: 'datakatalog'
    }
  }
}`,...(O=(M=i.parameters)==null?void 0:M.docs)==null?void 0:O.source}}};var L,K,N;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    logo: {
      ...defaultProps.logo,
      variant: 'fyr'
    }
  }
}`,...(N=(K=l.parameters)==null?void 0:K.docs)==null?void 0:N.source}}};var C,_,z;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    logo: {
      ...defaultProps.logo,
      variant: 'hais'
    }
  }
}`,...(z=(_=d.parameters)==null?void 0:_.docs)==null?void 0:z.source}}};var D,U,E;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    logo: {
      ...defaultProps.logo,
      variant: 'pfsa'
    }
  }
}`,...(E=(U=p.parameters)==null?void 0:U.docs)==null?void 0:E.source}}};var F,T,R;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    logo: {
      ...defaultProps.logo,
      variant: 'selvbetjening'
    }
  }
}`,...(R=(T=c.parameters)==null?void 0:T.docs)==null?void 0:R.source}}};var q,w,G;g.parameters={...g.parameters,docs:{...(q=g.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(G=(w=g.parameters)==null?void 0:w.docs)==null?void 0:G.source}}};var J,Q,V;m.parameters={...m.parameters,docs:{...(J=m.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(Y=(X=u.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,$,rr;v.parameters={...v.parameters,docs:{...(Z=v.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(rr=($=v.parameters)==null?void 0:$.docs)==null?void 0:rr.source}}};const jr=["Saksbehandling","SaksbehandlingAnnenApplikasjon","Kystverket","MedUndertittel","Datakatalog","Fyr","Hais","Pfsa","Selvbetjening","medProfilOgMenyItems","medMenyItems","medProfil","medProfilLenker"];export{i as Datakatalog,l as Fyr,d as Hais,t as Kystverket,s as MedUndertittel,p as Pfsa,n as Saksbehandling,a as SaksbehandlingAnnenApplikasjon,c as Selvbetjening,jr as __namedExportsOrder,Hr as default,m as medMenyItems,u as medProfil,v as medProfilLenker,g as medProfilOgMenyItems};
