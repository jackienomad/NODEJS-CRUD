import express from 'express'
export const router = express.Router()
import players from '../controllers/playersController'

router.get(
    '/players/findAll',
    players.findAll
)

router.get(
    '/players/findById/:id',
    players.findById
)

router.post(
    '/players/save',
    players.save
)

router.put(
    '/players/update/:id',
    players.update
)

router.delete(
    '/players/delete/:id',
    players.delete
)

module.exports = router
