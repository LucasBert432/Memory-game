import { defineStore } from "pinia";
import { ref, computed } from "vue";
import type { GameState } from "@/modules/composables/useGameLogic/game.types";
import type { Card as CardType } from "@/modules/components/Card/card.types";
import { generateCards } from "@/utils/cards";
import { Player } from "@/modules/game/Ranking/Ranking.types";

export const useGameStore = defineStore("game", () => {
  const gameState = ref<GameState>({
    cards: [],
    flippedCards: [],
    isLocked: false,
    rounds: 0,
    playerName: "",
    isGameStarted: false,
    isGameCompleted: false,
  });

  const ranking = ref<Player[]>(
    JSON.parse(localStorage.getItem("memory-game-ranking") || "[]"),
  );

  const allCardsMatched = computed(() => {
    return gameState.value.cards.every((card) => card.isMatched);
  });

  const currentPlayer = computed(() => gameState.value.playerName);
  const currentRounds = computed(() => gameState.value.rounds);

  const flippedCardsCount = computed((): number => {
    return gameState.value.cards.filter((card: CardType) => card.isFlipped)
      .length;
  });

  const matchedPairsCount = computed((): number => {
    return (
      gameState.value.cards.filter((card: CardType) => card.isMatched).length /
      2
    );
  });

  const startGame = (name: string) => {
    gameState.value.playerName = name;
    gameState.value.cards = generateCards();
    gameState.value.flippedCards = [];
    gameState.value.rounds = 0;
    gameState.value.isGameStarted = true;
    gameState.value.isGameCompleted = false;
  };

  const flipCard = (cardId: number) => {
    if (
      gameState.value.isLocked ||
      gameState.value.flippedCards.includes(cardId)
    ) {
      return;
    }

    const cardIndex = gameState.value.cards.findIndex(
      (card) => card.id === cardId,
    );
    if (cardIndex === -1 || gameState.value.cards[cardIndex].isMatched) {
      return;
    }

    gameState.value.cards[cardIndex].isFlipped = true;
    gameState.value.flippedCards.push(cardId);

    if (gameState.value.flippedCards.length === 2) {
      gameState.value.isLocked = true;
      gameState.value.rounds++;

      setTimeout(() => {
        checkForMatch();
      }, 1000);
    }
  };

  const checkForMatch = () => {
    const [firstId, secondId] = gameState.value.flippedCards;
    const firstCard = gameState.value.cards.find((card) => card.id === firstId);
    const secondCard = gameState.value.cards.find(
      (card) => card.id === secondId,
    );

    if (firstCard && secondCard && firstCard.value === secondCard.value) {
      const firstIndex = gameState.value.cards.findIndex(
        (card) => card.id === firstId,
      );
      const secondIndex = gameState.value.cards.findIndex(
        (card) => card.id === secondId,
      );

      gameState.value.cards[firstIndex].isMatched = true;
      gameState.value.cards[secondIndex].isMatched = true;

      if (gameState.value.cards.every((card) => card.isMatched)) {
        completeGame();
      }
    } else {
      const firstIndex = gameState.value.cards.findIndex(
        (card) => card.id === firstId,
      );
      const secondIndex = gameState.value.cards.findIndex(
        (card) => card.id === secondId,
      );

      gameState.value.cards[firstIndex].isFlipped = false;
      gameState.value.cards[secondIndex].isFlipped = false;
    }

    gameState.value.flippedCards = [];
    gameState.value.isLocked = false;
  };

  const completeGame = () => {
    gameState.value.isGameCompleted = true;

    const player: Player = {
      name: gameState.value.playerName,
      rounds: gameState.value.rounds,
      date: new Date().toISOString(),
    };

    ranking.value.push(player);
    ranking.value.sort((a, b) => a.rounds - b.rounds);

    if (ranking.value.length > 10) {
      ranking.value = ranking.value.slice(0, 10);
    }

    localStorage.setItem("memory-game-ranking", JSON.stringify(ranking.value));
  };

  const resetGame = () => {
    startGame(gameState.value.playerName);
  };

  const newGame = () => {
    gameState.value.playerName = "";
    gameState.value.isGameStarted = false;
    gameState.value.isGameCompleted = false;
  };

  return {
    gameState,
    ranking,
    allCardsMatched,
    currentPlayer,
    currentRounds,
    flippedCardsCount,
    matchedPairsCount,
    startGame,
    flipCard,
    resetGame,
    newGame,
    completeGame,
  };
});
