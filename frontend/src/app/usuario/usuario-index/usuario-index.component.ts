import { Component, OnInit } from '@angular/core';
import {UsuarioService} from '../usuario.service';

@Component({
  selector: 'app-usuario-index',
  templateUrl: './usuario-index.component.html',
  styleUrls: ['./usuario-index.component.scss']
})
export class UsuarioIndexComponent implements OnInit {

  usuarios: any = null;
  pages: any = [];
  valor = '';
  constructor(private usuarioService: UsuarioService) {
    this.usuarioService.index()
        .subscribe((res: any) => {
          this.usuarios = res;
          this.loadPages();
        });
  }

  ngOnInit() {
  }

  loadPages() {
    this.pages = [];
    for (let i = 1; i <= this.usuarios.last_page;  i++) {
      this.pages.push({
        page: i,
        url: this.usuarios.path + '?page=' + i
      });
    }
  }
  load(url) {
    this.usuarioService.load(url)
        .subscribe((res: any) => {
          this.usuarios = res;
        })
  }
  buscar() {
    this.usuarioService.buscar(this.valor)
        .subscribe((res: any) => {
          this.usuarios = res;
          this.loadPages();
        });
  }
  destroy(usuario, index) {
    if (confirm(`¿Esta seguro de eliminar ${usuario.nombres}?`)) {
      this.usuarioService.destroy(usuario.usuario_id)
          .subscribe((res: any) => {
            this.usuarios.data.splice(index, 1);
          });

    }
  }

}
