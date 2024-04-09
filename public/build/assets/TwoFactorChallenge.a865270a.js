import{k as m,T as w,c as f,w as l,o as s,a as o,u as c,Z as C,n as v,b,f as k,d as n,B as u,F as i,S as B}from"./app.e0b9633d.js";import{_ as P,a as T,b as R}from"./FormValidationErrors.398f41cb.js";import{a as S,_ as U}from"./CardBox.c20e43a2.js";import{_ as g}from"./FormControl.af65be71.js";import{_}from"./FormField.3b129a10.js";import{j as h}from"./colors.b29d94f6.js";import{_ as F}from"./BaseLevel.9089e686.js";const N={class:"mb-4 text-sm text-gray-600"},A={__name:"TwoFactorChallenge",setup(I){const r=m(!1),a=w({code:"",recovery_code:""}),p=m(null),y=m(null),x=async()=>{var d,e;r.value^=!0,await B(),r.value?((d=p.value)==null||d.focus(),a.code=""):((e=y.value)==null||e.focus(),a.recovery_code="")},V=()=>{a.post(route("two-factor.login"))};return(d,e)=>(s(),f(P,null,{default:l(()=>[o(c(C),{title:"Two-factor Confirmation"}),o(R,{bg:"purplePink"},{default:l(({cardClass:$})=>[o(S,{class:v($),form:"",onSubmit:b(V,["prevent"])},{default:l(()=>[o(T),o(_,null,{default:l(()=>[k("div",N,[r.value?(s(),n(i,{key:1},[u(" Please confirm access to your account by entering one of your emergency recovery codes. ")],64)):(s(),n(i,{key:0},[u(" Please confirm access to your account by entering the authentication code provided by your authenticator application. ")],64))])]),_:1}),r.value?(s(),f(_,{key:1,label:"Recovery Code","label-for":"recovery_code",help:"Please enter recovery code"},{default:l(()=>[o(g,{id:"recovery_code",onSetRef:e[2]||(e[2]=t=>p.value=t),modelValue:c(a).recovery_code,"onUpdate:modelValue":e[3]||(e[3]=t=>c(a).recovery_code=t),type:"text",class:"mt-1 block w-full",autocomplete:"one-time-code"},null,8,["modelValue"])]),_:1})):(s(),f(_,{key:0,label:"Code","label-for":"code",help:"Please enter one-time code"},{default:l(()=>[o(g,{id:"code",onSetRef:e[0]||(e[0]=t=>y.value=t),modelValue:c(a).code,"onUpdate:modelValue":e[1]||(e[1]=t=>c(a).code=t),type:"text",inputmode:"numeric",autofocus:"",autocomplete:"one-time-code"},null,8,["modelValue"])]),_:1})),o(h),o(F,null,{default:l(()=>[o(U,{type:"submit",color:"info",label:"Log in",class:v({"opacity-25":c(a).processing}),disabled:c(a).processing},null,8,["class","disabled"]),k("button",{onClick:b(x,["prevent"])},[r.value?(s(),n(i,{key:1},[u(" Use an authentication code ")],64)):(s(),n(i,{key:0},[u(" Use a recovery code ")],64))])]),_:1})]),_:2},1032,["class"])]),_:1})]),_:1}))}};export{A as default};
