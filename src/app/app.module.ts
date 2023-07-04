import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ExamsCardsComponent } from './components/exams-cards/exams-cards.component';
import { TestBuilderComponent } from './components/admin/test-builder/test-builder.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ExamsListComponent } from './components/exams-list/exams-list.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { RegisterComponent } from './components/register/register.component';
import { AllStudentsComponent } from './components/all-students/all-students.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    SidebarComponent,
    ExamsCardsComponent,
    TestBuilderComponent,
    DashboardComponent,
    ExamsListComponent,
    HomeComponent,
    LoginComponent,
    QuizComponent,
    RegisterComponent,
    AllStudentsComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
