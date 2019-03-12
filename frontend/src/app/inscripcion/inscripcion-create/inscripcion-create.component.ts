import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TipoPersonaService} from "../../tipo-persona/tipo-persona.service";
import {Router} from "@angular/router";
import {InscripcionService} from "../inscripcion.service";
import {EventoService} from "../../evento/evento.service";
import {ToastrService} from "ngx-toastr";
import {MiembroService} from "../../miembro/miembro.service";
import {forEach} from '../../../../node_modules/@angular/router/src/utils/collection';

@Component({
  selector: 'app-inscripcion-create',
  templateUrl: './inscripcion-create.component.html',
  styleUrls: ['./inscripcion-create.component.scss']
})
export class InscripcionCreateComponent implements OnInit {
    participanteGroup: FormGroup;
    eventos: any = null;
    personas: any = null;
    constructor(private participanteService: InscripcionService,
                private personaService: MiembroService,
                private eventoService: EventoService,
                private router: Router,
                private fb: FormBuilder,
                private toastrService: ToastrService) {
        this.personaService.listar().subscribe((res: any) => {
                this.personas = [];
                res.forEach(
                    (persona:any)=>{
                        this.personas.push({
                            persona_id: persona.persona_id,
                            cedula_: persona.cedula,
                            nombres:  persona.cedula + ' ' + persona.nombres
                        });
                    }
                )
            });
        this.eventoService.listar()
            .subscribe((res: any) => {
                this.eventos = res;
            });
        this.crearForm();
    }
    ngOnInit() {
    }
    crearForm() {
        this.participanteGroup = this.fb.group({
            'evento_id': [0, [Validators.required]],
            'persona_id': [0, [Validators.required]],
            'observacion': [''],
        });
    }
    store() {
        const formData = new FormData();
        formData.append('evento_id', this.participanteGroup.value.evento_id);
        formData.append('persona_id', this.participanteGroup.value.persona_id);
        formData.append('observacion', this.participanteGroup.value.observacion);
        this.participanteService.store(formData)
            .subscribe((res: any) => {
                this.toastrService.success('Registrado', 'Participante')
                this.participanteGroup.reset();
            }, (error) => {
                this.toastrService.error('duplicado', 'Participante');
            });
    }
}