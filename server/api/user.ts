export default defineEventHandler((event) => {
  const user = tgAuth(event)
  return { status: 'ok', user }
})
