import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TipoSuministroService} from '../../tipo-suministro/tipo-suministro.service';
import {ActivatedRoute, Router} from '@angular/router';
import {TipoService} from '../tipo.service';

@Component({
  selector: 'app-tipo-update',
  templateUrl: './tipo-update.component.html',
  styleUrls: ['./tipo-update.component.scss']
})
export class TipoUpdateComponent implements OnInit {

  tipo_id: number = null;
  tipo: any = null;
  tipoGroup: FormGroup;
  tipo_suministros: any = null;
  constructor(private tipoSuministroService: TipoSuministroService,
              private tipoService: TipoService,
              private fb: FormBuilder,
              private router: Router,
              private route: ActivatedRoute) {

    this.route.params.subscribe((param: any) => {
      this.tipo_id = param.id;
      this.tipoSuministroService.listar()
          .subscribe((tipo_suministros: any) => {
            this.tipo_suministros = tipo_suministros;
          });
      this.tipoService.show(this.tipo_id)
          .subscribe((res: any) => {
            this.tipo = res;
            this.crearForm();
          });
    });
  }

  ngOnInit() {
  }

  crearForm() {
    this.tipoGroup = this.fb.group({
      'tipo_suministro_id' : [this.tipo.tipo_suministro_id, [Validators.required]],
      'nombre' : [this.tipo.nombre, [Validators.required]],
      'descripcion' : [this.tipo.descripcion, [Validators.required]]
    });
  }

  update() {
    this.tipoService.update(this.tipo_id, this.tipoGroup.value)
        .subscribe((res: any) => {
          this.router.navigate(['/insumos/tipos']);
        });
  }
}