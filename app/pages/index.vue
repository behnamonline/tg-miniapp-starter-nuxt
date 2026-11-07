<template>
  <div class="welcome-container">
    <!-- هدر خوش‌آمدگویی -->
    <div class="welcome-header">
      <span class="badge">🚀 خوش آمدید</span>
      <h2>سلام مینی اپ</h2>
      <p>از منوی بالا بین صفحات جابجا شو یا دکمه زیر رو تست کن.</p>
    </div>

    <!-- کارت‌های آماری نمونه (بدون شلوغی) -->
    <div class="stats-grid">
      <div class="stat-card">
        <span class="stat-icon">⚡</span>
        <div class="stat-info">
          <h4>نمونه</h4>
          <p> متن تست </p>
        </div>
      </div>

      <div class="stat-card">
        <span class="stat-icon">💎</span>
        <div class="stat-info">
          <h4>نمونه ۲</h4>
          <p>متن تست ۲</p>
        </div>
      </div>
    </div>

    <!-- دکمه اکشن نئونی نمونه -->
    <div class="action-box">
      <button class="neon-main-btn" @click="showAlert">
        <span>نمونه </span>
      </button>
    </div>
  </div>
</template>

<script setup>
// یک متد نمونه برای دکمه (اختیاری)
const showAlert = () => {
  // اگر توی تلگرام باشید می‌تونید از Telegram WebApp API هم اینجا استفاده کنید
  alert('به مینی‌اپ خوش آمدید! 🎉');
};
</script>

<style scoped>
.welcome-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  animation: fadeIn 0.4s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* هدر صفحه */
.welcome-header {
  text-align: center;
}

.badge {
  display: inline-block;
  background: rgba(147, 51, 234, 0.15);
  color: #d8b4fe;
  border: 1px solid rgba(147, 51, 234, 0.3);
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 10px;
}

.welcome-header h2 {
  font-size: 22px;
  font-weight: 800;
  color: #ffffff;
  margin: 0 0 8px 0;
}

.welcome-header p {
  font-size: 13px;
  color: rgba(255, 255, 255, 0.5);
  margin: 0;
  line-height: 1.5;
}

/* کارت‌های آماری / ویژگی‌ها */
.stats-grid {
  display: flex;
  flex-direction: column;
  gap: 12px;
  direction: rtl;
}

.stat-card {
  display: flex;
  align-items: center;
  gap: 14px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.06);
  padding: 12px 16px;
  border-radius: 14px;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

.stat-card:hover {
  background: rgba(255, 255, 255, 0.06);
  border-color: rgba(16, 185, 129, 0.3);
}

.stat-icon {
  font-size: 20px;
  background: rgba(16, 185, 129, 0.1);
  padding: 8px;
  border-radius: 10px;
}

.stat-info h4 {
  font-size: 14px;
  font-weight: 700;
  margin: 0 0 2px 0;
  color: #ffffff;
}

.stat-info p {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.4);
  margin: 0;
}

/* دکمه اصلی نئونی */
.action-box {
  margin-top: 10px;
}

.neon-main-btn {
  width: 100%;
  padding: 14px;
  border-radius: 14px;
  border: 1px solid rgba(16, 185, 129, 0.4);
  background: linear-gradient(135deg, rgba(16, 185, 129, 0.2) 0%, rgba(147, 51, 234, 0.2) 100%);
  color: #ffffff;
  font-weight: 700;
  font-size: 15px;
  cursor: pointer;
  backdrop-filter: blur(10px);
  box-shadow: 0 0 20px rgba(16, 185, 129, 0.2);
  transition: all 0.3s ease;
}

.neon-main-btn:hover {
  background: linear-gradient(135deg, rgba(16, 185, 129, 0.35) 0%, rgba(147, 51, 234, 0.35) 100%);
  border-color: #10b981;
  box-shadow: 0 0 25px rgba(16, 185, 129, 0.5);
  transform: translateY(-2px);
}
</style>