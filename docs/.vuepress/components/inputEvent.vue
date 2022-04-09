<template>
  <div>
    <p>eventName:{{ eventName }}</p>
    <kb-input
      v-model="mixValue"
      @input="inputFn"
      @focus="focusFn"
      @blur="blurFn"
      @submit="submitFn"
      :inputProps="{
        placeholder: '输入英文',
        type: 'en',
        prefix: 'inputEvent',
      }"
    />
    <kb-board prefix="inputEvent" />
  </div>
</template>

<script>
export default {
  name: "inputEvent",
  data() {
    return {
      mixValue: "abc",
      eventName: "----",
    };
  },
  methods: {
    submitFn(data) {
      this.eventName = "submit";
      console.log("inputEvent:submit", data);
    },
    showStatus(data) {
      console.log("监听键盘显示隐藏", data);
    },
    inputFn(data) {
      this.eventName = "input";
      console.log("inputEvent:input", data);
    },
    focusFn(data) {
      this.eventName = "focus";
      console.log("inputEvent:focus", data);
    },
    blurFn(data) {
      this.eventName = "blur";
      console.log("inputEvent:blur", data);
    },
  },
};
</script>


