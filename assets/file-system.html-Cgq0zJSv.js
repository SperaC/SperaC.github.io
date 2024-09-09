import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as o,o as p,c,e as r,a as s,f as t,b as l,d as e}from"./app-BlgNmpc-.js";const i={},d=e('<p>文件系统是小程序提供的一套以小程序和用户维度隔离的存储以及一套相应的管理接口。通过 <code>wx.getFileSystemManager()</code> 可以获取到全局唯一的文件系统管理器，所有文件系统的管理操作通过 FileSystemManager 来调用。</p><div class="language-js" data-highlighter="shiki" data-ext="js" data-title="js" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#81A1C1;">const</span><span style="color:#D8DEE9;"> fs</span><span style="color:#81A1C1;"> =</span><span style="color:#D8DEE9;"> wx</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">getFileSystemManager</span><span style="color:#D8DEE9FF;">()</span><span style="color:#81A1C1;">;</span></span></code></pre></div><p>文件主要分为两大类:</p><ul><li>代码包文件: 代码包文件指的是在项目目录中添加的文件。</li><li>本地文件: 通过调用接口本地产生，或通过网络下载下来，存储到本地的文件。</li></ul>',4),y=e('<p>其中本地文件又分为三种:</p><ul><li><p>本地临时文件: 临时产生，随时会被回收的文件。不限制存储大小。</p></li><li><p>本地缓存文件: 小程序通过接口把本地临时文件缓存后产生的文件，不能自定义目录和文件名。跟本地用户文件共计，普通小程序最多可存储 10MB，游戏类目的小程序最多可存储 50MB。</p></li><li><p>本地用户文件: 小程序通过接口把本地临时文件缓存后产生的文件，允许自定义目录和文件名。跟本地缓存文件共计，普通小程序最多可存储 10MB，游戏类目的小程序最多可存储 50MB。</p></li></ul><h2 id="代码包文件" tabindex="-1"><a class="header-anchor" href="#代码包文件"><span>代码包文件</span></a></h2><p>由于代码包文件大小限制，代码包文件适用于放置首次加载时需要的文件。</p><h3 id="访问代码包文件" tabindex="-1"><a class="header-anchor" href="#访问代码包文件"><span>访问代码包文件</span></a></h3><p>代码包文件的访问方式是从项目根目录开始写文件路径，不支持相对路径的写法。</p><div class="hint-container warning"><p class="hint-container-title">注意</p><p>这个和 Node.js 是不一样的，请特别注意一下。</p><p>如: <code>/a/b/c</code>、<code>a/b/c</code> 都是合法的，<code>./a/b/c</code> <code>../a/b/c</code> 则不合法。</p><figure><img src="https://res.wx.qq.com/wxdoc/dist/assets/img/code-package.ea949c8d.png" alt="path" tabindex="0" loading="lazy"><figcaption>path</figcaption></figure></div><h3 id="修改代码包文件" tabindex="-1"><a class="header-anchor" href="#修改代码包文件"><span>修改代码包文件</span></a></h3><p>代码包内的文件无法在运行后动态修改或删除，修改代码包文件需要重新发布版本。</p><h3 id="本地文件" tabindex="-1"><a class="header-anchor" href="#本地文件"><span>本地文件</span></a></h3><p>本地文件指的是小程序被用户添加到手机后，会有一块独立的文件存储区域，以用户维度隔离。即同一台手机，每个微信用户不能访问到其他登录用户的文件，同一个用户不同 appId 之间的文件也不能互相访问。</p><figure><img src="https://res.wx.qq.com/wxdoc/dist/assets/img/file-sandbox.9ef4d15a.png" alt="本地文件沙盒.png" tabindex="0" loading="lazy"><figcaption>本地文件沙盒.png</figcaption></figure><p>本地文件的文件路径均为以下格式:</p>',13),h=s("div",null,[s("p",null,[s("code",{"v-pre":""},"{{协议名}}://文件路径")])],-1),E=e(`<blockquote><p>其中，协议名在 iOS/Android 客户端为 <code>&quot;wxfile&quot;</code>，在开发者工具上为 <code>&quot;http&quot;</code>，开发者无需关注这个差异，也不应在代码中去硬编码完整文件路径。</p></blockquote><h3 id="本地临时文件" tabindex="-1"><a class="header-anchor" href="#本地临时文件"><span>本地临时文件</span></a></h3><p>本地临时文件只能通过调用特定接口产生，不能直接写入内容。本地临时文件产生后，仅在当前生命周期内有效，重启之后即不可用。因此，不可把本地临时文件路径存储起来下次使用。如果需要下次在使用，可通过 <code>FileSystemManager.saveFile()</code> 或 <code>FileSystemManager.copyFile()</code> 接口把本地临时文件转换成本地缓存文件或本地用户文件。</p><div class="language-js" data-highlighter="shiki" data-ext="js" data-title="js" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#D8DEE9;">wx</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">chooseImage</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#88C0D0;">  success</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;"> (</span><span style="color:#D8DEE9;">res</span><span style="color:#ECEFF4;">)</span><span style="color:#81A1C1;"> =&gt;</span><span style="color:#ECEFF4;"> {</span></span>
<span class="line"><span style="color:#81A1C1;">    const</span><span style="color:#ECEFF4;"> {</span><span style="color:#D8DEE9;"> tempFilePaths</span><span style="color:#ECEFF4;"> }</span><span style="color:#81A1C1;"> =</span><span style="color:#D8DEE9;"> res</span><span style="color:#81A1C1;">;</span><span style="color:#616E88;"> // tempFilePaths 的每一项是一个本地临时文件路径</span></span>
<span class="line"><span style="color:#ECEFF4;">  },</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span></code></pre></div>`,4),F={id:"本地缓存文件",tabindex:"-1"},g={class:"header-anchor",href:"#本地缓存文件"},m=e(`<p>本地缓存文件只能通过调用特定接口产生，不能直接写入内容。本地缓存文件产生后，重启之后仍可用。本地缓存文件只能通过 <code>FileSystemManager.saveFile()</code> 接口将本地临时文件保存获得。</p><div class="language-js" data-highlighter="shiki" data-ext="js" data-title="js" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#D8DEE9;">fs</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">saveFile</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#88C0D0;">  tempFilePath</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;"> &quot;&quot;</span><span style="color:#ECEFF4;">,</span><span style="color:#616E88;"> // 传入一个本地临时文件路径</span></span>
<span class="line"><span style="color:#88C0D0;">  success</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;"> (</span><span style="color:#D8DEE9;">res</span><span style="color:#ECEFF4;">)</span><span style="color:#81A1C1;"> =&gt;</span><span style="color:#ECEFF4;"> {</span></span>
<span class="line"><span style="color:#D8DEE9;">    console</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">log</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">res</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">savedFilePath</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span><span style="color:#616E88;"> // res.savedFilePath 为一个本地缓存文件路径</span></span>
<span class="line"><span style="color:#ECEFF4;">  },</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span></code></pre></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>本地缓存文件是最初的设计，1.7.0 版本开始，提供了功能更完整的本地用户文件，可以完全覆盖本地缓存文件的功能，如果不需要兼容低于 1.7.0 版本，可以不使用本地缓存文件。</p></div>`,3),C={id:"本地用户文件",tabindex:"-1"},u={class:"header-anchor",href:"#本地用户文件"},D=e('<blockquote><p>从 1.7.0 版本开始新增</p></blockquote><p>小程序提供了一个用户文件目录，有完全自由的读写权限。通过 <code>wx.env.USER_DATA_PATH</code> 可以获取到这个目录的路径。</p><div class="language-js" data-highlighter="shiki" data-ext="js" data-title="js" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#616E88;">// 在本地用户文件目录下创建一个文件 hello.txt，写入内容 &quot;hello, world&quot;</span></span>\n<span class="line"><span style="color:#81A1C1;">const</span><span style="color:#D8DEE9;"> fs</span><span style="color:#81A1C1;"> =</span><span style="color:#D8DEE9;"> wx</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">getFileSystemManager</span><span style="color:#D8DEE9FF;">()</span><span style="color:#81A1C1;">;</span></span>\n<span class="line"><span style="color:#D8DEE9;">fs</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">writeFileSync</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">`</span><span style="color:#81A1C1;">${</span><span style="color:#D8DEE9;">wx</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">env</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">USER_DATA_PATH</span><span style="color:#81A1C1;">}</span><span style="color:#A3BE8C;">/hello.txt</span><span style="color:#ECEFF4;">`</span><span style="color:#ECEFF4;">,</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">hello, world</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">utf8</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span></code></pre></div><h4 id="读写权限" tabindex="-1"><a class="header-anchor" href="#读写权限"><span>读写权限</span></a></h4><table><thead><tr><th>接口、组件</th><th>读</th><th>写</th></tr></thead><tbody><tr><td>代码包文件</td><td>有</td><td>无</td></tr><tr><td>本地临时文件</td><td>有</td><td>无</td></tr><tr><td>本地缓存文件</td><td>有</td><td>无</td></tr><tr><td>本地用户文件</td><td>有</td><td>有</td></tr></tbody></table><h3 id="清理策略" tabindex="-1"><a class="header-anchor" href="#清理策略"><span>清理策略</span></a></h3><ul><li>本地临时文件只保证在小程序当前生命周期内，一旦小程序被关闭就可能被清理，即下次冷启动不保证可用。</li><li>本地缓存文件和本地用户文件的清理时机跟代码包一样，只有在代码包被清理的时会被清理。</li></ul><div class="hint-container tip"><p class="hint-container-title">提示</p><p>所以说本地用户文件是十分保险的，本地用户文件一定和小程序文件一起消失。</p><p>注: 如果用户太长时间不使用小程序或者手机空间不足，小程序代码包也是可能被杀掉的。这样用户本地的所有数据就会一起丢失。用户再次打开小程序会重新下载小程序代码包并进入初始化流程。</p></div>',8);function f(x,b){const a=o("Badge");return p(),c("div",null,[d,r(" more "),y,h,E,s("h3",F,[s("a",g,[s("span",null,[t("本地缓存文件 "),l(a,{text:"无需使用",type:"grey"})])])]),m,s("h3",C,[s("a",u,[s("span",null,[t("本地用户文件 "),l(a,{text:"重要",type:"error"})])])]),D])}const k=n(i,[["render",f],["__file","file-system.html.vue"]]),S=JSON.parse('{"path":"/code/mini-app/guide/ability/file-system.html","title":"文件系统","lang":"zh-CN","frontmatter":{"date":"2020-10-09T00:00:00.000Z","title":"文件系统","icon":"file","category":"小程序","description":"文件系统是小程序提供的一套以小程序和用户维度隔离的存储以及一套相应的管理接口。通过 wx.getFileSystemManager() 可以获取到全局唯一的文件系统管理器，所有文件系统的管理操作通过 FileSystemManager 来调用。 文件主要分为两大类: 代码包文件: 代码包文件指的是在项目目录中添加的文件。 本地文件: 通过调用接口本地产...","head":[["meta",{"property":"og:url","content":"https://SperaC.github.io/code/mini-app/guide/ability/file-system.html"}],["meta",{"property":"og:site_name","content":"SperaC"}],["meta",{"property":"og:title","content":"文件系统"}],["meta",{"property":"og:description","content":"文件系统是小程序提供的一套以小程序和用户维度隔离的存储以及一套相应的管理接口。通过 wx.getFileSystemManager() 可以获取到全局唯一的文件系统管理器，所有文件系统的管理操作通过 FileSystemManager 来调用。 文件主要分为两大类: 代码包文件: 代码包文件指的是在项目目录中添加的文件。 本地文件: 通过调用接口本地产..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://res.wx.qq.com/wxdoc/dist/assets/img/code-package.ea949c8d.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-25T17:47:26.000Z"}],["meta",{"property":"article:author","content":"SperaC"}],["meta",{"property":"article:published_time","content":"2020-10-09T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-01-25T17:47:26.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"文件系统\\",\\"image\\":[\\"https://res.wx.qq.com/wxdoc/dist/assets/img/code-package.ea949c8d.png\\",\\"https://res.wx.qq.com/wxdoc/dist/assets/img/file-sandbox.9ef4d15a.png\\"],\\"datePublished\\":\\"2020-10-09T00:00:00.000Z\\",\\"dateModified\\":\\"2024-01-25T17:47:26.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"SperaC\\",\\"url\\":\\"https://SperaC.github.io\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://SperaC.github.io/atom.xml","title":"SperaC Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://SperaC.github.io/feed.json","title":"SperaC JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://SperaC.github.io/rss.xml","title":"SperaC RSS Feed"}]]},"headers":[{"level":2,"title":"代码包文件","slug":"代码包文件","link":"#代码包文件","children":[{"level":3,"title":"访问代码包文件","slug":"访问代码包文件","link":"#访问代码包文件","children":[]},{"level":3,"title":"修改代码包文件","slug":"修改代码包文件","link":"#修改代码包文件","children":[]},{"level":3,"title":"本地文件","slug":"本地文件","link":"#本地文件","children":[]},{"level":3,"title":"本地临时文件","slug":"本地临时文件","link":"#本地临时文件","children":[]},{"level":3,"title":"本地缓存文件","slug":"本地缓存文件","link":"#本地缓存文件","children":[]},{"level":3,"title":"本地用户文件","slug":"本地用户文件","link":"#本地用户文件","children":[]},{"level":3,"title":"清理策略","slug":"清理策略","link":"#清理策略","children":[]}]}],"git":{"createdTime":1591204114000,"updatedTime":1706204846000,"contributors":[{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":4},{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":1}]},"readingTime":{"minutes":4.46,"words":1338},"filePathRelative":"code/mini-app/guide/ability/file-system.md","localizedDate":"2020年10月9日","excerpt":"<p>文件系统是小程序提供的一套以小程序和用户维度隔离的存储以及一套相应的管理接口。通过 <code>wx.getFileSystemManager()</code> 可以获取到全局唯一的文件系统管理器，所有文件系统的管理操作通过 FileSystemManager 来调用。</p>\\n<div class=\\"language-js\\" data-highlighter=\\"shiki\\" data-ext=\\"js\\" data-title=\\"js\\" style=\\"background-color:#2e3440ff;color:#d8dee9ff\\"><pre class=\\"shiki nord vp-code\\"><code><span class=\\"line\\"><span style=\\"color:#81A1C1\\">const</span><span style=\\"color:#D8DEE9\\"> fs</span><span style=\\"color:#81A1C1\\"> =</span><span style=\\"color:#D8DEE9\\"> wx</span><span style=\\"color:#ECEFF4\\">.</span><span style=\\"color:#88C0D0\\">getFileSystemManager</span><span style=\\"color:#D8DEE9FF\\">()</span><span style=\\"color:#81A1C1\\">;</span></span></code></pre>\\n</div><p>文件主要分为两大类:</p>\\n<ul>\\n<li>代码包文件: 代码包文件指的是在项目目录中添加的文件。</li>\\n<li>本地文件: 通过调用接口本地产生，或通过网络下载下来，存储到本地的文件。</li>\\n</ul>\\n","autoDesc":true}');export{k as comp,S as data};
