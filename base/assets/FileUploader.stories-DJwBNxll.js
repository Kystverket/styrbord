import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{az as xe,aA as S,aB as Fe,aC as ve}from"./Avatar-d7v8JLtn.js";import{S as he}from"./styrbordDecorator-DfWZX-fO.js";import"./Details-CAeDNW6u.js";import"./kyvDivider-GkhM6YIE.js";import"./typography-CdiQYpGP.js";import"./skillingsbuoye-BG85ofhS.js";import"./Logo-DajRw6N7.js";import{r as ye}from"./iframe-C-JPeFls.js";import{c as y}from"./Cat 1-CDyACPiq.js";import"./index-B1pQHFUr.js";import"./index-DrsSeW7j.js";import"./index-Dh7E3brm.js";import"./lite-DaUVFjkg.js";import"./index-LL7fkADg.js";import"./label-DiVTqMM-.js";import"./heading-43g9xmtW.js";import"./index-BFiLYyrj.js";import"./preload-helper-Dp1pzeXC.js";const T=""+new URL("Cat 2-C4vXFRRz.jpg",import.meta.url).href,Se=e=>{const[s,i]=ye.useState([...e.files]),h=I=>{var z;i(I),(z=e.onChange)==null||z.call(e,I)};return t.jsx(Fe,{...e,files:s,onChange:h})},Ve={title:"Form/FileUploader",component:Se,decorators:[he],tags:["autodocs","kyv","beta"],argTypes:{}},r={label:"Last opp filer",description:"Du kan laste opp flere filer samtidig",error:null,multiple:!0,files:[{fileName:"file1.txt",status:"uploaded",contentType:"text/plain",contextId:"214b3c2e-1f4d-4f8a-9b6c-5d7e8f9a0b1c",storageId:"1",sizeInBytes:92881},{fileName:"file2.txt",status:"uploaded",contentType:"text/plain",contextId:"214b3c2e-1f4d-4f3a-9b6c-5d7e8f9a0b1c",storageId:"1",sizeInBytes:12122},{fileName:"file3.jpeg",status:"uploaded",contentType:"image/jpeg",thumbnailUri:y,contextId:"214b3c2e-1f4d-4f8a-a127-5d7e8f9a0b1c",storageId:"1",sizeInBytes:9281231}],maxFiles:5,maxSizeInBytes:10*1e3*1e3,onChange:e=>console.log("Files changed:",e),allowedFileTypes:[".pdf",".jpg",".jpeg",".png"]},b=async()=>(await new Promise(e=>setTimeout(e,1e3)),[{title:"Testfiler",label:"Dette er bare noen testfiler",files:[{contextId:"existing-1",fileName:"document1.pdf",storageId:"storage-id-1",contentType:"application/pdf",status:"uploaded",sizeInBytes:5818},{contextId:"existing-2",fileName:"image1.jpg",storageId:"storage-id-2",contentType:"image/jpeg",thumbnailUri:y,status:"uploaded",sizeInBytes:17863},{contextId:"existing-3",fileName:"screenshot.png",storageId:"storage-id-3",contentType:"image/png",thumbnailUri:T,status:"uploaded",sizeInBytes:192811}]},{title:"Flere testfiler",label:"Abrakadabra, this page now has more testfiles",files:[{contextId:"existing-test2-1",fileName:"document1.pdf",storageId:"storage-id-test2-1",contentType:"application/pdf",status:"uploaded",sizeInBytes:5818},{contextId:"existing-test2-2",fileName:"image1.jpg",storageId:"storage-id-test2-2",contentType:"image/jpeg",thumbnailUri:y,status:"uploaded",sizeInBytes:17863},{contextId:"existing-test2-3",fileName:"aCoolDocument.pdf",storageId:"storage-id-test2-3",contentType:"application/pdf",status:"uploaded",sizeInBytes:5818},{contextId:"existing-test2-4",fileName:"screenshot.png",storageId:"storage-id-test2-4",contentType:"image/png",thumbnailUri:T,status:"uploaded",sizeInBytes:192811}]}]),a={args:r},o={args:{...r,optional:!0}},n={args:{...r,optional:"Spesialtilpasset Verdi"}},l={args:{...r,required:!0}},d={args:{...r,required:"Påkrevd"}},p={args:{...r,variant:"dropzone"}},c={args:{...r,variant:"dropzone",existingFilesProvider:b}},g={args:{...r,error:"Det oppstod en feil"}},u={args:{...r,files:[],existingFilesProvider:b}},m={args:{...r,files:[],existingFilesProvider:b,translations:{existingFiles:{buttonOpen:"Velg eksisterende filer",dialogTitle:"Velg eksisterende filer",dialogCancel:"Avbryt",dialogConfirm:"Legg til",noFilesAvailable:"Ingen eksisterende filer tilgjengelig"}}}},fe=async e=>new Promise(s=>{const i=e.get("file"),h=10*1024*1024;setTimeout(()=>{i&&i.size>h?s({storageId:"",success:!1,error:"file-too-large"}):s({storageId:ve(),success:!0})},1500)}),P=async()=>new Promise(e=>{setTimeout(()=>{e()},1e3)}),f={decorators:[e=>t.jsx(S.Provider,{value:{uploadFile:fe,deleteFile:P},children:t.jsx(e,{})})],args:{...r,description:"Filer som er større enn 10MB vil bli avvist",files:[]}},x={decorators:[e=>t.jsx(xe.Provider,{value:{language:"en-US"},children:t.jsx(S.Provider,{value:{uploadFile:fe,deleteFile:P},children:t.jsx(e,{})})})],args:{...r,label:"Upload files",description:"Files that are larger than 10MB will be denied",files:[]}},F={args:{...r,allowedFileTypes:[".exe",".bat",".zip","image/*"],description:"Aksepterer kun filer med utvidelsene .exe, .bat, .zip og bildefiler",files:[]}},be=async()=>new Promise(e=>{setTimeout(()=>{e({storageId:"",success:!1,error:"file-scan-failed"})},1500)}),v={decorators:[e=>t.jsx(S.Provider,{value:{uploadFile:be,deleteFile:P},children:t.jsx(e,{})})],args:{...r,description:"Opplastning av fil vil gi feil ved scanning av filen",files:[]}};var j,C,w;a.parameters={...a.parameters,docs:{...(j=a.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: defaultProps
}`,...(w=(C=a.parameters)==null?void 0:C.docs)==null?void 0:w.source}}};var U,W,B;o.parameters={...o.parameters,docs:{...(U=o.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    optional: true
  }
}`,...(B=(W=o.parameters)==null?void 0:W.docs)==null?void 0:B.source}}};var k,E,D;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    optional: 'Spesialtilpasset Verdi'
  }
}`,...(D=(E=n.parameters)==null?void 0:E.docs)==null?void 0:D.source}}};var L,A,N;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    required: true
  }
}`,...(N=(A=l.parameters)==null?void 0:A.docs)==null?void 0:N.source}}};var O,q,R;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    required: 'Påkrevd'
  }
}`,...(R=(q=d.parameters)==null?void 0:q.docs)==null?void 0:R.source}}};var V,M,_;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    variant: 'dropzone'
  }
}`,...(_=(M=p.parameters)==null?void 0:M.docs)==null?void 0:_.source}}};var X,G,H;c.parameters={...c.parameters,docs:{...(X=c.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    variant: 'dropzone',
    existingFilesProvider: existingFilesProvider
  }
}`,...(H=(G=c.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var J,K,Q;g.parameters={...g.parameters,docs:{...(J=g.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    error: 'Det oppstod en feil'
  }
}`,...(Q=(K=g.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var Y,Z,$;u.parameters={...u.parameters,docs:{...(Y=u.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    files: [],
    existingFilesProvider: existingFilesProvider
  }
}`,...($=(Z=u.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,re,te;m.parameters={...m.parameters,docs:{...(ee=m.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    files: [],
    existingFilesProvider: existingFilesProvider,
    translations: {
      existingFiles: {
        buttonOpen: 'Velg eksisterende filer',
        dialogTitle: 'Velg eksisterende filer',
        dialogCancel: 'Avbryt',
        dialogConfirm: 'Legg til',
        noFilesAvailable: 'Ingen eksisterende filer tilgjengelig'
      }
    }
  }
}`,...(te=(re=m.parameters)==null?void 0:re.docs)==null?void 0:te.source}}};var se,ie,ae;f.parameters={...f.parameters,docs:{...(se=f.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(ae=(ie=f.parameters)==null?void 0:ie.docs)==null?void 0:ae.source}}};var oe,ne,le;x.parameters={...x.parameters,docs:{...(oe=x.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  decorators: [Story => <StyrbordTranslationContext.Provider value={{
    language: 'en-US'
  }}>
        <FileUploaderContext.Provider value={{
      uploadFile: uploadFileWithSizeLimit,
      deleteFile: deleteFile
    }}>
          <Story />
        </FileUploaderContext.Provider>
      </StyrbordTranslationContext.Provider>],
  args: {
    ...defaultProps,
    label: 'Upload files',
    description: 'Files that are larger than 10MB will be denied',
    files: []
  }
}`,...(le=(ne=x.parameters)==null?void 0:ne.docs)==null?void 0:le.source}}};var de,pe,ce;F.parameters={...F.parameters,docs:{...(de=F.parameters)==null?void 0:de.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    allowedFileTypes: ['.exe', '.bat', '.zip', 'image/*'],
    description: 'Aksepterer kun filer med utvidelsene .exe, .bat, .zip og bildefiler',
    files: []
  }
}`,...(ce=(pe=F.parameters)==null?void 0:pe.docs)==null?void 0:ce.source}}};var ge,ue,me;v.parameters={...v.parameters,docs:{...(ge=v.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
}`,...(me=(ue=v.parameters)==null?void 0:ue.docs)==null?void 0:me.source}}};const Me=["Default","Optional","OptionalText","Required","RequiredText","Dropzone","DropzoneWithExistingFiles","WithError","WithExistingFiles","WithExistingFilesWithTranslations","withFileSizeLimit","WithFileSizeLimitEnglish","withAllowedFileTypes","withFileScanFailed"];export{a as Default,p as Dropzone,c as DropzoneWithExistingFiles,o as Optional,n as OptionalText,l as Required,d as RequiredText,g as WithError,u as WithExistingFiles,m as WithExistingFilesWithTranslations,x as WithFileSizeLimitEnglish,Me as __namedExportsOrder,Ve as default,F as withAllowedFileTypes,v as withFileScanFailed,f as withFileSizeLimit};
