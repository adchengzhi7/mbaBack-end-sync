const{ createLog,} =require("../routes/log.service")
const { json } = require("express");

const createLog = (req, res) => {
    const { logType, userId, deviceInfo } = req.body;
    const ipAddress = req.ip || req.headers['x-forwarded-for'] || '未知 IP'; // 動態獲取 IP
  
    const logData = {
      logType,
      userId,
      ipAddress,
      deviceInfo,
    };
  
    createLogService(logData, (err, result) => {
      if (err) {
        return res.status(500).json({
          success: 0,
          message: "無法記錄日誌",
        });
      }
      res.status(200).json({
        success: 1,
        data: result,
      });
    });
  };

module.exports = {
    createLog
};