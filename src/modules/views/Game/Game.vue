<template>
  <div :class="$style.game">
    <div v-if="!gameStore.gameState.isGameStarted" :class="$style.startScreen">
      <UserForm @start="handleStartGame" />
    </div>

    <div v-else :class="$style.gameScreen">
      <div :class="$style.gameContainer">
        <div :class="$style.gameHeader">
          <div :class="$style.playerInfo">
            <h2>Jogador: {{ gameStore.gameState.playerName }}</h2>
            <div :class="$style.rounds">
              Rodadas: {{ gameStore.gameState.rounds }}
            </div>
          </div>
          <div :class="$style.controls">
            <Button @click="handleResetGame" variant="secondary" icon="🔄">
              Reiniciar
            </Button>
            <Button @click="handleNewGame" variant="secondary" icon="👤">
              Novo Jogador
            </Button>
          </div>
        </div>

        <div :class="$style.cardsGrid">
          <Card
            v-for="card in gameStore.gameState.cards"
            :key="card.id"
            :card="card"
            :disabled="gameStore.gameState.isLocked"
            @flip="handleFlipCard"
          />
        </div>

        <div
          v-if="gameStore.gameState.isGameCompleted"
          :class="$style.gameCompleted"
        >
          <div :class="$style.successMessage">
            <h2>🎉 Parabéns, {{ gameStore.gameState.playerName }}! 🎉</h2>
            <p>
              Você completou o jogo em {{ gameStore.gameState.rounds }} rodadas!
            </p>
            <div :class="$style.actions">
              <Button @click="handleResetGame" variant="primary" icon="🔄">
                Jogar Novamente
              </Button>
              <Button @click="handleNewGame" variant="secondary" icon="👤">
                Novo Jogador
              </Button>
              <router-link to="/">
                <Button variant="secondary" icon="🏠">
                  Voltar ao Início
                </Button>
              </router-link>
            </div>
          </div>
        </div>
      </div>

      <div :class="$style.sidebar">
        <div :class="$style.ranking">
          <h3>🏆 Ranking dos Melhores Jogadores</h3>

          <div
            v-if="gameStore.ranking.length === 0"
            :class="$style.emptyRanking"
          >
            <p>Nenhum resultado ainda. Seja o primeiro!</p>
          </div>

          <div v-else :class="$style.rankingList">
            <div :class="$style.rankingHeader">
              <div :class="$style.rank">Posição</div>
              <div :class="$style.name">Nome</div>
              <div :class="$style.rounds">Rodadas</div>
              <div :class="$style.date">Data</div>
            </div>

            <div
              v-for="(player, index) in gameStore.ranking"
              :key="index"
              :class="[
                $style.rankingItem,
                {
                  [$style.currentPlayer]:
                    player.name === gameStore.gameState.playerName,
                },
              ]"
            >
              <div :class="$style.rank">{{ index + 1 }}</div>
              <div :class="$style.name">{{ player.name }}</div>
              <div :class="$style.rounds">{{ player.rounds }}</div>
              <div :class="$style.date">{{ formatDate(player.date) }}</div>
            </div>
          </div>
        </div>

        <div :class="$style.gameStats">
          <h4>📊 Estatísticas da Partida</h4>
          <div :class="$style.statsGrid">
            <div :class="$style.stat">
              <div :class="$style.statLabel">Rodadas</div>
              <div :class="$style.statValue">
                {{ gameStore.gameState.rounds }}
              </div>
            </div>
            <div :class="$style.stat">
              <div :class="$style.statLabel">Cartas</div>
              <div :class="$style.statValue">
                {{ gameStore.flippedCardsCount }}
              </div>
            </div>
            <div :class="$style.stat">
              <div :class="$style.statLabel">Pares</div>
              <div :class="$style.statValue">
                {{ gameStore.matchedPairsCount }}/10
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useGameStore } from "../../../store/useGameStore/useGameStore";
import UserForm from "@/modules/components/UserForm/UserForm.vue";
import Card from "@/modules/components/Card/Card.vue";
import Button from "@/components/Button/Button.vue";

const gameStore = useGameStore();

const handleStartGame = (name: string): void => {
  gameStore.startGame(name);
};

const handleFlipCard = (id: number): void => {
  gameStore.flipCard(id);
};

const handleResetGame = (): void => {
  gameStore.resetGame();
};

const handleNewGame = (): void => {
  gameStore.newGame();
};

const formatDate = (dateString: string): string => {
  return new Date(dateString).toLocaleDateString("pt-BR");
};
</script>
<style module src="./Game.module.css"></style>
