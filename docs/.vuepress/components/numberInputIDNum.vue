<template>
  <div>
    <kb-input
      v-model="mixValue"
      :inputProps="{
        placeholder: 'max length 10',
        prefix: 'numberInputIDNum',
      }"
      :keyBoardProps="{
        compName: 'numberKeyBoard',
        extraKey: 'X',
        closeButtonText: '完成',
      }"
    />
    <kb-board prefix="numberInputIDNum" />
  </div>
</template>

<script>
export default {
  name: "numberInputIDNum",
  data() {
    return {
      mixValue: "10",
    };
  },
};
</script>


