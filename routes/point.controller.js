const{ getPointByPointId, 
    getPointByStuId,
    createPoint,
    getUnReviewPoint,
    updatePoint,
    chgPointStatus
} =require("../routes/point.service")
const { json } = require("express");

module.exports={
    getPointByPointId:(req,res)=>{
        const pointsId = req.params.pointsId;
        getPointByPointId(pointsId,(err,results)=>{
            if(err){
                console.log(err);
                return;
            }
            if(!results){
                return res.json({
                    success:0,
                    message:"Record not Found"
                });
            }
            return res.json({
                success:1,
                data:results
            })
        })

    },
    createPoint:(req,res) =>{
        const body = req.body;
       
        createPoint(body,(err,result)=>{
            if(err){
                console.log(err);
                return res.status(500).json({
                    success:0,
                    message:"Database connection error"
                })
            }
            return res.status(200).json({
                success:1,
                data:result
            })
        })
    },
    getUnReviewPoint:(req,res)=>{
        getUnReviewPoint((err,results)=>{
            if(err){
                console.log(err);
                return;
            }
            return res.json({
                success:1,
                data:results
            })
        })

        
    },
    getPointByStuId:(req,res)=>{
        const stuId = req.params.stuId;
        getPointByStuId(stuId,(err,results)=>{
            if(err){
                console.log(err);
                return;
            }
            if(!results){
                return res.json({
                    success:0,
                    message:"Record not Found"
                });
            }
            return res.json({
                success:1,
                data:results
            })
        })

    },
    updatePoint:(req,res) =>{
        const body = req.body;
        updatePoint(body,(err,result)=>{
            if(err){
                console.log(err);
                return;
            }
            if(!result){
                return res.json({
                success:0,
                message:"Failed to update PointDATA"
                })
            }
            return res.json({
                success:1,
                message:"PointDATA updated successfully"
            })
        })
    },
    approvePoint:(req,res)=>{
        const body = req.body;
        body.status=2;
        chgPointStatus(body,(err,result)=>{
            if(err){
                console.log(err);
                return;
            }
            if(!result){
                return res.json({
                success:0,
                message:"Failed to update PointSTS"

                })
            }
            return res.json({
                success:1,
                message:"PointSTS updated successfully"
            })
        })
    },
    deletePoint:(req,res)=>{
        const body = req.body;
        body.status=3;
        chgPointStatus(body,(err,result)=>{
            if(err){
                console.log(err);
                return;
            }
            if(!result){
                return res.json({
                success:0,
                message:"Failed to delete PointSTS"

                })
            }
            return res.json({
                success:1,
                message:"PointSTS delete successfully"
            })
        })
    }
   
    
}