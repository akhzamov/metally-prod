import{e as T,f as w,r,o as _,c as d,a as e,n as y,u,b as p,w as q,F as f,g as x,h as m,v as h,i as k,j as U,k as $,q as B}from"./index-wFEH4lOl.js";const E={class:"calc-met__calc-history__tabs"},G={class:"calc-met__calc-history__select"},L=e("h3",{class:"calc-met__calc-history__title"},"Марка алюминия",-1),N={class:"calc-met__calc-history__input"},z=e("h3",{class:"calc-met__calc-history__title"},"Сторона квадрата a",-1),F={class:"input"},O=e("p",null,"мм.",-1),W={key:0,class:"calc-met__calc-history__input"},j=e("h3",{class:"calc-met__calc-history__title"},"Длина L",-1),A={class:"input"},D=e("p",null,"м.",-1),I={key:1,class:"calc-met__calc-history__input"},K=e("h3",{class:"calc-met__calc-history__title"},"Вес",-1),M={class:"input"},R=e("p",null,"кг.",-1),H={class:"calc-met__calc-history__button"},J=e("span",null,"Рассчитать",-1),X={__name:"A_Kvadr",setup(P){const a=T();let o=w(()=>a.activeTab);const i=r(1),n=r(""),s=r(""),v=[{id:1,label:"А5 = 2700",value:"2700"},{id:2,label:"АД = 2710",value:"2710"},{id:3,label:"АД1 = 2710",value:"2710"},{id:4,label:"АК4 = 2800",value:"2800"},{id:5,label:"АК6 = 2750",value:"2750"},{id:6,label:"АМг = 2690",value:"2690"},{id:7,label:"АМц = 2730",value:"2730"},{id:8,label:"В95 = 2850",value:"2850"},{id:9,label:"Д1 = 2800",value:"2800"},{id:10,label:"Д16 = 2770",value:"2770"},{id:11,label:"Прочее = 2700",value:"2700"}],b=c=>{c=="v"?a.activeTab="v":a.activeTab="d",a.calcResult=0,s.value=""},V=()=>{a.activeTab=="v"?a.calcSquareWight(n.value,v.find(c=>c.id===i.value).value,s.value):a.calcSquareLength(n.value,v.find(c=>c.id===i.value).value,s.value)};return(c,l)=>{const g=U,C=$,S=B;return _(),d(f,null,[e("div",E,[e("p",{class:y(["calc-met__calc-history__tabs-item v",{active:u(o)=="v"}]),onClick:l[0]||(l[0]=t=>b("v"))}," Вес ",2),e("p",{class:y(["calc-met__calc-history__tabs-item d",{active:u(o)=="d"}]),onClick:l[1]||(l[1]=t=>b("d"))}," Длина ",2)]),e("div",G,[L,p(C,{modelValue:i.value,"onUpdate:modelValue":l[2]||(l[2]=t=>i.value=t),class:"m-2",placeholder:"Выбрать",size:"large",style:{width:"240px"}},{default:q(()=>[(_(),d(f,null,x(v,t=>p(g,{key:t.id,label:t.label,value:t.id},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]),e("div",N,[z,e("div",F,[m(e("input",{type:"number","onUpdate:modelValue":l[3]||(l[3]=t=>n.value=t),placeholder:"0"},null,512),[[h,n.value]]),O])]),u(o)=="v"?(_(),d("div",W,[j,e("div",A,[m(e("input",{type:"number","onUpdate:modelValue":l[4]||(l[4]=t=>s.value=t),placeholder:"0"},null,512),[[h,s.value]]),D])])):k("",!0),u(o)=="d"?(_(),d("div",I,[K,e("div",M,[m(e("input",{type:"number","onUpdate:modelValue":l[5]||(l[5]=t=>s.value=t),placeholder:"0"},null,512),[[h,s.value]]),R])])):k("",!0),e("div",H,[e("button",{onClick:l[6]||(l[6]=t=>V())},[p(S,{width:"20",height:"20",fill:"#fff"}),J])])],64)}}};export{X as default};
