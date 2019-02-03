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
    constructor(private fb: FormBuilder,
                private router: Router,
                private ubicacionService: UbicacionService,
                private ToastrService: ToastrService) {
        this.ubicacionService.provinciaslistar()
            .subscribe((res: any) => {
                this.provincias = res;
            });
        this.crearFormprovincia();
        this.crearFormciudad();
    }

    ngOnInit() {
    }

    crearFormprovincia() {
        this.ubicacionGroup = this.fb.group({
            'nombre' : ['', [Validators.required]],
            'descripcion' : [''],
        });
    }

    storeprovincia() {
        this.ubicacionService.storeprovincias(this.ubicacionGroup.value)
            .subscribe((res: any) => {
                this.ToastrService.success('Registrada', 'Provincia')
            });
    }

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
}
