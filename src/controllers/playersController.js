import dbConfig from '../config/connection'
import mysql from 'mysql'
import query from '../config/mysql/players'

const db = mysql.createConnection(dbConfig)

function findAllPlayers() {
    
    try { 
        return new Promise((resolve, rejects) => {
            db.connect((err) => {
                let que = 'SELECT * FROM players'
                db.query(que, (err, results, fields) => {
                    if (err) {
                        return rejects(err)
                    }
                    resolve(results)
                })
            })
        })
    } catch (error) {
        throw error
    }
}

function savePlayer(req, res, next) {
    try {
        const firstname = req.firstname
        const lastname = req.lastname
        const username = req.username
        const email = req.email

        let que = `INSERT INTO players(firstname, lastname, username, email)
                VALUES(?,?,?,?)`
        let queVal = [firstname, lastname, username, email]        
        
        db.connect((err) => {
            db.query(que, queVal)
            if (err) {
                throw err
            }
        })
        
    } catch (error) {
        
    }
}

// function updatePlayer(req, res, next) {
//     try {
//         let que = 'UPDATE players SET '

//         db.connect((err) => {

//         })
//     } catch (error) {
        
//     }
// }

export default { findAllPlayers, savePlayer }