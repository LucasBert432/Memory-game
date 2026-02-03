export interface Card {
  id: number;
  value: number;
  icon: string;
  isFlipped: boolean;
  isMatched: boolean;
}

export interface CardProps {
  card: Card;
  disabled?: boolean;
}
