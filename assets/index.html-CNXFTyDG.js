import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as a,d as e}from"./app-BlgNmpc-.js";const l={},o=e(`<p>目前使用的系统是 WSL2。</p><p>其中以下操作可能需要在新机器上进行相同操作:</p><h2 id="windows-侧" tabindex="-1"><a class="header-anchor" href="#windows-侧"><span>Windows 侧</span></a></h2><p>Windows 侧可以在用户目录下创建 <code>.wslconfig</code> 文件，用于配置 WSL2。</p><div class="language-conf" data-highlighter="shiki" data-ext="conf" data-title="conf" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#ECEFF4;">[</span><span style="color:#D8DEE9FF;">wsl2</span><span style="color:#ECEFF4;">]</span></span>
<span class="line"><span style="color:#616E88;"># Limits VM memory in WSL 2 to 8 GB</span></span>
<span class="line"><span style="color:#81A1C1;">memory</span><span style="color:#ECEFF4;">=</span><span style="color:#D8DEE9FF;">8GB</span></span></code></pre></div><h2 id="wsl-侧" tabindex="-1"><a class="header-anchor" href="#wsl-侧"><span>WSL 侧</span></a></h2><p>WSL 侧可以通过 <code>/etc/wsl.conf</code> 进行配置。</p><h3 id="启用-init-d-支持" tabindex="-1"><a class="header-anchor" href="#启用-init-d-支持"><span>启用 init.d 支持</span></a></h3><p>在 <code>/etc/wsl.conf</code> 中加入:</p><div class="language-conf" data-highlighter="shiki" data-ext="conf" data-title="conf" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#ECEFF4;">[</span><span style="color:#D8DEE9FF;">boot</span><span style="color:#ECEFF4;">]</span></span>
<span class="line"><span style="color:#81A1C1;">systemd</span><span style="color:#ECEFF4;">=</span><span style="color:#D8DEE9FF;">true</span></span></code></pre></div><h3 id="生成新的-rsa-密钥" tabindex="-1"><a class="header-anchor" href="#生成新的-rsa-密钥"><span>生成新的 RSA 密钥</span></a></h3><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#88C0D0;">ssh-keygen</span><span style="color:#A3BE8C;"> -t</span><span style="color:#A3BE8C;"> rsa</span><span style="color:#A3BE8C;"> -C</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">SperaC@outlook.com</span><span style="color:#ECEFF4;">&quot;</span></span></code></pre></div><h3 id="使用-windows-代理" tabindex="-1"><a class="header-anchor" href="#使用-windows-代理"><span>使用 Windows 代理</span></a></h3><p>可以在 <code>.bashrc</code> 中加入以下内容:</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#616E88;"># add for proxy</span></span>
<span class="line"><span style="color:#81A1C1;">export</span><span style="color:#D8DEE9;"> hostIP</span><span style="color:#81A1C1;">=</span><span style="color:#ECEFF4;">$(</span><span style="color:#88C0D0;">ip</span><span style="color:#A3BE8C;"> route</span><span style="color:#81A1C1;"> |</span><span style="color:#88C0D0;"> grep</span><span style="color:#A3BE8C;"> default</span><span style="color:#81A1C1;"> |</span><span style="color:#88C0D0;"> awk</span><span style="color:#ECEFF4;"> &#39;</span><span style="color:#A3BE8C;">{print $3}</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#ECEFF4;">)</span></span>
<span class="line"><span style="color:#81A1C1;">export</span><span style="color:#D8DEE9;"> socks5Port</span><span style="color:#81A1C1;">=</span><span style="color:#B48EAD;">10810</span></span>
<span class="line"><span style="color:#81A1C1;">export</span><span style="color:#D8DEE9;"> httpPort</span><span style="color:#81A1C1;">=</span><span style="color:#B48EAD;">10811</span></span>
<span class="line"></span>
<span class="line"><span style="color:#81A1C1;">alias</span><span style="color:#D8DEE9;"> proxy</span><span style="color:#81A1C1;">=</span><span style="color:#ECEFF4;">&#39;</span></span>
<span class="line"><span style="color:#A3BE8C;">  export HTTPS_PROXY=&quot;socks5://\${hostIP}:\${socks5Port}&quot;;</span></span>
<span class="line"><span style="color:#A3BE8C;">  export HTTP_PROXY=&quot;socks5://\${hostIP}:\${socks5Port}&quot;;</span></span>
<span class="line"><span style="color:#A3BE8C;">  export ALL_PROXY=&quot;socks5://\${hostIP}:\${socks5Port}&quot;;</span></span>
<span class="line"><span style="color:#A3BE8C;">  git config --global http.proxy &quot;socks5://\${hostIP}:\${socks5Port}&quot;;</span></span>
<span class="line"><span style="color:#A3BE8C;">  git config --global https.proxy &quot;socks5://\${hostIP}:\${socks5Port}&quot;;</span></span>
<span class="line"><span style="color:#A3BE8C;">  echo -e &quot;Acquire::http::Proxy \\&quot;socks5://\${hostIP}:\${socks5Port}\\&quot;; &quot; | sudo tee -a /etc/apt/apt.conf.d/proxy.conf;</span></span>
<span class="line"><span style="color:#A3BE8C;">  echo -e &quot;Acquire::https::Proxy \\&quot;socks5://\${hostIP}:\${socks5Port}\\&quot;; &quot; | sudo tee -a /etc/apt/apt.conf.d/proxy.conf;</span></span>
<span class="line"><span style="color:#A3BE8C;">  if [ -e &quot;~/.ssh/config&quot;]; then</span></span>
<span class="line"><span style="color:#A3BE8C;">    sed -i &quot;s/^ProxyCommand \\/usr\\/bin\\/corkscrew .* %h %p$/ProxyCommand \\/usr\\/bin\\/corkscrew \${hostIP} \${httpPort} %h %p/g&quot; ~/.ssh/config;</span></span>
<span class="line"><span style="color:#A3BE8C;">  else</span></span>
<span class="line"><span style="color:#A3BE8C;">    echo &quot;Host github.com</span></span>
<span class="line"><span style="color:#A3BE8C;">  User git</span></span>
<span class="line"><span style="color:#A3BE8C;">  Port 22</span></span>
<span class="line"><span style="color:#A3BE8C;">  Hostname github.com</span></span>
<span class="line"><span style="color:#A3BE8C;">  IdentityFile &quot;~/.ssh/id_rsa&quot;</span></span>
<span class="line"><span style="color:#A3BE8C;">  TCPKeepAlive yes</span></span>
<span class="line"><span style="color:#A3BE8C;">  ProxyCommand /usr/bin/corkscrew \${hostIP} \${httpPort} %h %p</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A3BE8C;">Host ssh.github.com</span></span>
<span class="line"><span style="color:#A3BE8C;">  User git</span></span>
<span class="line"><span style="color:#A3BE8C;">  Port 443</span></span>
<span class="line"><span style="color:#A3BE8C;">  Hostname ssh.github.com</span></span>
<span class="line"><span style="color:#A3BE8C;">  IdentityFile &quot;~/.ssh/id_rsa&quot;</span></span>
<span class="line"><span style="color:#A3BE8C;">  TCPKeepAlive yes</span></span>
<span class="line"><span style="color:#A3BE8C;">  ProxyCommand /usr/bin/corkscrew \${hostIP} \${httpPort} %h %p</span></span>
<span class="line"><span style="color:#A3BE8C;">&quot;</span></span>
<span class="line"><span style="color:#ECEFF4;">&#39;</span></span>
<span class="line"><span style="color:#81A1C1;">alias</span><span style="color:#D8DEE9;"> unproxy</span><span style="color:#81A1C1;">=</span><span style="color:#ECEFF4;">&#39;</span></span>
<span class="line"><span style="color:#A3BE8C;">  unset HTTPS_PROXY;</span></span>
<span class="line"><span style="color:#A3BE8C;">  unset HTTP_PROXY;</span></span>
<span class="line"><span style="color:#A3BE8C;">  unset ALL_PROXY;</span></span>
<span class="line"><span style="color:#A3BE8C;">  git config --global --unset http.proxy;</span></span>
<span class="line"><span style="color:#A3BE8C;">  git config --global --unset https.proxy;</span></span>
<span class="line"><span style="color:#A3BE8C;">  sudo sed -i -e </span><span style="color:#ECEFF4;">&#39;</span><span style="color:#D8DEE9FF;">/Acquire::http::Proxy/d</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;"> /etc/apt/apt.conf.d/proxy.conf;</span></span>
<span class="line"><span style="color:#A3BE8C;">  sudo sed -i -e </span><span style="color:#ECEFF4;">&#39;</span><span style="color:#D8DEE9FF;">/Acquire::https::Proxy/d</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;"> /etc/apt/apt.conf.d/proxy.conf;</span></span>
<span class="line"><span style="color:#ECEFF4;">&#39;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样就可以快速地使用 proxy 和 unproxy 命令。</p><h3 id="安装-nvm-和-node-js" tabindex="-1"><a class="header-anchor" href="#安装-nvm-和-node-js"><span>安装 nvm 和 Node.js</span></a></h3><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#88C0D0;">curl</span><span style="color:#A3BE8C;"> -o-</span><span style="color:#A3BE8C;"> https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh</span><span style="color:#81A1C1;"> |</span><span style="color:#88C0D0;"> bash</span></span></code></pre></div><ol><li><p>由于 GitHub 已经遭到封锁，可以考虑安装 V2Ray 给 WSL2 以获得推送代码的能力。</p></li><li><p>更改 Node.js 可以使用的 Old Space 大小:</p><p>在用户目录的 <code>.bashrc</code> 中加入:</p><div class="language-conf" data-highlighter="shiki" data-ext="conf" data-title="conf" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#D8DEE9FF;">export </span><span style="color:#81A1C1;">NODE_OPTIONS</span><span style="color:#ECEFF4;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">--max-old-space-size=8192</span><span style="color:#ECEFF4;">&quot;</span></span></code></pre></div></li></ol>`,19),t=[o];function p(i,c){return n(),a("div",null,t)}const y=s(l,[["render",p],["__file","index.html.vue"]]),h=JSON.parse('{"path":"/note/wsl/","title":"WSL","lang":"zh-CN","frontmatter":{"date":"2022-11-06T00:00:00.000Z","title":"WSL","description":"目前使用的系统是 WSL2。 其中以下操作可能需要在新机器上进行相同操作: Windows 侧 Windows 侧可以在用户目录下创建 .wslconfig 文件，用于配置 WSL2。 WSL 侧 WSL 侧可以通过 /etc/wsl.conf 进行配置。 启用 init.d 支持 在 /etc/wsl.conf 中加入: 生成新的 RSA 密钥 使用...","head":[["meta",{"property":"og:url","content":"https://SperaC.github.io/note/wsl/"}],["meta",{"property":"og:site_name","content":"SperaC"}],["meta",{"property":"og:title","content":"WSL"}],["meta",{"property":"og:description","content":"目前使用的系统是 WSL2。 其中以下操作可能需要在新机器上进行相同操作: Windows 侧 Windows 侧可以在用户目录下创建 .wslconfig 文件，用于配置 WSL2。 WSL 侧 WSL 侧可以通过 /etc/wsl.conf 进行配置。 启用 init.d 支持 在 /etc/wsl.conf 中加入: 生成新的 RSA 密钥 使用..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-09T02:42:38.000Z"}],["meta",{"property":"article:author","content":"SperaC"}],["meta",{"property":"article:published_time","content":"2022-11-06T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-09-09T02:42:38.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"WSL\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-11-06T00:00:00.000Z\\",\\"dateModified\\":\\"2024-09-09T02:42:38.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"SperaC\\",\\"url\\":\\"https://SperaC.github.io\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://SperaC.github.io/atom.xml","title":"SperaC Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://SperaC.github.io/feed.json","title":"SperaC JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://SperaC.github.io/rss.xml","title":"SperaC RSS Feed"}]]},"headers":[{"level":2,"title":"Windows 侧","slug":"windows-侧","link":"#windows-侧","children":[]},{"level":2,"title":"WSL 侧","slug":"wsl-侧","link":"#wsl-侧","children":[{"level":3,"title":"启用 init.d 支持","slug":"启用-init-d-支持","link":"#启用-init-d-支持","children":[]},{"level":3,"title":"生成新的 RSA 密钥","slug":"生成新的-rsa-密钥","link":"#生成新的-rsa-密钥","children":[]},{"level":3,"title":"使用 Windows 代理","slug":"使用-windows-代理","link":"#使用-windows-代理","children":[]},{"level":3,"title":"安装 nvm 和 Node.js","slug":"安装-nvm-和-node-js","link":"#安装-nvm-和-node-js","children":[]}]}],"git":{"createdTime":1670336302000,"updatedTime":1725849758000,"contributors":[{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":2},{"name":"zenghuxin","email":"2388287586@qq.com","commits":1}]},"readingTime":{"minutes":1.3,"words":391},"filePathRelative":"note/wsl/README.md","localizedDate":"2022年11月6日","excerpt":"","autoDesc":true}');export{y as comp,h as data};
