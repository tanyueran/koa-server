import mysql from "mysql2";

export const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "koa-server",
  password: "123",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});
