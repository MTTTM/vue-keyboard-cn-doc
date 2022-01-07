# 输入框简叙
ky-input它（下面都用它替代）的作用是替代原生的html的input或textarea标签，并且配合key-board进行使用。
原生的input标签已经很好用了，为什么它会出现呢？
首先要知道这个库，它提供的是自定义键盘的这个功能，如果使用原生的input，在input获取focus时候会触发系统自带的键盘并且无法屏蔽掉。所以自能自己模拟input标签。

## props

| 参数       | 可选      |说明   | 默认 | 必填 | 
| ---- |:----| :--------------|:-----|:-----|
| type     | int/float/cn/en/mix/NumberKeyboard| 键盘类型 |mix |否 |
| decimal     | 1~10 | 只有type为float时候才会生效 |2 |否 |
| maxLength | 数字| 限制最大长度|-|否|
| height | 类似 "100px"| 限制输入框高度，一般和allowEnter(true）配合使用 | - | 否 |
| regx     | js正则规则 | 它是字面量的正则对象，会出现在后面那个位置那里：new RegExp(`${this.regx}`, "g") |undefined|否 |
| allowEnter     | true/false| 是否允许输入换行 |false |否 |
| keyBoard     | 键盘ref | 如果不设置的话，会触发其他key-board，如果有多个key-board，会触发多个key-board显示(这好像有问题!) |null |否|
| canSwitchOtherBoard     | true/false | 能否切换其他键盘(例如数字或符号) |true |否 |
| inputLang     | cn/en | 使用什么语言输入法,只有type为mix时候才有效 |cn |否|
| showFixedInput     | true/false | 是否显示固定在键盘底部的输入框 |false |否 |
| placeholder     | 字符串 | 内容为空时候的占位字 |-|否|
| docBodyAutoScroll     | true/false | 是否触发body滚动，让input进入可视区 |true|否 |
| numberKeyboardProps | 请参考[NumberKeyboard的props](/kyNumberKeyboard/#props)|给NumberKeyboard键盘使用的|{}|否|

### props type
- 这个不仅控制显示对应的键盘，而且限制输入
- 如果限制输入的内容和你的不一样，可以使用regx，它会优先type来做内容输入
- int
- float 
- cn   支持中文和中文符号·
- en   支持英文大小写字母
- mix 可输入任何值，包括表情
- NumberKeyboard 触发数字键盘



## v-model
 - 绑定的值，字符串或者数字

## 事件

| 事件        | 参数          |  说明  |
| ------------- |:-------------:| -----:|
| submit     | {el:htmlObject,value:string} |  ①如果输入框允许`回车键`，submit事件永远不会触发 ②如果存在可选中文未确认，也不会触发 |
| input      | {el:htmlObject,value:string}      |   输入事件 |
| blur | {el:htmlObject,value:string}      |    失去焦点事件 |
| focus  | {el:htmlObject,value:string}      |    获取焦点事件 |


