import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TipoOrganizacionService} from '../tipo-organizacion.service';
import {Router} from '@angular/router';
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-tipo-organizacion-create',
  templateUrl: './tipo-organizacion-create.component.html',
  styleUrls: ['./tipo-organizacion-create.component.scss']
})
export class TipoOrganizacionCreateComponent implements OnInit {

    tipoorganizacionGroup: FormGroup;
    constructor(private fb: FormBuilder,
                private tipoorganizacionService: TipoOrganizacionService,
                private router: Router,
                private toastrService:ToastrService) {

        this.crearForm();
    }

    ngOnInit() {
    }

    crearForm() {
        this.tipoorganizacionGroup = this.fb.group({
            'nombre' : ['', [Validators.required]],
            'descripcion' : ['']
        });
    }

    store() {
        this.tipoorganizacionService.store(this.tipoorganizacionGroup.value)
            .subscribe((res: any) => {
                console.log(res);
                this.toastrService.success('Datos Agredados','Tipo Organización')
                this.router.navigate(['/tipoorganizacion/listar']);
            }, (error: any) => {
               this.toastrService.warning('Datos Registrados','Tipo Organización')
                this.tipoorganizacionGroup.reset();
            });
    }
}
