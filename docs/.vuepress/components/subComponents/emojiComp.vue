<template>
  <kbEmoji :emojiMap="emojiMap" />
</template>
<script>
import { kbEmoji } from "vue-keyboard-cn";
import { person, hearts, symbo } from "../emojiImages.js";
export default {
  components: { kbEmoji },
  data() {
    return {
      emojiMap: {
        person,
        hearts,
        symbo,
      },
    };
  },
  created() {
    console.log("xx", this.emojiMap);
  },
};
</script>