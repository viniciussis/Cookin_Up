<script lang="ts">
import IngredientSelector from './IngredientSelector.vue';
import ShowRecipes from './ShowRecipes.vue';
import YourList from './YourList.vue';

type Page = 'IngredientSelector' | 'ShowRecipes'

export default {
  data() {
    return {
      ingredients: [] as string[],
      content: 'IngredientSelector' as Page
    };
  },
  components: { IngredientSelector, YourList, ShowRecipes },
  methods: {
    addIngredient(ingredient: string) {
      this.ingredients.push(ingredient)
    },
    removeIngredient(ingredient: string) {
      this.ingredients = this.ingredients.filter(existingIngredient => existingIngredient !== ingredient)
    },
    browse(page: Page) {
      this.content = page
    }
  }
}
</script>

<template>
  <main class="main-content">
    <YourList :ingredients="ingredients" />
    <KeepAlive :include="'IngredientSelector'">
      <IngredientSelector v-if="content === 'IngredientSelector'" @add-ingredient="addIngredient"
        @remove-ingredient="removeIngredient" @search-recipes="browse('ShowRecipes')" />
      <ShowRecipes v-else-if="content === 'ShowRecipes'" @edit-ingredients="browse('IngredientSelector')"
        :ingredients="ingredients" />
    </KeepAlive>
  </main>
</template>

<style scoped>
.main-content {
  padding: 6.5rem 7.5rem;
  border-radius: 3.75rem 3.75rem 0rem 0rem;
  background: var(--creme, #FFFAF3);
  color: var(--cinza, #444);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.25rem;
}

@media only screen and (max-width: 1300px) {
  .main-content {
    padding: 5rem 3.75rem;
    gap: 1.75rem;
  }
}

@media only screen and (max-width: 767px) {
  .main-content {
    padding: 4rem 1.5rem;
    gap: 1.75rem;
  }
}
</style>