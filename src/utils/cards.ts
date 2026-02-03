import { Card } from "@/modules/components/Card/card.types";

const icons = [
  "🐶",
  "🐱",
  "🐭",
  "🐹",
  "🐰",
  "🦊",
  "🐻",
  "🐼",
  "🐨",
  "🐯",
  "🦁",
  "🐮",
  "🐷",
  "🐸",
  "🐵",
  "🐔",
  "🐧",
  "🐦",
  "🐤",
  "🦄",
];

export const generateCards = (pairs: number = 10): Card[] => {
  const selectedIcons = icons.slice(0, pairs);
  const cards: Card[] = [];

  selectedIcons.forEach((icon, index) => {
    cards.push(
      { id: index * 2, value: index, icon, isFlipped: false, isMatched: false },
      {
        id: index * 2 + 1,
        value: index,
        icon,
        isFlipped: false,
        isMatched: false,
      },
    );
  });

  return shuffleCards(cards);
};

export const shuffleCards = (cards: Card[]): Card[] => {
  const shuffled = [...cards];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};
