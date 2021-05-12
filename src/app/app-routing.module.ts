import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component'
// import{AboutComponent} from './about/about.component'
import { AboutComponent } from './about/about.component'
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';
import { InterestComponent } from './interest/interest.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'about',component:AboutComponent},
  {path:'education',component:EducationComponent},
  {path:'skills',component:SkillsComponent},
  {path:'interest',component:InterestComponent},
  {path:'contact',component:ContactComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
