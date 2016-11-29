import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

import { FacultyService } from './services/faculty.service';
import { FacultyResolver } from './services/faculty-resolver.service';
import { AssignedDepartmentsResolver } from './services/assigned-departments-resolver.service';

import { DepartmentService } from './services/department.service';
import { DepartmentResolver } from './services/department-resolver.service';

import { FacultyDetailsComponent } from './components/faculty/faculty-details.component';
import { AssignedDepartmentsComponent } from './components/faculty/assigned-departments.component';
import { SpecialtiesComponent } from './components/faculty/specialties.component';
import { CoursesComponent } from './components/faculty/courses.component';

import { DepartmentDetailsComponent } from './components/department/department-details.component';

import { UniversityDetailsComponent } from './components/university/university-details.component';


@NgModule({
  imports: [
    RouterModule.forRoot([
      { 
        path: 'faculties/:id', 
        component: FacultyDetailsComponent,
        resolve: {
            faculty: FacultyResolver
        },
        children: [
          { 
            path: '',
            redirectTo: 'departments'
          },
          { 
            path: 'departments',  
            component: AssignedDepartmentsComponent,
            resolve: {
              assignedDepartments: AssignedDepartmentsResolver
            }
          },
          {
            path: 'specialties',
            component: SpecialtiesComponent
          },
          {
            path: 'courses',
            component: CoursesComponent
          }          
        ]
      },
      
      { 
        path: 'departments/:id', 
        component: DepartmentDetailsComponent,
        resolve: {
            department: DepartmentResolver
        }        
      },      
      { 
        path: '', 
        component: UniversityDetailsComponent
      } 
    ])
  ],
  
  exports: [
    RouterModule
  ],
  
  providers: [
    FacultyService,
    FacultyResolver,
    AssignedDepartmentsResolver,
    DepartmentService,
    DepartmentResolver
  ]
  
})

export class AppRoutingModule {}