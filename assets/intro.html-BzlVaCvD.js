import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as n,e,a as o,d as l}from"./app-BlgNmpc-.js";const p={},t=o("p",null,"高阶函数英文叫 Higher-order function。什么是高阶函数? 把函数作为参数传入，这样的函数称为高阶函数。",-1),c=l(`<p>我们以实际代码为例子，一步一步深入概念。</p><h2 id="变量可以指向函数" tabindex="-1"><a class="header-anchor" href="#变量可以指向函数"><span>变量可以指向函数</span></a></h2><p>以 Python 内置的求绝对值的函数 <code>abs()</code> 为例，调用该函数用以下代码:</p><div class="language-py" data-highlighter="shiki" data-ext="py" data-title="py" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#81A1C1;">&gt;&gt;&gt;</span><span style="color:#88C0D0;"> abs</span><span style="color:#ECEFF4;">(</span><span style="color:#81A1C1;">-</span><span style="color:#B48EAD;">10</span><span style="color:#ECEFF4;">)</span></span>
<span class="line"><span style="color:#B48EAD;">10</span></span></code></pre></div><p>但是，如果只写 <code>abs</code> 呢?</p><div class="language-py" data-highlighter="shiki" data-ext="py" data-title="py" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#81A1C1;">&gt;&gt;&gt;</span><span style="color:#88C0D0;"> abs</span></span>
<span class="line"><span style="color:#81A1C1;">&lt;</span><span style="color:#D8DEE9FF;">built</span><span style="color:#81A1C1;">-in</span><span style="color:#D8DEE9FF;"> function </span><span style="color:#88C0D0;">abs</span><span style="color:#81A1C1;">&gt;</span></span></code></pre></div><p>可见，<code>abs(-10)</code> 是函数调用，而 <code>abs</code> 是函数本身。</p><p>要获得函数调用结果，我们可以把结果赋值给变量:</p><div class="language-py" data-highlighter="shiki" data-ext="py" data-title="py" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#81A1C1;">&gt;&gt;&gt;</span><span style="color:#D8DEE9FF;"> x </span><span style="color:#81A1C1;">=</span><span style="color:#88C0D0;"> abs</span><span style="color:#ECEFF4;">(</span><span style="color:#81A1C1;">-</span><span style="color:#B48EAD;">10</span><span style="color:#ECEFF4;">)</span></span>
<span class="line"><span style="color:#81A1C1;">&gt;&gt;&gt;</span><span style="color:#D8DEE9FF;"> x</span></span>
<span class="line"><span style="color:#B48EAD;">10</span></span></code></pre></div><p>但是，如果把函数本身赋值给变量呢?</p><div class="language-py" data-highlighter="shiki" data-ext="py" data-title="py" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#81A1C1;">&gt;&gt;&gt;</span><span style="color:#D8DEE9FF;"> f </span><span style="color:#81A1C1;">=</span><span style="color:#88C0D0;"> abs</span></span>
<span class="line"><span style="color:#81A1C1;">&gt;&gt;&gt;</span><span style="color:#D8DEE9FF;"> f</span></span>
<span class="line"><span style="color:#81A1C1;">&lt;</span><span style="color:#D8DEE9FF;">built</span><span style="color:#81A1C1;">-in</span><span style="color:#D8DEE9FF;"> function </span><span style="color:#88C0D0;">abs</span><span style="color:#81A1C1;">&gt;</span></span></code></pre></div><p>结论: 函数本身也可以赋值给变量，即: 变量可以指向函数。</p><p>如果一个变量指向了一个函数，那么，可否通过该变量来调用这个函数? 用代码验证一下:</p><div class="language-py" data-highlighter="shiki" data-ext="py" data-title="py" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#81A1C1;">&gt;&gt;&gt;</span><span style="color:#D8DEE9FF;"> f </span><span style="color:#81A1C1;">=</span><span style="color:#88C0D0;"> abs</span></span>
<span class="line"><span style="color:#81A1C1;">&gt;&gt;&gt;</span><span style="color:#88C0D0;"> f</span><span style="color:#ECEFF4;">(</span><span style="color:#81A1C1;">-</span><span style="color:#B48EAD;">10</span><span style="color:#ECEFF4;">)</span></span>
<span class="line"><span style="color:#B48EAD;">10</span></span></code></pre></div><p>成功! 说明变量 f 现在已经指向了 <code>abs</code> 函数本身。直接调用 <code>abs()</code> 函数和调用变量 <code>f()</code> 完全相同。</p><h2 id="函数名也是变量" tabindex="-1"><a class="header-anchor" href="#函数名也是变量"><span>函数名也是变量</span></a></h2><p>那么函数名是什么呢? 函数名其实就是指向函数的变量! 对于 <code>abs()</code> 这个函数，完全可以把函数名 <code>abs</code> 看成变量，它指向一个可以计算绝对值的函数!</p><p>如果把 <code>abs</code> 指向其他对象，会有什么情况发生?</p><div class="language-sh" data-highlighter="shiki" data-ext="sh" data-title="sh" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#D8DEE9FF;">&gt;&gt;&gt; </span><span style="color:#88C0D0;">abs</span><span style="color:#A3BE8C;"> =</span><span style="color:#B48EAD;"> 10</span></span>
<span class="line"><span style="color:#D8DEE9FF;">&gt;&gt;&gt; </span><span style="color:#88C0D0;">abs(-10</span><span style="color:#D8DEE9FF;">)</span></span>
<span class="line"><span style="color:#88C0D0;">Traceback</span><span style="color:#D8DEE9FF;"> (most </span><span style="color:#A3BE8C;">recent</span><span style="color:#A3BE8C;"> call</span><span style="color:#A3BE8C;"> last</span><span style="color:#D8DEE9FF;">):</span></span>
<span class="line"><span style="color:#88C0D0;">  File</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">&lt;stdin&gt;</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">,</span><span style="color:#A3BE8C;"> line</span><span style="color:#A3BE8C;"> 1,</span><span style="color:#A3BE8C;"> in</span><span style="color:#81A1C1;"> &lt;</span><span style="color:#A3BE8C;">modul</span><span style="color:#D8DEE9FF;">e</span><span style="color:#81A1C1;">&gt;</span></span>
<span class="line"><span style="color:#88C0D0;">TypeError:</span><span style="color:#ECEFF4;"> &#39;</span><span style="color:#A3BE8C;">int</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;"> object</span><span style="color:#A3BE8C;"> is</span><span style="color:#A3BE8C;"> not</span><span style="color:#A3BE8C;"> callable</span></span></code></pre></div><p>把 <code>abs</code> 指向 <code>10</code> 后，就无法通过 <code>abs(-10)</code> 调用该函数了! 因为 <code>abs</code> 这个变量已经不指向求绝对值函数而是指向一个整数 10!</p><p>当然实际代码绝对不能这么写，这里是为了说明函数名也是变量。要恢复 <code>abs</code> 函数，请重启 Python 交互环境。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>由于 abs 函数实际上是定义在 <code>import builtins</code> 模块中的，所以要让修改 <code>abs</code> 变量的指向在其它模块也生效，要用 <code>import builtins; builtins.abs = 10</code>。</p></div><h2 id="传入函数" tabindex="-1"><a class="header-anchor" href="#传入函数"><span>传入函数</span></a></h2><p>既然变量可以指向函数，函数的参数能接收变量，那么一个函数就可以接收另一个函数作为参数，这种函数就称之为高阶函数。</p><p>一个最简单的高阶函数:</p><div class="language-py" data-highlighter="shiki" data-ext="py" data-title="py" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#81A1C1;">def</span><span style="color:#88C0D0;"> add</span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9;">x</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9;"> y</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9;"> f</span><span style="color:#ECEFF4;">):</span></span>
<span class="line"><span style="color:#81A1C1;">    return</span><span style="color:#88C0D0;"> f</span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9FF;">x</span><span style="color:#ECEFF4;">)</span><span style="color:#81A1C1;"> +</span><span style="color:#88C0D0;"> f</span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9FF;">y</span><span style="color:#ECEFF4;">)</span></span></code></pre></div><p>当我们调用 <code>add(-5, 6, abs)</code> 时，参数 <code>x</code>，<code>y</code> 和 <code>f</code> 分别接收 <code>-5</code>，<code>6</code> 和 <code>abs</code>，根据函数定义，我们可以推导计算过程为:</p><div class="language-py" data-highlighter="shiki" data-ext="py" data-title="py" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#D8DEE9FF;">x </span><span style="color:#81A1C1;">=</span><span style="color:#81A1C1;"> -</span><span style="color:#B48EAD;">5</span></span>
<span class="line"><span style="color:#D8DEE9FF;">y </span><span style="color:#81A1C1;">=</span><span style="color:#B48EAD;"> 6</span></span>
<span class="line"><span style="color:#D8DEE9FF;">f </span><span style="color:#81A1C1;">=</span><span style="color:#88C0D0;"> abs</span></span>
<span class="line"><span style="color:#88C0D0;">f</span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9FF;">x</span><span style="color:#ECEFF4;">)</span><span style="color:#81A1C1;"> +</span><span style="color:#88C0D0;"> f</span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9FF;">y</span><span style="color:#ECEFF4;">)</span><span style="color:#81A1C1;"> ==&gt;</span><span style="color:#88C0D0;"> abs</span><span style="color:#ECEFF4;">(</span><span style="color:#81A1C1;">-</span><span style="color:#B48EAD;">5</span><span style="color:#ECEFF4;">)</span><span style="color:#81A1C1;"> +</span><span style="color:#88C0D0;"> abs</span><span style="color:#ECEFF4;">(</span><span style="color:#B48EAD;">6</span><span style="color:#ECEFF4;">)</span><span style="color:#81A1C1;"> ==&gt;</span><span style="color:#B48EAD;"> 11</span></span>
<span class="line"><span style="color:#81A1C1;">return</span><span style="color:#B48EAD;"> 11</span></span></code></pre></div><p>编写高阶函数，就是让函数的参数能够接收别的函数。</p><h2 id="小结" tabindex="-1"><a class="header-anchor" href="#小结"><span>小结</span></a></h2><p>把函数作为参数传入，这样的函数称为高阶函数，函数式编程就是指这种高度抽象的编程范式</p>`,31);function r(i,d){return a(),n("div",null,[t,e(" more "),c])}const g=s(p,[["render",r],["__file","intro.html.vue"]]),h=JSON.parse('{"path":"/code/language/python/functional-programming/high-order-function/intro.html","title":"介绍","lang":"zh-CN","frontmatter":{"title":"介绍","icon":"info","author":"廖雪峰","date":"2020-05-31T00:00:00.000Z","category":"Python","description":"高阶函数英文叫 Higher-order function。什么是高阶函数? 把函数作为参数传入，这样的函数称为高阶函数。","head":[["meta",{"property":"og:url","content":"https://SperaC.github.io/code/language/python/functional-programming/high-order-function/intro.html"}],["meta",{"property":"og:site_name","content":"SperaC"}],["meta",{"property":"og:title","content":"介绍"}],["meta",{"property":"og:description","content":"高阶函数英文叫 Higher-order function。什么是高阶函数? 把函数作为参数传入，这样的函数称为高阶函数。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-02-06T16:46:58.000Z"}],["meta",{"property":"article:author","content":"廖雪峰"}],["meta",{"property":"article:published_time","content":"2020-05-31T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-02-06T16:46:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"介绍\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-05-31T00:00:00.000Z\\",\\"dateModified\\":\\"2022-02-06T16:46:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"廖雪峰\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://SperaC.github.io/atom.xml","title":"SperaC Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://SperaC.github.io/feed.json","title":"SperaC JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://SperaC.github.io/rss.xml","title":"SperaC RSS Feed"}]]},"headers":[{"level":2,"title":"变量可以指向函数","slug":"变量可以指向函数","link":"#变量可以指向函数","children":[]},{"level":2,"title":"函数名也是变量","slug":"函数名也是变量","link":"#函数名也是变量","children":[]},{"level":2,"title":"传入函数","slug":"传入函数","link":"#传入函数","children":[]},{"level":2,"title":"小结","slug":"小结","link":"#小结","children":[]}],"git":{"createdTime":1591204114000,"updatedTime":1644166018000,"contributors":[{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":5},{"name":"Mister-Hope","email":"zhangbowang1998@gmail.com","commits":1}]},"readingTime":{"minutes":2.42,"words":725},"filePathRelative":"code/language/python/functional-programming/high-order-function/intro.md","localizedDate":"2020年5月31日","excerpt":"<p>高阶函数英文叫 Higher-order function。什么是高阶函数? 把函数作为参数传入，这样的函数称为高阶函数。</p>\\n","autoDesc":true}');export{g as comp,h as data};
