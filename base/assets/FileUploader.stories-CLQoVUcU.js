import{S as Te,j as r,r as je}from"./iframe-B9-yjDGi.js";import{F as y,g as ke,h as w,v as Ce}from"./Dialog-DpRjgFic.js";import{c as k}from"./Cat 1-CDyACPiq.js";import{c as C}from"./Cat 2-CSvMt87v.js";import{p as Ne}from"./Pikekyst Oppskrift-Mt2fCVYl.js";import"./preload-helper-Dp1pzeXC.js";import"./tooltip-U8UQRzWx.js";import"./index-wmdR2T-Z.js";import"./index-DET-fz-T.js";import"./shipTypes-hFnSBndP.js";import"./Details-DlH4Y5Bu.js";import"./KyvDivider-CVN2Y6-7.js";import"./typography-lOLIvvUr.js";import"./KyvSpinner-DAFKdaUB.js";import"./skillingsbuoye-BH0NYPEG.js";import"./Logo-CGIJgWOZ.js";import"./color-tokens-DRys5hYJ.js";const b=async()=>new Promise(e=>{setTimeout(()=>{e([{storageId:"1",thumbnailUri:k,previewUri:k,sizeInBytes:9281231},{storageId:"2",thumbnailUri:C,previewUri:C,sizeInBytes:192811},{storageId:"3",thumbnailUri:void 0,previewUri:Ne,sizeInBytes:12122}])},1e3)}),ze=e=>{const[a,s]=je.useState([...e.files]),h=T=>{var j;s(T),(j=e.onChange)==null||j.call(e,T)};return r.jsx(ke,{...e,files:a,onChange:h})},Xe={title:"Form/FileUploader",component:ze,decorators:[e=>r.jsx(y.Provider,{value:{deriveFileInfosFromStorageIds:b},children:r.jsx(e,{})}),Te],tags:["autodocs","kyv","beta"],argTypes:{}},t={label:"Last opp filer",description:"Du kan laste opp flere filer samtidig",error:null,multiple:!0,files:[{fileName:"file1.txt",status:"uploaded",contentType:"text/plain",contextId:"214b3c2e-1f4d-4f8a-9b6c-5d7e8f9a0b1c",storageId:"1"},{fileName:"file2.txt",status:"uploaded",contentType:"text/plain",contextId:"214b3c2e-1f4d-4f3a-9b6c-5d7e8f9a0b1c",storageId:"1"},{fileName:"file3.jpeg",status:"uploaded",contentType:"image/jpeg",contextId:"214b3c2e-1f4d-4f8a-a127-5d7e8f9a0b1c",storageId:"1"}],maxFiles:5,maxSizeInBytes:10*1e3*1e3,onChange:e=>console.log("Files changed:",e),allowedFileTypes:[".pdf",".jpg",".jpeg",".png"]},we=async()=>(await new Promise(e=>setTimeout(e,1e3)),[{title:"Testfiler",label:"Dette er bare noen testfiler",files:[{contextId:"existing-1",fileName:"document1.pdf",storageId:"storage-id-1",contentType:"application/pdf",status:"uploaded"},{contextId:"existing-2",fileName:"image1.jpg",storageId:"storage-id-2",contentType:"image/jpeg",status:"uploaded"},{contextId:"existing-3",fileName:"screenshot.png",storageId:"1",contentType:"image/png",status:"uploaded"}]},{title:"Flere testfiler",label:"Abrakadabra, this page now has more testfiles",files:[{contextId:"existing-test2-1",fileName:"document1.pdf",storageId:"storage-id-test2-1",contentType:"application/pdf",status:"uploaded"},{contextId:"existing-test2-2",fileName:"image1.jpg",storageId:"2",contentType:"image/jpeg",status:"uploaded"},{contextId:"existing-test2-3",fileName:"aCoolDocument.pdf",storageId:"storage-id-test2-3",contentType:"application/pdf",status:"uploaded"},{contextId:"existing-test2-4",fileName:"screenshot.png",storageId:"3",contentType:"image/png",status:"uploaded"}]}]),i={args:t},o={args:{...t,optional:!0}},n={args:{...t,optional:"Spesialtilpasset Verdi"}},l={args:{...t,required:!0}},d={args:{...t,required:"Påkrevd"}},p={args:{...t,variant:"dropzone"}},c={args:{...t,variant:"dropzone",existingFilesProvider:we}},u={args:{...t,error:"Det oppstod en feil"}},m={args:{...t,description:"Capture button vises kun på mobilenheter",withCaptureButton:!0,files:[]}},g={args:{...t,description:"Viser kun kamera-knappen. På desktop faller den tilbake til vanlig opplastingsknapp",variant:"capture",files:[]}},f={args:{...t,files:[],existingFilesProvider:we}},Se=async e=>new Promise(a=>{const s=e.get("file"),h=10*1024*1024;setTimeout(()=>{s&&s.size>h?a({storageId:"",success:!1,error:"file-too-large"}):a({storageId:Ce(),success:!0})},1500)}),S=async()=>new Promise(e=>{setTimeout(()=>{e()},1e3)}),v={decorators:[e=>r.jsx(w.Provider,{value:{uploadFile:Se,deleteFile:S},children:r.jsx(y.Provider,{value:{deriveFileInfosFromStorageIds:b},children:r.jsx(e,{})})})],args:{...t,description:"Filer som er større enn 10MB vil bli avvist",files:[]}},x={decorators:[e=>r.jsx(w.Provider,{value:{uploadFile:Se,deleteFile:S},children:r.jsx(y.Provider,{value:{deriveFileInfosFromStorageIds:b},children:r.jsx(e,{})})})],args:{...t,allowFilePreview:!0,description:"Filer som er større enn 10MB vil bli avvist",files:[{fileName:"cat1.jpg",status:"uploaded",contentType:"image/jpeg",contextId:"214b3c2e-1f4d-4f8a-9b6c-5d7e8f9xxb1c",storageId:"1"},{fileName:"cat2.jpg",status:"uploaded",contentType:"image/jpeg",contextId:"214b3c2e-1f4d-4f3a-9b6c-5d7e8fdsd0b1c",storageId:"2"},{fileName:"file3.pdf",status:"uploaded",contentType:"application/pdf",contextId:"214b3c2e-1f4d-4f8a-a127-5d7e8ffff1c",storageId:"3"}]}},F={args:{...t,allowedFileTypes:[".exe",".bat",".zip","image/*"],description:"Aksepterer kun filer med utvidelsene .exe, .bat, .zip og bildefiler",files:[]}},We=async()=>new Promise(e=>{setTimeout(()=>{e({storageId:"",success:!1,error:"file-scan-failed"})},1500)}),I={decorators:[e=>r.jsx(w.Provider,{value:{uploadFile:We,deleteFile:S},children:r.jsx(y.Provider,{value:{deriveFileInfosFromStorageIds:b},children:r.jsx(e,{})})})],args:{...t,description:"Opplastning av fil vil gi feil ved scanning av filen",files:[]}},P={args:{...t,allowFilePreview:!0,description:"Klikk på forhåndsvisningsknappen for å se filer i full størrelse",files:[{fileName:"Pikekyst Oppskrift.pdf",status:"uploaded",contentType:"application/pdf",contextId:"preview-pdf-1",storageId:"1"},{fileName:"file3.jpeg",status:"uploaded",contentType:"image/jpeg",contextId:"preview-img-1",storageId:"2"},{fileName:"file4.jpeg",status:"uploaded",contentType:"image/jpeg",contextId:"preview-img-2",storageId:"3"},{fileName:"readme.txt",status:"uploaded",contentType:"text/plain",contextId:"preview-txt-1",storageId:"4"}]}};var N,z,W;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: defaultProps
}`,...(W=(z=i.parameters)==null?void 0:z.docs)==null?void 0:W.source}}};var U,B,D;o.parameters={...o.parameters,docs:{...(U=o.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    optional: true
  }
}`,...(D=(B=o.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};var R,O,E;n.parameters={...n.parameters,docs:{...(R=n.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    optional: 'Spesialtilpasset Verdi'
  }
}`,...(E=(O=n.parameters)==null?void 0:O.docs)==null?void 0:E.source}}};var q,L,A;l.parameters={...l.parameters,docs:{...(q=l.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    required: true
  }
}`,...(A=(L=l.parameters)==null?void 0:L.docs)==null?void 0:A.source}}};var V,M,K;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    required: 'Påkrevd'
  }
}`,...(K=(M=d.parameters)==null?void 0:M.docs)==null?void 0:K.source}}};var _,G,H;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    variant: 'dropzone'
  }
}`,...(H=(G=p.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var J,Q,X;c.parameters={...c.parameters,docs:{...(J=c.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    variant: 'dropzone',
    existingFilesProvider: existingFilesProvider
  }
}`,...(X=(Q=c.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,Z,$;u.parameters={...u.parameters,docs:{...(Y=u.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    error: 'Det oppstod en feil'
  }
}`,...($=(Z=u.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,te,re;m.parameters={...m.parameters,docs:{...(ee=m.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    description: 'Capture button vises kun på mobilenheter',
    withCaptureButton: true,
    files: []
  }
}`,...(re=(te=m.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};var ae,se,ie;g.parameters={...g.parameters,docs:{...(ae=g.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    description: 'Viser kun kamera-knappen. På desktop faller den tilbake til vanlig opplastingsknapp',
    variant: 'capture',
    files: []
  }
}`,...(ie=(se=g.parameters)==null?void 0:se.docs)==null?void 0:ie.source}}};var oe,ne,le;f.parameters={...f.parameters,docs:{...(oe=f.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    files: [],
    existingFilesProvider: existingFilesProvider
  }
}`,...(le=(ne=f.parameters)==null?void 0:ne.docs)==null?void 0:le.source}}};var de,pe,ce;v.parameters={...v.parameters,docs:{...(de=v.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(ce=(pe=v.parameters)==null?void 0:pe.docs)==null?void 0:ce.source}}};var ue,me,ge;x.parameters={...x.parameters,docs:{...(ue=x.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
}`,...(ge=(me=x.parameters)==null?void 0:me.docs)==null?void 0:ge.source}}};var fe,ve,xe;F.parameters={...F.parameters,docs:{...(fe=F.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    allowedFileTypes: ['.exe', '.bat', '.zip', 'image/*'],
    description: 'Aksepterer kun filer med utvidelsene .exe, .bat, .zip og bildefiler',
    files: []
  }
}`,...(xe=(ve=F.parameters)==null?void 0:ve.docs)==null?void 0:xe.source}}};var Fe,Ie,Pe;I.parameters={...I.parameters,docs:{...(Fe=I.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
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
}`,...(Pe=(Ie=I.parameters)==null?void 0:Ie.docs)==null?void 0:Pe.source}}};var ye,be,he;P.parameters={...P.parameters,docs:{...(ye=P.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
}`,...(he=(be=P.parameters)==null?void 0:be.docs)==null?void 0:he.source}}};const Ye=["Default","Optional","OptionalText","Required","RequiredText","Dropzone","DropzoneWithExistingFiles","WithError","WithCaptureButton","CaptureOnly","WithExistingFiles","withFileSizeLimit","withPreviews","withAllowedFileTypes","withFileScanFailed","WithFilePreview"];export{g as CaptureOnly,i as Default,p as Dropzone,c as DropzoneWithExistingFiles,o as Optional,n as OptionalText,l as Required,d as RequiredText,m as WithCaptureButton,u as WithError,f as WithExistingFiles,P as WithFilePreview,Ye as __namedExportsOrder,Xe as default,F as withAllowedFileTypes,I as withFileScanFailed,v as withFileSizeLimit,x as withPreviews};
