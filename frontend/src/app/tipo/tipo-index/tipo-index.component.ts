import { Component, OnInit } from '@angular/core';
import {TipoService} from '../tipo.service';

@Component({
  selector: 'app-tipo-index',
  templateUrl: './tipo-index.component.html',
  styleUrls: ['./tipo-index.component.scss']
})
export class TipoIndexComponent implements OnInit {
  tipos: any = null;
  pages: any = [];
  valor = '';
  constructor(private tipoService: TipoService) {
    this.tipoService.index()
        .subscribe((res: any) => {
          this.tipos = res;
          this.loadPages();
        });
  }

  ngOnInit() {
  }

  loadPages() {
    for (let i = 1; i <= this.tipos.last_page;  i++) {
      this.pages.push({
        page: i,
        url: this.tipos.path + '?page=' + i
      });
    }
  }
  load(url) {
    this.tipoService.load(url)
        .subscribe((res: any) => {
          this.tipos = res;
        })
  }
  buscar() {
    this.tipoService.buscar(this.valor)
        .subscribe((res: any) => {
          this.tipos = res;
        });
  }
  destroy(tipo, index) {
    if (confirm(`¿Esta seguro de eliminar ${tipo.nombre}?`)) {
      this.tipoService.destroy(tipo.tipo_id)
          .subscribe((res: any) => {
            this.tipos.data.splice(index, 1);
          });
    }
  }
}
