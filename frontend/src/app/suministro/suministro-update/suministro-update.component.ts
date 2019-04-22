import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {SuministroService} from '../suministro.service';
import {TipoInsumoService} from '../../tipo-insumo/tipo-insumo.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-suministro-update',
  templateUrl: './suministro-update.component.html',
  styleUrls: ['./suministro-update.component.scss']
})
export class SuministroUpdateComponent implements OnInit {

  suministro_id: number = null;
  suministro: any = null;
  suministroGroup: FormGroup;
  tipo_insumos: any = null;
  constructor(private suministroService: SuministroService,
              private tipoInsumoService: TipoInsumoService,
              private toastrService: ToastrService,
              private fb: FormBuilder,
              private router: Router,
              private route: ActivatedRoute) {

    this.route.params.subscribe((param: any) => {
      this.suministro_id = param.id;
      this.tipoInsumoService.listar()
          .subscribe((tipo_insumos: any) => {
            this.tipo_insumos = tipo_insumos;
          });
      this.suministroService.show(this.suministro_id)
          .subscribe((res: any) => {
            this.suministro = res;
            this.crearForm();

          });
    });
  }

  ngOnInit() {
  }

  crearForm() {
    this.suministroGroup = this.fb.group({
      'tipo_insumo_id' : [this.suministro.tipo_insumo_id, [Validators.required]],
      'nombre' : [this.suministro.nombre, [Validators.required]],
      'descripcion' : [this.suministro.descripcion, [Validators.required]]
    });
  }

  update() {
    this.suministroService.update(this.suministro_id, this.suministroGroup.value)
        .subscribe((res: any) => {
            this.toastrService.success('Suministro modificado exitosamente.', '', {
                timeOut: 4000,
                closeButton: true,
                enableHtml: true,
                toastClass: 'alert alert-success alert-with-icon',
                positionClass: 'toast-top-right'
            });
          this.router.navigate(['/insumos/suministros']);
        });
  }
}