import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {UbicacionService} from "../ubicacion.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-ubicacion-create',
  templateUrl: './ubicacion-create.component.html',
  styleUrls: ['./ubicacion-create.component.scss']
})
export class UbicacionCreateComponent implements OnInit {

    ubicacionGroup:  FormGroup;
    provincias = '';
    barrios = '';
    comunidades = '';
    ciudades = '';
    constructor(private fb: FormBuilder,
                private router: Router,
                private ubicacionService: UbicacionService,
                private ToastrService: ToastrService) {
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
//Provincia
    crearFormprovincia() {
        this.ubicacionGroup = this.fb.group({
            'nombre' : ['', [Validators.required]],
            'descripcion' : [''],
        });
    }

    storeprovincia() {
        const formData = new FormData();
        formData.append('nombre', this.ubicacionGroup.value.nombre);
        formData.append('descripcion', this.ubicacionGroup.value.descripcion);
        this.ubicacionService.storeprovincias(formData)
            .subscribe((res: any) => {
                this.ToastrService.success('Registrada', 'Provincia')
            }, (error) => {
                this.ToastrService.error('Registrada', 'Provincia')
            });
    }
//ciudad
    crearFormciudad() {
        this.ubicacionGroup = this.fb.group({
            'provincia_id': [0, [Validators.required]],
            'nombre' : ['', [Validators.required]],
            'descripcion' : [''],
        });
    }

    storeciudad() {
        const formData = new FormData();
        formData.append('provincia_id', this.ubicacionGroup.value.provincia_id);
        formData.append('nombre', this.ubicacionGroup.value.nombre);
        formData.append('descripcion', this.ubicacionGroup.value.descripcion);
        this.ubicacionService.storeciudades(formData)
            .subscribe((res: any) => {
                this.ToastrService.success('Registrada', 'Ciudad')
            }, (error) => {
                this.ToastrService.error('Registrada', 'Ciudad')
            });
    }
//barrio
    crearFormbarrio() {
        this.ubicacionGroup = this.fb.group({
            'nombre' : ['', [Validators.required]],
            'descripcion' : [''],
        });
    }

    storebarrio() {
        const formData = new FormData();
        formData.append('nombre', this.ubicacionGroup.value.nombre);
        formData.append('descripcion', this.ubicacionGroup.value.descripcion);
        this.ubicacionService.storebarrios(formData)
            .subscribe((res: any) => {
                this.ToastrService.success('Registrado', 'Barrio')
            }, (error) => {
                this.ToastrService.error('Registrado', 'Barrio')
            });
    }
    //comunidad
    crearFormcomunidad() {
        this.ubicacionGroup = this.fb.group({
            'barrio_id': [0, [Validators.required]],
            'nombre' : ['', [Validators.required]],
            'pueblo' : ['', [Validators.required]],
            'descripcion' : [''],
        });
    }

    storecomunidad() {
        const formData = new FormData();
        formData.append('barrio_id', this.ubicacionGroup.value.barrio_id);
        formData.append('nombre', this.ubicacionGroup.value.nombre);
        formData.append('pueblo', this.ubicacionGroup.value.pueblo);
        formData.append('descripcion', this.ubicacionGroup.value.descripcion);
        this.ubicacionService.storecomunidades(formData)
            .subscribe((res: any) => {
                this.ToastrService.success('Registrada', 'Comunidad')
            }, (error) => {
                this.ToastrService.error('Registrada', 'Comunidad')
            });
    }

    //Parroquias
    crearFormparroquia() {
        this.ubicacionGroup = this.fb.group({
            'comunidad_id': [0, [Validators.required]],
            'ciudad_id' : ['', [Validators.required]],
            'nombre' : ['', [Validators.required]],
            'descripcion' : [''],
        });
    }

    storeparroquia() {
        const formData = new FormData();
        formData.append('comunidad_id', this.ubicacionGroup.value.comunidad_id);
        formData.append('ciudad_id', this.ubicacionGroup.value.ciudad_id);
        formData.append('nombre', this.ubicacionGroup.value.nombre);
        formData.append('descripcion', this.ubicacionGroup.value.descripcion);
        this.ubicacionService.storeparroquias(formData)
            .subscribe((res: any) => {
                this.ToastrService.success('Registrada', 'Parroquia')
            }, (error) => {
                this.ToastrService.error('Registrada', 'Parroquia')
            });
    }
}
