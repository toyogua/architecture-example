import {Injectable} from '@angular/core';
import {ContractorRepository} from '../../../domain/repositories/ContractorRepository';
import {ContractorId, ContractorDTO} from '../../../domain/DTO/contractor-DTO';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {ContractorService} from '../api/contractor.service';
import {map, mergeMap} from 'rxjs/operators';
import {ContractorMapper} from '../../mapper/contractor-mapper';

@Injectable({
  providedIn: 'root'
})

export class ContractorRepositoryImpl implements ContractorRepository {
  constructor(private http: HttpClient,
              private contractorService: ContractorService,
              private readonly mapper: ContractorMapper) {
  }

  delete(id: ContractorId): Observable<boolean> {
    return this.contractorService.delete(id);
  }

  save(contractor: ContractorDTO): Observable<boolean> {
    return this.contractorService.save(this.mapper.mapTo(contractor));
  }

  getById(id: ContractorId): Observable<ContractorDTO> {
    return this.contractorService.getById(id).pipe(
      map(this.mapper.mapFrom)
    );
  }

  getAll(): Observable<ContractorDTO> {
    return this.contractorService.getAll()
      .pipe(mergeMap((item) => item))
      .pipe(map(this.mapper.mapFrom));
  }

  update(params: ContractorDTO): Observable<ContractorDTO> {
    return this.contractorService.update(params).pipe(
      map(this.mapper.mapFrom)
    );
  }
}
