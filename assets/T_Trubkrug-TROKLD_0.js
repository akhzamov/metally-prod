import{e as C,f as x,r as d,o as u,c as v,a as e,n as T,u as r,b,w as U,F as f,g as R,h as p,v as h,i as B,j as $,k as D,q as E}from"./index-wFEH4lOl.js";const G={class:"calc-met__calc-history__tabs"},L={class:"calc-met__calc-history__select"},N=e("h3",{class:"calc-met__calc-history__title"},"Марка титана",-1),O={class:"calc-met__calc-history__input"},P=e("h3",{class:"calc-met__calc-history__title"},"Внешний диаметр трубы D",-1),S={class:"input"},z=e("p",null,"мм.",-1),F={class:"calc-met__calc-history__input"},W=e("h3",{class:"calc-met__calc-history__title"},"Толщина стенки t",-1),j={class:"input"},q=e("p",null,"мм.",-1),A={key:0,class:"calc-met__calc-history__input"},I=e("h3",{class:"calc-met__calc-history__title"},"Длина L",-1),M={class:"input"},H=e("p",null,"м.",-1),J={key:1,class:"calc-met__calc-history__input"},K=e("h3",{class:"calc-met__calc-history__title"},"Вес",-1),Q={class:"input"},X=e("p",null,"кг.",-1),Y={class:"calc-met__calc-history__button"},Z=e("span",null,"Рассчитать",-1),te={__name:"T_Trubkrug",setup(ee){const a=C();let o=x(()=>a.activeTab);const i=d(1),n=d(""),_=d(""),s=d(""),m=[{id:1,label:"BT1-00 = 4505",value:"4505"},{id:2,label:"BT1-1 = 4505",value:"4505"},{id:3,label:"AT-6 = 4505",value:"4505"},{id:4,label:"BT14 = 4520",value:"4520"},{id:5,label:"BT20 = 4450",value:"4450"},{id:6,label:"BT22 = 4620",value:"4620"},{id:7,label:"BT3-1 = 4500",value:"4500"},{id:8,label:"BT5 = 4425",value:"4425"},{id:9,label:"BT5-1 = 4425",value:"4425"},{id:10,label:"BT6 = 4450",value:"4450"},{id:11,label:"ОT4-1 = 4550",value:"4550"},{id:12,label:"ПТ7М = 4490",value:"4490"},{id:13,label:"Прочее = 4540",value:"4540"}],y=c=>{c=="v"?a.activeTab="v":a.activeTab="d",a.calcResult=0,s.value=""},k=()=>{a.activeTab=="v"?a.calcRoundedPipeWeight(n.value,_.value,m.find(c=>c.id==i.value).value,s.value):a.calcRoundedPipeLength(n.value,_.value,m.find(c=>c.id==i.value).value,s.value)};return(c,l)=>{const V=$,g=D,w=E;return u(),v(f,null,[e("div",G,[e("p",{class:T(["calc-met__calc-history__tabs-item v",{active:r(o)=="v"}]),onClick:l[0]||(l[0]=t=>y("v"))}," Вес ",2),e("p",{class:T(["calc-met__calc-history__tabs-item d",{active:r(o)=="d"}]),onClick:l[1]||(l[1]=t=>y("d"))}," Длина ",2)]),e("div",L,[N,b(g,{modelValue:i.value,"onUpdate:modelValue":l[2]||(l[2]=t=>i.value=t),class:"m-2",placeholder:"Выбрать",size:"large",style:{width:"240px"}},{default:U(()=>[(u(),v(f,null,R(m,t=>b(V,{key:t.id,label:t.label,value:t.id},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]),e("div",O,[P,e("div",S,[p(e("input",{type:"number","onUpdate:modelValue":l[3]||(l[3]=t=>n.value=t),placeholder:"0"},null,512),[[h,n.value]]),z])]),e("div",F,[W,e("div",j,[p(e("input",{type:"number","onUpdate:modelValue":l[4]||(l[4]=t=>_.value=t),placeholder:"0"},null,512),[[h,_.value]]),q])]),r(o)=="v"?(u(),v("div",A,[I,e("div",M,[p(e("input",{type:"number","onUpdate:modelValue":l[5]||(l[5]=t=>s.value=t),placeholder:"0"},null,512),[[h,s.value]]),H])])):B("",!0),r(o)=="d"?(u(),v("div",J,[K,e("div",Q,[p(e("input",{type:"number","onUpdate:modelValue":l[6]||(l[6]=t=>s.value=t),placeholder:"0"},null,512),[[h,s.value]]),X])])):B("",!0),e("div",Y,[e("button",{onClick:l[7]||(l[7]=t=>k())},[b(w,{width:"20",height:"20",fill:"#fff"}),Z])])],64)}}};export{te as default};
