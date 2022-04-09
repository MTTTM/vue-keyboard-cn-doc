<template>
  <div>
    <kb-input
      v-model="mixValue"
      :inputProps="{
        placeholder: 'max length 10',
        maxLength: 10,
        prefix: 'numberInput',
      }"
      :keyBoardProps="{
        compName: 'numberKeyBoard',
      }"
    />
    <kb-board prefix="numberInput" />
  </div>
</template>

<script>
export default {
  name: "numberInput",
  data() {
    return {
      mixValue: "10",
    };
  },
};
</script>


