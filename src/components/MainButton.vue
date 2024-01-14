<script lang="ts">
export default {
  props: {
    text: { type: String, required: true },
  }
}
</script>

<template>
  <button class="para-lg main-button">
    {{ text }}
  </button>
</template>

<style scoped>
.main-button {
  width: 19.5rem;
  height: 3.5rem;
  padding: 0.5rem 1rem;
  border-radius: 2rem ;
  transition: 0.2s;
  cursor: pointer;

  background: var(--Coral, #F0633C);
  font-weight: 700;
  color: var(--Creme, #FFFAF3);
  box-shadow: 4px 4px 15px 0px rgba(255, 115, 76, 0.25);

  display: flex;
  justify-content: center;
  align-items: center;
}

.main-button:hover{
  background: var(--ocre-hover, #D1451E);
}
</style>