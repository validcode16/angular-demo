import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import { FiveComponent } from './five/five.component';
import { DirectiveExampleComponent } from './directive-example/directive-example.component';
import { FormComponent } from './form/form.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { AboutCompanyComponent } from './about-company/about-company.component';
import { HttpClientModule } from '@angular/common/http';
import { RestrictedProductComponent } from './restricted-product/restricted-product.component';
import { ProductComponent } from './product/product.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { TestPracticeComponent } from './test-practice/test-practice.component';
import { DemoComponent } from './demo/demo.component';
import { ImputFormatDirective } from './imput-format.directive';
import { PostsComponent } from './posts/posts.component';

@NgModule({
  declarations: [
    AppComponent,
    SecondComponent,
    ThirdComponent,
    FiveComponent,
    DirectiveExampleComponent,
    FormComponent,
    ReactiveFormsComponent,
    ParentComponent,
    ChildComponent,
    HomeComponent,
    AboutComponent,
    RegisterComponent,
    LoginComponent,
    PageNotFoundComponent,
    AboutMeComponent,
    AboutCompanyComponent,
    RestrictedProductComponent,
    ProductComponent,
    FileUploadComponent,
    TestPracticeComponent,
    DemoComponent,
    ImputFormatDirective,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
