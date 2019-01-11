import PlayersModel from '../models/playersModel'

export class PlayersController {
    static async findAll(req, res, next) {
        try {
            const data = await PlayersModel.findAll()
            return res.status(200).send({
                success: true,
                data
            })
        } catch (error) {
            next()
        }
    }

    static async findById(req, res, next) {
        try {
            const data = await PlayersModel.findById(req.params.id)
            return res.status(200).send({
                success: true,
                data
            })
        } catch (error) {
            
        }
    }

    static save(req, res, next) {
        try {
            PlayersModel.save(req.body)
            return res.status(200).send({
                success: true,
                "message": "Data successfully saved!" 
            })
        } catch (error) {
            next()
        }
    }

    static update(req, res, next) {
        try {
            PlayersModel.update(req)
            return res.status(200).send({
                success: true,
                "message": "Data successfully updated!"
            })
        } catch (error) {
            next()
        }
    }

    static delete(req, res, next) {
        try {
            PlayersModel.delete(req.params.id)
            return res.status(200).send({
                success: true,
                "message": "Data successfully deleted!"
            })
        } catch (error) {
            next()
        }
    }
}

export default PlayersController