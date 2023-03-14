(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{563:function(l,s,v){"use strict";v.r(s);var e=v(4),i=Object(e.a)({},(function(){var l=this,s=l._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":l.$parent.slotKey}},[s("h1",{attrs:{id:"redis的持久化rdb、fork、copyonwrite、aof、rdb-aof混合使用"}},[l._v("redis的持久化RDB、fork、copyonwrite、AOF、RDB&AOF混合使用")]),l._v(" "),s("h2",{attrs:{id:"单机持久化"}},[l._v("单机持久化")]),l._v(" "),s("h3",{attrs:{id:"rdb"}},[l._v("RDB")]),l._v(" "),s("ul",[s("li",[s("p",[l._v("RDB")])]),l._v(" "),s("li",[s("p",[l._v("父子进程")])]),l._v(" "),s("li",[s("p",[l._v("fork copy-on-write")])]),l._v(" "),s("li",[s("p",[l._v("问题：")]),l._v(" "),s("ul",[s("li",[l._v("不支持拉链 只有一个dump.rdb")]),l._v(" "),s("li",[l._v("丢失数据相对多一些，时间点与时间点之间的窗口数据容易丢失（8点得到一个rdb，9点刚要落一个rdb，挂机了）")])])]),l._v(" "),s("li",[s("p",[l._v("优点：")]),l._v(" "),s("ul",[s("li",[l._v("类似java序列化， 恢复速度相对快")])])])]),l._v(" "),s("h3",{attrs:{id:"aof"}},[l._v("AOF")]),l._v(" "),s("ul",[s("li",[s("p",[l._v("redis写操作记录到文件中")]),l._v(" "),s("ul",[s("li",[l._v("丢失数据相对少")]),l._v(" "),s("li",[l._v("RDB和AOF可以同时开启（如果开启了AOF只会用AOF恢复，4.0以后AOF中包含RDB全量，增加记录新的写操作）")]),l._v(" "),s("li",[l._v("弊端\n"),s("ul",[s("li",[l._v("体量无限变大，恢复慢")]),l._v(" "),s("li",[l._v("设计一个方案让AOF足够小\n"),s("ul",[s("li",[l._v("4.0以前->重写->删除抵消的命令，合并重复的命令->最终也是一个纯指令的日志文件")]),l._v(" "),s("li",[l._v("4.0以后->重写->将老的数据RDB到AOF文件中，将增量的以指令方式Append到AOF->AOF是一个混合体，利用的RDB的快，利用的日志的全量")])])])])])])]),l._v(" "),s("li",[s("p",[l._v("原点：redis是内存数据库")]),l._v(" "),s("ul",[s("li",[l._v("写操作会触发IO")]),l._v(" "),s("li",[l._v("NO、always、每秒\n"),s("ul",[s("li",[l._v("no: don't fsync, just let the OS flush the data when it wants. Faster.")]),l._v(" "),s("li",[l._v("always: fsync after every write to the append only log. Slow, Safest.")]),l._v(" "),s("li",[l._v("everysec: fsync only one time every second. Compromise.")])])])])])]),l._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[l._v("BGSAVE\nredis-check-rdb dump.rdb\n\nBGREWRITEAOF\n")])]),l._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[l._v("1")]),s("br"),s("span",{staticClass:"line-number"},[l._v("2")]),s("br"),s("span",{staticClass:"line-number"},[l._v("3")]),s("br"),s("span",{staticClass:"line-number"},[l._v("4")]),s("br")])]),s("h2",{attrs:{id:"主从复制"}},[l._v("主从复制")])])}),[],!1,null,null,null);s.default=i.exports}}]);