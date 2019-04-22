import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {SuministroService} from '../suministro.service';
import {TipoInsumoService} from '../../tipo-insumo/tipo-insumo.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-suministro-create',
  templateUrl: './suministro-create.component.html',
  styleUrls: ['./suministro-create.component.scss']
})
export class SuministroCreateComponent implements OnInit {

  suministroGroup:  FormGroup;
  tipo_insumos: any = null;

  constructor(private fb: FormBuilder,
              private router: Router,
              private toastrService: ToastrService,
              private tipoInsumoService: TipoInsumoService,
              private suministroService: SuministroService) {
    this.tipoInsumoService.listar()
        .subscribe((res: any) => {
          this.tipo_insumos = res;
          this.crearForm();
        });
  }

  ngOnInit() {
  }

  crearForm() {
    this.suministroGroup = this.fb.group({
      'tipo_insumo_id' : [0, [Validators.required]],
      'nombre' : ['', [Validators.required]],
      'descripcion' : ['', [Validators.required]]
    });
  }

  store() {
    this.suministroService.store(this.suministroGroup.value)
        .subscribe((res: any) => {
            this.toastrService.success('Suministro agregado exitosamente.', '', {
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
