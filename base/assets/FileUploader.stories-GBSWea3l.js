import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{ai as ne,aA as ae,aB as le}from"./idContext-Bnw4pj21.js";import{S as de}from"./styrbordDecorator-BD6sn6Ir.js";import{r as pe}from"./iframe-BhmXTjBE.js";import{c as v}from"./Cat 1-CDyACPiq.js";import"./Details-BqhNeA-K.js";import"./index-BaQCzXTN.js";import"./lite-DaUVFjkg.js";import"./kyvDivider-GkhM6YIE.js";import"./typography-CdiQYpGP.js";import"./skillingsbuoye-BG85ofhS.js";import"./Logo-DajRw6N7.js";import"./index-CaJk13To.js";import"./index-DFftvwDE.js";import"./index-Ba4PAqFe.js";import"./label-Cxlmn-Py.js";import"./heading-BdOx7Qsw.js";import"./index-Df_dbwgn.js";import"./translations-DCgBNHDh.js";import"./preload-helper-Dp1pzeXC.js";const h=""+new URL("Cat 2-C4vXFRRz.jpg",import.meta.url).href,ce=e=>{const[s,a]=pe.useState([...e.files]),F=y=>{var I;a(y),(I=e.onChange)==null||I.call(e,y)};return r.jsx(ne,{...e,files:s,onChange:F})},Ee={title:"Form/FileUploader",component:ce,decorators:[de],tags:["autodocs","kyv","beta"],argTypes:{}},t={label:"Last opp filer",description:"Du kan laste opp flere filer samtidig",error:null,multiple:!0,files:[{fileName:"file1.txt",status:"uploaded",contentType:"text/plain",contextId:"214b3c2e-1f4d-4f8a-9b6c-5d7e8f9a0b1c",storageId:"1",sizeInBytes:92881},{fileName:"file2.txt",status:"uploaded",contentType:"text/plain",contextId:"214b3c2e-1f4d-4f3a-9b6c-5d7e8f9a0b1c",storageId:"1",sizeInBytes:12122},{fileName:"file3.jpeg",status:"uploaded",contentType:"image/jpeg",thumbnailUri:v,contextId:"214b3c2e-1f4d-4f8a-a127-5d7e8f9a0b1c",storageId:"1",sizeInBytes:9281231}],maxFiles:5,maxSizeInBytes:10*1e3*1e3,onChange:e=>console.log("Files changed:",e),allowedFileTypes:[".pdf",".jpg",".jpeg",".png"]},ie=async()=>(await new Promise(e=>setTimeout(e,1e3)),[{title:"Testfiler",label:"Dette er bare noen testfiler",files:[{contextId:"existing-1",fileName:"document1.pdf",storageId:"storage-id-1",contentType:"application/pdf",status:"uploaded",sizeInBytes:5818},{contextId:"existing-2",fileName:"image1.jpg",storageId:"storage-id-2",contentType:"image/jpeg",thumbnailUri:v,status:"uploaded",sizeInBytes:17863},{contextId:"existing-3",fileName:"screenshot.png",storageId:"storage-id-3",contentType:"image/png",thumbnailUri:h,status:"uploaded",sizeInBytes:192811}]},{title:"Flere testfiler",label:"Abrakadabra, this page now has more testfiles",files:[{contextId:"existing-test2-1",fileName:"document1.pdf",storageId:"storage-id-test2-1",contentType:"application/pdf",status:"uploaded",sizeInBytes:5818},{contextId:"existing-test2-2",fileName:"image1.jpg",storageId:"storage-id-test2-2",contentType:"image/jpeg",thumbnailUri:v,status:"uploaded",sizeInBytes:17863},{contextId:"existing-test2-3",fileName:"aCoolDocument.pdf",storageId:"storage-id-test2-3",contentType:"application/pdf",status:"uploaded",sizeInBytes:5818},{contextId:"existing-test2-4",fileName:"screenshot.png",storageId:"storage-id-test2-4",contentType:"image/png",thumbnailUri:h,status:"uploaded",sizeInBytes:192811}]}]),i={args:t},o={args:{...t,optional:!0}},n={args:{...t,optional:"Spesialtilpasset Verdi"}},l={args:{...t,required:!0}},d={args:{...t,required:"Påkrevd"}},p={args:{...t,variant:"dropzone"}},c={args:{...t,variant:"dropzone",existingFilesProvider:ie}},u={args:{...t,error:"Det oppstod en feil"}},m={args:{...t,files:[],existingFilesProvider:ie}},ue=async e=>new Promise(s=>{const a=e.get("file"),F=10*1024*1024;setTimeout(()=>{a&&a.size>F?s({storageId:"",success:!1,error:"file-too-large"}):s({storageId:le(),success:!0})},1500)}),oe=async()=>new Promise(e=>{setTimeout(()=>{e()},1e3)}),g={decorators:[e=>r.jsx(ae.Provider,{value:{uploadFile:ue,deleteFile:oe},children:r.jsx(e,{})})],args:{...t,description:"Filer som er større enn 10MB vil bli avvist",files:[]}},f={args:{...t,allowedFileTypes:[".exe",".bat",".zip","image/*"],description:"Aksepterer kun filer med utvidelsene .exe, .bat, .zip og bildefiler",files:[]}},me=async()=>new Promise(e=>{setTimeout(()=>{e({storageId:"",success:!1,error:"file-scan-failed"})},1500)}),x={decorators:[e=>r.jsx(ae.Provider,{value:{uploadFile:me,deleteFile:oe},children:r.jsx(e,{})})],args:{...t,description:"Opplastning av fil vil gi feil ved scanning av filen",files:[]}};var S,z,P;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: defaultProps
}`,...(P=(z=i.parameters)==null?void 0:z.docs)==null?void 0:P.source}}};var b,T,w;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    optional: true
  }
}`,...(w=(T=o.parameters)==null?void 0:T.docs)==null?void 0:w.source}}};var j,B,U;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    optional: 'Spesialtilpasset Verdi'
  }
}`,...(U=(B=n.parameters)==null?void 0:B.docs)==null?void 0:U.source}}};var D,C,W;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    required: true
  }
}`,...(W=(C=l.parameters)==null?void 0:C.docs)==null?void 0:W.source}}};var E,N,k;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    required: 'Påkrevd'
  }
}`,...(k=(N=d.parameters)==null?void 0:N.docs)==null?void 0:k.source}}};var q,R,O;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    variant: 'dropzone'
  }
}`,...(O=(R=p.parameters)==null?void 0:R.docs)==null?void 0:O.source}}};var A,L,V;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    variant: 'dropzone',
    existingFilesProvider: existingFilesProvider
  }
}`,...(V=(L=c.parameters)==null?void 0:L.docs)==null?void 0:V.source}}};var M,_,X;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    error: 'Det oppstod en feil'
  }
}`,...(X=(_=u.parameters)==null?void 0:_.docs)==null?void 0:X.source}}};var G,H,J;m.parameters={...m.parameters,docs:{...(G=m.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    files: [],
    existingFilesProvider: existingFilesProvider
  }
}`,...(J=(H=m.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var K,Q,Y;g.parameters={...g.parameters,docs:{...(K=g.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(Y=(Q=g.parameters)==null?void 0:Q.docs)==null?void 0:Y.source}}};var Z,$,ee;f.parameters={...f.parameters,docs:{...(Z=f.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    allowedFileTypes: ['.exe', '.bat', '.zip', 'image/*'],
    description: 'Aksepterer kun filer med utvidelsene .exe, .bat, .zip og bildefiler',
    files: []
  }
}`,...(ee=($=f.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var te,re,se;x.parameters={...x.parameters,docs:{...(te=x.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(se=(re=x.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};const Ne=["Default","Optional","OptionalText","Required","RequiredText","Dropzone","DropzoneWithExistingFiles","WithError","WithExistingFiles","withFileSizeLimit","withAllowedFileTypes","withFileScanFailed"];export{i as Default,p as Dropzone,c as DropzoneWithExistingFiles,o as Optional,n as OptionalText,l as Required,d as RequiredText,u as WithError,m as WithExistingFiles,Ne as __namedExportsOrder,Ee as default,f as withAllowedFileTypes,x as withFileScanFailed,g as withFileSizeLimit};
