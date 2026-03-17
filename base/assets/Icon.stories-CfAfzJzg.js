import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{S as p}from"./styrbordDecorator-CssokqkI.js";import{I as i}from"./idContext-CXOGsIH1.js";import"./Details-B2DfsxXZ.js";import"./kyvDivider-GkhM6YIE.js";import{a}from"./typography-CdiQYpGP.js";import"./skillingsbuoye-BG85ofhS.js";import"./Logo-DajRw6N7.js";import"./iframe-lDInlNZE.js";import"./preload-helper-Dp1pzeXC.js";import"./translations-DBitQYLv.js";import"./index-Btbm0Jje.js";import"./index-DqzA1BE0.js";import"./index-CHdvFyKM.js";import"./lite-DaUVFjkg.js";import"./index-iaBY1BsK.js";import"./label-sgXnIPs0.js";import"./heading-8BSrokmy.js";import"./index-DXwRgFn0.js";const _=["add_box","add_location_alt","add_location","add","adjust","anchor","archive","arrow_back","arrow_forward","arrow_right_alt","article","calendar_month","change_history","chat","check_circle","check","chevron_left","chevron_right","circle","close","cloud_alert","cloud_done","code_blocks","content_copy","data_table","delete","description","directions_boat","distance","domain","download","edit_document","edit_location_alt","edit_location","edit_square","edit","error","event","explore_nearby","explore","export_notes","favorite","file_map","file_save","folder_open","format_align_center","format_align_left","format_align_right","globe_uk","image","inbox","info_i","info","keyboard_arrow_down","keyboard_arrow_up","language","layers","lightbulb","link","location_chip","lock","login","logout","mail","map_pin_heart","map","menu","mode_cool","more_vert","move","numbers","open_in_new","pan_zoom","pending_actions","person_add","person_pin_circle","person_pin","person","picture_as_pdf","pin_drop","radio_button_checked","radio_button_unchecked","sailing","save","send","settings_input_antenna","settings","severe_cold","source_environment","stylus","timeline","upload","video_library","videocam","view_list","warning","zoom_in_map","zoom_out_map"],H={title:"Helpers/Icon",component:i,decorators:[p],tags:["autodocs","kyv"],argTypes:{}},g={arrow_back:"Navigerer tilbake",arrow_right_alt:"Navigerer framover, indikere at handlingen vil føre til en annen side eller visning",content_copy:"Kopierer eller dupliserer"},u=["2xs","xs","sm","md","lg","xl","2xl"],o=()=>e.jsx("table",{children:_.map(r=>e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"0.5rem"},children:e.jsx(i,{material:r})}),e.jsxs("td",{style:{padding:"0.5rem"},children:[e.jsx(a,{strong:!0,children:r}),e.jsx(a,{size:"sm",children:g[r]})]})]},r))}),t=()=>e.jsx("table",{children:u.map(r=>e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"0.5rem",textAlign:"center"},children:e.jsx(i,{size:r,material:"anchor"})}),e.jsxs("td",{style:{padding:"0.5rem"},children:['size="',r,'" ',r==="md"?"(default)":""]})]},r))});o.__docgenInfo={description:"",methods:[],displayName:"IconShowcase"};t.__docgenInfo={description:"",methods:[],displayName:"IconSizing"};var n,s,d;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
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
}`,...(m=(l=t.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};const K=["IconShowcase","IconSizing"];export{o as IconShowcase,t as IconSizing,K as __namedExportsOrder,H as default};
