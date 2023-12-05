import { createPool } from 'mysql2/promise';

console.log("passou no db")

export const connection = createPool({
  host: 'mysql-senac.alwaysdata.net',
  user: 'senac',
  password: '20031998GRb*',
  database: 'senac_emergencia_prod',
  waitForConnections: true
});