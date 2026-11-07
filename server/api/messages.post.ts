const MAX_LENGTH = 500

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const message = typeof body?.message === 'string' ? body.message.trim() : ''

  if (!message) {
    throw createError({ statusCode: 400, statusMessage: 'متن پیام الزامی است.' })
  }
  if (message.length > MAX_LENGTH) {
    throw createError({ statusCode: 400, statusMessage: `حداکثر طول پیام ${MAX_LENGTH} کاراکتر است.` })
  }

  const db = await useDB()
  // Tagged template => parameterized query (safe from SQL injection)
  await db.sql`insert into messages (message) values (${message})`

  return { success: true, message: 'پیام با موفقیت ذخیره شد.' }
})
