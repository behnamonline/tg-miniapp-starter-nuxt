/**
 * $fetch wrapper that sends the Telegram Mini App `initData`
 * so the server can verify who the user is (see server/utils/tgAuth.ts).
 */
export function req<T = any>(url: string, options: Record<string, any> = {}): Promise<T> {
  return $fetch<T>(url, {
    ...options,
    headers: {
      ...options.headers,
      Authorization: `tma ${window.Telegram?.WebApp?.initData || ''}`,
    },
  })
}
