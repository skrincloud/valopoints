import { useEffect, useState } from 'react'
import { League } from '../../../core'
import { forge } from '../../dependencies'
import Leagues from '../Leagues'

import './App.css'

function App() {
  const [leagues, setLeagues] = useState<League[]>()

  useEffect(function () {
    const { getAllLeagues } = forge()
    getAllLeagues.execute().then(setLeagues)
  }, [])

  return (
    <main>
      <h1>
        Welcome to <br />
        <span className="text-gradient">Valopoints</span>
      </h1>

      <br />

      {leagues && <Leagues leagues={leagues} />}
    </main>
  )
}

export default App
