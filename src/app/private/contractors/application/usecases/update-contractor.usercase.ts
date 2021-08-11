import {Inject, Injectable} from '@angular/core';
import {UseCase} from '../../../../shared/base-usecase/use-case';
import {ContractorDTO} from '../../domain/DTO/contractor-DTO';
import {CONTRACTORS_REPOSITORY} from '../../domain/injection-tokens/CONTRACTORS_REPOSITORY';
import {ContractorRepository} from '../../domain/repositories/ContractorRepository';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UpdateContractorUsercase extends UseCase<ContractorDTO, ContractorDTO> {
  constructor(@Inject(CONTRACTORS_REPOSITORY)private readonly contractorRepository: ContractorRepository) {
    super();
  }

  execute(params: ContractorDTO): Observable<ContractorDTO> {
    return this.contractorRepository.update(params);
  }
}
