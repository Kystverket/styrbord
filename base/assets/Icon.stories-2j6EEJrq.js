import{S as p,j as e}from"./iframe-C7v4yl2J.js";import{I as a}from"./Dialog-DK_STYvC.js";import"./shipTypes-hFnSBndP.js";import"./Details-DeY5olzK.js";import"./KyvDivider-RgI2IJq0.js";import{a as i}from"./typography-C-2Dk0qU.js";import"./KyvSpinner-KzT_Z5P3.js";import"./skillingsbuoye-DlbTSsj7.js";import"./Logo-B3_tIxfF.js";import"./tooltip-TyAXlcCq.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Cj9QRynV.js";import"./index-BCXsrxGj.js";const m=["add","add_box","add_location","add_location_alt","adjust","alternate_email","anchor","apps","archive","arrow_back","arrow_forward","arrow_right_alt","article","calendar_month","change_history","chat","check","check_circle","chevron_left","chevron_right","circle","close","cloud_alert","cloud_done","code_blocks","content_copy","data_table","delete","description","directions_boat","distance","domain","download","edit","edit_document","edit_location","edit_location_alt","edit_square","error","event","explore","explore_nearby","export_notes","favorite","file_map","file_save","folder_open","format_align_center","format_align_left","format_align_right","forward","globe_uk","groups","image","inbox","info","info_i","keep","keep_off","keyboard_arrow_down","keyboard_arrow_up","language","layers","lightbulb","link","location_chip","lock","login","logout","mail","map","map_pin_heart","match_case","menu","mode_cool","more_vert","move","numbers","open_in_new","pan_zoom","pending_actions","person","person_add","person_pin","person_pin_circle","photo_camera","picture_as_pdf","pin_drop","radio_button_checked","radio_button_unchecked","sailing","save","send","settings","settings_input_antenna","severe_cold","source_environment","stylus","text_snippet","timeline","upload","video_library","videocam","view_list","warning","zoom_in_map","zoom_out_map","format_italic","format_bold","format_list_bulleted","format_list_numbered","format_align_justify","undo","redo","visibility","left_panel_close","left_panel_open","right_panel_close","right_panel_open"],N={title:"Helpers/Icon",component:a,decorators:[p],tags:["autodocs","kyv"],argTypes:{}},g={arrow_back:"Navigerer tilbake",arrow_right_alt:"Navigerer framover, indikere at handlingen vil føre til en annen side eller visning",content_copy:"Kopierer eller dupliserer"},u=["2xs","xs","sm","md","lg","xl","2xl"],r=()=>e.jsx("table",{children:m.map(o=>e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"0.5rem"},children:e.jsx(a,{material:o})}),e.jsxs("td",{style:{padding:"0.5rem"},children:[e.jsx(i,{strong:!0,children:o}),e.jsx(i,{size:"sm",children:g[o]})]})]},o))}),t=()=>e.jsx("table",{children:u.map(o=>e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"0.5rem",textAlign:"center"},children:e.jsx(a,{size:o,material:"anchor"})}),e.jsxs("td",{style:{padding:"0.5rem"},children:['size="',o,'" ',o==="md"?"(default)":""]})]},o))});r.__docgenInfo={description:"",methods:[],displayName:"IconShowcase"};t.__docgenInfo={description:"",methods:[],displayName:"IconSizing"};var n,s,d;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
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
}`,...(d=(s=r.parameters)==null?void 0:s.docs)==null?void 0:d.source}}};var c,l,_;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
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
}`,...(_=(l=t.parameters)==null?void 0:l.docs)==null?void 0:_.source}}};const D=["IconShowcase","IconSizing"];export{r as IconShowcase,t as IconSizing,D as __namedExportsOrder,N as default};
