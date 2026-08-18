import{S as I,j as e,r as d}from"./iframe-iZ4XiIu8.js";import{I as a}from"./Dialog-Cwm0YOOu.js";import"./shipTypes-hFnSBndP.js";import"./Details-DhLcoDEo.js";import"./KyvDivider--tXNW3JF.js";import{B as c,a as m}from"./typography-BWYFi2sF.js";import"./KyvSpinner-DdPSQ1xt.js";import"./skillingsbuoye-Bxnw_i0Q.js";import"./Logo-BVdDHpoI.js";import"./tooltip-DyQpg3_0.js";import{s as v,a as j}from"./color-tokens-BaFqaga0.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BUIFYONC.js";import"./index-BrsAFw8f.js";const z=["add_box","add_location_alt","add_location","add_notes","add","adjust","air","alternate_email","anchor","apps","archive","arrow_back","arrow_downward","arrow_forward","arrow_right_alt","arrow_upward","article","assignment","attach_email","attach_file","autorenew","backspace","backup","book_4","bottom_panel_close","bottom_panel_open","cached","calendar_month","change_history","chat_add_on","chat_bubble","chat","check_circle","check","chevron_left","chevron_right","circle","close","cloud_alert","cloud_done","code_blocks","comment","compare_arrows","compare","content_copy","conversation","copy_all","cycle","dark_mode","data_table","delete_history","delete","description","difference","directions_boat","directory_sync","distance","document_search","domain","download","drafts","edit_document","edit_location_alt","edit_location","edit_square","edit","error","event","explore_nearby","explore","export_notes","exposure_zero","favorite","file_map_stack","file_map","file_save","folder_check_2","folder_match","folder_off","folder_open","folder_supervised","folder","format_align_center","format_align_justify","format_align_left","format_align_right","format_bold","format_italic","format_list_bulleted","format_list_numbered","format_size","forum","forward_to_inbox","forward","globe_uk","groups","history_off","history_toggle_off","history","image","inbox","info_i","info","keep_off","keep","keyboard_arrow_down","keyboard_arrow_up","language","layers","left_panel_close","left_panel_open","light_mode","lightbulb","link","location_chip","lock","login","logout","mail_shield","mail","manage_history","manage_search","map_pin_heart","map","mark_as_unread","mark_chat_read","mark_chat_unread","mark_email_read","mark_email_unread","match_case","menu_open","menu","mode_cool","more_vert","move_to_inbox","move","note_stack_add","note_stack","notification_add","numbers","open_in_new","pan_zoom","pending_actions","person_add","person_pin_circle","person_pin","person","photo_camera","picture_as_pdf","pin_drop","pin_history","question_exchange","radio_button_checked","radio_button_unchecked","redo","reply_all","reply","right_panel_close","right_panel_open","sailing","save","send_and_archive","send","settings_input_antenna","settings","severe_cold","sort","source_environment","splitscreen_landscape","stacked_email","stylus","sync","text_compare","text_snippet","timeline","top_panel_close","top_panel_open","tsunami","undo","unknown_document","upload","vertical_align_bottom","vertical_align_top","video_library","videocam","view_list","visibility","vital_signs","warning","water","waves","zoom_in_map","zoom_out_map"],T={title:"Helpers/Icon",component:a,decorators:[I],tags:["autodocs","kyv"],argTypes:{}},B={arrow_back:"Navigerer tilbake",arrow_right_alt:"Navigerer framover, indikere at handlingen vil føre til en annen side eller visning",content_copy:"Kopierer eller dupliserer"},w=["2xs","xs","sm","md","lg","xl","2xl","3xl"],t=[...v,...j],n=()=>e.jsx("table",{children:z.map((o,r)=>e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"1rem"},children:e.jsx(a,{material:o})}),e.jsxs("td",{style:{padding:"0.5rem"},children:[e.jsx(m,{strong:!0,children:o}),e.jsx(m,{size:"sm",children:B[o]})]}),e.jsx("td",{style:{padding:"0rem"},children:e.jsx(a,{material:o,background:t[r%t.length],title:t[r%t.length]})}),e.jsx("td",{style:{padding:"0.5rem"},children:t[r%t.length]})]},o))}),i=()=>e.jsx("table",{children:w.map(o=>e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"0.5rem",textAlign:"center"},children:e.jsx(a,{size:o,material:"anchor"})}),e.jsx("td",{style:{padding:"0.5rem",textAlign:"center"},children:e.jsx(a,{size:o,material:"anchor",background:"lyng"})}),e.jsxs("td",{style:{padding:"0.5rem"},children:['size="',o,'" ',o==="md"?"(default)":""]})]},o))}),s=()=>e.jsx(c,{gap:16,children:w.map(o=>e.jsx(d.Fragment,{children:["description","mail","water"].map(r=>e.jsx(c,{gap:4,p:4,children:["bottom-right","bottom-left","top-right","top-left"].map(l=>e.jsx(d.Fragment,{children:e.jsxs(c,{horizontal:!0,gap:16,align:"center",p:8,children:[e.jsx(a,{size:o,material:r,background:"hav"}),["arrow_back","arrow_forward","mail","person","add","delete"].map(_=>e.jsx(d.Fragment,{children:e.jsx(a,{size:o,material:r,indicator:_,indicatorPosition:l,background:"lyng"})},o+r+_))]})},o+r+l))},o+r))},o))});n.__docgenInfo={description:"",methods:[],displayName:"IconShowcase"};i.__docgenInfo={description:"",methods:[],displayName:"IconSizing"};s.__docgenInfo={description:"",methods:[],displayName:"IconIndicator"};var p,g,h;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
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
}`,...(h=(g=n.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var u,f,y;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
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
}`,...(y=(f=i.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var x,b,k;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`() => {
  return <Box gap={16}>
      {sizes.map(size => <Fragment key={size}>
          {(['description', 'mail', 'water'] as IconId[]).map(iconId => <Box gap={4} p={4} key={size + iconId}>
              {(['bottom-right', 'bottom-left', 'top-right', 'top-left'] as const).map(indicatorPosition => <Fragment key={size + iconId + indicatorPosition}>
                  <Box horizontal gap={16} align="center" p={8}>
                    <Icon size={size} material={iconId} background="hav" />
                    {(['arrow_back', 'arrow_forward', 'mail', 'person', 'add', 'delete'] as IconId[]).map(indicatorId => <Fragment key={size + iconId + indicatorId}>
                          <Icon size={size} material={iconId} indicator={indicatorId} indicatorPosition={indicatorPosition} background="lyng" />
                        </Fragment>)}
                  </Box>
                </Fragment>)}
            </Box>)}
        </Fragment>)}
    </Box>;
}`,...(k=(b=s.parameters)==null?void 0:b.docs)==null?void 0:k.source}}};const G=["IconShowcase","IconSizing","IconIndicator"];export{s as IconIndicator,n as IconShowcase,i as IconSizing,G as __namedExportsOrder,T as default};
