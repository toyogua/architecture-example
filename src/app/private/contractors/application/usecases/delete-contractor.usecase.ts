import {Inject, Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {UseCase} from '../../../../shared/base-usecase/use-case';
import {ContractorRepository} from '../../domain/repositories/ContractorRepository';
import {CONTRACTORS_REPOSITORY} from '../../domain/injection-tokens/CONTRACTORS_REPOSITORY';

@Injectable({
  providedIn: 'root'
})

export class DeleteContractorUsecase extends UseCase<number, boolean> {
  constructor(@Inject(CONTRACTORS_REPOSITORY)private contractorRepository: ContractorRepository) {
    super();
  }

  execute(params: number): Observable<boolean> {
    return this.contractorRepository.delete(params);
  }

}
