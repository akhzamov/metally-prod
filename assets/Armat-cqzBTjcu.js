import{e as T,f as w,r as m,o as n,c as _,a as e,n as b,u,b as r,w as x,F as p,g as A,h,v as y,i as f,j as O,k as S,q as j}from"./index-2x5dfgGe.js";const N={class:"calc-met__calc-history__tabs"},$={class:"calc-met__calc-history__select"},B=e("h3",{class:"calc-met__calc-history__title"},"Номинальный диаметр",-1),E={key:0,class:"calc-met__calc-history__input"},L=e("h3",{class:"calc-met__calc-history__title"},"Длина L",-1),M={class:"input"},U=e("p",null,"м.",-1),z={key:1,class:"calc-met__calc-history__input"},F=e("h3",{class:"calc-met__calc-history__title"},"Вес",-1),G={class:"input"},W=e("p",null,"кг.",-1),q={class:"calc-met__calc-history__button"},D=e("span",null,"Рассчитать",-1),H={__name:"Armat",props:{activeMetSubcategoryObject:Object,activeMetSteelGradeObject:Array},setup(I){const a=T();let i=w(()=>a.activeTab);const o=m(1),s=m(""),d=[{id:1,value:"6",label:"6"},{id:2,value:"8",label:"8"},{id:3,value:"10",label:"10"},{id:4,value:"12",label:"12"},{id:5,value:"14",label:"14"},{id:6,value:"16",label:"16"},{id:7,value:"18",label:"18"},{id:8,value:"20",label:"20"},{id:9,value:"22",label:"22"},{id:10,value:"25",label:"25"},{id:11,value:"28",label:"28"},{id:12,value:"32",label:"32"},{id:13,value:"36",label:"36"}],v=c=>{c=="v"?a.activeTab="v":a.activeTab="d",a.calcResult=0,s.value=""},k=()=>{a.activeTab=="v"?a.calcArmatureWight(d.find(c=>c.id==o.value).value,s.value):a.calcArmatureLength(d.find(c=>c.id==o.value).value,s.value)};return(c,l)=>{const g=O,V=S,C=j;return n(),_(p,null,[e("div",N,[e("p",{class:b(["calc-met__calc-history__tabs-item v",{active:u(i)=="v"}]),onClick:l[0]||(l[0]=t=>v("v"))}," Вес ",2),e("p",{class:b(["calc-met__calc-history__tabs-item d",{active:u(i)=="d"}]),onClick:l[1]||(l[1]=t=>v("d"))}," Длина ",2)]),e("div",$,[B,r(V,{modelValue:o.value,"onUpdate:modelValue":l[2]||(l[2]=t=>o.value=t),class:"m-2",placeholder:"Выбрать",size:"large",style:{width:"240px"}},{default:x(()=>[(n(),_(p,null,A(d,t=>r(g,{key:t.id,label:t.label,value:t.id},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]),u(i)=="v"?(n(),_("div",E,[L,e("div",M,[h(e("input",{type:"number","onUpdate:modelValue":l[3]||(l[3]=t=>s.value=t),placeholder:"0"},null,512),[[y,s.value]]),U])])):f("",!0),u(i)=="d"?(n(),_("div",z,[F,e("div",G,[h(e("input",{type:"number","onUpdate:modelValue":l[4]||(l[4]=t=>s.value=t),placeholder:"0"},null,512),[[y,s.value]]),W])])):f("",!0),e("div",q,[e("button",{onClick:l[5]||(l[5]=t=>k())},[r(C,{width:"20",height:"20",fill:"#fff"}),D])])],64)}}};export{H as default};
