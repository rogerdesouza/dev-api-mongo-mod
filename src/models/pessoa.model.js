import mongoose from '../config/database/mongo.config'

const PessoaSchema = new mongoose.Schema({
  nome: {
    type: String
  },
  ativo: {
    type: Boolean,
    default: true
  }
})

export default mongoose.model('Pessoa', PessoaSchema)