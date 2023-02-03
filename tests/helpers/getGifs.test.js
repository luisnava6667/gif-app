import { getGifs } from '../../src/helpers/getGifs.js'

describe('Pruebas en getGifs()', () => {
  test('debe de retornar un arreglo de Gifs', async () => {
    const gifs = await getGifs('OnePunch')
    // console.log(gifs)
    expect(gifs.length).toBeGreaterThan(0)
    expect(gifs[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String)
    })
  })
})
