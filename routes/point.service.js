const pool= require("../config/db")

module.exports={
    createPoint:(data,callBack)=>{
        pool.query(
                `INSERT INTO points (points_type,points_title,points_regYear,points_regSemester,points_credit,points_status,points_stuid,points_englishCredit,points_regTime,points_scholarshipHours,points_englishCredit_date)
                VALUES (?,?,?,?,?,?,?,?,?,?,?)`,
            [
                data.type,
                data.sectionTitle,
                data.yearSelected,
                data.semesterSelected,
                data.points,
                data.status,
                data.stuId,
                data.englishCredit,
                data.insertDate,
                data.scholarshipHours,
                data.testDate,
                
            ],
            (error,results) =>{
                if(error){
                   return callBack(error);
                }
                return callBack(null,results)
            }
        )
    },
    
    getPointByStuId:(id,callBack)=>{
        pool.query(
            'SELECT pt.pointsType_descp AS section,p.points_title AS section_title, concat(p.points_regYear, p.points_regSemester) AS semester,p.points_credit AS point , p.points_status AS status,p.points_englishCredit AS englishCredit, p.points_scholarshipHours As scholarshipHours,p.no as pointId FROM points AS p INNER JOIN points_type AS pt ON p.points_type=pt.pointsType_id WHERE p.points_stuid=? AND p.points_status !=3',
            [id],
            (error,results)=>{
                if(error){
                    return callBack(error);
                }
                return callBack(null,results);
            }
        )

    },

    getUnReviewPoint:(callBack)=>{
        pool.query(
            "SELECT pt.pointsType_descp AS section, p.points_type AS type, p.points_title AS sectionTitle,concat(p.points_regYear, p.points_regSemester) AS semester,p.points_regTime AS date ,p.points_englishCredit AS englishCredit ,p.points_stuid AS stuId,u.usersDetails_cName AS name FROM points AS p  INNER JOIN users_details AS u ON p.points_stuid = u.usersDetails_stuId INNER JOIN points_type AS pt ON p.points_type = pt.pointsType_id  WHERE points_status = 1 ORDER BY p.points_regTime DESC",
            [],
            (error,results)=>{
                if(error){
                    return callBack(error);
                }
                return callBack(null,results);
            }
        )

    },
    getPointByPointId:(id,callBack)=>{
        pool.query(
            'SELECT p.no AS pointId, p.points_stuid AS stuId, p.points_stuid AS stuId, pt.pointsType_descp AS section,p.points_title AS sectionTitle,p.points_regYear AS yearSelected , p.points_regSemester AS semesterSelected,p.points_credit AS point , p.points_status AS status,p.points_englishCredit AS englishCredit, pt.pointsType_id AS type,pt.pointsType_icon AS icon FROM points AS p INNER JOIN points_type AS pt ON p.points_type=pt.pointsType_id WHERE p.no =?',
            [id],
            (error,results)=>{
                if(error){
                    return callBack(error);
                }
                return callBack(null,results);
            }
        )

    },
    updatePoint: (data, callBack) => {
        pool.query(
            `UPDATE points 
             SET points_title=?, points_regYear=?, points_regSemester=?, points_credit=?, points_englishCredit=?, points_regTime=?, points_scholarshipHours=?, points_englishCredit_date=? 
             WHERE no=?`,
            [
                data.sectionTitle,
                data.yearSelected,
                data.semesterSelected,
                data.points,
                data.englishCredit,
                data.insertDate,        // Ensure consistency with createPoint
                data.scholarshipHours,  // Ensure consistency with createPoint
                data.testDate,          // Ensure consistency with createPoint
                data.pointsId,          // Identifier for updating the correct record
            ],
            (error, results) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    chgPointStatus:(data,callBack) =>{
        pool.query(
            'UPDATE points SET points.points_status=? WHERE no=?',
            [
                data.status,
                data.pointId,
            ],
            (error,results)=>{
                if(error){
                    return callBack(error)
                }
                return callBack(null,results)
            }
        )

    },


}