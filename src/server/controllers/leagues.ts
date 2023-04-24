import { Request, Response } from 'express'
import { ValorantLeagueRepository } from '../infrastructure/valorant/league-repository'
import { GetAllLeagues } from '../../core'

export class LeagueController {
  static async getAll(request: Request, response: Response) {
    const repository = new ValorantLeagueRepository()
    const getAllLeagues = new GetAllLeagues(repository)
    const leagues = await getAllLeagues.execute()

    response.json({
      data: leagues,
    })
  }
}
