import { useState } from 'react'
import Form from './form'

function App() {
const [items, setItems] = useState([])

  return (
    <section className='section-centre'>
      <Form />
    </section>
  )
}
export default App