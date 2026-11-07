<script setup lang="ts">
const name = ref('')
const greetingMessage = ref('')
const loading = ref(false)

const sendName = async () => {
  if (!name.value.trim() || loading.value) return

  loading.value = true
  try {
    const data = await $fetch<{ message: string }>('/api/simpleAPI', {
      method: 'POST',
      body: { name: name.value },
    })
    greetingMessage.value = data.message
  } catch (error) {
    console.error(error)
    greetingMessage.value = 'خطایی رخ داد.'
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div style="direction: rtl;">
    <h2 class="text-lg font-bold mb-4">خوش‌آمدگویی</h2>

    <div class="flex gap-2">
      <input
        v-model="name"
        type="text"
        maxlength="100"
        placeholder="اسم خودت رو وارد کن..."
        class="min-w-0 flex-1 rounded-xl border border-gray-200 px-4 py-2.5 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500 transition-all"
        @keyup.enter="sendName"
      />
      <button
        :disabled="loading"
        class="rounded-xl bg-black px-5 py-2.5 font-medium text-white hover:bg-gray-800 active:scale-95 transition-all disabled:opacity-50"
        @click="sendName"
      >
        بفرست
      </button>
    </div>

    <p v-if="greetingMessage" class="mt-6 text-base font-medium">
      {{ greetingMessage }}
    </p>
  </div>
</template>
