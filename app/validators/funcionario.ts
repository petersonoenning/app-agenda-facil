import vine, { SimpleMessagesProvider } from '@vinejs/vine'

export const messagesFuncionarioProvider = new SimpleMessagesProvider({
  'required': 'O campo {{ field }} é obrigatório',
  'minLength': 'O campo {{ field }} deve ter pelo menos {{ min }} caracteres',
  'string': 'O campo {{ field }} deve ser uma string',
})

export const createFuncionarioValidator = vine.compile(
  vine.object({
    nome: vine.string().trim().minLength(3),
    funcao: vine.string().trim().minLength(3),
  })
)
