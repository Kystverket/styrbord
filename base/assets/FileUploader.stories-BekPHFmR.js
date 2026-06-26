import{S as be,j as r,r as he}from"./iframe-CPuhykfl.js";import{F as P,c as we,d as h,v as Se}from"./Dialog-CO49LTj7.js";import{c as j}from"./Cat 1-CDyACPiq.js";import{c as k}from"./Cat 2-CSvMt87v.js";import{p as Te}from"./Pikekyst Oppskrift-Mt2fCVYl.js";import"./preload-helper-Dp1pzeXC.js";import"./tooltip-Dzmlct3D.js";import"./index-D9Nw6Yhx.js";import"./index-R4Mc1a11.js";import"./shipTypes-hFnSBndP.js";import"./Details-CJKZ-vdv.js";import"./KyvDivider-BVoBm50f.js";import"./typography-Dc7Rvq6V.js";import"./KyvSpinner-DBrydDBs.js";import"./skillingsbuoye-nl-brODA.js";import"./Logo-C27TizVx.js";const y=async()=>new Promise(e=>{setTimeout(()=>{e([{storageId:"1",thumbnailUri:j,previewUri:j,sizeInBytes:9281231},{storageId:"2",thumbnailUri:k,previewUri:k,sizeInBytes:192811},{storageId:"3",thumbnailUri:void 0,previewUri:Te,sizeInBytes:12122}])},1e3)}),je=e=>{const[a,s]=he.useState([...e.files]),b=S=>{var T;s(S),(T=e.onChange)==null||T.call(e,S)};return r.jsx(we,{...e,files:a,onChange:b})},_e={title:"Form/FileUploader",component:je,decorators:[e=>r.jsx(P.Provider,{value:{deriveFileInfosFromStorageIds:y},children:r.jsx(e,{})}),be],tags:["autodocs","kyv","beta"],argTypes:{}},t={label:"Last opp filer",description:"Du kan laste opp flere filer samtidig",error:null,multiple:!0,files:[{fileName:"file1.txt",status:"uploaded",contentType:"text/plain",contextId:"214b3c2e-1f4d-4f8a-9b6c-5d7e8f9a0b1c",storageId:"1"},{fileName:"file2.txt",status:"uploaded",contentType:"text/plain",contextId:"214b3c2e-1f4d-4f3a-9b6c-5d7e8f9a0b1c",storageId:"1"},{fileName:"file3.jpeg",status:"uploaded",contentType:"image/jpeg",contextId:"214b3c2e-1f4d-4f8a-a127-5d7e8f9a0b1c",storageId:"1"}],maxFiles:5,maxSizeInBytes:10*1e3*1e3,onChange:e=>console.log("Files changed:",e),allowedFileTypes:[".pdf",".jpg",".jpeg",".png"]},Pe=async()=>(await new Promise(e=>setTimeout(e,1e3)),[{title:"Testfiler",label:"Dette er bare noen testfiler",files:[{contextId:"existing-1",fileName:"document1.pdf",storageId:"storage-id-1",contentType:"application/pdf",status:"uploaded"},{contextId:"existing-2",fileName:"image1.jpg",storageId:"storage-id-2",contentType:"image/jpeg",status:"uploaded"},{contextId:"existing-3",fileName:"screenshot.png",storageId:"1",contentType:"image/png",status:"uploaded"}]},{title:"Flere testfiler",label:"Abrakadabra, this page now has more testfiles",files:[{contextId:"existing-test2-1",fileName:"document1.pdf",storageId:"storage-id-test2-1",contentType:"application/pdf",status:"uploaded"},{contextId:"existing-test2-2",fileName:"image1.jpg",storageId:"2",contentType:"image/jpeg",status:"uploaded"},{contextId:"existing-test2-3",fileName:"aCoolDocument.pdf",storageId:"storage-id-test2-3",contentType:"application/pdf",status:"uploaded"},{contextId:"existing-test2-4",fileName:"screenshot.png",storageId:"3",contentType:"image/png",status:"uploaded"}]}]),i={args:t},o={args:{...t,optional:!0}},n={args:{...t,optional:"Spesialtilpasset Verdi"}},l={args:{...t,required:!0}},d={args:{...t,required:"Påkrevd"}},p={args:{...t,variant:"dropzone"}},c={args:{...t,variant:"dropzone",existingFilesProvider:Pe}},u={args:{...t,error:"Det oppstod en feil"}},m={args:{...t,description:"Capture button vises kun på mobilenheter",withCaptureButton:!0,files:[]}},g={args:{...t,files:[],existingFilesProvider:Pe}},ye=async e=>new Promise(a=>{const s=e.get("file"),b=10*1024*1024;setTimeout(()=>{s&&s.size>b?a({storageId:"",success:!1,error:"file-too-large"}):a({storageId:Se(),success:!0})},1500)}),w=async()=>new Promise(e=>{setTimeout(()=>{e()},1e3)}),f={decorators:[e=>r.jsx(h.Provider,{value:{uploadFile:ye,deleteFile:w},children:r.jsx(P.Provider,{value:{deriveFileInfosFromStorageIds:y},children:r.jsx(e,{})})})],args:{...t,description:"Filer som er større enn 10MB vil bli avvist",files:[]}},v={decorators:[e=>r.jsx(h.Provider,{value:{uploadFile:ye,deleteFile:w},children:r.jsx(P.Provider,{value:{deriveFileInfosFromStorageIds:y},children:r.jsx(e,{})})})],args:{...t,allowFilePreview:!0,description:"Filer som er større enn 10MB vil bli avvist",files:[{fileName:"cat1.jpg",status:"uploaded",contentType:"image/jpeg",contextId:"214b3c2e-1f4d-4f8a-9b6c-5d7e8f9xxb1c",storageId:"1"},{fileName:"cat2.jpg",status:"uploaded",contentType:"image/jpeg",contextId:"214b3c2e-1f4d-4f3a-9b6c-5d7e8fdsd0b1c",storageId:"2"},{fileName:"file3.pdf",status:"uploaded",contentType:"application/pdf",contextId:"214b3c2e-1f4d-4f8a-a127-5d7e8ffff1c",storageId:"3"}]}},x={args:{...t,allowedFileTypes:[".exe",".bat",".zip","image/*"],description:"Aksepterer kun filer med utvidelsene .exe, .bat, .zip og bildefiler",files:[]}},ke=async()=>new Promise(e=>{setTimeout(()=>{e({storageId:"",success:!1,error:"file-scan-failed"})},1500)}),F={decorators:[e=>r.jsx(h.Provider,{value:{uploadFile:ke,deleteFile:w},children:r.jsx(P.Provider,{value:{deriveFileInfosFromStorageIds:y},children:r.jsx(e,{})})})],args:{...t,description:"Opplastning av fil vil gi feil ved scanning av filen",files:[]}},I={args:{...t,allowFilePreview:!0,description:"Klikk på forhåndsvisningsknappen for å se filer i full størrelse",files:[{fileName:"Pikekyst Oppskrift.pdf",status:"uploaded",contentType:"application/pdf",contextId:"preview-pdf-1",storageId:"1"},{fileName:"file3.jpeg",status:"uploaded",contentType:"image/jpeg",contextId:"preview-img-1",storageId:"2"},{fileName:"file4.jpeg",status:"uploaded",contentType:"image/jpeg",contextId:"preview-img-2",storageId:"3"},{fileName:"readme.txt",status:"uploaded",contentType:"text/plain",contextId:"preview-txt-1",storageId:"4"}]}};var C,N,z;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: defaultProps
}`,...(z=(N=i.parameters)==null?void 0:N.docs)==null?void 0:z.source}}};var W,U,B;o.parameters={...o.parameters,docs:{...(W=o.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    optional: true
  }
}`,...(B=(U=o.parameters)==null?void 0:U.docs)==null?void 0:B.source}}};var D,R,E;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    optional: 'Spesialtilpasset Verdi'
  }
}`,...(E=(R=n.parameters)==null?void 0:R.docs)==null?void 0:E.source}}};var O,q,L;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    required: true
  }
}`,...(L=(q=l.parameters)==null?void 0:q.docs)==null?void 0:L.source}}};var A,M,V;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    required: 'Påkrevd'
  }
}`,...(V=(M=d.parameters)==null?void 0:M.docs)==null?void 0:V.source}}};var K,_,G;p.parameters={...p.parameters,docs:{...(K=p.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    variant: 'dropzone'
  }
}`,...(G=(_=p.parameters)==null?void 0:_.docs)==null?void 0:G.source}}};var H,J,Q;c.parameters={...c.parameters,docs:{...(H=c.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    variant: 'dropzone',
    existingFilesProvider: existingFilesProvider
  }
}`,...(Q=(J=c.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var X,Y,Z;u.parameters={...u.parameters,docs:{...(X=u.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    error: 'Det oppstod en feil'
  }
}`,...(Z=(Y=u.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,ee,te;m.parameters={...m.parameters,docs:{...($=m.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    description: 'Capture button vises kun på mobilenheter',
    withCaptureButton: true,
    files: []
  }
}`,...(te=(ee=m.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var re,ae,se;g.parameters={...g.parameters,docs:{...(re=g.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    files: [],
    existingFilesProvider: existingFilesProvider
  }
}`,...(se=(ae=g.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};var ie,oe,ne;f.parameters={...f.parameters,docs:{...(ie=f.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(ne=(oe=f.parameters)==null?void 0:oe.docs)==null?void 0:ne.source}}};var le,de,pe;v.parameters={...v.parameters,docs:{...(le=v.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
}`,...(pe=(de=v.parameters)==null?void 0:de.docs)==null?void 0:pe.source}}};var ce,ue,me;x.parameters={...x.parameters,docs:{...(ce=x.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    allowedFileTypes: ['.exe', '.bat', '.zip', 'image/*'],
    description: 'Aksepterer kun filer med utvidelsene .exe, .bat, .zip og bildefiler',
    files: []
  }
}`,...(me=(ue=x.parameters)==null?void 0:ue.docs)==null?void 0:me.source}}};var ge,fe,ve;F.parameters={...F.parameters,docs:{...(ge=F.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
}`,...(ve=(fe=F.parameters)==null?void 0:fe.docs)==null?void 0:ve.source}}};var xe,Fe,Ie;I.parameters={...I.parameters,docs:{...(xe=I.parameters)==null?void 0:xe.docs,source:{originalSource:`{
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
}`,...(Ie=(Fe=I.parameters)==null?void 0:Fe.docs)==null?void 0:Ie.source}}};const Ge=["Default","Optional","OptionalText","Required","RequiredText","Dropzone","DropzoneWithExistingFiles","WithError","WithCaptureButton","WithExistingFiles","withFileSizeLimit","withPreviews","withAllowedFileTypes","withFileScanFailed","WithFilePreview"];export{i as Default,p as Dropzone,c as DropzoneWithExistingFiles,o as Optional,n as OptionalText,l as Required,d as RequiredText,m as WithCaptureButton,u as WithError,g as WithExistingFiles,I as WithFilePreview,Ge as __namedExportsOrder,_e as default,x as withAllowedFileTypes,F as withFileScanFailed,f as withFileSizeLimit,v as withPreviews};
