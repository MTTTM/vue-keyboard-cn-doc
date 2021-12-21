# 输入框简叙
ky-input它（下面都用它替代）的作用是替代原生的html的input或textarea标签，并且配合key-board进行使用。
原生的input标签已经很好用了，为什么它会出现呢？
首先要知道这个库，它提供的是自定义键盘的这个功能，如果使用原生的input，在input获取focus时候会触发系统自带的键盘并且无法屏蔽掉。所以自能自己模拟input标签。

## props
- type 
- decimal 只有type为float时候才会生效，默认小数个数为2
- regx 可接受的正则，默认为undefined，也就是不生效。它是字面量的正则对象，会出现在后面那个位置那里：new RegExp(`${this.regx}`, "g")
- allowEnter 是否允许输入换行，默认：否
- keyBoard  key-board vnode  可输入的键盘ref，默认null，如果不设置的话，会触发其他key-board，如果有多个key-board，会触发多个key-board显示(这好像有问题!)
- canSwitchOtherBoard 能否切换其他键盘，默认 true
- inputLang 使用什么语言输入法[cn|en],只有type为mix时候才有效
- showFixedInput  是否显示固定在键盘底部的输入框，默认否
- placeholder 内容为空时候的占位字，默认为空
- docBodyAutoScroll 是否触发body滚动，让input进入可视区，默认true

### props type
- 这个不仅控制显示对应的键盘，而且限制输入
- 如果限制输入的内容和你的不一样，可以使用regx，它会优先type来做内容输入
- int
- float 
- cn   支持中文和中文符号·
- en   支持英文大小写字母
- mix 可输入任何值，包括表情



## v-model
 - 绑定的值，字符串或者数字

## event

### event @submit

- 如果输入框允许`回车键`，submit事件永远不会触发
- 如果存在可选中文未确认，也不会触发

#### event @submit params
- 对象类型
- 包含el和value
- el 是input的html对象
- value是当前input的值



### event @input 

#### event @input params
- 对象类型
- 包含el和value
- el 是input的html对象
- value是当前input的值

### event @blur 

#### event @blur params
- 对象类型
- 包含el和value
- el 是input的html对象
- value是当前input的值


### event @focus 

#### event @focus params
- 对象类型
- 包含el和value
- el 是input的html对象
- value是当前input的值

