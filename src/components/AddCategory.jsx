import { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState('')
  const onInputChange = (e) => {
    setInputValue(e.target.value)
  }
  const onSubmit = (e) => {
    e.preventDefault()
    const newInputValue = inputValue.trim()
    if (inputValue.trim().length <= 1) return
    // setCategories((categories) => [inputValue, ...categories])
    setInputValue('')
    onNewCategory(inputValue.trim())
  }
  return (
    <form aria-label='form' onSubmit={onSubmit}>
      <input
        type='text'
        placeholder='Buscar Gifs'
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  )
}
AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired
}
