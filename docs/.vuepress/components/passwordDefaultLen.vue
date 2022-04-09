<template>
  <div>
    <kb-input
      v-model="mixValue"
      :inputProps="{
        compName: 'passWordInput',
        prefix: 'passwordDefaultLen',
        length: 4,
      }"
      :keyBoardProps="{
        compName: 'numberKeyBoard',
      }"
    />
    <kb-board prefix="passwordDefaultLen" />
  </div>
</template>

<script>
export default {
  name: "passwordDefaultLen",
  data() {
    return {
      mixValue: "12",
    };
  },
};
</script>


