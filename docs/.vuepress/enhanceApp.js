import vueKeyBoardCn, { install, kbEmoji } from "vue-keyboard-cn";
import "vue-keyboard-cn/dist/index.css"
export default async ({
  Vue
}) => {
  console.log("install", install, vueKeyBoardCn)
  Vue.use(install);

}
