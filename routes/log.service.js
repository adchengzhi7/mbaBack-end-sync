const pool = require("../config/db");

module.exports = {
    createLog: (data, callBack) => {
        const {
            logType, userId, studentId, pointsId, ipAddress, deviceInfo,
            previousData, updatedData, addedData, exportParams
        } = data;

        // 動態 SQL 語句及值
        const sql = `
            INSERT INTO logs (
                log_type,
                user_id,
                student_id,
                points_id,
                action_time,
                ip_address,
                device_info,
                previous_data,
                updated_data,
                added_data,
                export_params
            ) VALUES (?, ?, ?, ?, CURRENT_TIMESTAMP, ?, ?, ?, ?, ?, ?)
        `;

        const values = [
            logType,                             // ENUM('login', 'add_points', 'update_points', 'edit_student', 'add_member', 'edit_member', 'export_data')
            userId || null,                      // 執行操作的使用者 ID
            studentId || null,                   // 關聯的學生 ID
            pointsId || null,                    // 關聯的點數 ID
            ipAddress || null,                   // IP 地址
            deviceInfo || null,                  // 設備資訊
            previousData ? JSON.stringify(previousData) : null, // 修改前的資料，需為 JSON
            updatedData ? JSON.stringify(updatedData) : null,   // 修改後的資料，需為 JSON
            addedData ? JSON.stringify(addedData) : null,       // 新增的資料，需為 JSON
            exportParams ? JSON.stringify(exportParams) : null  // 匯出的參數，需為 JSON
        ];

        pool.query(sql, values, (error, results) => {
            if (error) {
                return callBack(error);
            }
            return callBack(null, results);
        });
    },
};