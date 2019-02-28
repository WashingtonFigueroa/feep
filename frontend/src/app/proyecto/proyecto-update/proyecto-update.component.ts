import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { TipoProyectoService} from '../../tipo-proyecto/tipo-proyecto.service';
import { ActivatedRoute, Router} from '@angular/router';
import { ToastrService} from 'ngx-toastr';
import { UbicacionService} from '../../ubicacion/ubicacion.service';
import {ProyectoService} from '../proyecto.service';

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
            this.proyectoService.show(this.proyecto_id)
                .subscribe((res: any) => {
                    this.proyecto = res;
                    this.crearForm(res);
                });
        });
    }
    ngOnInit() {
    }
    crearForm(proyecto: any) {
        this.proyectoGroup = this.fb.group({
            'tipo_proyecto_id': new FormControl(proyecto.tipo_proyecto_id, [Validators.required]),
            'barrio_id': new FormControl(proyecto.barrio_id, [Validators.required]),
            'nombre' : new FormControl(proyecto.nombre, [Validators.required]),
            'inicio': new FormControl(proyecto.inicio, [Validators.required]),
            'fin': new FormControl(proyecto.fin, [Validators.required])
        });
    }
    update() {
        this.proyectoService.update(this.proyecto_id, this.proyectoGroup.value).subscribe((res: any) => {
                this.toastrService.success('Datos Actualizados', 'Proyecto')
                this.router.navigate(['/proyectos']);
            });
    }
}
