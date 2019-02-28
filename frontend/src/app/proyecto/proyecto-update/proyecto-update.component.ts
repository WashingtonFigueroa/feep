import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ProyectoService} from '../../proyecto/proyecto.service';
import { TipoProyectoService} from '../../tipo-proyecto/tipo-proyecto.service';
import { ActivatedRoute, Router} from '@angular/router';
import { ToastrService} from 'ngx-toastr';
import { UbicacionService} from '../../ubicacion/ubicacion.service';

@Component({
  selector: 'app-proyecto-update',
  templateUrl: './proyecto-update.component.html',
  styleUrls: ['./proyecto-update.component.scss']
})
export class ProyectoUpdateComponent implements OnInit {
    proyecto_id: number = null;
    proyecto: any = null;
    proyectoGroup: FormGroup;
    tipoproyectos: any = null;
    barrios: any = null;
    constructor(private proyectoService: ProyectoService,
                private tipoproyectoService: TipoProyectoService,
                private barrioService: UbicacionService,
                private fb: FormBuilder,
                private router: Router,
                private route: ActivatedRoute,
                private toastrService: ToastrService) {
        this.tipoproyectoService.listar()
            .subscribe((res: any) => {
                this.tipoproyectos = res;
            });
        this.barrioService.barrioslistar()
            .subscribe((res: any) => {
                this.barrios = res;
            });
        this.route.params.subscribe((param: any) => {
            this.proyecto_id = param.id;
            this.proyectoService.show(this.proyecto_id).subscribe((res: any) => {
                    this.proyecto = res;
                    this.crearForm(res);
                });
        });
    }
    ngOnInit() {
    }
    crearForm(proyecto) {
        this.proyectoGroup = this.fb.group({
            'tipo_proyecto_id': [proyecto.tipo_proyecto_id, [Validators.required]],
            'barrio_id': [proyecto.barrio_id, [Validators.required]],
            'nombre' : [proyecto.nombre, [Validators.required]],
            'inicio': [proyecto.inicio, [Validators.required]],
            'fin': [proyecto.fin, [Validators.required]],
        });
    }
    update() {
        this.proyectoService.update(this.proyecto_id, this.proyectoGroup.value).subscribe((res: any) => {
                this.toastrService.success('Datos Actualizados', 'Proyecto')
                this.router.navigate(['/proyectos']);
            });
    }
}
