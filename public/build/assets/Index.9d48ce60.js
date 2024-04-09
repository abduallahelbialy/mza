import{T as k,K as _,o as a,d,f as t,L as j,t as o,a as n,w as l,c as m,u as i,e as u,F as h,s as g,Z as x,B as N}from"./app.e0b9633d.js";import{x as v,y as O,z as B,a as L,t as M,A}from"./colors.b29d94f6.js";import{_ as I}from"./LayoutAuthenticated.f6f41b2f.js";import{_ as C,a as D}from"./SectionTitleLineWithButton.8c12b682.js";import{_ as f,a as E}from"./CardBox.c20e43a2.js";import{_ as $}from"./BaseButtons.f3fe04e6.js";import{_ as V}from"./NotificationBar.fbb6fb03.js";import"./FormControl.af65be71.js";import"./BaseLevel.9089e686.js";const S={"data-label":"Name"},T={"data-label":"Description"},z={"data-label":"Enabled"},F={key:0,class:"before:hidden lg:w-1 whitespace-nowrap"},q={__name:"MenuItemList",props:{item:{type:Object,default:()=>({})},menu:{type:Object,default:()=>({})},can:{type:Object,default:()=>({})},level:{type:Number,default:0}},setup(e){const s=k({});function b(c,r){confirm("Are you sure you want to delete?")&&s.delete(route("admin.menu.item.destroy",{menu:c,item:r}))}return(c,r)=>{const w=_("MenuItemList",!0);return a(),d(h,null,[(a(),d("tr",{key:e.item.id},[t("td",S,[t("div",{style:j({"margin-left":e.level*20+"px"})},o(e.item.name),5)]),t("td",T,o(e.item.description),1),t("td",z,o(e.item.enabled),1),e.can.edit||e.can.delete?(a(),d("td",F,[n($,{type:"justify-start lg:justify-end","no-wrap":""},{default:l(()=>[e.can.edit?(a(),m(f,{key:0,"route-name":c.route("admin.menu.item.edit",{menu:e.menu.id,item:e.item.id}),color:"info",icon:i(v),small:""},null,8,["route-name","icon"])):u("",!0),e.can.delete?(a(),m(f,{key:1,color:"danger",icon:i(O),small:"",onClick:r[0]||(r[0]=y=>b(e.menu.id,e.item.id))},null,8,["icon"])):u("",!0)]),_:1})])):u("",!0)])),(a(!0),d(h,null,g(e.item.children,y=>(a(),m(w,{item:y,menu:e.menu,can:e.can,level:e.level+1},null,8,["item","menu","can","level"]))),256))],64)}}},K={class:"border-collapse w-full border border-slate-400 dark:border-slate-500 bg-white dark:bg-slate-800 text-sm shadow-sm"},P=t("td",{class:"p-4 pl-8 text-slate-500 dark:text-slate-400 hidden lg:block"}," Name ",-1),Z={"data-label":"Name"},p=t("td",{class:"p-4 pl-8 text-slate-500 dark:text-slate-400 hidden lg:block"}," Machine name ",-1),G={"data-label":"Machine Name"},H=t("th",null," Name ",-1),J=t("th",null," Description ",-1),Q=t("th",null," Enable ",-1),R={key:0},ie={__name:"Index",props:{items:{type:Object,default:()=>({})},menu:{type:Object,default:()=>({})},can:{type:Object,default:()=>({})}},setup(e){return k({}),(s,b)=>(a(),m(I,null,{default:l(()=>[n(i(x),{title:"Menu Items"}),n(D,null,{default:l(()=>[n(C,{icon:i(B),title:"Menu Items",main:""},{default:l(()=>[n($,{type:"justify-start lg:justify-end","no-wrap":""},{default:l(()=>[n(f,{"route-name":s.route("admin.menu.index"),icon:i(L),label:"Back",color:"white","rounded-full":"",small:""},null,8,["route-name","icon"]),e.can.delete?(a(),m(f,{key:0,"route-name":s.route("admin.menu.item.create",e.menu.id),icon:i(M),label:"Add",color:"info","rounded-full":"",small:""},null,8,["route-name","icon"])):u("",!0)]),_:1})]),_:1},8,["icon"]),s.$page.props.flash.message?(a(),m(V,{key:Date.now(),color:"success",icon:i(A)},{default:l(()=>[N(o(s.$page.props.flash.message),1)]),_:1},8,["icon"])):u("",!0),n(E,{class:"mb-6","has-table":""},{default:l(()=>[t("table",K,[t("tbody",null,[t("tr",null,[P,t("td",Z,o(e.menu.name),1)]),t("tr",null,[p,t("td",G,o(e.menu.machine_name),1)])])]),t("table",null,[t("thead",null,[t("tr",null,[H,J,Q,e.can.edit||e.can.delete?(a(),d("th",R,"Actions")):u("",!0)])]),t("tbody",null,[(a(!0),d(h,null,g(e.items,c=>(a(),m(q,{item:c,menu:e.menu,can:e.can,level:0},null,8,["item","menu","can"]))),256))])])]),_:1})]),_:1})]),_:1}))}};export{ie as default};
