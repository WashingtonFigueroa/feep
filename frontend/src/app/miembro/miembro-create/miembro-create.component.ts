import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {OrganizacionService} from '../../organizacion/organizacion.service';
import {Router} from '@angular/router';
import {UbicacionService} from "../../ubicacion/ubicacion.service";
import {MiembroService} from "../miembro.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-miembro-create',
  templateUrl: './miembro-create.component.html',
  styleUrls: ['./miembro-create.component.scss']
})
export class MiembroCreateComponent implements OnInit {
    miembroGroup: FormGroup;
    organizaciones: any = null;
    parroquias: any = null;
    //Buscador Cedula
    mostrar = false;
    miembros: any = [];
    persona: any = {
        persona_id : 0,
        organizacion_id : 0,
        parroquia_id : 0,
        cedula : '',
        nombres : '',
        genero : '',
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
    constructor(private miembroService: MiembroService,
                private organizacionService: OrganizacionService,
                private parroquiasService: UbicacionService,
                private router: Router,
                private fb: FormBuilder,
                private toastrService:ToastrService) {
        this.organizacionService.listar()
            .subscribe((res: any) => {
                this.organizaciones = res;
            });
        this.parroquiasService.parroquiaslistar().subscribe((res: any) => {
            this.parroquias = [];
            res.forEach(
                (parroquia:any)=>{
                    this.parroquias.push({
                        parroquia_id: parroquia.parroquia_id,
                        nombre:  parroquia.ciudad + ' - ' + parroquia.nombre
                    });
                }
            )
        });
        this.crearForm();
    }
    ngOnInit() {
    }
    crearForm() {
        this.miembroGroup = this.fb.group({
            'organizacion_id': ['', [Validators.required]],
            'parroquia_id': ['', [Validators.required]],
            'cedula': ['', [Validators.required]],
            'nombres': ['', [Validators.required]],
            'genero': ['MASCULINO'],
            'ocupacion': ['', [Validators.required]],
            'etnia': ['MESTIZO/A'],
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
        if (this.miembroGroup.value.nombres != '') {
            const formData = new FormData();
            formData.append('organizacion_id', this.miembroGroup.value.organizacion_id);
            formData.append('parroquia_id', this.miembroGroup.value.parroquia_id);
            formData.append('cedula', this.miembroGroup.value.cedula);
            formData.append('nombres', this.miembroGroup.value.nombres.toUpperCase());
            formData.append('genero', this.miembroGroup.value.genero);
            formData.append('ocupacion', this.miembroGroup.value.ocupacion.toUpperCase());
            formData.append('etnia', this.miembroGroup.value.etnia);
            formData.append('nacionalidad', this.miembroGroup.value.nacionalidad);
            formData.append('pueblo', this.miembroGroup.value.pueblo);
            formData.append('fecha_nacimiento', this.miembroGroup.value.fecha_nacimiento);
            formData.append('direccion', this.miembroGroup.value.direccion.toUpperCase());
            formData.append('telefono_fijo', this.miembroGroup.value.telefono_fijo);
            formData.append('operadora', this.miembroGroup.value.operadora);
            formData.append('contacto', this.miembroGroup.value.contacto);
            formData.append('email', this.miembroGroup.value.email);
            this.miembroService.store(formData)
                .subscribe((res: any) => {
                    this.toastrService.success('Agregada', 'Persona')
                    this.miembroGroup.reset();
                }, (error) => {
                    this.toastrService.warning('Registrada','Persona');
                });
        }
    }
    resetPersona() {
        this.persona = {
            persona_id : 0,
            organizacion_id : 0,
            parroquia_id : 0,
            cedula : '',
            nombres : '',
            genero : '',
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
        this.miembroGroup.patchValue({
            'persona_id' : 0,
            'organizacion_id' : 0,
            'parroquia_id' : 0,
            'genero' : '',
            'ocupacion' : '',
            'etnia' : '',
            'nacionalidad' : '',
            'pueblo' : '',
            'fecha_nacimiento' : '',
            'direccion' : '',
            'telefono_fijo' : '',
            'operadora' : '',
            'contacto' : '',
            'email' : '',
        });
    }
    searchPerson() {
        this.mostrar = true;
        this.resetPersona();
        const cedula = this.miembroGroup.value.cedula;
        this.miembroService.sri(cedula).subscribe((res: any) => {
                this.mostrar = false;
                if (res.type === 'sri') {
                    let fecha_nac = res.data.data.fechaNacimiento;
                    fecha_nac = fecha_nac.split('/');
                    const fecha_nacimiento = fecha_nac[2] + '-' + fecha_nac[1] + '-' + fecha_nac[0];
                    this.miembroGroup.patchValue({
                        'nombres' : res.data.data.nombreCompleto,
                        'direccion' : res.data.data.residencia,
                        'fecha_nacimiento' : fecha_nacimiento,
                        'genero' : res.data.data.genero
                    });
                } else {
                    this.miembroGroup.patchValue({
                        'persona_id' : res.data.persona_id,
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
