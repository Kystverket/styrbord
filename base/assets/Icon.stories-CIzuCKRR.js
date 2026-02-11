import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{S as p}from"./styrbordDecorator-DRAyl1VQ.js";import{a as i}from"./Card-KeqL4nDM.js";import"./Details-8YZFjHTH.js";import"./kyvDivider-DSk0K4x1.js";import{a as n}from"./typography-9ubeq_Vx.js";import"./skillingsbuoye-mzpk6Jp8.js";import"./Logo-CEva0-QL.js";/* empty css                        */import"./index-BWu4c2F4.js";import"./index-B8jaNLVP.js";import"./index-DtgyEQ7Q.js";import"./lite-DaUVFjkg.js";import"./index-BtN5BFRV.js";import"./label-CT_xXrm7.js";import"./heading-B8SX_GYc.js";import"./index-eaWjzoNI.js";const _=["add","add_box","add_location","add_location_alt","adjust","anchor","archive","arrow_back","arrow_forward","arrow_right_alt","article","calendar_month","change_history","chat","check_circle","check","chevron_left","chevron_right","circle","close","cloud_alert","cloud_done","content_copy","data_table","delete","description","directions_boat","distance","domain","download","edit_document","edit_location_alt","edit_location","edit_square","edit","error","event","explore_nearby","explore","export_notes","favorite","file_map","file_save","format_align_center","format_align_left","format_align_right","globe_uk","inbox","info","info_i","keyboard_arrow_down","keyboard_arrow_up","layers","lightbulb","link","location_chip","lock","login","logout","mail","map_pin_heart","map","menu","mode_cool","more_vert","move","numbers","open_in_new","pending_actions","person_add","person_pin_circle","person_pin","person","pin_drop","radio_button_checked","radio_button_unchecked","sailing","save","send","settings_input_antenna","settings","severe_cold","source_environment","stylus","timeline","video_library","videocam","view_list","warning","zoom_in_map","zoom_out_map","picture_as_pdf","pan_zoom"],L={title:"Helpers/Icon",component:i,decorators:[p],tags:["autodocs","kyv"],argTypes:{}},g={arrow_back:"Navigerer tilbake",arrow_right_alt:"Navigerer framover, indikere at handlingen vil føre til en annen side eller visning",content_copy:"Kopierer eller dupliserer"},h=["2xs","xs","sm","md","lg","xl","2xl"],o=()=>e.jsx("table",{children:_.map(r=>e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"0.5rem"},children:e.jsx(i,{material:r})}),e.jsxs("td",{style:{padding:"0.5rem"},children:[e.jsx(n,{strong:!0,children:r}),e.jsx(n,{size:"sm",children:g[r]})]})]},r))}),t=()=>e.jsx("table",{children:h.map(r=>e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"0.5rem",textAlign:"center"},children:e.jsx(i,{size:r,material:"anchor"})}),e.jsxs("td",{style:{padding:"0.5rem"},children:['size="',r,'" ',r==="md"?"(default)":""]})]},r))});o.__docgenInfo={description:"",methods:[],displayName:"IconShowcase"};t.__docgenInfo={description:"",methods:[],displayName:"IconSizing"};var a,s,d;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
  return <table>
      {iconIdList.map(iconId => <tr key={iconId}>
          <td style={{
        padding: '0.5rem'
      }}>
            <Icon material={iconId} />
          </td>
          <td style={{
        padding: '0.5rem'
      }}>
            <Body strong>{iconId}</Body>
            <Body size="sm">{iconDescriptions[iconId]}</Body>
          </td>
        </tr>)}
    </table>;
}`,...(d=(s=o.parameters)==null?void 0:s.docs)==null?void 0:d.source}}};var c,l,m;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
  return <table>
      {sizes.map(size => <tr key={size}>
          <td style={{
        padding: '0.5rem',
        textAlign: 'center'
      }}>
            <Icon size={size} material="anchor" />
          </td>
          <td style={{
        padding: '0.5rem'
      }}>
            size="{size}" {size === 'md' ? '(default)' : ''}
          </td>
        </tr>)}
    </table>;
}`,...(m=(l=t.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};const q=["IconShowcase","IconSizing"];export{o as IconShowcase,t as IconSizing,q as __namedExportsOrder,L as default};
