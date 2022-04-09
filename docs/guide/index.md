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
import { install } from "vue-keyboard-cn";
import "vue-keyboard-cn/dist/index.css"
Vue.use(install);
```
### 使用
``` vue
<template>
  <kb-scroll-view>
    <kb-input v-model="mixValue" placeholder="Any string" />
    <kb-board />
  </kb-scroll-view>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      mixValue: "你好啊,world!!hello,世界!!",
    };
  }
};
</script>
```
## 输入框(26键)

### 默认输入框

<codeShow>
<inputDefault/>
 <template slot="code">

 <<< @/docs/.vuepress/components/inputDefault.vue
 
 </template>
</codeShow>

### 整数

<codeShow>
<inputInt/>
 <template slot="code">

 <<< @/docs/.vuepress/components/inputInt.vue
 
 </template>
</codeShow>

### 小数

<codeShow>
<inputFloat/>
 <template slot="code">

 <<< @/docs/.vuepress/components/inputFloat.vue
 
 </template>
</codeShow>

### 英文

<codeShow>
<inputEn/>
 <template slot="code">

 <<< @/docs/.vuepress/components/inputEn.vue
 
 </template>
</codeShow>

### 中文

<codeShow>
<inputCn/>
 <template slot="code">

 <<< @/docs/.vuepress/components/inputCn.vue
 
 </template>
</codeShow>

### 选中

<codeShow>
<inputSelect/>
 <template slot="code">

 <<< @/docs/.vuepress/components/inputSelect.vue
 
 </template>
</codeShow>

### 限制长度

<codeShow>
<inputLen/>
 <template slot="code">

 <<< @/docs/.vuepress/components/inputLen.vue
 
 </template>
</codeShow>

### 禁用

<codeShow>
<inputDisable/>
 <template slot="code">

 <<< @/docs/.vuepress/components/inputDisable.vue
 
 </template>
</codeShow>

### 换行

<codeShow>
<inputAllowEnter/>
 <template slot="code">

 <<< @/docs/.vuepress/components/inputAllowEnter.vue
 
 </template>
</codeShow>

### 固定高度

<codeShow>
<inputFixHeight/>
 <template slot="code">

 <<< @/docs/.vuepress/components/inputFixHeight.vue
 
 </template>
</codeShow>

### 禁止切换非当前键盘

<codeShow>
<inputCanSwtichOtherLan/>
 <template slot="code">

 <<< @/docs/.vuepress/components/inputCanSwtichOtherLan.vue
 
 </template>
</codeShow>

### 插槽

<codeShow>
<inputSlot/>
 <template slot="code">

 <<< @/docs/.vuepress/components/inputSlot.vue
 
 </template>
</codeShow>

### 固定输入框&&插槽

<codeShow>
<inputFixedInput/>
 <template slot="code">

 <<< @/docs/.vuepress/components/inputFixedInput.vue
 
 </template>
</codeShow>

### 事件

<codeShow>
<inputEvent/>
 <template slot="code">

 <<< @/docs/.vuepress/components/inputEvent.vue
 
 </template>
</codeShow>

## 密码输入

### 默认

<codeShow>
<passwordDefault/>
 <template slot="code">

 <<< @/docs/.vuepress/components/passwordDefault.vue
 
 </template>
</codeShow>

### 长度

<codeShow>
<passwordDefaultLen/>
 <template slot="code">

 <<< @/docs/.vuepress/components/passwordDefaultLen.vue
 
 </template>
</codeShow>

### 格子

<codeShow>
<passwordDefaultGutter/>
 <template slot="code">
 
 <<< @/docs/.vuepress/components/passwordDefaultGutter.vue
 
 </template>
</codeShow>

### 明文

<codeShow>
<passwordDefaultMask/>
 <template slot="code">
 
 <<< @/docs/.vuepress/components/passwordDefaultMask.vue
 
 </template>
</codeShow>

## 纯数字键盘

### 默认

<codeShow>
<numberInput/>
 <template slot="code">
 
 <<< @/docs/.vuepress/components/numberInput.vue
 
 </template>
</codeShow>

### 带标题

<codeShow>
<numberInputTitle/>
 <template slot="code">
 
 <<< @/docs/.vuepress/components/numberInputTitle.vue
 
 </template>
</codeShow>

### 自定义

<codeShow>
<numberInputCus/>
 <template slot="code">
 
 <<< @/docs/.vuepress/components/numberInputCus.vue
 
 </template>
</codeShow>

### 身份证

<codeShow>
<numberInputIDNum/>
 <template slot="code">
 
 <<< @/docs/.vuepress/components/numberInputIDNum.vue
 
 </template>
</codeShow>

### 随机位置

<codeShow>
<numberInputRandom/>
 <template slot="code">
 
 <<< @/docs/.vuepress/components/numberInputRandom.vue
 
 </template>
</codeShow>