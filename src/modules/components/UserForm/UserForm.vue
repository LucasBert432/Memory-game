<template>
  <div :class="styles.userForm">
    <div :class="styles.formContainer">
      <div :class="styles.formHeader">
        <div :class="styles.formIcon">
          <img
            src="../../../../public/memory-logo.png"
            style="width: 160px; height: 108px"
          />
        </div>
        <h2 :class="styles.formTitle">Jogue agora!</h2>
        <p :class="styles.formSubtitle">
          Preencha seu nome abaixo para começar
        </p>
      </div>

      <form @submit.prevent="handleSubmit" :class="styles.form">
        <div :class="styles.formGroup">
          <label for="playerName" :class="styles.formLabel">
            <UserIcon :size="18" />
            <span>Seu Nome</span>
          </label>

          <div :class="styles.inputWrapper">
            <FormInput
              name="playerName"
              :label="''"
              :type="'text'"
              :placeholder="'Digite seu nome aqui...'"
              v-model="playerName"
              :hint="''"
              :class="[
                styles.customFormInput,
                { [styles.inputError]: showError && !isValid },
              ]"
              @update:modelValue="onInputChange"
              @blur="handleInputBlur"
              @focus="handleInputFocus"
            />

            <div
              v-if="playerName"
              :class="styles.inputClear"
              @click="clearInput"
              style="
                position: absolute;
                right: 40px;
                top: 50%;
                transform: translateY(-50%);
              "
            >
              <XIcon :size="16" />
            </div>
          </div>

          <div
            v-if="showError && !isValid"
            id="name-error"
            :class="styles.errorMessage"
          >
            <AlertCircleIcon :size="16" />
            <span>Por favor, digite um nome válido (2-20 caracteres)</span>
          </div>

          <div v-else :class="styles.inputHint">
            <span>Máximo de 20 caracteres</span>
            <span :class="styles.charCount">{{ playerName.length }}/20</span>
          </div>
        </div>

        <div :class="styles.formActions">
          <Button
            type="submit"
            variant="primary"
            size="large"
            :loading="isLoading"
            :disabled="!isValid"
            full-width
          >
            <template #icon>
              <PlayIcon :size="20" />
            </template>
            {{ buttonText }}
          </Button>

          <div
            v-if="gameStore.ranking.length > 0"
            :class="styles.recentPlayers"
          >
            <p :class="styles.recentPlayersTitle">Jogadores recentes:</p>
            <div :class="styles.recentPlayersList">
              <button
                v-for="player in recentPlayersFromStore"
                :key="player.name + player.date"
                :class="styles.recentPlayer"
                @click="selectRecentPlayer(player.name)"
              >
                <UserIcon :size="14" />
                <span>{{ player.name }}</span>
                <span :class="styles.playerRounds"
                  >{{ player.rounds }} rodadas</span
                >
              </button>
            </div>
          </div>
        </div>
      </form>

      <div :class="styles.formFooter">
        <p :class="styles.footerText">
          <span>Boa sorte!</span>
        </p>
      </div>
    </div>

    <div :class="styles.backgroundElements">
      <div
        v-for="n in 5"
        :key="n"
        :class="styles.bgElement"
        :style="getBgElementStyle(n)"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { useGameStore } from "../../../store/useGameStore/useGameStore";
import Button from "@/components/Button";
import FormInput from "@/components/FormInput";
import { User, X, AlertCircle, Play } from "lucide-vue-next";
import styles from "./UserForm.module.css";

const UserIcon = User;
const XIcon = X;
const AlertCircleIcon = AlertCircle;
const PlayIcon = Play;
const gameStore = useGameStore();

const emit = defineEmits<{
  start: [name: string];
}>();

const playerName = ref("");
const showError = ref(false);
const isLoading = ref(false);
const isInputFocused = ref(false);

const isValid = computed(() => {
  return (
    playerName.value.trim().length >= 2 && playerName.value.trim().length <= 20
  );
});

const buttonText = computed(() => {
  if (isLoading.value) return "Iniciando...";
  if (!isValid.value) return "Digite seu nome";
  return "Começar Jogo";
});

const recentPlayersFromStore = computed(() => {
  return gameStore.ranking
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);
});

const onInputChange = (value: string) => {
  playerName.value = value;
  validateInput();
};

const handleSubmit = async () => {
  if (!isValid.value) {
    showError.value = true;
    return;
  }

  isLoading.value = true;

  await new Promise((resolve) => setTimeout(resolve, 600));

  emit("start", playerName.value.trim());
  gameStore.startGame(playerName.value.trim());

  isLoading.value = false;
};

const handleInputFocus = () => {
  isInputFocused.value = true;
  showError.value = false;
};

const handleInputBlur = () => {
  isInputFocused.value = false;
  if (playerName.value && !isValid.value) {
    showError.value = true;
  }
};

const validateInput = () => {
  if (playerName.value && !isValid.value) {
    showError.value = true;
  } else {
    showError.value = false;
  }
};

const clearInput = () => {
  playerName.value = "";
  showError.value = false;
};

const selectRecentPlayer = (name: string) => {
  playerName.value = name;
  showError.value = false;
};

const getBgElementStyle = (index: number) => {
  const size = 60 + index * 10;
  const opacity = 0.03 + index * 0.01;
  const delay = index * 0.2;

  return {
    width: `${size}px`,
    height: `${size}px`,
    opacity: opacity.toString(),
    animationDelay: `${delay}s`,
  };
};

onMounted(() => {
  setTimeout(() => {
    const input = document.getElementById("playerName");
    if (input) input.focus();
  }, 300);
});
</script>

<style module></style>
