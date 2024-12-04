import{u as t,_ as s}from"./BbrpTvEt.js";import{d as m,c as r,G as i}from"./D42zMgGv.js";import"./CShubI_Z.js";import"./Cpj98o6Y.js";const p=m({__name:"PmX",props:{inStack:{type:Boolean,default:!1},command:{},sync:{default:"_pm"},noSync:{type:Boolean}},setup(n){const c=`
::code-group{${n.inStack?"in-stack":""} ${n.noSync?"":`sync="${n.sync}"`}}
${t().packageManagers.value.map(a=>{const e=`${a.x}${n.command}`;return`\`\`\`bash [${a.name}]
${e}
\`\`\`
`}).join(`
`)}
::
`;return(a,e)=>{const o=s;return r(),i(o,{value:c,class:"[&:not(:first-child)]:mt-5"})}}});export{p as default};
