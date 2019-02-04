import { Component, OnInit } from '@angular/core';
import {SuministroService} from '../suministro.service';

@Component({
  selector: 'app-suministro-index',
  templateUrl: './suministro-index.component.html',
  styleUrls: ['./suministro-index.component.scss']
})
export class SuministroIndexComponent implements OnInit {
  suministros: any = null;
  pages: any = [];
  valor = '';
  constructor(private suminitroService: SuministroService) {
    this.suminitroService.index()
        .subscribe((res: any) => {
          this.suministros = res;
          this.loadPages();
        });
  }

  ngOnInit() {
  }

  loadPages() {
    for (let i = 1; i <= this.suministros.last_page;  i++) {
      this.pages.push({
        page: i,
        url: this.suministros.path + '?page=' + i
      });
    }
  }
  load(url) {
    this.suminitroService.load(url)
        .subscribe((res: any) => {
          this.suministros = res;
        })
  }
  buscar() {
    this.suminitroService.buscar(this.valor)
        .subscribe((res: any) => {
            this.suministros = res;
        });
  }
  destroy(suministro, index) {
    if (confirm(`¿Esta seguro de eliminar ${suministro.nombre}?`)) {
      this.suminitroService.destroy(suministro.suministro_id)
          .subscribe((res: any) => {
            this.suministros.data.splice(index, 1);
          });
    }
  }
}
