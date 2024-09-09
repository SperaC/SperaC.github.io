import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as l,e,a as s,d as o}from"./app-BlgNmpc-.js";const p={},t=s("div",{class:"hint-container tip"},[s("p",{class:"hint-container-title"},"章节过时"),s("p",null,"而且目前浏览器 API 已经基本统一，除非兼容旧版本 IE，否则无需针对不同浏览器写不同的代码。")],-1),c=o(`<p>直接使用浏览器提供的 API 对 DOM 结构进行修改，不但代码复杂，而且要针对浏览器写不同的代码。</p><p>有了 jQuery，我们就专注于操作 jQuery 对象本身，底层的 DOM 操作由 jQuery 完成就可以了，这样一来，修改 DOM 也大大简化了。</p><h2 id="添加-dom" tabindex="-1"><a class="header-anchor" href="#添加-dom"><span>添加 DOM</span></a></h2><p>要添加新的 DOM 节点，除了通过 jQuery 的 <code>html()</code> 这种暴力方法外，还可以用 <code>append()</code> 方法，例如:</p><div class="language-html" data-highlighter="shiki" data-ext="html" data-title="html" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#81A1C1;">&lt;div</span><span style="color:#8FBCBB;"> id</span><span style="color:#ECEFF4;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">test-div</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#81A1C1;">&gt;</span></span>
<span class="line"><span style="color:#81A1C1;">  &lt;ul&gt;</span></span>
<span class="line"><span style="color:#81A1C1;">    &lt;li&gt;&lt;span&gt;</span><span style="color:#D8DEE9FF;">JavaScript</span><span style="color:#81A1C1;">&lt;/span&gt;&lt;/li&gt;</span></span>
<span class="line"><span style="color:#81A1C1;">    &lt;li&gt;&lt;span&gt;</span><span style="color:#D8DEE9FF;">Python</span><span style="color:#81A1C1;">&lt;/span&gt;&lt;/li&gt;</span></span>
<span class="line"><span style="color:#81A1C1;">    &lt;li&gt;&lt;span&gt;</span><span style="color:#D8DEE9FF;">Swift</span><span style="color:#81A1C1;">&lt;/span&gt;&lt;/li&gt;</span></span>
<span class="line"><span style="color:#81A1C1;">  &lt;/ul&gt;</span></span>
<span class="line"><span style="color:#81A1C1;">&lt;/div&gt;</span></span></code></pre></div><p>如何向列表新增一个语言? 首先要拿到 <code>&lt;ul&gt;</code> 节点:</p><div class="language-js" data-highlighter="shiki" data-ext="js" data-title="js" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#81A1C1;">const</span><span style="color:#D8DEE9;"> ul</span><span style="color:#81A1C1;"> =</span><span style="color:#88C0D0;"> $</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">#test-div&gt;ul</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span></code></pre></div><p>然后，调用 <code>append()</code> 传入 HTML 片段:</p><div class="language-js" data-highlighter="shiki" data-ext="js" data-title="js" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#D8DEE9;">ul</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">append</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">&lt;li&gt;&lt;span&gt;Haskell&lt;/span&gt;&lt;/li&gt;</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span></code></pre></div><p>除了接受字符串，<code>append()</code> 还可以传入原始的 DOM 对象，jQuery 对象和函数对象:</p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#616E88;">// 创建DOM对象:</span></span>
<span class="line"><span style="color:#81A1C1;">const</span><span style="color:#D8DEE9;"> ps</span><span style="color:#81A1C1;"> =</span><span style="color:#D8DEE9;"> document</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">createElement</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">li</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#D8DEE9;">ps</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">innerHTML</span><span style="color:#81A1C1;"> =</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">&lt;span&gt;Pascal&lt;/span&gt;</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#616E88;">// 添加DOM对象:</span></span>
<span class="line"><span style="color:#D8DEE9;">ul</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">append</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">ps</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#616E88;">// 添加jQuery对象:</span></span>
<span class="line"><span style="color:#D8DEE9;">ul</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">append</span><span style="color:#D8DEE9FF;">(</span><span style="color:#88C0D0;">$</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">#scheme</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#D8DEE9FF;">))</span><span style="color:#81A1C1;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#616E88;">// 添加函数对象:</span></span>
<span class="line"><span style="color:#D8DEE9;">ul</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">append</span><span style="color:#D8DEE9FF;">(</span><span style="color:#81A1C1;">function</span><span style="color:#ECEFF4;"> (</span><span style="color:#D8DEE9;">index</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9;"> html</span><span style="color:#ECEFF4;">)</span><span style="color:#ECEFF4;"> {</span></span>
<span class="line"><span style="color:#81A1C1;">  return</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">&lt;li&gt;&lt;span&gt;Language - </span><span style="color:#ECEFF4;">&quot;</span><span style="color:#81A1C1;"> +</span><span style="color:#D8DEE9;"> index</span><span style="color:#81A1C1;"> +</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">&lt;/span&gt;&lt;/li&gt;</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>传入函数时，要求返回一个字符串、DOM 对象或者 jQuery 对象。因为 jQuery 的 <code>append()</code> 可能作用于一组 DOM 节点，只有传入函数才能针对每个 DOM 生成不同的子节点。</p><p><code>append()</code> 把 DOM 添加到最后，<code>prepend()</code> 则把 DOM 添加到最前。</p><p>另外注意，如果要添加的 DOM 节点已经存在于 HTML 文档中，它会首先从文档移除，然后再添加，也就是说，用 <code>append()</code>，您可以移动一个 DOM 节点。</p><p>如果要把新节点插入到指定位置，例如，JavaScript 和 Python 之间，那么，可以先定位到 JavaScript，然后用 <code>after()</code> 方法:</p><div class="language-js" data-highlighter="shiki" data-ext="js" data-title="js" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#81A1C1;">const</span><span style="color:#D8DEE9;"> js</span><span style="color:#81A1C1;"> =</span><span style="color:#88C0D0;"> $</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">#test-div&gt;ul&gt;li:first-child</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#D8DEE9;">js</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">after</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">&lt;li&gt;&lt;span&gt;Lua&lt;/span&gt;&lt;/li&gt;</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span></code></pre></div><p>也就是说，同级节点可以用 <code>after()</code> 或者 <code>before()</code> 方法。</p><h2 id="删除节点" tabindex="-1"><a class="header-anchor" href="#删除节点"><span>删除节点</span></a></h2><p>要删除 DOM 节点，拿到 jQuery 对象后直接调用 <code>remove()</code> 方法就可以了。如果 jQuery 对象包含若干 DOM 节点，实际上可以一次删除多个 DOM 节点:</p><div class="language-js" data-highlighter="shiki" data-ext="js" data-title="js" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#81A1C1;">const</span><span style="color:#D8DEE9;"> li</span><span style="color:#81A1C1;"> =</span><span style="color:#88C0D0;"> $</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">#test-div&gt;ul&gt;li</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#D8DEE9;">li</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">remove</span><span style="color:#D8DEE9FF;">()</span><span style="color:#81A1C1;">;</span><span style="color:#616E88;"> // 所有&lt;li&gt;全被删除</span></span></code></pre></div>`,20);function r(i,d){return n(),l("div",null,[t,e(" more "),c])}const F=a(p,[["render",r],["__file","modify-dom.html.vue"]]),D=JSON.parse('{"path":"/code/website/jQuery/modify-dom.html","title":"修改 DOM 结构","lang":"zh-CN","frontmatter":{"title":"修改 DOM 结构","icon":"edit","date":"2019-11-03T00:00:00.000Z","category":"jQuery","description":"章节过时 而且目前浏览器 API 已经基本统一，除非兼容旧版本 IE，否则无需针对不同浏览器写不同的代码。","head":[["meta",{"property":"og:url","content":"https://SperaC.github.io/code/website/jQuery/modify-dom.html"}],["meta",{"property":"og:site_name","content":"SperaC"}],["meta",{"property":"og:title","content":"修改 DOM 结构"}],["meta",{"property":"og:description","content":"章节过时 而且目前浏览器 API 已经基本统一，除非兼容旧版本 IE，否则无需针对不同浏览器写不同的代码。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-02-12T05:50:30.000Z"}],["meta",{"property":"article:author","content":"SperaC"}],["meta",{"property":"article:published_time","content":"2019-11-03T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-02-12T05:50:30.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"修改 DOM 结构\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-11-03T00:00:00.000Z\\",\\"dateModified\\":\\"2022-02-12T05:50:30.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"SperaC\\",\\"url\\":\\"https://SperaC.github.io\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://SperaC.github.io/atom.xml","title":"SperaC Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://SperaC.github.io/feed.json","title":"SperaC JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://SperaC.github.io/rss.xml","title":"SperaC RSS Feed"}]]},"headers":[{"level":2,"title":"添加 DOM","slug":"添加-dom","link":"#添加-dom","children":[]},{"level":2,"title":"删除节点","slug":"删除节点","link":"#删除节点","children":[]}],"git":{"createdTime":1591204114000,"updatedTime":1644645030000,"contributors":[{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":1}]},"readingTime":{"minutes":1.93,"words":580},"filePathRelative":"code/website/jQuery/modify-dom.md","localizedDate":"2019年11月3日","excerpt":"<div class=\\"hint-container tip\\">\\n<p class=\\"hint-container-title\\">章节过时</p>\\n<p>而且目前浏览器 API 已经基本统一，除非兼容旧版本 IE，否则无需针对不同浏览器写不同的代码。</p>\\n</div>\\n","autoDesc":true}');export{F as comp,D as data};
