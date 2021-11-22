(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{639:function(s,n,a){"use strict";a.r(n);var t=a(17),e=Object(t.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"文件目录操作"}},[s._v("文件目录操作")]),s._v(" "),a("h2",{attrs:{id:"cd"}},[s._v("cd")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v("     进入用户主目录；\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" ~   进入用户主目录；\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" -   返回进入此目录之前所在的目录；\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("   还在当前目录\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("  返回上级目录（若当前目录为“/“，则执行完后还在“/"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"；"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v('"为上级目录的意思）；\n'),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /   进入根目录（“/“）\n\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("pwd")]),s._v("     查看当前目录\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h2",{attrs:{id:"vi"}},[s._v("vi")]),s._v(" "),a("h3",{attrs:{id:"命令模式-command-mode"}},[s._v("命令模式（Command mode）")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("a：在当前字符后添加文本；\nA：在行末添加文本；\ni：在当前字符前插入文本；\nI：在行首插入文本；\no：在当前行后面插入一空行；\nO：在当前行前面插入一空行；\n\nx或X：删除一个字符，x删除光标后的，而X删除光标前的；\nD：删除从当前光标到光标所在行尾的全部字符；\ndd：删除光标行正行内容\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果修改过，保存当前文件，然后退出！效果等同于(保存并退出)")]),s._v("\nZZ\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 不保存，强制退出。效果等同于 :q!")]),s._v("\nZQ\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 翻页")]),s._v("\nCtrl+u：向文件首翻半屏；\nCtrl+d：向文件尾翻半屏；\nCtrl+f：向文件尾翻一屏；\nCtrl+b：向文件首翻一屏；\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br")])]),a("h3",{attrs:{id:"输入模式-insert-mode"}},[s._v("输入模式（Insert mode）")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 从编辑模式切换到命令模式")]),s._v("\nEsc\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 回车键，换行")]),s._v("\nEnter\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 退格键，删除光标前一个字符")]),s._v("\nBackspace\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除键，删除光标后一个字符")]),s._v("\nDEL\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 移动光标到行首/行尾")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("HOME")]),s._v("/END\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 上/下翻页")]),s._v("\nPage Up/Page Down\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("h3",{attrs:{id:"底线命令模式-last-line-mode"}},[s._v("底线命令模式（Last line mode）")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 保存并退出")]),s._v("\n:wq\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 保存")]),s._v("\n:w\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 强制保存")]),s._v("\n:w"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 退出")]),s._v("\n:q\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 强制退出")]),s._v("\n:q"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 显示行号")]),s._v("\n:set nu\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 不显示行号")]),s._v("\n:set nonu\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 光标跳转到指定行的行首")]),s._v("\n:行号\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 光标跳转到最后一行的行首")]),s._v("\n:$\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 从当前光标所在位置开始向文件尾部查找 ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 小写n匹配下一个")]),s._v("\n/word\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 从当前光标所在位置开始向文件头部查找")]),s._v("\n?word\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br")])]),a("h3",{attrs:{id:"复制"}},[s._v("复制")]),s._v(" "),a("h4",{attrs:{id:"复制一行"}},[s._v("复制一行")]),s._v(" "),a("ul",[a("li",[s._v("把光标移动到要复制的行上 "),a("code",[s._v("按yy")])]),s._v(" "),a("li",[s._v("把光标移动到要复制的位置 "),a("code",[s._v("按p")])])]),s._v(" "),a("h4",{attrs:{id:"从光标行复制到最后一行"}},[s._v("从光标行复制到最后一行")]),s._v(" "),a("blockquote",[a("p",[s._v("$代表最后一行，也可以直接输入行号数字 "),a("code",[s._v(".,10/y")])])]),s._v(" "),a("ul",[a("li",[s._v("光标定位到起始行")]),s._v(" "),a("li",[a("code",[s._v("shift+:")]),s._v(" 进入命令模式")]),s._v(" "),a("li",[s._v("依次输入 "),a("code",[s._v(".,$y")]),s._v(" （.光标位置 $代表最后一行 y复制）")]),s._v(" "),a("li",[s._v("按回车 完成copy")]),s._v(" "),a("li",[s._v("光标移动到要复制的位置 "),a("code",[s._v("按p")]),s._v(" 粘贴")])]),s._v(" "),a("h4",{attrs:{id:"批量替换"}},[s._v("批量替换(#->$)")]),s._v(" "),a("ul",[a("li",[s._v("光标定位到起始行")]),s._v(" "),a("li",[a("code",[s._v("shift+:")]),s._v(" 进入命令模式")]),s._v(" "),a("li",[s._v("依次输入 "),a("code",[s._v(".,$s/#/$/")]),s._v(" （.光标位置 $代表最后一行 s替换 把#替换成$）")]),s._v(" "),a("li",[s._v("按回车 完成替换")])]),s._v(" "),a("h2",{attrs:{id:"cat、more、less"}},[s._v("cat、more、less")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" -n /etc/profile "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("more")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -n 显示行号")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 按Enter键：下一行")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 按Space键：下一页")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 按Q键：退出")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" -n /etc/profile "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("less")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 用PageUp键向上翻页，用PageDown键向下翻页")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 按Enter键：下一行。")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 按Q键：退出")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# 查找指定内容PATH、"export PATH"，有空格要用""')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /etc/profile "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /etc/profile "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"export PATH"')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br")])]),a("h2",{attrs:{id:"tail、head"}},[s._v("tail、head")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查找文件的开头的内容")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 前5行")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("head")]),s._v(" -5 /etc/profile\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("head")]),s._v(" -n +5 /etc/profile\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 显示第一行到倒数5行")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("head")]),s._v(" -n -5 /etc/profile\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -n 头部内容的行数")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -v 显示文件名")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查找文件的结尾的内容")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 最后5行")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tail")]),s._v(" -5 /etc/profile\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tail")]),s._v(" -n -5 /etc/profile\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 从第5行至文件末尾")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tail")]),s._v(" -n +5 /etc/profile\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -n 结尾内容的行数")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -v 显示文件名")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br")])]),a("h2",{attrs:{id:"统计"}},[s._v("统计")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 统计某个字符串出现的次数")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" -o objStr filename"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wc")]),s._v(" -l\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果是多个字符串出现次数，直接用\\| 链接起来")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" -o "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'objStr1\\|objStr2'")]),s._v(" filename"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wc")]),s._v(" -l\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# wc命令介绍：l表示行数; w表示英文单词数; m表示字符数")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wc")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-lwm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 统计home目录下文件/目录数(只查一级)")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查找文件数量")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" -l /home "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'^-'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wc")]),s._v(" -l\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查找目录数量")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" -l /home "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'^d'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wc")]),s._v(" -l\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 统计home目录下所有文件/目录数(递归查所有, 含子子孙孙)")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查找文件数量")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" -lR /home "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'^-'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wc")]),s._v(" -l\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查找目录数量")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" -lR /home "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'^d'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wc")]),s._v(" -l\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br")])]),a("h2",{attrs:{id:"directory"}},[s._v("directory")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 批量创建目录")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p /opt/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("install,package,source/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("backend,frontend"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 远程拷贝source目录到node02相同路径")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@node01 opt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# scp -r ./source/ node02:`pwd`")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 远程拷贝profile文件到node02的etc目录")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@node01 ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# scp /etc/profile node02:/etc")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost zookeeper"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# scp -r ./apache-zookeeper-3.6.3-bin/ 172.16.2.141:`pwd`")]),s._v("\nssh_exchange_identification: read: Connection reset by peer\nlost connection\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost zookeeper"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# scp -r ./apache-zookeeper-3.6.3-bin/ 172.16.2.141:`pwd`")]),s._v("\nssh_exchange_identification: Connection closed by remote "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("host")]),s._v("\nlost connection\n\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" /etc/hosts.allow\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 允许所有ip主机均能连接本机")]),s._v("\nsshd: ALL   \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 或者指定网段")]),s._v("\nsshd:192.168.*:allow\nsshd:172.16.*:allow\nsshd:10.*:allow\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重启sshd")]),s._v("\nsystemctl restart sshd\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br")])])])}),[],!1,null,null,null);n.default=e.exports}}]);