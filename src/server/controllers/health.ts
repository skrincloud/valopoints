import { Request, Response } from 'express'
import MySQLDatabase from '../vendors/mysql'
import { Valorant } from '../vendors/valorant'
import { Content } from '../vendors/content'

export class HealthController {
  static async get(request: Request, response: Response) {
    const services: Record<string, string> = {
      database: 'OK',
      valorant: 'OK',
      content: 'OK',
    }

    const database = new MySQLDatabase()
    const valorant = Valorant.create()
    const content = new Content()

    const promises = [database.ping(), valorant.ping(), content.ping()]
    const results = await Promise.all(promises)

    results.forEach(function (ping, index) {
      if (ping) return
      const keys = Object.keys(services)
      services[keys[index]] = 'Down'
    })

    response.json({ services })
  }
}
