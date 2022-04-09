<template>
  <div>
    <kb-input
      v-model="mixValue"
      :inputProps="{
        placeholder: '输入任意字符串',
        type: 'int',
        prefix: 'inputInt',
      }"
    />
    <kb-board prefix="inputInt" />
  </div>
</template>

<script>
export default {
  name: "inputInt",
  data() {
    return {
      mixValue: 1,
    };
  },
};
</script>


