import{_ as o}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as e,o as l,c as p,e as t,a as s,f as a,b as c,w as r,d as i}from"./app-BlgNmpc-.js";const E={},d=s("p",null,"JavaScript 的对象是一种无序的集合数据类型，它由若干键值对组成。",-1),y=s("p",null,[a("JavaScript 用一个 "),s("code",null,"{...}"),a(" 表示一个对象，键值对以 "),s("code",null,"xxx: xxx"),a(" 形式申明，用 "),s("code",null,","),a(" 隔开。")],-1),F=i(`<p>JavaScript 的对象可用于描述现实世界中的某个对象。例如，为了描述 SperaC，我们可以用若干键值对来描述他:</p><div class="language-js" data-highlighter="shiki" data-ext="js" data-title="js" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#81A1C1;">const</span><span style="color:#D8DEE9;"> mrhope</span><span style="color:#81A1C1;"> =</span><span style="color:#ECEFF4;"> {</span></span>
<span class="line"><span style="color:#88C0D0;">  name</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">SperaC</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#88C0D0;">  isHandsome</span><span style="color:#ECEFF4;">:</span><span style="color:#81A1C1;"> true</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#88C0D0;">  birth</span><span style="color:#ECEFF4;">:</span><span style="color:#B48EAD;"> 1998</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#88C0D0;">  school</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">No.1 Middle School</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#88C0D0;">  height</span><span style="color:#ECEFF4;">:</span><span style="color:#B48EAD;"> 1.76</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#88C0D0;">  weight</span><span style="color:#ECEFF4;">:</span><span style="color:#B48EAD;"> 50</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#88C0D0;">  car</span><span style="color:#ECEFF4;">:</span><span style="color:#81A1C1;"> null</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span><span style="color:#81A1C1;">;</span></span></code></pre></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p>最后一个键值对不需要在末尾加 <code>,</code>，如果加了，有的浏览器(如低版本的 IE)将报错。</p></div><p>上述对象申明了一个 <code>name</code> 属性，值是 <code>&#39;SperaC&#39;</code>，<code>birth</code> 属性，值是 <code>1998</code>，以及其他一些属性。最后，把这个对象赋值给变量 <code>mrhope</code> 后，就可以通过变量 <code>mrhope</code> 来获取 SperaC 的属性了:</p><div class="language-js" data-highlighter="shiki" data-ext="js" data-title="js" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#D8DEE9;">mrhope</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">name</span><span style="color:#81A1C1;">;</span><span style="color:#616E88;"> // &#39;SperaC&#39;</span></span>
<span class="line"><span style="color:#D8DEE9;">mrhope</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">birth</span><span style="color:#81A1C1;">;</span><span style="color:#616E88;"> // 1998</span></span></code></pre></div><p>访问属性是通过 <code>.</code> 操作符完成的，但这要求属性名必须是一个有效的变量名。如果属性名包含特殊字符，就必须用 <code>&#39;&#39;</code> 括起来:</p><div class="language-js" data-highlighter="shiki" data-ext="js" data-title="js" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#81A1C1;">const</span><span style="color:#D8DEE9;"> mrshope</span><span style="color:#81A1C1;"> =</span><span style="color:#ECEFF4;"> {</span></span>
<span class="line"><span style="color:#88C0D0;">  name</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">Mrs.Hope</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#ECEFF4;">  &quot;</span><span style="color:#A3BE8C;">middle-school</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">No.1 Middle School</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span><span style="color:#81A1C1;">;</span></span></code></pre></div><p><code>mrshope</code> 的属性名 <code>middle-school</code> 不是一个有效的变量，就需要用 <code>&#39;&#39;</code> 括起来。访问这个属性也无法使用 <code>.</code> 操作符，必须用 <code>[&#39;xxx&#39;]</code> 来访问:</p><div class="language-js" data-highlighter="shiki" data-ext="js" data-title="js" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#D8DEE9;">mrshope</span><span style="color:#D8DEE9FF;">[</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">middle-school</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#D8DEE9FF;">]</span><span style="color:#81A1C1;">;</span><span style="color:#616E88;"> // &#39;No.1 Middle School&#39;</span></span>
<span class="line"><span style="color:#D8DEE9;">mrshope</span><span style="color:#D8DEE9FF;">[</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">name</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#D8DEE9FF;">]</span><span style="color:#81A1C1;">;</span><span style="color:#616E88;"> // &#39;Mrs.Hope&#39;</span></span>
<span class="line"><span style="color:#D8DEE9;">mrshope</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">name</span><span style="color:#81A1C1;">;</span><span style="color:#616E88;"> // &#39;Mrs.Hope&#39;</span></span></code></pre></div><p>也可以用 <code>mrshope[&#39;name&#39;]</code> 来访问 <code>mrshope</code> 的 <code>name</code> 属性，不过 <code>mrshope.name</code> 的写法更简洁。我们在编写 JavaScript 代码的时候，属性名尽量使用标准的变量名，这样就可以直接通过 <code>object.prop</code> 的形式访问一个属性了。</p><p>实际上 JavaScript 对象的所有属性都是字符串，不过属性对应的值可以是任意数据类型。</p><p>如果访问一个不存在的属性会返回什么呢? JavaScript 规定，访问不存在的属性不报错，而是返回 <code>undefined</code>:</p><div class="language-js" data-highlighter="shiki" data-ext="js" data-title="js" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">use strict</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#81A1C1;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#81A1C1;">const</span><span style="color:#D8DEE9;"> mrhope</span><span style="color:#81A1C1;"> =</span><span style="color:#ECEFF4;"> {</span></span>
<span class="line"><span style="color:#88C0D0;">  name</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">SperaC</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span><span style="color:#81A1C1;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D8DEE9;">console</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">log</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">mrhope</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">name</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#D8DEE9;">console</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">log</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">mrhope</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">house</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span><span style="color:#616E88;"> // undefined</span></span></code></pre></div><p>由于 JavaScript 的对象是动态类型，您可以自由地给一个对象添加或删除属性:</p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#81A1C1;">const</span><span style="color:#D8DEE9;"> mrhope</span><span style="color:#81A1C1;"> =</span><span style="color:#ECEFF4;"> {</span></span>
<span class="line"><span style="color:#88C0D0;">  name</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">SperaC</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span><span style="color:#81A1C1;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D8DEE9;">mrhope</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">age</span><span style="color:#81A1C1;">;</span><span style="color:#616E88;"> // undefined</span></span>
<span class="line"><span style="color:#D8DEE9;">mrhope</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">age</span><span style="color:#81A1C1;"> =</span><span style="color:#B48EAD;"> 22</span><span style="color:#81A1C1;">;</span><span style="color:#616E88;"> // 新增一个 age 属性</span></span>
<span class="line"><span style="color:#D8DEE9;">mrhope</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">age</span><span style="color:#81A1C1;">;</span><span style="color:#616E88;"> // 22</span></span>
<span class="line"><span style="color:#81A1C1;">delete</span><span style="color:#D8DEE9;"> mrhope</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">age</span><span style="color:#81A1C1;">;</span><span style="color:#616E88;"> // 删除 age 属性</span></span>
<span class="line"><span style="color:#D8DEE9;">mrhope</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">age</span><span style="color:#81A1C1;">;</span><span style="color:#616E88;"> // undefined</span></span>
<span class="line"><span style="color:#81A1C1;">delete</span><span style="color:#D8DEE9;"> mrhope</span><span style="color:#D8DEE9FF;">[</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">name</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#D8DEE9FF;">]</span><span style="color:#81A1C1;">;</span><span style="color:#616E88;"> // 删除 name 属性</span></span>
<span class="line"><span style="color:#D8DEE9;">mrhope</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">name</span><span style="color:#81A1C1;">;</span><span style="color:#616E88;"> // undefined</span></span>
<span class="line"><span style="color:#81A1C1;">delete</span><span style="color:#D8DEE9;"> mrhope</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">school</span><span style="color:#81A1C1;">;</span><span style="color:#616E88;"> // 删除一个不存在的 school 属性也不会报错</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果我们要检测 <code>mrhope</code> 是否拥有某一属性，可以用 <code>in</code> 操作符:</p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#81A1C1;">const</span><span style="color:#D8DEE9;"> mrhope</span><span style="color:#81A1C1;"> =</span><span style="color:#ECEFF4;"> {</span></span>
<span class="line"><span style="color:#88C0D0;">  name</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">SperaC</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#88C0D0;">  birth</span><span style="color:#ECEFF4;">:</span><span style="color:#B48EAD;"> 1998</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#88C0D0;">  school</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">No.1 Middle School</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#88C0D0;">  height</span><span style="color:#ECEFF4;">:</span><span style="color:#B48EAD;"> 1.76</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#88C0D0;">  weight</span><span style="color:#ECEFF4;">:</span><span style="color:#B48EAD;"> 50</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#88C0D0;">  car</span><span style="color:#ECEFF4;">:</span><span style="color:#81A1C1;"> null</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span><span style="color:#81A1C1;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">name</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#81A1C1;"> in</span><span style="color:#D8DEE9;"> mrhope</span><span style="color:#81A1C1;">;</span><span style="color:#616E88;"> // true</span></span>
<span class="line"><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">grade</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#81A1C1;"> in</span><span style="color:#D8DEE9;"> mrhope</span><span style="color:#81A1C1;">;</span><span style="color:#616E88;"> // false</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>不过要小心，如果 <code>in</code> 判断一个属性存在，这个属性不一定是 <code>mrhope</code> 的，它可能是 <code>mrhope</code> 继承得到的:</p><div class="language-js" data-highlighter="shiki" data-ext="js" data-title="js" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">toString</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#81A1C1;"> in</span><span style="color:#D8DEE9;"> mrhope</span><span style="color:#81A1C1;">;</span><span style="color:#616E88;"> // true</span></span></code></pre></div><p>因为 <code>toString</code> 定义在 object 对象中，而所有对象最终都会在原型链上指向 object，所以 <code>mrhope</code> 也拥有 <code>toString</code> 属性。</p><p>要判断一个属性是否是 <code>mrhope</code> 自身拥有的，而不是继承得到的，可以用 <code>hasOwnProperty()</code> 方法:</p><div class="language-js" data-highlighter="shiki" data-ext="js" data-title="js" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#81A1C1;">const</span><span style="color:#D8DEE9;"> mrhope</span><span style="color:#81A1C1;"> =</span><span style="color:#ECEFF4;"> {</span></span>
<span class="line"><span style="color:#88C0D0;">  name</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">SperaC</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span><span style="color:#81A1C1;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D8DEE9;">mrhope</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">hasOwnProperty</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">name</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span><span style="color:#616E88;"> // true</span></span>
<span class="line"><span style="color:#D8DEE9;">mrhope</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">hasOwnProperty</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">toString</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span><span style="color:#616E88;"> // false</span></span></code></pre></div><h2 id="更多介绍" tabindex="-1"><a class="header-anchor" href="#更多介绍"><span>更多介绍</span></a></h2>`,23);function C(h,m){const n=e("RouteLink");return l(),p("div",null,[d,y,t(" more "),F,s("p",null,[a("更系统的介绍详见 "),c(n,{to:"/code/language/js/types/object.html"},{default:r(()=>[a("数据结构 / 对象")]),_:1})])])}const g=o(E,[["render",C],["__file","object.html.vue"]]),v=JSON.parse('{"path":"/code/language/js/guide/object.html","title":"对象","lang":"zh-CN","frontmatter":{"title":"对象","icon":"object","date":"2019-09-17T00:00:00.000Z","category":"JavaScript","tag":["快速上手"],"description":"JavaScript 的对象是一种无序的集合数据类型，它由若干键值对组成。 JavaScript 用一个 {...} 表示一个对象，键值对以 xxx: xxx 形式申明，用 , 隔开。","head":[["meta",{"property":"og:url","content":"https://SperaC.github.io/code/language/js/guide/object.html"}],["meta",{"property":"og:site_name","content":"SperaC"}],["meta",{"property":"og:title","content":"对象"}],["meta",{"property":"og:description","content":"JavaScript 的对象是一种无序的集合数据类型，它由若干键值对组成。 JavaScript 用一个 {...} 表示一个对象，键值对以 xxx: xxx 形式申明，用 , 隔开。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-09T02:42:38.000Z"}],["meta",{"property":"article:author","content":"SperaC"}],["meta",{"property":"article:tag","content":"快速上手"}],["meta",{"property":"article:published_time","content":"2019-09-17T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-09-09T02:42:38.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"对象\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-09-17T00:00:00.000Z\\",\\"dateModified\\":\\"2024-09-09T02:42:38.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"SperaC\\",\\"url\\":\\"https://SperaC.github.io\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://SperaC.github.io/atom.xml","title":"SperaC Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://SperaC.github.io/feed.json","title":"SperaC JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://SperaC.github.io/rss.xml","title":"SperaC RSS Feed"}]]},"headers":[{"level":2,"title":"更多介绍","slug":"更多介绍","link":"#更多介绍","children":[]}],"git":{"createdTime":1591204114000,"updatedTime":1725849758000,"contributors":[{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":5},{"name":"zenghuxin","email":"2388287586@qq.com","commits":1}]},"readingTime":{"minutes":2.59,"words":777},"filePathRelative":"code/language/js/guide/object.md","localizedDate":"2019年9月17日","excerpt":"<p>JavaScript 的对象是一种无序的集合数据类型，它由若干键值对组成。</p>\\n<p>JavaScript 用一个 <code>{...}</code> 表示一个对象，键值对以 <code>xxx: xxx</code> 形式申明，用 <code>,</code> 隔开。</p>\\n","autoDesc":true}');export{g as comp,v as data};
