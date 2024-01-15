<script lang="ts">
import type IRecipe from '@/interfaces/IRecipe';
import type { PropType } from 'vue';

export default {
  props: {
    recipes: { type: Object as PropType<IRecipe>, required: true }
  }
}
</script>

<template>
  <div class="recipe-card">
    <img :src="`/images/recipes/${recipes.imagem}`" alt="imagem da receita" class="card-img">
    <div class="card-title">
      {{ recipes.nome }}
    </div>
  </div>
</template>

<style scoped>
.recipe-card {
  width: 19.5rem;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 4px 4px 10px 0px rgba(68, 68, 68, 0.05);
}

.card-img {
  width: 100%;
  object-fit: cover;
}

.card-title {
  width: 100%;
  padding: 2rem;
  text-align: center;
  background-color: var(--branco);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  font-weight: 700;
}
</style>