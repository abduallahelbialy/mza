import{T as b,c as g,w as a,o as l,a as r,u as e,Z as x,b as V,n,d as c,t as m,e as u,f as $}from"./app.e0b9633d.js";import{m as T,a as k}from"./colors.b29d94f6.js";import{_ as B}from"./LayoutAuthenticated.f6f41b2f.js";import{_ as N,a as h}from"./SectionTitleLineWithButton.8c12b682.js";import{_ as f,a as v}from"./CardBox.c20e43a2.js";import{_ as d}from"./FormField.3b129a10.js";import{_}from"./FormControl.af65be71.js";import{_ as w}from"./BaseButtons.f3fe04e6.js";import"./BaseLevel.9089e686.js";const C={key:0,class:"text-red-400 text-sm"},E={key:0,class:"text-red-400 text-sm"},Z={__name:"Edit",props:{categoryType:{type:Object,default:()=>({})}},setup(y){const s=y,t=b({_method:"put",name:s.categoryType.name,description:s.categoryType.description});return(p,o)=>(l(),g(B,null,{default:a(()=>[r(e(x),{title:"Update Category Type"}),r(h,null,{default:a(()=>[r(N,{icon:e(T),title:"Update Category Type",main:""},{default:a(()=>[r(f,{"route-name":p.route("admin.category.type.index"),icon:e(k),label:"Back",color:"white","rounded-full":"",small:""},null,8,["route-name","icon"])]),_:1},8,["icon"]),r(v,{form:"",onSubmit:o[2]||(o[2]=V(i=>e(t).post(p.route("admin.category.type.update",s.categoryType.id)),["prevent"]))},{footer:a(()=>[r(w,null,{default:a(()=>[r(f,{type:"submit",color:"info",label:"Submit",class:n({"opacity-25":e(t).processing}),disabled:e(t).processing},null,8,["class","disabled"])]),_:1})]),default:a(()=>[r(d,{label:"Name",class:n({"text-red-400":e(t).errors.name})},{default:a(()=>[r(_,{modelValue:e(t).name,"onUpdate:modelValue":o[0]||(o[0]=i=>e(t).name=i),type:"text",placeholder:"Enter Name",error:e(t).errors.name},{default:a(()=>[e(t).errors.name?(l(),c("div",C,m(e(t).errors.name),1)):u("",!0)]),_:1},8,["modelValue","error"])]),_:1},8,["class"]),r(d,{label:"Machine Name"},{default:a(()=>[$("div",null,m(s.categoryType.machine_name),1)]),_:1}),r(d,{label:"Description",class:n({"text-red-400":e(t).errors.description})},{default:a(()=>[r(_,{modelValue:e(t).description,"onUpdate:modelValue":o[1]||(o[1]=i=>e(t).description=i),type:"text",placeholder:"Enter Description",error:e(t).errors.description},{default:a(()=>[e(t).errors.description?(l(),c("div",E,m(e(t).errors.description),1)):u("",!0)]),_:1},8,["modelValue","error"])]),_:1},8,["class"])]),_:1})]),_:1})]),_:1}))}};export{Z as default};
