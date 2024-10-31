const {
    createLog,
} = require("./log.controller"); // 引入日誌控制器
const router = require("express").Router();
const { checkToken } = require("../auth/token_validation");

// 路由設定
router.post("/", checkToken, createLog); // 新增日誌
// router.get("/", checkToken, getLogs); // 取得所有日誌
// router.get("/:logId", checkToken, getLogById); // 取得特定日誌
// router.delete("/:logId", checkToken, deleteLog); // 刪除特定日誌
// router.post("/export", checkToken, exportLogData); // 匯出日誌資料

module.exports = router;