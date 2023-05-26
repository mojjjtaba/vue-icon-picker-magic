<template>
  <button
      style="background: beige;padding: 10px 30px;"
      :class="{'has-border': hasBorder}"
  >
    <slot name="emoji" style="margin-right: 20px"></slot>
    <slot name="text"></slot>
  </button>
</template>

<script setup>
defineProps({
  hasBorder: {
    type: Boolean,
    default: false,
  }
})
</script>

<style scoped>
button {
  font-size: 20px;
}

.has-border {
  border: 4px solid #000;
}
</style>