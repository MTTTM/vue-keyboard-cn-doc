<template>
  <div>
    <kb-input
      v-model="mixValue"
      :inputProps="{ placeholder: '输入任意字符串', prefix: 'inputDefault' }"
    />
    <kb-board prefix="inputDefault" />
  </div>
</template>

<script>
export default {
  name: "inputDefault",
  data() {
    return {
      mixValue: "你好啊,world!!你好啊,wo!!d!!",
    };
  },
};
</script>

