import Model from '../models/pessoa.model'

class PessoaController {

    async create(req, res) {
        try {
            const pessoa = await Model.create(req.body)
            const resposta = {
                message: 'Pessoa cadastrada com sucesso!',
                pessoa
            }
            return res.status(201).send(resposta)
        } catch (error) {
            return res.status(404).send({
                message: 'Erro não especificado!',
                error: error
            })
        }
    }

    async list(req, res) {
        try {
            const pessoas = await Model.find()
            const resposta = {
                message: 'Consulta realizada com sucesso!',
                pessoas
            }
            return res.status(200).send(resposta)
        } catch (error) {
            return res.status(404).send({
                message: 'Erro não especificado!',
                error: error
            })
        }
    }

}

export default new PessoaController()