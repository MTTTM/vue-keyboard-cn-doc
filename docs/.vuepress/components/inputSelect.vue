<template>
  <div>
    <kb-input
      v-model="mixValue"
      ref="inputElement"
      :inputProps="{
        placeholder: '输入任意字符串',
        prefix: 'inputSelect',
      }"
    />
    <button @click.stop="selectFuc">select</button>
    <button @click.stop="unselectFuc">unSelect</button>
    <kb-board prefix="inputSelect" />
  </div>
</template>

<script>
export default {
  name: "inputSelect",
  data() {
    return {
      mixValue: 1993,
    };
  },
  methods: {
    selectFuc() {
      this.$refs["inputElement"].select();
    },
    unselectFuc() {
      this.$refs["inputElement"].unSelect();
    },
  },
};
</script>


