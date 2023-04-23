import { Choice } from '../choice'
import { ChoiceRepository } from '../choice/choice-repository'

export class MakeChoice {
  constructor(private readonly repository: ChoiceRepository) {}

  execute(bet: Choice) {
    return this.repository.create(bet)
  }
}
