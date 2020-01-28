import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { InterestsComponent } from './interests/interests.component';
import { SkillsComponent } from './skills/skills.component';


const routes: Routes = [
  { path: 'aboutme', component: AboutMeComponent},
  { path: 'education', component: EducationComponent},
  { path: 'experience', component: ExperienceComponent},
  { path: 'interests', component: InterestsComponent},
  { path: 'skills', component: SkillsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
