<template>
  <div>
    <kb-input
      v-model="mixValue"
      :inputProps="{
        placeholder: '允许换行',
        allowEnter: true,
        prefix: 'inputAllowEnter',
      }"
    />
    <kb-board prefix="inputAllowEnter" />
  </div>
</template>

<script>
export default {
  name: "inputAllowEnter",
  data() {
    return {
      mixValue: `你好啊,world!!
      
      你好啊,wo!!d!!`,
    };
  },
};
</script>

