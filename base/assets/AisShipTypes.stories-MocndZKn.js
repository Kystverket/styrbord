import{j as e}from"./iframe-C4H3T-sm.js";import{g as m,A as h}from"./shipTypes-hFnSBndP.js";import"./preload-helper-Dp1pzeXC.js";const b={title:"Data/AIS Ship Types",tags:["autodocs"]},d=()=>e.jsx("div",{style:{fontFamily:"system-ui, sans-serif",padding:"1rem"},children:e.jsxs("table",{style:{borderCollapse:"collapse",width:"100%"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{borderBottom:"2px solid #ccc",textAlign:"left"},children:[e.jsx("th",{style:{padding:"0.5rem"},children:"ID"}),e.jsx("th",{style:{padding:"0.5rem"},children:"Label"}),e.jsx("th",{style:{padding:"0.5rem"},children:"Farge"}),e.jsx("th",{style:{padding:"0.5rem"},children:"AIS-koder"})]})}),e.jsx("tbody",{children:h.map(n=>e.jsxs("tr",{style:{borderBottom:"1px solid #eee"},children:[e.jsx("td",{style:{padding:"0.5rem"},children:e.jsx("code",{children:n.id})}),e.jsx("td",{style:{padding:"0.5rem"},children:n.label}),e.jsxs("td",{style:{padding:"0.5rem"},children:[e.jsx("span",{style:{background:n.color,border:`2px solid ${n.borderColor}`,display:"inline-block",width:24,height:24,borderRadius:4,verticalAlign:"middle",marginRight:8}}),e.jsx("code",{children:n.color})]}),e.jsx("td",{style:{padding:"0.5rem",fontVariantNumeric:"tabular-nums"},children:n.aisCodes.join(", ")})]},n.id))})]})}),t=()=>{const n=["40","30","80","99","50","37"];return e.jsxs("div",{style:{fontFamily:"system-ui, sans-serif",padding:"1rem"},children:[e.jsx("h3",{style:{marginBottom:"0.5rem"},children:"getShipTypeByAisCode()"}),e.jsxs("table",{style:{borderCollapse:"collapse"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{borderBottom:"2px solid #ccc",textAlign:"left"},children:[e.jsx("th",{style:{padding:"0.5rem"},children:"AIS-kode"}),e.jsx("th",{style:{padding:"0.5rem"},children:"Resultat"})]})}),e.jsx("tbody",{children:n.map(s=>{const r=m(s);return e.jsxs("tr",{style:{borderBottom:"1px solid #eee"},children:[e.jsx("td",{style:{padding:"0.5rem"},children:e.jsx("code",{children:s})}),e.jsx("td",{style:{padding:"0.5rem"},children:r?e.jsxs(e.Fragment,{children:[e.jsx("span",{style:{background:r.color,border:`2px solid ${r.borderColor}`,display:"inline-block",width:16,height:16,borderRadius:3,verticalAlign:"middle",marginRight:6}}),r.label]}):e.jsx("em",{children:"undefined"})})]},s)})})]})]})};d.__docgenInfo={description:"",methods:[],displayName:"Overview"};t.__docgenInfo={description:"",methods:[],displayName:"Lookup"};var l,i,o;d.parameters={...d.parameters,docs:{...(l=d.parameters)==null?void 0:l.docs,source:{originalSource:`() => <div style={{
  fontFamily: 'system-ui, sans-serif',
  padding: '1rem'
}}>
    <table style={{
    borderCollapse: 'collapse',
    width: '100%'
  }}>
      <thead>
        <tr style={{
        borderBottom: '2px solid #ccc',
        textAlign: 'left'
      }}>
          <th style={{
          padding: '0.5rem'
        }}>ID</th>
          <th style={{
          padding: '0.5rem'
        }}>Label</th>
          <th style={{
          padding: '0.5rem'
        }}>Farge</th>
          <th style={{
          padding: '0.5rem'
        }}>AIS-koder</th>
        </tr>
      </thead>
      <tbody>
        {AIS_SHIP_TYPES.map(t => <tr key={t.id} style={{
        borderBottom: '1px solid #eee'
      }}>
            <td style={{
          padding: '0.5rem'
        }}>
              <code>{t.id}</code>
            </td>
            <td style={{
          padding: '0.5rem'
        }}>{t.label}</td>
            <td style={{
          padding: '0.5rem'
        }}>
              <span style={{
            background: t.color,
            border: \`2px solid \${t.borderColor}\`,
            display: 'inline-block',
            width: 24,
            height: 24,
            borderRadius: 4,
            verticalAlign: 'middle',
            marginRight: 8
          }} />
              <code>{t.color}</code>
            </td>
            <td style={{
          padding: '0.5rem',
          fontVariantNumeric: 'tabular-nums'
        }}>{t.aisCodes.join(', ')}</td>
          </tr>)}
      </tbody>
    </table>
  </div>`,...(o=(i=d.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};var a,c,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
  const exampleCodes = ['40', '30', '80', '99', '50', '37'];
  return <div style={{
    fontFamily: 'system-ui, sans-serif',
    padding: '1rem'
  }}>
      <h3 style={{
      marginBottom: '0.5rem'
    }}>getShipTypeByAisCode()</h3>
      <table style={{
      borderCollapse: 'collapse'
    }}>
        <thead>
          <tr style={{
          borderBottom: '2px solid #ccc',
          textAlign: 'left'
        }}>
            <th style={{
            padding: '0.5rem'
          }}>AIS-kode</th>
            <th style={{
            padding: '0.5rem'
          }}>Resultat</th>
          </tr>
        </thead>
        <tbody>
          {exampleCodes.map(code => {
          const result = getShipTypeByAisCode(code);
          return <tr key={code} style={{
            borderBottom: '1px solid #eee'
          }}>
                <td style={{
              padding: '0.5rem'
            }}>
                  <code>{code}</code>
                </td>
                <td style={{
              padding: '0.5rem'
            }}>
                  {result ? <>
                      <span style={{
                  background: result.color,
                  border: \`2px solid \${result.borderColor}\`,
                  display: 'inline-block',
                  width: 16,
                  height: 16,
                  borderRadius: 3,
                  verticalAlign: 'middle',
                  marginRight: 6
                }} />
                      {result.label}
                    </> : <em>undefined</em>}
                </td>
              </tr>;
        })}
        </tbody>
      </table>
    </div>;
}`,...(p=(c=t.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const u=["Overview","Lookup"];export{t as Lookup,d as Overview,u as __namedExportsOrder,b as default};
