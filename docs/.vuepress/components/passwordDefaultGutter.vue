<template>
  <div>
    <kb-input
      v-model="mixValue"
      :inputProps="{
        compName: 'passWordInput',
        gutter: '10px',
        prefix: 'passwordDefaultGutter',
      }"
      :keyBoardProps="{
        compName: 'numberKeyBoard',
      }"
    />
    <kb-board prefix="passwordDefaultGutter" />
  </div>
</template>

<script>
export default {
  name: "passwordDefaultGutter",
  data() {
    return {
      mixValue: "12",
    };
  },
};
</script>


