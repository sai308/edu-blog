import{d as y,c as n,e as i,f as s,G as a,w as m,F as d,i as o,h as r,t as g,a3 as c,J as k,g as $,n as p,K as v,H as w,B,a5 as I}from"./D42zMgGv.js";import{_ as b}from"./DsDR5_Hc.js";const N={class:"underline-offset-4 hover:underline"},z={class:"text-3xl font-bold leading-tight tracking-tighter md:text-4xl lg:leading-[1.1]"},C={class:"max-w-2xl text-lg font-light text-foreground"},S={class:"flex w-full items-center justify-start gap-2 py-2"},R=y({__name:"HeroAlt",props:{announcement:{},actions:{},mobileRight:{}},setup(V){return(e,F)=>{const l=v,_=b,f=w,u=B,h=I;return n(),i("div",{class:p(["gap-8 px-4 py-8 md:py-12 md:pb-8 lg:py-12 lg:pb-10",{"grid md:grid-cols-3":e.$slots.right}])},[s("section",{class:p(["flex flex-col items-start gap-2",{"md:col-span-2":e.$slots.right}])},[e.announcement?(n(),a(u,{key:0,to:e.announcement.to,target:e.announcement.target,class:"inline-flex items-center px-0.5 text-sm font-medium"},{default:m(()=>[e.announcement.icon?(n(),i(d,{key:0},[o(l,{name:e.announcement.icon,size:16},null,8,["name"]),o(_,{class:"mx-2 h-4",orientation:"vertical"})],64)):r("",!0),s("span",N,g(e.announcement.title),1),o(f,{name:"lucide:arrow-right",class:"ml-1 size-4"})]),_:1},8,["to","target"])):r("",!0),s("h1",z,[c(e.$slots,"title",{unwrap:"p"})]),s("p",C,[c(e.$slots,"description",{unwrap:"p"})]),s("div",S,[(n(!0),i(d,null,k(e.actions,(t,x)=>(n(),a(u,{key:x,to:t.to,target:t.target},{default:m(()=>[o(h,{variant:t.variant,size:"sm"},{default:m(()=>[t.leftIcon?(n(),a(l,{key:0,name:t.leftIcon,class:"mr-1"},null,8,["name"])):r("",!0),$(" "+g(t.name)+" ",1),t.rightIcon?(n(),a(l,{key:1,name:t.rightIcon,class:"ml-1"},null,8,["name"])):r("",!0)]),_:2},1032,["variant"])]),_:2},1032,["to","target"]))),128))])],2),s("div",{class:p(["mx-auto",{"order-first md:order-last":e.mobileRight==="top"}])},[c(e.$slots,"right",{unwrap:"p"})],2)],2)}}});export{R as default};