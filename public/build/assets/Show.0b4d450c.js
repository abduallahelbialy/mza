import{c as d,w as a,o as n,a as e,u as s,Z as i,f as t,t as o}from"./app.e0b9633d.js";import{C as c,a as u}from"./colors.b29d94f6.js";import{_ as m}from"./LayoutAuthenticated.f6f41b2f.js";import{_,a as f}from"./SectionTitleLineWithButton.8c12b682.js";import{_ as p,a as b}from"./CardBox.c20e43a2.js";import"./FormControl.af65be71.js";import"./BaseLevel.9089e686.js";const h=t("td",{class:"p-4 pl-8 text-slate-500 dark:text-slate-400 hidden lg:block"}," Name ",-1),k={"data-label":"Name"},x=t("td",{class:"p-4 pl-8 text-slate-500 dark:text-slate-400 hidden lg:block"}," Email ",-1),w={"data-label":"Email"},y=t("td",{class:"p-4 pl-8 text-slate-500 dark:text-slate-400 hidden lg:block"}," Created ",-1),g={"data-label":"Created"},A={__name:"Show",props:{user:{type:Object,default:()=>({})},roles:{type:Object,default:()=>({})},userHasRoles:{type:Object,default:()=>({})}},setup(l){return(r,B)=>(n(),d(m,null,{default:a(()=>[e(s(i),{title:"View user"}),e(f,null,{default:a(()=>[e(_,{icon:s(c),title:"View user",main:""},{default:a(()=>[e(p,{"route-name":r.route("admin.user.index"),icon:s(u),label:"Back",color:"white","rounded-full":"",small:""},null,8,["route-name","icon"])]),_:1},8,["icon"]),e(b,{class:"mb-6"},{default:a(()=>[t("table",null,[t("tbody",null,[t("tr",null,[h,t("td",k,o(l.user.name),1)]),t("tr",null,[x,t("td",w,o(l.user.email),1)]),t("tr",null,[y,t("td",g,o(new Date(l.user.created_at).toLocaleString()),1)])])])]),_:1})]),_:1})]),_:1}))}};export{A as default};
