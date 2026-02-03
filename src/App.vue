<template>
  <div id="app">
    <header class="app-header">
      <h1>Jogo da Memória</h1>
      <nav class="nav">
        <router-link to="/" class="nav-link">Início</router-link>
        <router-link to="/game" class="nav-link">Jogar</router-link>
        <router-link to="/about" class="nav-link">Sobre</router-link>
      </nav>
    </header>

    <main class="app-main">
      <router-view />
    </main>
  </div>
</template>

<script setup lang="ts"></script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  color: #333;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  min-height: 100vh;
}

#app {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.app-header {
  text-align: center;
  padding: 2rem 0;
  margin-bottom: 2rem;
}

.app-header h1 {
  font-size: 2.5rem;
  color: #2196f3;
  margin-bottom: 1rem;
}

.nav {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 1rem;
}

.nav-link {
  color: #666;
  text-decoration: none;
  font-weight: 600;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  transition: all 0.3s;
}

.nav-link:hover {
  color: #2196f3;
  background-color: rgba(33, 150, 243, 0.1);
}

.nav-link.router-link-active {
  color: #2196f3;
  background-color: rgba(33, 150, 243, 0.1);
}

.app-main {
  flex: 1;
}

@media (max-width: 768px) {
  .app-header h1 {
    font-size: 2rem;
  }

  .nav {
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;
  }

  .nav-link {
    width: 200px;
  }
}
</style>
