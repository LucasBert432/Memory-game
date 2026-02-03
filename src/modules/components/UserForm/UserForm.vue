<template>
  <div :class="styles.userForm">
    <h2>Bem-vindo ao Jogo da Memória!</h2>
    <form @submit.prevent="handleSubmit" :class="styles.form">
      <div :class="styles.formGroup">
        <label for="playerName">Digite seu nome:</label>
        <input
          id="playerName"
          v-model="playerName"
          type="text"
          required
          placeholder="Seu nome"
          :class="styles.input"
        />
      </div>
      <button type="submit" :class="styles.button">Começar Jogo</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import styles from "./UserForm.module.css";

const emit = defineEmits<{
  start: [name: string];
}>();

const playerName = ref("");

const handleSubmit = () => {
  if (playerName.value.trim()) {
    emit("start", playerName.value.trim());
  }
};
</script>

<style module></style>
