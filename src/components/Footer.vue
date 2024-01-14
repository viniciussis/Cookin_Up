<template>
  <footer class="footer para">
    Copyright | Projeto desenvolvido por Vinícius Silva Santos | 2024
  </footer>
</template>

<style scoped>
.footer {
  background-color: var(--verde-escuro, #263A29);
  color: var(--white);

  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media only screen and (max-width: 1300px) {
  .footer {
    padding: 1.5rem 3.75rem;
  }
}

@media only screen and (max-width: 767px) {
  .footer {
    padding: 1.5rem;
  }
}
</style>