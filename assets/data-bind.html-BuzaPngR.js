import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as e,c as o,e as p,a as s,f as a,d as l}from"./app-BlgNmpc-.js";const t={},c=s("p",null,[a("WXML 中的动态数据均来自对应 "),s("code",null,"Page"),a(" 的 "),s("code",null,"data"),a("。")],-1),r=l(`<h2 id="简单绑定" tabindex="-1"><a class="header-anchor" href="#简单绑定"><span>简单绑定</span></a></h2><p>数据绑定使用 Mustache 语法(双大括号)将变量包起来，可以作用于:</p><h3 id="内容" tabindex="-1"><a class="header-anchor" href="#内容"><span>内容</span></a></h3><div class="language-xml" data-highlighter="shiki" data-ext="xml" data-title="xml" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#81A1C1;">&lt;view&gt;</span><span style="color:#D8DEE9FF;"> {{ message }} </span><span style="color:#81A1C1;">&lt;/view&gt;</span></span></code></pre></div><div class="language-js" data-highlighter="shiki" data-ext="js" data-title="js" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#88C0D0;">Page</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#88C0D0;">  data</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;"> {</span></span>
<span class="line"><span style="color:#88C0D0;">    message</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">Hello MINA!</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#ECEFF4;">  },</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span></code></pre></div><h3 id="组件属性-需要在双引号之内" tabindex="-1"><a class="header-anchor" href="#组件属性-需要在双引号之内"><span>组件属性(需要在双引号之内)</span></a></h3><div class="language-xml" data-highlighter="shiki" data-ext="xml" data-title="xml" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#81A1C1;">&lt;view</span><span style="color:#8FBCBB;"> id</span><span style="color:#D8DEE9FF;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">item-{{id}}</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#81A1C1;">&gt;</span><span style="color:#81A1C1;"> &lt;/view&gt;</span></span></code></pre></div><div class="language-js" data-highlighter="shiki" data-ext="js" data-title="js" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#88C0D0;">Page</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#88C0D0;">  data</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;"> {</span></span>
<span class="line"><span style="color:#88C0D0;">    id</span><span style="color:#ECEFF4;">:</span><span style="color:#B48EAD;"> 0</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#ECEFF4;">  },</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span></code></pre></div><h3 id="控制属性-需要在双引号之内" tabindex="-1"><a class="header-anchor" href="#控制属性-需要在双引号之内"><span>控制属性(需要在双引号之内)</span></a></h3><div class="language-xml" data-highlighter="shiki" data-ext="xml" data-title="xml" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#81A1C1;">&lt;view</span><span style="color:#8FBCBB;"> wx</span><span style="color:#ECEFF4;">:</span><span style="color:#8FBCBB;">if</span><span style="color:#D8DEE9FF;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">{{condition}}</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#81A1C1;">&gt;</span><span style="color:#81A1C1;"> &lt;/view&gt;</span></span></code></pre></div><div class="language-js" data-highlighter="shiki" data-ext="js" data-title="js" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#88C0D0;">Page</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#88C0D0;">  data</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;"> {</span></span>
<span class="line"><span style="color:#88C0D0;">    condition</span><span style="color:#ECEFF4;">:</span><span style="color:#81A1C1;"> true</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#ECEFF4;">  },</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span></code></pre></div><h3 id="关键字-需要在双引号之内" tabindex="-1"><a class="header-anchor" href="#关键字-需要在双引号之内"><span>关键字(需要在双引号之内)</span></a></h3><ul><li><p><code>true</code>: <code>boolean</code> 类型的 <code>true</code>，代表真值。</p></li><li><p><code>false</code>: <code>boolean</code> 类型的 <code>false</code>，代表假值。</p></li></ul><div class="language-js" data-highlighter="shiki" data-ext="js" data-title="js" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#81A1C1;">&lt;checkbox</span><span style="color:#8FBCBB;"> checked</span><span style="color:#81A1C1;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">{{false}}</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#81A1C1;">&gt;</span><span style="color:#81A1C1;"> &lt;/checkbox&gt;</span></span></code></pre></div><div class="hint-container caution"><p class="hint-container-title">警告</p><p>不要直接写 <code>checked=&quot;false&quot;</code>，其计算结果是一个字符串，转成 <code>boolean</code> 类型后代表真值。</p></div><h2 id="运算" tabindex="-1"><a class="header-anchor" href="#运算"><span>运算</span></a></h2>`,16),i=s("div",null,[s("p",null,[a("可以在 "),s("code",{"v-pre":""},"{{ }}"),a(" 内进行简单的运算，支持的有如下几种方式:")])],-1),d=l(`<h3 id="三元运算" tabindex="-1"><a class="header-anchor" href="#三元运算"><span>三元运算</span></a></h3><div class="language-xml" data-highlighter="shiki" data-ext="xml" data-title="xml" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#81A1C1;">&lt;view</span><span style="color:#8FBCBB;"> hidden</span><span style="color:#D8DEE9FF;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">{{flag ? true : false}}</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#81A1C1;">&gt;</span><span style="color:#D8DEE9FF;"> Hidden </span><span style="color:#81A1C1;">&lt;/view&gt;</span></span></code></pre></div><h3 id="算数运算" tabindex="-1"><a class="header-anchor" href="#算数运算"><span>算数运算</span></a></h3><div class="language-xml" data-highlighter="shiki" data-ext="xml" data-title="xml" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#81A1C1;">&lt;view&gt;</span><span style="color:#D8DEE9FF;"> {{a + b}} + {{c}} + d </span><span style="color:#81A1C1;">&lt;/view&gt;</span></span></code></pre></div><div class="language-js" data-highlighter="shiki" data-ext="js" data-title="js" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#88C0D0;">Page</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#88C0D0;">  data</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;"> {</span></span>
<span class="line"><span style="color:#88C0D0;">    a</span><span style="color:#ECEFF4;">:</span><span style="color:#B48EAD;"> 1</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#88C0D0;">    b</span><span style="color:#ECEFF4;">:</span><span style="color:#B48EAD;"> 2</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#88C0D0;">    c</span><span style="color:#ECEFF4;">:</span><span style="color:#B48EAD;"> 3</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#ECEFF4;">  },</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span></code></pre></div><p><code>view</code> 中的内容为 <code>3 + 3 + d</code>。</p><h3 id="逻辑判断" tabindex="-1"><a class="header-anchor" href="#逻辑判断"><span>逻辑判断</span></a></h3><div class="language-xml" data-highlighter="shiki" data-ext="xml" data-title="xml" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#81A1C1;">&lt;view</span><span style="color:#8FBCBB;"> wx</span><span style="color:#ECEFF4;">:</span><span style="color:#8FBCBB;">if</span><span style="color:#D8DEE9FF;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">{{length &gt; 5}}</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#81A1C1;">&gt;</span><span style="color:#81A1C1;"> &lt;/view&gt;</span></span></code></pre></div><h3 id="字符串运算" tabindex="-1"><a class="header-anchor" href="#字符串运算"><span>字符串运算</span></a></h3><div class="language-xml" data-highlighter="shiki" data-ext="xml" data-title="xml" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#81A1C1;">&lt;view&gt;</span><span style="color:#D8DEE9FF;">{{&quot;hello&quot; + name}}</span><span style="color:#81A1C1;">&lt;/view&gt;</span></span></code></pre></div><div class="language-js" data-highlighter="shiki" data-ext="js" data-title="js" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#88C0D0;">Page</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#88C0D0;">  data</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;"> {</span></span>
<span class="line"><span style="color:#88C0D0;">    name</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">MINA</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#ECEFF4;">  },</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span></code></pre></div><h3 id="数据路径运算" tabindex="-1"><a class="header-anchor" href="#数据路径运算"><span>数据路径运算</span></a></h3><div class="language-xml" data-highlighter="shiki" data-ext="xml" data-title="xml" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#81A1C1;">&lt;view&gt;</span><span style="color:#D8DEE9FF;">{{object.key}} {{array[0]}}</span><span style="color:#81A1C1;">&lt;/view&gt;</span></span></code></pre></div><div class="language-js" data-highlighter="shiki" data-ext="js" data-title="js" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#88C0D0;">Page</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#88C0D0;">  data</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;"> {</span></span>
<span class="line"><span style="color:#88C0D0;">    object</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;"> {</span></span>
<span class="line"><span style="color:#88C0D0;">      key</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">Hello </span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#ECEFF4;">    },</span></span>
<span class="line"><span style="color:#88C0D0;">    array</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9FF;"> [</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">MINA</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#D8DEE9FF;">]</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#ECEFF4;">  },</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span></code></pre></div><h2 id="组合" tabindex="-1"><a class="header-anchor" href="#组合"><span>组合</span></a></h2><p>也可以在 Mustache 内直接进行组合，构成新的对象或者数组。</p><h3 id="数组" tabindex="-1"><a class="header-anchor" href="#数组"><span>数组</span></a></h3><div class="language-xml" data-highlighter="shiki" data-ext="xml" data-title="xml" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#81A1C1;">&lt;view</span><span style="color:#8FBCBB;"> wx</span><span style="color:#ECEFF4;">:</span><span style="color:#8FBCBB;">for</span><span style="color:#D8DEE9FF;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">{{[zero, 1, 2, 3, 4]}}</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#81A1C1;">&gt;</span><span style="color:#D8DEE9FF;"> {{item}} </span><span style="color:#81A1C1;">&lt;/view&gt;</span></span></code></pre></div><div class="language-js" data-highlighter="shiki" data-ext="js" data-title="js" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#88C0D0;">Page</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#88C0D0;">  data</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;"> {</span></span>
<span class="line"><span style="color:#88C0D0;">    zero</span><span style="color:#ECEFF4;">:</span><span style="color:#B48EAD;"> 0</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#ECEFF4;">  },</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span></code></pre></div><p>最终组合成数组 <code>[0, 1, 2, 3, 4]</code>。</p><h3 id="对象" tabindex="-1"><a class="header-anchor" href="#对象"><span>对象</span></a></h3><div class="language-xml" data-highlighter="shiki" data-ext="xml" data-title="xml" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#81A1C1;">&lt;template</span><span style="color:#8FBCBB;"> is</span><span style="color:#D8DEE9FF;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">objectCombine</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#8FBCBB;"> data</span><span style="color:#D8DEE9FF;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">{{for: a, bar: b}}</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#81A1C1;">&gt;&lt;/template&gt;</span></span></code></pre></div><div class="language-js" data-highlighter="shiki" data-ext="js" data-title="js" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#88C0D0;">Page</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#88C0D0;">  data</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;"> {</span></span>
<span class="line"><span style="color:#88C0D0;">    a</span><span style="color:#ECEFF4;">:</span><span style="color:#B48EAD;"> 1</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#88C0D0;">    b</span><span style="color:#ECEFF4;">:</span><span style="color:#B48EAD;"> 2</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#ECEFF4;">  },</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span></code></pre></div><p>最终组合成的对象是 <code>{for: 1, bar: 2}</code></p><p>也可以用扩展运算符 <code>...</code> 来将一个对象展开</p><div class="language-xml" data-highlighter="shiki" data-ext="xml" data-title="xml" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#81A1C1;">&lt;template</span><span style="color:#8FBCBB;"> is</span><span style="color:#D8DEE9FF;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">objectCombine</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#8FBCBB;"> data</span><span style="color:#D8DEE9FF;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">{{...obj1, ...obj2, e: 5}}</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#81A1C1;">&gt;&lt;/template&gt;</span></span></code></pre></div><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#88C0D0;">Page</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#88C0D0;">  data</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;"> {</span></span>
<span class="line"><span style="color:#88C0D0;">    obj1</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;"> {</span></span>
<span class="line"><span style="color:#88C0D0;">      a</span><span style="color:#ECEFF4;">:</span><span style="color:#B48EAD;"> 1</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#88C0D0;">      b</span><span style="color:#ECEFF4;">:</span><span style="color:#B48EAD;"> 2</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#ECEFF4;">    },</span></span>
<span class="line"><span style="color:#88C0D0;">    obj2</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;"> {</span></span>
<span class="line"><span style="color:#88C0D0;">      c</span><span style="color:#ECEFF4;">:</span><span style="color:#B48EAD;"> 3</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#88C0D0;">      d</span><span style="color:#ECEFF4;">:</span><span style="color:#B48EAD;"> 4</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#ECEFF4;">    },</span></span>
<span class="line"><span style="color:#ECEFF4;">  },</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最终组合成的对象是 <code>{a: 1, b: 2, c: 3, d: 4, e: 5}</code>。</p><p>如果对象的 <code>key</code> 和 <code>value</code> 相同，也可以间接地表达。</p><div class="language-xml" data-highlighter="shiki" data-ext="xml" data-title="xml" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#81A1C1;">&lt;template</span><span style="color:#8FBCBB;"> is</span><span style="color:#D8DEE9FF;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">objectCombine</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#8FBCBB;"> data</span><span style="color:#D8DEE9FF;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">{{foo, bar}}</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#81A1C1;">&gt;&lt;/template&gt;</span></span></code></pre></div><div class="language-js" data-highlighter="shiki" data-ext="js" data-title="js" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#88C0D0;">Page</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#88C0D0;">  data</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;"> {</span></span>
<span class="line"><span style="color:#88C0D0;">    foo</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">my-foo</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#88C0D0;">    bar</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">my-bar</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#ECEFF4;">  },</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span></code></pre></div><p>最终组合成的对象是 <code>{foo: &#39;my-foo&#39;, bar:&#39;my-bar&#39;}</code>。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>上述方式可以随意组合，但是如有存在变量名相同的情况，后边的会覆盖前面，如:</p><div class="language-xml" data-highlighter="shiki" data-ext="xml" data-title="xml" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#81A1C1;">&lt;template</span><span style="color:#8FBCBB;"> is</span><span style="color:#D8DEE9FF;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">objectCombine</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#8FBCBB;"> data</span><span style="color:#D8DEE9FF;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">{{...obj1, ...obj2, a, c: 6}}</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#81A1C1;">&gt;&lt;/template&gt;</span></span></code></pre></div><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#88C0D0;">Page</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#88C0D0;">  data</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;"> {</span></span>
<span class="line"><span style="color:#88C0D0;">    obj1</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;"> {</span></span>
<span class="line"><span style="color:#88C0D0;">      a</span><span style="color:#ECEFF4;">:</span><span style="color:#B48EAD;"> 1</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#88C0D0;">      b</span><span style="color:#ECEFF4;">:</span><span style="color:#B48EAD;"> 2</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#ECEFF4;">    },</span></span>
<span class="line"><span style="color:#88C0D0;">    obj2</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;"> {</span></span>
<span class="line"><span style="color:#88C0D0;">      b</span><span style="color:#ECEFF4;">:</span><span style="color:#B48EAD;"> 3</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#88C0D0;">      c</span><span style="color:#ECEFF4;">:</span><span style="color:#B48EAD;"> 4</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#ECEFF4;">    },</span></span>
<span class="line"><span style="color:#88C0D0;">    a</span><span style="color:#ECEFF4;">:</span><span style="color:#B48EAD;"> 5</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#ECEFF4;">  },</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最终组合成的对象是 <code>{a: 5, b: 3, c: 6}</code>。</p></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p>花括号和引号之间如果有空格，将最终被解析成为字符串</p><div class="language-xml" data-highlighter="shiki" data-ext="xml" data-title="xml" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#81A1C1;">&lt;view</span><span style="color:#8FBCBB;"> wx</span><span style="color:#ECEFF4;">:</span><span style="color:#8FBCBB;">for</span><span style="color:#D8DEE9FF;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">{{[1,2,3]}} </span><span style="color:#ECEFF4;">&quot;</span><span style="color:#81A1C1;">&gt;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  {{item}}</span></span>
<span class="line"><span style="color:#81A1C1;">&lt;/view&gt;</span></span></code></pre></div><p>等同于</p><div class="language-xml" data-highlighter="shiki" data-ext="xml" data-title="xml" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#81A1C1;">&lt;view</span><span style="color:#8FBCBB;"> wx</span><span style="color:#ECEFF4;">:</span><span style="color:#8FBCBB;">for</span><span style="color:#D8DEE9FF;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">{{[1,2,3] + &#39; &#39;}}</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#81A1C1;">&gt;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  {{item}}</span></span>
<span class="line"><span style="color:#81A1C1;">&lt;/view&gt;</span></span></code></pre></div></div>`,34);function E(F,y){return e(),o("div",null,[c,p(" more "),r,i,d])}const g=n(t,[["render",E],["__file","data-bind.html.vue"]]),u=JSON.parse('{"path":"/code/mini-app/guide/view/data-bind.html","title":"数据绑定","lang":"zh-CN","frontmatter":{"date":"2020-12-19T00:00:00.000Z","title":"数据绑定","icon":"rank","category":"小程序","description":"WXML 中的动态数据均来自对应 Page 的 data。","head":[["meta",{"property":"og:url","content":"https://SperaC.github.io/code/mini-app/guide/view/data-bind.html"}],["meta",{"property":"og:site_name","content":"SperaC"}],["meta",{"property":"og:title","content":"数据绑定"}],["meta",{"property":"og:description","content":"WXML 中的动态数据均来自对应 Page 的 data。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-25T17:47:26.000Z"}],["meta",{"property":"article:author","content":"SperaC"}],["meta",{"property":"article:published_time","content":"2020-12-19T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-01-25T17:47:26.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"数据绑定\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-12-19T00:00:00.000Z\\",\\"dateModified\\":\\"2024-01-25T17:47:26.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"SperaC\\",\\"url\\":\\"https://SperaC.github.io\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://SperaC.github.io/atom.xml","title":"SperaC Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://SperaC.github.io/feed.json","title":"SperaC JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://SperaC.github.io/rss.xml","title":"SperaC RSS Feed"}]]},"headers":[{"level":2,"title":"简单绑定","slug":"简单绑定","link":"#简单绑定","children":[{"level":3,"title":"内容","slug":"内容","link":"#内容","children":[]},{"level":3,"title":"组件属性(需要在双引号之内)","slug":"组件属性-需要在双引号之内","link":"#组件属性-需要在双引号之内","children":[]},{"level":3,"title":"控制属性(需要在双引号之内)","slug":"控制属性-需要在双引号之内","link":"#控制属性-需要在双引号之内","children":[]},{"level":3,"title":"关键字(需要在双引号之内)","slug":"关键字-需要在双引号之内","link":"#关键字-需要在双引号之内","children":[]}]},{"level":2,"title":"运算","slug":"运算","link":"#运算","children":[{"level":3,"title":"三元运算","slug":"三元运算","link":"#三元运算","children":[]},{"level":3,"title":"算数运算","slug":"算数运算","link":"#算数运算","children":[]},{"level":3,"title":"逻辑判断","slug":"逻辑判断","link":"#逻辑判断","children":[]},{"level":3,"title":"字符串运算","slug":"字符串运算","link":"#字符串运算","children":[]},{"level":3,"title":"数据路径运算","slug":"数据路径运算","link":"#数据路径运算","children":[]}]},{"level":2,"title":"组合","slug":"组合","link":"#组合","children":[{"level":3,"title":"数组","slug":"数组","link":"#数组","children":[]},{"level":3,"title":"对象","slug":"对象","link":"#对象","children":[]}]}],"git":{"createdTime":1591204114000,"updatedTime":1706204846000,"contributors":[{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":3},{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":1}]},"readingTime":{"minutes":2.04,"words":611},"filePathRelative":"code/mini-app/guide/view/data-bind.md","localizedDate":"2020年12月19日","excerpt":"<p>WXML 中的动态数据均来自对应 <code>Page</code> 的 <code>data</code>。</p>\\n","autoDesc":true}');export{g as comp,u as data};
