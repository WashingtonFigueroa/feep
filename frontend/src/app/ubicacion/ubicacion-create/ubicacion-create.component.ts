import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {UbicacionService} from '../ubicacion.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-ubicacion-create',
  templateUrl: './ubicacion-create.component.html',
  styleUrls: ['./ubicacion-create.component.scss']
})
export class UbicacionCreateComponent implements OnInit {

    provinciaGroup:  FormGroup;
    ciudadGroup:  FormGroup;
    barrioGroup:  FormGroup;
    comunidadGroup:  FormGroup;
    parroquiaGroup:  FormGroup;
    provincias: any  = null;
    barrios: any  = null;
    comunidades: any  = null;
    ciudades: any  = null;
    constructor(private fb: FormBuilder,
                private router: Router,
                private ubicacionService: UbicacionService,
                private toastrService: ToastrService) {
        this.ubicacionService.provinciaslistar()
            .subscribe((res: any) => {
                this.provincias = res;
            });
        this.ubicacionService.barrioslistar()
            .subscribe((res: any) => {
                this.barrios = res;
            });
        this.ubicacionService.comunidadeslistar()
            .subscribe((res: any) => {
                this.comunidades = res;
            });
        this.ubicacionService.ciudadeslistar()
            .subscribe((res: any) => {
                this.ciudades = res;
            });
        this.crearFormprovincia();
        this.crearFormciudad();
        this.crearFormbarrio();
        this.crearFormcomunidad();
        this.crearFormparroquia();
    }

    ngOnInit() {
    }
    // Provincia
    crearFormprovincia() {
        this.provinciaGroup = this.fb.group({
            'nombre' : ['', [Validators.required]],
            'descripcion' : [''],
        });
    }

    storeprovincia() {
        const formData = new FormData();
        formData.append('nombre', this.provinciaGroup.value.nombre);
        formData.append('descripcion', this.provinciaGroup.value.descripcion);
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
            'nombre' : ['', [Validators.required]],
            'descripcion' : [''],
        });
    }

    storeciudad() {
        const formData = new FormData();
        formData.append('provincia_id', this.ciudadGroup.value.provincia_id);
        formData.append('nombre', this.ciudadGroup.value.nombre);
        formData.append('descripcion', this.ciudadGroup.value.descripcion);
        this.ubicacionService.storeciudades(formData)
            .subscribe((res: any) => {
                this.ciudades = res;
                this.toastrService.success('Registrada', 'Ciudad')
                this.ciudadGroup.reset();
            }, (error) => {
                this.toastrService.error('Registrada', 'Ciudad')
            });
    }
    // barrio
    crearFormbarrio() {
        this.barrioGroup = this.fb.group({
            'nombre' : ['', [Validators.required]],
            'descripcion' : [''],
        });
    }

    storebarrio() {
        const formData = new FormData();
        formData.append('nombre', this.barrioGroup.value.nombre);
        formData.append('descripcion', this.barrioGroup.value.descripcion);
        this.ubicacionService.storebarrios(formData)
            .subscribe((res: any) => {
                this.barrios = res;
                this.toastrService.success('Registrado', 'Barrio')
                this.barrioGroup.reset();
            }, (error) => {
                this.toastrService.error('Registrado', 'Barrio')
            });
    }
    // comunidad
    crearFormcomunidad() {
        this.comunidadGroup = this.fb.group({
            'barrio_id': [0, [Validators.required]],
            'nombre' : ['', [Validators.required]],
            'pueblo' : ['', [Validators.required]],
            'descripcion' : [''],
        });
    }

    storecomunidad() {
        const formData = new FormData();
        formData.append('barrio_id', this.comunidadGroup.value.barrio_id);
        formData.append('nombre', this.comunidadGroup.value.nombre);
        formData.append('pueblo', this.comunidadGroup.value.pueblo);
        formData.append('descripcion', this.comunidadGroup.value.descripcion);
        this.ubicacionService.storecomunidades(formData)
            .subscribe((res: any) => {
                this.comunidades = res;
                this.toastrService.success('Registrada', 'Comunidad')
                this.comunidadGroup.reset();

            }, (error) => {
                this.toastrService.error('Registrada', 'Comunidad')
            });
    }

    // Parroquias
    crearFormparroquia() {
        this.parroquiaGroup = this.fb.group({
            'comunidad_id': [0, [Validators.required]],
            'ciudad_id' : ['', [Validators.required]],
            'nombre' : ['', [Validators.required]],
            'descripcion' : [''],
        });
    }

    storeparroquia() {
        const formData = new FormData();
        formData.append('comunidad_id', this.parroquiaGroup.value.comunidad_id);
        formData.append('ciudad_id', this.parroquiaGroup.value.ciudad_id);
        formData.append('nombre', this.parroquiaGroup.value.nombre);
        formData.append('descripcion', this.parroquiaGroup.value.descripcion);
        this.ubicacionService.storeparroquias(formData)
            .subscribe((res: any) => {
                this.toastrService.success('Registrada', 'Parroquia')
                this.parroquiaGroup.reset();
            }, (error) => {
                this.toastrService.error('Registrada', 'Parroquia')
            });
    }
}
