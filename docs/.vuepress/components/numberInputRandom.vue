<template>
  <div>
    <kb-input
      v-model="mixValue"
      :inputProps="{
        placeholder: 'max length 10',
        maxLength: 10,
        prefix: 'numberInputRandom',
      }"
      :keyBoardProps="{
        compName: 'numberKeyBoard',
        randomKeyOrder: true,
      }"
    />
    <kb-board prefix="numberInputRandom" />
  </div>
</template>

<script>
export default {
  name: "numberInputRandom",
  data() {
    return {
      mixValue: "10",
    };
  },
};
</script>


