import{T as p,c as _,w as a,o as m,a as o,u as e,Z as c,b,n,d as $,t as y,e as V}from"./app.e0b9633d.js";import{C as w,a as x,j as k}from"./colors.b29d94f6.js";import{_ as B}from"./LayoutAuthenticated.f6f41b2f.js";import{_ as C,a as A}from"./SectionTitleLineWithButton.8c12b682.js";import{_ as i,a as N}from"./CardBox.c20e43a2.js";import{_ as d}from"./FormField.3b129a10.js";import{_ as g}from"./FormControl.af65be71.js";import{_ as v}from"./FormCheckRadioGroup.e8e8399a.js";import{_ as S}from"./BaseButtons.f3fe04e6.js";import"./BaseLevel.9089e686.js";const j={key:0,class:"text-red-400 text-sm"},Z={__name:"Create",props:{permissions:{type:Object,default:()=>({})}},setup(u){const f=u,s=p({name:"",permissions:[]});return(l,r)=>(m(),_(B,null,{default:a(()=>[o(e(c),{title:"Add role"}),o(A,null,{default:a(()=>[o(C,{icon:e(w),title:"Add role",main:""},{default:a(()=>[o(i,{"route-name":l.route("admin.role.index"),icon:e(x),label:"Back",color:"white","rounded-full":"",small:""},null,8,["route-name","icon"])]),_:1},8,["icon"]),o(N,{form:"",onSubmit:r[2]||(r[2]=b(t=>e(s).post(l.route("admin.role.store")),["prevent"]))},{footer:a(()=>[o(S,null,{default:a(()=>[o(i,{type:"submit",color:"info",label:"Submit",class:n({"opacity-25":e(s).processing}),disabled:e(s).processing},null,8,["class","disabled"])]),_:1})]),default:a(()=>[o(d,{label:"Name",class:n({"text-red-400":e(s).errors.name})},{default:a(()=>[o(g,{modelValue:e(s).name,"onUpdate:modelValue":r[0]||(r[0]=t=>e(s).name=t),type:"text",placeholder:"Enter Name",error:e(s).errors.name},{default:a(()=>[e(s).errors.name?(m(),$("div",j,y(e(s).errors.name),1)):V("",!0)]),_:1},8,["modelValue","error"])]),_:1},8,["class"]),o(k),o(d,{label:"Permissions","wrap-body":""},{default:a(()=>[o(v,{modelValue:e(s).permissions,"onUpdate:modelValue":r[1]||(r[1]=t=>e(s).permissions=t),name:"permissions","is-column":"",options:f.permissions},null,8,["modelValue","options"])]),_:1})]),_:1})]),_:1})]),_:1}))}};export{Z as default};