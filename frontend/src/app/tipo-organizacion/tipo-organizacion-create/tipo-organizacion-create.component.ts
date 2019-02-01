import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TipoOrganizacionService} from '../tipo-organizacion.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tipo-organizacion-create',
  templateUrl: './tipo-organizacion-create.component.html',
  styleUrls: ['./tipo-organizacion-create.component.scss']
})
export class TipoOrganizacionCreateComponent implements OnInit {

    tipoorganizacionGroup: FormGroup;
    constructor(private fb: FormBuilder,
                private tipoorganizacionService: TipoOrganizacionService,
                private router: Router) {
        this.crearForm();
    }

    ngOnInit() {
    }

    crearForm() {
        this.tipoorganizacionGroup = this.fb.group({
            'nombre' : ['', [Validators.required]],
            'descripcion' : ['', [Validators.required]]
        });
    }

    store() {
        this.tipoorganizacionService.store(this.tipoorganizacionGroup.value)
            .subscribe((res: any) => {
                console.log(res);
                if (res.mensaje) {
                    alert(res.mensaje);
                }
                this.router.navigate(['/tipoorganizacion/listar']);
            }, (error: any) => {
                alert(error.error.mensaje);
                this.tipoorganizacionGroup.reset();
            });
    }
}
