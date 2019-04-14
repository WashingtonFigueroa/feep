import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TipoInsumoService} from '../tipo-insumo.service';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-tipo-insumo-create',
  templateUrl: './tipo-insumo-create.component.html',
  styleUrls: ['./tipo-insumo-create.component.scss']
})
export class TipoInsumoCreateComponent implements OnInit {

  tipoInsumoGroup:  FormGroup;
  constructor(private fb: FormBuilder,
              private router: Router,
              private toastrService: ToastrService,
              private tipoInsumoService: TipoInsumoService) {
    this.crearForm();
  }

  ngOnInit() {
  }

  crearForm() {
    this.tipoInsumoGroup = this.fb.group({
      'nombre' : ['', [Validators.required]],
      'descripcion' : ['', [Validators.required]],
    });
  }

  store() {
    this.tipoInsumoService.store(this.tipoInsumoGroup.value)
        .subscribe((res: any) => {
            this.toastrService.success('Tipo insumo agregado exitosamente.', '', {
                timeOut: 4000,
                closeButton: true,
                enableHtml: true,
                toastClass: 'alert alert-success alert-with-icon',
                positionClass: 'toast-top-right'
            });
          this.router.navigate(['/insumos/tipo-insumos']);
        });
  }
}
