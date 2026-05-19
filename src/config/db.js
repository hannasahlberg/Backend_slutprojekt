import 'dotenv/config';
import mysql from 'mysql2/promise';

//Skapar en pool av databasanslutningar. 
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT) || 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
});

//Skapar en generell funktion för att köra SQL.
export const query = async (sql, params) => {
    try {
      const [rows] = await pool.execute(sql, params);
      return rows;
    } catch (err) {
      console.error('DB error:', err);
      throw new Error(`Databasfel: ${err.message}`);
    }
  };

  //En funktion för att testa att databasen fungerar.
  export const connect = async () => {
    try {
        const connection = await pool.getConnection();
        connection.release();
        console.log('Ansluten till MySQL');
    } catch (error) {
        console.error('Kunde inte ansluta till MySQL:', error);
        process.exit(1);
    }
};