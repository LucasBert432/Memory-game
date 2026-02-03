<template>
  <div
    :class="[
      styles.card,
      { [styles.flipped]: card.isFlipped || card.isMatched },
      { [styles.matched]: card.isMatched },
    ]"
    @click="handleClick"
  >
    <div :class="styles.cardInner">
      <div :class="styles.cardFront">
        <div :class="styles.cardContent">?</div>
      </div>
      <div :class="styles.cardBack">
        <div :class="styles.cardContent">{{ card.icon }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { CardProps } from "./card.types";
import styles from "./Card.module.css";

const props = defineProps<CardProps>();
const emit = defineEmits<{
  flip: [id: number];
}>();

const handleClick = () => {
  if (!props.disabled && !props.card.isFlipped && !props.card.isMatched) {
    emit("flip", props.card.id);
  }
};
</script>

<style module></style>
