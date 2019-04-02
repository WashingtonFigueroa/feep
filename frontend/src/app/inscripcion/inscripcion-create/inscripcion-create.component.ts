import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {InscripcionService} from '../inscripcion.service';
import {EventoService} from '../../evento/evento.service';
import {ToastrService} from 'ngx-toastr';
import {MiembroService} from '../../miembro/miembro.service';
import {OrganizacionService} from '../../organizacion/organizacion.service';
import {UbicacionService} from '../../ubicacion/ubicacion.service';

@Component({
  selector: 'app-inscripcion-create',
  templateUrl: './inscripcion-create.component.html',
  styleUrls: ['./inscripcion-create.component.scss']
})
export class InscripcionCreateComponent implements OnInit {
    participanteGroup: FormGroup;
    eventos: any = null;
    organizaciones: any = null;
    parroquias: any = null;
    mostrar = false;
    miembros: any = [];
    persona: any = {
        persona_id : 0,
        organizacion_id : 0,
        parroquia_id : 0,
        cedula : '',
        nombres : '',
        genero : 'M',
        ocupacion : '',
        etnia : '',
        nacionalidad : '',
        pueblo : '',
        fecha_nacimiento : '',
        direccion : '',
        telefono_fijo : '',
        operadora : '',
        contacto : '',
        email : '',
    };
    numEvento: any = 0;
    constructor(private organizacionService: OrganizacionService,
                private parroquiasService: UbicacionService,
                private participanteService: InscripcionService,
                private personaService: MiembroService,
                private eventoService: EventoService,
                private router: Router,
                private fb: FormBuilder,
                private toastrService: ToastrService) {
        this.organizacionService.listar()
            .subscribe((res: any) => {
                this.organizaciones = res;
            });
        this.parroquiasService.parroquiaslistar().subscribe((res: any) => {
            this.parroquias = [];
            res.forEach(
                (parroquia: any) => {
                    this.parroquias.push({
                        parroquia_id: parroquia.parroquia_id,
                        nombre:  parroquia.ciudad + ' - ' + parroquia.nombre
                    });
                }
            )
        });
        this.eventoService.listar()
            .subscribe((res: any) => {
                this.eventos = res;
                this.numEvento = res.length;
                this.crearForm();
            });
    }
    ngOnInit() {
    }
    resetPersona() {
        this.persona = {
            persona_id : 0,
            organizacion_id : 0,
            parroquia_id : 2048,
            cedula : '',
            nombres : '',
            genero : 'M',
            ocupacion : '',
            etnia : '',
            nacionalidad : '',
            pueblo : '',
            fecha_nacimiento : '',
            direccion : '',
            telefono_fijo : '',
            operadora : '',
            contacto : '',
            email : '',
        };
        this.participanteGroup.patchValue({
            'persona_id' : 0,
            'organizacion_id' : 1,
            'parroquia_id' : 2048,
            'nombre': '',
            'genero': 'M',
            'etnia': 'MESTIZO/MONTUBIO',
            'nacionalidad': 'NO APLICA',
            'pueblo': 'NO APLICA',
            'fecha_nacimiento': '',
            'direccion': '',
            'telefono_fijo': '',
            'operadora': 'OTRO/A',
            'contacto': '',
            'email': '',
        });
    }
    crearForm() {
        this.participanteGroup = this.fb.group({
            'evento_id': [parseInt(this.numEvento , 10), [Validators.required]],
            'persona_id': [0, [Validators.required]],
            'observacion': [''],
            'organizacion_id': [1, [Validators.required]],
            'parroquia_id': [2048, [Validators.required]],
            'cedula': ['', [Validators.required]],
            'nombres': ['', [Validators.required]],
            'genero': ['M', [Validators.required]],
            'ocupacion': [''],
            'etnia': ['MESTIZO/MONTUBIO'],
            'nacionalidad': ['NO APLICA'],
            'pueblo': ['NO APLICA'],
            'fecha_nacimiento': [''],
            'direccion': [''],
            'telefono_fijo': [''],
            'operadora': ['OTRO/A'],
            'contacto': [''],
            'email': [''],
        });
    }

    store() {
        const formData = new FormData();
        formData.append('evento_id', this.participanteGroup.value.evento_id);
        formData.append('persona_id', this.participanteGroup.value.persona_id);
        formData.append('observacion', this.participanteGroup.value.observacion);
        formData.append('organizacion_id', this.participanteGroup.value.organizacion_id);
        formData.append('parroquia_id', this.participanteGroup.value.parroquia_id);
        formData.append('cedula', this.participanteGroup.value.cedula);
        if (this.participanteGroup.value.nombres !== null) {
            formData.append('nombres', this.participanteGroup.value.nombres.toUpperCase());
        }
        formData.append('genero', this.participanteGroup.value.genero);
        if (this.participanteGroup.value.ocupacion !== null) {
            formData.append('ocupacion', this.participanteGroup.value.ocupacion.toUpperCase());
        }
        formData.append('etnia', this.participanteGroup.value.etnia);
        formData.append('nacionalidad', this.participanteGroup.value.nacionalidad);
        formData.append('pueblo', this.participanteGroup.value.pueblo);
        formData.append('fecha_nacimiento', this.participanteGroup.value.fecha_nacimiento);
        if (this.participanteGroup.value.direccion !== null) {
            formData.append('direccion', this.participanteGroup.value.direccion.toUpperCase());
        }
        formData.append('telefono_fijo', this.participanteGroup.value.telefono_fijo);
        formData.append('operadora', this.participanteGroup.value.operadora);
        formData.append('contacto', this.participanteGroup.value.contacto);
        formData.append('email', this.participanteGroup.value.email);

         this.participanteService.store(formData)
             .subscribe((res: any) => {
                 this.toastrService.success('Registrado', 'Participante')
                // this.participanteGroup.reset();
                 this.resetPersona();
             }, (error) => {
                 this.toastrService.error('duplicado', 'Participante');
             });
    }

    searchPerson() {
        this.mostrar = true;
        this.resetPersona();
        const cedula = this.participanteGroup.value.cedula;
        this.personaService.sri(cedula).subscribe((res: any) => {
            this.mostrar = false;
            if (res.type === 'sri') {
                let fecha_nac = res.data.data.fechaNacimiento;
                fecha_nac = fecha_nac.split('/');
                const fecha_nacimiento = fecha_nac[2] + '-' + fecha_nac[1] + '-' + fecha_nac[0];
                this.participanteGroup.patchValue({
                    'nombres' : res.data.data.nombreCompleto,
                    'direccion' : res.data.data.residencia,
                    'fecha_nacimiento' : fecha_nacimiento,
                    'genero' : res.data.data.genero
                });
            } else {
                this.participanteGroup.patchValue({
                    'persona_id' : parseInt(res.data.persona_id, 10),
                    'organizacion_id' : res.data.organizacion_id,
                    'parroquia_id' : res.data.parroquia_id,
                    'cedula' : res.data.cedula,
                    'nombres' : res.data.nombres,
                    'genero' : res.data.genero,
                    'ocupacion' : res.data.ocupacion,
                    'etnia' : res.data.etnia,
                    'nacionalidad' : res.data.nacionalidad,
                    'pueblo' : res.data.pueblo,
                    'fecha_nacimiento' : res.data.fecha_nacimiento,
                    'direccion' : res.data.direccion,
                    'telefono_fijo' : res.data.telefono_fijo,
                    'operadora' : res.data.operadora,
                    'contacto' : res.data.contacto,
                    'email' : res.data.email,
                });
                this.persona.persona_id = res.data.persona_id;
                this.persona.organizacion_id = res.data.organizacion_id;
                this.persona.parroquia_id = res.data.parroquia_id;
                this.persona.cedula  = res.data.cedula ;
                this.persona.nombres  = res.data.nombres ;
                this.persona.genero  = res.data.genero ;
                this.persona.ocupacion  = res.data.ocupacion ;
                this.persona.etnia  = res.data.etnia ;
                this.persona.nacionalidad  = res.data.nacionalidad ;
                this.persona.pueblo  = res.data.pueblo ;
                this.persona.fecha_nacimiento  = res.data.fecha_nacimiento ;
                this.persona.direccion  = res.data.direccion ;
                this.persona.telefono_fijo  = res.data.telefono_fijo ;
                this.persona.operadora  = res.data.operadora ;
                this.persona.contacto  = res.data.contacto ;
                this.persona.email  = res.data.email ;
            }
        }, (error) => { ;
            this.mostrar = false;
            this.toastrService.error('Erronea', 'Cedula');
        });
    }
}
