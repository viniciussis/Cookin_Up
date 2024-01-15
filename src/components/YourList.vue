<script lang="ts">
import type { PropType } from 'vue';
import Tag from './Tag.vue';

export default {
  props: {
    ingredients: { type: Array as PropType<string[]>, required: true }
  },
  components: { Tag }
}
</script>

<template>
  <span class="subtitle-lg my-list-text">
    Sua lista:
  </span>
  <ul v-if="ingredients.length" class="my-list-ingredients">
    <li v-for="ingredient in ingredients" :key="ingredient">
      <Tag :text="ingredient" active />
    </li>
  </ul>
  <p v-else class="empty-list">
    <img src="../assets/images/lista-vazia.svg" alt="icone de lista vazia">
    Sua lista está vazia, selecione ingredientes para iniciar.
  </p>
</template>

<style scoped>
.my-list-text {
  color: var(--coral, #F0633C);
  display: block;
  text-align: center;
  font-weight: 600;
}

.my-list-ingredients {
  display: flex;
  justify-content: center;
  gap: 1rem 1.5rem;
  flex-wrap: wrap;
}

.empty-list {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.25rem;

  color: var(--coral, #F0633C);
  text-align: center;
}
</style>