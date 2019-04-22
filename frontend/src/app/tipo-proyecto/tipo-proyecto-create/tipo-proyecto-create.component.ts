import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {TipoProyectoService} from '../tipo-proyecto.service';

@Component({
  selector: 'app-tipo-proyecto-create',
  templateUrl: './tipo-proyecto-create.component.html',
  styleUrls: ['./tipo-proyecto-create.component.scss']
})
export class TipoProyectoCreateComponent implements OnInit {
    tipoproyectoGroup:  FormGroup;
    constructor(private fb: FormBuilder,
                private router: Router,
                private tipoproyectoService: TipoProyectoService,
                private toastrService: ToastrService) {
        this.crearForm();
    }
    ngOnInit() {
    }
    crearForm() {
        this.tipoproyectoGroup = this.fb.group({
            'nombre' : ['', [Validators.required]],
            'descripcion' : [''],
        });
    }
    store() {
        const formData = new FormData();
        formData.append('nombre', this.tipoproyectoGroup.value.nombre.toUpperCase());
        formData.append('descripcion', this.tipoproyectoGroup.value.descripcion.toUpperCase());
        this.tipoproyectoService.store(formData)
            .subscribe((res: any) => {
                this.toastrService.success('Tipo Proyecto Agregado.', '', {
                    timeOut: 200,
                    closeButton: true,
                    enableHtml: true,
                    toastClass: 'alert alert-info alert-with-icon',
                    positionClass: 'toast-top-right'
                });
                this.router.navigate(['/tipoproyectos']);
            }, (error) => {
                this.toastrService.warning('Tipo Proyecto Duplicado.', '', {
                    timeOut: 200,
                    closeButton: true,
                    enableHtml: true,
                    toastClass: 'alert alert-warning alert-with-icon',
                    positionClass: 'toast-top-right'
                });
                this.tipoproyectoGroup.reset();
            });
    }
}
