import { Component, OnInit } from '@angular/core';
import {CargoService} from '../cargo/cargo.service';

@Component({
  selector: 'app-privilegio',
  templateUrl: './privilegio.component.html',
  styleUrls: ['./privilegio.component.scss']
})
export class PrivilegioComponent implements OnInit {

  loading = true;
  cargos = null;

  constructor(private cargoService: CargoService) {
    this.cargoService.index()
        .subscribe(cargos => {
          this.cargos = cargos;
          this.loading = false;
        });
  }

  ngOnInit() {
  }

}
