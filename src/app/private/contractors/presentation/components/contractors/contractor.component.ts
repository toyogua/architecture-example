import {Component, OnInit} from '@angular/core';
import {ContractorPresenter} from '../../presenter/contractor-presenter';
import {ContractorView} from '../../views/contractor-view';
import {ContractorDTO} from '../../../domain/DTO/contractor-DTO';

@Component({
  selector: 'app-contractors',
  templateUrl: './contractor.component.html',
  styleUrls: ['./contractor.component.scss'],
})
export class ContractorComponent implements ContractorView, OnInit {
  item!: ContractorDTO;

  constructor(private readonly presenter: ContractorPresenter) {
  }

  ngOnInit(): void {
    this.presenter.setView(this);
    this.presenter.list().subscribe((items) => this.item = items);
  }

  routeToHome(): void {
  }

  showError(error: string): void {
  }

}
