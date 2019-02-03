import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {OrganizacionService} from '../../organizacion/organizacion.service';
import {Router} from '@angular/router';
import {TipoPersonaService} from '../../tipo-persona/tipo-persona.service';
import {UbicacionService} from "../../ubicacion/ubicacion.service";
import {MiembroService} from "../miembro.service";

@Component({
  selector: 'app-miembro-create',
  templateUrl: './miembro-create.component.html',
  styleUrls: ['./miembro-create.component.scss']
})
export class MiembroCreateComponent implements OnInit {
    miembroGroup: FormGroup;
    tipo_personas: any = null;
    organizaciones: any = null;
    parroquias: any = null;
    constructor(private miembroService: MiembroService,
                private tipopersonaService: TipoPersonaService,
                private organizacionService: OrganizacionService,
                private parroquiasService: UbicacionService,
                private router: Router,
                private fb: FormBuilder) {
        this.tipopersonaService.listar()
            .subscribe((res: any) => {
                this.tipo_personas = res;
            });
        this.organizacionService.listar()
            .subscribe((res: any) => {
                this.organizaciones = res;
            });
        this.parroquiasService.parroquiaslistar()
            .subscribe((res: any) => {
                this.parroquias = res;
            });
        this.crearForm();
    }
    ngOnInit() {
    }
    crearForm() {
        this.miembroGroup = this.fb.group({
            'tipo_persona_id': [0, [Validators.required]],
            'organizacion_id': ['', [Validators.required]],
            'parroquia_id': ['', [Validators.required]],
            'cedula': ['', [Validators.required]],
            'nombres': ['', [Validators.required]],
            'genero': ['', [Validators.required]],
            'ocupacion': ['', [Validators.required]],
            'etnia': ['', [Validators.required]],
            'fecha_nacimiento': ['', [Validators.required]],
            'direccion': ['', [Validators.required]],
            'telefono_fijo': [''],
            'operadora': ['', [Validators.required]],
            'contacto': [''],
            'email': [''],
        });
    }
    store() {
        const formData = new FormData();
            formData.append('tipo_persona_id', this.miembroGroup.value.tipo_persona_id);
            formData.append('organizacion_id', this.miembroGroup.value.organizacion_id);
            formData.append('parroquia_id', this.miembroGroup.value.parroquia_id);
            formData.append('cedula', this.miembroGroup.value.cedula);
            formData.append('nombres', this.miembroGroup.value.nombres);
            formData.append('genero', this.miembroGroup.value.genero);
            formData.append('ocupacion', this.miembroGroup.value.ocupacion);
            formData.append('etnia', this.miembroGroup.value.etnia);
            formData.append('fecha_nacimiento', this.miembroGroup.value.fecha_nacimiento);
            formData.append('direccion', this.miembroGroup.value.direccion);
            formData.append('telefono_fijo', this.miembroGroup.value.telefono_fijo);
            formData.append('operadora', this.miembroGroup.value.operadora);
            formData.append('contacto', this.miembroGroup.value.contacto);
            formData.append('email', this.miembroGroup.value.email);
        this.miembroService.store(formData)
            .subscribe((res: any) => {
                // this.toastrService.success('Registrado', 'Docente')
                console.log('exito', 'Persoona');
                this.router.navigate(['/miembros/listar']);
            }, (error) => {
                console.log('replica', 'persona');
                // this.toastrService.error('registrado');
            });
    }
}
