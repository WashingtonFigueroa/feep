import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProyectoService} from '../../proyecto/proyecto.service';
import {TipoProyectoService} from '../../tipo-proyecto/tipo-proyecto.service';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {environment} from '../../../environments/environment.prod';

@Component({
  selector: 'app-proyecto-create',
  templateUrl: './proyecto-create.component.html',
  styleUrls: ['./proyecto-create.component.scss']
})
export class ProyectoCreateComponent implements OnInit {
    @ViewChild('imagen') imagen;
    @ViewChild('preview') preview;
    proyectoGroup: FormGroup;
    tipoproyectos: any = null;
    url_base = environment.servidor + 'proyectos-imagen/';
    constructor(private proyectoService: ProyectoService,
                private tipoproyectoService: TipoProyectoService,
                private router: Router,
                private fb: FormBuilder,
                private toastrService: ToastrService) {
        this.tipoproyectoService.listar().subscribe((res: any) => {
                this.tipoproyectos = res;
            });
        this.crearForm();
    }
    ngOnInit() {
    }
    crearForm() {
        this.proyectoGroup = this.fb.group({
            'tipo_proyecto_id': [1, [Validators.required]],
            'nombre': ['', [Validators.required]],
            'ubicacion': ['', [Validators.required]],
            'imagen': [''],
            'inicio': ['', [Validators.required]],
            'fin': ['', [Validators.required]],
        });
    }
    store() {
        if (this.proyectoGroup.value.fin >= this.proyectoGroup.value.inicio) {
            const imagen = this.imagen.nativeElement;
            const formData = new FormData();
            if (imagen.files[0]) {
                formData.append('imagen', imagen.files[0]);
            }
            formData.append('tipo_proyecto_id', this.proyectoGroup.value.tipo_proyecto_id);
            formData.append('nombre', this.proyectoGroup.value.nombre.toUpperCase());
            formData.append('ubicacion', this.proyectoGroup.value.ubicacion.toUpperCase());
            formData.append('inicio', this.proyectoGroup.value.inicio);
            formData.append('fin', this.proyectoGroup.value.fin);
            this.proyectoService.store(formData).subscribe((res: any) => {
                this.toastrService.success('Proyecto agregado exitosamente.', '', {
                    timeOut: 4000,
                    closeButton: true,
                    enableHtml: true,
                    toastClass: 'alert alert-success alert-with-icon',
                    positionClass: 'toast-top-right'
                });
                this.router.navigate(['/proyectos']);
            }, (error) => {
                this.toastrService.warning('Datos duplicados.', '', {
                    timeOut: 4000,
                    closeButton: true,
                    enableHtml: true,
                    toastClass: 'alert alert-warning alert-with-icon',
                    positionClass: 'toast-top-right'
                });
            });
        } else {
            this.toastrService.warning('Rango de fechas incorrecto.', '', {
                timeOut: 8000,
                closeButton: true,
                enableHtml: true,
                toastClass: 'alert alert-warning alert-with-icon',
                positionClass: 'toast-top-right'
            });
        }
    }
    loadImage() {
        const imagen = this.imagen.nativeElement;
        const reader = new FileReader();
        reader.onload = (e: any) => {
            this.preview.nativeElement.src = e.target.result;
        };
        reader.readAsDataURL(imagen.files[0]);
    }
}
