import mysql, { Pool } from 'mysql2/promise'
import { parse } from '../shared/environment'

class MySQLDatabase {
  pool: Pool

  constructor() {
    const { database } = parse()

    this.pool = mysql.createPool({
      host: database.host,
      port: database.port,
      user: database.user,
      password: database.password,
      database: database.name,
    })
  }

  async query(query: string, args?: object) {
    const [rows, _] = await this.pool.query(query, args)
    return rows
  }

  async ping() {
    try {
      await this.query('SELECT 1')
      return true
    } catch (error) {
      return false
    }
  }

  async close() {
    await this.pool.end()
  }
}

export default MySQLDatabase
