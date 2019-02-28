import { Component, OnInit } from '@angular/core';
import {TipoProyectoService} from '../tipo-proyecto.service';

@Component({
  selector: 'app-tipo-proyecto-index',
  templateUrl: './tipo-proyecto-index.component.html',
  styleUrls: ['./tipo-proyecto-index.component.scss']
})
export class TipoProyectoIndexComponent implements OnInit {
    tipoproyectos: any = null;
    pages: any = [];
    constructor(private tipoProyctosService: TipoProyectoService) {
        this.tipoProyctosService.index()
            .subscribe((res: any) => {
                this.tipoproyectos = res;
                this.loadPages();
            });
    }
    ngOnInit() {
    }
    loadPages() {
        for (let i = 1; i <= this.tipoproyectos.last_page;  i++) {
            this.pages.push({
                page: i,
                url: this.tipoproyectos.path + '?page=' + i
            });
        }
    }
    load(url) {
        this.tipoProyctosService.load(url)
            .subscribe((res: any) => {
                this.tipoproyectos = res;
            })
    }
    destroy(tipo_proyecto, index) {
        if (confirm(`¿Esta seguro de eliminar ${tipo_proyecto.nombre}?`)) {
            this.tipoProyctosService.destroy(tipo_proyecto.tipo_proyecto_id)
                .subscribe((res: any) => {
                    this.tipoproyectos.data.splice(index, 1);
                });
        }
    }
}
