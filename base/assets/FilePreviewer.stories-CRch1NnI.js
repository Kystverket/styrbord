import{S as b,j as e,r as k}from"./iframe-dqRYvvps.js";import{y as t,S as c,B as p}from"./Dialog-DKbgxwXy.js";import"./shipTypes-hFnSBndP.js";import"./Details-CVilvbjp.js";import"./KyvDivider-CImnlERV.js";import"./KyvSpinner-BpYBW8TB.js";import"./skillingsbuoye-BvyM3y_D.js";import"./Logo-Cj0NCIYI.js";import"./tooltip-Dbywcoy3.js";import{a as R}from"./atlas 1-DK2KYHpu.js";import{p as I}from"./Pikekyst Oppskrift-Mt2fCVYl.js";import{g as N,t as T}from"./tekstfil-D6SNzLkw.js";import"./preload-helper-Dp1pzeXC.js";import"./color-tokens-CJ-06Lvi.js";import"./index-Dy_OWlc0.js";import"./index-BVjStCxk.js";const B={files:[{contentType:"image",fileName:"Atlas.png",fileSizeInBytes:37e5,src:R},{contentType:"pdf",fileName:"PikekystOppskrift.pdf",fileSizeInBytes:24e4,src:I},{contentType:"json",fileName:"Kartdata.json",fileSizeInBytes:1e3,data:N},{contentType:"txt",fileName:"tekstfil.txt",fileSizeInBytes:700,src:T}]},Q={title:"Components/FilePreviewer",component:t,decorators:[b],tags:["autodocs","kyv","beta"],args:{animation:"slide",files:B.files},argTypes:{animation:{control:"radio",options:["slide","none"],description:"Animasjonstyper for transition",table:{type:{summary:"'slide' | 'none'"},defaultValue:{summary:"slide"}}},files:{control:"object",description:"Array av filer som vises",table:{type:{summary:"FileInfo[]"}}}}},s=i=>e.jsx(e.Fragment,{children:e.jsx(t,{animation:i.animation,children:i.files.map((r,n)=>e.jsx(c,{mt:2,children:e.jsx(t.Thumbnail,{file:r,index:n})},n))})}),l=i=>e.jsx(e.Fragment,{children:e.jsx(t,{animation:i.animation,children:e.jsx(c,{align:"start",horizontal:!0,gap:2,children:i.files.map((r,n)=>e.jsx(t.Thumbnail,{file:r,index:n},n))})})}),m=i=>{const r=k.useRef(null),n=()=>{var o;(o=r.current)==null||o.showModal()},F=()=>{var o;(o=r.current)==null||o.showModal(2)};return e.jsx(e.Fragment,{children:e.jsxs(c,{gap:2,width:"form-sidebar",children:[e.jsx("p",{children:"Click the button below to open the file preview dialog."}),e.jsx(p,{onClick:n,children:"Open with Ref"}),e.jsx(p,{onClick:F,children:"Open on item with index 2"}),e.jsx(t,{animation:i.animation,files:i.files,ref:r})]})})},a=i=>e.jsx(e.Fragment,{children:e.jsx(c,{gap:2,width:"form-sidebar",children:e.jsx(t,{animation:i.animation,files:i.files,children:e.jsx(c,{align:"start",horizontal:!0,gap:2,children:i.files.map((r,n)=>e.jsx(t.Thumbnail,{file:r,index:n},n))})})})});a.args={animation:"none"};s.__docgenInfo={description:"",methods:[],displayName:"Default"};l.__docgenInfo={description:"",methods:[],displayName:"withFlex"};m.__docgenInfo={description:"",methods:[],displayName:"openWithRef"};a.__docgenInfo={description:"",methods:[],displayName:"withNoneAnimation"};var f,d,u;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`args => {
  return <>
      <FilePreviewer animation={args.animation}>
        {args.files.map((file, idx) => <Surface key={idx} mt={2}>
            <FilePreviewer.Thumbnail file={file} index={idx} />
          </Surface>)}
      </FilePreviewer>
    </>;
}`,...(u=(d=s.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var h,w,x;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`args => {
  return <>
      <FilePreviewer animation={args.animation}>
        <Surface align="start" horizontal gap={2}>
          {args.files.map((file, idx) => <FilePreviewer.Thumbnail file={file} key={idx} index={idx} />)}
        </Surface>
      </FilePreviewer>
    </>;
}`,...(x=(w=l.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};var g,v,y;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:`args => {
  const filePreviewRef = useRef<FilePreviewRef>(null);
  const openPreview = () => {
    filePreviewRef.current?.showModal();
  };
  const openPreviewOnSecondItem = () => {
    filePreviewRef.current?.showModal(2);
  };
  return <>
      <Surface gap={2} width="form-sidebar">
        <p>Click the button below to open the file preview dialog.</p>
        <Button onClick={openPreview}>Open with Ref</Button>
        <Button onClick={openPreviewOnSecondItem}>Open on item with index 2</Button>
        <FilePreviewer animation={args.animation} files={args.files} ref={filePreviewRef} />
      </Surface>
    </>;
}`,...(y=(v=m.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var j,P,S;a.parameters={...a.parameters,docs:{...(j=a.parameters)==null?void 0:j.docs,source:{originalSource:`args => {
  return <>
      <Surface gap={2} width="form-sidebar">
        <FilePreviewer animation={args.animation} files={args.files}>
          <Surface align="start" horizontal gap={2}>
            {args.files.map((file, idx) => <FilePreviewer.Thumbnail file={file} key={idx} index={idx} />)}
          </Surface>
        </FilePreviewer>
      </Surface>
    </>;
}`,...(S=(P=a.parameters)==null?void 0:P.docs)==null?void 0:S.source}}};const U=["Default","withFlex","openWithRef","withNoneAnimation"];export{s as Default,U as __namedExportsOrder,Q as default,m as openWithRef,l as withFlex,a as withNoneAnimation};
