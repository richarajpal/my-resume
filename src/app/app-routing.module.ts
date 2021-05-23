import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component'
// import{AboutComponent} from './about/about.component'
import { AboutComponent } from './about/about.component'
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';
import { InterestComponent } from './interest/interest.component';
import { ContactComponent } from "./contact/contact.component"


const routes: Routes = [
  {path:'home',component:HomeComponent,data: {animation: 'Home'}},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'about',component:AboutComponent,data: {animation: 'About'}},
  {path:'education',component:EducationComponent,data: {animation: 'education'}},
  {path:'skills',component:SkillsComponent,data: {animation: 'skills'}},
  {path:'interest',component:InterestComponent,data: {animation: 'interest'}},
  {path:'contact',component:ContactComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
