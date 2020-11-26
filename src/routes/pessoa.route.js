import PessoaController from '../controllers/pessoa.controller'

export default app => {
    app
        .route('/api/pessoas')
        .get(PessoaController.list)
        .post(PessoaController.create)
}