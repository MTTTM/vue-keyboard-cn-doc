<template>
  <div>
    <kb-input
      v-model="mixValue"
      :inputProps="{
        placeholder: '输入英文,键盘无法切换非英文键盘',
        type: 'en',
        canSwitchOtherBoard: false,
        prefix: 'inputCanSwtichOtherLan',
      }"
    />
    <kb-board prefix="inputCanSwtichOtherLan" />
  </div>
</template>

<script>
export default {
  name: "inputInt",
  data() {
    return {
      mixValue: "",
    };
  },
};
</script>


