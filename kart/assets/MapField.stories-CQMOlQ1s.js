import{j as M}from"./jsx-runtime-D_zvdyIk.js";import{r as E}from"./iframe-DAbP-DkB.js";import{S as F}from"./MapCenterAction-C8aeXs95.js";import{M as b}from"./MapField-326cToDI.js";import"./preload-helper-Dp1pzeXC.js";import"./style-BExZ-z9a.js";import"./index-BRCYRcSb.js";import"./index-BtuIcgh4.js";import"./GeoJsonEditor-rDOcQtf6.js";const K={title:"Kart/MapField",component:b,decorators:[F],tags:["autodocs","kyv"],parameters:{layout:"padded",docs:{story:{inline:!1,iframeHeight:"700px"}}}},f={type:"FeatureCollection",features:[{type:"Feature",properties:{nummer:1,beskrivelse:"Ålesund Havn"},geometry:{type:"Point",coordinates:[6.151401,62.469249]}},{type:"Feature",properties:{nummer:2,beskrivelse:"Kråkenes Fyr"},geometry:{type:"Point",coordinates:[4.999,62.032]}}]},e={args:{label:"Stedsangivelse",description:"Marker stedene på kartet",height:"500px"}},W=()=>{const[y,D]=E.useState(structuredClone(f));return M.jsx(b,{label:"Markeringer",description:"Tegn inn og beskriv markeringene",height:"500px",value:y,onChange:D,fitBounds:!0,annotations:[{name:"beskrivelse",type:"text"}],validationErrors:{},touchedState:{}})},r={render:W},t={args:{label:"Stedsangivelse",description:"Marker stedene på kartet",height:"500px",error:"Det oppsto en feil ved innlastning av kartdata"}},a={args:{label:"Stedsangivelse",description:"Marker stedene på kartet",required:!0,height:"500px"}},s={args:{label:"Stedsangivelse",description:"Disse markeringene kan ikke redigeres",disabled:!0,value:f,fitBounds:!0,height:"500px"}};var n,o,i;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    label: "Stedsangivelse",
    description: "Marker stedene på kartet",
    height: "500px"
  }
}`,...(i=(o=e.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};var p,d,l;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: WithAnnotationsTemplate
}`,...(l=(d=r.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var c,m,u;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    label: "Stedsangivelse",
    description: "Marker stedene på kartet",
    height: "500px",
    error: "Det oppsto en feil ved innlastning av kartdata"
  }
}`,...(u=(m=t.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var g,k,h;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: "Stedsangivelse",
    description: "Marker stedene på kartet",
    required: true,
    height: "500px"
  }
}`,...(h=(k=a.parameters)==null?void 0:k.docs)==null?void 0:h.source}}};var v,x,S;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    label: "Stedsangivelse",
    description: "Disse markeringene kan ikke redigeres",
    disabled: true,
    value: sampleData,
    fitBounds: true,
    height: "500px"
  }
}`,...(S=(x=s.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};const P=["Default","WithAnnotations","WithError","Required","ReadOnly"];export{e as Default,s as ReadOnly,a as Required,r as WithAnnotations,t as WithError,P as __namedExportsOrder,K as default};
