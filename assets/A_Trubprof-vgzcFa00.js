import{e as U,f as g,r as a,o as i,c as u,a as l,n as b,u as s,b as r,w,F as y,g as x,h as o,v as c,i as f,j as B,k as E,q as M}from"./index-kxsY7EiC.js";const N={class:"calc-met__calc-history__tabs"},S={class:"calc-met__calc-history__select"},$=l("h3",{class:"calc-met__calc-history__title"},"Марка стали",-1),z={class:"calc-met__calc-history__input"},D=l("h3",{class:"calc-met__calc-history__title"},"Ширина трубы a",-1),F={class:"input"},L=l("p",null,"мм.",-1),O={class:"calc-met__calc-history__input"},j=l("h3",{class:"calc-met__calc-history__title"},"Высота трубы b",-1),q={class:"input"},A=l("p",null,"мм.",-1),G={class:"calc-met__calc-history__input"},I=l("h3",{class:"calc-met__calc-history__title"},"Толщина стенки t",-1),H={class:"input"},J=l("p",null,"мм.",-1),K={key:0,class:"calc-met__calc-history__input"},P=l("h3",{class:"calc-met__calc-history__title"},"Длина L",-1),Q={class:"input"},R=l("p",null,"м.",-1),W={key:1,class:"calc-met__calc-history__input"},X=l("h3",{class:"calc-met__calc-history__title"},"Вес",-1),Y={class:"input"},Z=l("p",null,"кг.",-1),ll={class:"calc-met__calc-history__button"},el=l("span",null,"Рассчитать",-1),ol={__name:"A_Trubprof",setup(tl){const d=U();let _=g(()=>d.activeTab);const v=a("АМг"),V=[{label:"А5",value:"А5"},{label:"АД",value:"АД"},{label:"АД1",value:"АД1"},{label:"АК4",value:"АК4"},{label:"АК6",value:"АК6"},{label:"АМг",value:"АМг"},{label:"АМц",value:"АМц"},{label:"В95",value:"В95"},{label:"Д1",value:"Д1"},{label:"Д16",value:"Д16"},{label:"Прочее",value:"Прочее"}],p=a(""),h=a(""),m=a(""),n=a("");return(sl,t)=>{const k=B,C=E,T=M;return i(),u(y,null,[l("div",N,[l("p",{class:b(["calc-met__calc-history__tabs-item v",{active:s(_)=="v"}]),onClick:t[0]||(t[0]=e=>s(d).activeTab="v")}," Вес ",2),l("p",{class:b(["calc-met__calc-history__tabs-item d",{active:s(_)=="d"}]),onClick:t[1]||(t[1]=e=>s(d).activeTab="d")}," Длина ",2)]),l("div",S,[$,r(C,{modelValue:v.value,"onUpdate:modelValue":t[2]||(t[2]=e=>v.value=e),class:"m-2",placeholder:"Выбрать",size:"large",style:{width:"240px"}},{default:w(()=>[(i(),u(y,null,x(V,e=>r(k,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]),l("div",z,[D,l("div",F,[o(l("input",{type:"number","onUpdate:modelValue":t[3]||(t[3]=e=>p.value=e),placeholder:"0"},null,512),[[c,p.value]]),L])]),l("div",O,[j,l("div",q,[o(l("input",{type:"number","onUpdate:modelValue":t[4]||(t[4]=e=>h.value=e),placeholder:"0"},null,512),[[c,h.value]]),A])]),l("div",G,[I,l("div",H,[o(l("input",{type:"number","onUpdate:modelValue":t[5]||(t[5]=e=>m.value=e),placeholder:"0"},null,512),[[c,m.value]]),J])]),s(_)=="v"?(i(),u("div",K,[P,l("div",Q,[o(l("input",{type:"number","onUpdate:modelValue":t[6]||(t[6]=e=>n.value=e),placeholder:"0"},null,512),[[c,n.value]]),R])])):f("",!0),s(_)=="d"?(i(),u("div",W,[X,l("div",Y,[o(l("input",{type:"number","onUpdate:modelValue":t[7]||(t[7]=e=>n.value=e),placeholder:"0"},null,512),[[c,n.value]]),Z])])):f("",!0),l("div",ll,[l("button",null,[r(T,{width:"20",height:"20",fill:"#fff"}),el])])],64)}}};export{ol as default};
