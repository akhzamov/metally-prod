import{e as x,f as L,r as d,o as u,c as v,a as e,n as f,u as r,b,w as U,F as T,g as $,h as p,v as h,i as k,j as B,k as E,q as G}from"./index-wFEH4lOl.js";const N={class:"calc-met__calc-history__tabs"},S={class:"calc-met__calc-history__select"},W=e("h3",{class:"calc-met__calc-history__title"},"Марка латуни",-1),z={class:"calc-met__calc-history__input"},F=e("h3",{class:"calc-met__calc-history__title"},"Ширина ленты a",-1),O={class:"input"},j=e("p",null,"мм.",-1),q={class:"calc-met__calc-history__input"},D=e("h3",{class:"calc-met__calc-history__title"},"Толщина ленты t",-1),I={class:"input"},M=e("p",null,"мм.",-1),R={key:0,class:"calc-met__calc-history__input"},A=e("h3",{class:"calc-met__calc-history__title"},"Длина L",-1),H={class:"input"},J=e("p",null,"м.",-1),K={key:1,class:"calc-met__calc-history__input"},P=e("h3",{class:"calc-met__calc-history__title"},"Вес",-1),Q={class:"input"},X=e("p",null,"кг.",-1),Y={class:"calc-met__calc-history__button"},Z=e("span",null,"Рассчитать",-1),te={__name:"L_Lent",setup(ee){const a=x();let o=L(()=>a.activeTab);const i=d(1),n=d(""),_=d(""),s=d(""),m=[{id:1,label:"Л63 = 8440",value:"8440"},{id:2,label:"Л68 = 8500",value:"8500"},{id:3,label:"ЛЖМц59-1-1 = 8300",value:"8300"},{id:4,label:"ЛМц58-2 = 8400",value:"8400"},{id:5,label:"ЛС58-2 = 8450",value:"8450"},{id:6,label:"ЛС59-1 = 8400",value:"8400"},{id:7,label:"ЛС63-3 = 8500",value:"8500"}],y=c=>{c=="v"?a.activeTab="v":a.activeTab="d",a.calcResult=0,s.value=""},V=()=>{a.activeTab=="v"?a.calcTapeWeight(n.value,_.value,m.find(c=>c.id==i.value).value,s.value):a.calcTapeLength(n.value,_.value,m.find(c=>c.id==i.value).value,s.value)};return(c,l)=>{const g=B,C=E,w=G;return u(),v(T,null,[e("div",N,[e("p",{class:f(["calc-met__calc-history__tabs-item v",{active:r(o)=="v"}]),onClick:l[0]||(l[0]=t=>y("v"))}," Вес ",2),e("p",{class:f(["calc-met__calc-history__tabs-item d",{active:r(o)=="d"}]),onClick:l[1]||(l[1]=t=>y("d"))}," Длина ",2)]),e("div",S,[W,b(C,{modelValue:i.value,"onUpdate:modelValue":l[2]||(l[2]=t=>i.value=t),class:"m-2",placeholder:"Выбрать",size:"large",style:{width:"240px"}},{default:U(()=>[(u(),v(T,null,$(m,t=>b(g,{key:t.id,label:t.label,value:t.id},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]),e("div",z,[F,e("div",O,[p(e("input",{type:"number","onUpdate:modelValue":l[3]||(l[3]=t=>n.value=t),placeholder:"0"},null,512),[[h,n.value]]),j])]),e("div",q,[D,e("div",I,[p(e("input",{type:"number","onUpdate:modelValue":l[4]||(l[4]=t=>_.value=t),placeholder:"0"},null,512),[[h,_.value]]),M])]),r(o)=="v"?(u(),v("div",R,[A,e("div",H,[p(e("input",{type:"number","onUpdate:modelValue":l[5]||(l[5]=t=>s.value=t),placeholder:"0"},null,512),[[h,s.value]]),J])])):k("",!0),r(o)=="d"?(u(),v("div",K,[P,e("div",Q,[p(e("input",{type:"number","onUpdate:modelValue":l[6]||(l[6]=t=>s.value=t),placeholder:"0"},null,512),[[h,s.value]]),X])])):k("",!0),e("div",Y,[e("button",{onClick:l[7]||(l[7]=t=>V())},[b(w,{width:"20",height:"20",fill:"#fff"}),Z])])],64)}}};export{te as default};
