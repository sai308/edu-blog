import{u as o,_ as s}from"./BbrpTvEt.js";import{d as m,c as r,G as i}from"./D42zMgGv.js";import"./CShubI_Z.js";import"./Cpj98o6Y.js";const f=m({__name:"PmRun",props:{inStack:{type:Boolean,default:!1},script:{},sync:{default:"_pm"},noSync:{type:Boolean}},setup(n){const e=`
::code-group{${n.inStack?"in-stack":""} ${n.noSync?"":`sync="${n.sync}"`}}
${o().packageManagers.value.map(a=>{const c=`${a.command}${a.run}${n.script}`;return`\`\`\`bash [${a.name}]
${c}
\`\`\`
`}).join(`
`)}
::
`;return(a,c)=>{const t=s;return r(),i(t,{value:e,class:"[&:not(:first-child)]:mt-5"})}}});export{f as default};
