import { Request, Response } from 'express'
import { forge } from '../dependencies'

export class LeagueController {
  static async getAll(request: Request, response: Response) {
    const { getAllLeagues } = forge()
    const leagues = await getAllLeagues.execute()

    response.json({
      data: leagues,
    })
  }
}
