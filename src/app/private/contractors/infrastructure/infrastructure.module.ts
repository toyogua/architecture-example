import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CONTRACTORS_REPOSITORY} from '../domain/injection-tokens/CONTRACTORS_REPOSITORY';
import {ContractorRepositoryImpl} from './persistence/repository-impl/contractor-repository-impl';
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    {
      provide: CONTRACTORS_REPOSITORY, useClass: ContractorRepositoryImpl,
    }
  ]
})
export class InfrastructureModule {
  static forRoot(): ModuleWithProviders<any> {
    return {
      ngModule: InfrastructureModule,
      providers: [
        {
          provide: CONTRACTORS_REPOSITORY, useClass: ContractorRepositoryImpl
        }
      ]
    };
  }
}
