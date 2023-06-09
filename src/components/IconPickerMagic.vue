<template>
  <section class="icon-picker-magic">
    <div class="wrap">
      <section class="search">
        <input type="search" placeholder="Search icon ...">
      </section>
      <section class="icon-list">
        <div class="icon-item" v-for="(icon, index) in iconNames">
<!--          <i class="las la-battery-three-quarters"></i>-->
          <i :class="`fa-solid ${icon}`"></i>
        </div>
      </section>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

defineProps({

})

const iconNames = ref([]);


// Function to fetch CSS file
function fetchCSS(url) {
  return fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to fetch ${url}`);
        }
        return response.text();
      });
}

// Function to extract icon names using regex
function extractIconNames(cssContent) {
  const regex = /\.fa-[a-z0-9\-]+::before/g;
  const iconNames = [];
  let match;
  while ((match = regex.exec(cssContent)) !== null) {
    iconNames.push(match[0].slice(1, -8));
  }
  return iconNames;
}

// Fetch Font Awesome CSS and extract icon names
fetchCSS('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.css')
    .then((cssContent) => {
      iconNames.value = extractIconNames(cssContent);
      console.log(iconNames);
    })
    .catch((error) => {
      console.error(error);
    });
</script>

<style lang="scss" scoped>
@import 'https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css';
@import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css";

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
      //margin-right: -4px;
      margin-left: -4px;
      height: 300px;
      overflow-y: scroll;

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
        border: 1px solid rgba(0,0,0,.12);
        padding: 8px;
        border-radius: 6px;
        cursor: pointer;
        transition: all 0.3s;

        &:hover {
          background: rgba(0,0,0,.08);
        }

        i {
          font-size: 24px;
        }
      }
    }
  }
}
</style>