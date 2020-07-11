import { Init } from '@models/Init'

test('it should be ok', () => {
  const init = new Init()

  init.name = 'Dhenner'

  expect(init.name).toEqual('Dhenner')
})
