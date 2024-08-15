import vine, { SimpleMessagesProvider } from '@vinejs/vine'

export const messagesServicoProvider = new SimpleMessagesProvider({
  'required': 'O campo {{ field }} é obrigatório',
  'minLength': 'O campo {{ field }} deve ter pelo menos {{ min }} caracteres',
  'withoutDecimals': 'O campo {{ field }} deve ser inteiro',
  'min': 'O campo {{ field }} deve ser no mínimo {{ min }}',

  'placa.regex': 'A placa deve ser no formato: AAA-9A99 ou AAA-9999',
  'situacao.enum': 'A opção selecionada é inválida, a opção deve ser: liberado ou manutencao',
})

export const createServicoValidator = vine.compile(
  vine.object({
    nome: vine.string().trim().minLength(3),
    descricao: vine.string().trim().minLength(1),
    valor: vine.number(),
  })
)