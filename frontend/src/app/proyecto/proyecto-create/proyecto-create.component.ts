import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProyectoService} from '../../proyecto/proyecto.service';
import {TipoProyectoService} from '../../tipo-proyecto/tipo-proyecto.service';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {UbicacionService} from "../../ubicacion/ubicacion.service";

@Component({
  selector: 'app-proyecto-create',
  templateUrl: './proyecto-create.component.html',
  styleUrls: ['./proyecto-create.component.scss']
})
export class ProyectoCreateComponent implements OnInit {
    @ViewChild('imagen') imagen;
    proyectoGroup: FormGroup;
    tipoproyectos: any = null;
    barrios: any = null;
    constructor(private proyectoService: ProyectoService,
                private tipoproyectoService: TipoProyectoService,
                private  barrioService: UbicacionService,
                private router: Router,
                private fb: FormBuilder,
                private toastrService: ToastrService) {
        this.tipoproyectoService.listar().subscribe((res: any) => {
                this.tipoproyectos = res;
            });
        this.barrioService.barrioslistar().subscribe((res: any) => {
          this.barrios = res;
        });
        this.crearForm();
    }
    ngOnInit() {
    }
    crearForm() {
        this.proyectoGroup = this.fb.group({
            'tipo_proyecto_id': [0, [Validators.required]],
            'barrio_id': [0, [Validators.required]],
            'nombre': ['', [Validators.required]],
            'imagen': [''],
            'inicio': ['', [Validators.required]],
            'fin': ['', [Validators.required]],
        });
    }
    store() {
        const imagen = this.imagen.nativeElement;
        const formData = new FormData();
        if (imagen.files[0]) {
            formData.append('imagen', imagen.files[0]);
        }
        formData.append('tipo_proyecto_id', this.proyectoGroup.value.tipo_proyecto_id);
        formData.append('barrio_id', this.proyectoGroup.value.barrio_id);
        formData.append('nombre', this.proyectoGroup.value.nombre);
        formData.append('inicio', this.proyectoGroup.value.inicio);
        formData.append('fin', this.proyectoGroup.value.fin);
        this.proyectoService.store(formData).subscribe((res: any) => {
                this.toastrService.success('Datos Agregados', 'Proyecto');
                this.router.navigate(['/proyectos']);
            }, (error) => {
                this.toastrService.warning('Registrado', 'Proyecto');
            });
    }
}
