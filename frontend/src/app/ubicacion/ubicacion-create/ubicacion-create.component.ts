import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {UbicacionService} from '../ubicacion.service';
import {ToastrService} from 'ngx-toastr';
import { NgSelectModule } from '@ng-select/ng-select';

@Component({
  selector: 'app-ubicacion-create',
  templateUrl: './ubicacion-create.component.html',
  styleUrls: ['./ubicacion-create.component.scss']
})
export class UbicacionCreateComponent implements OnInit {

    provinciaGroup:  FormGroup;
    ciudadGroup:  FormGroup;
    parroquiaGroup:  FormGroup;
    barrioGroup:  FormGroup;
    provincias: any  = null;
    ciudades: any  = null;
    parroquias: any  = null;
    constructor(private fb: FormBuilder,
                private router: Router,
                private ubicacionService: UbicacionService,
                private toastrService: ToastrService,
                private config: NgSelectModule) {
        this.ubicacionService.provinciaslistar()
            .subscribe((res: any) => {
                this.provincias = res;
            });
        this.ubicacionService.ciudadeslistar()
            .subscribe((res: any) => {
                this.ciudades = res;
            });
        this.ubicacionService.parroquiaslistar().subscribe((res: any) => {
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
        this.crearFormprovincia();
        this.crearFormciudad();
        this.crearFormparroquia();
        this.crearFormbarrio();
    }

    ngOnInit() {
    }
    // Provincia
    crearFormprovincia() {
        this.provinciaGroup = this.fb.group({
            'codigo' : ['', [Validators.required]],
            'nombre' : ['', [Validators.required]]
        });
    }

    storeprovincia() {
        const formData = new FormData();
        formData.append('codigo', this.provinciaGroup.value.codigo);
        formData.append('nombre', this.provinciaGroup.value.nombre.toUpperCase());
        this.ubicacionService.storeprovincias(formData)
            .subscribe((res: any) => {
                this.provincias = res;
                this.toastrService.success('Registrada', 'Provincia')
                this.provinciaGroup.reset();
            }, (error) => {
                this.toastrService.error('Registrada', 'Provincia')
            });
    }
    // ciudad
    crearFormciudad() {
        this.ciudadGroup = this.fb.group({
            'provincia_id': [0, [Validators.required]],
            'codigo' : ['', [Validators.required]],
            'nombre' : ['', [Validators.required]],
        });
    }

    storeciudad() {
        const formData = new FormData();
        formData.append('provincia_id', this.ciudadGroup.value.provincia_id);
        formData.append('codigo', this.ciudadGroup.value.codigo);
        formData.append('nombre', this.ciudadGroup.value.nombre);
        this.ubicacionService.storeciudades(formData)
            .subscribe((res: any) => {
                this.ciudades = res;
                this.toastrService.success('Registrada', 'Ciudad')
                this.ciudadGroup.reset();
            }, (error) => {
                this.toastrService.error('Registrada', 'Ciudad')
            });
    }

    // Parroquias
    crearFormparroquia() {
        this.parroquiaGroup = this.fb.group({
            'ciudad_id' : ['', [Validators.required]],
            'codigo' : ['', [Validators.required]],
            'nombre' : ['', [Validators.required]]
        });
    }

    storeparroquia() {
        const formData = new FormData();
        formData.append('ciudad_id', this.parroquiaGroup.value.ciudad_id);
        formData.append('codigo', this.parroquiaGroup.value.codigo);
        formData.append('nombre', this.parroquiaGroup.value.nombre);
        this.ubicacionService.storeparroquias(formData)
            .subscribe((res: any) => {
                this.toastrService.success('Registrada', 'Parroquia')
                this.parroquiaGroup.reset();
            }, (error) => {
                this.toastrService.error('Registrada', 'Parroquia')
            });
    }

    // barrio
    crearFormbarrio() {
        this.barrioGroup = this.fb.group({
            'parroquia_id' : ['', [Validators.required]],
            'comunidad' : [''],
            'nombre' : ['', [Validators.required]]
        });
    }

    storebarrio() {
        const formData = new FormData();
        formData.append('parroquia_id', this.barrioGroup.value.parroquia_id);
        formData.append('comunidad', this.barrioGroup.value.comunidad);
        formData.append('nombre', this.barrioGroup.value.nombre);
        this.ubicacionService.storebarrios(formData)
            .subscribe((res: any) => {
                this.toastrService.success('Registrado', 'Barrio')
                this.barrioGroup.reset();
            }, (error) => {
                this.toastrService.error('Registrado', 'Barrio')
            });
    }
}
