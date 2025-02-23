import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../../plantillas/footer/footer.component';
import { HeaderComponent } from '../../plantillas/header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
import {
  FormGroup,
  FormControl,
  Validators,
  ValidationErrors,
  AbstractControl,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  imports: [
    HeaderComponent,
    FooterComponent,
    ReactiveFormsModule,
    CommonModule,
  ],
  standalone: true,
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css',
})
export class FormularioComponent {
  formulario: FormGroup;

  // Usamos el encadenamiento opcional para evitar el error de null o undefined
  get nombre() {
    return this.formulario?.get('nombre');
  }

  get apellido() {
    return this.formulario?.get('apellido');
  }

  get fecha() {
    return this.formulario?.get('fecha');
  }

  constructor(private router: Router) {
    this.formulario = new FormGroup({
      nombre: new FormControl('', Validators.required),
      apellido: new FormControl('', Validators.required),
      fecha: new FormControl('', [Validators.required, this.fechaValida]),
    });
  }

  fechaValida(control: AbstractControl): ValidationErrors | null {
    const fecha = new Date(control.value);
    const hoy = new Date();

    if (fecha > hoy) {
      return { fechaInvalida: true };
    }

    return null;
  }

  calcularFecha(fecha: Date) {
    const hoy = new Date();
    const FechaNac = new Date(fecha);

    let edad = hoy.getFullYear() - FechaNac.getFullYear();

    const mensaje = edad >= 18 ? 'Es mayor de edad' : 'Es menor de edad';

    return mensaje;
  }

  Guardar(): void {
    if (this.formulario.invalid) return;
    //console.log(this.formulario.value);
    const mensaje = this.calcularFecha(this.formulario.value.fecha);
    console.log(
      `\nNombre: ${this.formulario.value.nombre}\n
      Apellido: ${this.formulario.value.apellido}\n
      Fecha Nacimiento: ${this.formulario.value.fecha}\n
      Mensaje: ${mensaje}
      `
    );
  }

  regresar(): void {
    this.router.navigate(['Listado']);
  }
}
