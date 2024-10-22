const {createPool} = require('mysql');

require('dotenv').config();

const pool = createPool({ // 建立一個連線池
    connectionLimit: 10, // 限制池子連線人數
    host: process.env["MYSQL_HOST"], // 主機名稱
    user: process.env["MYSQL_USER"], // 用戶名稱 
    password: process.env["MYSQL_PASS"], // 資料庫密碼
    database: process.env["MYSQL_DATABASE"], // 資料庫名稱
    port:process.env["MYSQL_PORT"]
  });

  module.exports = pool;