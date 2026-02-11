import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{S as P}from"./styrbordDecorator-DRAyl1VQ.js";import{aM as t,B as b}from"./Card-KeqL4nDM.js";import"./Details-8YZFjHTH.js";import"./kyvDivider-DSk0K4x1.js";import{B as m}from"./typography-9ubeq_Vx.js";import"./skillingsbuoye-mzpk6Jp8.js";import"./Logo-CEva0-QL.js";import{r as k}from"./index-BWu4c2F4.js";/* empty css                        */import"./index-B8jaNLVP.js";import"./index-DtgyEQ7Q.js";import"./lite-DaUVFjkg.js";import"./index-BtN5BFRV.js";import"./label-CT_xXrm7.js";import"./heading-B8SX_GYc.js";import"./index-eaWjzoNI.js";const B=""+new URL("atlas 1-RB_p9taw.jpeg",import.meta.url).href,R=""+new URL("Pikekyst Oppskrift-TWNCUu4H.pdf",import.meta.url).href,_="FeatureCollection",N="sql_statement",S={type:"name",properties:{name:"urn:ogc:def:crs:OGC:1.3:CRS84"}},T=[{type:"Feature",properties:{name:"",category:""},geometry:{type:"Polygon",coordinates:[[[6.151401062571232,62.46924959625232],[6.151305862466872,62.46871966665647],[6.152655794227293,62.46867771111397],[6.152711116945804,62.46920875405775],[6.151401062571232,62.46924959625232]]]}},{type:"Feature",properties:{name:"",category:""},geometry:{type:"LineString",coordinates:[[6.154030006373439,62.46916480077377],[6.153425380886375,62.46739712191547]]}}],C={type:_,name:N,crs:S,features:T},z={files:[{contentType:"image",fileName:"Atlas.png",fileSize:"3.7 MB",src:B},{contentType:"pdf",fileName:"PikekystOppskrift.pdf",fileSize:"240kB",src:R},{contentType:"json",fileName:"Kartdata.json",fileSize:"1kB",data:C}]},Y={title:"Components/FilePreviewer",component:t,decorators:[P],tags:["autodocs","kyv","beta"],parameters:{docs:{source:{type:"code"}}},args:{animation:"slide",files:z.files},argTypes:{animation:{control:"radio",options:["slide","none"],description:"Animasjonstyper for transition",table:{type:{summary:"'slide' | 'none'"},defaultValue:{summary:"slide"}}},files:{control:"object",description:"Array av filer som vises",table:{type:{summary:"FileInfo[]"}}}}},a=i=>e.jsx(e.Fragment,{children:e.jsx(t,{animation:i.animation,children:i.files.map((n,r)=>e.jsx(t.Thumbnail,{file:n,index:r},r))})}),s=i=>e.jsx(e.Fragment,{children:e.jsx(t,{animation:i.animation,children:e.jsx(m,{align:"start",horizontal:!0,gap:8,children:i.files.map((n,r)=>e.jsx(t.Thumbnail,{file:n,index:r},r))})})}),l=i=>{const n=k.useRef(null),r=()=>{var p;(p=n.current)==null||p.showModal()};return e.jsx(e.Fragment,{children:e.jsxs(m,{gap:8,width:"form-sidebar",children:[e.jsx("p",{children:"Click the button below to open the file preview dialog."}),e.jsx(b,{onClick:r,children:"Open with Ref"}),e.jsx(t,{animation:i.animation,files:i.files,ref:n})]})})},o=i=>e.jsx(e.Fragment,{children:e.jsx(m,{gap:8,width:"form-sidebar",children:e.jsx(t,{animation:i.animation,files:i.files,children:e.jsx(m,{align:"start",horizontal:!0,gap:8,children:i.files.map((n,r)=>e.jsx(t.Thumbnail,{file:n,index:r},r))})})})});o.args={animation:"none"};a.__docgenInfo={description:"",methods:[],displayName:"Default"};s.__docgenInfo={description:"",methods:[],displayName:"withFlex"};l.__docgenInfo={description:"",methods:[],displayName:"openWithRef"};o.__docgenInfo={description:"",methods:[],displayName:"withNoneAnimation"};var c,d,f;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`args => {
  return <>
      <FilePreviewer animation={args.animation}>
        {args.files.map((file, idx) => <FilePreviewer.Thumbnail file={file} key={idx} index={idx} />)}
      </FilePreviewer>
    </>;
}`,...(f=(d=a.parameters)==null?void 0:d.docs)==null?void 0:f.source}}};var u,h,g;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`args => {
  return <>
      <FilePreviewer animation={args.animation}>
        <Box align="start" horizontal gap={8}>
          {args.files.map((file, idx) => <FilePreviewer.Thumbnail file={file} key={idx} index={idx} />)}
        </Box>
      </FilePreviewer>
    </>;
}`,...(g=(h=s.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var x,w,y;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`args => {
  const filePreviewRef = useRef<FilePreviewRef>(null);
  const openPreview = () => {
    filePreviewRef.current?.showModal();
  };
  return <>
      <Box gap={8} width="form-sidebar">
        <p>Click the button below to open the file preview dialog.</p>
        <Button onClick={openPreview}>Open with Ref</Button>
        <FilePreviewer animation={args.animation} files={args.files} ref={filePreviewRef} />
      </Box>
    </>;
}`,...(y=(w=l.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};var j,v,F;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`args => {
  return <>
      <Box gap={8} width="form-sidebar">
        <FilePreviewer animation={args.animation} files={args.files}>
          <Box align="start" horizontal gap={8}>
            {args.files.map((file, idx) => <FilePreviewer.Thumbnail file={file} key={idx} index={idx} />)}
          </Box>
        </FilePreviewer>
      </Box>
    </>;
}`,...(F=(v=o.parameters)==null?void 0:v.docs)==null?void 0:F.source}}};const Z=["Default","withFlex","openWithRef","withNoneAnimation"];export{a as Default,Z as __namedExportsOrder,Y as default,l as openWithRef,s as withFlex,o as withNoneAnimation};
