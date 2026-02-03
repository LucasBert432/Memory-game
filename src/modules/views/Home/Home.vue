<template>
  <div :class="style.home">
    <div :class="style.hero">
      <h2>Bem-vindo ao Jogo da Memória!</h2>
      <p :class="style.subtitle">
        Teste sua memória e encontre todos os pares em menos rodadas possíveis!
      </p>

      <div :class="style.heroImage">
        <div :class="style.cardsPreview">
          <div :class="style.cardPreview">
            <HeartIcon :size="32" />
          </div>
          <div :class="style.cardPreview">
            <StarIcon :size="32" />
          </div>
          <div :class="style.cardPreview">
            <MoonIcon :size="32" />
          </div>
        </div>
      </div>

      <div :class="style.actions">
        <Button size="large" @click="startGame">
          <template #icon>
            <Gamepad2Icon :size="20" />
          </template>
          Começar a Jogar
        </Button>

        <router-link to="/about">
          <Button variant="secondary" size="large">
            <template #icon>
              <InfoIcon :size="20" />
            </template>
            Saiba Mais
          </Button>
        </router-link>
      </div>
    </div>

    <div :class="style.features">
      <h3 :class="style.titleContainer">
        <AwardIcon :size="24" style="margin-right: 8px" />
        Recursos do Jogo
      </h3>
      <div :class="style.featuresGrid">
        <div :class="style.feature">
          <div :class="style.featureIcon">
            <ZapIcon :size="32" />
          </div>
          <h4>Jogo Rápido</h4>
          <p>Partidas dinâmicas para qualquer momento</p>
        </div>
        <div :class="style.feature">
          <div :class="style.featureIcon">
            <SmartphoneIcon :size="32" />
          </div>
          <h4>Totalmente Responsivo</h4>
          <p>Jogue em qualquer dispositivo</p>
        </div>
      </div>
    </div>

    <div :class="style.topPlayers">
      <h3 :class="style.titleContainer">
        <AwardIcon :size="24" style="margin-right: 8px" />
        Top 3 Jogadores
      </h3>
      <div v-if="gameStore.ranking.length === 0" :class="style.emptyRanking">
        <p>Nenhum jogador ainda. Seja o primeiro!</p>
      </div>
      <div v-else :class="style.playersList">
        <div
          v-for="(player, index) in topPlayers"
          :key="player.name + player.date"
          :class="[
            style.playerCard,
            index === 0 && style.firstPlace,
            index === 1 && style.secondPlace,
            index === 2 && style.thirdPlace,
          ]"
        >
          <div :class="style.playerRank">
            <TrophyIcon v-if="index === 0" :size="20" />
            <MedalIcon v-else-if="index === 1" :size="20" />
            <AwardIcon v-else-if="index === 2" :size="20" />
            {{ index + 1 }}º
          </div>
          <div :class="style.playerInfo">
            <div :class="style.playerName">{{ player.name }}</div>
            <div :class="style.playerStats">
              <span :class="style.rounds">{{ player.rounds }} rodadas</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRouter } from "vue-router";
import { useGameStore } from "../../../store/useGameStore/useGameStore";
import Button from "@/components/Button/Button.vue";
import style from "./Home.module.css";
import {
  Gamepad2,
  Info,
  Award,
  Zap,
  Smartphone,
  Trophy,
  Medal,
  Heart,
  Star,
  Moon,
} from "lucide-vue-next";

const Gamepad2Icon = Gamepad2;
const InfoIcon = Info;
const AwardIcon = Award;
const ZapIcon = Zap;
const SmartphoneIcon = Smartphone;
const TrophyIcon = Trophy;
const MedalIcon = Medal;
const HeartIcon = Heart;
const StarIcon = Star;
const MoonIcon = Moon;

const router = useRouter();
const gameStore = useGameStore();

const topPlayers = computed(() => {
  return gameStore.ranking.slice(0, 3);
});

const startGame = () => {
  router.push("/game");
};
</script>

<style module src="./Home.module.css"></style>
