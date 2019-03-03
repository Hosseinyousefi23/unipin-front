import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PostsComponent} from './posts/posts.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {HttpClientModule} from '@angular/common/http';
import {PostDetailComponent} from './post-detail/post-detail.component';
import {NewPostComponent} from './new-post/new-post.component';
import {PostHeaderComponent} from './post-header/post-header.component';
import {SearchBarComponent} from './search-bar/search-bar.component';
import {ProfilePageComponent} from './profile-page/profile-page.component';
import {PostCardComponent} from './post-card/post-card.component';
import {PostCardDetailComponent} from './post-card-detail/post-card-detail.component';
import {OfferPostsComponent} from './offer-posts/offer-posts.component';
import {LoginComponent} from './login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    HeaderComponent,
    FooterComponent,
    PostDetailComponent,
    NewPostComponent,
    PostHeaderComponent,
    SearchBarComponent,
    ProfilePageComponent,
    PostCardComponent,
    PostCardDetailComponent,
    OfferPostsComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
