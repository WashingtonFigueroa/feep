import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TipoInsumoService} from "../../tipo-insumo/tipo-insumo.service";
import {ActivatedRoute, Router} from "@angular/router";
import {OrganizacionService} from "../organizacion.service";
import {ToastrService} from "ngx-toastr";
import {TipoOrganizacionService} from "../../tipo-organizacion/tipo-organizacion.service";

@Component({
  selector: 'app-organizacion-update',
  templateUrl: './organizacion-update.component.html',
  styleUrls: ['./organizacion-update.component.scss']
})
export class OrganizacionUpdateComponent implements OnInit {

    organizacion_id: number = null;
    organizacion: any = null;
    organizacionGroup: FormGroup;
    tipo_organizaciones : any = null;
    constructor(private organizacionService: OrganizacionService,
                private tipoorganizacionService: TipoOrganizacionService,
                private fb: FormBuilder,
                private router: Router,
                private route: ActivatedRoute,
                private toastrService:ToastrService) {
        this.tipoorganizacionService.listar()
            .subscribe((res: any) => {
                this.tipo_organizaciones = res;
            });

        this.route.params.subscribe((param: any) => {
            this.organizacion_id = param.id;
            this.organizacionService.show(this.organizacion_id)
                .subscribe((res: any) => {
                    this.organizacion = res;
                    this.crearForm();
                });
        });
    }

    ngOnInit() {
    }

    crearForm() {
        this.organizacionGroup = this.fb.group({
            'nombre' : [this.organizacion.nombre, [Validators.required]],
            'descripcion' : [this.organizacion.descripcion, [Validators.required]],
            'actividad': [this.organizacion.actividad, [Validators.required]],
            'representante': [this.organizacion.representante, [Validators.required]],
            'contacto': [this.organizacion.contacto, [Validators.required]],
        });
    }

    update() {
        this.organizacionService.update(this.organizacion_id, this.organizacionGroup.value)
            .subscribe((res: any) => {
                this.router.navigate(['/organizaciones']);
            });
    }
}
