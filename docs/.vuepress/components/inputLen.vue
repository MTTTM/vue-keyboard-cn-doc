<template>
  <div>
    <kb-input
      v-model="mixValue"
      :inputProps="{
        placeholder: '限制长度为3',
        prefix: 'inputLen',
        maxLength: 3,
      }"
    />
    <kb-board prefix="inputLen" />
  </div>
</template>

<script>
export default {
  name: "inputLen",
  data() {
    return {
      mixValue: "你好",
    };
  },
};
</script>

