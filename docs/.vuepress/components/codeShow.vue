<template>
  <div class="showCode">
    <div class="showCode-header">
      <div
        @click="index = 0"
        :class="['header-item', index == 0 ? 'active' : '']"
      >
        效果
      </div>
      <div
        @click="index = 1"
        :class="['header-item', index == 1 ? 'active' : '']"
      >
        代码
      </div>
    </div>
    <div class="showCode-body">
      <div class="body-item" v-show="index === 0">
        <slot />
      </div>
      <div class="body-item" v-show="index === 1">
        <!-- <pre>
          <code class="vue">  -->
        <slot name="code" />
        <!-- </code>
        </pre> -->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      index: 0,
    };
  },
  created() {
    //主题css，可自选
    import("highlight.js/styles/paraiso-dark.css");
    import("highlight.js/lib/index.js").then((hljs) => {
      hljs.initHighlightingOnLoad();
    });
    console.log("this.slots", this.$slots.default);
  },
};
</script>
<style lang="less" scoped>
.showCode {
  height: 400px;
  outline: 1px solid #ccc;
  .showCode-header {
    height: 30px;
    border-bottom: 1px solid #ccc;
    box-sizing: border-box;
    display: flex;
    align-content: center;
    padding: 0 10px;
    .header-item {
      padding: 0 10px;
      &.active {
        color: #3eaf7c;
      }
    }
  }
  .showCode-body {
    height: 370px;
    overflow: auto;
    .body-item {
      height: 370px;
      overflow: auto;
    }
  }
}
</style>