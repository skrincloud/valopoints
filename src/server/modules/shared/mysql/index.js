import mysql2 from "mysql2/promise"

class MySQLDatabase {
  constructor(){
    const config = {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      port: process.env.DB_PORT,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME
    }
    this.pool = mysql2.createPool(config)
  }

  async query(query, args){
    const [rows, _] = await this.pool.query(query, args);
    return rows;  
  }

  async ping() {
    try {
     await this.query('SELECT 1');
    } catch (err) {
      throw err;
    }
  }
  
  async close() {
    await this.pool.end();
  }
}


export default MySQLDatabase