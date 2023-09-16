const db = require('../db')

module.exports.getAllCandidates = async () => {
    const [records] = await db.query("SELECT * FROM `Candidates`")
         return records;
}


module.exports.getCandidateById = async (id) => {
    const [record] = await db.query("SELECT * FROM Candidates WHERE id = ?" , [id])
         return record;   
}

module.exports.updateCandidate = async (id) => {
    const [record] = await db.query("UPDATE FROM Candidates WHERE id = ?" , [id])
         return record;   
}

module.exports.getCandidateByEmail = async (email) => {
    const [record] = await db.query("SELECT * FROM Candidates WHERE email = ?" , [email])
         return record;   
}

module.exports.deleteCandidate = async (email) => {
    const [record] = await db.query("DELETE FROM Candidates WHERE email = ?" , [email])
         return record;   
}


//module.exports.deleteCandidate = async (id) => {
   // const [{affectedRows}] = await db.query("DELETE FROM Candidates WHERE id = ?" , [id])
   //      return affectedRows;
//}

module.exports.addOrEditCandidate = async (obj,id = 0) => {
    const [[[{affectedRows}]]] = await db.query("CALL usp_candidate_add_or_edit(?,?,?,?,?,?,?,?,?,?)" ,
     [id, obj.full_name, obj.place_of_birth, obj.gender, obj.email, obj.phone_number, obj.date_of_birth, obj.id_type, obj.id_number, obj.password])
         return affectedRows;
}