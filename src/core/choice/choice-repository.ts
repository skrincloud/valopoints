import { Choice } from '.'

export interface ChoiceRepository {
  create(choice: Choice): Promise<Choice>
  update(choice: Choice): Promise<Choice>
}
