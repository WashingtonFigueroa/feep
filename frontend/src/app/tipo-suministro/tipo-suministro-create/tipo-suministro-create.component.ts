import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {SuministroService} from '../../suministro/suministro.service';
import {TipoSuministroService} from '../tipo-suministro.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-tipo-suministro-create',
  templateUrl: './tipo-suministro-create.component.html',
  styleUrls: ['./tipo-suministro-create.component.scss']
})
export class TipoSuministroCreateComponent implements OnInit {

  tipoSuministroGroup:  FormGroup;
  suministros: any = null;

  constructor(private fb: FormBuilder,
              private router: Router,
              private toastrService: ToastrService,
              private tipoSuministroService: TipoSuministroService,
              private suministroService: SuministroService) {
    this.suministroService.listar()
        .subscribe((res: any) => {
          this.suministros = res;
          this.crearForm();
        });
  }

  ngOnInit() {
  }

  crearForm() {
    this.tipoSuministroGroup = this.fb.group({
      'suministro_id' : [0, [Validators.required]],
      'nombre' : ['', [Validators.required]],
      'descripcion' : ['', [Validators.required]]
    });
  }

  store() {
    this.tipoSuministroService.store(this.tipoSuministroGroup.value)
        .subscribe((res: any) => {
            this.toastrService.success('Tipo suministro agregado exitosamente.', '', {
                timeOut: 4000,
                closeButton: true,
                enableHtml: true,
                toastClass: 'alert alert-success alert-with-icon',
                positionClass: 'toast-top-right'
            });
          this.router.navigate(['/insumos/tipo-suministros']);
        });
  }
}
