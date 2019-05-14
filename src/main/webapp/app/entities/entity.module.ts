import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'region',
        loadChildren: './region/region.module#JugtoulouseRegionModule'
      },
      {
        path: 'country',
        loadChildren: './country/country.module#JugtoulouseCountryModule'
      },
      {
        path: 'location',
        loadChildren: './location/location.module#JugtoulouseLocationModule'
      },
      {
        path: 'department',
        loadChildren: './department/department.module#JugtoulouseDepartmentModule'
      },
      {
        path: 'task',
        loadChildren: './task/task.module#JugtoulouseTaskModule'
      },
      {
        path: 'employee',
        loadChildren: './employee/employee.module#JugtoulouseEmployeeModule'
      },
      {
        path: 'job',
        loadChildren: './job/job.module#JugtoulouseJobModule'
      },
      {
        path: 'job-history',
        loadChildren: './job-history/job-history.module#JugtoulouseJobHistoryModule'
      }
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ])
  ],
  declarations: [],
  entryComponents: [],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JugtoulouseEntityModule {}
