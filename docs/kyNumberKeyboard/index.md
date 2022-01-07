#  纯数字输入框



## 简叙
纯数字输入键盘，可以直接使用，也可以通过kyKeyBoard触发使用

* 身份证输入框
* 小数输入框
* 整数输入框
* 随机按键数字键盘

## props

| 参数       | 可选      |说明   | 默认 | 必填 | 
| ---- |:----| :--------------|:-----|:-----|
| show     | true/false| 控制显示 |false |是 |
| theme     | null/custom| 控制展示键盘右侧 |false |否 |
| extraKey     | 一个字符串或两个长度的数组|  一般用来新增个`.`或`X`按钮 | 无 |否 |
| closeButtonText     | 字符串| 键盘右侧关闭按钮 |"完成" |否 |
| title     | 字符串| 键盘顶部中间标题 |false |否 |
| maxLength     | 数字|  使用v-model双向绑定时候有用 |false |否 |
| randomKeyOrder     | true/false|  是否使用随机数字按钮|false |否 |
| v-model     | data变量|  双向绑定数据|false |否 |




## 事件

| 事件        | 参数          |  说明  |
| ------------- |:-------------:| -----:|
| submit     | 无 |   |
| input      | 新增的字符串      |   输入事件 |
| blur | 无      |    失去焦点事件 |
| focus  | 无    |    获取焦点事件 |


