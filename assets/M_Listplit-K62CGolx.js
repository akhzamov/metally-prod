import{e as k,r as s,o as p,c as v,a as e,b as u,w,F as m,g as x,h as a,v as o,j as S,k as U,q as B}from"./index-wFEH4lOl.js";const C={class:"calc-met__calc-history__select"},E=e("h3",{class:"calc-met__calc-history__title"},"Марка меди",-1),G={class:"calc-met__calc-history__input"},L=e("h3",{class:"calc-met__calc-history__title"},"Толщина листа t",-1),F={class:"input"},M=e("p",null,"мм.",-1),N={class:"calc-met__calc-history__input"},T=e("h3",{class:"calc-met__calc-history__title"},"Ширина листа a",-1),W={class:"input"},$=e("p",null,"мм.",-1),j={class:"calc-met__calc-history__input"},q=e("h3",{class:"calc-met__calc-history__title"},"Длина листа b",-1),z={class:"input"},A=e("p",null,"мм.",-1),D={class:"calc-met__calc-history__input"},I=e("h3",{class:"calc-met__calc-history__title"},"Количество",-1),O={class:"input"},H=e("p",null,"шт.",-1),J={class:"calc-met__calc-history__button"},K=e("span",null,"Рассчитать",-1),R={__name:"M_Listplit",setup(P){const y=k(),c=s(1),n=s(""),_=s(""),i=s(""),d=s(""),h=[{id:1,label:"М1 = 8940",value:"8940"},{id:2,label:"М2 = 8940",value:"8940"},{id:3,label:"М3 = 8940",value:"8940"},{id:4,label:"Прочее = 8940",value:"8940"}],b=()=>{y.calcSheetWeight(n.value,_.value,i.value,d.value,h.find(r=>r.id==c.value).value)};return(r,l)=>{const f=S,V=U,g=B;return p(),v(m,null,[e("div",C,[E,u(V,{modelValue:c.value,"onUpdate:modelValue":l[0]||(l[0]=t=>c.value=t),class:"m-2",placeholder:"Выбрать",size:"large",style:{width:"240px"}},{default:w(()=>[(p(),v(m,null,x(h,t=>u(f,{key:t.id,label:t.label,value:t.id},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]),e("div",G,[L,e("div",F,[a(e("input",{type:"number","onUpdate:modelValue":l[1]||(l[1]=t=>n.value=t),placeholder:"0"},null,512),[[o,n.value]]),M])]),e("div",N,[T,e("div",W,[a(e("input",{type:"number","onUpdate:modelValue":l[2]||(l[2]=t=>_.value=t),placeholder:"0"},null,512),[[o,_.value]]),$])]),e("div",j,[q,e("div",z,[a(e("input",{type:"number","onUpdate:modelValue":l[3]||(l[3]=t=>i.value=t),placeholder:"0"},null,512),[[o,i.value]]),A])]),e("div",D,[I,e("div",O,[a(e("input",{type:"number","onUpdate:modelValue":l[4]||(l[4]=t=>d.value=t),placeholder:"0"},null,512),[[o,d.value]]),H])]),e("div",J,[e("button",{onClick:l[5]||(l[5]=t=>b())},[u(g,{width:"20",height:"20",fill:"#fff"}),K])])],64)}}};export{R as default};
