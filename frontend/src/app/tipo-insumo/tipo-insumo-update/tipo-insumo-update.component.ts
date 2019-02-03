import { Component, OnInit } from '@angular/core';
import {TipoInsumoService} from '../tipo-insumo.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-tipo-insumo-update',
  templateUrl: './tipo-insumo-update.component.html',
  styleUrls: ['./tipo-insumo-update.component.scss']
})
export class TipoInsumoUpdateComponent implements OnInit {

  tipo_insumo_id: number = null;
  tipo_insumo: any = null;
  tipoInsumoGroup: FormGroup;
  constructor(private tipoInsumoService: TipoInsumoService,
              private fb: FormBuilder,
              private router: Router,
              private route: ActivatedRoute) {

    this.route.params.subscribe((param: any) => {
      this.tipo_insumo_id = param.id;
      this.tipoInsumoService.show(this.tipo_insumo_id)
          .subscribe((res: any) => {
            this.tipo_insumo = res;
            this.crearForm();
          });
    });
  }

  ngOnInit() {
  }

  crearForm() {
    this.tipoInsumoGroup = this.fb.group({
      'nombre' : [this.tipo_insumo.nombre, [Validators.required]],
      'descripcion' : [this.tipo_insumo.descripcion, [Validators.required]]
    });
  }

  update() {
    this.tipoInsumoService.update(this.tipo_insumo_id, this.tipoInsumoGroup.value)
        .subscribe((res: any) => {
          this.router.navigate(['/tipo-insumos']);
        });
  }
}
