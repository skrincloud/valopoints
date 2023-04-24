import { useEffect, useState } from 'react'
import { League } from '../../../core'
import { forge } from '../../dependencies'
import Leagues from '../Leagues'

import './App.css'
import Card from '../ui/Card'

const { leagueService } = forge()

function App() {
  const [leagues, setLeagues] = useState<League[]>()
  const [selectedLeague, setSelectedLeague] = useState<League>(
    leagueService.getSelectedLeague(),
  )

  useEffect(function () {
    const { getAllLeagues } = forge()
    getAllLeagues.execute().then(setLeagues)
  }, [])

  function onLeagueClick(league: League) {
    setSelectedLeague(league)
    leagueService.saveSelectedLeague(league)
  }

  return (
    <main>
      <h1>
        Welcome to <br />
        <span className="text-gradient">Valopoints</span>
      </h1>

      <br />

      {selectedLeague && (
        <Card
          key={selectedLeague.id}
          title={selectedLeague.name}
          subtitle="Liga seleccionada"
          image={selectedLeague.image}
          action={{
            text: 'Cambiar',
            onClick: () => {},
          }}
        />
      )}

      {leagues && <Leagues leagues={leagues} onLeagueClick={onLeagueClick} />}
    </main>
  )
}

export default App
