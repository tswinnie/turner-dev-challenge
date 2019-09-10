import { Title } from "@angular/platform-browser";
import { Participant } from "./IParticipant";

export interface TitleParticipant {
  Id: number
  TitleId: number
  ParticipantId: number
  IsKey: boolean
  RoleType: string
  IsOnScreen: boolean
  Participant: Participant
  Title: Title
}
