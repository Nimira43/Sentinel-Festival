import { useState } from 'react'

const Form = () => {
  const [newItemName, setNewItemName] = useState('')

  return (
    <form>
      <h4>The Shopping List</h4>
      <div className='form-control'>
        <input type='text' className='form-input' value={newItemName} onChange={(event) => setNewItemName(event.target.value)}/>
      </div>
      <button type='submit' className='btn'>Add Item</button>
    </form>
          
  )
}

export default Form
