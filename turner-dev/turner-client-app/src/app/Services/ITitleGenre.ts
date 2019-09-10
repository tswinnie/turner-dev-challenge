import { Title } from "@angular/platform-browser";
import { Genre } from "./IGenre";

export interface TitleGenre {
  Id: number
  TitleId: number
  GenreId: number
  Genre: Genre
  Title: Title
}
