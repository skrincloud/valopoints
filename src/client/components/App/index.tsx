import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [value, setValue] = useState<string>()

  useEffect(function () {
    setValue('This is the application content')
  })

  return (
    <main>
      <h1>
        Welcome to <br />
        <span className="text-gradient">Valopoints</span>
      </h1>

      <p>{value}</p>
    </main>
  )
}

export default App
