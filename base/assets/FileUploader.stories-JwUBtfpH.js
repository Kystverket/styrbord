import{j as r}from"./jsx-runtime-BjG_zV1W.js";import{az as le,aA as h,aB as de,aC as ae}from"./Card-KeqL4nDM.js";import{S as pe}from"./styrbordDecorator-DRAyl1VQ.js";import"./Details-8YZFjHTH.js";import"./kyvDivider-DSk0K4x1.js";import"./typography-9ubeq_Vx.js";import"./skillingsbuoye-mzpk6Jp8.js";import"./Logo-CEva0-QL.js";import{r as ce}from"./index-BWu4c2F4.js";import{c as se}from"./Cat 1-CDyACPiq.js";import"./index-B8jaNLVP.js";import"./index-DtgyEQ7Q.js";import"./lite-DaUVFjkg.js";import"./index-BtN5BFRV.js";import"./label-CT_xXrm7.js";import"./heading-B8SX_GYc.js";import"./index-eaWjzoNI.js";/* empty css                        */const ne=""+new URL("Cat 2-C4vXFRRz.jpg",import.meta.url).href,ue=e=>{const[i,a]=ce.useState([...e.files]),s=n=>{var b;a(n),(b=e.onChange)==null||b.call(e,n)};return r.jsx(de,{...e,files:i,onChange:s})},Ne={title:"Form/FileUploader",component:ue,decorators:[pe],tags:["autodocs","kyv","beta"],argTypes:{}},t={label:"Last opp filer",buttonLabel:"Last opp",description:"Du kan laste opp flere filer samtidig",error:null,multiple:!0,files:[{fileName:"file1.txt",status:"uploaded",contentType:"text/plain",contextId:"214b3c2e-1f4d-4f8a-9b6c-5d7e8f9a0b1c",storageId:"1"},{fileName:"file2.txt",status:"uploaded",contentType:"text/plain",contextId:"214b3c2e-1f4d-4f3a-9b6c-5d7e8f9a0b1c",storageId:"1"}],maxFiles:5,onChange:e=>console.log("Files changed:",e),allowedFileTypes:[".pdf",".jpg",".jpeg",".png"]},o={args:t},l={args:{...t,optional:!0}},d={args:{...t,optional:"Spesialtilpasset Verdi"}},p={args:{...t,required:!0}},c={args:{...t,required:"Påkrevd"}},u={args:{...t,error:"Det oppstod en feil"}},g={args:{...t,files:[],existingFilesProvider:async()=>(await new Promise(e=>setTimeout(e,1e3)),[{contextId:"existing-1",fileName:"document1.pdf",storageId:"storage-id-1",contentType:"application/pdf",status:"uploaded"},{contextId:"existing-2",fileName:"image1.jpg",storageId:"storage-id-2",contentType:"image/jpeg",thumbnailUri:se,status:"uploaded"},{contextId:"existing-3",fileName:"screenshot.png",storageId:"storage-id-3",contentType:"image/png",thumbnailUri:ne,status:"uploaded"}])}},m={args:{...t,files:[],existingFilesProvider:async()=>(await new Promise(e=>setTimeout(e,1e3)),[{contextId:"existing-1",fileName:"document1.pdf",storageId:"storage-id-1",contentType:"application/pdf",status:"uploaded"},{contextId:"existing-2",fileName:"image1.jpg",storageId:"storage-id-2",contentType:"image/jpeg",thumbnailUri:se,status:"uploaded"},{contextId:"existing-3",fileName:"screenshot.png",storageId:"storage-id-3",contentType:"image/png",thumbnailUri:ne,status:"uploaded"}]),translations:{existingFiles:{buttonOpen:"Velg eksisterende filer",dialogTitle:"Velg filer fra eksisterende",dialogCancel:"Avbryt",dialogConfirm:"Velg",noFilesAvailable:"Ingen eksisterende filer tilgjengelig"}}}},oe=async e=>new Promise(i=>{const a=e.get("file"),s=10*1024*1024;setTimeout(()=>{a&&a.size>s?i({storageId:"",success:!1,error:"file-too-large"}):i({storageId:ae(),success:!0})},1500)}),y=async()=>new Promise(e=>{setTimeout(()=>{e()},1e3)}),f={decorators:[e=>r.jsx(h.Provider,{value:{uploadFile:oe,deleteFile:y},children:r.jsx(e,{})})],args:{...t,description:"Filer som er større enn 10MB vil bli avvist",files:[]}},x={decorators:[e=>r.jsx(le.Provider,{value:{language:"en-US"},children:r.jsx(h.Provider,{value:{uploadFile:oe,deleteFile:y},children:r.jsx(e,{})})})],args:{...t,label:"Upload files",buttonLabel:"Upload",description:"Files larger than 10MB will be rejected",files:[]}},ge=async e=>new Promise(i=>{const a=e.get("file"),s=[".exe",".bat",".scr",".com",".zip"];setTimeout(()=>{a&&s.some(n=>a.name.toLowerCase().endsWith(n))?i({storageId:"",success:!1,error:"invalid-file-type"}):i({storageId:ae(),success:!0})},1500)}),F={decorators:[e=>r.jsx(h.Provider,{value:{uploadFile:ge,deleteFile:y},children:r.jsx(e,{})})],args:{...t,description:"Filer med utvidelser .exe, .bat, .scr, .com, .zip vil bli avvist",files:[]}},me=async()=>new Promise(e=>{setTimeout(()=>{e({storageId:"",success:!1,error:"file-scan-failed"})},1500)}),v={decorators:[e=>r.jsx(h.Provider,{value:{uploadFile:me,deleteFile:y},children:r.jsx(e,{})})],args:{...t,description:"Opplastning av fil vil gi feil ved scanning av filen",files:[]}};var S,P,T;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: defaultProps
}`,...(T=(P=o.parameters)==null?void 0:P.docs)==null?void 0:T.source}}};var I,j,U;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    optional: true
  }
}`,...(U=(j=l.parameters)==null?void 0:j.docs)==null?void 0:U.source}}};var w,C,W;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    optional: 'Spesialtilpasset Verdi'
  }
}`,...(W=(C=d.parameters)==null?void 0:C.docs)==null?void 0:W.source}}};var z,L,N;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    required: true
  }
}`,...(N=(L=p.parameters)==null?void 0:L.docs)==null?void 0:N.source}}};var E,R,k;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    required: 'Påkrevd'
  }
}`,...(k=(R=c.parameters)==null?void 0:R.docs)==null?void 0:k.source}}};var O,V,q;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    error: 'Det oppstod en feil'
  }
}`,...(q=(V=u.parameters)==null?void 0:V.docs)==null?void 0:q.source}}};var D,A,B;g.parameters={...g.parameters,docs:{...(D=g.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    files: [],
    existingFilesProvider: async () => {
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate loading delay
      return [{
        contextId: 'existing-1',
        fileName: 'document1.pdf',
        storageId: 'storage-id-1',
        contentType: 'application/pdf',
        status: 'uploaded'
      }, {
        contextId: 'existing-2',
        fileName: 'image1.jpg',
        storageId: 'storage-id-2',
        contentType: 'image/jpeg',
        thumbnailUri: cat1,
        status: 'uploaded'
      }, {
        contextId: 'existing-3',
        fileName: 'screenshot.png',
        storageId: 'storage-id-3',
        contentType: 'image/png',
        thumbnailUri: cat2,
        status: 'uploaded'
      }];
    }
  }
}`,...(B=(A=g.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};var M,_,X;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    files: [],
    existingFilesProvider: async () => {
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate loading delay
      return [{
        contextId: 'existing-1',
        fileName: 'document1.pdf',
        storageId: 'storage-id-1',
        contentType: 'application/pdf',
        status: 'uploaded'
      }, {
        contextId: 'existing-2',
        fileName: 'image1.jpg',
        storageId: 'storage-id-2',
        contentType: 'image/jpeg',
        thumbnailUri: cat1,
        status: 'uploaded'
      }, {
        contextId: 'existing-3',
        fileName: 'screenshot.png',
        storageId: 'storage-id-3',
        contentType: 'image/png',
        thumbnailUri: cat2,
        status: 'uploaded'
      }];
    },
    translations: {
      existingFiles: {
        buttonOpen: 'Velg eksisterende filer',
        dialogTitle: 'Velg filer fra eksisterende',
        dialogCancel: 'Avbryt',
        dialogConfirm: 'Velg',
        noFilesAvailable: 'Ingen eksisterende filer tilgjengelig'
      }
    }
  }
}`,...(X=(_=m.parameters)==null?void 0:_.docs)==null?void 0:X.source}}};var G,H,J;f.parameters={...f.parameters,docs:{...(G=f.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(J=(H=f.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var K,Q,Y;x.parameters={...x.parameters,docs:{...(K=x.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
    buttonLabel: 'Upload',
    description: 'Files larger than 10MB will be rejected',
    files: []
  }
}`,...(Y=(Q=x.parameters)==null?void 0:Q.docs)==null?void 0:Y.source}}};var Z,$,ee;F.parameters={...F.parameters,docs:{...(Z=F.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  decorators: [Story => <FileUploaderContext.Provider value={{
    uploadFile: uploadFileWithTypeRestriction,
    deleteFile: deleteFile
  }}>
        <Story />
      </FileUploaderContext.Provider>],
  args: {
    ...defaultProps,
    description: 'Filer med utvidelser .exe, .bat, .scr, .com, .zip vil bli avvist',
    files: []
  }
}`,...(ee=($=F.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var te,re,ie;v.parameters={...v.parameters,docs:{...(te=v.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(ie=(re=v.parameters)==null?void 0:re.docs)==null?void 0:ie.source}}};const Ee=["Default","Optional","OptionalText","Required","RequiredText","WithError","WithExistingFiles","WithExistingFilesWithTranslations","withFileSizeLimit","WithFileSizeLimitEnglish","withFileTypeRestriction","withFileScanFailed"];export{o as Default,l as Optional,d as OptionalText,p as Required,c as RequiredText,u as WithError,g as WithExistingFiles,m as WithExistingFilesWithTranslations,x as WithFileSizeLimitEnglish,Ee as __namedExportsOrder,Ne as default,v as withFileScanFailed,f as withFileSizeLimit,F as withFileTypeRestriction};
