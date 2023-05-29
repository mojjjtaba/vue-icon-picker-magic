<template>
  <section class="icon-picker-magic">
    <div class="wrap">
      <section class="search">
        <input type="search">
      </section>
      <section class="icon-list">
        <i class="las la-battery-three-quarters"></i>
        <i class="las la-battery-three-quarters"></i>
      </section>
    </div>
  </section>
</template>

<script setup>
defineProps({

})
console.log(document.styleSheets)
</script>

<style lang="scss" scoped>
@import url('https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css');


.icon-picker-magic {
  .wrap {
    background: rgba(222, 223, 255, 0.8);
    padding: 16px;
  }
}
</style>