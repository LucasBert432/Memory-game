import { Card } from "@/modules/components/Card/card.types";

export interface GameState {
  cards: Card[];
  flippedCards: number[];
  isLocked: boolean;
  rounds: number;
  playerName: string;
  isGameStarted: boolean;
  isGameCompleted: boolean;
}

export interface Player {
  name: string;
  rounds: number;
  date: string;
}

export interface GameState {
  cards: Card[];
  flippedCards: number[];
  isLocked: boolean;
  rounds: number;
  playerName: string;
  isGameStarted: boolean;
  isGameCompleted: boolean;
}
