import{e as V,r as s,o as v,c as p,a as e,b as u,w as g,F as m,g as k,h as a,v as o,j as w,k as x,q as S}from"./index-wFEH4lOl.js";const U={class:"calc-met__calc-history__select"},C=e("h3",{class:"calc-met__calc-history__title"},"Марка титана",-1),E={class:"calc-met__calc-history__input"},G=e("h3",{class:"calc-met__calc-history__title"},"Толщина листа t",-1),L={class:"input"},A=e("p",null,"мм.",-1),F={class:"calc-met__calc-history__input"},N=e("h3",{class:"calc-met__calc-history__title"},"Ширина листа a",-1),W={class:"input"},$=e("p",null,"мм.",-1),j={class:"calc-met__calc-history__input"},q=e("h3",{class:"calc-met__calc-history__title"},"Длина листа b",-1),z={class:"input"},D=e("p",null,"мм.",-1),I={class:"calc-met__calc-history__input"},M=e("h3",{class:"calc-met__calc-history__title"},"Количество",-1),O={class:"input"},H=e("p",null,"шт.",-1),J={class:"calc-met__calc-history__button"},K=e("span",null,"Рассчитать",-1),R={__name:"T_Listplit",setup(P){const b=V(),c=s(1),n=s(""),i=s(""),_=s(""),d=s(""),h=[{id:1,label:"BT1-00 = 4505",value:"4505"},{id:2,label:"BT1-1 = 4505",value:"4505"},{id:3,label:"AT-6 = 4505",value:"4505"},{id:4,label:"BT14 = 4520",value:"4520"},{id:5,label:"BT20 = 4450",value:"4450"},{id:6,label:"BT22 = 4620",value:"4620"},{id:7,label:"BT3-1 = 4500",value:"4500"},{id:8,label:"BT5 = 4425",value:"4425"},{id:9,label:"BT5-1 = 4425",value:"4425"},{id:10,label:"BT6 = 4450",value:"4450"},{id:11,label:"ОT4-1 = 4550",value:"4550"},{id:12,label:"ПТ7М = 4490",value:"4490"},{id:13,label:"Прочее = 4540",value:"4540"}],y=()=>{b.calcSheetWeight(n.value,i.value,_.value,d.value,h.find(r=>r.id==c.value).value)};return(r,t)=>{const T=w,B=x,f=S;return v(),p(m,null,[e("div",U,[C,u(B,{modelValue:c.value,"onUpdate:modelValue":t[0]||(t[0]=l=>c.value=l),class:"m-2",placeholder:"Выбрать",size:"large",style:{width:"240px"}},{default:g(()=>[(v(),p(m,null,k(h,l=>u(T,{key:l.id,label:l.label,value:l.id},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]),e("div",E,[G,e("div",L,[a(e("input",{type:"number","onUpdate:modelValue":t[1]||(t[1]=l=>n.value=l),placeholder:"0"},null,512),[[o,n.value]]),A])]),e("div",F,[N,e("div",W,[a(e("input",{type:"number","onUpdate:modelValue":t[2]||(t[2]=l=>i.value=l),placeholder:"0"},null,512),[[o,i.value]]),$])]),e("div",j,[q,e("div",z,[a(e("input",{type:"number","onUpdate:modelValue":t[3]||(t[3]=l=>_.value=l),placeholder:"0"},null,512),[[o,_.value]]),D])]),e("div",I,[M,e("div",O,[a(e("input",{type:"number","onUpdate:modelValue":t[4]||(t[4]=l=>d.value=l),placeholder:"0"},null,512),[[o,d.value]]),H])]),e("div",J,[e("button",{onClick:t[5]||(t[5]=l=>y())},[u(f,{width:"20",height:"20",fill:"#fff"}),K])])],64)}}};export{R as default};
