import { Component, OnInit } from '@angular/core';
import {TipoInsumoService} from '../tipo-insumo.service';

@Component({
  selector: 'app-tipo-insumo-index',
  templateUrl: './tipo-insumo-index.component.html',
  styleUrls: ['./tipo-insumo-index.component.scss']
})
export class TipoInsumoIndexComponent implements OnInit {

  tipo_insumos: any = null;
  pages: any = [];
  constructor(private tipoInsumoService: TipoInsumoService) {
    this.tipoInsumoService.index()
        .subscribe((res: any) => {
          this.tipo_insumos = res;
          this.loadPages();
        });
  }

  ngOnInit() {
  }

  loadPages() {
    for (let i = 1; i <= this.tipo_insumos.last_page;  i++) {
      this.pages.push({
        page: i,
        url: this.tipo_insumos.path + '?page=' + i
      });
    }
  }
  load(url) {
    this.tipoInsumoService.load(url)
        .subscribe((res: any) => {
          this.tipo_insumos = res;
        })
  }
  destroy(tipo_insumo, index) {
    if (confirm(`¿Esta seguro de eliminar ${tipo_insumo.nombre}?`)) {
      this.tipoInsumoService.destroy(tipo_insumo.tipo_insumo_id)
          .subscribe((res: any) => {
            this.tipo_insumos.data.splice(index, 1);
          });

    }
  }

}
