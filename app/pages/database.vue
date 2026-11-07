<script setup lang="ts">
const newMessage = ref('')
const loading = ref(false)
const statusMessage = ref('')
const isError = ref(false)

const sendMessage = async () => {
  const message = newMessage.value.trim()
  if (!message || loading.value) return

  loading.value = true
  statusMessage.value = ''
  isError.value = false

  try {
    await $fetch('/api/messages', { method: 'POST', body: { message } })
    statusMessage.value = 'پیام شما با موفقیت در دیتابیس ثبت شد!'
    newMessage.value = ''
  } catch (error) {
    console.error(error)
    isError.value = true
    statusMessage.value = 'خطایی در ارسال پیام رخ داد.'
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div style="direction: rtl;">
    <h2 class="text-lg font-bold mb-2">ثبت در دیتابیس</h2>

    <p class="mb-4 text-sm opacity-70">
      اینجا هرچی ارسال بشه توی دیتابیس ثبت میشه
    </p>

    <form class="flex gap-2" @submit.prevent="sendMessage">
      <input
        v-model="newMessage"
        type="text"
        maxlength="500"
        placeholder="یک چیزی بنویس"
        class="min-w-0 flex-1 rounded-xl border border-gray-200 px-4 py-2.5 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500 transition-all"
      />
      <button
        type="submit"
        :disabled="loading"
        class="rounded-xl bg-black px-5 py-2.5 font-medium text-white hover:bg-gray-800 active:scale-95 transition-all disabled:opacity-50"
      >
        {{ loading ? '...' : 'بفرست' }}
      </button>
    </form>

    <p
      v-if="statusMessage"
      class="mt-3 text-sm"
      :class="isError ? 'text-red-400' : 'text-emerald-400'"
    >
      {{ statusMessage }}
    </p>
  </div>
</template>
