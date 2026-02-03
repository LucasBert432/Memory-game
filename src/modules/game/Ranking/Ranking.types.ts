export interface Player {
  name: string;
  rounds: number;
  date: string;
}
export interface RankingProps {
  ranking: Player[];
  currentPlayerName?: string;
}
