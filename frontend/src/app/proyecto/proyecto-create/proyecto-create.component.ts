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
    @ViewChild('preview') preview;
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
            this.barrios = [];
            res.forEach(
                (barrio:any)=>{
                    this.barrios.push({
                        barrio_id: barrio.barrio_id,
                        nombre:  barrio.ciudad + ' - ' + barrio.parroquia + ' - ' + barrio.nombre
                    });
                }
            )
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
        if (this.proyectoGroup.value.fin >= this.proyectoGroup.value.inicio) {
            const imagen = this.imagen.nativeElement;
            const formData = new FormData();
            if (imagen.files[0]) {
                formData.append('imagen', imagen.files[0]);
            }
            formData.append('tipo_proyecto_id', this.proyectoGroup.value.tipo_proyecto_id);
            formData.append('barrio_id', this.proyectoGroup.value.barrio_id);
            formData.append('nombre', this.proyectoGroup.value.nombre.toUpperCase());
            formData.append('inicio', this.proyectoGroup.value.inicio);
            formData.append('fin', this.proyectoGroup.value.fin);
            this.proyectoService.store(formData).subscribe((res: any) => {
                this.toastrService.success('Agregado', 'Proyecto');
                this.router.navigate(['/proyectos']);
            }, (error) => {
                this.toastrService.warning('Registrado', 'Proyecto');
            });
        } else {
            this.toastrService.warning('Rango de Fechas', 'Error');
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
