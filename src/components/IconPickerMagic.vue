<template>
  <section class="icon-picker-magic">
    <div class="wrap">
      <section class="search">
        <input type="search" placeholder="Search icon ...">
      </section>
      <section class="select-font-icon">
        <select @change="selectedFontIcon = $event.target.value">
          <option
              v-for="(icon, index) in fontIcons"
              :key="index"
              :value="index"
              v-text="index"
          ></option>
        </select>
      </section>
      <section class="icon-list">
        <div class="wrapper">
          <template v-for="(icon, index) in fontIcons[selectedFontIcon].icons">
            <div class="icon-item">
              <i :class="`${fontIcons[selectedFontIcon].classPrefix} ${icon}`"></i>
            </div>
          </template>
        </div>
      </section>
    </div>
  </section>
</template>

<script setup>
import {ref} from "vue";
import {useIcons} from "../composables/icons";

const props = defineProps({
  activeFontIcon: {
    default: 'fontawesome',
    type: String
  }
})

const fontIcons = useIcons();
let selectedFontIcon = fontIcons.value[props.activeFontIcon] ? ref(props.activeFontIcon) : 'fontawesome';

console.log(fontIcons.value)
</script>

<style lang="scss" scoped>
@import 'https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css';
@import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css";

.icon-picker-magic {
  .wrap {
    background: #ffffff;
    padding: 24px;
    border: 1px solid rgba(0, 0, 0, .07);
    box-shadow: 0 0 3px 1px rgba(0, 0, 0, .07);
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
          background: rgba(0, 0, 0, .03);
          border: 1px solid #ccc;
        }
      }
    }

    .select-font-icon {
      margin-bottom: 12px;

      select {
        display: flex;
        align-items: center;
        width: 100%;
        height: 42px;
        font-size: 16px;
        outline: none;
        border-radius: 6px;
        border: 1px solid #aaa;
        padding: 10px;
      }
    }

    .icon-list {
      text-align: left;
      //margin-right: -4px;
      margin-left: -4px;
      height: 300px;
      overflow-y: scroll;

      .wrapper {
        display: flex;
        flex-wrap: wrap;
        align-items: flex-start;
      }

      /* width */
      &::-webkit-scrollbar {
        width: 3px;
      }

      /* Track */
      &::-webkit-scrollbar-track {
        background: #f1f1f1;
      }

      /* Handle */
      &::-webkit-scrollbar-thumb {
        background: #bec4c4;
      }

      /* Handle on hover */
      &::-webkit-scrollbar-thumb:hover {
        background: #555;
      }

      .icon-item {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 24px;
        height: 24px;
        margin: 4px;
        border: 1px solid rgba(0, 0, 0, .12);
        padding: 8px;
        border-radius: 6px;
        cursor: pointer;
        transition: all 0.3s;

        &:hover {
          background: rgba(0, 0, 0, .08);
        }

        i {
          font-size: 24px;
        }
      }
    }
  }
}
</style>