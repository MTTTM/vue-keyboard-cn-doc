# 根事件
## 介绍
这些事件用于输入框和键盘之间的通讯使用，也方便第三方拓展
这些事件存在[文件地址](https://github.com/MTTTM/vue-keyboard-cn/blob/main/src/dev/eventKeys.js)目录之下，尽可以引用npm包里面这个文件而不是直接使用以下的事件名称

## 键盘发起&&输入框发起

* "vue-keyboard-cn-update-value //推送输入框的最新值,string
* 'vue-keyboard-cn-show' //键盘隐藏，发起通知
*  'vue-keyboard-cn-showed' //键盘已完成显示或隐藏
* 'vue-keyboard-cn-append-item' //键盘确认内容，发起通知
* 'vue-keyboard-cn-select-all' //键盘提交删除
* "vue-keyboard-cn-natice-copy" //推送输入框的最新值,string
* "vue-keyboard-cn-cursor-move",//方向键，移动光标，top|bottom|left|top
* "vue-keyboard-cn-submit" //回车键，触发input提交(1,不允许换行input才会触发，默认

## 输入框发起&&输入框接收

* "vue-keyboard-cn-focus" //输入框获取焦点，发布通知
* "vue-keyboard-cn-no-me-will-blur" //输入框获取焦点，发布通知




 



