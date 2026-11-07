import { createHmac, timingSafeEqual } from 'node:crypto'
import type { H3Event } from 'h3'

export interface TelegramUser {
  id: number
  first_name: string
  last_name?: string
  username?: string
  language_code?: string
  is_premium?: boolean
  photo_url?: string
  [key: string]: unknown
}

/**
 * Validates Telegram Mini App `initData` sent as
 * `Authorization: tma <initData>` and returns the Telegram user.
 * Throws 401/403 if it is missing or invalid.
 * https://core.telegram.org/bots/webapps#validating-data-received-via-the-mini-app
 */
export function tgAuth(event: H3Event, maxAge = 86400): TelegramUser {
  
  
  if (import.meta.dev) {
    return { id: 1, first_name: 'Dev', username: 'dev_user' }
  }
  
  const botToken = useRuntimeConfig(event).telegramBotToken
  if (!botToken) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Server is not configured: NUXT_TELEGRAM_BOT_TOKEN is missing',
    })
  }

  const forbidden = () => createError({ statusCode: 403, statusMessage: 'Forbidden' })

  const auth = getHeader(event, 'authorization') || ''
  const initData = auth.startsWith('tma ') ? auth.slice(4) : ''
  if (!initData) throw forbidden()

  const params = new URLSearchParams(initData)
  const checkHash = params.get('hash')
  if (!checkHash) throw forbidden()
  params.delete('hash')

  const dataCheckString = [...params.entries()]
    .sort(([a], [b]) => (a < b ? -1 : a > b ? 1 : 0))
    .map(([k, v]) => `${k}=${v}`)
    .join('\n')

  const secretKey = createHmac('sha256', 'WebAppData').update(botToken).digest()
  const hash = createHmac('sha256', secretKey).update(dataCheckString).digest()
  const given = Buffer.from(checkHash, 'hex')
  if (given.length !== hash.length || !timingSafeEqual(hash, given)) throw forbidden()

  const authDate = Number(params.get('auth_date'))
  if (!authDate || Date.now() / 1000 - authDate > maxAge) throw forbidden()

  try {
    return JSON.parse(params.get('user') || '') as TelegramUser
  } catch {
    throw forbidden()
  }
}
