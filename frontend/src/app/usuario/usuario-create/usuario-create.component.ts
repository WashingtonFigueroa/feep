import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {UsuarioService} from '../usuario.service';
import {CargoService} from '../../cargo/cargo.service';

@Component({
  selector: 'app-usuario-create',
  templateUrl: './usuario-create.component.html',
  styleUrls: ['./usuario-create.component.scss']
})
export class UsuarioCreateComponent implements OnInit {

  cargos: any = null;
  usuarioGroup:  FormGroup;
  constructor(private fb: FormBuilder,
              private router: Router,
              private usuarioService: UsuarioService,
              private cargoService: CargoService) {
    this.cargoService.index()
        .subscribe((res: any) => {
          this.cargos = res;
          this.crearForm();
        });
  }

  ngOnInit() {
  }

  crearForm() {
    this.usuarioGroup = this.fb.group({
      'nombres' : new FormControl('', [Validators.required]),
      'cuenta' : new FormControl('', [Validators.required]),
      'email' : new FormControl(''),
      'cargo_id': new FormControl(0, [Validators.required]),
      'password' : new FormControl('', [Validators.required]),
      'password_repeat' : new FormControl('', [Validators.required])
    });
  }

  store() {
    const password = this.usuarioGroup.value.password;
    const password_repeat = this.usuarioGroup.value.password_repeat;
    if (password === password_repeat) {
      this.usuarioGroup.patchValue({
        'cargo_id' : +this.usuarioGroup.value.cargo_id
      });
      this.usuarioService.store(this.usuarioGroup.value)
          .subscribe((res: any) => {
            alert(res.nombres + ' registrado');
            this.router.navigate(['/usuarios']);
          });
    } else {
      alert('Las contraseñas no coinciden');
      this.usuarioGroup.patchValue({
        'password' : '',
        'password_repeat' : ''
      });
    }
  }
}
