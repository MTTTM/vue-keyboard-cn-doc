<template>
  <div>
    <kb-input
      v-model="mixValue"
      :inputProps="{
        placeholder: '输入英文',
        type: 'en',
        showFixedInput: true,
        prefix: 'inputFixedInput',
      }"
    >
      <template v-slot:prepend>
        <button>前面</button>
      </template>
      <template v-slot:append>
        <button>后面</button>
      </template>
      <template v-slot:prependFixed>
        <button>前面</button>
      </template>
      <template v-slot:appendFixed>
        <button>后面</button>
      </template>
    </kb-input>
    <kb-board prefix="inputFixedInput" />
  </div>
</template>

<script>
export default {
  name: "inputFixedInput",
  data() {
    return {
      mixValue: "abc",
    };
  },
};
</script>


