// cors/index.js
console.log('🚀 [CORS] middleware loaded');
const cors = require('cors');

const allowedOrigins = [
  'https://mbastudent.nccu.edu.tw',
  'https://www.mbastudent.nccu.edu.tw'
];

const corsOptions = {
  origin(origin, callback) {
    // 如果是 Postman/CURL（没有 origin）也放行
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error(`Not allowed by CORS: ${origin}`));
    }
  },
  credentials: true,                              // 允许 cookie
  methods: ['GET', 'POST', 'OPTIONS'],            // 明确声明允许的方法
  allowedHeaders: ['Content-Type', 'Authorization'],
  optionsSuccessStatus: 200
};

module.exports = cors(corsOptions);
