<script lang="ts">
import Tag from './Tag.vue';

export default {
  components: { Tag },
  props: {
    ingredient: { type: String, required: true }
  },
  data() {
    return {
      selected: false
    }
  }
}
</script>

<template>
  <button @click="selected = !selected" class="selectable">
    <Tag :text="ingredient" :active="selected" />
  </button>
</template>

<style scoped>
.selectable{
  cursor: pointer;
}
</style>