<template>
  <div>
    <kb-input
      v-model="mixValue"
      :inputProps="{
        placeholder: '限制长度为3',
        prefix: 'keyBoardDefault',
      }"
    />
    <kb-board prefix="keyBoardDefault" :config="config" />
  </div>
</template>

<script>
export default {
  name: "keyBoardDefault",
  data() {
    return {
      mixValue: "hello",
      config: {
        defaultKeyBoard: {},
      },
    };
  },
  created() {
    this.config.defaultKeyBoard.tabs = [
      "board",
      {
        name: "emoji",
        tabs: ["icon iconfont icon-smile", "icon iconfont icon-smile"],
        contentComp: () => import("./subComponents/emojiComp"),
      },
      "operation",
      "hide",
    ];
  },
};
</script>

