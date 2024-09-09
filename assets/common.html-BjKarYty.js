import{_ as l}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as o,o as t,c as p,e as c,a as s,f as e,b as d,w as r,d as n}from"./app-BlgNmpc-.js";const i={},y=s("p",null,"本章节介绍 CSS 的最常见，也是最基础属性。",-1),E=n(`<h2 id="文本" tabindex="-1"><a class="header-anchor" href="#文本"><span>文本</span></a></h2><table><thead><tr><th>格式</th><th>属性</th><th>值</th></tr></thead><tbody><tr><td>对齐方式</td><td>text-align</td><td><code>left</code> (默认) / <code>right</code> / <code>center</code> / <code>justify</code> / <code>inherit</code></td></tr><tr><td>字体</td><td>font-family</td><td>各种字体对应的代号</td></tr><tr><td>斜体样式</td><td>font-style</td><td><code>normal</code> (默认) /<code>italic</code></td></tr><tr><td>字体粗细</td><td>font-weight</td><td>描述值 <code>light</code> / <code>normal</code> / <code>bold</code>，数字 100 - 900 (400 为 normal)</td></tr><tr><td>字体大小</td><td>font-size</td><td>像素如 <code>14px</code>，磅如 <code>8pt</code>，字体大小如 <code>1em</code>、<code>0.5rem</code></td></tr><tr><td>行高</td><td>line-height</td><td>像素如 <code>14px</code>，数字如 <code>2</code>(代表 2 倍字高)</td></tr><tr><td>字体间距</td><td>letter-spacing</td><td>像素如 <code>14px</code>，百分比如 <code>10%</code>，磅如 <code>8pt</code>，字体大小如 <code>1em</code>、<code>0.5rem</code></td></tr><tr><td>字体装饰</td><td>text-decoration</td><td><code>none</code> (默认) / <code>underline</code>/<code>overline</code>/<code>line-through</code> / <code>blink</code> / <code>inherit</code></td></tr></tbody></table><p>案例:</p><div class="language-css" data-highlighter="shiki" data-ext="css" data-title="css" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#81A1C1;">p</span><span style="color:#ECEFF4;">.</span><span style="color:#8FBCBB;">normal</span><span style="color:#ECEFF4;"> {</span></span>
<span class="line"><span style="color:#D8DEE9;">  font-weight</span><span style="color:#ECEFF4;">:</span><span style="color:#81A1C1;"> bold;</span></span>
<span class="line"><span style="color:#D8DEE9;">  font-size</span><span style="color:#ECEFF4;">:</span><span style="color:#B48EAD;"> 18</span><span style="color:#81A1C1;">px;</span></span>
<span class="line"><span style="color:#D8DEE9;">  line-height</span><span style="color:#ECEFF4;">:</span><span style="color:#B48EAD;"> 1.5</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#D8DEE9;">  text-align</span><span style="color:#ECEFF4;">:</span><span style="color:#81A1C1;"> center;</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span></span></code></pre></div><h2 id="颜色" tabindex="-1"><a class="header-anchor" href="#颜色"><span>颜色</span></a></h2><ol><li><p>HEX(十六进制)表示方法</p><p><code>#__ __ __(__)</code> 前三个空白位置分别代表 <strong>R</strong> (red)，<strong>G</strong> (green)，<strong>B</strong> (blue)，即红、绿、蓝显示三原色。最后一位代表 <strong>A</strong> (alpha)，即透明度通道。四个位置要统一填写 1 或 2 位十六进制数。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>例子:</p><ul><li><code>#fff</code>: 3 位，16 色 RGB，灰度为 16，即 RGB 分别只有 16 色(从最淡到最浓为 <code>0</code> - <code>f</code>)。</li><li><code>#ffff</code>: 4 位，16 色 RGBA。新增的透明度通道只有 16 个级别(<code>0</code> 为 <code>0%</code> 完全透明，<code>f</code> 为 <code>100%</code> 完全不透明)。</li><li><code>#ffffff</code>: 6 位是 256 色 RGB，灰度为 256，即 RGB 分别拥有 256 色(从最淡到最浓为 <code>00</code> - <code>ff</code>)。</li><li><code>#ffffffff</code>: 8 位是 256 色 RGBA。同上新增的透明度通道有 256 个级别(<code>00</code> 为 <code>0%</code> 完全透明，<code>ff</code> 为 <code>100%</code> 完全不透明)。</li></ul></div></li><li><p>RGB 与 RGBA 表示方法</p><p><strong>格式:</strong><br> RGB(R,G,B)<br> RGBA(R,G,B,A)</p><p>R: 红色值。正整数 | 百分数</p><p>G: 绿色值。正整数 | 百分数</p><p>B: 蓝色值。正整数 | 百分数</p><p>正整数值的取值范围为: 0 - 255。百分数值的取值范围为: 0.0% - 100.0%</p><p>A: Alpha 透明度。取值 0~1 之间。</p><p>例子:</p><ul><li><p>RGB: <code>rgb(142 229 238)</code></p></li><li><p>RGBA: <code>rgba(142 229 238 0)</code></p></li></ul></li></ol><h3 id="配色网站" tabindex="-1"><a class="header-anchor" href="#配色网站"><span>配色网站</span></a></h3><ul><li><a href="http://tool.oschina.net/commons?type=3" target="_blank" rel="noopener noreferrer">颜色网站</a></li><li><a href="https://webgradients.com/" target="_blank" rel="noopener noreferrer">渐进色网站</a></li></ul><div class="hint-container tip"><p class="hint-container-title">提示</p><p>由于黑色和白色是纯色，直接使用 16 色 HEX 表示方法即可。</p><p>即: 黑色 <code>#000</code>，白色 <code>#fff</code></p></div><div class="language-css" data-highlighter="shiki" data-ext="css" data-title="css" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#81A1C1;">body</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#81A1C1;">h1</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#81A1C1;">p</span><span style="color:#ECEFF4;"> {</span></span>
<span class="line"><span style="color:#D8DEE9;">  background-color</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;"> #</span><span style="color:#B48EAD;">b0c4de</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span></span></code></pre></div><h2 id="链接" tabindex="-1"><a class="header-anchor" href="#链接"><span>链接</span></a></h2><div class="language-css line-numbers-mode" data-highlighter="shiki" data-ext="css" data-title="css" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#616E88;">/* 未访问链接*/</span></span>
<span class="line"><span style="color:#81A1C1;">a</span><span style="color:#ECEFF4;">:</span><span style="color:#8FBCBB;">link</span><span style="color:#ECEFF4;"> {</span></span>
<span class="line"><span style="color:#D8DEE9;">  color</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;"> #</span><span style="color:#B48EAD;">000000</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#D8DEE9;">  background-color</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;"> #</span><span style="color:#B48EAD;">b2ff99</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#616E88;">/*已访问链接 */</span></span>
<span class="line"><span style="color:#81A1C1;">a</span><span style="color:#ECEFF4;">:</span><span style="color:#8FBCBB;">visited</span><span style="color:#ECEFF4;"> {</span></span>
<span class="line"><span style="color:#D8DEE9;">  color</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;"> #</span><span style="color:#B48EAD;">00ff00</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#D8DEE9;">  background-color</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;"> #</span><span style="color:#B48EAD;">ffff85</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#616E88;">/*鼠标移动到链接上 */</span></span>
<span class="line"><span style="color:#81A1C1;">a</span><span style="color:#ECEFF4;">:</span><span style="color:#8FBCBB;">hover</span><span style="color:#ECEFF4;"> {</span></span>
<span class="line"><span style="color:#D8DEE9;">  color</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;"> #</span><span style="color:#B48EAD;">ff00ff</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#D8DEE9;">  background-color</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;"> #</span><span style="color:#B48EAD;">ff704d</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#616E88;">/* 鼠标点击时 */</span></span>
<span class="line"><span style="color:#81A1C1;">a</span><span style="color:#ECEFF4;">:</span><span style="color:#8FBCBB;">active</span><span style="color:#ECEFF4;"> {</span></span>
<span class="line"><span style="color:#D8DEE9;">  color</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;"> #</span><span style="color:#B48EAD;">0000ff</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#D8DEE9;">  background-color</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;"> #</span><span style="color:#B48EAD;">ff704d</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上要注意优先级顺序，因为同样生效的 CSS，后面的优先级更高，例如将 <code>a:link</code> 放在最后，则剩余三个的颜色永远不会生效。</p><h2 id="盒模型" tabindex="-1"><a class="header-anchor" href="#盒模型"><span>盒模型</span></a></h2>`,14),h={class:"hint-container tip"},m=s("p",{class:"hint-container-title"},"提示",-1),v=n(`<figure><img src="https://www.runoob.com/wp-content/uploads/2013/08/VlwVi.png" alt="盒模型示意图" tabindex="0" loading="lazy"><figcaption>盒模型示意图</figcaption></figure><p><code>margin</code> 和 <code>padding</code> 都可以接受 1 - 4 个参数。其参数默认以 <code>上</code> 侧为起始点，按照顺时针排序，即<strong>上右下左</strong>。</p><p>当 <code>下</code> / <code>左</code> 没有指定时，跟随 <code>上</code> / <code>右</code>；当 <code>右</code> 也没有指定时，全部跟随 <code>上</code>。</p><p>案例:</p><div class="language-css line-numbers-mode" data-highlighter="shiki" data-ext="css" data-title="css" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#81A1C1;">div</span><span style="color:#ECEFF4;"> {</span></span>
<span class="line"><span style="color:#616E88;">  /** 上 右 下 左 */</span></span>
<span class="line"><span style="color:#D8DEE9;">  margin</span><span style="color:#ECEFF4;">:</span><span style="color:#B48EAD;"> 25</span><span style="color:#81A1C1;">px</span><span style="color:#B48EAD;"> 50</span><span style="color:#81A1C1;">px</span><span style="color:#B48EAD;"> 75</span><span style="color:#81A1C1;">px</span><span style="color:#B48EAD;"> 100</span><span style="color:#81A1C1;">px;</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#81A1C1;">div</span><span style="color:#ECEFF4;"> {</span></span>
<span class="line"><span style="color:#616E88;">  /** 上 右+左(跟随右) 下 */</span></span>
<span class="line"><span style="color:#D8DEE9;">  margin</span><span style="color:#ECEFF4;">:</span><span style="color:#B48EAD;"> 25</span><span style="color:#81A1C1;">px</span><span style="color:#B48EAD;"> 50</span><span style="color:#81A1C1;">px</span><span style="color:#B48EAD;"> 75</span><span style="color:#81A1C1;">px;</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#81A1C1;">div</span><span style="color:#ECEFF4;"> {</span></span>
<span class="line"><span style="color:#616E88;">  /** 上下 右左 */</span></span>
<span class="line"><span style="color:#D8DEE9;">  margin</span><span style="color:#ECEFF4;">:</span><span style="color:#B48EAD;"> 25</span><span style="color:#81A1C1;">px</span><span style="color:#B48EAD;"> 50</span><span style="color:#81A1C1;">px;</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#81A1C1;">div</span><span style="color:#ECEFF4;"> {</span></span>
<span class="line"><span style="color:#616E88;">  /** 上右下左 全部25px */</span></span>
<span class="line"><span style="color:#D8DEE9;">  margin</span><span style="color:#ECEFF4;">:</span><span style="color:#B48EAD;"> 25</span><span style="color:#81A1C1;">px;</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>同时，也支持只对一侧设置，如:</p><div class="language-css" data-highlighter="shiki" data-ext="css" data-title="css" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#616E88;">/** 只有左外边距，为3px */</span></span>
<span class="line"><span style="color:#81A1C1;">div</span><span style="color:#ECEFF4;"> {</span></span>
<span class="line"><span style="color:#D8DEE9;">  margin-left</span><span style="color:#ECEFF4;">:</span><span style="color:#B48EAD;"> 3</span><span style="color:#81A1C1;">px;</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span></span></code></pre></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p><code>padding</code> 与 <code>margin</code> 在格式上完全相同。</p></div><h2 id="背景色" tabindex="-1"><a class="header-anchor" href="#背景色"><span>背景色</span></a></h2><p>使用 <code>background-color</code> 或 <code>background-image</code> 属性进行设置。</p><p>案例:</p><div class="language-css" data-highlighter="shiki" data-ext="css" data-title="css" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#ECEFF4;">.</span><span style="color:#8FBCBB;">red</span><span style="color:#ECEFF4;"> {</span></span>
<span class="line"><span style="color:#D8DEE9;">  background-color</span><span style="color:#ECEFF4;">:</span><span style="color:#81A1C1;"> red;</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span></span></code></pre></div><h2 id="位置" tabindex="-1"><a class="header-anchor" href="#位置"><span>位置</span></a></h2><p><code>position</code> 属性规定元素的定位类型。元素的位置通过 <code>left</code>, <code>top</code>, <code>right</code> 以及 <code>bottom</code> 属性进行规定。</p><p>可能的值:</p><table><thead><tr><th>值</th><th>描述</th></tr></thead><tbody><tr><td>absolute</td><td>生成绝对定位的元素，相对于 <code>static</code> 定位以外的第一个父元素进行定位。</td></tr><tr><td>fixed</td><td>生成绝对定位的元素，相对于浏览器窗口进行定位。</td></tr><tr><td>relative</td><td>生成相对定位的元素，相对于其正常位置进行定位。因此，&quot;<code>left: 20px</code>&quot; 会让元素向右偏移 20 像素。</td></tr><tr><td>static</td><td>默认值。没有定位，元素出现在正常的流中 (忽略 top, bottom, left, right 或者 z-index 声明)。</td></tr><tr><td>sticky</td><td>在文档中正常定位，但当向上滚动到达屏幕顶端时，固定在顶部不再随页面上移</td></tr><tr><td>inherit</td><td>规定应该从父元素继承 <code>position</code> 属性的值。</td></tr></tbody></table><p>如果设置为 <code>absolute</code> 或者 <code>fixed</code> 的话，元素将会脱离文档流，也就是正常的文档布局里面不再有它的位置，不会给它留空，完全视它不存在。它会根据最后渲染出的其他元素位置寻找自己的定位。</p>`,17);function u(F,C){const a=o("RouteLink");return t(),p("div",null,[y,c(" more "),E,s("div",h,[m,s("p",null,[e("您可能需要先查看 "),d(a,{to:"/code/website/css/guide/box.html"},{default:r(()=>[e("盒模型")]),_:1}),e(" 以理解此部分")])]),v])}const b=l(i,[["render",u],["__file","common.html.vue"]]),A=JSON.parse('{"path":"/code/website/css/guide/common.html","title":"常见属性说明","lang":"zh-CN","frontmatter":{"title":"常见属性说明","icon":"info","date":"2019-09-06T00:00:00.000Z","order":6,"category":"CSS","tag":["快速上手"],"next":"../intro/selector.html","description":"本章节介绍 CSS 的最常见，也是最基础属性。","head":[["meta",{"property":"og:url","content":"https://SperaC.github.io/code/website/css/guide/common.html"}],["meta",{"property":"og:site_name","content":"SperaC"}],["meta",{"property":"og:title","content":"常见属性说明"}],["meta",{"property":"og:description","content":"本章节介绍 CSS 的最常见，也是最基础属性。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://www.runoob.com/wp-content/uploads/2013/08/VlwVi.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-25T17:47:26.000Z"}],["meta",{"property":"article:author","content":"SperaC"}],["meta",{"property":"article:tag","content":"快速上手"}],["meta",{"property":"article:published_time","content":"2019-09-06T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-01-25T17:47:26.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"常见属性说明\\",\\"image\\":[\\"https://www.runoob.com/wp-content/uploads/2013/08/VlwVi.png\\"],\\"datePublished\\":\\"2019-09-06T00:00:00.000Z\\",\\"dateModified\\":\\"2024-01-25T17:47:26.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"SperaC\\",\\"url\\":\\"https://SperaC.github.io\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://SperaC.github.io/atom.xml","title":"SperaC Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://SperaC.github.io/feed.json","title":"SperaC JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://SperaC.github.io/rss.xml","title":"SperaC RSS Feed"}]]},"headers":[{"level":2,"title":"文本","slug":"文本","link":"#文本","children":[]},{"level":2,"title":"颜色","slug":"颜色","link":"#颜色","children":[{"level":3,"title":"配色网站","slug":"配色网站","link":"#配色网站","children":[]}]},{"level":2,"title":"链接","slug":"链接","link":"#链接","children":[]},{"level":2,"title":"盒模型","slug":"盒模型","link":"#盒模型","children":[]},{"level":2,"title":"背景色","slug":"背景色","link":"#背景色","children":[]},{"level":2,"title":"位置","slug":"位置","link":"#位置","children":[]}],"git":{"createdTime":1591204114000,"updatedTime":1706204846000,"contributors":[{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":7},{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":1}]},"readingTime":{"minutes":3.9,"words":1170},"filePathRelative":"code/website/css/guide/common.md","localizedDate":"2019年9月6日","excerpt":"<p>本章节介绍 CSS 的最常见，也是最基础属性。</p>\\n","autoDesc":true}');export{b as comp,A as data};
