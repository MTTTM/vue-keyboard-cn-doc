<template>
  <div>
    <kb-input
      v-model="mixValue"
      :inputProps="{
        placeholder: 'max length 10',
        maxLength: 10,
        prefix: 'numberInputCus',
      }"
      :keyBoardProps="{
        compName: 'numberKeyBoard',
        theme: 'custom',
        extrakey: ['00', '.'],
      }"
    />
    <kb-board prefix="numberInputCus" />
  </div>
</template>

<script>
export default {
  name: "numberInputCus",
  data() {
    return {
      mixValue: "10",
    };
  },
};
</script>


