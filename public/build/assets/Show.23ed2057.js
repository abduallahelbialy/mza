import{c as n,w as a,o as i,a as t,u as l,Z as c,f as e,t as s}from"./app.e0b9633d.js";import{C as d,a as m}from"./colors.b29d94f6.js";import{_}from"./LayoutAuthenticated.f6f41b2f.js";import{_ as u,a as f}from"./SectionTitleLineWithButton.8c12b682.js";import{_ as p,a as b}from"./CardBox.c20e43a2.js";import"./FormControl.af65be71.js";import"./BaseLevel.9089e686.js";const h=e("td",{class:"p-4 pl-8 text-slate-500 dark:text-slate-400 hidden lg:block"}," Name ",-1),w={"data-label":"Name"},k=e("td",{class:"p-4 pl-8 text-slate-500 dark:text-slate-400 hidden lg:block"}," Created ",-1),x={"data-label":"Created"},j={__name:"Show",props:{role:{type:Object,default:()=>({})},permissions:{type:Object,default:()=>({})},roleHasPermissions:{type:Object,default:()=>({})}},setup(o){return(r,y)=>(i(),n(_,null,{default:a(()=>[t(l(c),{title:"View role"}),t(f,null,{default:a(()=>[t(u,{icon:l(d),title:"View role",main:""},{default:a(()=>[t(p,{"route-name":r.route("admin.role.index"),icon:l(m),label:"Back",color:"white","rounded-full":"",small:""},null,8,["route-name","icon"])]),_:1},8,["icon"]),t(b,{class:"mb-6"},{default:a(()=>[e("table",null,[e("tbody",null,[e("tr",null,[h,e("td",w,s(o.role.name),1)]),e("tr",null,[k,e("td",x,s(new Date(o.role.created_at).toLocaleString()),1)])])])]),_:1})]),_:1})]),_:1}))}};export{j as default};
