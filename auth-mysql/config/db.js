import mysql from 'mysql2/promise'
import dotenv from 'dotenv'
dotenv.config()

const pool = mysql.createPool({
  host: process.env.MYSQL_HOST || '127.0.0.1',
  port: Number(process.env.MYSQL_PORT) || 3306,
  user: process.env.MYSQL_USER || 'root',
  password: process.env.MYSQL_PASSWORD || '',
  database: process.env.MYSQL_DATABASE || 'fit_hub',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
})

export async function initDB() {
  try {
    const conn = await pool.getConnection()
    await conn.ping()
    conn.release()
    console.log('MySQL connection OK')
    return true
  } catch (e) {
    console.error('MySQL connection error:', e.message || e)
    return false
  }
}

export default pool
