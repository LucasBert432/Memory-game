<template>
  <button
    :class="buttonClasses"
    :type="type"
    :disabled="disabled || loading"
    @click="handleClick"
    :aria-label="ariaLabel || label"
    :aria-busy="loading"
  >
    <span v-if="hasIconSlot && iconPosition === 'left'" :class="styles.icon">
      <slot name="icon"></slot>
    </span>

    <span v-if="loading" :class="styles.spinner"></span>
    <span v-else :class="styles.label">
      <slot>{{ label }}</slot>
    </span>

    <span v-if="hasIconSlot && iconPosition === 'right'" :class="styles.icon">
      <slot name="icon"></slot>
    </span>

    <span v-if="badge" :class="styles.badge">{{ badge }}</span>
  </button>
</template>

<script setup lang="ts">
import { computed, useSlots } from "vue";
import type { ButtonProps } from "./Button.types";
import styles from "./Button.module.css";

const props = withDefaults(defineProps<ButtonProps>(), {
  variant: "primary",
  size: "medium",
  outline: false,
  fullWidth: false,
  disabled: false,
  loading: false,
  type: "button",
  iconPosition: "left",
});

const emit = defineEmits<{
  click: [event: MouseEvent];
}>();

const slots = useSlots();
const hasIconSlot = computed(() => !!slots.icon);

const buttonClasses = computed(() => ({
  [styles.button]: true,
  [styles[props.variant]]: true,
  [styles[props.size]]: true,
  [styles.outline]: props.outline,
  [styles.fullWidth]: props.fullWidth,
  [styles.disabled]: props.disabled,
  [styles.loading]: props.loading,
  [styles.withIcon]: hasIconSlot.value,
  [styles.iconRight]: props.iconPosition === "right",
}));

const handleClick = (event: MouseEvent) => {
  if (!props.disabled && !props.loading) {
    emit("click", event);
  }
};
</script>

<style module></style>
