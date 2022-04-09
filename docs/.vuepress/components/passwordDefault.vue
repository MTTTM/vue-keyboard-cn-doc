<template>
  <div>
    <kb-input
      v-model="mixValue"
      :inputProps="{
        compName: 'passWordInput',
        prefix: 'passwordDefault',
      }"
      :keyBoardProps="{
        compName: 'numberKeyBoard',
      }"
    />
    <kb-board prefix="passwordDefault" />
  </div>
</template>

<script>
export default {
  name: "passwordDefault",
  data() {
    return {
      mixValue: "12",
    };
  },
};
</script>


