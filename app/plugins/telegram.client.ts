// Tell Telegram the app is ready and use the full height.
export default defineNuxtPlugin(() => {
  const webApp = window.Telegram?.WebApp
  webApp?.ready()
  webApp?.expand()
})
