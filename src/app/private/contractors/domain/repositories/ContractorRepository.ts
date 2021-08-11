import {Observable} from 'rxjs';
import {ContractorId, ContractorDTO} from '../DTO/contractor-DTO';
export interface ContractorRepository {
  save(contractor: ContractorDTO): Observable<boolean>;

  delete(id: ContractorId): Observable<boolean>;

  getById(id: ContractorId): Observable<ContractorDTO>;

  getAll(): Observable<ContractorDTO>;

  update(params: ContractorDTO): Observable<ContractorDTO>;
}
