import{e as V,f as k,r as s,o as i,c as u,a as l,n as b,u as a,b as r,w as X,F as I,g as C,h as o,v as c,i as y,j as L,k as U,q as g}from"./index-kxsY7EiC.js";const w={class:"calc-met__calc-history__tabs"},x={class:"calc-met__calc-history__select"},M=l("h3",{class:"calc-met__calc-history__title"},"Марка стали",-1),H={class:"calc-met__calc-history__input"},N=l("h3",{class:"calc-met__calc-history__title"},"Ширина трубы a",-1),B={class:"input"},E=l("p",null,"мм.",-1),$={class:"calc-met__calc-history__input"},z=l("h3",{class:"calc-met__calc-history__title"},"Высота трубы b",-1),D={class:"input"},F=l("p",null,"мм.",-1),O={class:"calc-met__calc-history__input"},j=l("h3",{class:"calc-met__calc-history__title"},"Толщина стенки t",-1),q={class:"input"},G=l("p",null,"мм.",-1),J={key:0,class:"calc-met__calc-history__input"},K=l("h3",{class:"calc-met__calc-history__title"},"Длина L",-1),P={class:"input"},Q=l("p",null,"м.",-1),R={key:1,class:"calc-met__calc-history__input"},W=l("h3",{class:"calc-met__calc-history__title"},"Вес",-1),Y={class:"input"},Z=l("p",null,"кг.",-1),ll={class:"calc-met__calc-history__button"},el=l("span",null,"Рассчитать",-1),ol={__name:"N_Trubprof",setup(tl){const d=V();let _=k(()=>d.activeTab);const v=s("08X17T"),S=[{label:"08X17T",value:"08X17T"},{label:"20Х13",value:"20Х13"},{label:"30Х13",value:"30Х13"},{label:"40Х13",value:"40Х13"},{label:"08X18H10",value:"08X18H10"},{label:"12Х18Н10Т",value:"12Х18Н10Т"},{label:"10X17H13M2T",value:"10X17H13M2T"},{label:"06ХН28МДТ",value:"06ХН28МДТ"},{label:"20Х23Н18",value:"20Х23Н18"},{label:"AISI 316L",value:"AISI 316L"},{label:"AISI 304",value:"AISI 304"},{label:"AISI 316Ti",value:"AISI 316Ti"},{label:"AISI 321",value:"AISI 321"},{label:"AISI 409",value:"AISI 409"},{label:"AISI 430",value:"AISI 430"},{label:"AISI 904L",value:"AISI 904L"},{label:"Прочее",value:"Прочее"}],p=s(""),h=s(""),m=s(""),n=s("");return(al,t)=>{const A=L,f=U,T=g;return i(),u(I,null,[l("div",w,[l("p",{class:b(["calc-met__calc-history__tabs-item v",{active:a(_)=="v"}]),onClick:t[0]||(t[0]=e=>a(d).activeTab="v")}," Вес ",2),l("p",{class:b(["calc-met__calc-history__tabs-item d",{active:a(_)=="d"}]),onClick:t[1]||(t[1]=e=>a(d).activeTab="d")}," Длина ",2)]),l("div",x,[M,r(f,{modelValue:v.value,"onUpdate:modelValue":t[2]||(t[2]=e=>v.value=e),class:"m-2",placeholder:"Выбрать",size:"large",style:{width:"240px"}},{default:X(()=>[(i(),u(I,null,C(S,e=>r(A,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]),l("div",H,[N,l("div",B,[o(l("input",{type:"number","onUpdate:modelValue":t[3]||(t[3]=e=>p.value=e),placeholder:"0"},null,512),[[c,p.value]]),E])]),l("div",$,[z,l("div",D,[o(l("input",{type:"number","onUpdate:modelValue":t[4]||(t[4]=e=>h.value=e),placeholder:"0"},null,512),[[c,h.value]]),F])]),l("div",O,[j,l("div",q,[o(l("input",{type:"number","onUpdate:modelValue":t[5]||(t[5]=e=>m.value=e),placeholder:"0"},null,512),[[c,m.value]]),G])]),a(_)=="v"?(i(),u("div",J,[K,l("div",P,[o(l("input",{type:"number","onUpdate:modelValue":t[6]||(t[6]=e=>n.value=e),placeholder:"0"},null,512),[[c,n.value]]),Q])])):y("",!0),a(_)=="d"?(i(),u("div",R,[W,l("div",Y,[o(l("input",{type:"number","onUpdate:modelValue":t[7]||(t[7]=e=>n.value=e),placeholder:"0"},null,512),[[c,n.value]]),Z])])):y("",!0),l("div",ll,[l("button",null,[r(T,{width:"20",height:"20",fill:"#fff"}),el])])],64)}}};export{ol as default};
