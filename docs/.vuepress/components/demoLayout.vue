<template>
  <div>
    <div style="position: fixed; left: 0; top: 0; z-index: 1000; width: 100%">
      <Navbar />
    </div>
    <div style="height: 110px"></div>
    <div style="display: flex">
      <div
        class="side"
        style="width: 240px; position: relative; padding: 50px 10px 10px 10px"
      >
        <div class="sider-bar-wrap">
          <Content slot-key="sider" />
        </div>
      </div>
      <div style="pading: 0 20px; flex: 1">
        <Content slot-key="content" />
      </div>
      <div style="width: 380px; margin-left: 5px">
        <iframe
          id="iframe"
          src="https://cn.vuejs.org"
          width="350"
          height="600"
          style="
            width: 350px;
            height: 600px;
            position: fixed;
            right: 10px;
            top: 10px;
          "
        />
      </div>
    </div>
  </div>
</template>
<script>
import Sidebar from "@theme/components/Sidebar.vue";
import Navbar from "@theme/components/Navbar.vue";
export default {
  components: { Sidebar, Navbar },
};
</script>
<style lang="css" >
.sider-bar-wrap {
  position: fixed;
  overflow: auto;
  left: 0;
  top: 80 px;
}
.sider-bar-wrap ul,
.sider-bar-wrap li {
  list-style: none;
}
</style>