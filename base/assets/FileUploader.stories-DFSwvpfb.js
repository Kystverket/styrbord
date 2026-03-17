import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{aA as ce,aB as le,aC as ue}from"./SlotDialog-BM8LdznX.js";import{S as me}from"./styrbordDecorator-CwSiRFIy.js";import{r as ge}from"./iframe-Dc5NlUOZ.js";import{c as h}from"./Cat 1-CDyACPiq.js";import"./Details-DvI0Ks8B.js";import"./index-CctbcuWN.js";import"./lite-DaUVFjkg.js";import"./kyvDivider-GkhM6YIE.js";import"./typography-CdiQYpGP.js";import"./skillingsbuoye-BG85ofhS.js";import"./Logo-DajRw6N7.js";import"./index-DW1CWfez.js";import"./index-Ch6ENo7_.js";import"./index-CXfN6wGo.js";import"./heading-BpFGGURx.js";import"./label-DhsYcHK5.js";import"./index-DTygHeDf.js";import"./translations-B0sosGYM.js";import"./preload-helper-Dp1pzeXC.js";const b=""+new URL("Cat 2-C4vXFRRz.jpg",import.meta.url).href,fe=e=>{const[s,a]=ge.useState([...e.files]),v=y=>{var I;a(y),(I=e.onChange)==null||I.call(e,y)};return r.jsx(ce,{...e,files:s,onChange:v})},Re={title:"Form/FileUploader",component:fe,decorators:[me],tags:["autodocs","kyv","beta"],argTypes:{}},t={label:"Last opp filer",description:"Du kan laste opp flere filer samtidig",error:null,multiple:!0,files:[{fileName:"file1.txt",status:"uploaded",contentType:"text/plain",contextId:"214b3c2e-1f4d-4f8a-9b6c-5d7e8f9a0b1c",storageId:"1",sizeInBytes:92881},{fileName:"file2.txt",status:"uploaded",contentType:"text/plain",contextId:"214b3c2e-1f4d-4f3a-9b6c-5d7e8f9a0b1c",storageId:"1",sizeInBytes:12122},{fileName:"file3.jpeg",status:"uploaded",contentType:"image/jpeg",thumbnailUri:h,contextId:"214b3c2e-1f4d-4f8a-a127-5d7e8f9a0b1c",storageId:"1",sizeInBytes:9281231}],maxFiles:5,maxSizeInBytes:10*1e3*1e3,onChange:e=>console.log("Files changed:",e),allowedFileTypes:[".pdf",".jpg",".jpeg",".png"]},pe=async()=>(await new Promise(e=>setTimeout(e,1e3)),[{title:"Testfiler",label:"Dette er bare noen testfiler",files:[{contextId:"existing-1",fileName:"document1.pdf",storageId:"storage-id-1",contentType:"application/pdf",status:"uploaded",sizeInBytes:5818},{contextId:"existing-2",fileName:"image1.jpg",storageId:"storage-id-2",contentType:"image/jpeg",thumbnailUri:h,status:"uploaded",sizeInBytes:17863},{contextId:"existing-3",fileName:"screenshot.png",storageId:"storage-id-3",contentType:"image/png",thumbnailUri:b,status:"uploaded",sizeInBytes:192811}]},{title:"Flere testfiler",label:"Abrakadabra, this page now has more testfiles",files:[{contextId:"existing-test2-1",fileName:"document1.pdf",storageId:"storage-id-test2-1",contentType:"application/pdf",status:"uploaded",sizeInBytes:5818},{contextId:"existing-test2-2",fileName:"image1.jpg",storageId:"storage-id-test2-2",contentType:"image/jpeg",thumbnailUri:h,status:"uploaded",sizeInBytes:17863},{contextId:"existing-test2-3",fileName:"aCoolDocument.pdf",storageId:"storage-id-test2-3",contentType:"application/pdf",status:"uploaded",sizeInBytes:5818},{contextId:"existing-test2-4",fileName:"screenshot.png",storageId:"storage-id-test2-4",contentType:"image/png",thumbnailUri:b,status:"uploaded",sizeInBytes:192811}]}]),i={args:t},o={args:{...t,optional:!0}},n={args:{...t,optional:"Spesialtilpasset Verdi"}},l={args:{...t,required:!0}},p={args:{...t,required:"Påkrevd"}},d={args:{...t,variant:"dropzone"}},c={args:{...t,variant:"dropzone",existingFilesProvider:pe}},u={args:{...t,error:"Det oppstod en feil"}},m={args:{...t,description:"Capture button vises kun på mobilenheter",withCaptureButton:!0,files:[]}},g={args:{...t,files:[],existingFilesProvider:pe}},xe=async e=>new Promise(s=>{const a=e.get("file"),v=10*1024*1024;setTimeout(()=>{a&&a.size>v?s({storageId:"",success:!1,error:"file-too-large"}):s({storageId:ue(),success:!0})},1500)}),de=async()=>new Promise(e=>{setTimeout(()=>{e()},1e3)}),f={decorators:[e=>r.jsx(le.Provider,{value:{uploadFile:xe,deleteFile:de},children:r.jsx(e,{})})],args:{...t,description:"Filer som er større enn 10MB vil bli avvist",files:[]}},x={args:{...t,allowedFileTypes:[".exe",".bat",".zip","image/*"],description:"Aksepterer kun filer med utvidelsene .exe, .bat, .zip og bildefiler",files:[]}},Fe=async()=>new Promise(e=>{setTimeout(()=>{e({storageId:"",success:!1,error:"file-scan-failed"})},1500)}),F={decorators:[e=>r.jsx(le.Provider,{value:{uploadFile:Fe,deleteFile:de},children:r.jsx(e,{})})],args:{...t,description:"Opplastning av fil vil gi feil ved scanning av filen",files:[]}};var S,P,z;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: defaultProps
}`,...(z=(P=i.parameters)==null?void 0:P.docs)==null?void 0:z.source}}};var T,w,B;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    optional: true
  }
}`,...(B=(w=o.parameters)==null?void 0:w.docs)==null?void 0:B.source}}};var C,j,U;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    optional: 'Spesialtilpasset Verdi'
  }
}`,...(U=(j=n.parameters)==null?void 0:j.docs)==null?void 0:U.source}}};var W,D,k;l.parameters={...l.parameters,docs:{...(W=l.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    required: true
  }
}`,...(k=(D=l.parameters)==null?void 0:D.docs)==null?void 0:k.source}}};var E,N,q;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    required: 'Påkrevd'
  }
}`,...(q=(N=p.parameters)==null?void 0:N.docs)==null?void 0:q.source}}};var R,O,A;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    variant: 'dropzone'
  }
}`,...(A=(O=d.parameters)==null?void 0:O.docs)==null?void 0:A.source}}};var L,V,M;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    variant: 'dropzone',
    existingFilesProvider: existingFilesProvider
  }
}`,...(M=(V=c.parameters)==null?void 0:V.docs)==null?void 0:M.source}}};var _,X,G;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    error: 'Det oppstod en feil'
  }
}`,...(G=(X=u.parameters)==null?void 0:X.docs)==null?void 0:G.source}}};var H,J,K;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    description: 'Capture button vises kun på mobilenheter',
    withCaptureButton: true,
    files: []
  }
}`,...(K=(J=m.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,Y,Z;g.parameters={...g.parameters,docs:{...(Q=g.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    files: [],
    existingFilesProvider: existingFilesProvider
  }
}`,...(Z=(Y=g.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,ee,te;f.parameters={...f.parameters,docs:{...($=f.parameters)==null?void 0:$.docs,source:{originalSource:`{
  decorators: [Story => <FileUploaderContext.Provider value={{
    uploadFile: uploadFileWithSizeLimit,
    deleteFile: deleteFile
  }}>
        <Story />
      </FileUploaderContext.Provider>],
  args: {
    ...defaultProps,
    description: 'Filer som er større enn 10MB vil bli avvist',
    files: []
  }
}`,...(te=(ee=f.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var re,se,ae;x.parameters={...x.parameters,docs:{...(re=x.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    allowedFileTypes: ['.exe', '.bat', '.zip', 'image/*'],
    description: 'Aksepterer kun filer med utvidelsene .exe, .bat, .zip og bildefiler',
    files: []
  }
}`,...(ae=(se=x.parameters)==null?void 0:se.docs)==null?void 0:ae.source}}};var ie,oe,ne;F.parameters={...F.parameters,docs:{...(ie=F.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  decorators: [Story => <FileUploaderContext.Provider value={{
    uploadFile: uploadFileWithFileScan,
    deleteFile: deleteFile
  }}>
        <Story />
      </FileUploaderContext.Provider>],
  args: {
    ...defaultProps,
    description: 'Opplastning av fil vil gi feil ved scanning av filen',
    files: []
  }
}`,...(ne=(oe=F.parameters)==null?void 0:oe.docs)==null?void 0:ne.source}}};const Oe=["Default","Optional","OptionalText","Required","RequiredText","Dropzone","DropzoneWithExistingFiles","WithError","WithCaptureButton","WithExistingFiles","withFileSizeLimit","withAllowedFileTypes","withFileScanFailed"];export{i as Default,d as Dropzone,c as DropzoneWithExistingFiles,o as Optional,n as OptionalText,l as Required,p as RequiredText,m as WithCaptureButton,u as WithError,g as WithExistingFiles,Oe as __namedExportsOrder,Re as default,x as withAllowedFileTypes,F as withFileScanFailed,f as withFileSizeLimit};
