import{S as Ne,j as r,r as ze}from"./iframe-BKKWLs7J.js";import{ag as b,ah as We,ai as k,aj as Re}from"./Dialog-BFF5M4Qw.js";import{c as N}from"./Cat 1-CDyACPiq.js";import{c as z}from"./Cat 2-CSvMt87v.js";import{p as Ue}from"./Pikekyst Oppskrift-Mt2fCVYl.js";import"./preload-helper-Dp1pzeXC.js";import"./tooltip-DoGn2wxW.js";import"./index-5YYksU56.js";import"./index-cpF2w4qv.js";import"./shipTypes-hFnSBndP.js";import"./Details-CqT-48Ax.js";import"./KyvDivider-CRx6FWLV.js";import"./KyvSpinner-CPx0vDAt.js";import"./skillingsbuoye-CUpDHK2B.js";import"./Logo-DL-qF8EY.js";import"./color-tokens-CJ-06Lvi.js";const h=async()=>new Promise(e=>{setTimeout(()=>{e([{storageId:"1",thumbnailUri:N,previewUri:N,sizeInBytes:9281231},{storageId:"2",thumbnailUri:z,previewUri:z,sizeInBytes:192811},{storageId:"3",thumbnailUri:void 0,previewUri:Ue,sizeInBytes:12122}])},1e3)}),Oe=e=>{const[i,a]=ze.useState([...e.files]),j=T=>{var C;a(T),(C=e.onChange)==null||C.call(e,T)};return r.jsx(We,{...e,files:i,onChange:j})},$e={title:"Form/FileUploader",component:Oe,decorators:[e=>r.jsx(b.Provider,{value:{deriveFileInfosFromStorageIds:h},children:r.jsx(e,{})}),Ne],tags:["autodocs","kyv","beta"],argTypes:{}},t={label:"Last opp filer",description:"Du kan laste opp flere filer samtidig",error:null,multiple:!0,files:[{fileName:"file1.txt",status:"uploaded",contentType:"text/plain",contextId:"214b3c2e-1f4d-4f8a-9b6c-5d7e8f9a0b1c",storageId:"1"},{fileName:"file2.txt",status:"uploaded",contentType:"text/plain",contextId:"214b3c2e-1f4d-4f3a-9b6c-5d7e8f9a0b1c",storageId:"1"},{fileName:"file3.jpeg",status:"uploaded",contentType:"image/jpeg",contextId:"214b3c2e-1f4d-4f8a-a127-5d7e8f9a0b1c",storageId:"1"}],maxFiles:5,maxSizeInBytes:10*1e3*1e3,onChange:e=>console.log("Files changed:",e),allowedFileTypes:[".pdf",".jpg",".jpeg",".png"]},w=async()=>(await new Promise(e=>setTimeout(e,1e3)),[{title:"Testfiler",label:"Dette er bare noen testfiler",files:[{contextId:"existing-1",fileName:"document1.pdf",storageId:"storage-id-1",contentType:"application/pdf",status:"uploaded"},{contextId:"existing-2",fileName:"image1.jpg",storageId:"storage-id-2",contentType:"image/jpeg",status:"uploaded"},{contextId:"existing-3",fileName:"screenshot.png",storageId:"1",contentType:"image/png",status:"uploaded"}]},{title:"Flere testfiler",label:"Abrakadabra, this page now has more testfiles",files:[{contextId:"existing-test2-1",fileName:"document1.pdf",storageId:"storage-id-test2-1",contentType:"application/pdf",status:"uploaded"},{contextId:"existing-test2-2",fileName:"image1.jpg",storageId:"2",contentType:"image/jpeg",status:"uploaded"},{contextId:"existing-test2-3",fileName:"aCoolDocument.pdf",storageId:"storage-id-test2-3",contentType:"application/pdf",status:"uploaded"},{contextId:"existing-test2-4",fileName:"screenshot.png",storageId:"3",contentType:"image/png",status:"uploaded"}]}]),s={args:t},n={args:{...t,optional:!0}},o={args:{...t,optional:"Spesialtilpasset Verdi"}},l={args:{...t,required:!0}},d={args:{...t,required:"Påkrevd"}},p={args:{...t,variant:"dropzone"}},c={args:{...t,variant:"dropzone",existingFilesProvider:w}},u={args:{...t,error:"Det oppstod en feil"}},g={args:{...t,description:"Capture button vises kun på mobilenheter",withCaptureButton:!0,files:[]}},f={args:{...t,description:"Viser kun kamera-knappen. På desktop faller den tilbake til vanlig opplastingsknapp",variant:"capture",files:[]}},m={args:{...t,files:[],existingFilesProvider:w}},v={args:{...t,description:"Egne knapper i knappraden, og «Rediger» på GeoJSON-filer",files:[...t.files,{fileName:"tegning.geojson",status:"uploaded",contentType:"application/geo+json",contextId:"7c1d2e3f-4a5b-4c6d-8e7f-9a0b1c2d3e4f",storageId:"4"}],existingFilesProvider:w,uploadActions:[{icon:"stylus",label:"Legg til tegning",onClick:()=>console.log("Legg til tegning")}],fileActions:e=>e.contentType.endsWith("json")?[{icon:"edit",label:"Rediger",onClick:i=>console.log("Rediger",i)}]:[]}},Ce=async e=>new Promise(i=>{const a=e.get("file"),j=10*1024*1024;setTimeout(()=>{a&&a.size>j?i({storageId:"",success:!1,error:"file-too-large"}):i({storageId:Re(),success:!0})},1500)}),S=async()=>new Promise(e=>{setTimeout(()=>{e()},1e3)}),x={decorators:[e=>r.jsx(k.Provider,{value:{uploadFile:Ce,deleteFile:S},children:r.jsx(b.Provider,{value:{deriveFileInfosFromStorageIds:h},children:r.jsx(e,{})})})],args:{...t,description:"Filer som er større enn 10MB vil bli avvist",files:[]}},F={decorators:[e=>r.jsx(k.Provider,{value:{uploadFile:Ce,deleteFile:S},children:r.jsx(b.Provider,{value:{deriveFileInfosFromStorageIds:h},children:r.jsx(e,{})})})],args:{...t,allowFilePreview:!0,description:"Filer som er større enn 10MB vil bli avvist",files:[{fileName:"cat1.jpg",status:"uploaded",contentType:"image/jpeg",contextId:"214b3c2e-1f4d-4f8a-9b6c-5d7e8f9xxb1c",storageId:"1"},{fileName:"cat2.jpg",status:"uploaded",contentType:"image/jpeg",contextId:"214b3c2e-1f4d-4f3a-9b6c-5d7e8fdsd0b1c",storageId:"2"},{fileName:"file3.pdf",status:"uploaded",contentType:"application/pdf",contextId:"214b3c2e-1f4d-4f8a-a127-5d7e8ffff1c",storageId:"3"}]}},I={args:{...t,allowedFileTypes:[".exe",".bat",".zip","image/*"],description:"Aksepterer kun filer med utvidelsene .exe, .bat, .zip og bildefiler",files:[]}},Be=async()=>new Promise(e=>{setTimeout(()=>{e({storageId:"",success:!1,error:"file-scan-failed"})},1500)}),P={decorators:[e=>r.jsx(k.Provider,{value:{uploadFile:Be,deleteFile:S},children:r.jsx(b.Provider,{value:{deriveFileInfosFromStorageIds:h},children:r.jsx(e,{})})})],args:{...t,description:"Opplastning av fil vil gi feil ved scanning av filen",files:[]}},y={args:{...t,allowFilePreview:!0,description:"Klikk på forhåndsvisningsknappen for å se filer i full størrelse",files:[{fileName:"Pikekyst Oppskrift.pdf",status:"uploaded",contentType:"application/pdf",contextId:"preview-pdf-1",storageId:"1"},{fileName:"file3.jpeg",status:"uploaded",contentType:"image/jpeg",contextId:"preview-img-1",storageId:"2"},{fileName:"file4.jpeg",status:"uploaded",contentType:"image/jpeg",contextId:"preview-img-2",storageId:"3"},{fileName:"readme.txt",status:"uploaded",contentType:"text/plain",contextId:"preview-txt-1",storageId:"4"}]}};var W,R,U;s.parameters={...s.parameters,docs:{...(W=s.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: defaultProps
}`,...(U=(R=s.parameters)==null?void 0:R.docs)==null?void 0:U.source}}};var O,B,D;n.parameters={...n.parameters,docs:{...(O=n.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    optional: true
  }
}`,...(D=(B=n.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};var E,A,L;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    optional: 'Spesialtilpasset Verdi'
  }
}`,...(L=(A=o.parameters)==null?void 0:A.docs)==null?void 0:L.source}}};var q,V,M;l.parameters={...l.parameters,docs:{...(q=l.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    required: true
  }
}`,...(M=(V=l.parameters)==null?void 0:V.docs)==null?void 0:M.source}}};var G,J,K;d.parameters={...d.parameters,docs:{...(G=d.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    required: 'Påkrevd'
  }
}`,...(K=(J=d.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var _,H,Q;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    variant: 'dropzone'
  }
}`,...(Q=(H=p.parameters)==null?void 0:H.docs)==null?void 0:Q.source}}};var X,Y,Z;c.parameters={...c.parameters,docs:{...(X=c.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    variant: 'dropzone',
    existingFilesProvider: existingFilesProvider
  }
}`,...(Z=(Y=c.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,ee,te;u.parameters={...u.parameters,docs:{...($=u.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    error: 'Det oppstod en feil'
  }
}`,...(te=(ee=u.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var re,ie,ae;g.parameters={...g.parameters,docs:{...(re=g.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    description: 'Capture button vises kun på mobilenheter',
    withCaptureButton: true,
    files: []
  }
}`,...(ae=(ie=g.parameters)==null?void 0:ie.docs)==null?void 0:ae.source}}};var se,ne,oe;f.parameters={...f.parameters,docs:{...(se=f.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    description: 'Viser kun kamera-knappen. På desktop faller den tilbake til vanlig opplastingsknapp',
    variant: 'capture',
    files: []
  }
}`,...(oe=(ne=f.parameters)==null?void 0:ne.docs)==null?void 0:oe.source}}};var le,de,pe;m.parameters={...m.parameters,docs:{...(le=m.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    files: [],
    existingFilesProvider: existingFilesProvider
  }
}`,...(pe=(de=m.parameters)==null?void 0:de.docs)==null?void 0:pe.source}}};var ce,ue,ge;v.parameters={...v.parameters,docs:{...(ce=v.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    description: 'Egne knapper i knappraden, og «Rediger» på GeoJSON-filer',
    files: [...defaultProps.files, {
      fileName: 'tegning.geojson',
      status: 'uploaded',
      contentType: 'application/geo+json',
      contextId: '7c1d2e3f-4a5b-4c6d-8e7f-9a0b1c2d3e4f',
      storageId: '4'
    }],
    existingFilesProvider: existingFilesProvider,
    uploadActions: [{
      icon: 'stylus',
      label: 'Legg til tegning',
      onClick: () => console.log('Legg til tegning')
    }],
    fileActions: file => file.contentType.endsWith('json') ? [{
      icon: 'edit',
      label: 'Rediger',
      onClick: f => console.log('Rediger', f)
    }] : []
  }
}`,...(ge=(ue=v.parameters)==null?void 0:ue.docs)==null?void 0:ge.source}}};var fe,me,ve;x.parameters={...x.parameters,docs:{...(fe=x.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  decorators: [Story => <FileUploaderContext.Provider value={{
    uploadFile: uploadFileWithSizeLimit,
    deleteFile: deleteFile
  }}>
        <FileRetrieverContext.Provider value={{
      deriveFileInfosFromStorageIds
    }}>
          <Story />
        </FileRetrieverContext.Provider>
      </FileUploaderContext.Provider>],
  args: {
    ...defaultProps,
    description: 'Filer som er større enn 10MB vil bli avvist',
    files: []
  }
}`,...(ve=(me=x.parameters)==null?void 0:me.docs)==null?void 0:ve.source}}};var xe,Fe,Ie;F.parameters={...F.parameters,docs:{...(xe=F.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  decorators: [Story => <FileUploaderContext.Provider value={{
    uploadFile: uploadFileWithSizeLimit,
    deleteFile: deleteFile
  }}>
        <FileRetrieverContext.Provider value={{
      deriveFileInfosFromStorageIds
    }}>
          <Story />
        </FileRetrieverContext.Provider>
      </FileUploaderContext.Provider>],
  args: {
    ...defaultProps,
    allowFilePreview: true,
    description: 'Filer som er større enn 10MB vil bli avvist',
    files: [{
      fileName: 'cat1.jpg',
      status: 'uploaded',
      contentType: 'image/jpeg',
      contextId: '214b3c2e-1f4d-4f8a-9b6c-5d7e8f9xxb1c',
      storageId: '1'
    }, {
      fileName: 'cat2.jpg',
      status: 'uploaded',
      contentType: 'image/jpeg',
      contextId: '214b3c2e-1f4d-4f3a-9b6c-5d7e8fdsd0b1c',
      storageId: '2'
    }, {
      fileName: 'file3.pdf',
      status: 'uploaded',
      contentType: 'application/pdf',
      contextId: '214b3c2e-1f4d-4f8a-a127-5d7e8ffff1c',
      storageId: '3'
    }]
  }
}`,...(Ie=(Fe=F.parameters)==null?void 0:Fe.docs)==null?void 0:Ie.source}}};var Pe,ye,be;I.parameters={...I.parameters,docs:{...(Pe=I.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    allowedFileTypes: ['.exe', '.bat', '.zip', 'image/*'],
    description: 'Aksepterer kun filer med utvidelsene .exe, .bat, .zip og bildefiler',
    files: []
  }
}`,...(be=(ye=I.parameters)==null?void 0:ye.docs)==null?void 0:be.source}}};var he,je,ke;P.parameters={...P.parameters,docs:{...(he=P.parameters)==null?void 0:he.docs,source:{originalSource:`{
  decorators: [Story => <FileUploaderContext.Provider value={{
    uploadFile: uploadFileWithFileScan,
    deleteFile: deleteFile
  }}>
        <FileRetrieverContext.Provider value={{
      deriveFileInfosFromStorageIds
    }}>
          <Story />
        </FileRetrieverContext.Provider>
      </FileUploaderContext.Provider>],
  args: {
    ...defaultProps,
    description: 'Opplastning av fil vil gi feil ved scanning av filen',
    files: []
  }
}`,...(ke=(je=P.parameters)==null?void 0:je.docs)==null?void 0:ke.source}}};var we,Se,Te;y.parameters={...y.parameters,docs:{...(we=y.parameters)==null?void 0:we.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    allowFilePreview: true,
    description: 'Klikk på forhåndsvisningsknappen for å se filer i full størrelse',
    files: [{
      fileName: 'Pikekyst Oppskrift.pdf',
      status: 'uploaded',
      contentType: 'application/pdf',
      contextId: 'preview-pdf-1',
      storageId: '1'
    }, {
      fileName: 'file3.jpeg',
      status: 'uploaded',
      contentType: 'image/jpeg',
      contextId: 'preview-img-1',
      storageId: '2'
    }, {
      fileName: 'file4.jpeg',
      status: 'uploaded',
      contentType: 'image/jpeg',
      contextId: 'preview-img-2',
      storageId: '3'
    }, {
      fileName: 'readme.txt',
      status: 'uploaded',
      contentType: 'text/plain',
      contextId: 'preview-txt-1',
      storageId: '4'
    }]
  }
}`,...(Te=(Se=y.parameters)==null?void 0:Se.docs)==null?void 0:Te.source}}};const et=["Default","Optional","OptionalText","Required","RequiredText","Dropzone","DropzoneWithExistingFiles","WithError","WithCaptureButton","CaptureOnly","WithExistingFiles","WithCustomActions","withFileSizeLimit","withPreviews","withAllowedFileTypes","withFileScanFailed","WithFilePreview"];export{f as CaptureOnly,s as Default,p as Dropzone,c as DropzoneWithExistingFiles,n as Optional,o as OptionalText,l as Required,d as RequiredText,g as WithCaptureButton,v as WithCustomActions,u as WithError,m as WithExistingFiles,y as WithFilePreview,et as __namedExportsOrder,$e as default,I as withAllowedFileTypes,P as withFileScanFailed,x as withFileSizeLimit,F as withPreviews};
