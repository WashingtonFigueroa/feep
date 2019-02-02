import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TipoInsumoService} from '../tipo-insumo.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tipo-insumo-create',
  templateUrl: './tipo-insumo-create.component.html',
  styleUrls: ['./tipo-insumo-create.component.scss']
})
export class TipoInsumoCreateComponent implements OnInit {

  tipoInsumoGroup:  FormGroup;
  constructor(private fb: FormBuilder,
              private router: Router,
              private tipoInsumoService: TipoInsumoService) {
    this.crearForm();
  }

  ngOnInit() {
  }

  crearForm() {
    this.tipoInsumoGroup = this.fb.group({
      'nombre' : ['', [Validators.required]],
      'descripcion' : ['', [Validators.required]],
    });
  }

  store() {
    this.tipoInsumoService.store(this.tipoInsumoGroup.value)
        .subscribe((res: any) => {
          alert(res.nombre + ' registrado');
          this.router.navigate(['/tipo-insumos']);
        });
  }
}
