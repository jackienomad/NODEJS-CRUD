import express from 'express'
import bodyParser from 'body-parser'
import loadRoutes from '../lib/utils/loadRoutes'

const PORT = process.env.PORT || 5000
const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

loadRoutes(app)

const router = express.Router()

router.use(function(req, res, next){
    console.log('Routes initialized') // eslint-disable-line
    next()
})

app.listen(PORT)
console.log(`Server is listening to port ${PORT}`)
