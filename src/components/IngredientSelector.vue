<script lang="ts">
import { getCategories } from '@/http/index';
import type ICategory from '@/interfaces/ICategory';
import CardCategory from './CardCategory.vue';
import MainButton from './MainButton.vue';

export default {
  name: 'IngredientSelector',
  data() {
    return {
      categories: [] as ICategory[]
    };
  },
  async created() {
    this.categories = await getCategories();
  },
  components: { CardCategory, MainButton },
  emits: ['addIngredient', 'removeIngredient', 'searchRecipes']
}
</script>

<template>
  <section class="ingredients-selector">
    <h1 class="header ingredients-title">Ingredientes</h1>
    <p class="para-lg instructions">
      Selecione abaixo os ingredientes que você quer usar nesta receita:
    </p>
    <ul v-if="categories.length" class="categories">
      <li v-for="category in categories" :key="category.nome">
        <CardCategory :category="category" @add-ingredient="$emit('addIngredient', $event)"
          @remove-ingredient="$emit('removeIngredient', $event)" />
      </li>
      <p class="para tip">*Atenção: consideramos que você tem em casa sal, pimenta e água.</p>
    </ul>
    <MainButton text="Buscar receitas!" @click="$emit('searchRecipes')" />
  </section>
</template>

<style scoped>
.ingredients-selector {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.ingredients-title {
  color: var(--verde-medio);
  display: block;
  margin: 1.5rem 0;
}

.instructions {
  margin-bottom: 2rem;
}

.categories {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.tip {
  align-self: flex-start;
  margin-bottom: 2.5rem;
}

@media only screen and (max-width: 767px) {
  .tip {
    margin-bottom: 1.5rem;
  }
}
</style>