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

function updatePlayer(req, res, next) {
    try {
        const id = req.id
        const firstname = req.firstname
        const lastname = req.lastname
        const username = req.username
        const email = req.email

        let que = `UPDATE players SET firstname = ?, lastname = ?, username = ?, email = ? WHERE id = ?`
        let queVal = [firstname, lastname, username, email, id]

        return new Promise((resolve, rejects) => {
            db.connect((err) => {
                db.query(que, queVal, (err, results, field) => {
                    if (err) {
                        throw err
                    }
                    resolve(results)
                })
            })
        })

    } catch (error) {
        next()
    }
}

export default { findAllPlayers, savePlayer, updatePlayer }