import vine, { SimpleMessagesProvider } from '@vinejs/vine'

export const messagesOrdemServicoProvider = new SimpleMessagesProvider({
  'required': 'O campo {{ field }} é obrigatório',
  'number': 'O campo {{ field }} deve ser um número',
  'exists': 'O valor do campo {{ field }} deve existir na tabela correspondente',
})

