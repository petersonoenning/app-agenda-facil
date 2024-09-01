import vine, { SimpleMessagesProvider } from '@vinejs/vine'

export const messagesClienteProvider = new SimpleMessagesProvider({
  'required': 'O campo {{ field }} é obrigatório',
  'minLength': 'O campo {{ field }} deve ter pelo menos {{ min }} caracteres',
  'email': 'O campo {{ field }} deve ser um e-mail válido',
  'number': 'O campo {{ field }} deve ser um número',
})

export const createClienteValidator = vine.compile(
  vine.object({
    nome: vine.string().trim().minLength(3),
    telefone: vine.string().trim().minLength(10),
    email: vine.string().trim().email(),
    idade: vine.number(),
  })
)
