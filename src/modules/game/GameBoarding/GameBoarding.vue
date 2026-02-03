<template>
  <div :class="styles.gameBoard">
    <div :class="styles.gameHeader">
      <div :class="styles.playerInfo">
        <h2>Jogador: {{ playerName }}</h2>
        <div :class="styles.rounds">Rodadas: {{ rounds }}</div>
      </div>
      <div :class="styles.controls">
        <Button @click="resetGame" :class="styles.button">Reiniciar</Button>
        <Button @click="newGame" :class="styles.button">Novo Jogo</Button>
      </div>
    </div>

    <div :class="styles.cardsGrid">
      <Card
        v-for="card in cards"
        :key="card.id"
        :card="card"
        :disabled="isLocked"
        @flip="onCardFlip"
      />
    </div>

    <div v-if="isGameCompleted" :class="styles.gameCompleted">
      <div :class="styles.successMessage">
        <h2>Parabéns, {{ playerName }}! 🎉</h2>
        <p>Você completou o jogo em {{ rounds }} rodadas!</p>
        <div :class="styles.actions">
          <Button @click="resetGame" :class="styles.button">
            Jogar Novamente
          </Button>
          <Button @click="newGame" :class="styles.button">Novo Jogador</Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Card from "../../components/Card/index";
import type { Emits, GameBoardingProps } from "./GameBoarding.types";
import styles from "./GameBoard.module.css";

const props = defineProps<GameBoardingProps>();
const emit = defineEmits<Emits>();

const onCardFlip = (id: number) => {
  emit("flip-card", id);
};

const resetGame = () => {
  emit("reset");
};

const newGame = () => {
  emit("new-game");
};
</script>

<style module></style>
