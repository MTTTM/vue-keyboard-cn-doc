<template>
  <div>
    <kb-input
      v-model="mixValue"
      :inputProps="{
        placeholder: '允许换行',
        allowEnter: true,
        height: '90px',
        prefix: 'inputFixHeight',
      }"
    />
    <kb-board prefix="inputFixHeight" />
  </div>
</template>

<script>
export default {
  name: "inputFixHeight",
  data() {
    return {
      mixValue: `你好啊,world!!
      
      你好啊,wo!!d!!`,
    };
  },
};
</script>

