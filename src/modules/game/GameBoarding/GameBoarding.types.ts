export interface GameBoardingProps {
  cards: any[];
  playerName: string;
  rounds: number;
  isLocked: boolean;
  isGameCompleted: boolean;
}

export interface Emits {
  (e: "reset"): void;
  (e: "new-game"): void;
  (e: "flip-card", id: number): void;
}
