import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{S as P}from"./styrbordDecorator-DfWZX-fO.js";import{aO as t,B as b}from"./Avatar-d7v8JLtn.js";import"./Details-CAeDNW6u.js";import"./kyvDivider-GkhM6YIE.js";import{B as m}from"./typography-CdiQYpGP.js";import"./skillingsbuoye-BG85ofhS.js";import"./Logo-DajRw6N7.js";import{r as B}from"./iframe-C-JPeFls.js";import"./index-B1pQHFUr.js";import"./index-DrsSeW7j.js";import"./index-Dh7E3brm.js";import"./lite-DaUVFjkg.js";import"./index-LL7fkADg.js";import"./label-DiVTqMM-.js";import"./heading-43g9xmtW.js";import"./index-BFiLYyrj.js";import"./preload-helper-Dp1pzeXC.js";const R=""+new URL("atlas 1-RB_p9taw.jpeg",import.meta.url).href,k=""+new URL("Pikekyst Oppskrift-TWNCUu4H.pdf",import.meta.url).href,_="FeatureCollection",N="sql_statement",S={type:"name",properties:{name:"urn:ogc:def:crs:OGC:1.3:CRS84"}},T=[{type:"Feature",properties:{name:"",category:""},geometry:{type:"Polygon",coordinates:[[[6.151401062571232,62.46924959625232],[6.151305862466872,62.46871966665647],[6.152655794227293,62.46867771111397],[6.152711116945804,62.46920875405775],[6.151401062571232,62.46924959625232]]]}},{type:"Feature",properties:{name:"",category:""},geometry:{type:"LineString",coordinates:[[6.154030006373439,62.46916480077377],[6.153425380886375,62.46739712191547]]}}],C={type:_,name:N,crs:S,features:T},I={files:[{contentType:"image",fileName:"Atlas.png",fileSizeInBytes:37e5,src:R},{contentType:"pdf",fileName:"PikekystOppskrift.pdf",fileSizeInBytes:24e4,src:k},{contentType:"json",fileName:"Kartdata.json",fileSizeInBytes:1e3,data:C}]},Z={title:"Components/FilePreviewer",component:t,decorators:[P],tags:["autodocs","kyv","beta"],parameters:{docs:{source:{type:"code"}}},args:{animation:"slide",files:I.files},argTypes:{animation:{control:"radio",options:["slide","none"],description:"Animasjonstyper for transition",table:{type:{summary:"'slide' | 'none'"},defaultValue:{summary:"slide"}}},files:{control:"object",description:"Array av filer som vises",table:{type:{summary:"FileInfo[]"}}}}},a=i=>e.jsx(e.Fragment,{children:e.jsx(t,{animation:i.animation,children:i.files.map((n,r)=>e.jsx(t.Thumbnail,{file:n,index:r},r))})}),s=i=>e.jsx(e.Fragment,{children:e.jsx(t,{animation:i.animation,children:e.jsx(m,{align:"start",horizontal:!0,gap:8,children:i.files.map((n,r)=>e.jsx(t.Thumbnail,{file:n,index:r},r))})})}),l=i=>{const n=B.useRef(null),r=()=>{var p;(p=n.current)==null||p.showModal()};return e.jsx(e.Fragment,{children:e.jsxs(m,{gap:8,width:"form-sidebar",children:[e.jsx("p",{children:"Click the button below to open the file preview dialog."}),e.jsx(b,{onClick:r,children:"Open with Ref"}),e.jsx(t,{animation:i.animation,files:i.files,ref:n})]})})},o=i=>e.jsx(e.Fragment,{children:e.jsx(m,{gap:8,width:"form-sidebar",children:e.jsx(t,{animation:i.animation,files:i.files,children:e.jsx(m,{align:"start",horizontal:!0,gap:8,children:i.files.map((n,r)=>e.jsx(t.Thumbnail,{file:n,index:r},r))})})})});o.args={animation:"none"};a.__docgenInfo={description:"",methods:[],displayName:"Default"};s.__docgenInfo={description:"",methods:[],displayName:"withFlex"};l.__docgenInfo={description:"",methods:[],displayName:"openWithRef"};o.__docgenInfo={description:"",methods:[],displayName:"withNoneAnimation"};var c,d,f;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`args => {
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
}`,...(F=(v=o.parameters)==null?void 0:v.docs)==null?void 0:F.source}}};const $=["Default","withFlex","openWithRef","withNoneAnimation"];export{a as Default,$ as __namedExportsOrder,Z as default,l as openWithRef,s as withFlex,o as withNoneAnimation};
