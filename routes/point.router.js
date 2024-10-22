
const {getPointByStuId,createPoint,getUnReviewPoint,getPointByPointId,updatePoint,approvePoint,deletePoint} =require("./point.controller")
const router = require("express").Router();
const {checkToken} =require("../auth/token_validation")

router.post("/",checkToken,createPoint);
router.get("/unreview",checkToken,getUnReviewPoint);
router.get("/edit/:pointsId",checkToken,getPointByPointId);
router.patch("/edit/",checkToken,updatePoint);
router.patch("/approve/",checkToken,approvePoint);
router.patch("/delete/",checkToken,deletePoint);
router.get("/:stuId",checkToken,getPointByStuId);

module.exports =router;