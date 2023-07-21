import{d as m,h as f,s as b,b as _,i as x,o as c,c as i,F as v,j as P,u as y,g as a,a as o,t as j,k,l as g}from"./97613667.js";const w=[{title:"我的主页",description:"<p>即您正在访问的网站。</p><p>作为个人存储笔记的网站，该网页使用到了 <a href='https://developer.mozilla.org/zh-CN/docs/Web/API/Service_Worker_API'>service worker</a>，以保证离线时依然可以响应。</p><p>如果您不想让浏览器缓存资源，您可以开启隐私（无痕）模式来禁用该技术。</p>",pcPics:["/projects/imgs/00-1.png"],phonePics:["/projects/imgs/00-2.png"],pcPic:"/projects/imgs/00-1.png",phonePic:"/projects/imgs/00-2.png"},{title:"网易云音乐",description:"<p>该项目根据平板的网易云音乐 App 进行布局，改动一小部分。</p><p>vue3、typescript、ElementPlus等。</p><p>其中的主视图使用 Vue Router ，而子视图（滑动进入的视图）使用动态组件，达到自由跳转的目的。在<a href='https://developers.weixin.qq.com/ebook?action=get_post_info&docid=0004eec99acc808b00861a5bd5280a'>小程序开发指南</a>中有提到页面栈，表现形式是一样的。</p>",pcPics:["/projects/imgs/06.png"],phonePics:["/projects/imgs/04.png"],pcPic:"/projects/imgs/06.png",phonePic:"/projects/imgs/04.png"},{title:"小兔鲜儿",description:"<p>该项目是<a href='https://www.bilibili.com/video/BV1Ac411K7EQ'> 黑马程序员前端Vue3小兔鲜电商项目实战 </a>，早些时候的练习项目。</p><p>链接的原视频很详细，但你可以使用 TypeScript 稍微改造下，尝试之后，个人感觉可能不需要 TypeScript，注意接口的返回值即可。小屏适配，可能是优化该项目的一个方向，但也要想好是否值得。</p><p>本文档将分享该项目中的 <code>power-set.js</code> 文件。</p>",pcPics:["/projects/imgs/06-1.png"],phonePics:["/projects/imgs/06-2.png"],pcPic:"/projects/imgs/06-1.png",phonePic:"/projects/imgs/06-2.png"},{title:"数据可视化",description:"<p>全是<a href='https://echarts.apache.org/zh/index.html'> Echarts </a>，但该项目过老，请到官网查看最新的参数，同时，可以拦截请求数据（如使用 <a href='http://mockjs.com/'> mockjs </a>）。</p><p>在该 demo 中，可以注意一下所使用的自适应<code>rem</code>，该方法也有历史版本。</p>",pcPics:["/projects/imgs/07-1.png"],phonePics:["/projects/imgs/07-2.png"],pcPic:"/projects/imgs/07-1.gif",nomore:!0}],E={class:"flex flex-col items-center justify-center min-h-screen gap-8 p-8"},C={class:"flex-1 space-y-4"},R={class:"text-lg font-bold grow-[.5fr]"},S=["innerHTML"],V=["onClick"],A=o("span",{class:"absolute flex w-2 h-2 -top-1 -right-1"},[o("span",{class:"absolute inline-flex w-full h-full bg-red-400 rounded-full opacity-75 animate-ping"}),o("span",{class:"relative inline-flex w-2 h-2 bg-red-500 rounded-full"})],-1),I=["src"],O=["src"],N=m({__name:"index",setup(T){const h=f(),u=async e=>{h.push({path:`/projects/${e}`})},n=b([]);let p;function l(e,s=!1){const t=[...e.children];if(s){t.forEach(r=>{a.to(r,{opacity:0})});return}t.forEach(r=>{const d=r.getAttribute("data-type")=="pc"?{y:"50%",duration:.5}:{x:"-50%",duration:.8,ease:"back.out(1.8)"};a.set(r,{opacity:1}),a.from(r,{...d,opacity:0})})}return _(()=>{n.value.length&&(p=new IntersectionObserver(e=>{for(let s=0;s<e.length;s++){if(e[s].intersectionRatio<=.5){l(e[s].target,!0);continue}l(e[s].target)}},{threshold:[.5]}),n.value.forEach(e=>p.observe(e)))}),x(()=>{p=null}),(e,s)=>(c(),i("div",E,[(c(!0),i(v,null,P(y(w),(t,r)=>(c(),i("section",{key:r,class:"flex flex-col-reverse gap-4 w-full sm:flex-row-reverse max-w-[700px] shadow-lg glass p-4 rounded-lg border-2 border-slate-300/50"},[o("div",C,[o("h2",R,"# "+j(t.title),1),o("div",{class:"text-sm dark:text-slate-200 [&_a]:text-sky-400 leading-6 indent-8",innerHTML:t.description},null,8,S),t.nomore?g("",!0):(c(),i("button",{key:0,onClick:d=>u(t.title),class:"relative p-2 text-xs text-white rounded-sm bg-slate-900 hover:bg-slate-700"},[A,k(" 了解更多 ")],8,V))]),o("div",{class:"relative flex-1 pb-4 pl-4",ref_for:!0,ref_key:"ImgObserverRef",ref:n},[o("img",{"data-type":"pc",src:t.pcPic,class:"border-2 rounded-md opacity-0 border-slate-300/60"},null,8,I),t.phonePic?(c(),i("img",{key:0,"data-type":"iphone",src:t.phonePic,class:"absolute bottom-0 left-0 border-2 rounded-md opacity-0 border-slate-300/60 h-2/3"},null,8,O)):g("",!0)],512)]))),128))]))}});export{N as default};
