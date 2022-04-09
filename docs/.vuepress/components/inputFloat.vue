<template>
  <div>
    <kb-input
      v-model="mixValue"
      :inputProps="{
        placeholder: '输入浮动数字',
        type: 'float',
        prefix: 'inputFloat',
      }"
    />
    <kb-board prefix="inputFloat" />
  </div>
</template>

<script>
export default {
  name: "inputFloat",
  data() {
    return {
      mixValue: 1.22,
    };
  },
};
</script>


