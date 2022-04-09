<template>
  <div>
    <kb-input
      v-model="mixValue"
      :inputProps="{
        placeholder: '禁用按钮',
        prefix: 'inputDisable',
        disabled: true,
      }"
    />
    <kb-board prefix="inputDisable" />
  </div>
</template>

<script>
export default {
  name: "inputDisable",
  data() {
    return {
      mixValue: "我点击不了了",
    };
  },
};
</script>

