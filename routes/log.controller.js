const { createLog,getAllLogs } = require("../routes/log.service"); // 確保導入的服務函數名稱不重複

const createLogController = (req, res) => {
    // 解析所有的日誌參數，並設定預設值為 null
    const {
        logType,
        userId,
        studentId = null,
        pointsId = null,
        ipAddress = null,
        deviceInfo = null,
        previousData = null,
        updatedData = null,
        addedData = null,
        exportParams = null
    } = req.body;

    // 建立完整的 logData 物件，包含所有欄位
    const logData = {
        logType,
        userId,
        studentId,
        pointsId,
        ipAddress,
        deviceInfo,
        previousData: previousData ? JSON.stringify(previousData) : null,  // JSON 字串化
        updatedData: updatedData ? JSON.stringify(updatedData) : null,
        addedData: addedData ? JSON.stringify(addedData) : null,
        exportParams: exportParams ? JSON.stringify(exportParams) : null,
    };

    // 呼叫服務層進行資料庫操作
    createLog(logData, (err, result) => {
        if (err) {
            console.error("Failed to record log:", err);
            return res.status(500).json({
                success: 0,
                message: "無法記錄日誌"
            });
        }
        return res.status(200).json({
            success: 1,
            data: result
        });
    });
};


// 獲取所有日誌的控制器
const getAllLogsController = (req, res) => {
    getAllLogs((err, results) => {
        if (err) {
            console.error("Failed to retrieve logs:", err);
            return res.status(500).json({
                success: 0,
                message: "無法查詢日誌"
            });
        }
        return res.status(200).json({
            success: 1,
            data: results
        });
    });
};

module.exports = {
    createLog: createLogController,
    getAllLogs: getAllLogsController
};