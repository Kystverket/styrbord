import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{S as p}from"./styrbordDecorator-C7ub6T18.js";import{I as i}from"./Avatar-dgi7irOL.js";import"./Details-J56z05wB.js";import"./kyvDivider-GkhM6YIE.js";import{a as n}from"./typography-CdiQYpGP.js";import"./skillingsbuoye-BG85ofhS.js";import"./Logo-DajRw6N7.js";import"./iframe-os1x_34h.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DoXY-YVa.js";import"./index-DYQ55Al8.js";import"./index-BK_GUzSP.js";import"./lite-DaUVFjkg.js";import"./index-k5SzAf8c.js";import"./label-Bk6Vqqws.js";import"./heading-Ba1REBZZ.js";import"./index-kpcesGPL.js";const _=["add","add_box","add_location","add_location_alt","adjust","anchor","archive","arrow_back","arrow_forward","arrow_right_alt","article","calendar_month","change_history","chat","check_circle","check","chevron_left","chevron_right","circle","close","cloud_alert","cloud_done","content_copy","data_table","delete","description","directions_boat","distance","domain","download","edit_document","edit_location_alt","edit_location","edit_square","edit","error","event","explore_nearby","explore","export_notes","favorite","file_map","file_save","format_align_center","format_align_left","format_align_right","globe_uk","inbox","info","info_i","keyboard_arrow_down","keyboard_arrow_up","layers","lightbulb","link","location_chip","lock","login","logout","mail","map_pin_heart","map","menu","mode_cool","more_vert","move","numbers","open_in_new","pending_actions","person_add","person_pin_circle","person_pin","person","pin_drop","radio_button_checked","radio_button_unchecked","sailing","save","send","settings_input_antenna","settings","severe_cold","source_environment","stylus","timeline","video_library","videocam","view_list","warning","zoom_in_map","zoom_out_map","picture_as_pdf","pan_zoom","image","code_blocks","upload","folder_open"],q={title:"Helpers/Icon",component:i,decorators:[p],tags:["autodocs","kyv"],argTypes:{}},g={arrow_back:"Navigerer tilbake",arrow_right_alt:"Navigerer framover, indikere at handlingen vil føre til en annen side eller visning",content_copy:"Kopierer eller dupliserer"},h=["2xs","xs","sm","md","lg","xl","2xl"],o=()=>e.jsx("table",{children:_.map(r=>e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"0.5rem"},children:e.jsx(i,{material:r})}),e.jsxs("td",{style:{padding:"0.5rem"},children:[e.jsx(n,{strong:!0,children:r}),e.jsx(n,{size:"sm",children:g[r]})]})]},r))}),t=()=>e.jsx("table",{children:h.map(r=>e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"0.5rem",textAlign:"center"},children:e.jsx(i,{size:r,material:"anchor"})}),e.jsxs("td",{style:{padding:"0.5rem"},children:['size="',r,'" ',r==="md"?"(default)":""]})]},r))});o.__docgenInfo={description:"",methods:[],displayName:"IconShowcase"};t.__docgenInfo={description:"",methods:[],displayName:"IconSizing"};var a,s,d;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
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
}`,...(m=(l=t.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};const H=["IconShowcase","IconSizing"];export{o as IconShowcase,t as IconSizing,H as __namedExportsOrder,q as default};
