import{d as f,az as p,aA as _,r,aB as m,c as o,e as c,i as t,w as k,D as h,T as y,P as i,H as C}from"./D42zMgGv.js";const x={class:"flex"},v={key:0},T={key:1},B=f({__name:"CodeCopy",props:{code:{}},setup(s){const{toast:d}=p(),{copy:l}=_({source:s.code}),e=r(!1);async function u(){await l(s.code),e.value=!0,i().value.main.codeCopyToast&&d({description:i().value.main.codeCopyToastText})}const a=r();return m(a,()=>{e.value=!1}),(b,g)=>{const n=C;return o(),c("div",x,[t(y,{name:"fade",mode:"out-in"},{default:k(()=>[h(e)===!1?(o(),c("div",v,[t(n,{name:"lucide:copy",class:"block cursor-pointer self-center text-muted-foreground hover:text-primary",onClick:u})])):(o(),c("div",T,[t(n,{ref_key:"checkIconRef",ref:a,name:"lucide:check",class:"block cursor-pointer self-center text-muted-foreground hover:text-primary"},null,512)]))]),_:1})])}}});export{B as _};