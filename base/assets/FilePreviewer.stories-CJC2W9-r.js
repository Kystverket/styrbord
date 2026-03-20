import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{S as b}from"./styrbordDecorator-BnnAYpvt.js";import{aN as t,B as c}from"./SlotDialog-D8Ggu5kx.js";import"./Details-HZ4nwwjM.js";import"./kyvDivider-GkhM6YIE.js";import{B as p}from"./typography-CdiQYpGP.js";import"./skillingsbuoye-BG85ofhS.js";import"./Logo-DajRw6N7.js";import{r as k}from"./iframe-DUvZ48TU.js";import"./translations-DuoQUAev.js";import"./index-DkaYFwfj.js";import"./index-C0rWwyui.js";import"./index-BSEmr5Ii.js";import"./lite-DaUVFjkg.js";import"./index-CyZWMIEl.js";import"./heading-QMScACOZ.js";import"./label-BgW5ou-3.js";import"./index-BPH2I_E0.js";import"./preload-helper-Dp1pzeXC.js";const R=""+new URL("atlas 1-RB_p9taw.jpeg",import.meta.url).href,S=""+new URL("Pikekyst Oppskrift-TWNCUu4H.pdf",import.meta.url).href,N="FeatureCollection",_="sql_statement",C={type:"name",properties:{name:"urn:ogc:def:crs:OGC:1.3:CRS84"}},I=[{type:"Feature",properties:{name:"",category:""},geometry:{type:"Polygon",coordinates:[[[6.151401062571232,62.46924959625232],[6.151305862466872,62.46871966665647],[6.152655794227293,62.46867771111397],[6.152711116945804,62.46920875405775],[6.151401062571232,62.46924959625232]]]}},{type:"Feature",properties:{name:"",category:""},geometry:{type:"LineString",coordinates:[[6.154030006373439,62.46916480077377],[6.153425380886375,62.46739712191547]]}}],O={type:N,name:_,crs:C,features:I},T={files:[{contentType:"image",fileName:"Atlas.png",fileSizeInBytes:37e5,src:R},{contentType:"pdf",fileName:"PikekystOppskrift.pdf",fileSizeInBytes:24e4,src:S},{contentType:"json",fileName:"Kartdata.json",fileSizeInBytes:1e3,data:O}]},ee={title:"Components/FilePreviewer",component:t,decorators:[b],tags:["autodocs","kyv","beta"],parameters:{docs:{source:{type:"code"}}},args:{animation:"slide",files:T.files},argTypes:{animation:{control:"radio",options:["slide","none"],description:"Animasjonstyper for transition",table:{type:{summary:"'slide' | 'none'"},defaultValue:{summary:"slide"}}},files:{control:"object",description:"Array av filer som vises",table:{type:{summary:"FileInfo[]"}}}}},s=i=>e.jsx(e.Fragment,{children:e.jsx(t,{animation:i.animation,children:i.files.map((r,n)=>e.jsx(p,{mt:8,children:e.jsx(t.Thumbnail,{file:r,index:n})},n))})}),l=i=>e.jsx(e.Fragment,{children:e.jsx(t,{animation:i.animation,children:e.jsx(p,{align:"start",horizontal:!0,gap:8,children:i.files.map((r,n)=>e.jsx(t.Thumbnail,{file:r,index:n},n))})})}),m=i=>{const r=k.useRef(null),n=()=>{var a;(a=r.current)==null||a.showModal()},B=()=>{var a;(a=r.current)==null||a.showModal(2)};return e.jsx(e.Fragment,{children:e.jsxs(p,{gap:8,width:"form-sidebar",children:[e.jsx("p",{children:"Click the button below to open the file preview dialog."}),e.jsx(c,{onClick:n,children:"Open with Ref"}),e.jsx(c,{onClick:B,children:"Open on item with index 2"}),e.jsx(t,{animation:i.animation,files:i.files,ref:r})]})})},o=i=>e.jsx(e.Fragment,{children:e.jsx(p,{gap:8,width:"form-sidebar",children:e.jsx(t,{animation:i.animation,files:i.files,children:e.jsx(p,{align:"start",horizontal:!0,gap:8,children:i.files.map((r,n)=>e.jsx(t.Thumbnail,{file:r,index:n},n))})})})});o.args={animation:"none"};s.__docgenInfo={description:"",methods:[],displayName:"Default"};l.__docgenInfo={description:"",methods:[],displayName:"withFlex"};m.__docgenInfo={description:"",methods:[],displayName:"openWithRef"};o.__docgenInfo={description:"",methods:[],displayName:"withNoneAnimation"};var d,f,u;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`args => {
  return <>
      <FilePreviewer animation={args.animation}>
        {args.files.map((file, idx) => <Box key={idx} mt={8}>
            <FilePreviewer.Thumbnail file={file} index={idx} />
          </Box>)}
      </FilePreviewer>
    </>;
}`,...(u=(f=s.parameters)==null?void 0:f.docs)==null?void 0:u.source}}};var h,x,g;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`args => {
  return <>
      <FilePreviewer animation={args.animation}>
        <Box align="start" horizontal gap={8}>
          {args.files.map((file, idx) => <FilePreviewer.Thumbnail file={file} key={idx} index={idx} />)}
        </Box>
      </FilePreviewer>
    </>;
}`,...(g=(x=l.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var w,y,v;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`args => {
  const filePreviewRef = useRef<FilePreviewRef>(null);
  const openPreview = () => {
    filePreviewRef.current?.showModal();
  };
  const openPreviewOnSecondItem = () => {
    filePreviewRef.current?.showModal(2);
  };
  return <>
      <Box gap={8} width="form-sidebar">
        <p>Click the button below to open the file preview dialog.</p>
        <Button onClick={openPreview}>Open with Ref</Button>
        <Button onClick={openPreviewOnSecondItem}>Open on item with index 2</Button>
        <FilePreviewer animation={args.animation} files={args.files} ref={filePreviewRef} />
      </Box>
    </>;
}`,...(v=(y=m.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var P,j,F;o.parameters={...o.parameters,docs:{...(P=o.parameters)==null?void 0:P.docs,source:{originalSource:`args => {
  return <>
      <Box gap={8} width="form-sidebar">
        <FilePreviewer animation={args.animation} files={args.files}>
          <Box align="start" horizontal gap={8}>
            {args.files.map((file, idx) => <FilePreviewer.Thumbnail file={file} key={idx} index={idx} />)}
          </Box>
        </FilePreviewer>
      </Box>
    </>;
}`,...(F=(j=o.parameters)==null?void 0:j.docs)==null?void 0:F.source}}};const ie=["Default","withFlex","openWithRef","withNoneAnimation"];export{s as Default,ie as __namedExportsOrder,ee as default,m as openWithRef,l as withFlex,o as withNoneAnimation};
