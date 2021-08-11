import {Injectable} from '@angular/core';
import {BasePresenter} from '../../../../shared/base-presenter/base-presenter';
import {ContractorView} from '../views/contractor-view';
import {ListContractorsUsecase} from '../../application/usecases/list-contractor.usecase';
import {Observable} from 'rxjs';
import {ContractorDTO} from '../../domain/DTO/contractor-DTO';

@Injectable()

export class ContractorPresenter implements BasePresenter {
  private view!: ContractorView;
  constructor(private listCase: ListContractorsUsecase) {
  }
  setView(component: any): void {
    this.view = component as ContractorView;
  }

  list(params: void): Observable<ContractorDTO>{
    return this.listCase.execute();
  }
}
