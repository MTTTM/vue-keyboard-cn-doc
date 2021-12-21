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
          <!-- <Content slot-key="sider" /> -->
          <Sidebar />
        </div>
      </div>
      <div style="pading: 0 20px; flex: 1" class="flex-content">
        <Content />
      </div>
      <div style="width: 380px; margin-left: 5px" class="iframe">
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
      <a class="backHome" href="/vue-keyboard-cn-doc/guide/">H</a>
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
.flex-content {
  height: calc(100vh - 56px);
  overflow: auto;
}
@media screen and (max-width: 1024px) {
  .iframe,
  .side {
    display: none;
  }
}
.backHome {
  border-radius: 100%;
  overflow: hidden;
  width: 40px;
  height: 40px;
  position: fixed;
  right: 20px;
  bottom: 40px;
  background: #fff;
  border: 1px solid #ccc;
  z-index: 99999;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
}
</style>