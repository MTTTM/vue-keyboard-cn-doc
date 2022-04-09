<template>
  <div>
    <kb-input
      v-model="mixValue"
      :inputProps="{
        placeholder: '输入中文',
        type: 'cn',
        prefix: 'inputCn',
      }"
    />
    <kb-board prefix="inputCn" />
  </div>
</template>

<script>
export default {
  name: "inputInt",
  data() {
    return {
      mixValue: "你好",
    };
  },
};
</script>


