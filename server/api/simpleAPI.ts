export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const name = typeof body?.name === 'string' ? body.name.trim().slice(0, 100) : ''

  return {
    message: `سلام ${name || 'دوست عزیز'}، خوش اومدی به Nuxt!`,
  }
})
