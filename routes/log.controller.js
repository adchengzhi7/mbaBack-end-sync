const { createLog: createLogService } = require("../routes/log.service"); // 確保導入的服務函數名稱不重複

const createLog = (req, res) => {
    const { logType, userId, deviceInfo } = req.body;
    const ipAddress = req.ip || req.headers['x-forwarded-for'] || '未知 IP'; // 動態獲取 IP
  
    const logData = {
      logType,
      userId,
      ipAddress,
      deviceInfo,
    };
  
    // 呼叫服務層的 createLogService，避免重複名稱混淆
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
    createLog, // 導出控制器中的 createLog
};