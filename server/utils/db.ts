let schemaReady: Promise<unknown> | null = null

/**
 * Returns the database connection:
 *  - local SQLite file while developing (`nuxt dev`)
 *  - Cloudflare D1 in production
 * The schema is created automatically on first use.
 */
export const useDB = async () => {
  const db = useDatabase(import.meta.dev ? 'mainDB_local' : 'mainDB_cf')

  schemaReady ??= db.sql`
    create table if not exists messages (
      id integer primary key autoincrement,
      message text not null,
      created_at text not null default (datetime('now'))
    )
  `.catch((err) => {
    schemaReady = null // retry next time
    throw err
  })
  await schemaReady

  return db
}
