import{d as C,o as u,c as f,a as o,f as l,t as j,r as W,i as _,j as $,n as x,k as B,l as w,m as D,F as k,p as N,e as g,h as E,w as S,E as I,T as L,q as A,b as F,g as Y,s as z}from"./index-9b49e745.js";import{D as H}from"./DirIcon-270b6d5e.js";import{g as a}from"./index-9e2476f3.js";import{A as O}from"./AppBg-f6404a7a.js";function T(){const i=["#f07c82","#ee3f4d","#de1c31","#ed556a","#f03752","#e77c8e","#ec9bad","#eeb8c3","#c08eaf","#806d9e","#525288","#61649f","#2b73af","#2376b7","#5698c3","#1772b4","#1781b5","#12aa9c","#45b787","#ffd111","#feba07","#fca106","#f26b1f","#f86b1d"];return i[~~(Math.random()*i.length)]}const q=["view-box"],P=["d"],G=C({__name:"RandomSvg",props:{viewBoxW:{type:Number,default:200},viewBoxH:{type:Number,default:200}},setup(i){const{viewBoxW:v,viewBoxH:n}=i,e=((r=v,d=n)=>{let s=[],h=~~(Math.random()*3)+2;for(let t=0;t<h;t++){const m=Math.floor(Math.random()*r),y=Math.floor(Math.random()*d),b=Math.floor(Math.random()*r),p=Math.floor(Math.random()*d),M=Math.floor(Math.random()*180),R=Math.floor(Math.random()*2),V=Math.floor(Math.random()*2);s.push(`M ${m} ${y} a ${b} ${p} ${M} ${R} ${V} ${m} ${y}`)}return s.join(" ")})();return(r,d)=>(u(),f("svg",{"view-box":`0 0 ${i.viewBoxW} ${i.viewBoxH}`,stroke:"current","stroke-width":"currentWidth",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[o("path",{"stroke-linecap":"round","stroke-linejoin":"round",stroke:"currentColor","stroke-width":"currentWidth",d:l(e)},null,8,P)],8,q))}}),J={class:"p-4 text-2xl font-bold"},K={class:"flex flex-col p-2 text-xs text-right opacity-70"},Q={class:"w-full max-h-[100%-2rem] pl-2 pr-4 my-4 text-sm basis-7/12 scrollbar"},U=["onClick"],X={key:0,class:"absolute inset-0 flex h-full overflow-hidden bg-slate-300 dark:bg-slate-700"},Z={class:"block w-24 text-sm leading-6 truncate origin-bottom-left rotate-90 -translate-y-6"},ee=C({__name:"DirCard",props:{dir:{type:Object,required:!0},color:{type:String,default:""},svg:{type:Boolean,default:!1}},setup(i){const n=j(i.dir),c=T(),e={card:{borderColor:"#ffffff55",borderWidth:"3px"},leftWrapper:{backgroundColor:c+"00"},svg:{color:c+"aa"},dirIcon:{color:c+""},docIcon:{backgroundColor:c+"aa"}},r=W(),d=t=>{a.set(t.firstElementChild,{x:"100%",opacity:0}),a.set(t.lastElementChild,{x:"100%"}),a.set(t,{opacity:0})},s=t=>{a.to(t.firstElementChild,{x:"0%",opacity:1,duration:.3,delay:.2,ease:"power2.out"}),a.to(t.lastElementChild,{x:"0%",duration:.3,ease:"power2.out"}),a.to(t,{opacity:1,duration:.4,ease:"power2.out"})},h=(t,m)=>{a.to(t.firstElementChild,{x:"-100%",duration:.2,ease:"power2.in"}),a.to(t.lastElementChild,{x:-30,duration:.3,delay:.1,ease:"power2.in"}),a.to(t,{duration:.4,opacity:0,ease:"power2.in",onComplete:m})};return(t,m)=>{const y=_("RouterLink"),b=_("DirCard",!0);return u(),f("div",{class:"flex overflow-hidden rounded-lg",style:x(e.card)},[o("div",{class:"relative flex flex-col justify-between basis-5/12",style:x(e.leftWrapper)},[i.svg?(u(),$(G,{key:0,class:"absolute -z-[1] top-0 left-0 w-full h-full stroke-[.5em]",style:x(e.svg)},null,8,["style"])):B("",!0),o("h2",J,w(l(n).name),1),o("div",K,[o("p",null,w(l(n).children.length)+" 份文件",1),o("p",null,"更新于 "+w(l(D)(l(n).mtime).format("YY/MM/DD")),1),o("p",null,"创建于 "+w(l(D)(l(n).birthtime).format("YY/MM/DD")),1)])],4),o("ul",Q,[(u(!0),f(k,null,N(l(n).children,p=>(u(),f("li",{key:p.name},[p.type==="dir"?(u(),f("div",{key:0,class:"p-2 truncate rounded-md cursor-pointer hover:bg-opacity-40 hover:bg-white",onClick:M=>r.value=p},[g(l(H),{class:"inline-block w-4 align-text-top stroke-2",style:x(e.dirIcon)},null,8,["style"]),E(" "+w(p.name),1)],8,U)):(u(),$(y,{key:1,to:p.url,class:"block p-2 truncate rounded-md cursor-pointer hover:bg-opacity-40 hover:bg-white"},{default:S(()=>[o("span",{class:"inline-block w-2 mx-1 h-[3px] mb-[.2em] rounded-full",style:x(e.docIcon)},null,4),E(" "+w(p.name),1)]),_:2},1032,["to"]))]))),128))]),g(L,{onBeforeEnter:d,onEnter:s,onLeave:h},{default:S(()=>[r.value?(u(),f("div",X,[o("div",{class:"flex-grow-0 flex-shrink-0 h-full pt-2 overflow-hidden text-red-300 cursor-pointer basis-6 hover:text-red-400",onClick:m[0]||(m[0]=p=>r.value=null)},[o("span",null,[g(l(I),{class:"w-full rotate-180"})]),o("span",Z,w(l(n).name),1)]),g(b,{dir:r.value,class:"flex-grow h-full"},null,8,["dir"])])):B("",!0)]),_:1})],4)}}}),te=Y('<div class="grid none"><span class="row-span-1"></span><span class="row-span-2"></span><span class="row-span-3"></span><span class="row-span-4"></span><span class="row-span-5"></span></div>',1),ne=C({__name:"DocsCatalog",setup(i){const v=[],n={name:"未分类",children:[],type:"dir",mtime:Date.now(),birthtime:Date.now()};A.children.forEach(e=>{typeof e.children<"u"?v.push(e):n.children.push(e)}),v.push(n);const c=W(null);return F(()=>{var d;const e=(d=c.value)==null?void 0:d.children;if(!e)return;a.set(c.value,{overflow:"hidden"}),a.set(e,{opacity:0,y:30});const r=e.length;for(let s=0;s<r;s++){const h=e[s];a.to(h,{opacity:1,y:0,duration:.3,delay:s*.15,ease:"power2.out"})}a.to(c.value,{overflow:"auto",delay:r*.15})}),(e,r)=>{const d=_("RouterView");return u(),f(k,null,[te,g(O),o("div",{tag:"div",class:"grid min-h-screen grid-flow-row-dense grid-cols-1 gap-6 p-4 sm:grid-cols-2 lg:grid-cols-3 auto-rows-auto pt-[60px]",ref_key:"Container",ref:c},[(u(),f(k,null,N(v,(s,h)=>g(ee,{dir:s,svg:!0,key:h,class:z([`row-span-${Math.ceil(s.children.length/3)}`,"shadow-lg"])},null,8,["dir","class"])),64))],512),g(d)],64)}}});export{ne as default};
