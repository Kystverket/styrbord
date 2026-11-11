import{S as ve,j as r}from"./iframe-BhUsGYJv.js";import{H as fe,a as me,b as ke,S as ye,c as S}from"./Dialog-BmTf8vdl.js";import{c as Se}from"./Cat 3-BufVA38a.js";import"./shipTypes-hFnSBndP.js";import"./Details-USoVTXtq.js";import"./KyvDivider-ByTZJ349.js";import"./KyvSpinner-BDBtODN3.js";import"./skillingsbuoye-CF0xB41P.js";import"./Logo-BrA2lcDJ.js";import"./tooltip-VXD2EHor.js";import"./preload-helper-Dp1pzeXC.js";import"./color-tokens-DRys5hYJ.js";import"./index-DyZ2hIba.js";import"./index-aB0m4J5l.js";const De={title:"Page/Header",component:fe,decorators:[ve],tags:["autodocs","kyv"],argTypes:{logo:{control:{type:"object"}}}},ue={logo:{product:"Saksbehandling",url:"/"},applications:[{id:"sak",name:"Saksbehandling",icon:"data_table"},{id:"is",name:"Ismelding",icon:"severe_cold"},{id:"hoer",name:"Høring",icon:"export_notes"},{id:"dev",name:"Utvikling",icon:"anchor"}],links:[{applicationId:"sak",position:"main",label:"Arbeidsliste",url:"#"},{applicationId:"sak",position:"main",label:"Alle saker",url:"#"},{applicationId:"dev",position:"main",label:"Innsendinger",url:"#"},{applicationId:"dev",position:"main",label:"Tilbakemeldinger",url:"#"},{applicationId:"hoer",position:"main",label:"Høring",url:"#"},{applicationId:"is",position:"main",label:"Ismelding",url:"#"},{position:"main",label:"Saksbehandlere",url:"#"},{position:"profile",icon:"person",label:"Min side",url:"#"}],profile:{name:"Ola Nordmann",department:"Hav- og kystforvaltning"},logoutHandler:()=>alert("Logger ut")},n={args:ue,decorators:[o=>r.jsx("div",{style:{marginBottom:"150px"},children:r.jsx(me.Provider,{value:{applicationId:"sak"},children:r.jsx(o,{})})})]},t={args:ue,decorators:[o=>r.jsx("div",{style:{marginBottom:"150px"},children:r.jsx(me.Provider,{value:{applicationId:"dev"},children:r.jsx(o,{})})})]},e={logo:{url:"#"}},s={args:{...e,logo:{...e.logo}}},i={args:{...e,logo:{...e.logo,title:"Styrbord"}}},l={args:{...e,logo:{...e.logo,product:"Datakatalog"}}},d={args:{...e,logo:{...e.logo,product:"Fyr"}}},p={args:{...e,logo:{...e.logo,product:"Historisk AIS"}}},c={args:{...e,logo:{...e.logo,product:"Maritim Sikring"}}},g={args:{...e,logo:{...e.logo,product:"Selvbetjening"}}},m={args:{...e,links:[{icon:"anchor",label:"Kystverket",url:"https://kystverket.no"},{icon:"settings",label:"Settings",url:"#"}],profile:{name:"Ola Nordmann",department:"Hav- og kystforvaltning"},logoutHandler:()=>alert("Logger ut")},decorators:[o=>r.jsx("div",{style:{marginBottom:"300px"},children:r.jsx(o,{})})]},u={args:{...e,links:[{icon:"anchor",label:"Kystverket",url:"https://kystverket.no"},{icon:"settings",label:"Settings",url:"#"}],logoutHandler:()=>alert("Logger ut")}},v={args:{...e,profile:{name:"Ola Nordmann",department:"Hav- og kystforvaltning"}},decorators:[o=>r.jsx("div",{style:{marginBottom:"150px"},children:r.jsx(o,{})})]},f={args:{...e,profile:{name:"Ola Nordmann",department:"Hav- og kystforvaltning",image:Se}},decorators:[o=>r.jsx("div",{style:{marginBottom:"150px"},children:r.jsx(o,{})})]},a={args:{...e,profile:{id:"a3f1c9e2",name:"Ola Nordmann",department:"Hav- og kystforvaltning"}},decorators:[o=>r.jsxs(ke,{auto:"solid","auto-reserved-seed":"a3f1c9e2",children:[r.jsx(o,{}),r.jsxs(ye,{horizontal:!0,gap:2,style:{marginTop:"150px"},children:[r.jsx(S,{"auto-seed":"a3f1c9e2","aria-label":"Ola Nordmann",tooltip:"Ola Nordmann (deg)"}),["Kari Nordmann","Per Hansen","Anne Olsen","Lars Berg","Ingrid Dahl"].map(y=>r.jsx(S,{"aria-label":y,tooltip:y},y))]})]})]},k={args:{...e,links:[...e.links||[],{position:"profile",icon:"anchor",label:"Kystverket",url:"https://kystverket.no"},{position:"profile",icon:"settings",label:"Settings",url:"#"}],profile:{name:"Ola Nordmann"},logoutHandler:()=>alert("Logger ut")},decorators:[o=>r.jsx("div",{style:{marginBottom:"300px"},children:r.jsx(o,{})})]};var h,b,P;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(P=(b=n.parameters)==null?void 0:b.docs)==null?void 0:P.source}}};var x,H,j;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(j=(H=t.parameters)==null?void 0:H.docs)==null?void 0:j.source}}};var A,I,O;s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    logo: {
      ...defaultProps.logo
    }
  }
}`,...(O=(I=s.parameters)==null?void 0:I.docs)==null?void 0:O.source}}};var N,B,M;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    logo: {
      ...defaultProps.logo,
      title: 'Styrbord'
    }
  }
}`,...(M=(B=i.parameters)==null?void 0:B.docs)==null?void 0:M.source}}};var L,K,D;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    logo: {
      ...defaultProps.logo,
      product: 'Datakatalog'
    }
  }
}`,...(D=(K=l.parameters)==null?void 0:K.docs)==null?void 0:D.source}}};var C,_,F;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    logo: {
      ...defaultProps.logo,
      product: 'Fyr'
    }
  }
}`,...(F=(_=d.parameters)==null?void 0:_.docs)==null?void 0:F.source}}};var T,U,w;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    logo: {
      ...defaultProps.logo,
      product: 'Historisk AIS'
    }
  }
}`,...(w=(U=p.parameters)==null?void 0:U.docs)==null?void 0:w.source}}};var z,E,R;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    logo: {
      ...defaultProps.logo,
      product: 'Maritim Sikring'
    }
  }
}`,...(R=(E=c.parameters)==null?void 0:E.docs)==null?void 0:R.source}}};var W,q,G;g.parameters={...g.parameters,docs:{...(W=g.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    logo: {
      ...defaultProps.logo,
      product: 'Selvbetjening'
    }
  }
}`,...(G=(q=g.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};var J,Q,V;m.parameters={...m.parameters,docs:{...(J=m.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(V=(Q=m.parameters)==null?void 0:Q.docs)==null?void 0:V.source}}};var X,Y,Z;u.parameters={...u.parameters,docs:{...(X=u.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(Z=(Y=u.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,ee,re;v.parameters={...v.parameters,docs:{...($=v.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(re=(ee=v.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var oe,ae,ne;f.parameters={...f.parameters,docs:{...(oe=f.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(ne=(ae=f.parameters)==null?void 0:ae.docs)==null?void 0:ne.source}}};var te,se,ie,le,de;a.parameters={...a.parameters,docs:{...(te=a.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    profile: {
      id: 'a3f1c9e2',
      name: 'Ola Nordmann',
      department: 'Hav- og kystforvaltning'
    }
  },
  decorators: [Story => <AvatarProvider auto="solid" auto-reserved-seed="a3f1c9e2">
        <Story />
        <Surface horizontal gap={2} style={{
      marginTop: '150px'
    }}>
          <Avatar auto-seed="a3f1c9e2" aria-label="Ola Nordmann" tooltip="Ola Nordmann (deg)" />
          {['Kari Nordmann', 'Per Hansen', 'Anne Olsen', 'Lars Berg', 'Ingrid Dahl'].map(name => <Avatar key={name} aria-label={name} tooltip={name} />)}
        </Surface>
      </AvatarProvider>]
}`,...(ie=(se=a.parameters)==null?void 0:se.docs)==null?void 0:ie.source},description:{story:"Inside an `AvatarProvider` with `auto`, the header avatar gets a generated color seeded from\n`profile.id`. With `auto-reserved-seed` set to the same id, the logged-in user keeps a color\nno one else on the page gets, and looks the same in the header as in the list below.",...(de=(le=a.parameters)==null?void 0:le.docs)==null?void 0:de.description}}};var pe,ce,ge;k.parameters={...k.parameters,docs:{...(pe=k.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(ge=(ce=k.parameters)==null?void 0:ce.docs)==null?void 0:ge.source}}};const Ce=["Saksbehandling","SaksbehandlingAnnenApplikasjon","Kystverket","MedUndertittel","Datakatalog","Fyr","Hais","Pfsa","Selvbetjening","medProfilOgMenyItems","medMenyItems","medProfil","medProfilbilde","medAvatarProvider","medProfilLenker"];export{l as Datakatalog,d as Fyr,p as Hais,s as Kystverket,i as MedUndertittel,c as Pfsa,n as Saksbehandling,t as SaksbehandlingAnnenApplikasjon,g as Selvbetjening,Ce as __namedExportsOrder,De as default,a as medAvatarProvider,u as medMenyItems,v as medProfil,k as medProfilLenker,m as medProfilOgMenyItems,f as medProfilbilde};
