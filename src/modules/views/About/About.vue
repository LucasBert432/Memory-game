<template>
  <div :class="$style.about">
    <div :class="$style.aboutContainer">
      <h2>Sobre o Jogo da Memória</h2>

      <div :class="$style.content">
        <div :class="$style.section">
          <h3>🎮 Como Jogar</h3>
          <p>
            O objetivo do jogo é encontrar todos os pares de cartas em menos
            rodadas possíveis. Em cada rodada, clique em duas cartas para
            revelá-las. Se forem iguais, elas permanecerão viradas. Caso
            contrário, elas serão escondidas novamente.
          </p>
        </div>

        <div :class="$style.section">
          <h3>🏆 Sistema de Ranking</h3>
          <p>
            Seu desempenho é salvo no ranking local. Quanto menos rodadas você
            usar para completar o jogo, melhor será sua posição no ranking!
            Tente bater seu próprio recorde ou superar outros jogadores.
          </p>
        </div>

        <div :class="$style.section">
          <h3>🚀 Tecnologias Utilizadas</h3>
          <div :class="$style.techStack">
            <div :class="$style.tech">
              <div :class="$style.techIcon">⚡</div>
              <div :class="$style.techInfo">
                <h4>Vue 3</h4>
                <p>Framework JavaScript progressivo</p>
              </div>
            </div>
            <div :class="$style.tech">
              <div :class="$style.techIcon">📘</div>
              <div :class="$style.techInfo">
                <h4>TypeScript</h4>
                <p>Tipagem estática para JavaScript</p>
              </div>
            </div>
            <div :class="$style.tech">
              <div :class="$style.techIcon">🎨</div>
              <div :class="$style.techInfo">
                <h4>CSS Modules</h4>
                <p>Estilos com escopo por componente</p>
              </div>
            </div>
          </div>
        </div>

        <div :class="$style.section">
          <h3>📱 Funcionalidades</h3>
          <ul :class="$style.featuresList">
            <li>✅ Interface responsiva para todos os dispositivos</li>
            <li>✅ Sistema de ranking com localStorage</li>
            <li>✅ Animações e feedback visual</li>
            <li>✅ Contador de rodadas em tempo real</li>
            <li>✅ Reinício e novo jogo</li>
            <li>✅ Design moderno e intuitivo</li>
          </ul>
        </div>

        <div :class="$style.cta">
          <router-link to="/game">
            <Button size="large" variant="primary" icon="🎮">
              Começar a Jogar
            </Button>
          </router-link>
          <router-link to="/">
            <Button size="large" variant="secondary" icon="🏠">
              Voltar ao Início
            </Button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from "@/components/Button";
</script>

<style module src="./About.module.css"></style>
