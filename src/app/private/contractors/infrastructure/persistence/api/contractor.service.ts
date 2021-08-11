import {Injectable} from '@angular/core';
import {ContractorId, ContractorDTO} from '../../../domain/DTO/contractor-DTO';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {ContractorEntity} from '../../entity/contractor-entity';

@Injectable({
  providedIn: 'root'
})
export class ContractorService {
  contractors: ContractorEntity[] = [
    {
      tipo: 'uno',
      nombre: 'fake'
    },
    {
      tipo: '2',
      nombre: 'fake 2'
    }
  ];

  constructor(private http: HttpClient) {
  }

  delete(id: ContractorId): Observable<boolean> {
    return this.http.delete<boolean>(`url /$id`).pipe(map(res => true));
  }

  save(contractor: ContractorEntity): Observable<boolean> {
    return this.http.post('url', contractor).pipe(map(
      res => true
    ));
  }

  getById(id: ContractorId): Observable<ContractorEntity> {
    return this.http.get<ContractorEntity>('url' + id);
  }

  getAll(): Observable<ContractorEntity[]> {
    return of(this.contractors);
    // return this.http.get<ContractorEntity[]>('url')
    //   .pipe(flatMap((item) => item))
    //   .pipe(map(this.mapper.mapFrom));
  }

  update(contractor: ContractorEntity): Observable<ContractorEntity> {
    return this.http.put<ContractorEntity>('url', contractor);
  }
}
