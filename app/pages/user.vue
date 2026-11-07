<script setup lang="ts">
import { req } from '~/tgRequest'

const user = ref<Record<string, any> | null>(null)
const error = ref(false)
const loading = ref(true)

onMounted(async () => {
  try {
    user.value = await req('/api/user')
  } catch {
    error.value = true
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <div style="direction: rtl;">
    <p v-if="loading" class="text-sm opacity-70">در حال بارگذاری...</p>
    <pre v-else-if="user" dir="ltr" class="overflow-x-auto text-sm">{{ user }}</pre>
    <p v-else-if="error" class="text-red-400">
      خطا در ورود. این صفحه فقط داخل تلگرام (Mini App) کار می‌کند.
    </p>
  </div>
</template>
