import axios from 'axios'
import { URL } from 'node:url'
import { join } from 'path'

export enum Language {
  English,
  Spanish,
}

interface ValorantOptions {
  baseUrl: string
  apiKey: string
  sport: string
  language: string
}

interface QueryOptions {
  leagueId?: string
}

export class Valorant {
  readonly options: ValorantOptions

  constructor(
    language: Language = Language.Spanish,
    readonly debug: boolean = false,
  ) {
    this.options = {
      baseUrl: 'https://esports-api.service.valorantesports.com',
      apiKey: '0TvQnueqKa5mxJntVWt0w4LpLfEkrV1Ta8rQBb9Z',
      sport: 'val',
      language: language === Language.Spanish ? 'es-MX' : 'en-US',
    }
  }

  /**
   * @returns {Valorant} Instance with debug mode enabled
   */
  static create(): Valorant {
    return new Valorant(Language.Spanish, true)
  }

  async getAllLeagues(): Promise<object[]> {
    const { data: { leagues = [] } = {} } = await this.request('/getLeagues')
    return leagues
  }

  async getMatches(leagueId: string): Promise<object[]> {
    const { data = {} } = await this.request('/getSchedule', { leagueId })
    const { schedule: { events = [] } = {} } = data
    return events
  }

  async ping() {
    try {
      await this.request('/getLeagues')
      return true
    } catch {
      return false
    }
  }

  private async request(resource: string, options?: QueryOptions) {
    const path = join('persisted/val', resource)
    const url = new URL(path, this.options.baseUrl)

    url.searchParams.set('hl', this.options.language)
    url.searchParams.set('sport', this.options.sport)

    if (options && options.leagueId) {
      url.searchParams.set('leagueId', options.leagueId)
    }

    const response = await axios.get(url.href, {
      headers: {
        'x-api-key': this.options.apiKey,
      },
      validateStatus: (status) => {
        if (this.debug) return status < 400
        return true
      },
    })

    return response.data
  }
}
