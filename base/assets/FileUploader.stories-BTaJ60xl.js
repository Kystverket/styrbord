import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{au as fe,av as ue,aw as xe}from"./SlotDialog-CuE-xZdd.js";import{S as ve}from"./styrbordDecorator-DUnsr90U.js";import{r as Ie}from"./iframe-DkgepJ9T.js";import{c as y}from"./Cat 1-CDyACPiq.js";import{p as ye}from"./Pikekyst Oppskrift-Mt2fCVYl.js";import"./Details-BNXegy-d.js";import"./tooltip-Q5XGAmIk.js";import"./index-OUpqSSdN.js";import"./index-CXCEydTa.js";import"./translations-Nqk0a8n1.js";import"./kyvDivider-GkhM6YIE.js";import"./typography-CdiQYpGP.js";import"./skillingsbuoye-BG85ofhS.js";import"./Logo-DajRw6N7.js";import"./preload-helper-Dp1pzeXC.js";const h=""+new URL("Cat 2-C4vXFRRz.jpg",import.meta.url).href,Fe=e=>{const[s,a]=Ie.useState([...e.files]),F=P=>{var z;a(P),(z=e.onChange)==null||z.call(e,P)};return r.jsx(fe,{...e,files:s,onChange:F})},Re={title:"Form/FileUploader",component:Fe,decorators:[ve],tags:["autodocs","kyv","beta"],argTypes:{}},t={label:"Last opp filer",description:"Du kan laste opp flere filer samtidig",error:null,multiple:!0,files:[{fileName:"file1.txt",status:"uploaded",contentType:"text/plain",contextId:"214b3c2e-1f4d-4f8a-9b6c-5d7e8f9a0b1c",storageId:"1",sizeInBytes:92881},{fileName:"file2.txt",status:"uploaded",contentType:"text/plain",contextId:"214b3c2e-1f4d-4f3a-9b6c-5d7e8f9a0b1c",storageId:"1",sizeInBytes:12122},{fileName:"file3.jpeg",status:"uploaded",contentType:"image/jpeg",thumbnailUri:y,contextId:"214b3c2e-1f4d-4f8a-a127-5d7e8f9a0b1c",storageId:"1",sizeInBytes:9281231}],maxFiles:5,maxSizeInBytes:10*1e3*1e3,onChange:e=>console.log("Files changed:",e),allowedFileTypes:[".pdf",".jpg",".jpeg",".png"]},me=async()=>(await new Promise(e=>setTimeout(e,1e3)),[{title:"Testfiler",label:"Dette er bare noen testfiler",files:[{contextId:"existing-1",fileName:"document1.pdf",storageId:"storage-id-1",contentType:"application/pdf",status:"uploaded",sizeInBytes:5818},{contextId:"existing-2",fileName:"image1.jpg",storageId:"storage-id-2",contentType:"image/jpeg",thumbnailUri:y,status:"uploaded",sizeInBytes:17863},{contextId:"existing-3",fileName:"screenshot.png",storageId:"storage-id-3",contentType:"image/png",thumbnailUri:h,status:"uploaded",sizeInBytes:192811}]},{title:"Flere testfiler",label:"Abrakadabra, this page now has more testfiles",files:[{contextId:"existing-test2-1",fileName:"document1.pdf",storageId:"storage-id-test2-1",contentType:"application/pdf",status:"uploaded",sizeInBytes:5818},{contextId:"existing-test2-2",fileName:"image1.jpg",storageId:"storage-id-test2-2",contentType:"image/jpeg",thumbnailUri:y,status:"uploaded",sizeInBytes:17863},{contextId:"existing-test2-3",fileName:"aCoolDocument.pdf",storageId:"storage-id-test2-3",contentType:"application/pdf",status:"uploaded",sizeInBytes:5818},{contextId:"existing-test2-4",fileName:"screenshot.png",storageId:"storage-id-test2-4",contentType:"image/png",thumbnailUri:h,status:"uploaded",sizeInBytes:192811}]}]),i={args:t},o={args:{...t,optional:!0}},n={args:{...t,optional:"Spesialtilpasset Verdi"}},l={args:{...t,required:!0}},p={args:{...t,required:"Påkrevd"}},d={args:{...t,variant:"dropzone"}},c={args:{...t,variant:"dropzone",existingFilesProvider:me}},u={args:{...t,error:"Det oppstod en feil"}},m={args:{...t,description:"Capture button vises kun på mobilenheter",withCaptureButton:!0,files:[]}},g={args:{...t,files:[],existingFilesProvider:me}},he=async e=>new Promise(s=>{const a=e.get("file"),F=10*1024*1024;setTimeout(()=>{a&&a.size>F?s({storageId:"",success:!1,error:"file-too-large"}):s({storageId:xe(),success:!0})},1500)}),ge=async()=>new Promise(e=>{setTimeout(()=>{e()},1e3)}),f={decorators:[e=>r.jsx(ue.Provider,{value:{uploadFile:he,deleteFile:ge},children:r.jsx(e,{})})],args:{...t,description:"Filer som er større enn 10MB vil bli avvist",files:[]}},x={args:{...t,allowedFileTypes:[".exe",".bat",".zip","image/*"],description:"Aksepterer kun filer med utvidelsene .exe, .bat, .zip og bildefiler",files:[]}},Pe=async()=>new Promise(e=>{setTimeout(()=>{e({storageId:"",success:!1,error:"file-scan-failed"})},1500)}),v={decorators:[e=>r.jsx(ue.Provider,{value:{uploadFile:Pe,deleteFile:ge},children:r.jsx(e,{})})],args:{...t,description:"Opplastning av fil vil gi feil ved scanning av filen",files:[]}},I={args:{...t,allowFilePreview:!0,description:"Klikk på forhåndsvisningsknappen for å se filer i full størrelse",files:[{fileName:"Pikekyst Oppskrift.pdf",status:"uploaded",contentType:"application/pdf",contextId:"preview-pdf-1",storageId:"1",previewUri:ye,sizeInBytes:92881},{fileName:"file3.jpeg",status:"uploaded",contentType:"image/jpeg",thumbnailUri:y,contextId:"preview-img-1",storageId:"1",sizeInBytes:9281231},{fileName:"file4.jpeg",status:"uploaded",contentType:"image/jpeg",thumbnailUri:h,contextId:"preview-img-2",storageId:"1",sizeInBytes:192811},{fileName:"readme.txt",status:"uploaded",contentType:"text/plain",contextId:"preview-txt-1",storageId:"1",sizeInBytes:12122}]}};var b,w,S;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: defaultProps
}`,...(S=(w=i.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var T,k,B;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    optional: true
  }
}`,...(B=(k=o.parameters)==null?void 0:k.docs)==null?void 0:B.source}}};var j,U,N;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    optional: 'Spesialtilpasset Verdi'
  }
}`,...(N=(U=n.parameters)==null?void 0:U.docs)==null?void 0:N.source}}};var C,W,D;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    required: true
  }
}`,...(D=(W=l.parameters)==null?void 0:W.docs)==null?void 0:D.source}}};var E,O,q;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    required: 'Påkrevd'
  }
}`,...(q=(O=p.parameters)==null?void 0:O.docs)==null?void 0:q.source}}};var R,L,A;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    variant: 'dropzone'
  }
}`,...(A=(L=d.parameters)==null?void 0:L.docs)==null?void 0:A.source}}};var V,K,M;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    variant: 'dropzone',
    existingFilesProvider: existingFilesProvider
  }
}`,...(M=(K=c.parameters)==null?void 0:K.docs)==null?void 0:M.source}}};var _,X,G;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    error: 'Det oppstod en feil'
  }
}`,...(G=(X=u.parameters)==null?void 0:X.docs)==null?void 0:G.source}}};var H,J,Q;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    description: 'Capture button vises kun på mobilenheter',
    withCaptureButton: true,
    files: []
  }
}`,...(Q=(J=m.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var Y,Z,$;g.parameters={...g.parameters,docs:{...(Y=g.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    files: [],
    existingFilesProvider: existingFilesProvider
  }
}`,...($=(Z=g.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,te,re;f.parameters={...f.parameters,docs:{...(ee=f.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(re=(te=f.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};var se,ae,ie;x.parameters={...x.parameters,docs:{...(se=x.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    allowedFileTypes: ['.exe', '.bat', '.zip', 'image/*'],
    description: 'Aksepterer kun filer med utvidelsene .exe, .bat, .zip og bildefiler',
    files: []
  }
}`,...(ie=(ae=x.parameters)==null?void 0:ae.docs)==null?void 0:ie.source}}};var oe,ne,le;v.parameters={...v.parameters,docs:{...(oe=v.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(le=(ne=v.parameters)==null?void 0:ne.docs)==null?void 0:le.source}}};var pe,de,ce;I.parameters={...I.parameters,docs:{...(pe=I.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    allowFilePreview: true,
    description: 'Klikk på forhåndsvisningsknappen for å se filer i full størrelse',
    files: [{
      fileName: 'Pikekyst Oppskrift.pdf',
      status: 'uploaded',
      contentType: 'application/pdf',
      contextId: 'preview-pdf-1',
      storageId: '1',
      previewUri: samplePdf,
      sizeInBytes: 92881
    }, {
      fileName: 'file3.jpeg',
      status: 'uploaded',
      contentType: 'image/jpeg',
      thumbnailUri: cat1,
      contextId: 'preview-img-1',
      storageId: '1',
      sizeInBytes: 9281231
    }, {
      fileName: 'file4.jpeg',
      status: 'uploaded',
      contentType: 'image/jpeg',
      thumbnailUri: cat2,
      contextId: 'preview-img-2',
      storageId: '1',
      sizeInBytes: 192811
    }, {
      fileName: 'readme.txt',
      status: 'uploaded',
      contentType: 'text/plain',
      contextId: 'preview-txt-1',
      storageId: '1',
      sizeInBytes: 12122
    }]
  }
}`,...(ce=(de=I.parameters)==null?void 0:de.docs)==null?void 0:ce.source}}};const Le=["Default","Optional","OptionalText","Required","RequiredText","Dropzone","DropzoneWithExistingFiles","WithError","WithCaptureButton","WithExistingFiles","withFileSizeLimit","withAllowedFileTypes","withFileScanFailed","WithFilePreview"];export{i as Default,d as Dropzone,c as DropzoneWithExistingFiles,o as Optional,n as OptionalText,l as Required,p as RequiredText,m as WithCaptureButton,u as WithError,g as WithExistingFiles,I as WithFilePreview,Le as __namedExportsOrder,Re as default,x as withAllowedFileTypes,v as withFileScanFailed,f as withFileSizeLimit};
