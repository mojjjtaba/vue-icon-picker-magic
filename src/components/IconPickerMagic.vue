<template>
  <section class="icon-picker-magic">
    <div class="wrap">
      <section class="search">
        <input type="search" placeholder="Search icon ...">
      </section>
      <section class="icon-list">
        <div class="icon-item" v-for="(icon, index) in new Array(100)">
          <i class="las la-battery-three-quarters"></i>
        </div>
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
    background: #ffffff;
    padding: 24px;
    border: 1px solid rgba(0,0,0,.07);
    box-shadow: 0 0 3px 1px rgba(0,0,0,.07);
    border-radius: 6px;
    max-width: 300px;

    .search {
      margin-bottom: 12px;

      input {
        padding: 10px 14px;
        outline: none;
        border-radius: 6px;
        border: 1px solid #aaa;
        font-size: 18px;
        width: 100%;
        transition: all 0.3s;

        &:focus {
          background: rgba(0,0,0,.03);
          border: 1px solid #ccc;
        }
      }
    }

    .icon-list {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      text-align: left;
      margin-right: -4px;
      margin-left: -4px;

      .icon-item {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 25px;
        height: 25px;
        margin: 4px;
        border: 1px solid rgba(0,0,0,.12);
        padding: 8px;
        border-radius: 6px;
        cursor: pointer;
        transition: all 0.3s;

        &:hover {
          background: rgba(0,0,0,.08);
        }

        i {
          font-size: 32px;
        }
      }
    }
  }
}
</style>