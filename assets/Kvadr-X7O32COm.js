import{H as w,h as j,r as v,o,c as _,a as e,N as h,u as n,b as f,w as x,F as k,T as G,O as q,k as p,J as m,j as S,P as B,Q as M,R as N}from"./index-2pr3EbV3.js";const U={class:"calc-met__tabs"},$={class:"calc-met__select"},E=e("h3",{class:"calc-met__title"},"Марка стали",-1),L={class:"calc-met__input"},z=e("h3",{class:"calc-met__title"},"Сторона квадрата а",-1),F={class:"input"},R=e("p",null,"мм.",-1),W={key:0,class:"calc-met__input"},A=e("h3",{class:"calc-met__title"},"Длина L",-1),D={class:"input"},H=e("p",null,"м.",-1),I={key:1,class:"calc-met__input"},J=e("h3",{class:"calc-met__title"},"Вес",-1),K={class:"input"},P=e("p",null,"кг.",-1),Q={class:"calc-met__button"},X=e("span",null,"Рассчитать",-1),Z={__name:"Kvadr",props:{activeMetSubcategoryObject:Object,activeMetSteelGradeObject:Array},setup(y){const V=y,a=w();let i=j(()=>a.activeTab);const d=v(1),u=v(""),s=v(""),r=V.activeMetSteelGradeObject,b=c=>{c=="v"?a.activeTab="v":a.activeTab="d",a.calcResult=0,s.value=""},T=()=>{a.activeTab=="v"?a.calcSquareWight(u.value,r.find(c=>c.id===d.value).value,s.value):a.calcSquareLength(u.value,r.find(c=>c.id===d.value).value,s.value)};return(c,t)=>{const g=B,C=M,O=N;return o(),_(k,null,[e("div",U,[e("p",{class:h(["calc-met__tabs-item v",{active:n(i)=="v"}]),onClick:t[0]||(t[0]=l=>b("v"))}," Вес ",2),e("p",{class:h(["calc-met__tabs-item d",{active:n(i)=="d"}]),onClick:t[1]||(t[1]=l=>b("d"))}," Длина ",2)]),e("div",$,[E,f(C,{modelValue:d.value,"onUpdate:modelValue":t[2]||(t[2]=l=>d.value=l),class:"m-2",placeholder:"Выбрать",size:"large",style:{width:"240px"}},{default:x(()=>[(o(!0),_(k,null,q(n(r),l=>(o(),G(g,{key:l.id,label:l.label,value:l.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),e("div",L,[z,e("div",F,[p(e("input",{type:"number","onUpdate:modelValue":t[3]||(t[3]=l=>u.value=l),placeholder:"0"},null,512),[[m,u.value]]),R])]),n(i)=="v"?(o(),_("div",W,[A,e("div",D,[p(e("input",{type:"number","onUpdate:modelValue":t[4]||(t[4]=l=>s.value=l),placeholder:"0"},null,512),[[m,s.value]]),H])])):S("",!0),n(i)=="d"?(o(),_("div",I,[J,e("div",K,[p(e("input",{type:"number","onUpdate:modelValue":t[5]||(t[5]=l=>s.value=l),placeholder:"0"},null,512),[[m,s.value]]),P])])):S("",!0),e("div",Q,[e("button",{onClick:t[6]||(t[6]=l=>T())},[f(O,{width:"20",height:"20",fill:"#fff"}),X])])],64)}}};export{Z as default};
