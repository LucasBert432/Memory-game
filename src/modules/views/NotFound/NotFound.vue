<template>
  <div :class="styles.container">
    <div :class="styles.errorWrapper">
      <div :class="styles.decoration">
        <div :class="styles.orbits">
          <div :class="[styles.orbit, styles.orbit1]"></div>
          <div :class="[styles.orbit, styles.orbit2]"></div>
          <div :class="[styles.orbit, styles.orbit3]"></div>
        </div>
        <div :class="styles.center404">
          <div :class="styles.number404">404</div>
          <div :class="styles.pulse"></div>
        </div>
      </div>

      <div :class="styles.content">
        <div :class="styles.header">
          <h1 :class="styles.title">Ops! Não encontramos.</h1>
          <p :class="styles.subtitle">Escolha uma das opções abaixo.</p>
        </div>

        <div :class="styles.suggestions">
          <div :class="styles.suggestion">
            <router-link to="/" :class="styles.suggestionLink">
              <div :class="styles.suggestionIcon">🏠</div>
              <h3 :class="styles.suggestionTitle">Voltar ao Início</h3>
              <p :class="styles.suggestionText">
                Retorne para a página principal
              </p>
            </router-link>
          </div>

          <div :class="styles.suggestion">
            <router-link to="/game" :class="styles.suggestionLink">
              <div :class="styles.suggestionIcon">🎮</div>
              <h3 :class="styles.suggestionTitle">Jogar Agora</h3>
              <p :class="styles.suggestionText">Teste sua memória</p>
            </router-link>
          </div>

          <div :class="styles.suggestion">
            <router-link to="/about" :class="styles.suggestionLink">
              <div :class="styles.suggestionIcon">❓</div>
              <h3 :class="styles.suggestionTitle">Saiba Mais</h3>
              <p :class="styles.suggestionText">Conheça nosso jogo</p>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import styles from "./NotFound.module.css";

const visitorCount = ref("1.5K+");

onMounted(() => {
  const baseNumber = 1500 + Math.floor(Math.random() * 500);
  visitorCount.value = baseNumber > 2000 ? "2K+" : "1.5K+";
});
</script>

<style module src="./NotFound.module.css"></style>
