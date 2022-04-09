<template>
  <div>
    <kb-input
      v-model="mixValue"
      :inputProps="{
        placeholder: 'max length 10',
        maxLength: 10,
        prefix: 'numberInputTitle',
      }"
      :keyBoardProps="{
        compName: 'numberKeyBoard',
        title: '自带标题',
      }"
    />
    <kb-board prefix="numberInputTitle" />
  </div>
</template>

<script>
export default {
  name: "numberInputTitle",
  data() {
    return {
      mixValue: "10",
    };
  },
};
</script>


