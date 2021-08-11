import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContractorRoutingModule } from './contractor-routing.module';
import { ContractorComponent } from './contractor.component';
import {InfrastructureModule} from '../../../infrastructure/infrastructure.module';
import {ContractorPresenter} from '../../presenter/contractor-presenter';
import {ListContractorsUsecase} from '../../../application/usecases/list-contractor.usecase';
@NgModule({
  declarations: [ContractorComponent],
  imports: [
    CommonModule,
    ContractorRoutingModule,
    InfrastructureModule.forRoot(),
  ],
  providers: [
    ContractorPresenter,
    ListContractorsUsecase
  ]

})
export class ContractorModule { }
