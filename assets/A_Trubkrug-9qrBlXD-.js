import{e as C,f as T,r as o,o as _,c as n,a as l,n as h,u as a,b as r,w,F as b,g as x,h as i,v as u,i as y,j as U,k as B,q as D}from"./index-kxsY7EiC.js";const E={class:"calc-met__calc-history__tabs"},M={class:"calc-met__calc-history__select"},N=l("h3",{class:"calc-met__calc-history__title"},"Марка стали",-1),S={class:"calc-met__calc-history__input"},$=l("h3",{class:"calc-met__calc-history__title"},"Внешний диаметр трубы D",-1),z={class:"input"},F=l("p",null,"мм.",-1),L={class:"calc-met__calc-history__input"},O=l("h3",{class:"calc-met__calc-history__title"},"Толщина стенки t",-1),j={class:"input"},q=l("p",null,"мм.",-1),A={key:0,class:"calc-met__calc-history__input"},G=l("h3",{class:"calc-met__calc-history__title"},"Длина L",-1),I={class:"input"},H=l("p",null,"м.",-1),J={key:1,class:"calc-met__calc-history__input"},K=l("h3",{class:"calc-met__calc-history__title"},"Вес",-1),P={class:"input"},Q=l("p",null,"кг.",-1),R={class:"calc-met__calc-history__button"},W=l("span",null,"Рассчитать",-1),ll={__name:"A_Trubkrug",setup(X){const d=C();let s=T(()=>d.activeTab);const v=o("АМг"),f=[{label:"А5",value:"А5"},{label:"АД",value:"АД"},{label:"АД1",value:"АД1"},{label:"АК4",value:"АК4"},{label:"АК6",value:"АК6"},{label:"АМг",value:"АМг"},{label:"АМц",value:"АМц"},{label:"В95",value:"В95"},{label:"Д1",value:"Д1"},{label:"Д16",value:"Д16"},{label:"Прочее",value:"Прочее"}],p=o(""),m=o(""),c=o("");return(Y,t)=>{const k=U,V=B,g=D;return _(),n(b,null,[l("div",E,[l("p",{class:h(["calc-met__calc-history__tabs-item v",{active:a(s)=="v"}]),onClick:t[0]||(t[0]=e=>a(d).activeTab="v")}," Вес ",2),l("p",{class:h(["calc-met__calc-history__tabs-item d",{active:a(s)=="d"}]),onClick:t[1]||(t[1]=e=>a(d).activeTab="d")}," Длина ",2)]),l("div",M,[N,r(V,{modelValue:v.value,"onUpdate:modelValue":t[2]||(t[2]=e=>v.value=e),class:"m-2",placeholder:"Выбрать",size:"large",style:{width:"240px"}},{default:w(()=>[(_(),n(b,null,x(f,e=>r(k,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]),l("div",S,[$,l("div",z,[i(l("input",{type:"number","onUpdate:modelValue":t[3]||(t[3]=e=>p.value=e),placeholder:"0"},null,512),[[u,p.value]]),F])]),l("div",L,[O,l("div",j,[i(l("input",{type:"number","onUpdate:modelValue":t[4]||(t[4]=e=>m.value=e),placeholder:"0"},null,512),[[u,m.value]]),q])]),a(s)=="v"?(_(),n("div",A,[G,l("div",I,[i(l("input",{type:"number","onUpdate:modelValue":t[5]||(t[5]=e=>c.value=e),placeholder:"0"},null,512),[[u,c.value]]),H])])):y("",!0),a(s)=="d"?(_(),n("div",J,[K,l("div",P,[i(l("input",{type:"number","onUpdate:modelValue":t[6]||(t[6]=e=>c.value=e),placeholder:"0"},null,512),[[u,c.value]]),Q])])):y("",!0),l("div",R,[l("button",null,[r(g,{width:"20",height:"20",fill:"#fff"}),W])])],64)}}};export{ll as default};
