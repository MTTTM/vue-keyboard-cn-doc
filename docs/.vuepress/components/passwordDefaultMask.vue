<template>
  <div>
    <kb-input
      v-model="mixValue"
      :inputProps="{
        compName: 'passWordInput',
        prefix: 'passwordDefaultMask',
        mask: false,
      }"
      :keyBoardProps="{
        compName: 'numberKeyBoard',
      }"
    />
    <kb-board prefix="passwordDefaultMask" />
  </div>
</template>

<script>
export default {
  name: "passwordDefaultMask",
  data() {
    return {
      mixValue: "12",
    };
  },
};
</script>


