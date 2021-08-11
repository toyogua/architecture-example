import {Mapper} from '../../../../shared/base-mapper/mapper';
import {ContractorEntity} from '../entity/contractor-entity';
import {ContractorDTO} from '../../domain/DTO/contractor-DTO';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContractorMapper implements Mapper<ContractorEntity, ContractorDTO> {
  constructor() {
  }

  mapFrom(param: ContractorEntity): ContractorDTO {
    return {
      nombre: param.nombre,
      tipo: param.tipo,
      id: 0,
      other: 'other'
    };
  }

  mapTo(param: ContractorDTO): ContractorEntity {
    return {
      nombre: param.tipo,
      tipo: param.tipo
    };
  }
}
