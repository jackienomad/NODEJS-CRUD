import express from 'express'
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

router.put('/updatePlayer', async (req, res) => {
    const result = await players.updatePlayer(req.body)
    res.json({ 
        "status": 200,
        "success": true,
        "affectedRows": result.affectedRows
    })
})

module.exports = router
