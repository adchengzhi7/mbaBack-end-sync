let express = require('express');
let router = express.Router();
// let mysql = require('mysql');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* mysql連線測試 */

module.exports = router;
