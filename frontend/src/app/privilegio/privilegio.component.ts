import { Component, OnInit } from '@angular/core';
import {CargoService} from '../cargo/cargo.service';
import {PrivilegioService} from './privilegio.service';

@Component({
  selector: 'app-privilegio',
  templateUrl: './privilegio.component.html',
  styleUrls: ['./privilegio.component.scss']
})
export class PrivilegioComponent implements OnInit {

  loading = true;
  cargos = null;
  cargo_id: any = null;
  privilegios: any = null;
  constructor(private cargoService: CargoService,
              private privilegioService: PrivilegioService) {
    this.cargoService.index()
        .subscribe(cargos => {
          this.cargos = cargos;
          this.loading = false;
        });
  }

  ngOnInit() {
  }

  getPrivilegios() {
      this.cargoService.privilegios(this.cargo_id)
          .subscribe((res: any) => {
              this.privilegios = res;
          });
  }

  updatePrivilegio(privilegio: string) {
      if (this.cargo_id !== null) {
          this.privilegioService.store({
              cargo_id: +this.cargo_id,
              privilegio: privilegio
          }).subscribe((res: any) => {
              this.getPrivilegios();
              console.log(res);
          });
      } else {
          alert('Seleccione un cargo');
      }

  }
}
