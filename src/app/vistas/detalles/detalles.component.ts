import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../service/api/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HeaderComponent } from '../../plantillas/header/header.component';
import { FooterComponent } from '../../plantillas/footer/footer.component';
@Component({
  selector: 'app-detalles',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent],
  templateUrl: './detalles.component.html',
  styleUrl: './detalles.component.css',
})
export class DetallesComponent {
  constructor(
    private router: Router,
    private active: ActivatedRoute,
    private api: ApiService
  ) {}
  naves: any[] = [];
  personajes: any[] = [];
  planetas: any[] = [];
  Titulo: string = '';
  Episodios: string = '';
  Opening: string = '';
  Director: string = '';
  ngOnInit(): void {
    //let peliculaId = Number(this.active.snapshot.paramMap.get('index'));
    let peliculaId = localStorage.getItem('index')?.toString() ?? '';

    this.api.getPelicula(peliculaId).subscribe((data) => {
      this.Titulo = data.title;
      this.Episodios = data.episode_id;
      this.Opening = data.opening_crawl;
      this.Director = data.director;

      this.api
        .getPeliculaDetalles(data.starships, data.planets, data.characters)
        .subscribe((detalles) => {
          this.naves = detalles.naves.sort(
            (a: { name: string }, b: { name: string }) =>
              a.name.localeCompare(b.name)
          );
          this.personajes = detalles.personajes.sort(
            (a: { name: string }, b: { name: string }) =>
              a.name.localeCompare(b.name)
          );
          this.planetas = detalles.planetas.sort(
            (a: { name: string }, b: { name: string }) =>
              a.name.localeCompare(b.name)
          );
        });
    });
  }
  regresar(): void {
    this.router.navigate(['Listado']);
  }
}
