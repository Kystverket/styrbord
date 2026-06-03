import{S as be,r as Pe,j as r}from"./iframe-Bc0iwzJg.js";import{r as we,s as b,v as he}from"./Suggestion-CVgjYBSF.js";import{c as S}from"./Cat 1-CDyACPiq.js";import{p as Se}from"./Pikekyst Oppskrift-Mt2fCVYl.js";import"./preload-helper-Dp1pzeXC.js";import"./tooltip-BYDoFezS.js";import"./index-CRNhjEzP.js";import"./index-Bn4qVYvC.js";import"./Details-D8tQI6yP.js";import"./KyvDivider-D59bgKYZ.js";import"./typography-B--PWgnB.js";import"./KyvSpinner-BmbdfWGW.js";import"./skillingsbuoye-DGYYF_3C.js";import"./Logo-BhDDaUEN.js";const T=""+new URL("Cat 2-C4vXFRRz.jpg",import.meta.url).href,Fe=async()=>new Promise(e=>{setTimeout(()=>{e([{storageId:"1",thumbnailUri:S,previewUri:S,sizeInBytes:9281231},{storageId:"2",thumbnailUri:T,previewUri:T,sizeInBytes:192811},{storageId:"3",thumbnailUri:void 0,previewUri:Se,sizeInBytes:12122}])},1e3)}),Te=e=>{const[a,s]=Pe.useState([...e.files]),y=w=>{var h;s(w),(h=e.onChange)==null||h.call(e,w)};return r.jsx(we,{...e,files:a,onChange:y})},Me={title:"Form/FileUploader",component:Te,decorators:[be],tags:["autodocs","kyv","beta"],argTypes:{}},t={label:"Last opp filer",description:"Du kan laste opp flere filer samtidig",error:null,multiple:!0,files:[{fileName:"file1.txt",status:"uploaded",contentType:"text/plain",contextId:"214b3c2e-1f4d-4f8a-9b6c-5d7e8f9a0b1c",storageId:"1"},{fileName:"file2.txt",status:"uploaded",contentType:"text/plain",contextId:"214b3c2e-1f4d-4f3a-9b6c-5d7e8f9a0b1c",storageId:"1"},{fileName:"file3.jpeg",status:"uploaded",contentType:"image/jpeg",contextId:"214b3c2e-1f4d-4f8a-a127-5d7e8f9a0b1c",storageId:"1"}],maxFiles:5,maxSizeInBytes:10*1e3*1e3,onChange:e=>console.log("Files changed:",e),allowedFileTypes:[".pdf",".jpg",".jpeg",".png"]},Ie=async()=>(await new Promise(e=>setTimeout(e,1e3)),[{title:"Testfiler",label:"Dette er bare noen testfiler",files:[{contextId:"existing-1",fileName:"document1.pdf",storageId:"storage-id-1",contentType:"application/pdf",status:"uploaded"},{contextId:"existing-2",fileName:"image1.jpg",storageId:"storage-id-2",contentType:"image/jpeg",status:"uploaded"},{contextId:"existing-3",fileName:"screenshot.png",storageId:"storage-id-3",contentType:"image/png",status:"uploaded"}]},{title:"Flere testfiler",label:"Abrakadabra, this page now has more testfiles",files:[{contextId:"existing-test2-1",fileName:"document1.pdf",storageId:"storage-id-test2-1",contentType:"application/pdf",status:"uploaded"},{contextId:"existing-test2-2",fileName:"image1.jpg",storageId:"storage-id-test2-2",contentType:"image/jpeg",status:"uploaded"},{contextId:"existing-test2-3",fileName:"aCoolDocument.pdf",storageId:"storage-id-test2-3",contentType:"application/pdf",status:"uploaded"},{contextId:"existing-test2-4",fileName:"screenshot.png",storageId:"storage-id-test2-4",contentType:"image/png",status:"uploaded"}]}]),i={args:t},o={args:{...t,optional:!0}},n={args:{...t,optional:"Spesialtilpasset Verdi"}},l={args:{...t,required:!0}},d={args:{...t,required:"Påkrevd"}},p={args:{...t,variant:"dropzone"}},c={args:{...t,variant:"dropzone",existingFilesProvider:Ie}},u={args:{...t,error:"Det oppstod en feil"}},g={args:{...t,description:"Capture button vises kun på mobilenheter",withCaptureButton:!0,files:[]}},m={args:{...t,files:[],existingFilesProvider:Ie}},ye=async e=>new Promise(a=>{const s=e.get("file"),y=10*1024*1024;setTimeout(()=>{s&&s.size>y?a({storageId:"",success:!1,error:"file-too-large"}):a({storageId:he(),success:!0})},1500)}),P=async()=>new Promise(e=>{setTimeout(()=>{e()},1e3)}),f={decorators:[e=>r.jsx(b.Provider,{value:{uploadFile:ye,deleteFile:P,deriveFileInfosFromStorageIds:Fe},children:r.jsx(e,{})})],args:{...t,description:"Filer som er større enn 10MB vil bli avvist",files:[]}},x={decorators:[e=>r.jsx(b.Provider,{value:{uploadFile:ye,deleteFile:P,deriveFileInfosFromStorageIds:Fe},children:r.jsx(e,{})})],args:{...t,allowFilePreview:!0,description:"Filer som er større enn 10MB vil bli avvist",files:[{fileName:"cat1.jpg",status:"uploaded",contentType:"image/jpeg",contextId:"214b3c2e-1f4d-4f8a-9b6c-5d7e8f9xxb1c",storageId:"1"},{fileName:"cat2.jpg",status:"uploaded",contentType:"image/jpeg",contextId:"214b3c2e-1f4d-4f3a-9b6c-5d7e8fdsd0b1c",storageId:"2"},{fileName:"file3.pdf",status:"uploaded",contentType:"application/pdf",contextId:"214b3c2e-1f4d-4f8a-a127-5d7e8ffff1c",storageId:"3"}]}},v={args:{...t,allowedFileTypes:[".exe",".bat",".zip","image/*"],description:"Aksepterer kun filer med utvidelsene .exe, .bat, .zip og bildefiler",files:[]}},je=async()=>new Promise(e=>{setTimeout(()=>{e({storageId:"",success:!1,error:"file-scan-failed"})},1500)}),F={decorators:[e=>r.jsx(b.Provider,{value:{uploadFile:je,deleteFile:P},children:r.jsx(e,{})})],args:{...t,description:"Opplastning av fil vil gi feil ved scanning av filen",files:[]}},I={args:{...t,allowFilePreview:!0,description:"Klikk på forhåndsvisningsknappen for å se filer i full størrelse",files:[{fileName:"Pikekyst Oppskrift.pdf",status:"uploaded",contentType:"application/pdf",contextId:"preview-pdf-1",storageId:"1"},{fileName:"file3.jpeg",status:"uploaded",contentType:"image/jpeg",contextId:"preview-img-1",storageId:"2"},{fileName:"file4.jpeg",status:"uploaded",contentType:"image/jpeg",contextId:"preview-img-2",storageId:"3"},{fileName:"readme.txt",status:"uploaded",contentType:"text/plain",contextId:"preview-txt-1",storageId:"4"}]}};var j,k,z;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: defaultProps
}`,...(z=(k=i.parameters)==null?void 0:k.docs)==null?void 0:z.source}}};var N,C,U;o.parameters={...o.parameters,docs:{...(N=o.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    optional: true
  }
}`,...(U=(C=o.parameters)==null?void 0:C.docs)==null?void 0:U.source}}};var W,B,D;n.parameters={...n.parameters,docs:{...(W=n.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    optional: 'Spesialtilpasset Verdi'
  }
}`,...(D=(B=n.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};var E,O,q;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    required: true
  }
}`,...(q=(O=l.parameters)==null?void 0:O.docs)==null?void 0:q.source}}};var R,L,A;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    required: 'Påkrevd'
  }
}`,...(A=(L=d.parameters)==null?void 0:L.docs)==null?void 0:A.source}}};var M,V,K;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    variant: 'dropzone'
  }
}`,...(K=(V=p.parameters)==null?void 0:V.docs)==null?void 0:K.source}}};var _,X,G;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    variant: 'dropzone',
    existingFilesProvider: existingFilesProvider
  }
}`,...(G=(X=c.parameters)==null?void 0:X.docs)==null?void 0:G.source}}};var H,J,Q;u.parameters={...u.parameters,docs:{...(H=u.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    error: 'Det oppstod en feil'
  }
}`,...(Q=(J=u.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var Y,Z,$;g.parameters={...g.parameters,docs:{...(Y=g.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    description: 'Capture button vises kun på mobilenheter',
    withCaptureButton: true,
    files: []
  }
}`,...($=(Z=g.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,te,re;m.parameters={...m.parameters,docs:{...(ee=m.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    files: [],
    existingFilesProvider: existingFilesProvider
  }
}`,...(re=(te=m.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};var ae,se,ie;f.parameters={...f.parameters,docs:{...(ae=f.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  decorators: [Story => <FileUploaderContext.Provider value={{
    uploadFile: uploadFileWithSizeLimit,
    deleteFile: deleteFile,
    deriveFileInfosFromStorageIds
  }}>
        <Story />
      </FileUploaderContext.Provider>],
  args: {
    ...defaultProps,
    description: 'Filer som er større enn 10MB vil bli avvist',
    files: []
  }
}`,...(ie=(se=f.parameters)==null?void 0:se.docs)==null?void 0:ie.source}}};var oe,ne,le;x.parameters={...x.parameters,docs:{...(oe=x.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  decorators: [Story => <FileUploaderContext.Provider value={{
    uploadFile: uploadFileWithSizeLimit,
    deleteFile: deleteFile,
    deriveFileInfosFromStorageIds
  }}>
        <Story />
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
}`,...(le=(ne=x.parameters)==null?void 0:ne.docs)==null?void 0:le.source}}};var de,pe,ce;v.parameters={...v.parameters,docs:{...(de=v.parameters)==null?void 0:de.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    allowedFileTypes: ['.exe', '.bat', '.zip', 'image/*'],
    description: 'Aksepterer kun filer med utvidelsene .exe, .bat, .zip og bildefiler',
    files: []
  }
}`,...(ce=(pe=v.parameters)==null?void 0:pe.docs)==null?void 0:ce.source}}};var ue,ge,me;F.parameters={...F.parameters,docs:{...(ue=F.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
}`,...(me=(ge=F.parameters)==null?void 0:ge.docs)==null?void 0:me.source}}};var fe,xe,ve;I.parameters={...I.parameters,docs:{...(fe=I.parameters)==null?void 0:fe.docs,source:{originalSource:`{
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
}`,...(ve=(xe=I.parameters)==null?void 0:xe.docs)==null?void 0:ve.source}}};const Ve=["Default","Optional","OptionalText","Required","RequiredText","Dropzone","DropzoneWithExistingFiles","WithError","WithCaptureButton","WithExistingFiles","withFileSizeLimit","withPreviews","withAllowedFileTypes","withFileScanFailed","WithFilePreview"];export{i as Default,p as Dropzone,c as DropzoneWithExistingFiles,o as Optional,n as OptionalText,l as Required,d as RequiredText,g as WithCaptureButton,u as WithError,m as WithExistingFiles,I as WithFilePreview,Ve as __namedExportsOrder,Me as default,v as withAllowedFileTypes,F as withFileScanFailed,f as withFileSizeLimit,x as withPreviews};
