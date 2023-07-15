import{A as d}from"./AppBg-2188f023.js";import{_ as i,o,c as a,p as r,h as p,a as s,i as e,d as u,e as t,F as m}from"./index-1fd875d6.js";const _="/assets/06-7909a993.png",h="/assets/01-1-933ad012.png",g="/assets/01-916a822d.png",f="/assets/02-191af671.png",b="/assets/03-54a9af58.png",k="/assets/04-a0b14dc4.png",w="/assets/05-1547691f.png";const x={},c=l=>(r("data-v-2fbffa60"),l=l(),p(),l),v={class:"mx-auto sm:w-4/5 md:3/5 [&_a]:text-blue-500 text-sm leading-6 tracking-widest bg-slate-100/20 dark:bg-slate-600/30 p-8 rounded-lg"},y=c(()=>s("h2",{class:"text-lg font-bold"},"# 网易云音乐",-1)),A=c(()=>s("div",null,[s("div",{class:"py-4 space-y-8 indent-8"},[s("p",null,[s("img",{src:_,class:"block rounded-md shadow-md"}),e(" 该项目根据平板的网易云音乐 App 进行布局，改动一小部分。 ")]),s("p",null,[e(" 你可以在"),s("a",{href:"https://zyzstudy.gitee.io/"}," 网易云音乐 Vue3 "),e("体验，数据为"),s("a",{href:"http://mockjs.com/"}," mock "),e("生成，方便静态展示。 ")]),s("p",null,[e(" 使用"),s("a",{href:"https://cn.vuejs.org/"}," Vue3 "),e("作为主要框架，其中的主视图使用"),s("a",{href:"https://router.vuejs.org/zh"}," Vue Router "),e("，而子视图（滑动进入的视图）使用动态组件，达到自由跳转的目的。在 "),s("a",{href:"https://developers.weixin.qq.com/ebook?action=get_post_info&docid=0004eec99acc808b00861a5bd5280a"},"微信小程序"),e("中有提到页面栈，形式是一样的，但该项目没有设置层数上限。后续可能会在超过页面数限制后，删除首个页面，以保证只存在一定数量的页面。 ")]),s("div",{class:"clear-both"},[s("span",null," 目前已完成： "),s("ol",{class:"pl-16 list-decimal indent-0"},[s("li",null,"扫码登录"),s("li",null,"用户页、动态"),s("li",null,"歌单详情视口"),s("li",null,"评价视口：评价主展示区（未详细分类）"),s("li",null,"本地歌单管理：增、删"),s("li",null,[e("音乐控件 "),s("ul",{class:"pl-8 list-disc"},[s("li",null,"基本控制：播放/暂停、上下曲、音量等"),s("li",null,"进度条同步与控制"),s("li",null,"歌词同步与控制")])]),s("li",null,"发现页及其部分子页")])]),s("p",null,[e(" 支持小屏，最小屏到"),s("i",null," iphone mini "),e("，大屏未作 "),s("i",null," max-width "),e("限制，待修正。 ")]),s("p",{class:"clear-both"},[e("该项目中，你可以看到一些小 demo ，比如"),s("a",{href:"https://element-plus.org/zh-CN/component/carousel.html#%E5%9F%BA%E7%A1%80%E7%94%A8%E6%B3%95"}," Element Plus 的 Carousel 走马灯"),e("，不直接使用，使用绝对定位实现："),s("code",null," W*(~~(length/2)-(index+active)%length)+50+'%'")]),s("p",{class:"clear-both"}," 路由全局配置 loading ，子视口暂未处理。 "),s("p",{class:"clear-both"},[e(" 为了方便测试，本地尽量"),s("a",{href:"http://mockjs.com/"}," mock "),e("一些数据，虽然当点击多个链接时，可能返回值是一样的，但这非常值得。也可以选择使用"),s("a",{href:"https://github.com/Binaryify/NeteaseCloudMusicApi"}," NeteaseCloudMusicApi "),e("，如果选择这样，在阅读完其使用方法后，只需要开启其服务即可，之后选择性的在项目文件夹"),s("small",null," utils/mock "),e("中注释掉不想拦截的数据。 ")]),s("p",{class:"clear-both"},[e("你可以在"),s("a",{href:"https://github.com/yujiangz/netease-cloud-music.git"}," netease-cloud-music "),e("看到更多细节。")])]),s("div",{class:"grid grid-flow-row-dense grid-cols-2 gap-4"},[s("img",{src:h,class:"block rounded-md","shadow-md":""}),s("img",{src:g,class:"block rounded-md shadow-md"}),s("img",{src:f,class:"block rounded-md shadow-md"}),s("img",{src:b,class:"block rounded-md shadow-md"}),s("img",{src:k,class:"block row-span-2 rounded-md shadow-md"}),s("img",{src:w,class:"block row-span-2 rounded-md shadow-md"})])],-1)),N=[y,A];function B(l,n){return o(),a("section",v,N)}const C=i(x,[["render",B],["__scopeId","data-v-2fbffa60"]]),j={class:"flex relative z-10 flex-col justify-center items-center w-full min-h-[calc(100vh-80px)] p-4 pt-20 pb-32"},I=u({__name:"index",setup(l){return(n,z)=>(o(),a(m,null,[t(d),s("div",j,[t(C)])],64))}});export{I as default};
