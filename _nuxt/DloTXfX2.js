import{u as o,_ as s}from"./BbrpTvEt.js";import{d as l,c as m,G as i}from"./D42zMgGv.js";import"./CShubI_Z.js";import"./Cpj98o6Y.js";const f=l({__name:"PmInstall",props:{inStack:{type:Boolean,default:!1},name:{},sync:{default:"_pm"},saveDev:{type:Boolean,default:!1},noSync:{type:Boolean}},setup(e){const t=`
::code-group{${e.inStack?"in-stack":""} ${e.noSync?"":`sync="${e.sync}"`}}
${o().packageManagers.value.map(a=>{const n=e.name?`${a.command}${a.install}${e.saveDev?a.saveDev:""}${e.name}`:`${a.command}${a.installEmpty}`;return`\`\`\`bash [${a.name}]
${n}
\`\`\`
`}).join(`
`)}
::
`;return(a,n)=>{const c=s;return m(),i(c,{value:t,class:"[&:not(:first-child)]:mt-5"})}}});export{f as default};
