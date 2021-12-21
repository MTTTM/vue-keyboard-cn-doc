# key-board
这是本库的核心功能-键盘。
它有五个大功能
* 键盘
* 表情图标
* 控制面板
* 复制列表面板
* 关闭键盘

## 键盘
键盘分三个大分类
- 数字键盘(包括int和float)
- 中文键盘
- 英文键盘
### 数字键盘
- 如果是int，点击`.`按键是无法输入的，但是键盘按钮不会给致灰样式，这个主要是为了按键统一
- 如果是float，运行输入`.`，但是无法输入多个，不会出现不符合小数的格式内容
- 数字键盘有自己专属的符号键盘
- 可以切换到英文或中文键盘(需要判断，优先级或者是否存在，未实现）
### 中文键盘
- 26个英文键，默认显示大写
- 有自己的专属符号键盘
- 可以切换到英文或数字键盘
- 可以切换到数字键盘(需要判断，优先级或者是否存在，未实现）

### 中文键盘
- 26个英文键，默认显示大写
- 有自己的专属符号键盘
- 可以切换到英文或数字键盘
- 可以切换到数字键盘(需要判断，优先级或者是否存在，未实现）

## 表情
- props emojiMap 传递表情数据
- 支持多组表情
- emojiMap格式查看demo的
- 表情明白底部可以点击表情分类切换分组

## 控制面板
- 支持方向键控制光标
- 支持全选
- 支持复制
- 支持粘贴（从剪切板数组拿去第一个）
- 支持删除 (未实现)
- 支持回车(为实现)
## 剪切板
- 存放历史复制内容
- 根据当前获取焦点的input标签，过滤掉不符合格式要求的内容
- 点击列表给input光标所在位置插入内容

## 中英文的键盘大小写
- 是有记录到本地的
- 默认是大写


## props 
- emojiMap 表情包，如果不传递就不显示顶部tab表情选项，[格式参考](https://github.com/MTTTM/vue-keyboard-cn/blob/main/src/dev/emojiImages.js)
- disabledInputUpdateMixKeyBoardLang 禁用input更改 输入法的语言类型(input 的type 为mix时候有效)，默认不禁用
- keyBoardMaps 自定义的键盘按键配置，默认undefined,[格式参考](https://github.com/MTTTM/vue-keyboard-cn/blob/main/src/dev/boardMaps.js)
- hideHead 隐藏顶部tab前三个元素(键盘选项，表情选项，控制器选项)，默认否


### props keyBoardMaps
- 格式:
```javacscript
   cnMap: [],
   enMap:[],
   enSymbolMap: [],
   numberMap: [],
   cnSymbolMap: [
    [
      {
        text: "【"
      },
      {
        text: "】"
      }
    ],
    [
      {
        text: "："
      },
      {
        text: "-"
      }
    ]
  ],
}

```
- 说明

```
 - props keyBoardMaps是对象类型
 - 必须包含指定key,不可以多或少:cnMap,enMap,cnSymbolMap, enSymbolMap,numberMap
 - keyBoardMaps对象的子元素是二维数组，二维数组的字元素表示键盘的一行键盘

```

### 二维数组的字元素说明

- text 键盘显示的文字
-  hideText 不显示text
- isBigBtn 键盘上面显示宽体键盘
- operate 功能性函数,必须为其中一个["delete","back","noThing"]
- classString 按键样式名字


## event
- @show 键盘显示状态

```
 - 回调函数的参数是个对象，包含show，el
 - show 的值为布尔值
 - el 是键盘的最外层dom对象

```
