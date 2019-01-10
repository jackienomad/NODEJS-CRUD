import express from 'express'
import connection from '../../src/config/connection'
export const router = express.Router()
import players from '../controllers/playersController'

router.get('/', (req, res) => {
    res.json({ message: 'homepage routes' })
})

router.get('/findAllPlayers', async (req, res) => {
    const result = await players.findAllPlayers()
    res.json(result)
})

router.post('/savePlayer', (req, res) => {
    players.savePlayer(req.body)
    res.json({
        "status" : 200,
        "success" : true
    })
})

module.exports = router
