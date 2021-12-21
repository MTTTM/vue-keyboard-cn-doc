

::: slot sider

[[toc]]

:::

::: slot content

# PasswordInput
带网格的输入框组件，可以用于输入密码、短信验证码等场景，通常与数字键盘组件配合使用。

## 使用
```vue
import Vue from 'vue';
import { PasswordInput, NumberKeyboard } from 'vant';

Vue.use(PasswordInput);
Vue.use(NumberKeyboard);
 
```
## 代码演示（一键盘对多密码框）

### 使用数据

```vue

<script>
export default {
  data() {
    return {
      showKeyboard: false,
      values: {
        value1: "1234",
        value2: "123",
        value3: "12",
        value4: "",
      },
      currValueKey: "",
      maxLens: {
        value1: 6,
        value2: 4,
      },
    };
  },
  methods: {
    showKeyboardHandler(t, key) {
      this.showKeyboard = t;
      this.currValueKey = key;
    },
    inputHandler(str) {
      var key = this.currValueKey;
      var maxLength = this.maxLens[key] ? this.maxLens[key] : 6;
      if (this.values[key].length < maxLength) {
        this.values[key] = this.values[key] + str;
      }
    },
    deleteHandler() {
      var currValue = this.values[this.currValueKey];
      this.values[this.currValueKey] =
        currValue.length > 0
          ? String(currValue).slice(0, currValue.length - 1)
          : "";
    },
  },
};
</script>
```

### 默认
```vue
<template>
   <pass-word-input
      :value="values.value1"
      :focused="showKeyboard && currValueKey == 'value1'"
      @focus="showKeyboardHandler(true, 'value1')"
    />
    <!-- 只需要一个输入框 -->
    <number-key-board
      :show.sync="showKeyboard"
      @input="inputHandler"
      @delete="deleteHandler"
    />
 </template>
```
### 限制长度
```vue
<template>
  <pass-word-input
      :value="values.value2"
      :length="4"
      :focused="showKeyboard && currValueKey == 'value2'"
      @focus="showKeyboardHandler(true, 'value2')"
    />
      <!-- 只需要一个输入框 -->
    <number-key-board
      :show.sync="showKeyboard"
      @input="inputHandler"
      @delete="deleteHandler"
    />
</template>

```

### 格子显示
```vue
<template>
   <p>格子显示</p>
    <pass-word-input
      :value="values.value3"
      gutter="10px"
      :focused="showKeyboard && currValueKey == 'value3'"
      @focus="showKeyboardHandler(true, 'value3')"
    />
      <!-- 只需要一个输入框 -->
    <number-key-board
      :show.sync="showKeyboard"
      @input="inputHandler"
      @delete="deleteHandler"
    />
</template>

```

### 显示明文
```vue
<template>
    <pass-word-input
      :value="values.value3"
       :mask="false"
      :focused="showKeyboard && currValueKey == 'value3'"
      @focus="showKeyboardHandler(true, 'value3')"
    />
      <!-- 只需要一个输入框 -->
    <number-key-board
      :show.sync="showKeyboard"
      @input="inputHandler"
      @delete="deleteHandler"
    />
</template>

```

:::