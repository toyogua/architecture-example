import {Inject, Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {UseCase} from '../../../../shared/base-usecase/use-case';
import {ContractorDTO} from '../../domain/DTO/contractor-DTO';
import {ContractorRepository} from '../../domain/repositories/ContractorRepository';
import {CONTRACTORS_REPOSITORY} from '../../domain/injection-tokens/CONTRACTORS_REPOSITORY';

@Injectable()

export class ListContractorsUsecase extends UseCase<void, ContractorDTO> {

  constructor(@Inject(CONTRACTORS_REPOSITORY)private contractorRepository: ContractorRepository) {
    super();
  }

  execute(params: void): Observable<ContractorDTO> {
    return this.contractorRepository.getAll();
  }

}
