import{S as I,j as e,r as c}from"./iframe-Czkw2d44.js";import{I as o}from"./Dialog-Ln3GPn5P.js";import"./shipTypes-hFnSBndP.js";import"./Details-BDzXbQyw.js";import"./KyvDivider-CqpYfis0.js";import{B as l,a as m}from"./typography-CZZUCjYZ.js";import"./KyvSpinner-7X-wgAc2.js";import"./skillingsbuoye-Buu-F-Ac.js";import"./Logo-BmRJ4d6t.js";import"./tooltip-2P9Acch3.js";import{s as w,a as j}from"./color-tokens-BaFqaga0.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Cm7dOUjf.js";import"./index-neSntJO8.js";const v=["add_box","add_location_alt","add_location","add","adjust","alternate_email","anchor","apps","archive","arrow_back","arrow_downward","arrow_forward","arrow_right_alt","arrow_upward","article","assignment","attach_file","cached","calendar_month","change_history","chat_add_on","chat_bubble","chat","check_circle","check","chevron_left","chevron_right","circle","close","cloud_alert","cloud_done","code_blocks","comment","compare_arrows","compare","content_copy","conversation","data_table","delete","description","difference","directions_boat","directory_sync","distance","domain","download","drafts","edit_document","edit_location_alt","edit_location","edit_square","edit","error","event","explore_nearby","explore","export_notes","favorite","file_map","file_save","folder_open","format_align_center","format_align_justify","format_align_left","format_align_right","format_bold","format_italic","format_list_bulleted","format_list_numbered","forum","forward_to_inbox","forward","globe_uk","groups","image","inbox","info_i","info","keep_off","keep","keyboard_arrow_down","keyboard_arrow_up","language","layers","left_panel_close","left_panel_open","lightbulb","link","location_chip","lock","login","logout","mail_shield","mail","manage_search","map_pin_heart","map","mark_as_unread","mark_chat_read","mark_chat_unread","mark_email_read","mark_email_unread","match_case","menu","mode_cool","more_vert","move_to_inbox","move","note_stack_add","note_stack","notification_add","numbers","open_in_new","pan_zoom","pending_actions","person_add","person_pin_circle","person_pin","person","photo_camera","picture_as_pdf","pin_drop","question_exchange","radio_button_checked","radio_button_unchecked","redo","reply_all","reply","right_panel_close","right_panel_open","sailing","save","send_and_archive","send","settings_input_antenna","settings","severe_cold","sort","source_environment","stacked_email","stylus","sync","text_compare","text_snippet","timeline","undo","upload","video_library","videocam","view_list","visibility","warning","zoom_in_map","zoom_out_map"],R={title:"Helpers/Icon",component:o,decorators:[I],tags:["autodocs","kyv"],argTypes:{}},z={arrow_back:"Navigerer tilbake",arrow_right_alt:"Navigerer framover, indikere at handlingen vil føre til en annen side eller visning",content_copy:"Kopierer eller dupliserer"},k=["2xs","xs","sm","md","lg","xl","2xl","3xl"],t=[...w,...j],n=()=>e.jsx("table",{children:v.map((r,a)=>e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"1rem"},children:e.jsx(o,{material:r})}),e.jsxs("td",{style:{padding:"0.5rem"},children:[e.jsx(m,{strong:!0,children:r}),e.jsx(m,{size:"sm",children:z[r]})]}),e.jsx("td",{style:{padding:"0rem"},children:e.jsx(o,{material:r,background:t[a%t.length],title:t[a%t.length]})}),e.jsx("td",{style:{padding:"0.5rem"},children:t[a%t.length]})]},r))}),i=()=>e.jsx("table",{children:k.map(r=>e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"0.5rem",textAlign:"center"},children:e.jsx(o,{size:r,material:"anchor"})}),e.jsx("td",{style:{padding:"0.5rem",textAlign:"center"},children:e.jsx(o,{size:r,material:"anchor",background:"lyng"})}),e.jsxs("td",{style:{padding:"0.5rem"},children:['size="',r,'" ',r==="md"?"(default)":""]})]},r))}),d=()=>e.jsx(l,{gap:16,children:k.map(r=>e.jsx(c.Fragment,{children:["description","mail"].map(a=>e.jsx(c.Fragment,{children:e.jsxs(l,{horizontal:!0,gap:16,align:"center",p:8,children:[e.jsx(o,{size:r,material:a,background:"hav"}),["arrow_back","arrow_forward","mail","person","add","delete"].map(s=>e.jsxs(c.Fragment,{children:[e.jsx(o,{size:r,material:a,indicator:s}),e.jsx(o,{size:r,material:a,indicator:s,background:"lyng"})]},r+a+s))]})},r+a))},r))});n.__docgenInfo={description:"",methods:[],displayName:"IconShowcase"};i.__docgenInfo={description:"",methods:[],displayName:"IconSizing"};d.__docgenInfo={description:"",methods:[],displayName:"IconIndicator"};var _,p,g;n.parameters={...n.parameters,docs:{...(_=n.parameters)==null?void 0:_.docs,source:{originalSource:`() => {
  return <table>
      {iconIdList.map((iconId, index) => <tr key={iconId}>
          <td style={{
        padding: '1rem'
      }}>
            <Icon material={iconId} />
          </td>
          <td style={{
        padding: '0.5rem'
      }}>
            <Body strong>{iconId}</Body>
            <Body size="sm">{iconDescriptions[iconId]}</Body>
          </td>
          <td style={{
        padding: '0rem'
      }}>
            <Icon material={iconId} background={colors[index % colors.length]} title={colors[index % colors.length]} />
          </td>
          <td style={{
        padding: '0.5rem'
      }}>{colors[index % colors.length]}</td>
        </tr>)}
    </table>;
}`,...(g=(p=n.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var h,u,x;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`() => {
  return <table>
      {sizes.map(size => <tr key={size}>
          <td style={{
        padding: '0.5rem',
        textAlign: 'center'
      }}>
            <Icon size={size} material="anchor" />
          </td>
          <td style={{
        padding: '0.5rem',
        textAlign: 'center'
      }}>
            <Icon size={size} material="anchor" background="lyng" />
          </td>
          <td style={{
        padding: '0.5rem'
      }}>
            size="{size}" {size === 'md' ? '(default)' : ''}
          </td>
        </tr>)}
    </table>;
}`,...(x=(u=i.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var y,b,f;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`() => {
  return <Box gap={16}>
      {sizes.map(size => <Fragment key={size}>
          {(['description', 'mail'] as IconId[]).map(iconId => <Fragment key={size + iconId}>
              <Box horizontal gap={16} align="center" p={8}>
                <Icon size={size} material={iconId} background="hav" />
                {(['arrow_back', 'arrow_forward', 'mail', 'person', 'add', 'delete'] as IconId[]).map(indicatorId => <Fragment key={size + iconId + indicatorId}>
                    <Icon size={size} material={iconId} indicator={indicatorId} />
                    <Icon size={size} material={iconId} indicator={indicatorId} background="lyng" />
                  </Fragment>)}
              </Box>
            </Fragment>)}
        </Fragment>)}
    </Box>;
}`,...(f=(b=d.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};const T=["IconShowcase","IconSizing","IconIndicator"];export{d as IconIndicator,n as IconShowcase,i as IconSizing,T as __namedExportsOrder,R as default};
