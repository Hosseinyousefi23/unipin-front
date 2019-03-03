import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PostsComponent} from './posts/posts.component';
import {PostDetailComponent} from './post-detail/post-detail.component';
import {NewPostComponent} from './new-post/new-post.component';
import {ProfilePageComponent} from './profile-page/profile-page.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';

const routes: Routes = [
  {path: '', component: PostsComponent},
  {path: 'logout', component: PostsComponent},
  {path: 'post/:id', component: PostDetailComponent},
  {path: 'new-post', component: NewPostComponent},
  {path: 'profile/:slug', component: ProfilePageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
