import{S as be,r as Pe,j as r}from"./iframe-BaKPPD1J.js";import{u as we,F as b,v as he}from"./Dialog-C0HmbON9.js";import{c as T}from"./Cat 1-CDyACPiq.js";import{p as Se}from"./Pikekyst Oppskrift-Mt2fCVYl.js";import"./preload-helper-Dp1pzeXC.js";import"./tooltip-CDM62wRo.js";import"./index-7tPpMOen.js";import"./index-BmhFWFPc.js";import"./Details-BWJIXiH8.js";import"./KyvDivider-BXv4n0ob.js";import"./typography-BIz6NTof.js";import"./KyvSpinner-shXAIoyL.js";import"./skillingsbuoye-X1pHeasA.js";import"./Logo-BsbRAMgD.js";const j=""+new URL("Cat 2-C4vXFRRz.jpg",import.meta.url).href,P=async()=>new Promise(e=>{setTimeout(()=>{e([{storageId:"1",thumbnailUri:T,previewUri:T,sizeInBytes:9281231},{storageId:"2",thumbnailUri:j,previewUri:j,sizeInBytes:192811},{storageId:"3",thumbnailUri:void 0,previewUri:Se,sizeInBytes:12122}])},1e3)}),Te=e=>{const[a,s]=Pe.useState([...e.files]),y=h=>{var S;s(h),(S=e.onChange)==null||S.call(e,h)};return r.jsx(we,{...e,files:a,onChange:y})},Me={title:"Form/FileUploader",component:Te,decorators:[be],tags:["autodocs","kyv","beta"],argTypes:{}},t={label:"Last opp filer",description:"Du kan laste opp flere filer samtidig",error:null,multiple:!0,files:[{fileName:"file1.txt",status:"uploaded",contentType:"text/plain",contextId:"214b3c2e-1f4d-4f8a-9b6c-5d7e8f9a0b1c",storageId:"1"},{fileName:"file2.txt",status:"uploaded",contentType:"text/plain",contextId:"214b3c2e-1f4d-4f3a-9b6c-5d7e8f9a0b1c",storageId:"1"},{fileName:"file3.jpeg",status:"uploaded",contentType:"image/jpeg",contextId:"214b3c2e-1f4d-4f8a-a127-5d7e8f9a0b1c",storageId:"1"}],maxFiles:5,maxSizeInBytes:10*1e3*1e3,onChange:e=>console.log("Files changed:",e),allowedFileTypes:[".pdf",".jpg",".jpeg",".png"]},Ie=async()=>(await new Promise(e=>setTimeout(e,1e3)),[{title:"Testfiler",label:"Dette er bare noen testfiler",files:[{contextId:"existing-1",fileName:"document1.pdf",storageId:"storage-id-1",contentType:"application/pdf",status:"uploaded"},{contextId:"existing-2",fileName:"image1.jpg",storageId:"storage-id-2",contentType:"image/jpeg",status:"uploaded"},{contextId:"existing-3",fileName:"screenshot.png",storageId:"storage-id-3",contentType:"image/png",status:"uploaded"}]},{title:"Flere testfiler",label:"Abrakadabra, this page now has more testfiles",files:[{contextId:"existing-test2-1",fileName:"document1.pdf",storageId:"storage-id-test2-1",contentType:"application/pdf",status:"uploaded"},{contextId:"existing-test2-2",fileName:"image1.jpg",storageId:"storage-id-test2-2",contentType:"image/jpeg",status:"uploaded"},{contextId:"existing-test2-3",fileName:"aCoolDocument.pdf",storageId:"storage-id-test2-3",contentType:"application/pdf",status:"uploaded"},{contextId:"existing-test2-4",fileName:"screenshot.png",storageId:"storage-id-test2-4",contentType:"image/png",status:"uploaded"}]}]),i={args:t},o={args:{...t,optional:!0}},n={args:{...t,optional:"Spesialtilpasset Verdi"}},l={args:{...t,required:!0}},d={args:{...t,required:"Påkrevd"}},p={args:{...t,variant:"dropzone"}},c={args:{...t,variant:"dropzone",existingFilesProvider:Ie}},u={args:{...t,error:"Det oppstod en feil"}},g={args:{...t,description:"Capture button vises kun på mobilenheter",withCaptureButton:!0,files:[]}},m={args:{...t,files:[],existingFilesProvider:Ie}},ye=async e=>new Promise(a=>{const s=e.get("file"),y=10*1024*1024;setTimeout(()=>{s&&s.size>y?a({storageId:"",success:!1,error:"file-too-large"}):a({storageId:he(),success:!0})},1500)}),w=async()=>new Promise(e=>{setTimeout(()=>{e()},1e3)}),f={decorators:[e=>r.jsx(b.Provider,{value:{uploadFile:ye,deleteFile:w,deriveFileInfosFromStorageIds:P},children:r.jsx(e,{})})],args:{...t,description:"Filer som er større enn 10MB vil bli avvist",files:[]}},x={decorators:[e=>r.jsx(b.Provider,{value:{uploadFile:ye,deleteFile:w,deriveFileInfosFromStorageIds:P},children:r.jsx(e,{})})],args:{...t,allowFilePreview:!0,description:"Filer som er større enn 10MB vil bli avvist",files:[{fileName:"cat1.jpg",status:"uploaded",contentType:"image/jpeg",contextId:"214b3c2e-1f4d-4f8a-9b6c-5d7e8f9xxb1c",storageId:"1"},{fileName:"cat2.jpg",status:"uploaded",contentType:"image/jpeg",contextId:"214b3c2e-1f4d-4f3a-9b6c-5d7e8fdsd0b1c",storageId:"2"},{fileName:"file3.pdf",status:"uploaded",contentType:"application/pdf",contextId:"214b3c2e-1f4d-4f8a-a127-5d7e8ffff1c",storageId:"3"}]}},v={args:{...t,allowedFileTypes:[".exe",".bat",".zip","image/*"],description:"Aksepterer kun filer med utvidelsene .exe, .bat, .zip og bildefiler",files:[]}},je=async()=>new Promise(e=>{setTimeout(()=>{e({storageId:"",success:!1,error:"file-scan-failed"})},1500)}),F={decorators:[e=>r.jsx(b.Provider,{value:{deriveFileInfosFromStorageIds:P,uploadFile:je,deleteFile:w},children:r.jsx(e,{})})],args:{...t,description:"Opplastning av fil vil gi feil ved scanning av filen",files:[]}},I={args:{...t,allowFilePreview:!0,description:"Klikk på forhåndsvisningsknappen for å se filer i full størrelse",files:[{fileName:"Pikekyst Oppskrift.pdf",status:"uploaded",contentType:"application/pdf",contextId:"preview-pdf-1",storageId:"1"},{fileName:"file3.jpeg",status:"uploaded",contentType:"image/jpeg",contextId:"preview-img-1",storageId:"2"},{fileName:"file4.jpeg",status:"uploaded",contentType:"image/jpeg",contextId:"preview-img-2",storageId:"3"},{fileName:"readme.txt",status:"uploaded",contentType:"text/plain",contextId:"preview-txt-1",storageId:"4"}]}};var k,z,N;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: defaultProps
}`,...(N=(z=i.parameters)==null?void 0:z.docs)==null?void 0:N.source}}};var C,U,W;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    optional: true
  }
}`,...(W=(U=o.parameters)==null?void 0:U.docs)==null?void 0:W.source}}};var B,D,E;n.parameters={...n.parameters,docs:{...(B=n.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    optional: 'Spesialtilpasset Verdi'
  }
}`,...(E=(D=n.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};var O,q,R;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    required: true
  }
}`,...(R=(q=l.parameters)==null?void 0:q.docs)==null?void 0:R.source}}};var L,A,M;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    required: 'Påkrevd'
  }
}`,...(M=(A=d.parameters)==null?void 0:A.docs)==null?void 0:M.source}}};var V,K,_;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    variant: 'dropzone'
  }
}`,...(_=(K=p.parameters)==null?void 0:K.docs)==null?void 0:_.source}}};var X,G,H;c.parameters={...c.parameters,docs:{...(X=c.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    variant: 'dropzone',
    existingFilesProvider: existingFilesProvider
  }
}`,...(H=(G=c.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var J,Q,Y;u.parameters={...u.parameters,docs:{...(J=u.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    error: 'Det oppstod en feil'
  }
}`,...(Y=(Q=u.parameters)==null?void 0:Q.docs)==null?void 0:Y.source}}};var Z,$,ee;g.parameters={...g.parameters,docs:{...(Z=g.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    description: 'Capture button vises kun på mobilenheter',
    withCaptureButton: true,
    files: []
  }
}`,...(ee=($=g.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var te,re,ae;m.parameters={...m.parameters,docs:{...(te=m.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    files: [],
    existingFilesProvider: existingFilesProvider
  }
}`,...(ae=(re=m.parameters)==null?void 0:re.docs)==null?void 0:ae.source}}};var se,ie,oe;f.parameters={...f.parameters,docs:{...(se=f.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(oe=(ie=f.parameters)==null?void 0:ie.docs)==null?void 0:oe.source}}};var ne,le,de;x.parameters={...x.parameters,docs:{...(ne=x.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(de=(le=x.parameters)==null?void 0:le.docs)==null?void 0:de.source}}};var pe,ce,ue;v.parameters={...v.parameters,docs:{...(pe=v.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    allowedFileTypes: ['.exe', '.bat', '.zip', 'image/*'],
    description: 'Aksepterer kun filer med utvidelsene .exe, .bat, .zip og bildefiler',
    files: []
  }
}`,...(ue=(ce=v.parameters)==null?void 0:ce.docs)==null?void 0:ue.source}}};var ge,me,fe;F.parameters={...F.parameters,docs:{...(ge=F.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  decorators: [Story => <FileUploaderContext.Provider value={{
    deriveFileInfosFromStorageIds,
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
}`,...(fe=(me=F.parameters)==null?void 0:me.docs)==null?void 0:fe.source}}};var xe,ve,Fe;I.parameters={...I.parameters,docs:{...(xe=I.parameters)==null?void 0:xe.docs,source:{originalSource:`{
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
}`,...(Fe=(ve=I.parameters)==null?void 0:ve.docs)==null?void 0:Fe.source}}};const Ve=["Default","Optional","OptionalText","Required","RequiredText","Dropzone","DropzoneWithExistingFiles","WithError","WithCaptureButton","WithExistingFiles","withFileSizeLimit","withPreviews","withAllowedFileTypes","withFileScanFailed","WithFilePreview"];export{i as Default,p as Dropzone,c as DropzoneWithExistingFiles,o as Optional,n as OptionalText,l as Required,d as RequiredText,g as WithCaptureButton,u as WithError,m as WithExistingFiles,I as WithFilePreview,Ve as __namedExportsOrder,Me as default,v as withAllowedFileTypes,F as withFileScanFailed,f as withFileSizeLimit,x as withPreviews};
