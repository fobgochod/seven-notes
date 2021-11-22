(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{693:function(s,a,t){"use strict";t.r(a);var n=t(17),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"jvm"}},[s._v("JVM")]),s._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://docs.oracle.com/javase/specs/index.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("Java Language and Virtual Machine Specifications"),t("OutboundLink")],1)]),s._v(" "),t("li",[t("a",{attrs:{href:"https://docs.oracle.com/javase/8/docs/technotes/tools/windows/java.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("JDK8启动参数-Windows"),t("OutboundLink")],1)]),s._v(" "),t("li",[t("a",{attrs:{href:"https://docs.oracle.com/javase/8/docs/technotes/tools/unix/java.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("JDK8启动参数-UNIX"),t("OutboundLink")],1)]),s._v(" "),t("li",[t("a",{attrs:{href:"https://docs.oracle.com/en/java/javase/17/docs/specs/man/java.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("JDK17启动参数"),t("OutboundLink")],1)])]),s._v(" "),t("h3",{attrs:{id:"jvm配置参数分类"}},[s._v("JVM配置参数分类")]),s._v(" "),t("h5",{attrs:{id:"standard-options"}},[s._v("Standard Options(-)")]),s._v(" "),t("blockquote",[t("p",[s._v("These are the most commonly used options that are supported by all implementations of the JVM.")])]),s._v(" "),t("h5",{attrs:{id:"non-standard-options-x"}},[s._v("Non-Standard Options(-X)")]),s._v(" "),t("blockquote",[t("p",[s._v("These options are general purpose options that are specific to the Java HotSpot Virtual Machine.")])]),s._v(" "),t("h5",{attrs:{id:"advanced-runtime-options-xx"}},[s._v("Advanced Runtime Options(-XX)")]),s._v(" "),t("blockquote",[t("p",[s._v("These options control the runtime behavior of the Java HotSpot VM.")])]),s._v(" "),t("h3",{attrs:{id:"查看参数"}},[s._v("查看参数")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 是打印所有的默认参数设置")]),s._v("\n-XX:+PrintFlagsInitial\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 是打印最终值，如果某个默认值被新值覆盖，显示新值")]),s._v("\n-XX:+PrintFlagsFinal\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 是打印那些被新值覆盖的项")]),s._v("\n-XX:+PrintCommandLineFlags\n\njava -XX:+PrintFlagsInitial\njava -XX:+PrintFlagsFinal -version "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('":"')]),s._v("\njava -XX:+PrintCommandLineFlags -version\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("p",[s._v("格式如下： Type | Name | Operator | Value | Application")]),s._v(" "),t("ul",[t("li",[s._v("product – 官方支持, JVM内部选项")]),s._v(" "),t("li",[s._v("rw – 可动态写入的.")]),s._v(" "),t("li",[s._v("C1 – Client JIT 编译器")]),s._v(" "),t("li",[s._v("C2 – Server JIT 编译器")]),s._v(" "),t("li",[s._v("pd – platform Dependent 平台独立")]),s._v(" "),t("li",[s._v("lp64 – 仅 64 位JVM")]),s._v(" "),t("li",[s._v("manageable – 外部定义的并且是可动态写入的.")]),s._v(" "),t("li",[s._v("diagnostic – 用于虚拟机debug的")]),s._v(" "),t("li",[s._v("experimental – 非官方支持的")])]),s._v(" "),t("h3",{attrs:{id:"内存区域"}},[s._v("内存区域")]),s._v(" "),t("p",[t("img",{attrs:{src:"/images/jvm/jvm-1.png",alt:""}})]),s._v(" "),t("ul",[t("li",[s._v("控制参数详解\n"),t("ul",[t("li",[s._v("-Xms设置堆的最小空间大小。")]),s._v(" "),t("li",[s._v("-Xmx设置堆的最大空间大小。")]),s._v(" "),t("li",[s._v("-Xmn堆中新生代初始及最大大小（NewSize和MaxNewSize为其细化）。")]),s._v(" "),t("li",[s._v("-XX:NewSize设置新生代最小空间大小。")]),s._v(" "),t("li",[s._v("-XX:MaxNewSize设置新生代最大空间大小。")]),s._v(" "),t("li",[s._v("-XX:PermSize设置永久代最小空间大小。")]),s._v(" "),t("li",[s._v("-XX:MaxPermSize设置永久代最大空间大小。")]),s._v(" "),t("li",[s._v("-Xss设置每个线程的堆栈大小。")])])])]),s._v(" "),t("p",[s._v("-XX:NewRatio=2")]),s._v(" "),t("ul",[t("li",[s._v("默认 -XX:NewRatio=2 新生代占1,老年代占2,年轻代占整个堆的1/3")]),s._v(" "),t("li",[s._v("假如 -XX:NewRatio=4 新生代占1,老年代占4,年轻代占整个堆的1/5")])]),s._v(" "),t("p",[s._v("-XX:SurvivorRatio=8")]),s._v(" "),t("ul",[t("li",[s._v("默认 -XX:SurvivorRatio=8 Eden:S0:S1=8:1:1")]),s._v(" "),t("li",[s._v("假如 -XX:SurvivorRatio=4 Eden:S0:S1=4:1:1")])]),s._v(" "),t("p",[s._v("-XX:-UseAdaptiveSizePolicy")]),s._v(" "),t("ul",[t("li",[s._v("开启：-XX:+UseAdaptiveSizePolicy")]),s._v(" "),t("li",[s._v("关闭：-XX:-UseAdaptiveSizePolicy")])]),s._v(" "),t("blockquote",[t("p",[s._v("说明：-XX:NewRatio=默认值是2、-Xmn优先级高于-XX:NewRatio")])]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("java -Xms30M -Xmx30m -XX:+PrintFlagsFinal -version "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" -E "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'(Old|New)Size'")]),s._v("\njava -Xms30M -Xmx30m -XX:NewRatio"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" -XX:+PrintFlagsFinal -version "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" -E "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'(Old|New)Size'")]),s._v("\njava -Xms30M -Xmx30m -XX:NewRatio"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" -Xmn20M -XX:+PrintFlagsFinal -version "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" -E "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'(Old|New)Size'")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("-verbose:gc  \n-XX:+PrintGCDetails  \n-XX:+PrintGCDateStamps  \n-Xloggc:E:"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("gc"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("gc.log\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h3",{attrs:{id:"jvm问题排查"}},[s._v("JVM问题排查")]),s._v(" "),t("blockquote",[t("p",[s._v("查看进程ID")])]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@fobgochod ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# jps -l")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1413")]),s._v(" sun.tools.jps.Jps\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 堆内存分布")]),s._v("\njmap -heap "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1413")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# GC信息")]),s._v("\njstat -gcutil "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1413")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 导出堆信息")]),s._v("\njmap -dump:format"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("b,file"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("heap_dump.hprof "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1413")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 导出线程栈")]),s._v("\njstack "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1413")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" jstack.txt\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看进程1413中最耗cpu的子线程")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("top")]),s._v(" -p "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1413")]),s._v(" -H\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将最耗cpu的线程ID转换为16进制输出")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@fobgochod ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# printf "%x \\n" 1413')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("585")]),s._v(" \n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查询具体出现问题的代码位置")]),s._v("\njstack "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("23219")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("585")]),s._v(" -A "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("30")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看java线程数")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" -eLf "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" java "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("wc")]),s._v(" -l\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 监控网络客户连接数")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("netstat")]),s._v(" -n "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" tcp "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("wc")]),s._v(" -l\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查一下tcp连接情况")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("netstat")]),s._v(" -n "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/^tcp/ {++S[$NF]} END {for(a in S) print a, S[a]}'")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);