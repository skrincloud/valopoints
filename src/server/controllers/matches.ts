import { Request, Response } from 'express'
import { forge } from '../dependencies'

export class MatchController {
  static async getBy(request: Request, response: Response) {
    const { getMatchesFromLeague } = forge()
    const { leagueId } = request.params
    const matches = await getMatchesFromLeague.execute(leagueId)

    response.json({
      data: matches,
    })
  }
}
