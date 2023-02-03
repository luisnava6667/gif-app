import { render, screen } from '@testing-library/react'
import { GifGrid } from '../../src/components/GifGrid'
import useFetchGifs from '../../src/hooks/useFetchGifs'
jest.mock('../../src/hooks/useFetchGifs')
describe('Pruebas en <GifsGrid/>', () => {
  const category = 'OnePunch'
  test('debe de mostrar el loading inicialmente ', () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true
    })
    render(<GifGrid category={category} />)
    expect(screen.getByText('Cargando....'))
    expect(screen.getByText(category))
  })
  test('debe de mostrar items cuando se cargan las imagenes useFetchGifs', () => {
    const gifs = [
      {
        id: 'asd123',
        title: 'react',
        url: 'https://react.com/react.jpg'
      },
      {
        id: 'asd1234',
        title: 'react1',
        url: 'https://react.com/react2.jpg'
      }
    ]
    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false
    })
    render(<GifGrid category={category} />)
    expect(screen.getAllByRole('img').length).toBe(2)
  })
})
