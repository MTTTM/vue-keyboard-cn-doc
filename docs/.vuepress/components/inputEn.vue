<template>
  <div>
    <kb-input
      v-model="mixValue"
      :inputProps="{
        placeholder: '输入英文',
        type: 'en',
        prefix: 'inputEn',
      }"
    />
    <kb-board prefix="inputEn" />
  </div>
</template>

<script>
export default {
  name: "inputInt",
  data() {
    return {
      mixValue: "abc",
    };
  },
};
</script>


