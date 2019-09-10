import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TitleSearchComponent } from './title-search/title-search.component';
import { TitlesService } from './Services/titles.service';
import { TitleListComponent } from './title-list/title-list.component';
import { TitleDetailsComponent } from './title-details/title-details.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleSearchComponent,
    TitleListComponent,
    TitleDetailsComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: TitleSearchComponent, pathMatch: 'full' },
    ])
  ],
  providers: [TitlesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
