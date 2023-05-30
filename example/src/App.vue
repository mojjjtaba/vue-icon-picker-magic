<script setup>
import {IconPickerMagic} from "vue-icon-picker-magic-test";
import "vue-icon-picker-magic-test/dist/style.css"

fetch('src/_icons.scss')
.then((res) => res.text())
.then((res) => {
  console.log(typeof res)
  console.log(res.test(/^#{\$la-css-prefix}-([a-z\-])+:before$/))
})
</script>

<template>
<IconPickerMagic />
</template>

<style scoped>

</style>
