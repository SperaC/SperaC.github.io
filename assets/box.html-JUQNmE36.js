import{_ as c}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as a,o as p,c as r,e as i,b as o,w as l,a as e,f as s,d}from"./app-BlgNmpc-.js";const E="/assets/box-model-dERDQtfq.gif",y={},h=e("p",null,"CSS 盒模型本质上是一个盒子，封装周围的 HTML 元素，它包括: 边距，边框，填充，和实际内容。",-1),C=d('<h2 id="盒模型介绍" tabindex="-1"><a class="header-anchor" href="#盒模型介绍"><span>盒模型介绍</span></a></h2><p>下面的图片说明了盒子模型 (Box Model):</p><figure><img src="'+E+`" alt="Box Model 示意图" tabindex="0" loading="lazy"><figcaption>Box Model 示意图</figcaption></figure><p>不同部分的说明:</p><ul><li>Content box (内容) - 盒子的内容，显示文本和图像，可以通过 <code>width</code> 和 <code>height</code> 设置大小。</li><li>Padding box (内边距) - 包围在内容区域外部的空白区域，通过 <code>padding</code> 属性设置。</li><li>Border box (边框) - 围绕在填充和内容外的边框，通过 <code>border</code> 属性设置。</li><li>Margin box (外边距) - 这是最外面的区域，是盒子和其他元素之间的空白区域，通过 <code>margin</code> 属性设置。</li></ul><div class="language-css" data-highlighter="shiki" data-ext="css" data-title="css" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#81A1C1;">div</span><span style="color:#ECEFF4;"> {</span></span>
<span class="line"><span style="color:#D8DEE9;">  width</span><span style="color:#ECEFF4;">:</span><span style="color:#B48EAD;"> 300</span><span style="color:#81A1C1;">px;</span></span>
<span class="line"><span style="color:#D8DEE9;">  border</span><span style="color:#ECEFF4;">:</span><span style="color:#B48EAD;"> 25</span><span style="color:#81A1C1;">px</span><span style="color:#81A1C1;"> solid</span><span style="color:#81A1C1;"> green;</span></span>
<span class="line"><span style="color:#D8DEE9;">  padding</span><span style="color:#ECEFF4;">:</span><span style="color:#B48EAD;"> 25</span><span style="color:#81A1C1;">px;</span></span>
<span class="line"><span style="color:#D8DEE9;">  margin</span><span style="color:#ECEFF4;">:</span><span style="color:#B48EAD;"> 25</span><span style="color:#81A1C1;">px;</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span></span></code></pre></div><p>为了正确设置元素在所有浏览器中的宽度和高度，您需要知道的盒模型是如何工作的。</p><h2 id="元素的宽度和高度" tabindex="-1"><a class="header-anchor" href="#元素的宽度和高度"><span>元素的宽度和高度</span></a></h2><p>当您指定一个 CSS 元素的宽度和高度属性时，您只是设置内容区域(content box)的宽度和高度。<code>padding</code> 和 <code>border</code> 再加上设置的宽高一起决定整个盒子的大小。</p>`,9),m=e("div",{class:"language-html","data-highlighter":"shiki","data-ext":"html","data-title":"html",style:{"background-color":"#2e3440ff",color:"#d8dee9ff"}},[e("pre",{class:"shiki nord vp-code"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#81A1C1"}},"<div"),e("span",{style:{color:"#8FBCBB"}}," class"),e("span",{style:{color:"#ECEFF4"}},"="),e("span",{style:{color:"#ECEFF4"}},'"'),e("span",{style:{color:"#A3BE8C"}},"box"),e("span",{style:{color:"#ECEFF4"}},'"'),e("span",{style:{color:"#D8DEE9"}}," /"),e("span",{style:{color:"#81A1C1"}},">")])])])],-1),g=e("div",{class:"language-css","data-highlighter":"shiki","data-ext":"css","data-title":"css",style:{"background-color":"#2e3440ff",color:"#d8dee9ff"}},[e("pre",{class:"shiki nord vp-code"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#81A1C1"}},"div"),e("span",{style:{color:"#ECEFF4"}},"."),e("span",{style:{color:"#8FBCBB"}},"box"),e("span",{style:{color:"#ECEFF4"}}," {")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#D8DEE9"}},"  width"),e("span",{style:{color:"#ECEFF4"}},":"),e("span",{style:{color:"#B48EAD"}}," 300"),e("span",{style:{color:"#81A1C1"}},"px;")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#D8DEE9"}},"  border"),e("span",{style:{color:"#ECEFF4"}},":"),e("span",{style:{color:"#B48EAD"}}," 25"),e("span",{style:{color:"#81A1C1"}},"px"),e("span",{style:{color:"#81A1C1"}}," solid"),e("span",{style:{color:"#81A1C1"}}," green;")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#D8DEE9"}},"  padding"),e("span",{style:{color:"#ECEFF4"}},":"),e("span",{style:{color:"#B48EAD"}}," 25"),e("span",{style:{color:"#81A1C1"}},"px;")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#D8DEE9"}},"  margin"),e("span",{style:{color:"#ECEFF4"}},":"),e("span",{style:{color:"#B48EAD"}}," 25"),e("span",{style:{color:"#81A1C1"}},"px;")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#ECEFF4"}},"}")])])])],-1),x=e("p",null,"元素盒子的大小为: 300px (宽) + 50px (左 + 右填充) + 50px (左 + 右边框) = 400px",-1),u=e("p",null,"元素占据的空间为: 300px (宽) + 50px (左 + 右填充) + 50px (左 + 右边框) + 50px (左 + 右边距) = 450px",-1),F=e("p",null,"试想一下，您只有 250px 的空间。让我们设置总宽度为 250px 的元素:",-1),A=e("div",{class:"language-html","data-highlighter":"shiki","data-ext":"html","data-title":"html",style:{"background-color":"#2e3440ff",color:"#d8dee9ff"}},[e("pre",{class:"shiki nord vp-code"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#81A1C1"}},"<div"),e("span",{style:{color:"#8FBCBB"}}," class"),e("span",{style:{color:"#ECEFF4"}},"="),e("span",{style:{color:"#ECEFF4"}},'"'),e("span",{style:{color:"#A3BE8C"}},"box"),e("span",{style:{color:"#ECEFF4"}},'"'),e("span",{style:{color:"#D8DEE9"}}," /"),e("span",{style:{color:"#81A1C1"}},">")])])])],-1),_=e("div",{class:"language-css","data-highlighter":"shiki","data-ext":"css","data-title":"css",style:{"background-color":"#2e3440ff",color:"#d8dee9ff"}},[e("pre",{class:"shiki nord vp-code"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#81A1C1"}},"div"),e("span",{style:{color:"#ECEFF4"}},"."),e("span",{style:{color:"#8FBCBB"}},"box"),e("span",{style:{color:"#ECEFF4"}}," {")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#D8DEE9"}},"  width"),e("span",{style:{color:"#ECEFF4"}},":"),e("span",{style:{color:"#B48EAD"}}," 220"),e("span",{style:{color:"#81A1C1"}},"px;")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#D8DEE9"}},"  padding"),e("span",{style:{color:"#ECEFF4"}},":"),e("span",{style:{color:"#B48EAD"}}," 10"),e("span",{style:{color:"#81A1C1"}},"px;")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#D8DEE9"}},"  border"),e("span",{style:{color:"#ECEFF4"}},":"),e("span",{style:{color:"#B48EAD"}}," 5"),e("span",{style:{color:"#81A1C1"}},"px"),e("span",{style:{color:"#81A1C1"}}," solid"),e("span",{style:{color:"#81A1C1"}}," gray;")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#D8DEE9"}},"  margin"),e("span",{style:{color:"#ECEFF4"}},":"),e("span",{style:{color:"#B48EAD"}}," 0"),e("span",{style:{color:"#81A1C1"}},";")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#ECEFF4"}},"}")])])])],-1),D=e("p",null,"最终元素的总宽度计算公式是这样的:",-1),f=e("p",null,"元素的宽度 = 宽度 + 左填充 + 右填充 + 左边框 + 右边框 元素占据的水平空间 = 宽度 + 左填充 + 右填充 + 左边框 + 右边框 + 左边距 + 右边距",-1),b=e("p",null,"元素的总高度最终计算公式是这样的:",-1),B=e("p",null,"元素的高度 = 高度 + 顶部填充 + 底部填充 + 上边框 + 下边框 元素占据的垂直空间 = 高度 + 顶部填充 + 底部填充 + 上边框 + 下边框 + 上边距 + 下边距",-1),S={class:"hint-container tip"},k=e("p",{class:"hint-container-title"},"提示",-1);function v(w,T){const t=a("CodeDemo"),n=a("RouteLink");return p(),r("div",null,[h,i(" more "),C,o(t,{id:"code-demo-48",type:"normal",title:"%E5%85%83%E7%B4%A0%E7%9A%84%E5%AE%BD%E5%BA%A6%E4%B8%8E%E9%AB%98%E5%BA%A6",code:"eJw9zT0KwzAMQOGrCM2lDS1d3J+TeHEi4wgc2VihNYTcvW4CWd83vAXHeYpo8En8gSE61ZfFPlWLcHlbwRMOqs0bn1uGxQrAl2keDdy6LtfHP/SpkC8GrvdcQVNkglC8lw2zI2IJu25lciWwHGFtn/UHBzcs3g=="},{default:l(()=>[m,g,x,u]),_:1}),F,o(t,{id:"code-demo-61",type:"normal",title:"%E6%80%BB%E5%AE%BD%E5%BA%A6%20250px%20%E7%9A%84%E5%85%83%E7%B4%A0",code:"eJw1zcsKwjAQheFXOcxatBbcxMuTZJN2JA2kScgUjZS+u6PQ5fm/xVlpWuZIhm4cXhijE7lbGnKzhNPDJjrQKKKufNSM1SbgHXiZDPq+K+36C8Uxh+QNznsZcuVnNbiUBskxMHx1nz/NrvqQDDpdm15sXyROKyo="},{default:l(()=>[A,_]),_:1}),D,f,b,B,e("div",S,[k,e("p",null,[s("更多相关可见 "),o(n,{to:"/code/website/css/intro/box.html"},{default:l(()=>[s("盒模型")]),_:1})])])])}const H=c(y,[["render",v],["__file","box.html.vue"]]),z=JSON.parse('{"path":"/code/website/css/guide/box.html","title":"盒模型简介","lang":"zh-CN","frontmatter":{"title":"盒模型简介","icon":"box","date":"2019-09-06T00:00:00.000Z","order":5,"category":"CSS","tag":["快速上手"],"description":"CSS 盒模型本质上是一个盒子，封装周围的 HTML 元素，它包括: 边距，边框，填充，和实际内容。","head":[["meta",{"property":"og:url","content":"https://SperaC.github.io/code/website/css/guide/box.html"}],["meta",{"property":"og:site_name","content":"SperaC"}],["meta",{"property":"og:title","content":"盒模型简介"}],["meta",{"property":"og:description","content":"CSS 盒模型本质上是一个盒子，封装周围的 HTML 元素，它包括: 边距，边框，填充，和实际内容。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-25T17:47:26.000Z"}],["meta",{"property":"article:author","content":"SperaC"}],["meta",{"property":"article:tag","content":"快速上手"}],["meta",{"property":"article:published_time","content":"2019-09-06T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-01-25T17:47:26.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"盒模型简介\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-09-06T00:00:00.000Z\\",\\"dateModified\\":\\"2024-01-25T17:47:26.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"SperaC\\",\\"url\\":\\"https://SperaC.github.io\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://SperaC.github.io/atom.xml","title":"SperaC Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://SperaC.github.io/feed.json","title":"SperaC JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://SperaC.github.io/rss.xml","title":"SperaC RSS Feed"}]]},"headers":[{"level":2,"title":"盒模型介绍","slug":"盒模型介绍","link":"#盒模型介绍","children":[]},{"level":2,"title":"元素的宽度和高度","slug":"元素的宽度和高度","link":"#元素的宽度和高度","children":[]}],"git":{"createdTime":1604644156000,"updatedTime":1706204846000,"contributors":[{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":6},{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":2}]},"readingTime":{"minutes":1.93,"words":580},"filePathRelative":"code/website/css/guide/box.md","localizedDate":"2019年9月6日","excerpt":"<p>CSS 盒模型本质上是一个盒子，封装周围的 HTML 元素，它包括: 边距，边框，填充，和实际内容。</p>\\n","autoDesc":true}');export{H as comp,z as data};
