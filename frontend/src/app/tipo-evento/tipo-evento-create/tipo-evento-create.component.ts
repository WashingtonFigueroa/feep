import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {TipoEventoService} from '../tipo-evento.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-tipo-evento-create',
  templateUrl: './tipo-evento-create.component.html',
  styleUrls: ['./tipo-evento-create.component.scss']
})
export class TipoEventoCreateComponent implements OnInit {
    tipoeventoGroup:  FormGroup;
    constructor(private fb: FormBuilder,
                private router: Router,
                private tipoEventoService: TipoEventoService,
                private toastrService: ToastrService) {
        this.crearForm();
    }
    ngOnInit() {
    }
    crearForm() {
        this.tipoeventoGroup = this.fb.group({
            'nombre' : ['', [Validators.required]],
            'descripcion' : [''],
        });
    }
    store() {
        this.tipoeventoGroup.patchValue({
            nombre: this.tipoeventoGroup.value.nombre.toUpperCase(),
            descripcion: this.tipoeventoGroup.value.descripcion.toUpperCase(),
        });
        this.tipoEventoService.store(this.tipoeventoGroup.value)
            .subscribe((res: any) => {
                this.toastrService.success('Tipo Evento Agregado.', '', {
                    timeOut: 2000,
                    closeButton: true,
                    enableHtml: true,
                    toastClass: 'alert alert-success alert-with-icon',
                    positionClass: 'toast-top-right'
                });
                this.router.navigate(['/tipoeventos']);
            }, (error) => {
                this.toastrService.warning('Tipo Evento Duplicado.', '', {
                    timeOut: 2000,
                    closeButton: true,
                    enableHtml: true,
                    toastClass: 'alert alert-warning alert-with-icon',
                    positionClass: 'toast-top-right'
                });
            });
    }
}
