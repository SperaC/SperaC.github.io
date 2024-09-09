import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as n,e as l,a as o,d as p}from"./app-BlgNmpc-.js";const e={},t=o("p",null,"本章对 JavaScript 的可遍历数据结构及如何遍历做一些介绍。",-1),c=p(`<h2 id="iterable" tabindex="-1"><a class="header-anchor" href="#iterable"><span>iterable</span></a></h2><p>遍历 Array 可以采用下标循环，遍历 Map 和 Set 就无法使用下标。为了统一集合类型，ES6 标准引入了新的 <code>iterable</code> 类型，Array、Map 和 Set 都属于 <code>iterable</code> 类型。</p><p>具有 <code>iterable</code> 类型的集合可以通过新的 <code>for ... of</code> 循环来遍历。</p><p><code>for ... of</code> 循环是 ES6 引入的新的语法，用 <code>for ... of</code> 循环遍历集合，用法如下:</p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#81A1C1;">const</span><span style="color:#D8DEE9;"> a</span><span style="color:#81A1C1;"> =</span><span style="color:#D8DEE9FF;"> [</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">A</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">B</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">C</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#D8DEE9FF;">]</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#81A1C1;">const</span><span style="color:#D8DEE9;"> s</span><span style="color:#81A1C1;"> =</span><span style="color:#81A1C1;"> new</span><span style="color:#88C0D0;"> Set</span><span style="color:#D8DEE9FF;">([</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">A</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">B</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">C</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#D8DEE9FF;">])</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#81A1C1;">const</span><span style="color:#D8DEE9;"> m</span><span style="color:#81A1C1;"> =</span><span style="color:#81A1C1;"> new</span><span style="color:#88C0D0;"> Map</span><span style="color:#D8DEE9FF;">([</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  [</span><span style="color:#B48EAD;">1</span><span style="color:#ECEFF4;">,</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">x</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#D8DEE9FF;">]</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  [</span><span style="color:#B48EAD;">2</span><span style="color:#ECEFF4;">,</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">y</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#D8DEE9FF;">]</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  [</span><span style="color:#B48EAD;">3</span><span style="color:#ECEFF4;">,</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">z</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#D8DEE9FF;">]</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#D8DEE9FF;">])</span><span style="color:#81A1C1;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#81A1C1;">for</span><span style="color:#D8DEE9FF;"> (</span><span style="color:#81A1C1;">let</span><span style="color:#D8DEE9;"> x</span><span style="color:#81A1C1;"> of</span><span style="color:#D8DEE9;"> a</span><span style="color:#D8DEE9FF;">) </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#616E88;">  // 遍历Array</span></span>
<span class="line"><span style="color:#D8DEE9;">  console</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">log</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">x</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span></span>
<span class="line"><span style="color:#81A1C1;">for</span><span style="color:#D8DEE9FF;"> (</span><span style="color:#81A1C1;">let</span><span style="color:#D8DEE9;"> x</span><span style="color:#81A1C1;"> of</span><span style="color:#D8DEE9;"> s</span><span style="color:#D8DEE9FF;">) </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#616E88;">  // 遍历Set</span></span>
<span class="line"><span style="color:#D8DEE9;">  console</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">log</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">x</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span></span>
<span class="line"><span style="color:#81A1C1;">for</span><span style="color:#D8DEE9FF;"> (</span><span style="color:#81A1C1;">let</span><span style="color:#D8DEE9;"> x</span><span style="color:#81A1C1;"> of</span><span style="color:#D8DEE9;"> m</span><span style="color:#D8DEE9FF;">) </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#616E88;">  // 遍历Map</span></span>
<span class="line"><span style="color:#D8DEE9;">  console</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">log</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">x</span><span style="color:#D8DEE9FF;">[</span><span style="color:#B48EAD;">0</span><span style="color:#D8DEE9FF;">] </span><span style="color:#81A1C1;">+</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#81A1C1;"> +</span><span style="color:#D8DEE9;"> x</span><span style="color:#D8DEE9FF;">[</span><span style="color:#B48EAD;">1</span><span style="color:#D8DEE9FF;">])</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>您可能会有疑问，<code>for ... of</code> 循环和 <code>for ... in</code> 循环有何区别?</p><p><code>for ... in</code> 循环由于历史遗留问题，它遍历的实际上是对象的属性名称。一个 Array 数组实际上也是一个对象，它的每个元素的索引被视为一个属性。</p><p>当我们手动给 Array 对象添加了额外的属性后，<code>for ... in</code> 循环将带来意想不到的意外效果:</p><div class="language-js" data-highlighter="shiki" data-ext="js" data-title="js" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#81A1C1;">const</span><span style="color:#D8DEE9;"> a</span><span style="color:#81A1C1;"> =</span><span style="color:#D8DEE9FF;"> [</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">A</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">B</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">C</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#D8DEE9FF;">]</span><span style="color:#81A1C1;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D8DEE9;">a</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">name</span><span style="color:#81A1C1;"> =</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">Hello</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#81A1C1;">for</span><span style="color:#D8DEE9FF;"> (</span><span style="color:#81A1C1;">let</span><span style="color:#D8DEE9;"> x</span><span style="color:#81A1C1;"> in</span><span style="color:#D8DEE9;"> a</span><span style="color:#D8DEE9FF;">) </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9;">  console</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">log</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">x</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span><span style="color:#616E88;"> // &#39;0&#39;, &#39;1&#39;, &#39;2&#39;, &#39;name&#39;</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span></span></code></pre></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p><code>for ... in</code> 循环将把 name 包括在内，但 Array 的 <code>length</code> 属性却不包括在内。</p></div><p><code>for ... of</code> 循环则完全修复了这些问题，它只循环集合本身的元素:</p><div class="language-js" data-highlighter="shiki" data-ext="js" data-title="js" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#81A1C1;">const</span><span style="color:#D8DEE9;"> a</span><span style="color:#81A1C1;"> =</span><span style="color:#D8DEE9FF;"> [</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">A</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">B</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">C</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#D8DEE9FF;">]</span><span style="color:#81A1C1;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D8DEE9;">a</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">name</span><span style="color:#81A1C1;"> =</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">Hello</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#81A1C1;">for</span><span style="color:#D8DEE9FF;"> (</span><span style="color:#81A1C1;">let</span><span style="color:#D8DEE9;"> x</span><span style="color:#81A1C1;"> of</span><span style="color:#D8DEE9;"> a</span><span style="color:#D8DEE9FF;">) </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9;">  console</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">log</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">x</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span><span style="color:#616E88;"> // &#39;A&#39;, &#39;B&#39;, &#39;C&#39;</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span></span></code></pre></div><p>这就是为什么要引入新的 <code>for ... of</code> 循环。</p><p>然而，更好的方式是直接使用 <code>iterable</code> 内置的 <code>forEach</code> 方法，它接收一个函数，每次迭代就自动回调该函数。以 Array 为例:</p><div class="language-js" data-highlighter="shiki" data-ext="js" data-title="js" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">use strict</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#81A1C1;">const</span><span style="color:#D8DEE9;"> a</span><span style="color:#81A1C1;"> =</span><span style="color:#D8DEE9FF;"> [</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">A</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">B</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">C</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#D8DEE9FF;">]</span><span style="color:#81A1C1;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D8DEE9;">a</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">forEach</span><span style="color:#D8DEE9FF;">(</span><span style="color:#81A1C1;">function</span><span style="color:#ECEFF4;"> (</span><span style="color:#D8DEE9;">element</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9;"> index</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9;"> array</span><span style="color:#ECEFF4;">)</span><span style="color:#ECEFF4;"> {</span></span>
<span class="line"><span style="color:#616E88;">  // element: 指向当前元素的值</span></span>
<span class="line"><span style="color:#616E88;">  // index: 指向当前索引</span></span>
<span class="line"><span style="color:#616E88;">  // array: 指向Array对象本身</span></span>
<span class="line"><span style="color:#D8DEE9;">  console</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">log</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">element</span><span style="color:#81A1C1;"> +</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">, index = </span><span style="color:#ECEFF4;">&quot;</span><span style="color:#81A1C1;"> +</span><span style="color:#D8DEE9;"> index</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span></code></pre></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p><code>forEach()</code> 方法是 ES5.1 标准引入的，您需要测试浏览器是否支持 (IE says No)。</p></div><p>Set 与 Array 类似，但 Set 没有索引，因此回调函数的前两个参数都是元素本身:</p><div class="language-js" data-highlighter="shiki" data-ext="js" data-title="js" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#81A1C1;">const</span><span style="color:#D8DEE9;"> s</span><span style="color:#81A1C1;"> =</span><span style="color:#81A1C1;"> new</span><span style="color:#88C0D0;"> Set</span><span style="color:#D8DEE9FF;">([</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">A</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">B</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">C</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#D8DEE9FF;">])</span><span style="color:#81A1C1;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D8DEE9;">s</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">forEach</span><span style="color:#D8DEE9FF;">(</span><span style="color:#81A1C1;">function</span><span style="color:#ECEFF4;"> (</span><span style="color:#D8DEE9;">element</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9;"> sameElement</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9;"> set</span><span style="color:#ECEFF4;">)</span><span style="color:#ECEFF4;"> {</span></span>
<span class="line"><span style="color:#D8DEE9;">  console</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">log</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">element</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span></code></pre></div><p>Map 的回调函数参数依次为 <code>value</code>、<code>key</code> 和 <code>map</code> 本身:</p><div class="language-js" data-highlighter="shiki" data-ext="js" data-title="js" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#81A1C1;">const</span><span style="color:#D8DEE9;"> m</span><span style="color:#81A1C1;"> =</span><span style="color:#81A1C1;"> new</span><span style="color:#88C0D0;"> Map</span><span style="color:#D8DEE9FF;">([</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  [</span><span style="color:#B48EAD;">1</span><span style="color:#ECEFF4;">,</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">x</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#D8DEE9FF;">]</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  [</span><span style="color:#B48EAD;">2</span><span style="color:#ECEFF4;">,</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">y</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#D8DEE9FF;">]</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  [</span><span style="color:#B48EAD;">3</span><span style="color:#ECEFF4;">,</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">z</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#D8DEE9FF;">]</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#D8DEE9FF;">])</span><span style="color:#81A1C1;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D8DEE9;">m</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">forEach</span><span style="color:#D8DEE9FF;">(</span><span style="color:#81A1C1;">function</span><span style="color:#ECEFF4;"> (</span><span style="color:#D8DEE9;">value</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9;"> key</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9;"> map</span><span style="color:#ECEFF4;">)</span><span style="color:#ECEFF4;"> {</span></span>
<span class="line"><span style="color:#D8DEE9;">  console</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">log</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">value</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span></code></pre></div><p>如果对某些参数不感兴趣，由于 JavaScript 的函数调用不要求参数必须一致，因此可以忽略它们。例如，只需要获得 Array 的 <code>element</code>:</p><div class="language-js" data-highlighter="shiki" data-ext="js" data-title="js" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#81A1C1;">const</span><span style="color:#D8DEE9;"> a</span><span style="color:#81A1C1;"> =</span><span style="color:#D8DEE9FF;"> [</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">A</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">B</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">C</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#D8DEE9FF;">]</span><span style="color:#81A1C1;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D8DEE9;">a</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">forEach</span><span style="color:#D8DEE9FF;">(</span><span style="color:#81A1C1;">function</span><span style="color:#ECEFF4;"> (</span><span style="color:#D8DEE9;">element</span><span style="color:#ECEFF4;">)</span><span style="color:#ECEFF4;"> {</span></span>
<span class="line"><span style="color:#D8DEE9;">  console</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">log</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">element</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span></code></pre></div>`,22);function r(E,y){return a(),n("div",null,[t,l(" more "),c])}const C=s(e,[["render",r],["__file","iterable.html.vue"]]),D=JSON.parse('{"path":"/code/language/js/guide/iterable.html","title":"遍历","lang":"zh-CN","frontmatter":{"title":"遍历","icon":"refresh","date":"2019-09-19T00:00:00.000Z","category":"JavaScript","description":"本章对 JavaScript 的可遍历数据结构及如何遍历做一些介绍。","head":[["meta",{"property":"og:url","content":"https://SperaC.github.io/code/language/js/guide/iterable.html"}],["meta",{"property":"og:site_name","content":"SperaC"}],["meta",{"property":"og:title","content":"遍历"}],["meta",{"property":"og:description","content":"本章对 JavaScript 的可遍历数据结构及如何遍历做一些介绍。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-02-06T16:46:58.000Z"}],["meta",{"property":"article:author","content":"SperaC"}],["meta",{"property":"article:published_time","content":"2019-09-19T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-02-06T16:46:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"遍历\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-09-19T00:00:00.000Z\\",\\"dateModified\\":\\"2022-02-06T16:46:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"SperaC\\",\\"url\\":\\"https://SperaC.github.io\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://SperaC.github.io/atom.xml","title":"SperaC Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://SperaC.github.io/feed.json","title":"SperaC JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://SperaC.github.io/rss.xml","title":"SperaC RSS Feed"}]]},"headers":[{"level":2,"title":"iterable","slug":"iterable","link":"#iterable","children":[]}],"git":{"createdTime":1591204114000,"updatedTime":1644166018000,"contributors":[{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":5}]},"readingTime":{"minutes":2.22,"words":665},"filePathRelative":"code/language/js/guide/iterable.md","localizedDate":"2019年9月19日","excerpt":"<p>本章对 JavaScript 的可遍历数据结构及如何遍历做一些介绍。</p>\\n","autoDesc":true}');export{C as comp,D as data};
