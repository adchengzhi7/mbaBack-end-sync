const{ createLog,} =require("../routes/log.service")
const { json } = require("express");

module.exports = {
    createLog: (req, res) => {
        const body = req.body;
        
        // 呼叫 createLog 函數並傳入資料
        createLog(body, (err, result) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: "Database connection error"
                });
            }
            
            return res.status(200).json({
                success: 1,
                data: result
            });
        });
    },
};