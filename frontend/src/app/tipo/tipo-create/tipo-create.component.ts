import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {TipoSuministroService} from '../../tipo-suministro/tipo-suministro.service';
import {TipoService} from '../tipo.service';

@Component({
  selector: 'app-tipo-create',
  templateUrl: './tipo-create.component.html',
  styleUrls: ['./tipo-create.component.scss']
})
export class TipoCreateComponent implements OnInit {
  tipoGroup:  FormGroup;
  tipo_suministros: any = null;

  constructor(private fb: FormBuilder,
              private router: Router,
              private tipoSuministroService: TipoSuministroService,
              private tipoService: TipoService) {
    this.tipoSuministroService.listar()
        .subscribe((res: any) => {
          this.tipo_suministros = res;
          this.crearForm();
        });
  }

  ngOnInit() {
  }

  crearForm() {
    this.tipoGroup = this.fb.group({
      'tipo_suministro_id' : [0, [Validators.required]],
      'nombre' : ['', [Validators.required]],
      'descripcion' : ['', [Validators.required]]
    });
  }

  store() {
    this.tipoService.store(this.tipoGroup.value)
        .subscribe((res: any) => {
          alert(res.nombre + ' registrado');
          this.router.navigate(['/insumos/tipos']);
        });
  }
}
