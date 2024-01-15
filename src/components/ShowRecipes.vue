<script lang="ts">
import MainButton from './MainButton.vue';
import type IRecipe from '@/interfaces/IRecipe';
import { getRecipes } from '@/http/index';
import RecipeCard from './RecipeCard.vue';
import type { PropType } from 'vue';
import { itensInLists } from '@/math/lists';

export default {
  props: {
    ingredients: { type: Array as PropType<String[]>, required: true },
  },
  data() {
    return {
      foundRecipes: [] as IRecipe[]
    }
  },
  async created() {
    const recipes = await getRecipes();

    this.foundRecipes = recipes.filter((recipe) => {
      const canCook = itensInLists(recipe.ingredientes, this.ingredients)
      return canCook
    });
},
  components: { MainButton, RecipeCard },
  emits: ['editIngredients']
}
</script>

<template>
  <section class="show-recipes">
    <h1 class="header recipes-title">Receitas</h1>
    <p class="para-lg results">Resultados encontrados: {{ foundRecipes.length }}</p>

    <div v-if="foundRecipes.length" class="recipes-wrapper">
      <p class="para-lg instructions">
        Veja as opções de receitas que encontramos com os ingredientes que você tem por aí!
      </p>
      <ul class="recipes">
        <li v-for="recipe in foundRecipes" :key="recipe.nome">
          <RecipeCard :recipes="recipe" />
        </li>
      </ul>
    </div>

    <div v-else>
      <p class="para-lg">
        Ops, não encontramos resultados para sua combinação. Vamos tentar de novo?
      </p>
      <img src="../../src/assets/images/sem-receitas.png" alt="imagem que representa nenhuma receita encontrada"
        class="not-found-img">
    </div>
    <MainButton text="Editar lista" @click="$emit('editIngredients')" />
  </section>
</template>

<style scoped>
.show-recipes {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.recipes-title {
  color: var(--verde-medio);
  margin: 1.25rem 0;
}

.instructions {
  margin-bottom: 2rem;
}

.results {
  color: var(--verde-medio);
}

.recipes-wrapper{
  margin-bottom: 3rem;
}
.recipes {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}

@media only screen and (max-width: 767px) {
  .recipes-wrapper {
    margin-bottom: 2rem;
  }
}
</style>
