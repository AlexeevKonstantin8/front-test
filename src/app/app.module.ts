import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { CustomSelectComponent } from './shared/components/custom-select/custom-select.component';
import { UserlistPipe } from './shared/pipes/userlist.pipe';
import { UserAlbumComponent } from './popups/user-album/user-album.component';
import { UserPropsComponent } from './popups/user-props/user-props.component';
import { SearchComponent } from './shared/components/search/search.component';
import {DynamicLoaderService} from './dynamic-loader';

@NgModule({
  declarations: [
    AppComponent,
    CustomSelectComponent,
    UserlistPipe,
    UserAlbumComponent,
    UserPropsComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [DynamicLoaderService],
  entryComponents: [
    UserAlbumComponent,
    UserPropsComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
