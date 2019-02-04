import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {TipoSuministroService} from '../tipo-suministro.service';
import {SuministroService} from '../../suministro/suministro.service';

@Component({
  selector: 'app-tipo-suministro-update',
  templateUrl: './tipo-suministro-update.component.html',
  styleUrls: ['./tipo-suministro-update.component.scss']
})
export class TipoSuministroUpdateComponent implements OnInit {

  tipo_suministro_id: number = null;
  tipo_suministro: any = null;
  tipoSuministroGroup: FormGroup;
  suministros: any = null;
  constructor(private tipoSuministroService: TipoSuministroService,
              private suministroService: SuministroService,
              private fb: FormBuilder,
              private router: Router,
              private route: ActivatedRoute) {

    this.route.params.subscribe((param: any) => {
      this.tipo_suministro_id = param.id;
      this.suministroService.listar()
          .subscribe((suministros: any) => {
            this.suministros = suministros;
          });
      this.tipoSuministroService.show(this.tipo_suministro_id)
          .subscribe((res: any) => {
            this.tipo_suministro = res;
            this.crearForm();
          });
    });
  }

  ngOnInit() {
  }

  crearForm() {
    this.tipoSuministroGroup = this.fb.group({
      'suministro_id' : [this.tipo_suministro.suministro_id, [Validators.required]],
      'nombre' : [this.tipo_suministro.nombre, [Validators.required]],
      'descripcion' : [this.tipo_suministro.descripcion, [Validators.required]]
    });
  }

  update() {
    this.tipoSuministroService.update(this.tipo_suministro_id, this.tipoSuministroGroup.value)
        .subscribe((res: any) => {
          this.router.navigate(['/insumos/tipo-suministros']);
        });
  }
}