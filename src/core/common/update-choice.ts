import { Choice } from '../choice'
import { ChoiceRepository } from '../choice/choice-repository'
import { TeamId } from '../match/team'

export class UpdateChoice {
  constructor(private readonly repository: ChoiceRepository) {}

  execute(bet: Choice, election: TeamId) {
    bet.choose(election)
    return this.repository.update(bet)
  }
}
