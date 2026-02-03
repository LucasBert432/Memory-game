<script setup>
import { ref, onMounted } from "vue";

const cartas = ref([
  { valor: "Leão", naipe: "LEAO", pontos: 1 },
  { valor: "Elefante", naipe: "ELEFANTE", pontos: 1 },
  { valor: "Tigre", naipe: "TIGRE", pontos: 1 },
  { valor: "Girafa", naipe: "GIRAFA", pontos: 1 },
  { valor: "Zebra", naipe: "ZEBRA", pontos: 1 },
  { valor: "Rinoceronte", naipe: "RINOCERONTE", pontos: 1 },
  { valor: "Hipopótamo", naipe: "HIPOPOTAMO", pontos: 1 },
  { valor: "Crocodilo", naipe: "CROCODILO", pontos: 1 },
  { valor: "Panda", naipe: "PANDA", pontos: 1 },
  { valor: "Pinguim", naipe: "PINGUEM", pontos: 1 },
]);

let contador = ref(0);

onMounted(() => {
  intervalo = setInterval(() => {
    contador.value++;
  }, 1000);
});

const cartasViradas = computed(() => {
  return cartas.value.filter((carta) => carta.virada).length;
});

const porcentagemViradas = computed(() => {
  return (cartasViradas.value / cartas.value.length) * 100;
});

const virarCarta = (carta) => {
  if (!carta.virada) {
    carta.virada = true;
  }
};

const reiniciarJogo = () => {
  cartas.value.forEach((carta) => {
    carta.virada = false;
  });
};
</script>

<template>
  <div>
    <div>
      <h1>Bem vindo, preencha seu nome a baixo</h1>
      <input v-model="message" placeholder="preencha" />
      <p>Message is: {{ message }}</p>
    </div>

    <div>
      <h2>Contador: {{ porcentagemViradas }}</h2>

      <div class="buttons">
        <button @click="reiniciarJogo" class="reset">Resetar</button>
      </div>
    </div>

    <div class="cartas-grid">
      <div
        v-for="(carta, index) in cartas"
        :key="index"
        class="carta"
        :class="{ virada: carta.virada }"
        @click="virarCarta(carta)"
      >
        <div class="carta-frente" v-if="!carta.virada">❓</div>
        <div class="carta-verso" v-else>
          <div class="carta-valor">{{ carta.valor }}</div>
          <div class="carta-naipe">{{ carta.naipe }}</div>
          <div class="carta-pontos">{{ carta.pontos }} pts</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  display: flex;
  border-bottom: 1px;
}
.carta.virada .carta-verso {
  transform: rotateY(0deg);
}

.carta-frente,
.carta-verso {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px;
  box-sizing: border-box;
}

.carta-frente {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  font-size: 3em;
}

.carta-verso {
  background: white;
  color: #333;
  border: 2px solid #ddd;
  transform: rotateY(180deg);
  transition: transform 0.6s;
}

.carta-valor {
  font-size: 1.5em;
  font-weight: bold;
  margin-bottom: 10px;
  color: #2c3e50;
}

.carta-naipe {
  font-size: 1.2em;
  color: #e74c3c;
  margin-bottom: 10px;
}
</style>
