import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { AboutCompanyComponent } from './about-company/about-company.component';
import { ProductComponent } from './product/product.component';
import { RestrictedProductComponent } from './restricted-product/restricted-product.component';
import { AuthGuard } from './auth.guard';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { TestPracticeComponent } from './test-practice/test-practice.component';
import { DemoComponent } from './demo/demo.component';
import { PostsComponent } from './posts/posts.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'product',
    component: ProductComponent
  },
  {
    path: 'file-upload',
    component: FileUploadComponent
  },
  {
    path: 'restricted-product',
    component: RestrictedProductComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'posts',
    component: PostsComponent
  },
  {
    path: 'test-practice',
    component: TestPracticeComponent
  },
  {
    path: 'demo',
    component: DemoComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'about',
    component: AboutComponent,
    children: [
      {
        path: 'about-me',
        component: AboutMeComponent
      },
      {
        path: 'about-company',
        component: AboutCompanyComponent
      }
    ]
  },
  {
    path: '**', // wildcard
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
