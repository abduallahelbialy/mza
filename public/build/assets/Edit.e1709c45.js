import{T as V,c as y,w as a,o as l,a as t,u as e,Z as N,B,t as i,e as n,b as A,n as u,f as k,d as m,s as D,F as S}from"./app.e0b9633d.js";import{C,a as O,D as I,E as T}from"./colors.b29d94f6.js";import{S as h,a as v,P as w,N as E}from"./pagination.ec49999f.js";import{A as U}from"./autoplay.6cf5768d.js";import{_ as F}from"./LayoutAuthenticated.f6f41b2f.js";import{_ as M,a as P}from"./SectionTitleLineWithButton.8c12b682.js";import{_ as g,a as j}from"./CardBox.c20e43a2.js";import{_}from"./FormField.3b129a10.js";import{_ as c}from"./FormControl.af65be71.js";import{_ as K}from"./BaseButtons.f3fe04e6.js";import{_ as L}from"./NotificationBar.fbb6fb03.js";import"./BaseLevel.9089e686.js";const W={class:"flex"},z=["src","alt"],Y={key:0,class:"text-red-400 text-sm"},Z={key:0,class:"text-red-400 text-sm"},G={key:0,class:"text-red-400 text-sm"},H={key:0,class:"text-red-400 text-sm"},J={key:0,class:"text-red-400 text-sm"},Q={key:0,class:"text-red-400 text-sm"},R={key:0,class:"text-red-400 text-sm"},X={key:0,class:"text-red-400 text-sm"},ee={key:0,class:"text-red-400 text-sm"},re={key:0,class:"text-red-400 text-sm"},te={key:0,class:"text-red-400 text-sm"},ae={key:0,class:"text-red-400 text-sm"},oe={key:0,class:"text-red-400 text-sm"},se={key:0,class:"text-red-400 text-sm"},ye={__name:"Edit",props:{product:{type:Object,default:()=>({})},components:{Swiper:h,SwiperSlide:v},setup(){return{modules:[U,w,E]}}},setup($){const q=[U,w,E],d=$,r=V({_method:"put",name_arabic:d.product.name_arabic,name_english:d.product.name_english,sku:d.product.sku,weight:d.product.weight,payment_deadline_minutes:d.product.payment_deadline_minutes,cost_price:d.product.cost_price,estimated_market_price:d.product.estimated_market_price,auction_duration_minutes:d.product.auction_duration_minutes,registration_amount:d.product.registration_amount,required_bidders:d.product.required_bidders,opening_bid_amount:d.product.opening_bid_amount,product_details:d.product.product_details,auction_start:x(d.product.auction_start),auction_end:x(d.product.auction_end)});function x(p){if(!p)return null;const o=new Date(p),s=o.getFullYear();let f=o.getMonth()+1;f<10&&(f="0"+f);let b=o.getDate();return b<10&&(b="0"+b),`${s}-${f}-${b}`}return V({}),(p,o)=>(l(),y(F,null,{default:a(()=>[t(e(N),{title:"Update product"}),t(P,null,{default:a(()=>[t(M,{icon:e(C),title:"Update product",main:""},{default:a(()=>[t(g,{"route-name":p.route("admin.product.index"),icon:e(O),label:"Back",color:"white","rounded-full":"",small:""},null,8,["route-name","icon"])]),_:1},8,["icon"]),p.$page.props.flash.message?(l(),y(L,{key:Date.now(),color:"success",icon:p.mdiAlertBoxOutline},{default:a(()=>[B(i(p.$page.props.flash.message),1)]),_:1},8,["icon"])):n("",!0),t(j,{form:"",onSubmit:o[14]||(o[14]=A(s=>e(r).post(p.route("admin.product.update",d.product.id)),["prevent"]))},{footer:a(()=>[t(K,null,{default:a(()=>[t(g,{type:"submit",color:"info",label:"Submit",class:u({"opacity-25":e(r).processing}),disabled:e(r).processing},null,8,["class","disabled"])]),_:1})]),default:a(()=>[t(_,{class:"image-container"},{default:a(()=>[k("div",W,[t(g,{label:"Image Upload",class:"w-32 h-10 inline-block","route-name":p.route("admin.product.image",d.product.id),icon:e(I)},null,8,["route-name","icon"]),t(g,{label:"Image Edit",class:"w-32 h-10 inline-block ml-4","route-name":p.route("admin.product.editImageProductMultible",d.product.id),icon:e(T)},null,8,["route-name","icon"])])]),_:1}),t(e(h),{spaceBetween:30,centeredSlides:!0,autoplay:{delay:1500,disableOnInteraction:!0},pagination:{clickable:!0},navigation:!0,modules:q,class:"mySwiper"},{default:a(()=>[(l(!0),m(S,null,D(d.product.image_product,s=>(l(),y(e(v),{key:s.id},{default:a(()=>[k("img",{src:s.image_path,class:"w-full h-48 object-cover",alt:s.alt},null,8,z)]),_:2},1024))),128))]),_:1}),t(_,{label:"Name Arabic",class:u({"text-red-400":e(r).errors.name_arabic})},{default:a(()=>[t(c,{modelValue:e(r).name_arabic,"onUpdate:modelValue":o[0]||(o[0]=s=>e(r).name_arabic=s),type:"text",placeholder:"Enter Name Arabic",error:e(r).errors.name_arabic},{default:a(()=>[e(r).errors.name_arabic?(l(),m("div",Y,i(e(r).errors.name_arabic),1)):n("",!0)]),_:1},8,["modelValue","error"])]),_:1},8,["class"]),t(_,{label:"Name English",class:u({"text-red-400":e(r).errors.name_english})},{default:a(()=>[t(c,{modelValue:e(r).name_english,"onUpdate:modelValue":o[1]||(o[1]=s=>e(r).name_english=s),type:"text",placeholder:"Enter Name English",error:e(r).errors.name},{default:a(()=>[e(r).errors.name_english?(l(),m("div",Z,i(e(r).errors.name_english),1)):n("",!0)]),_:1},8,["modelValue","error"])]),_:1},8,["class"]),t(_,{label:"sku",class:u({"text-red-400":e(r).errors.sku})},{default:a(()=>[t(c,{modelValue:e(r).sku,"onUpdate:modelValue":o[2]||(o[2]=s=>e(r).sku=s),type:"text",placeholder:"Enter sku",error:e(r).errors.sku},{default:a(()=>[e(r).errors.sku?(l(),m("div",G,i(e(r).errors.sku),1)):n("",!0)]),_:1},8,["modelValue","error"])]),_:1},8,["class"]),t(_,{label:"Weight",class:u({"text-red-400":e(r).errors.weight})},{default:a(()=>[t(c,{modelValue:e(r).weight,"onUpdate:modelValue":o[3]||(o[3]=s=>e(r).weight=s),type:"number",step:"0.01",placeholder:"Enter Weight",error:e(r).errors.weight},{default:a(()=>[e(r).errors.weight?(l(),m("div",H,i(e(r).errors.weight),1)):n("",!0)]),_:1},8,["modelValue","error"])]),_:1},8,["class"]),t(_,{label:"payment deadline minutes",class:u({"text-red-400":e(r).errors.payment_deadline_minutes})},{default:a(()=>[t(c,{modelValue:e(r).payment_deadline_minutes,"onUpdate:modelValue":o[4]||(o[4]=s=>e(r).payment_deadline_minutes=s),type:"number",step:"0.01",placeholder:"Enter payment deadline minutes",error:e(r).errors.payment_deadline_minutes},{default:a(()=>[e(r).errors.payment_deadline_minutes?(l(),m("div",J,i(e(r).errors.payment_deadline_minutes),1)):n("",!0)]),_:1},8,["modelValue","error"])]),_:1},8,["class"]),t(_,{label:"cost price",class:u({"text-red-400":e(r).errors.cost_price})},{default:a(()=>[t(c,{modelValue:e(r).cost_price,"onUpdate:modelValue":o[5]||(o[5]=s=>e(r).cost_price=s),type:"number",step:"0.01",placeholder:"Enter cost price",error:e(r).errors.cost_price},{default:a(()=>[e(r).errors.cost_price?(l(),m("div",Q,i(e(r).errors.cost_price),1)):n("",!0)]),_:1},8,["modelValue","error"])]),_:1},8,["class"]),t(_,{label:"estimated market price",class:u({"text-red-400":e(r).errors.estimated_market_price})},{default:a(()=>[t(c,{modelValue:e(r).estimated_market_price,"onUpdate:modelValue":o[6]||(o[6]=s=>e(r).estimated_market_price=s),type:"number",step:"0.01",placeholder:"Enter estimated market price",error:e(r).errors.estimated_market_price},{default:a(()=>[e(r).errors.estimated_market_price?(l(),m("div",R,i(e(r).errors.estimated_market_price),1)):n("",!0)]),_:1},8,["modelValue","error"])]),_:1},8,["class"]),t(_,{label:"auction duration minutes",class:u({"text-red-400":e(r).errors.auction_duration_minutes})},{default:a(()=>[t(c,{modelValue:e(r).auction_duration_minutes,"onUpdate:modelValue":o[7]||(o[7]=s=>e(r).auction_duration_minutes=s),type:"number",placeholder:"Enter auction  duration minutes",error:e(r).errors.auction_duration_minutes},{default:a(()=>[e(r).errors.auction_duration_minutes?(l(),m("div",X,i(e(r).errors.weight),1)):n("",!0)]),_:1},8,["modelValue","error"])]),_:1},8,["class"]),t(_,{label:"registration amount",class:u({"text-red-400":e(r).errors.registration_amount})},{default:a(()=>[t(c,{modelValue:e(r).registration_amount,"onUpdate:modelValue":o[8]||(o[8]=s=>e(r).registration_amount=s),type:"number",step:"0.01",placeholder:"Enter registration amount",error:e(r).errors.registration_amount},{default:a(()=>[e(r).errors.registration_amount?(l(),m("div",ee,i(e(r).errors.registration_amount),1)):n("",!0)]),_:1},8,["modelValue","error"])]),_:1},8,["class"]),t(_,{label:"required bidders",class:u({"text-red-400":e(r).errors.required_bidders})},{default:a(()=>[t(c,{modelValue:e(r).required_bidders,"onUpdate:modelValue":o[9]||(o[9]=s=>e(r).required_bidders=s),type:"number",step:"0.01",placeholder:"Enter required bidders",error:e(r).errors.required_bidders},{default:a(()=>[e(r).errors.required_bidders?(l(),m("div",re,i(e(r).errors.required_bidders),1)):n("",!0)]),_:1},8,["modelValue","error"])]),_:1},8,["class"]),t(_,{label:"opening bid amount",class:u({"text-red-400":e(r).errors.opening_bid_amount})},{default:a(()=>[t(c,{modelValue:e(r).opening_bid_amount,"onUpdate:modelValue":o[10]||(o[10]=s=>e(r).opening_bid_amount=s),type:"number",step:"0.01",placeholder:"Enter opening bid amount",error:e(r).errors.opening_bid_amount},{default:a(()=>[e(r).errors.opening_bid_amount?(l(),m("div",te,i(e(r).errors.opening_bid_amount),1)):n("",!0)]),_:1},8,["modelValue","error"])]),_:1},8,["class"]),t(_,{label:"Details",class:u({"text-red-400":e(r).errors.product_details})},{default:a(()=>[t(c,{modelValue:e(r).product_details,"onUpdate:modelValue":o[11]||(o[11]=s=>e(r).product_details=s),type:"textarea",placeholder:"Enter  Details",error:e(r).errors.product_details},{default:a(()=>[e(r).errors.product_details?(l(),m("div",ae,i(e(r).errors.product_details),1)):n("",!0)]),_:1},8,["modelValue","error"])]),_:1},8,["class"]),t(_,{label:"auction start",class:u({"text-red-400":e(r).errors.auction_start})},{default:a(()=>[t(c,{modelValue:e(r).auction_start,"onUpdate:modelValue":o[12]||(o[12]=s=>e(r).auction_start=s),type:"date",step:"0.01",placeholder:"Enter auction start",error:e(r).errors.auction_start},{default:a(()=>[e(r).errors.auction_start?(l(),m("div",oe,i(e(r).errors.auction_start),1)):n("",!0)]),_:1},8,["modelValue","error"])]),_:1},8,["class"]),t(_,{label:"auction end",class:u({"text-red-400":e(r).errors.auction_end})},{default:a(()=>[t(c,{modelValue:e(r).auction_end,"onUpdate:modelValue":o[13]||(o[13]=s=>e(r).auction_end=s),type:"date",step:"0.01",placeholder:"Enter auction end",error:e(r).errors.auction_end},{default:a(()=>[e(r).errors.auction_end?(l(),m("div",se,i(e(r).errors.auction_end),1)):n("",!0)]),_:1},8,["modelValue","error"])]),_:1},8,["class"])]),_:1})]),_:1})]),_:1}))}};export{ye as default};
