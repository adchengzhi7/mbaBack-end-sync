// cors/index.js
const cors = require('cors');

const corsOptions = {
  origin: 'https://mbastudent.nccu.edu.tw',       // ← 不能有多餘的 '/'
  credentials: true,                              // ← 如果你要帶 cookie/session
  methods: ['GET', 'POST', 'OPTIONS'],            // ← 明訂允許的 HTTP method
  allowedHeaders: ['Content-Type', 'Authorization'], // ← 明訂允許的 header
  optionsSuccessStatus: 200
};

module.exports = cors(corsOptions);
