import{d as b,o as d,c as f,a as o,u as n,p as L,r as E,m as k,n as C,q as v,l as M,t as m,v as $,F as S,j as W,e as x,k as D,w as B,E as R,T as V,g as p,x as F,b as Y,f as z,y as H}from"./77eeba8c.js";import{D as O}from"./ae664ad8.js";function T(){const l=["#f07c82","#ee3f4d","#de1c31","#ed556a","#f03752","#e77c8e","#ec9bad","#eeb8c3","#c08eaf","#806d9e","#525288","#61649f","#2b73af","#2376b7","#5698c3","#1772b4","#1781b5","#12aa9c","#45b787","#ffd111","#feba07","#fca106","#f26b1f","#f86b1d"];return l[~~(Math.random()*l.length)]}const q=["view-box"],A=["d"],P=b({__name:"RandomSvg",props:{viewBoxW:{type:Number,default:200},viewBoxH:{type:Number,default:200}},setup(l){const{viewBoxW:g,viewBoxH:a}=l,e=((t=g,r=a)=>{let s=[],i=~~(Math.random()*3)+2;for(let h=0;h<i;h++){const w=Math.floor(Math.random()*t),y=Math.floor(Math.random()*r),u=Math.floor(Math.random()*t),_=Math.floor(Math.random()*r),N=Math.floor(Math.random()*180),j=Math.floor(Math.random()*2),I=Math.floor(Math.random()*2);s.push(`M ${w} ${y} a ${u} ${_} ${N} ${j} ${I} ${w} ${y}`)}return s.join(" ")})();return(t,r)=>(d(),f("svg",{"view-box":`0 0 ${l.viewBoxW} ${l.viewBoxH}`,stroke:"current","stroke-width":"currentWidth",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[o("path",{"stroke-linecap":"round","stroke-linejoin":"round",stroke:"currentColor","stroke-width":"currentWidth",d:n(e)},null,8,A)],8,q))}}),G={class:"p-4 text-2xl font-bold"},J={class:"flex flex-col p-2 text-xs text-right opacity-70"},K={class:"w-full max-h-[100%-2rem] pl-2 pr-4 my-4 text-sm basis-7/12 scrollbar"},Q=["onClick"],U={key:0,class:"absolute inset-0 flex h-full overflow-hidden"},X={class:"block w-24 text-sm leading-6 truncate origin-bottom-left rotate-90 -translate-y-6"},Z=b({__name:"DirCard",props:{dir:{type:Object,required:!0},color:{type:String,default:""},svg:{type:Boolean,default:!1}},setup(l){const a=L(l.dir),c=T(),e={card:{borderColor:"#ffffff55",borderWidth:"3px"},leftWrapper:{backgroundColor:c+"00"},svg:{color:c+"aa"},dirIcon:{color:c+""},docIcon:{backgroundColor:c+"aa"}},t=E(),r=i=>{p.from(i.firstElementChild,{x:"100%",opacity:0,duration:.3,delay:.2}),p.from(i.lastElementChild,{x:"50%",opacity:0,duration:.2})},s=(i,h)=>{p.to(i.firstElementChild,{x:"-100%",opacity:0,duration:.2}),p.to(i.lastElementChild,{x:"-50%",opacity:0,duration:.2,onComplete:h})};return(i,h)=>{const w=k("RouterLink"),y=k("DirCard",!0);return d(),f("div",{class:"flex overflow-hidden rounded-lg",style:v(e.card)},[o("div",{class:"relative flex flex-col justify-between basis-5/12",style:v(e.leftWrapper)},[l.svg?(d(),C(P,{key:0,class:"absolute -z-[1] top-0 left-0 w-full h-full stroke-[.5em]",style:v(e.svg)},null,8,["style"])):M("",!0),o("h2",G,m(n(a).name),1),o("div",J,[o("p",null,m(n(a).children.length)+" 份文件",1),o("p",null,"更新于 "+m(n($)(n(a).mtime).format("YY/MM/DD")),1),o("p",null,"创建于 "+m(n($)(n(a).birthtime).format("YY/MM/DD")),1)])],4),o("ul",K,[(d(!0),f(S,null,W(n(a).children,u=>(d(),f("li",{key:u.name},[u.type==="dir"?(d(),f("div",{key:0,class:"p-2 truncate rounded-md cursor-pointer hover:bg-opacity-40 hover:bg-white",onClick:_=>t.value=u},[x(n(O),{class:"inline-block w-4 align-text-top stroke-2",style:v(e.dirIcon)},null,8,["style"]),D(" "+m(u.name),1)],8,Q)):(d(),C(w,{key:1,to:u.url,class:"block p-2 truncate rounded-md cursor-pointer hover:bg-opacity-40 hover:bg-white"},{default:B(()=>[o("span",{class:"inline-block w-2 mx-1 h-[3px] mb-[.2em] rounded-full",style:v(e.docIcon)},null,4),D(" "+m(u.name),1)]),_:2},1032,["to"]))]))),128))]),x(V,{onEnter:r,onLeave:s},{default:B(()=>[t.value?(d(),f("div",U,[o("div",{class:"flex-grow-0 flex-shrink-0 h-full pt-2 overflow-hidden text-red-300 cursor-pointer bg-slate-300 dark:bg-slate-700 basis-6 hover:text-red-400",onClick:h[0]||(h[0]=u=>t.value=null)},[o("span",null,[x(n(R),{class:"w-full rotate-180"})]),o("span",X,m(n(a).name),1)]),x(y,{dir:t.value,class:"flex-grow h-full rounded-l-none bg-slate-300 dark:bg-slate-700"},null,8,["dir"])])):M("",!0)]),_:1})],4)}}}),ee=z('<div class="fixed grid none"><span class="row-span-1"></span><span class="row-span-2"></span><span class="row-span-3"></span><span class="row-span-4"></span><span class="row-span-5"></span></div>',1),ae=b({__name:"DocsCatalog",setup(l){const g=[],a={name:"未分类",children:[],type:"dir",mtime:Date.now(),birthtime:Date.now()};F.children.forEach(e=>{typeof e.children<"u"?g.push(e):a.children.push(e)}),g.push(a);const c=E(null);return Y(()=>{var r;const e=(r=c.value)==null?void 0:r.children;if(!e)return;p.set(c.value,{overflow:"hidden"}),p.set(e,{opacity:0,y:30});const t=e.length;for(let s=0;s<t;s++){const i=e[s];p.to(i,{opacity:1,y:0,duration:.3,delay:s*.15,ease:"power2.out"})}p.to(c.value,{overflow:"auto",delay:t*.15})}),(e,t)=>(d(),f("div",{class:"grid grid-flow-row-dense grid-cols-1 gap-6 p-4 sm:grid-cols-2 lg:grid-cols-3 auto-rows-auto",ref_key:"Container",ref:c},[ee,(d(),f(S,null,W(g,(r,s)=>x(Z,{dir:r,svg:!0,key:s,class:H([`row-span-${Math.ceil(r.children.length/3)}`,"shadow-lg"])},null,8,["dir","class"])),64))],512))}});export{ae as default};