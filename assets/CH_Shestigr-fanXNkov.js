import{e as T,f as w,r,o as _,c as d,a as e,n as y,u,b,w as H,F as f,g as N,h as p,v as m,i as g,j as S,k as U,q as $}from"./index-wFEH4lOl.js";const B={class:"calc-met__calc-history__tabs"},E={class:"calc-met__calc-history__select"},G=e("h3",{class:"calc-met__calc-history__title"},"Марка стали",-1),L={class:"calc-met__calc-history__input"},z=e("h3",{class:"calc-met__calc-history__title"},"Номер шестигранника a",-1),F={class:"input"},O=e("p",null,"мм.",-1),W={key:0,class:"calc-met__calc-history__input"},j=e("h3",{class:"calc-met__calc-history__title"},"Длина L",-1),q={class:"input"},D=e("p",null,"м.",-1),I={key:1,class:"calc-met__calc-history__input"},M=e("h3",{class:"calc-met__calc-history__title"},"Вес",-1),R={class:"input"},A=e("p",null,"кг.",-1),J={class:"calc-met__calc-history__button"},K=e("span",null,"Рассчитать",-1),X={__name:"CH_Shestigr",setup(P){const t=T();let i=w(()=>t.activeTab);const o=r(1),n=r(""),s=r(""),v=[{id:1,label:"Ст 3 = 7850 кг/м³",value:"7850"},{id:2,label:"10 = 7856 кг/м³",value:"7856"},{id:3,label:"20 = 7859 кг/м³",value:"7859"},{id:4,label:"40Х = 7820 кг/м³",value:"7820"},{id:5,label:"45 = 7826 кг/м³",value:"7826"},{id:6,label:"65 = 7810 кг/м³",value:"7810"},{id:7,label:"65Г = 7850 кг/м³",value:"7850"},{id:8,label:"09Г2С = 7850 кг/м³",value:"7850"},{id:9,label:"15Х5М = 7750 кг/м³",value:"7750"},{id:10,label:"10ХСНД = 7850 кг/м³",value:"7850"},{id:11,label:"12Х1МФ = 7800 кг/м³",value:"7800"},{id:12,label:"ШХ15 = 7812 кг/м³",value:"7812"},{id:13,label:"Р6М5 = 8300 кг/м³",value:"8300"},{id:14,label:"У7 = 7830 кг/м³",value:"7830"},{id:15,label:"У8 = 7839 кг/м³",value:"7839"},{id:16,label:"У8А = 7830 кг/м³",value:"7830"},{id:17,label:"У10 = 7810 кг/м³",value:"7810"},{id:18,label:"У10А = 7810 кг/м³",value:"7810"},{id:19,label:"У12А = 7810 кг/м³",value:"7810"},{id:20,label:"Прочее = 7850 кг/м³",value:"7850"}],h=c=>{c=="v"?t.activeTab="v":t.activeTab="d",t.calcResult=0,s.value=""},k=()=>{t.activeTab=="v"?t.calcHexagonWeight(n.value,v.find(c=>c.id==o.value).value,s.value):t.calcHexagonLength(n.value,v.find(c=>c.id==o.value).value,s.value)};return(c,l)=>{const x=S,V=U,C=$;return _(),d(f,null,[e("div",B,[e("p",{class:y(["calc-met__calc-history__tabs-item v",{active:u(i)=="v"}]),onClick:l[0]||(l[0]=a=>h("v"))}," Вес ",2),e("p",{class:y(["calc-met__calc-history__tabs-item d",{active:u(i)=="d"}]),onClick:l[1]||(l[1]=a=>h("d"))}," Длина ",2)]),e("div",E,[G,b(V,{modelValue:o.value,"onUpdate:modelValue":l[2]||(l[2]=a=>o.value=a),class:"m-2",placeholder:"Выбрать",size:"large",style:{width:"240px"}},{default:H(()=>[(_(),d(f,null,N(v,a=>b(x,{key:a.id,label:a.label,value:a.id},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]),e("div",L,[z,e("div",F,[p(e("input",{type:"number","onUpdate:modelValue":l[3]||(l[3]=a=>n.value=a),placeholder:"0"},null,512),[[m,n.value]]),O])]),u(i)=="v"?(_(),d("div",W,[j,e("div",q,[p(e("input",{type:"number","onUpdate:modelValue":l[4]||(l[4]=a=>s.value=a),placeholder:"0"},null,512),[[m,s.value]]),D])])):g("",!0),u(i)=="d"?(_(),d("div",I,[M,e("div",R,[p(e("input",{type:"number","onUpdate:modelValue":l[5]||(l[5]=a=>s.value=a),placeholder:"0"},null,512),[[m,s.value]]),A])])):g("",!0),e("div",J,[e("button",{onClick:l[6]||(l[6]=a=>k())},[b(C,{width:"20",height:"20",fill:"#fff"}),K])])],64)}}};export{X as default};
