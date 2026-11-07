<template>
  <div class="telegram-mini-app">
    <!-- بک‌گراند انیمیشنی -->
    <div class="animated-bg">
      <div class="blob blob-1"></div>
      <div class="blob blob-2"></div>
    </div>

    <!-- هدر اپلیکیشن -->
    <header class="app-header">
      <h1 class="app-title">My Mini App</h1>
    </header>

    <!-- نویگیشن با دکمه‌های شیشه‌ای و نئونی -->
    <nav class="app-nav">
      <NuxtLink to="/" class="neon-btn purple-btn">
        <span>Home</span>
      </NuxtLink>

      <NuxtLink to="/database" class="neon-btn green-btn">
        <span>Database</span>
      </NuxtLink>

      <NuxtLink to="/simpleAPI" class="neon-btn green-btn">
        <span>API</span>
      </NuxtLink>

      <NuxtLink to="/user" class="neon-btn green-btn">
        <span>User</span>
      </NuxtLink>
    </nav>

    <!-- محتوای صفحات -->
    <main class="app-content">
      <NuxtPage />
    </main>

    <!-- فوتر -->
    <footer class="app-footer">
      <p>Cyberpunk Mini App</p>
    </footer>
  </div>
</template>

<style scoped>
/* تنظیمات پایه */
.telegram-mini-app {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  background-color: #0b0f19;
  color: #ffffff;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 20px;
  box-sizing: border-box;
  max-width: 480px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
}

/* --- بک‌گراند انیمیشنی (گرادینت‌های متحرک) --- */
.animated-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 0;
  pointer-events: none;
  filter: blur(60px);
  opacity: 0.5;
}

.blob {
  position: absolute;
  width: 250px;
  height: 250px;
  border-radius: 50%;
  animation: moveBlob 10s infinite alternate ease-in-out;
}

.blob-1 {
  background: #9333ea;
  /* بنفش */
  top: -50px;
  left: -50px;
}

.blob-2 {
  background: #10b981;
  /* سبز */
  bottom: -50px;
  right: -50px;
  animation-delay: -5s;
}

@keyframes moveBlob {
  0% {
    transform: translate(0, 0) scale(1);
  }

  100% {
    transform: translate(100px, 150px) scale(1.2);
  }
}

/* لایه‌های محتوا روی بک‌گراند قرار بگیرند */
.app-header,
.app-nav,
.app-content,
.app-footer {
  position: relative;
  z-index: 1;
}

/* هدر */
.app-header {
  text-align: center;
  margin-bottom: 24px;
}

.app-title {
  font-size: 28px;
  font-weight: 900;
  background: linear-gradient(135deg, #10b981 0%, #9333ea 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0;
  letter-spacing: 2px;
  text-shadow: 0 0 20px rgba(16, 185, 129, 0.3);
}

/* نویگیشن و دکمه‌های شیشه‌ای نئونی */
.app-nav {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-bottom: 24px;
}

.neon-btn {
  flex: 1;
  text-align: center;
  padding: 12px 8px;
  border-radius: 14px;
  text-decoration: none;
  font-weight: 700;
  font-size: 14px;
  backdrop-filter: blur(12px);
  background: rgba(15, 23, 42, 0.6);
  /* مشکی مدرن و شیشه‌ای */
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

/* دکمه نئون بنفش */
.purple-btn {
  color: #d8b4fe;
  border-color: rgba(147, 51, 234, 0.4);
  box-shadow: 0 0 15px rgba(147, 51, 234, 0.15);
}

.purple-btn:hover,
.purple-btn.router-link-exact-active {
  background: rgba(147, 51, 234, 0.25);
  color: #ffffff;
  border-color: #9333ea;
  box-shadow: 0 0 25px rgba(147, 51, 234, 0.6), inset 0 0 10px rgba(147, 51, 234, 0.4);
}

/* دکمه نئون سبز */
.green-btn {
  color: #6ee7b7;
  border-color: rgba(16, 185, 129, 0.4);
  box-shadow: 0 0 15px rgba(16, 185, 129, 0.15);
}

.green-btn:hover,
.green-btn.router-link-exact-active {
  background: rgba(16, 185, 129, 0.25);
  color: #ffffff;
  border-color: #10b981;
  box-shadow: 0 0 25px rgba(16, 185, 129, 0.6), inset 0 0 10px rgba(16, 185, 129, 0.4);
}

/* بخش محتوا */
.app-content {
  flex: 1;
  background: rgba(15, 23, 42, 0.7);
  backdrop-filter: blur(16px);
  border-radius: 20px;
  padding: 20px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.3);
}

/* فوتر */
.app-footer {
  text-align: center;
  margin-top: 20px;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.3);
  letter-spacing: 1px;
}
</style>