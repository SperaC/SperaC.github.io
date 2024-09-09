import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as e,d as l}from"./app-BlgNmpc-.js";const n={},o=l(`<h1 id="文本处理" tabindex="-1"><a class="header-anchor" href="#文本处理"><span>文本处理</span></a></h1><h2 id="cat" tabindex="-1"><a class="header-anchor" href="#cat"><span>cat</span></a></h2><p><code>cat</code> 可以文件的内容，显示在标准输出。</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#88C0D0;">$</span><span style="color:#A3BE8C;"> cat</span><span style="color:#A3BE8C;"> text1</span></span>
<span class="line"><span style="color:#88C0D0;">1</span><span style="color:#A3BE8C;"> apple</span></span>
<span class="line"><span style="color:#88C0D0;">2</span><span style="color:#A3BE8C;"> pear</span></span>
<span class="line"><span style="color:#88C0D0;">3</span><span style="color:#A3BE8C;"> banana</span></span></code></pre></div><p>它也可以同时输出多个文件内容。</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#88C0D0;">cat</span><span style="color:#A3BE8C;"> text1</span><span style="color:#A3BE8C;"> text2</span></span></code></pre></div><p>它与重定向结合，就可以合并多个文件。</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#616E88;"># 合并文本文件</span></span>
<span class="line"><span style="color:#88C0D0;">$</span><span style="color:#A3BE8C;"> cat</span><span style="color:#A3BE8C;"> text</span><span style="color:#81A1C1;">*</span><span style="color:#81A1C1;"> &gt;</span><span style="color:#A3BE8C;"> text.all</span></span>
<span class="line"></span>
<span class="line"><span style="color:#616E88;"># 合并二进制文件</span></span>
<span class="line"><span style="color:#88C0D0;">$</span><span style="color:#A3BE8C;"> cat</span><span style="color:#A3BE8C;"> movie.mpeg.0</span><span style="color:#81A1C1;">*</span><span style="color:#81A1C1;"> &gt;</span><span style="color:#A3BE8C;"> movie.mpeg</span></span></code></pre></div><p>如果调用 <code>cat</code> 命令时没有任何参数，它将读取标准输入，然后显示到标准输出。按下 <code>Ctrl + d</code>，将会结束 <code>cat</code> 读取标准输入。利用这一点，可以将键盘输入写入指定文件，按下 <code>Ctrl + d</code> 结束输入。</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#88C0D0;">cat</span><span style="color:#81A1C1;"> &gt;</span><span style="color:#A3BE8C;"> lazy_dog.txt</span></span></code></pre></div><p>它的参数如下。</p><ul><li><code>-n</code> 输出结果显示行号</li><li><code>-s</code> 将多个连续的空白行，输出为一行</li><li><code>-A</code> 输出结果中显示控制符，比如 Tab 键显示为 <code>^I</code>，行尾显示<code>$</code></li></ul><p><code>cat</code> 支持 Here document，显示多行文本。</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#88C0D0;">cat</span><span style="color:#81A1C1;"> &lt;&lt;</span><span style="color:#ECEFF4;"> _EOF_</span></span>
<span class="line"><span style="color:#A3BE8C;">&lt;HTML&gt;</span></span>
<span class="line"><span style="color:#A3BE8C;">         &lt;HEAD&gt;</span></span>
<span class="line"><span style="color:#A3BE8C;">                &lt;TITLE&gt;</span><span style="color:#D8DEE9;">$TITLE</span><span style="color:#A3BE8C;">&lt;/TITLE&gt;</span></span>
<span class="line"><span style="color:#A3BE8C;">         &lt;/HEAD&gt;</span></span>
<span class="line"><span style="color:#A3BE8C;">         &lt;BODY&gt;</span></span>
<span class="line"><span style="color:#A3BE8C;">                &lt;H1&gt;</span><span style="color:#D8DEE9;">$TITLE</span><span style="color:#A3BE8C;">&lt;/H1&gt;</span></span>
<span class="line"><span style="color:#A3BE8C;">                &lt;P&gt;</span><span style="color:#D8DEE9;">$TIME_STAMP</span><span style="color:#A3BE8C;">&lt;/P&gt;</span></span>
<span class="line"><span style="color:#A3BE8C;">         &lt;/BODY&gt;</span></span>
<span class="line"><span style="color:#A3BE8C;">&lt;/HTML&gt;</span></span>
<span class="line"><span style="color:#ECEFF4;">_EOF_</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Here document 常在脚本当中作为输入的手段。</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#88C0D0;">$</span><span style="color:#A3BE8C;"> sort</span><span style="color:#A3BE8C;"> -k2</span><span style="color:#81A1C1;"> &lt;&lt;</span><span style="color:#ECEFF4;">END</span></span>
<span class="line"><span style="color:#A3BE8C;">&gt; 1 apple</span></span>
<span class="line"><span style="color:#A3BE8C;">&gt; 2 pear</span></span>
<span class="line"><span style="color:#A3BE8C;">&gt; 3 banana</span></span>
<span class="line"><span style="color:#A3BE8C;">&gt; END</span></span>
<span class="line"><span style="color:#A3BE8C;">1 apple</span></span>
<span class="line"><span style="color:#A3BE8C;">3 banana</span></span>
<span class="line"><span style="color:#A3BE8C;">2 pear</span></span></code></pre></div><p>如果使用 <code>&lt;&lt;-</code> 代替 <code>&lt;&lt;</code>，行首的 tab 键将被剥离。</p><h2 id="nl" tabindex="-1"><a class="header-anchor" href="#nl"><span>nl</span></a></h2><p><code>nl</code> 命令为文本文件添加行号，显示在标准输出。</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#88C0D0;">nl</span><span style="color:#A3BE8C;"> example.txt</span></span></code></pre></div><h2 id="sort" tabindex="-1"><a class="header-anchor" href="#sort"><span>sort</span></a></h2><p><code>sort</code> 命令将文本文件的所有行排序后输出。</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#88C0D0;">sort</span><span style="color:#A3BE8C;"> file1.txt</span><span style="color:#A3BE8C;"> file2.txt</span><span style="color:#A3BE8C;"> file3.txt</span><span style="color:#81A1C1;"> &gt;</span><span style="color:#A3BE8C;"> final_sorted_list.txt</span></span></code></pre></div><p>它的参数如下。</p><ul><li><code>-b</code> <code>--ignore-leading-blanks</code> 默认情况下，排序用的是每行的第一个字符。这个参数忽略每行开头的空格，从第一个非空白字符开始排序。</li><li><code>-f</code> <code>--ignore-case</code> 让排序不区分大小写。</li><li><code>-n</code> <code>--numeric-sort</code> 按照数值排序，而不是字符值，用于行首是数值的情况。</li><li><code>-r</code> <code>--reverse</code> 按相反顺序排序。结果按照降序排列，而不是升序。</li><li><code>-k</code> <code>--key=field1[,field2]</code> 指定按照每行的第几个字段(从 1 开始)排序，而不是按照行首字符排序。该属性可以多个连用，用于指定多重排序标准，还可以指定每个字段指定排序标准，这些值与全局属性一致，比如 b(忽略开头的空格)，n(数值排序)，r(逆向排序)等等。</li><li><code>-m</code> <code>--merge</code> 把每个参数看作是一个预先排好序的文件。把多个文件合并成一个排好序的文件，而没有执行额外的排序。</li><li><code>-o</code> <code>--output=file</code> 把排好序的输出结果发送到文件，而不是标准输出。</li><li><code>-t</code> <code>--field-separator=char</code> 定义字段分隔字符。默认情况下，字段由空格或制表符分隔。</li><li><code>-u</code> 输出结果中删除重复行</li></ul><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#88C0D0;">sort</span><span style="color:#A3BE8C;"> --key=1,1</span><span style="color:#A3BE8C;"> --key=2n</span><span style="color:#A3BE8C;"> distros.txt</span></span></code></pre></div><p>上面命令中，第一个 <code>--key</code> 指定第一排序标准是只用第一字段(<code>1,1</code>)，也可以指定使用第一字段第一个字符(<code>1.1</code>)；第二排序标准是第二字段，按数值排序。</p><h2 id="uniq" tabindex="-1"><a class="header-anchor" href="#uniq"><span>uniq</span></a></h2><p><code>uniq</code> 命令在排序后的行中，删除所有重复的行，保证所有输出没有重复。</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#88C0D0;">ls</span><span style="color:#A3BE8C;"> /bin</span><span style="color:#A3BE8C;"> /usr/bin</span><span style="color:#81A1C1;"> |</span><span style="color:#88C0D0;"> sort</span><span style="color:#81A1C1;"> |</span><span style="color:#88C0D0;"> uniq</span></span></code></pre></div><p>它的参数如下。</p><ul><li><code>-c</code> 输出所有的重复行，并且每行开头显示重复的次数。</li><li><code>-d</code> 只输出重复行，而不是不重复的文本行。</li><li><code>-f n</code> 忽略每行开头的 n 个字段，字段之间由空格分隔，正如 sort 程序中的空格分隔符；然而， 不同于 sort 程序，uniq 没有选项来设置备用的字段分隔符。</li><li><code>-i</code> 在比较文本行的时候忽略大小写。</li><li><code>-s n</code> 跳过(忽略)每行开头的 n 个字符。</li><li><code>-u</code> 只是输出独有的文本行。这是默认的。</li><li><code>-V</code> 按照版本号排序。</li></ul><p><code>-V</code> 参数可以按版本号排列(从小到大)。</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#88C0D0;">$</span><span style="color:#A3BE8C;"> sort</span><span style="color:#A3BE8C;"> -V</span><span style="color:#A3BE8C;"> input.txt</span></span>
<span class="line"><span style="color:#88C0D0;">1.0.15</span></span>
<span class="line"><span style="color:#88C0D0;">1.3.0</span></span>
<span class="line"><span style="color:#88C0D0;">2.1.2</span></span>
<span class="line"><span style="color:#88C0D0;">3.0.0</span></span></code></pre></div><p><code>-rV</code> 参数可以按版本号逆序排列。</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#88C0D0;">$</span><span style="color:#A3BE8C;"> sort</span><span style="color:#A3BE8C;"> -rV</span><span style="color:#A3BE8C;"> input.txt</span></span>
<span class="line"><span style="color:#88C0D0;">3.0.0</span></span>
<span class="line"><span style="color:#88C0D0;">2.1.2</span></span>
<span class="line"><span style="color:#88C0D0;">1.3.0</span></span>
<span class="line"><span style="color:#88C0D0;">1.0.15</span></span></code></pre></div><h2 id="cut" tabindex="-1"><a class="header-anchor" href="#cut"><span>cut</span></a></h2><p><code>cut</code> 程序用来从文本行中抽取文本，并把其输出到标准输出。它能够接受多个文件参数或者标准输入。</p><p>它的参数如下。</p><ul><li><code>-c char_list</code> 抽取指定范围的文本</li><li><code>-f field_list</code> 抽取指定字段，字段之间可以 tab 分隔也可以逗号分隔</li><li><code>-d delim_char</code> 指定字段分隔符，默认是 tab 键</li><li><code>--complement</code> 抽取整个文本行，除了那些由-c 和／或-f 选项指定的文本。</li></ul><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#616E88;"># 抽取每行的第三个字段</span></span>
<span class="line"><span style="color:#88C0D0;">$</span><span style="color:#A3BE8C;"> cut</span><span style="color:#A3BE8C;"> -f</span><span style="color:#B48EAD;"> 3</span><span style="color:#A3BE8C;"> distros.txt</span></span>
<span class="line"></span>
<span class="line"><span style="color:#616E88;"># 抽取每行的第7到第10个字符</span></span>
<span class="line"><span style="color:#88C0D0;">$</span><span style="color:#A3BE8C;"> cut</span><span style="color:#A3BE8C;"> -c</span><span style="color:#A3BE8C;"> 7-10</span><span style="color:#A3BE8C;"> distros.txt</span></span>
<span class="line"></span>
<span class="line"><span style="color:#616E88;"># 抽取每行的第23个到结尾的字符1</span></span>
<span class="line"><span style="color:#88C0D0;">$</span><span style="color:#A3BE8C;"> cut</span><span style="color:#A3BE8C;"> -c</span><span style="color:#A3BE8C;"> 23-</span><span style="color:#A3BE8C;"> distros.txt</span></span>
<span class="line"></span>
<span class="line"><span style="color:#616E88;"># 指定字段分隔符为冒号</span></span>
<span class="line"><span style="color:#88C0D0;">$</span><span style="color:#A3BE8C;"> cut</span><span style="color:#A3BE8C;"> -d</span><span style="color:#ECEFF4;"> &#39;</span><span style="color:#A3BE8C;">:</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;"> -f</span><span style="color:#B48EAD;"> 1</span><span style="color:#A3BE8C;"> /etc/passwd</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="paste" tabindex="-1"><a class="header-anchor" href="#paste"><span>paste</span></a></h2><p><code>paste</code> 程序将多个文本文件按行合并，即每一行都由原来文本文件的每一行组成，显示在标准输出。</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#88C0D0;">paste</span><span style="color:#A3BE8C;"> distros-dates.txt</span><span style="color:#A3BE8C;"> distros-versions.txt</span></span></code></pre></div><h2 id="wc" tabindex="-1"><a class="header-anchor" href="#wc"><span>wc</span></a></h2><p><code>wc</code> 命令输出一个文本文件的统计信息(word count)，一共有三个值，分别为行数、词数和字节数。</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#88C0D0;">$</span><span style="color:#A3BE8C;"> wc</span><span style="color:#A3BE8C;"> ls-output.txt</span></span>
<span class="line"><span style="color:#88C0D0;"> 7902</span><span style="color:#B48EAD;"> 64566</span><span style="color:#B48EAD;"> 503634</span><span style="color:#A3BE8C;"> ls-output.txt</span></span></code></pre></div><p>如果使用 <code>-l</code> 参数，则只输出行数。</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#88C0D0;">$</span><span style="color:#A3BE8C;"> ls</span><span style="color:#A3BE8C;"> /bin</span><span style="color:#A3BE8C;"> /usr/bin</span><span style="color:#81A1C1;"> |</span><span style="color:#88C0D0;"> sort</span><span style="color:#81A1C1;"> |</span><span style="color:#88C0D0;"> uniq</span><span style="color:#81A1C1;"> |</span><span style="color:#88C0D0;"> wc</span><span style="color:#A3BE8C;"> -l</span></span>
<span class="line"><span style="color:#88C0D0;"> 2728</span></span></code></pre></div><h2 id="head" tabindex="-1"><a class="header-anchor" href="#head"><span>head</span></a></h2><p><code>head</code> 命令返回文本文件的头部，默认显示 10 行。</p><p><code>-n</code> 参数指定显示的行数。</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#88C0D0;">head</span><span style="color:#A3BE8C;"> -n</span><span style="color:#B48EAD;"> 5</span><span style="color:#A3BE8C;"> ls-output.txt</span></span></code></pre></div><h2 id="tail" tabindex="-1"><a class="header-anchor" href="#tail"><span>tail</span></a></h2><p><code>tail</code> 命令返回文本文件的尾部，默认显示 10 行。</p><p><code>-n</code> 参数指定显示的行数。</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#88C0D0;">tail</span><span style="color:#A3BE8C;"> -n</span><span style="color:#B48EAD;"> 5</span><span style="color:#A3BE8C;"> ls-output.txt</span></span></code></pre></div><p><code>-f</code> 会实时追加显示新增的内容，常用于实时监控日志，按 <code>Ctrl + c</code> 停止。</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#88C0D0;">tail</span><span style="color:#A3BE8C;"> -f</span><span style="color:#A3BE8C;"> /var/log/messages</span></span></code></pre></div><h2 id="grep" tabindex="-1"><a class="header-anchor" href="#grep"><span>grep</span></a></h2><p><code>grep</code> 程序用于在指定文件之中，搜索符合某个模式的行，并把搜索结果输出到标准输出。</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#88C0D0;">grep</span><span style="color:#A3BE8C;"> keyword</span><span style="color:#A3BE8C;"> foo.txt</span></span></code></pre></div><p>上面命令输出 <code>foo.txt</code> 之中匹配 <code>keyword</code> 的行。</p><p><code>grep</code> 程序可以同时搜索多个文件。</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#88C0D0;">grep</span><span style="color:#A3BE8C;"> keyword</span><span style="color:#A3BE8C;"> f</span><span style="color:#81A1C1;">*</span><span style="color:#A3BE8C;">.txt</span></span></code></pre></div><p>上面命令输出多个文件中匹配 <code>keyword</code> 的行。</p><p><code>-l</code> 参数输出匹配的文件名，而不是文件行。</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#88C0D0;">grep</span><span style="color:#A3BE8C;"> -l</span><span style="color:#A3BE8C;"> bzip</span><span style="color:#A3BE8C;"> dirlist</span><span style="color:#81A1C1;">*</span><span style="color:#A3BE8C;">.txt</span></span></code></pre></div><p>如果想搜索文件名，而不是文件内容，可以使用重定向。</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#88C0D0;">ls</span><span style="color:#A3BE8C;"> /usr/bin</span><span style="color:#81A1C1;"> |</span><span style="color:#88C0D0;"> grep</span><span style="color:#A3BE8C;"> zip</span></span></code></pre></div><p>上面命令会输出<code>/usr/bin</code> 目录中，文件名中包含子字符串 <code>zip</code> 的所有文件。</p><p>参数的含义。</p><ul><li><code>-c</code> 或 <code>--count</code> 输出匹配的数量，而不是匹配的文本行。如果使用了 <code>-v</code>，则输出不匹配的数量。</li><li><code>-h</code> 或 <code>--no-filename</code> 应用于多文件搜索，不在每行匹配的文本前，输出文件名</li><li><code>-i</code> 或 <code>--ignore-case</code> 忽略大小写</li><li><code>-l</code> 或 <code>--files-with-matches</code> 输出包含匹配项的文件名，而不是文本行本身</li><li><code>-L</code> 或 <code>--files-without-match</code> 类似于 <code>-l</code>，但输出不包含匹配项的文件名</li><li><code>-n</code> 或 <code>--line-number</code> 每个匹配行之前输出其对应的行号</li><li><code>-v</code> 或 <code>--invert-match</code> 只返回不符合模式的行</li></ul><h2 id="sed" tabindex="-1"><a class="header-anchor" href="#sed"><span>sed</span></a></h2><p><code>sed</code> 是一个强大的文本编辑工具。</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#616E88;"># 输出前5行</span></span>
<span class="line"><span style="color:#88C0D0;">$</span><span style="color:#A3BE8C;"> sed</span><span style="color:#A3BE8C;"> -n</span><span style="color:#ECEFF4;"> &#39;</span><span style="color:#A3BE8C;">1,5p</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;"> distros.txt</span></span>
<span class="line"></span>
<span class="line"><span style="color:#616E88;"># 输出包含指定内容的行</span></span>
<span class="line"><span style="color:#88C0D0;">$</span><span style="color:#A3BE8C;"> sed</span><span style="color:#A3BE8C;"> -n</span><span style="color:#ECEFF4;"> &#39;</span><span style="color:#A3BE8C;">/SUSE/p</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;"> distros.txt</span></span>
<span class="line"></span>
<span class="line"><span style="color:#616E88;"># 输出不包含指定内容的行</span></span>
<span class="line"><span style="color:#88C0D0;">$</span><span style="color:#A3BE8C;"> sed</span><span style="color:#A3BE8C;"> -n</span><span style="color:#ECEFF4;"> &#39;</span><span style="color:#A3BE8C;">/SUSE/!p</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;"> distros.txt</span></span>
<span class="line"></span>
<span class="line"><span style="color:#616E88;"># 替换内容(只替换第一个)</span></span>
<span class="line"><span style="color:#88C0D0;">$</span><span style="color:#A3BE8C;"> sed</span><span style="color:#ECEFF4;"> &#39;</span><span style="color:#A3BE8C;">s/regexp/replacement/</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;"> distros.txt</span></span>
<span class="line"></span>
<span class="line"><span style="color:#616E88;"># 替换内容(全局替换)</span></span>
<span class="line"><span style="color:#88C0D0;">$</span><span style="color:#A3BE8C;"> sed</span><span style="color:#ECEFF4;"> &#39;</span><span style="color:#A3BE8C;">s/regexp/replacement/g</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;"> distros.txt</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,76),p=[o];function c(t,i){return a(),e("div",null,p)}const h=s(n,[["render",c],["__file","text.html.vue"]]),y=JSON.parse('{"path":"/linux/bash/archives/text.html","title":"文本处理","lang":"zh-CN","frontmatter":{"date":"2020-06-04T00:00:00.000Z","description":"文本处理 cat cat 可以文件的内容，显示在标准输出。 它也可以同时输出多个文件内容。 它与重定向结合，就可以合并多个文件。 如果调用 cat 命令时没有任何参数，它将读取标准输入，然后显示到标准输出。按下 Ctrl + d，将会结束 cat 读取标准输入。利用这一点，可以将键盘输入写入指定文件，按下 Ctrl + d 结束输入。 它的参数如下。 ...","head":[["meta",{"property":"og:url","content":"https://SperaC.github.io/linux/bash/archives/text.html"}],["meta",{"property":"og:site_name","content":"SperaC"}],["meta",{"property":"og:title","content":"文本处理"}],["meta",{"property":"og:description","content":"文本处理 cat cat 可以文件的内容，显示在标准输出。 它也可以同时输出多个文件内容。 它与重定向结合，就可以合并多个文件。 如果调用 cat 命令时没有任何参数，它将读取标准输入，然后显示到标准输出。按下 Ctrl + d，将会结束 cat 读取标准输入。利用这一点，可以将键盘输入写入指定文件，按下 Ctrl + d 结束输入。 它的参数如下。 ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-07T05:21:25.000Z"}],["meta",{"property":"article:author","content":"SperaC"}],["meta",{"property":"article:published_time","content":"2020-06-04T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-07T05:21:25.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"文本处理\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-06-04T00:00:00.000Z\\",\\"dateModified\\":\\"2024-04-07T05:21:25.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"SperaC\\",\\"url\\":\\"https://SperaC.github.io\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://SperaC.github.io/atom.xml","title":"SperaC Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://SperaC.github.io/feed.json","title":"SperaC JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://SperaC.github.io/rss.xml","title":"SperaC RSS Feed"}]]},"headers":[{"level":2,"title":"cat","slug":"cat","link":"#cat","children":[]},{"level":2,"title":"nl","slug":"nl","link":"#nl","children":[]},{"level":2,"title":"sort","slug":"sort","link":"#sort","children":[]},{"level":2,"title":"uniq","slug":"uniq","link":"#uniq","children":[]},{"level":2,"title":"cut","slug":"cut","link":"#cut","children":[]},{"level":2,"title":"paste","slug":"paste","link":"#paste","children":[]},{"level":2,"title":"wc","slug":"wc","link":"#wc","children":[]},{"level":2,"title":"head","slug":"head","link":"#head","children":[]},{"level":2,"title":"tail","slug":"tail","link":"#tail","children":[]},{"level":2,"title":"grep","slug":"grep","link":"#grep","children":[]},{"level":2,"title":"sed","slug":"sed","link":"#sed","children":[]}],"git":{"createdTime":1591204114000,"updatedTime":1712467285000,"contributors":[{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":2},{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":1}]},"readingTime":{"minutes":5.88,"words":1763},"filePathRelative":"linux/bash/archives/text.md","localizedDate":"2020年6月4日","excerpt":"","autoDesc":true}');export{h as comp,y as data};
