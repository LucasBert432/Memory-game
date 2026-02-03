<template>
  <div :class="styles.ranking">
    <h3>Ranking dos Melhores Jogadores</h3>

    <div v-if="ranking.length === 0" :class="styles.emptyRanking">
      <p>Nenhum resultado ainda. Seja o primeiro!</p>
    </div>

    <div v-else :class="styles.rankingList">
      <div :class="styles.rankingHeader">
        <div :class="styles.rank">Posição</div>
        <div :class="styles.name">Nome</div>
        <div :class="styles.rounds">Rodadas</div>
        <div :class="styles.date">Data</div>
      </div>

      <div
        v-for="(player, index) in ranking"
        :key="index"
        :class="[
          styles.rankingItem,
          { [styles.currentPlayer]: isCurrentPlayer(player) },
        ]"
      >
        <div :class="styles.rank">{{ index + 1 }}</div>
        <div :class="styles.name">{{ player?.name }}</div>
        <div :class="styles.rounds">{{ player?.rounds }}</div>
        <div :class="styles.date">{{ formatDate(player?.date) }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Player, RankingProps } from "./Ranking.types";
import styles from "./Ranking.module.css";

const props = defineProps<RankingProps>();

const isCurrentPlayer = (player: Player): boolean => {
  return props?.currentPlayerName === player?.name;
};

const formatDate = (dateString: string): string => {
  return new Date(dateString)?.toLocaleDateString("pt-BR");
};
</script>

<style module></style>
