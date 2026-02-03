<template>
  <div :class="styles.container">
    <div class="error-container">
      <h1>404</h1>
      <h2>Página não encontrada</h2>
      <p>A página que você está procurando não existe ou foi movida.</p>
      <router-link to="/">
        <Button variant="primary" size="large" icon="🏠">
          Voltar ao Início
        </Button>
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from "@/components/Button/Button.vue";
import styles from "./NotFound.module.css";
</script>

<style module></style>
