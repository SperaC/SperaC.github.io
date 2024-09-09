import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as l,e,d as s}from"./app-BlgNmpc-.js";const o={},p=s('<p>ES6 标准新增了一种新的函数: Arrow Function (箭头函数)。</p><p>为什么叫 Arrow Function ? 因为它的定义用的就是一个箭头:</p><div class="language-js" data-highlighter="shiki" data-ext="js" data-title="js" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9;">x</span><span style="color:#ECEFF4;">)</span><span style="color:#81A1C1;"> =&gt;</span><span style="color:#D8DEE9;"> x</span><span style="color:#81A1C1;"> *</span><span style="color:#D8DEE9;"> x</span><span style="color:#81A1C1;">;</span></span></code></pre></div>',3),t=s(`<p>上面的箭头函数相当于:</p><div class="language-js" data-highlighter="shiki" data-ext="js" data-title="js" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#81A1C1;">function</span><span style="color:#ECEFF4;"> (</span><span style="color:#D8DEE9;">x</span><span style="color:#ECEFF4;">)</span><span style="color:#ECEFF4;"> {</span></span>
<span class="line"><span style="color:#81A1C1;">  return</span><span style="color:#D8DEE9;"> x</span><span style="color:#81A1C1;"> *</span><span style="color:#D8DEE9;"> x</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span></span></code></pre></div><p>箭头函数相当于匿名函数，并且简化了函数定义。箭头函数有两种格式，一种像上面的，只包含一个表达式，连 <code>{ ... }</code> 和 <code>return</code> 都省略掉了。还有一种可以包含多条语句，这时候就不能省略 <code>{ ... }</code> 和 <code>return</code>:</p><div class="language-js" data-highlighter="shiki" data-ext="js" data-title="js" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9;">x</span><span style="color:#ECEFF4;">)</span><span style="color:#81A1C1;"> =&gt;</span><span style="color:#ECEFF4;"> {</span></span>
<span class="line"><span style="color:#81A1C1;">  if</span><span style="color:#D8DEE9FF;"> (</span><span style="color:#D8DEE9;">x</span><span style="color:#81A1C1;"> &gt;</span><span style="color:#B48EAD;"> 0</span><span style="color:#D8DEE9FF;">) </span><span style="color:#81A1C1;">return</span><span style="color:#D8DEE9;"> x</span><span style="color:#81A1C1;"> *</span><span style="color:#D8DEE9;"> x</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#81A1C1;">  else</span><span style="color:#81A1C1;"> return</span><span style="color:#81A1C1;"> -</span><span style="color:#D8DEE9;">x</span><span style="color:#81A1C1;"> *</span><span style="color:#D8DEE9;"> x</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span><span style="color:#81A1C1;">;</span></span></code></pre></div><p>如果参数不是一个，就需要用括号 <code>()</code> 括起来:</p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#616E88;">// 两个参数:</span></span>
<span class="line"><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9;">x</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9;"> y</span><span style="color:#ECEFF4;">)</span><span style="color:#81A1C1;"> =&gt;</span><span style="color:#D8DEE9;"> x</span><span style="color:#81A1C1;"> *</span><span style="color:#D8DEE9;"> x</span><span style="color:#81A1C1;"> +</span><span style="color:#D8DEE9;"> y</span><span style="color:#81A1C1;"> *</span><span style="color:#D8DEE9;"> y</span></span>
<span class="line"></span>
<span class="line"><span style="color:#616E88;">// 无参数:</span></span>
<span class="line"><span style="color:#ECEFF4;">()</span><span style="color:#81A1C1;"> =&gt;</span><span style="color:#B48EAD;"> 3.14</span></span>
<span class="line"></span>
<span class="line"><span style="color:#616E88;">// 可变参数:</span></span>
<span class="line"><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9;">x</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9;"> y</span><span style="color:#ECEFF4;">,</span><span style="color:#81A1C1;"> ...</span><span style="color:#D8DEE9;">rest</span><span style="color:#ECEFF4;">)</span><span style="color:#81A1C1;"> =&gt;</span><span style="color:#ECEFF4;"> {</span></span>
<span class="line"><span style="color:#81A1C1;">  let</span><span style="color:#D8DEE9;"> i</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#81A1C1;">  let</span><span style="color:#D8DEE9;"> sum</span><span style="color:#81A1C1;"> =</span><span style="color:#D8DEE9;"> x</span><span style="color:#81A1C1;"> +</span><span style="color:#D8DEE9;"> y</span><span style="color:#81A1C1;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#81A1C1;">  for</span><span style="color:#D8DEE9FF;"> (</span><span style="color:#D8DEE9;">i</span><span style="color:#81A1C1;"> =</span><span style="color:#B48EAD;"> 0</span><span style="color:#81A1C1;">;</span><span style="color:#D8DEE9;"> i</span><span style="color:#81A1C1;"> &lt;</span><span style="color:#D8DEE9;"> rest</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9FF;">length</span><span style="color:#81A1C1;">;</span><span style="color:#D8DEE9;"> i</span><span style="color:#81A1C1;">++</span><span style="color:#D8DEE9FF;">)</span></span>
<span class="line"><span style="color:#D8DEE9;">    sum</span><span style="color:#81A1C1;"> +=</span><span style="color:#D8DEE9;"> rest</span><span style="color:#D8DEE9FF;">[</span><span style="color:#D8DEE9;">i</span><span style="color:#D8DEE9FF;">]</span><span style="color:#81A1C1;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#81A1C1;">  return</span><span style="color:#D8DEE9;"> sum</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果要返回一个对象，就要注意，如果是单表达式，这么写的话会报错:</p><div class="language-js" data-highlighter="shiki" data-ext="js" data-title="js" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#616E88;">// SyntaxError:</span></span>
<span class="line"><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9;">x</span><span style="color:#ECEFF4;">)</span><span style="color:#81A1C1;"> =&gt;</span><span style="color:#ECEFF4;"> {</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  foo</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9;"> x</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span><span style="color:#81A1C1;">;</span></span></code></pre></div><p>因为和函数体的 <code>{ ... }</code> 有语法冲突，所以要改为:</p><div class="language-js" data-highlighter="shiki" data-ext="js" data-title="js" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#616E88;">// ok:</span></span>
<span class="line"><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9;">x</span><span style="color:#ECEFF4;">)</span><span style="color:#81A1C1;"> =&gt;</span><span style="color:#D8DEE9FF;"> (</span><span style="color:#ECEFF4;">{</span><span style="color:#88C0D0;"> foo</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9;"> x</span><span style="color:#ECEFF4;"> }</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span></code></pre></div><h2 id="箭头函数的-this" tabindex="-1"><a class="header-anchor" href="#箭头函数的-this"><span>箭头函数的 this</span></a></h2><p>箭头函数看上去是匿名函数的一种简写，但实际上，箭头函数和匿名函数有个明显的区别: 箭头函数内部的 <code>this</code> 是词法作用域，由上下文确定。</p><p>回顾前面的例子，由于 JavaScript 函数对 <code>this</code> 绑定的错误处理，下面的例子无法得到预期结果:</p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#81A1C1;">const</span><span style="color:#D8DEE9;"> obj</span><span style="color:#81A1C1;"> =</span><span style="color:#ECEFF4;"> {</span></span>
<span class="line"><span style="color:#88C0D0;">  birth</span><span style="color:#ECEFF4;">:</span><span style="color:#B48EAD;"> 1990</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#88C0D0;">  getAge</span><span style="color:#ECEFF4;">()</span><span style="color:#ECEFF4;"> {</span></span>
<span class="line"><span style="color:#81A1C1;">    const</span><span style="color:#D8DEE9;"> b</span><span style="color:#81A1C1;"> =</span><span style="color:#81A1C1;"> this</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">birth</span><span style="color:#81A1C1;">;</span><span style="color:#616E88;"> // 1990</span></span>
<span class="line"><span style="color:#81A1C1;">    const</span><span style="color:#88C0D0;"> fn</span><span style="color:#81A1C1;"> =</span><span style="color:#81A1C1;"> function</span><span style="color:#ECEFF4;"> ()</span><span style="color:#ECEFF4;"> {</span></span>
<span class="line"><span style="color:#81A1C1;">      return</span><span style="color:#81A1C1;"> new</span><span style="color:#88C0D0;"> Date</span><span style="color:#D8DEE9FF;">()</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">getFullYear</span><span style="color:#D8DEE9FF;">() </span><span style="color:#81A1C1;">-</span><span style="color:#81A1C1;"> this</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">birth</span><span style="color:#81A1C1;">;</span><span style="color:#616E88;"> // this 指向 window 或 undefined</span></span>
<span class="line"><span style="color:#ECEFF4;">    }</span><span style="color:#81A1C1;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#81A1C1;">    return</span><span style="color:#88C0D0;"> fn</span><span style="color:#D8DEE9FF;">()</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#ECEFF4;">  },</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span><span style="color:#81A1C1;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在，箭头函数完全修复了 <code>this</code> 的指向，<code>this</code> 总是指向词法作用域，也就是外层调用者 <code>obj</code>:</p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#81A1C1;">const</span><span style="color:#D8DEE9;"> obj</span><span style="color:#81A1C1;"> =</span><span style="color:#ECEFF4;"> {</span></span>
<span class="line"><span style="color:#88C0D0;">  birth</span><span style="color:#ECEFF4;">:</span><span style="color:#B48EAD;"> 1990</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#88C0D0;">  getAge</span><span style="color:#ECEFF4;">()</span><span style="color:#ECEFF4;"> {</span></span>
<span class="line"><span style="color:#81A1C1;">    const</span><span style="color:#D8DEE9;"> b</span><span style="color:#81A1C1;"> =</span><span style="color:#81A1C1;"> this</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">birth</span><span style="color:#81A1C1;">;</span><span style="color:#616E88;"> // 1990</span></span>
<span class="line"><span style="color:#81A1C1;">    const</span><span style="color:#88C0D0;"> fn</span><span style="color:#81A1C1;"> =</span><span style="color:#ECEFF4;"> ()</span><span style="color:#81A1C1;"> =&gt;</span><span style="color:#81A1C1;"> new</span><span style="color:#88C0D0;"> Date</span><span style="color:#D8DEE9FF;">()</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">getFullYear</span><span style="color:#D8DEE9FF;">() </span><span style="color:#81A1C1;">-</span><span style="color:#81A1C1;"> this</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">birth</span><span style="color:#81A1C1;">;</span><span style="color:#616E88;"> // this 指向 obj 对象</span></span>
<span class="line"></span>
<span class="line"><span style="color:#81A1C1;">    return</span><span style="color:#88C0D0;"> fn</span><span style="color:#D8DEE9FF;">()</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#ECEFF4;">  },</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span><span style="color:#81A1C1;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D8DEE9;">obj</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">getAge</span><span style="color:#D8DEE9FF;">()</span><span style="color:#81A1C1;">;</span><span style="color:#616E88;"> // 25</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果使用箭头函数，以前的那种 hack 写法:</p><div class="language-js" data-highlighter="shiki" data-ext="js" data-title="js" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#81A1C1;">const</span><span style="color:#D8DEE9;"> that</span><span style="color:#81A1C1;"> =</span><span style="color:#81A1C1;"> this;</span></span></code></pre></div><p>就不再需要了。</p><p>由于 <code>this</code> 在箭头函数中已经按照词法作用域绑定了，所以，用 <code>call()</code> 或者 <code>apply()</code> 调用箭头函数时，无法对 <code>this</code> 进行绑定，即传入的第一个参数被忽略:</p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#81A1C1;">const</span><span style="color:#D8DEE9;"> obj</span><span style="color:#81A1C1;"> =</span><span style="color:#ECEFF4;"> {</span></span>
<span class="line"><span style="color:#88C0D0;">  birth</span><span style="color:#ECEFF4;">:</span><span style="color:#B48EAD;"> 1990</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#88C0D0;">  getAge</span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9;">year</span><span style="color:#ECEFF4;">)</span><span style="color:#ECEFF4;"> {</span></span>
<span class="line"><span style="color:#81A1C1;">    const</span><span style="color:#D8DEE9;"> b</span><span style="color:#81A1C1;"> =</span><span style="color:#81A1C1;"> this</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">birth</span><span style="color:#81A1C1;">;</span><span style="color:#616E88;"> // 1990</span></span>
<span class="line"><span style="color:#81A1C1;">    const</span><span style="color:#88C0D0;"> fn</span><span style="color:#81A1C1;"> =</span><span style="color:#ECEFF4;"> (</span><span style="color:#D8DEE9;">y</span><span style="color:#ECEFF4;">)</span><span style="color:#81A1C1;"> =&gt;</span><span style="color:#D8DEE9;"> y</span><span style="color:#81A1C1;"> -</span><span style="color:#81A1C1;"> this</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">birth</span><span style="color:#81A1C1;">;</span><span style="color:#616E88;"> // this.birth 仍是 1990</span></span>
<span class="line"></span>
<span class="line"><span style="color:#81A1C1;">    return</span><span style="color:#D8DEE9;"> fn</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">call</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">{</span><span style="color:#88C0D0;"> birth</span><span style="color:#ECEFF4;">:</span><span style="color:#B48EAD;"> 2000</span><span style="color:#ECEFF4;"> },</span><span style="color:#D8DEE9;"> year</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#ECEFF4;">  },</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span><span style="color:#81A1C1;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D8DEE9;">obj</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">getAge</span><span style="color:#D8DEE9FF;">(</span><span style="color:#B48EAD;">2015</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span><span style="color:#616E88;"> // 25</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,21);function c(r,i){return a(),l("div",null,[p,e(" more "),t])}const d=n(o,[["render",c],["__file","arrow-function.html.vue"]]),C=JSON.parse('{"path":"/code/language/js/function/arrow-function.html","title":"箭头函数","lang":"zh-CN","frontmatter":{"title":"箭头函数","icon":"arrow","date":"2019-10-03T00:00:00.000Z","category":"JavaScript","description":"ES6 标准新增了一种新的函数: Arrow Function (箭头函数)。 为什么叫 Arrow Function ? 因为它的定义用的就是一个箭头:","head":[["meta",{"property":"og:url","content":"https://SperaC.github.io/code/language/js/function/arrow-function.html"}],["meta",{"property":"og:site_name","content":"SperaC"}],["meta",{"property":"og:title","content":"箭头函数"}],["meta",{"property":"og:description","content":"ES6 标准新增了一种新的函数: Arrow Function (箭头函数)。 为什么叫 Arrow Function ? 因为它的定义用的就是一个箭头:"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-02-06T16:46:58.000Z"}],["meta",{"property":"article:author","content":"SperaC"}],["meta",{"property":"article:published_time","content":"2019-10-03T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-02-06T16:46:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"箭头函数\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-10-03T00:00:00.000Z\\",\\"dateModified\\":\\"2022-02-06T16:46:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"SperaC\\",\\"url\\":\\"https://SperaC.github.io\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://SperaC.github.io/atom.xml","title":"SperaC Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://SperaC.github.io/feed.json","title":"SperaC JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://SperaC.github.io/rss.xml","title":"SperaC RSS Feed"}]]},"headers":[{"level":2,"title":"箭头函数的 this","slug":"箭头函数的-this","link":"#箭头函数的-this","children":[]}],"git":{"createdTime":1591204114000,"updatedTime":1644166018000,"contributors":[{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":2}]},"readingTime":{"minutes":1.92,"words":576},"filePathRelative":"code/language/js/function/arrow-function.md","localizedDate":"2019年10月3日","excerpt":"<p>ES6 标准新增了一种新的函数: Arrow Function (箭头函数)。</p>\\n<p>为什么叫 Arrow Function ? 因为它的定义用的就是一个箭头:</p>\\n<div class=\\"language-js\\" data-highlighter=\\"shiki\\" data-ext=\\"js\\" data-title=\\"js\\" style=\\"background-color:#2e3440ff;color:#d8dee9ff\\"><pre class=\\"shiki nord vp-code\\"><code><span class=\\"line\\"><span style=\\"color:#ECEFF4\\">(</span><span style=\\"color:#D8DEE9\\">x</span><span style=\\"color:#ECEFF4\\">)</span><span style=\\"color:#81A1C1\\"> =&gt;</span><span style=\\"color:#D8DEE9\\"> x</span><span style=\\"color:#81A1C1\\"> *</span><span style=\\"color:#D8DEE9\\"> x</span><span style=\\"color:#81A1C1\\">;</span></span></code></pre>\\n</div>","autoDesc":true}');export{d as comp,C as data};
