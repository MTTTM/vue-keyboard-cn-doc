# 介绍

## 说明
VUE-KEYBOARD-CN由2部分组成
* 一部分是input组件
* 一部分是模拟键盘

**其他功能**

支持中文输入和中文词记忆(本地)，支持英文输入，支持数字输入，支持符号输入(区分中文和英文)

input组件和模拟键盘组件必须配合使用，使用原生input无效

后面都用 **vkb** 替代VUE-KEYBOARD-CN。

初衷：解决横屏app input获取焦点后移动端设备的输入法无法横屏出现的问题，后来逐步拓展到提供密码输入组件，数字键盘以及支持输入时候输入框自动进入可视区，input组件和模拟键盘之间通讯支持前缀唤起键盘等功能

## 支持哪些版本vue
* vue2
* vue3

## 支持电脑么
* 不支持

## 安装
```
npm i vue-keyboard-cn
```

## 基本使用

### 全局注册
```javascript
import { KyInput, KyBoard,KeyboardAwareScrollView } from "vue-keyboard-cn";
import "vue-keyboard-cn/dist/index.css"
Vue.component("ky-input",KyInput)
Vue.component("key-board",KyBoard)
Vue.component("key-board-aware-scroll-view", KeyboardAwareScrollView)
```
### 使用
``` vue
<template>
  <key-board-aware-scroll-view class="inner-wrap">
    <ky-input v-model="mixValue" placeholder="Any string"/>
    <key-board :emojiMap="emoji" />
  </key-board-aware-scroll-view>
</template>

<script>
import { person, hearts, symbo } from "../dev/emojiImages.js";
export default {
  name: "App",
  data() {
    return {
      emoji: {
        person,
        hearts,
        symbo,
      },
      mixValue: `hello,world!!`,
    };
  },
};
</script>
```