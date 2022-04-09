<template>
  <div class="showCode">
    <!-- <div class="showCode-header">
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
    </div> -->
    <div class="showCode-body">
      <div class="body-item body-item-demo">
        <slot />
      </div>
      <div class="body-item">
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
    // import("highlight.js/styles/paraiso-dark.css");
    // import("highlight.js/lib/index.js").then((hljs) => {
    //   hljs.initHighlightingOnLoad();
    // });
    // console.log("this.slots", this.$slots.default);
  },
};
</script>
<style lang="less" scoped>
.showCode {
  outline: 1px solid #ccc;
  padding: 5px;
  margin: 10px 0;
  .showCode-header {
    height: 30px;
    border-bottom: 1px solid #ccc;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    padding: 0 10px;
    .header-item {
      padding: 0 10px;
      &.active {
        color: #3eaf7c;
      }
    }
  }
  .showCode-body {
    .body-item {
      max-height: 370px;
      overflow: auto;
    }
  }
  .body-item-demo {
    padding: 5px;
    height: auto !important;
  }
}
</style>