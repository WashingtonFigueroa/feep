import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {MiembroService} from "../miembro.service";
import {TipoPersonaService} from "../../tipo-persona/tipo-persona.service";
import {OrganizacionService} from "../../organizacion/organizacion.service";
import {UbicacionService} from "../../ubicacion/ubicacion.service";

@Component({
  selector: 'app-miembro-update',
  templateUrl: './miembro-update.component.html',
  styleUrls: ['./miembro-update.component.scss']
})
export class MiembroUpdateComponent implements OnInit {
    persona_id: number = null;
    persona: any = null;
    personaGroup: FormGroup;
    tipo_personas : any = null;
    organizaciones: any = null;
    parroquias: any = null;
    constructor(private personaService: MiembroService,
                private tipopersonaService: TipoPersonaService,
                private organizaconService: OrganizacionService,
                private parroquiasiService: UbicacionService,
                private fb: FormBuilder,
                private router: Router,
                private route: ActivatedRoute,
                private toastrService:ToastrService) {
        this.tipopersonaService.listar()
            .subscribe((res: any) => {
                this.tipo_personas = res;
            });
        this.organizaconService.listar()
            .subscribe((res: any) => {
                this.organizaciones = res;
            });
        this.parroquiasiService.parroquiaslistar()
            .subscribe((res: any) => {
                this.parroquias = res;
            });
        this.route.params.subscribe((param: any) => {
            this.persona_id = param.id;
            this.personaService.show(this.persona_id)
                .subscribe((res: any) => {
                    this.persona = res;
                    this.crearForm();
                });
        });
    }

    ngOnInit() {
    }

    crearForm() {
        this.personaGroup = this.fb.group({
            'tipo_persona_id': [this.persona.tipo_persona_id, [Validators.required]],
            'organizacion_id': [this.persona.organizacion_id, [Validators.required]],
            'parroquia_id': [this.persona.parroquia_id, [Validators.required]],
            'cedula': [this.persona.cedula, [Validators.required]],
            'nombres': [this.persona.nombres],
            'genero': [this.persona.genero],
            'ocupacion': [this.persona.ocupacion],
            'etnia': [this.persona.etnia],
            'nacionalidad': [this.persona.nacionalidad],
            'pueblo': [this.persona.pueblo],
            'fecha_nacimiento': [this.persona.fecha_nacimiento],
            'direccion': [this.persona.direccion],
            'telefono_fijo': [this.persona.telefono_fijo],
            'operadora': [this.persona.operadora],
            'contacto': [this.persona.contacto],
            'email': [this.persona.email],
        });
    }

    update() {
        this.personaService.update(this.persona_id, this.personaGroup.value)
            .subscribe((res: any) => {
              this.toastrService.success('Datos Actualizados','Persona');
                this.router.navigate(['/miembros']);
            });
    }
}
