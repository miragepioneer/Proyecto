import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../service/api/api.service';
import { Router } from '@angular/router';
import { FooterComponent } from '../../plantillas/footer/footer.component';
import { HeaderComponent } from '../../plantillas/header/header.component';

@Component({
  selector: 'app-listado',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent],
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css',
})
export class ListadoComponent {
  constructor(private api: ApiService, private router: Router) {}
  peliculas: any;

  ngOnInit(): void {
    localStorage.removeItem('index');
    this.api.getAllPeliculas().subscribe((data) => {
      this.peliculas = data.results.sort((a: any, b: any) => {
        return (
          new Date(b.release_date).getTime() -
          new Date(a.release_date).getTime()
        );
      });
    });
  }

  detallesPelicula(index: string): void {
    localStorage.setItem('index', index);
    this.router.navigate(['Detalles']);
  }

  ejercicio2(): void {
    this.router.navigate(['Formulario']);
  }
}
