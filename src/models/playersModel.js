import mysql from 'mysql'
import dbConfig from '../config/connection'

const db = mysql.createConnection(dbConfig)

export class PlayersModel {

    static findAll() {
        return new Promise((resolve, reject) => {
            db.connect((err) => {
                if (err) {
                    reject(err)
                }
                let que = 'SELECT * FROM players'
                db.query(que, (error, results, fields) => {
                    if (error) {
                        throw error
                    }
                    resolve(results)
                })
            })
        })
    }

    static findById(id) {
        return new Promise((resolve, reject) => {
            db.connect((err) => {
                if (err) {
                    reject(err)
                }
                let que = `SELECT * FROM players WHERE id = ${id}`
                db.query(que, (error, results) => {
                    if (error) {
                        throw error
                    }
                    resolve(results)
                })
            })
        })
    }

    static save(req) {
        db.connect((err) => {
            if (err) {
                throw err
            }
            let que = `INSERT INTO players(firstname, lastname, username, email)
                VALUES(?,?,?,?)`
            let val = [req.firstname, req.lastname, req.username, req.email]   
            db.query(que, val)
        })

    }

    static update(req) {
        db.connect((err) => {
            if (err) {
                throw err
            }
            let que = `UPDATE players SET firstname = ?, lastname = ?, username = ?, email = ? WHERE id = ?`
            let val = [req.body.firstname, req.body.lastname, req.body.username, req.body.email, req.params.id]
            db.query(que, val)
        })
    }

    static delete(id) {
        db.connect((err) => {
            if (err) {
                throw err
            }
            let que = `DELETE FROM players WHERE id = ${id}`
            db.query(que)
        })
    }
}

export default PlayersModel