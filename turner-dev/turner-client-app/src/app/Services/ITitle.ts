import { Award } from "./IAward"
import { OtherName } from "./IOtherName"
import { StoryLine } from "./IStoryLine"
import { TitleGenre } from './ITitleGenre';
import { TitleParticipant } from "./ITitleParticipant";

export interface Title {

  TitleId: number,
  TitleName: string
  TitleNameSortable: string
  TitleTypeId: number
  ReleaseYear: number
  ProcessedDateTimeUtc: string
  Award: Award[]
  OtherName: OtherName[]
  StoryLine: StoryLine[]
  TitleGenre: TitleGenre[]
  TitleParticipant: TitleParticipant[]

}
