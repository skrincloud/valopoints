import { useEffect, useState } from 'react'
import { GetAllLeagues, League } from '../../../core'
import { ApiLeagueRepository } from '../../infrastructure/api/league-repository'
import Leagues from '../Leagues'

import './App.css'

function App() {
  const [leagues, setLeagues] = useState<League[]>()

  useEffect(function () {
    const repository = new ApiLeagueRepository()
    const getAllLeagues = new GetAllLeagues(repository)
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
