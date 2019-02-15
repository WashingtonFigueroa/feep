import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {TipoOrganizacionService} from "../tipo-organizacion.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-tipo-organizacion-update',
  templateUrl: './tipo-organizacion-update.component.html',
  styleUrls: ['./tipo-organizacion-update.component.scss']
})
export class TipoOrganizacionUpdateComponent implements OnInit {

    tipo_organizacion_id: number = null;
    tipo_organizacion: any = null;
    tipoOrganizacionGroup: FormGroup;
    constructor(private tipoOrganizacionService: TipoOrganizacionService,
                private fb: FormBuilder,
                private router: Router,
                private route: ActivatedRoute,
                private toastrService: ToastrService) {
        this.route.params.subscribe((param: any) => {
            this.tipo_organizacion_id = param.id;
            this.tipoOrganizacionService.show(this.tipo_organizacion_id)
                .subscribe((res: any) => {
                    this.tipo_organizacion = res;
                    this.crearForm();
                });
        });
    }

    ngOnInit() {
    }

    crearForm() {
        this.tipoOrganizacionGroup = this.fb.group({
            'nombre' : [this.tipo_organizacion.nombre, [Validators.required]],
            'descripcion' : [this.tipo_organizacion.descripcion]
        });
    }

    update() {
        this.tipoOrganizacionService.update(this.tipo_organizacion_id, this.tipoOrganizacionGroup.value)
            .subscribe((res: any) => {
              this.toastrService.success('Actualizado','Tipo Organización')
                this.router.navigate(['/tipoorganizacion']);
            });
    }
}
