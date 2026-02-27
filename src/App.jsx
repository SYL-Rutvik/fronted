import { useState } from 'react'
import DBinteraction from './dbinteraction'

function App() {
  const [count, setCount] = useState(0)

  return (
    <><h1>rutvik shiyal</h1>
      <DBinteraction/>
      
    </>
  )
}

export default App
