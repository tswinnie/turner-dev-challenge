import { TitleParticipant } from "./ITitleParticipant";

export interface Participant {
  Id: number
  name: string
  ParticipantType: string
  TitleParticipant: TitleParticipant[]
}
