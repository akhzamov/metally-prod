import{H as C,I as k,h as r,r as d,o as h,c as v,a as s,k as u,J as y,u as t,A as p,b as a,w as m,K as S,L as O,M as P,t as T,E as I}from"./index-2pr3EbV3.js";const V={class:"sign-in__form"},b=s("h3",{class:"calc-met__title-v1"},"Авторизуйтесь для входа",-1),B={class:"calc-met__input"},D=s("h3",{class:"calc-met__title"},"Логин",-1),E={class:"input"},M={class:"calc-met__input"},A=s("h3",{class:"calc-met__title"},"Пароль",-1),L={class:"input"},N=["type"],U={class:"sign-in__form-button"},$=s("span",null,"Авторизоваться",-1),z=[$],F={__name:"SignInForm",setup(f){const _=C(),i=k();let g=r(()=>_.showOrClosePassType),w=r(()=>_.showOrClosePassText),l=d(""),n=d("");const x=()=>{_.showOrClosePass()};return(H,e)=>{const c=I;return h(),v("div",V,[b,s("div",B,[D,s("div",E,[u(s("input",{type:"text",placeholder:"Пример: Akhzamov","onUpdate:modelValue":e[0]||(e[0]=o=>p(l)?l.value=o:l=o)},null,512),[[y,t(l)]]),s("p",null,[a(c,null,{default:m(()=>[a(t(S))]),_:1})])])]),s("div",M,[A,s("div",L,[u(s("input",{type:t(g),placeholder:"Ваш пароль","onUpdate:modelValue":e[1]||(e[1]=o=>p(n)?n.value=o:n=o)},null,8,N),[[O,t(n)]]),s("p",null,[a(c,null,{default:m(()=>[a(t(P))]),_:1})])]),s("p",{class:"calc-met__text-v1",onClick:e[2]||(e[2]=o=>x())},T(t(w)),1)]),s("div",U,[s("button",{onClick:e[3]||(e[3]=o=>t(i).login(t(l),t(n)))},z)])])}}},G={class:"sign-in"},K={__name:"SignIn",setup(f){return(_,i)=>(h(),v("div",G,[a(F)]))}};export{K as default};
