import { Component, OnInit } from '@angular/core';
import {TipoSuministroService} from '../tipo-suministro.service';

@Component({
  selector: 'app-tipo-suministro-index',
  templateUrl: './tipo-suministro-index.component.html',
  styleUrls: ['./tipo-suministro-index.component.scss']
})
export class TipoSuministroIndexComponent implements OnInit {

  tipo_suministros: any = null;
  pages: any = [];
  valor = '';
  constructor(private tipoSuministroService: TipoSuministroService) {
    this.tipoSuministroService.index()
        .subscribe((res: any) => {
          this.tipo_suministros = res;
          this.loadPages();
        });
  }

  ngOnInit() {
  }

  loadPages() {
    for (let i = 1; i <= this.tipo_suministros.last_page;  i++) {
      this.pages.push({
        page: i,
        url: this.tipo_suministros.path + '?page=' + i
      });
    }
  }
  load(url) {
    this.tipoSuministroService.load(url)
        .subscribe((res: any) => {
          this.tipo_suministros = res;
        })
  }
  buscar() {
    this.tipoSuministroService.buscar(this.valor)
        .subscribe((res: any) => {
          this.tipo_suministros = res;
        });
  }
  destroy(tipo_suministro, index) {
    if (confirm(`¿Esta seguro de eliminar ${tipo_suministro.nombre}?`)) {
      this.tipoSuministroService.destroy(tipo_suministro.tipo_suministro_id)
          .subscribe((res: any) => {
            this.tipo_suministros.data.splice(index, 1);
          });
    }
  }
}
