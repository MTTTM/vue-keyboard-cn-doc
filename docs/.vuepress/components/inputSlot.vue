<template>
  <div>
    <kb-input
      v-model="mixValue"
      :inputProps="{
        placeholder: '输入英文',
        type: 'en',
        prefix: 'inputSlot',
      }"
    >
      <template v-slot:prepend>
        <button>前面</button>
      </template>
      <template v-slot:append>
        <button>后面</button>
      </template>
    </kb-input>
    <kb-board prefix="inputSlot" />
  </div>
</template>

<script>
export default {
  name: "inputSlot",
  data() {
    return {
      mixValue: "abc",
    };
  },
};
</script>


