
<template>
  <ul>
    <li v-for="(item, index) in list" :key="index">
      {{ item }}
    </li>
  </ul>
</template>

<script>
  import {b} from '../utils/a';
  export default {
    name: 'list',
    data() {
      return {
        list: b(),
      }
    },
  }
</script>
