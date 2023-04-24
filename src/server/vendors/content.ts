import axios from 'axios'
import { URL } from 'node:url'
import { parse } from '../shared/environment'

interface ContentOptions {
  baseUrl: string
  enabled: boolean
}

interface Key {
  name: string
  value: string
}

export class Content {
  readonly options: ContentOptions

  constructor() {
    const { content } = parse()

    this.options = {
      baseUrl: content.url || '',
      enabled: Boolean(content.url),
    }
  }

  async getLeagueIds(): Promise<string[]> {
    const key = await this.request('leagues')
    if (key === null) return []
    return JSON.parse(key.value)
  }

  async ping() {
    const response = await this.request('leagues')
    return response !== null
  }

  private async request(resource: string): Promise<Key | null> {
    if (this.options.enabled === false) {
      return null
    }

    try {
      const url = new URL('/items/keys', this.options.baseUrl)
      const response = await axios.get(url.href)
      const { data = [] } = response.data
      return data.find(function (key: Key) {
        return key.name === resource
      })
    } catch {
      return null
    }
  }
}
