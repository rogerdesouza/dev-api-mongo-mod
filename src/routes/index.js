import PessoaRoutes from './pessoa.route'

export default app => {
    app.get('/api', (req, res) =>
        res.status(200).send({
            message: 'dev-api-mongo-mod'
        })
    )

    PessoaRoutes(app)

}