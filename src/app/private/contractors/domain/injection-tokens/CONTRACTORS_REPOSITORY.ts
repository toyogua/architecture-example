import {InjectionToken} from '@angular/core';
import {ContractorRepository} from '../repositories/ContractorRepository';

export const CONTRACTORS_REPOSITORY = new InjectionToken<ContractorRepository>('com.domain.contractors-repo');
