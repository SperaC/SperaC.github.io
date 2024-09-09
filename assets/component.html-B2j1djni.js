import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as a,e,a as s,f as l,d as o}from"./app-BlgNmpc-.js";const p={},d=s("p",null,[s("code",null,"Component"),l(" 构造器用于创建自定义组件，接受一个 Object 类型的参数。")],-1),r=o(`<h2 id="参数" tabindex="-1"><a class="header-anchor" href="#参数"><span>参数</span></a></h2><table><thead><tr><th>定义段</th><th>类型</th><th>是否必填</th><th>描述</th><th>最低版本</th></tr></thead><tbody><tr><td>properties</td><td>Object Map</td><td>否</td><td>组件的对外属性，是属性名到属性设置的映射表</td><td></td></tr><tr><td>data</td><td>Object</td><td>否</td><td>组件的内部数据，和 properties 一同用于组件的模板渲染</td><td></td></tr><tr><td>observers</td><td>Object</td><td>否</td><td>组件数据字段监听器，用于监听 properties 和 data 的变化，参见 数据监听器</td><td>2.6.1</td></tr><tr><td>methods</td><td>Object</td><td>否</td><td>组件的方法，包括事件响应函数和任意的自定义方法，关于事件响应函数的使用，参见 组件间通信与事件</td><td></td></tr><tr><td>behaviors</td><td>String Array</td><td>否</td><td>类似于 mixins 和 traits 的组件间代码复用机制，参见 behaviors</td><td></td></tr><tr><td>created</td><td>Function</td><td>否</td><td>组件生命周期函数-在组件实例刚刚被创建时执行，注意此时不能调用 setData</td><td></td></tr><tr><td>attached</td><td>Function</td><td>否</td><td>组件生命周期函数-在组件实例进入页面节点树时执行</td><td></td></tr><tr><td>ready</td><td>Function</td><td>否</td><td>组件生命周期函数-在组件布局完成后执行</td><td></td></tr><tr><td>moved</td><td>Function</td><td>否</td><td>组件生命周期函数-在组件实例被移动到节点树另一个位置时执行</td><td></td></tr><tr><td>detached</td><td>Function</td><td>否</td><td>组件生命周期函数-在组件实例被从页面节点树移除时执行</td><td></td></tr><tr><td>relations</td><td>Object</td><td>否</td><td>组件间关系定义，参见 组件间关系</td><td></td></tr><tr><td>externalClasses</td><td>String Array</td><td>否</td><td>组件接受的外部样式类，参见 外部样式类</td><td></td></tr><tr><td>options</td><td>Object Map</td><td>否</td><td>一些选项(文档中介绍相关特性时会涉及具体的选项设置，这里暂不列举)</td><td></td></tr><tr><td>lifetimes</td><td>Object</td><td>否</td><td>组件生命周期声明对象，参见 组件生命周期</td><td>2.2.3</td></tr><tr><td>pageLifetimes</td><td>Object</td><td>否</td><td>组件所在页面的生命周期声明对象，参见 组件生命周期</td><td>2.2.3</td></tr><tr><td>definitionFilter</td><td>Function</td><td>否</td><td>定义段过滤器，用于自定义组件扩展，参见 自定义组件扩展</td><td>2.2.3</td></tr></tbody></table><p>生成的组件实例可以在组件的方法、生命周期函数和属性 <code>observer</code> 中通过 <code>this</code> 访问。组件包含一些通用属性和方法。</p><table><thead><tr><th>属性名</th><th>类型</th><th>描述</th></tr></thead><tbody><tr><td>is</td><td>String</td><td>组件的文件路径</td></tr><tr><td>id</td><td>String</td><td>节点 id</td></tr><tr><td>dataset</td><td>String</td><td>节点 dataset</td></tr><tr><td>data</td><td>Object</td><td>组件数据，包括内部数据和属性值</td></tr><tr><td>properties</td><td>Object</td><td>组件数据，包括内部数据和属性值(与 data 一致)</td></tr></tbody></table><table><thead><tr><th>方法名</th><th>参数</th><th>描述</th><th>最低版本</th></tr></thead><tbody><tr><td>setData</td><td>Object newData</td><td>设置 data 并执行视图层渲染</td><td></td></tr><tr><td>hasBehavior</td><td>Object behavior</td><td>检查组件是否具有 behavior (检查时会递归检查被直接或间接引入的所有 behavior)</td><td></td></tr><tr><td>triggerEvent</td><td>String name, Object detail, Object options</td><td>触发事件，参见 组件间通信与事件</td><td></td></tr><tr><td>createSelectorQuery</td><td></td><td>创建一个 SelectorQuery 对象，选择器选取范围为这个组件实例内</td><td></td></tr><tr><td>createIntersectionObserver</td><td></td><td>创建一个 IntersectionObserver 对象，选择器选取范围为这个组件实例内</td><td></td></tr><tr><td>createMediaQueryObserver</td><td></td><td>创建一个 MediaQueryObserver 对象</td><td>2.11.1</td></tr><tr><td>selectComponent</td><td>String selector</td><td>使用选择器选择组件实例节点，返回匹配到的第一个组件实例对象(会被 wx://component-export 影响)</td><td></td></tr><tr><td>selectAllComponents</td><td>String selector</td><td>使用选择器选择组件实例节点，返回匹配到的全部组件实例对象组成的数组(会被 wx://component-export 影响)</td><td></td></tr><tr><td>selectOwnerComponent</td><td></td><td>选取当前组件节点所在的组件实例(即组件的引用者)，返回它的组件实例对象(会被 wx://component-export 影响)</td><td>2.8.2</td></tr><tr><td>getRelationNodes</td><td>String relationKey</td><td>获取这个关系所对应的所有关联节点，参见 组件间关系</td><td></td></tr><tr><td>groupSetData</td><td>Function callback</td><td>立刻执行 callback ，其中的多个 setData 之间不会触发界面绘制(只有某些特殊场景中需要，如用于在不同组件同时 setData 时进行界面绘制同步)</td><td>2.4.0</td></tr><tr><td>getTabBar</td><td></td><td>返回当前页面的 custom-tab-bar 的组件实例，详见自定义 tabBar</td><td>2.6.2</td></tr><tr><td>getPageId</td><td></td><td>返回页面标识符(一个字符串)，可以用来判断几个自定义组件实例是不是在同一个页面内</td><td>2.7.1</td></tr><tr><td>animate</td><td>String selector, Array keyframes, Number duration, Function callback</td><td>执行关键帧动画，详见动画</td><td>2.9.0</td></tr><tr><td>clearAnimation</td><td>String selector, Object options, Function callback</td><td>清除关键帧动画，详见动画</td><td>2.9.0</td></tr><tr><td>setUpdatePerformanceListener</td><td>Object options, Function listener</td><td>清除关键帧动画，详见动画</td><td>2.12.0</td></tr></tbody></table><details class="hint-container details"><summary>代码示例</summary><p><a href="https://developers.weixin.qq.com/s/GqVTnvmq7g1m" target="_blank" rel="noopener noreferrer">在开发者工具中预览效果</a></p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#88C0D0;">Component</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#88C0D0;">  behaviors</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9FF;"> []</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#616E88;">  // 属性定义(详情参见下文)</span></span>
<span class="line"><span style="color:#88C0D0;">  properties</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;"> {</span></span>
<span class="line"><span style="color:#88C0D0;">    myProperty</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;"> {</span></span>
<span class="line"><span style="color:#616E88;">      // 属性名</span></span>
<span class="line"><span style="color:#88C0D0;">      type</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9;"> String</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#88C0D0;">      value</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;"> &quot;&quot;</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#ECEFF4;">    },</span></span>
<span class="line"><span style="color:#88C0D0;">    myProperty2</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9;"> String</span><span style="color:#ECEFF4;">,</span><span style="color:#616E88;"> // 简化的定义方式</span></span>
<span class="line"><span style="color:#ECEFF4;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88C0D0;">  data</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;"> {},</span><span style="color:#616E88;"> // 私有数据，可用于模板渲染</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88C0D0;">  lifetimes</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;"> {</span></span>
<span class="line"><span style="color:#616E88;">    // 生命周期函数，可以为函数，或一个在methods段中定义的方法名</span></span>
<span class="line"><span style="color:#88C0D0;">    attached</span><span style="color:#ECEFF4;">()</span><span style="color:#ECEFF4;"> {},</span></span>
<span class="line"><span style="color:#88C0D0;">    moved</span><span style="color:#ECEFF4;">()</span><span style="color:#ECEFF4;"> {},</span></span>
<span class="line"><span style="color:#88C0D0;">    detached</span><span style="color:#ECEFF4;">()</span><span style="color:#ECEFF4;"> {},</span></span>
<span class="line"><span style="color:#ECEFF4;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88C0D0;">  pageLifetimes</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;"> {</span></span>
<span class="line"><span style="color:#616E88;">    // 组件所在页面的生命周期函数</span></span>
<span class="line"><span style="color:#88C0D0;">    show</span><span style="color:#ECEFF4;">()</span><span style="color:#ECEFF4;"> {},</span></span>
<span class="line"><span style="color:#88C0D0;">    hide</span><span style="color:#ECEFF4;">()</span><span style="color:#ECEFF4;"> {},</span></span>
<span class="line"><span style="color:#88C0D0;">    resize</span><span style="color:#ECEFF4;">()</span><span style="color:#ECEFF4;"> {},</span></span>
<span class="line"><span style="color:#ECEFF4;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88C0D0;">  methods</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;"> {</span></span>
<span class="line"><span style="color:#88C0D0;">    onMyButtonTap</span><span style="color:#ECEFF4;">()</span><span style="color:#ECEFF4;"> {</span></span>
<span class="line"><span style="color:#81A1C1;">      this</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">setData</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#616E88;">        // 更新属性和数据的方法与更新页面数据的方法类似</span></span>
<span class="line"><span style="color:#ECEFF4;">      }</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#ECEFF4;">    },</span></span>
<span class="line"><span style="color:#616E88;">    // 内部方法建议以下划线开头</span></span>
<span class="line"><span style="color:#88C0D0;">    _myPrivateMethod</span><span style="color:#ECEFF4;">()</span><span style="color:#ECEFF4;"> {</span></span>
<span class="line"><span style="color:#616E88;">      // 这里将 data.A[0].B 设为 &#39;myPrivateData&#39;</span></span>
<span class="line"><span style="color:#81A1C1;">      this</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">setData</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#ECEFF4;">        &quot;</span><span style="color:#A3BE8C;">A[0].B</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">myPrivateData</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#ECEFF4;">      }</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#ECEFF4;">    },</span></span>
<span class="line"><span style="color:#88C0D0;">    _propertyChange</span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9;">newVal</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9;"> oldVal</span><span style="color:#ECEFF4;">)</span><span style="color:#ECEFF4;"> {},</span></span>
<span class="line"><span style="color:#ECEFF4;">  },</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="properties-定义" tabindex="-1"><a class="header-anchor" href="#properties-定义"><span>properties 定义</span></a></h2><table><thead><tr><th>定义段</th><th>类型</th><th>是否必填</th><th>描述</th><th>最低版本</th></tr></thead><tbody><tr><td>type</td><td></td><td>是</td><td>属性的类型</td><td></td></tr><tr><td>optionalTypes</td><td>Array</td><td>否</td><td>属性的类型(可以指定多个)</td><td>2.6.5</td></tr><tr><td>value</td><td></td><td>否</td><td>属性的初始值</td><td></td></tr><tr><td>observer</td><td>Function</td><td>否</td><td>属性值变化时的回调函数</td><td></td></tr></tbody></table><div class="hint-container warning"><p class="hint-container-title">注意</p><p>新版本基础库中不推荐使用 <code>observer</code> 字段，而是使用 Component 构造器的 <code>observers</code> 字段代替，它更加强大且性能更好。</p></div><details class="hint-container details"><summary>代码示例</summary><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#88C0D0;">Component</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#88C0D0;">  properties</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;"> {</span></span>
<span class="line"><span style="color:#88C0D0;">    min</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;"> {</span></span>
<span class="line"><span style="color:#88C0D0;">      type</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9;"> Number</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#88C0D0;">      value</span><span style="color:#ECEFF4;">:</span><span style="color:#B48EAD;"> 0</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#ECEFF4;">    },</span></span>
<span class="line"><span style="color:#88C0D0;">    min</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;"> {</span></span>
<span class="line"><span style="color:#88C0D0;">      type</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9;"> Number</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#88C0D0;">      value</span><span style="color:#ECEFF4;">:</span><span style="color:#B48EAD;"> 0</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#88C0D0;">      observer</span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9;">newVal</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9;"> oldVal</span><span style="color:#ECEFF4;">)</span><span style="color:#ECEFF4;"> {</span></span>
<span class="line"><span style="color:#616E88;">        // 属性值变化时执行</span></span>
<span class="line"><span style="color:#ECEFF4;">      },</span></span>
<span class="line"><span style="color:#ECEFF4;">    },</span></span>
<span class="line"><span style="color:#88C0D0;">    lastLeaf</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;"> {</span></span>
<span class="line"><span style="color:#616E88;">      // 这个属性可以是 Number 、 String 、 Boolean 三种类型中的一种</span></span>
<span class="line"><span style="color:#88C0D0;">      type</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9;"> Number</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#88C0D0;">      optionalTypes</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9FF;"> [</span><span style="color:#D8DEE9;">String</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9;"> Object</span><span style="color:#D8DEE9FF;">]</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#88C0D0;">      value</span><span style="color:#ECEFF4;">:</span><span style="color:#B48EAD;"> 0</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#ECEFF4;">    },</span></span>
<span class="line"><span style="color:#ECEFF4;">  },</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><p>属性的类型可以为 <code>String</code> <code>Number</code> <code>Boolean</code> <code>Object</code> <code>Array</code> 其一，也可以为 <code>null</code> 表示不限制类型。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>多数情况下，属性最好指定一个确切的类型。这样，在 WXML 中以字面量指定属性值时，值可以获得一个确切的类型，如:</p><div class="language-xml" data-highlighter="shiki" data-ext="xml" data-title="xml" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#81A1C1;">&lt;custom-comp</span><span style="color:#8FBCBB;"> min</span><span style="color:#D8DEE9FF;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">1</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#8FBCBB;"> max</span><span style="color:#D8DEE9FF;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">5</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#81A1C1;"> /&gt;</span></span></code></pre></div><p>此时，由于自定义组件的对应属性被规定为 <code>Number</code> 类型， min 和 max 会被赋值为 <code>1</code> 和 <code>5</code> ，而非 <code>&quot;1&quot;</code> 和 <code>&quot;5&quot;</code> ，即:</p><div class="language-js" data-highlighter="shiki" data-ext="js" data-title="js" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#81A1C1;">this</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">data</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">min</span><span style="color:#81A1C1;"> ===</span><span style="color:#B48EAD;"> 1</span><span style="color:#81A1C1;">;</span><span style="color:#616E88;"> // true</span></span>
<span class="line"><span style="color:#81A1C1;">this</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">data</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">max</span><span style="color:#81A1C1;"> ===</span><span style="color:#B48EAD;"> 5</span><span style="color:#81A1C1;">;</span><span style="color:#616E88;"> // true</span></span></code></pre></div></div><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>在 <code>properties</code> 定义段中，属性名采用驼峰写法(propertyName)；在 wxml 中，指定属性值时则对应使用连字符写法(component-tag-name property-name=&quot;attr value&quot;)，应用于数据绑定时采用驼峰写法(attr=&quot;&quot;)。</p></div><h3 id="bug-tips" tabindex="-1"><a class="header-anchor" href="#bug-tips"><span>Bug &amp; Tips</span></a></h3><ul><li>使用 <code>this.data</code> 可以获取内部数据和属性值；但直接修改它不会将变更应用到界面上，应使用 setData 修改。</li><li>生命周期函数无法在组件方法中通过 <code>this</code> 访问到。</li><li>属性名应避免以 <code>data</code> 开头，即不要命名成 <code>dataXyz</code> 这样的形式，因为在 WXML 中， <code>data-xyz=&quot;&quot;</code> 会被作为节点 dataset 来处理，而不是组件属性。</li><li>在一个组件的定义和使用时，组件的属性名和 data 字段相互间都不能冲突(尽管它们位于不同的定义段中)。</li><li>从基础库 2.0.9 开始，对象类型的属性和 data 字段中可以包含函数类型的子字段，即可以通过对象类型的属性字段来传递函数。低于这一版本的基础库不支持这一特性。</li><li>bug : 对于 type 为 Object 或 Array 的属性，如果通过该组件自身的 <code>this.setData</code> 来改变属性值的一个子字段，则依旧会触发属性 observer ，且 observer 接收到的 <code>newVal</code> 是变化的那个子字段的值，<code>oldVal</code> 为空， <code>changedPath</code> 包含子字段的字段名相关信息；目前推荐使用 <code>observers</code> 定义段代替。</li></ul>`,15);function c(i,E){return n(),a("div",null,[d,e(" more "),r])}const m=t(p,[["render",c],["__file","component.html.vue"]]),v=JSON.parse('{"path":"/code/mini-app/guide/custom-component/component.html","title":"框架接口","lang":"zh-CN","frontmatter":{"date":"2020-12-19T00:00:00.000Z","title":"框架接口","category":"小程序","description":"Component 构造器用于创建自定义组件，接受一个 Object 类型的参数。","head":[["meta",{"property":"og:url","content":"https://SperaC.github.io/code/mini-app/guide/custom-component/component.html"}],["meta",{"property":"og:site_name","content":"SperaC"}],["meta",{"property":"og:title","content":"框架接口"}],["meta",{"property":"og:description","content":"Component 构造器用于创建自定义组件，接受一个 Object 类型的参数。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-25T18:01:12.000Z"}],["meta",{"property":"article:author","content":"SperaC"}],["meta",{"property":"article:published_time","content":"2020-12-19T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-01-25T18:01:12.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"框架接口\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-12-19T00:00:00.000Z\\",\\"dateModified\\":\\"2024-01-25T18:01:12.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"SperaC\\",\\"url\\":\\"https://SperaC.github.io\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://SperaC.github.io/atom.xml","title":"SperaC Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://SperaC.github.io/feed.json","title":"SperaC JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://SperaC.github.io/rss.xml","title":"SperaC RSS Feed"}]]},"headers":[{"level":2,"title":"参数","slug":"参数","link":"#参数","children":[]},{"level":2,"title":"properties 定义","slug":"properties-定义","link":"#properties-定义","children":[{"level":3,"title":"Bug & Tips","slug":"bug-tips","link":"#bug-tips","children":[]}]}],"git":{"createdTime":1610980523000,"updatedTime":1706205672000,"contributors":[{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":3},{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":2}]},"readingTime":{"minutes":6.23,"words":1870},"filePathRelative":"code/mini-app/guide/custom-component/component.md","localizedDate":"2020年12月19日","excerpt":"<p><code>Component</code> 构造器用于创建自定义组件，接受一个 Object 类型的参数。</p>\\n","autoDesc":true}');export{m as comp,v as data};
