<script lang="ts">
import { getCategories } from '@/http/index';
import type ICategory from '@/interfaces/ICategory';

export default {
  data() {
    return {
      categories: [] as ICategory[]
    }
  },
  async created() {
    this.categories = await getCategories();
  }
}
</script>

<template>
  <section class="ingredients-selector">
    <h1 class="header ingredients-title">Ingredientes</h1>
    <p class="para-lg intructions">
      Selecione abaixo os ingredientes que você quer usar nesta receita:
    </p>
    <ul class="categories">
      <li v-for="category in categories" :key="category.nome">
        {{ category.nome }}
      </li>
    </ul>
    <p class="para tip">*Atenção: consideramos que você tem em casa sal, pimenta e água.</p>
  </section>
</template>

<style scoped>
.ingredients-selector {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.ingredients-title {
  color: var(--verde-medio, #3D6D4A);
  display: block;
  margin-bottom: 1.5rem;
}

.instructions {
  margin-bottom: 2rem;
}

.categories {
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.tip {
  align-self: flex-start;
  margin-bottom: 3.5rem;
}

@media only screen and (max-width: 767px) {
  .tip {
    margin-bottom: 2.5rem;
  }
}
</style>