import { useEffect, useState } from 'react'
import { League, Match } from '../../../core'
import { forge } from '../../dependencies'
import Leagues from '../Leagues'
import Matches from '../Matches'
import Version from '../Version'
import Card from '../ui/Card'

import './App.css'

const { leagueService, getMatchesFromLeague } = forge()

function App() {
  const [leagues, setLeagues] = useState<League[]>()
  const [selectedLeague, setSelectedLeague] = useState<League | null>(
    leagueService.getSelectedLeague(),
  )
  const [matches, setMatches] = useState<Match[]>()

  useEffect(function () {
    const { getAllLeagues } = forge()
    getAllLeagues.execute().then(setLeagues)
  }, [])

  function onLeagueClick(league: League) {
    setSelectedLeague(league)
    leagueService.saveSelectedLeague(league)
    getMatchesFromLeague.execute(league.id).then(setMatches)
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
            onClick: () => setSelectedLeague(null),
          }}
        />
      )}

      {selectedLeague && matches && <Matches matches={matches} />}

      {leagues && selectedLeague === null && (
        <Leagues leagues={leagues} onLeagueClick={onLeagueClick} />
      )}

      <Version />
    </main>
  )
}

export default App
