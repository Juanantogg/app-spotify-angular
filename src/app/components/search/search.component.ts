import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  public artists: any;
  public contador: any = 5;
  public loading: Boolean = false;
  public showContador: Boolean = false;
  private intervalo: any;
  private termino: String;

  constructor(private spotifyService: SpotifyService) { }

  private iniciarContador() {
    this.intervalo = setInterval(() => {
      this.contador--;

      if (this.contador === 0) {
        this.loading = true;

        setTimeout(() => {
          this.showContador = false;
        }, 500);

        this.detenerContador();
        this.spotifyService.searchArtists(this.termino)
          .subscribe(res => {
            this.artists = res;
            setTimeout(() => {
              this.loading = false;
            }, 500);
          });
      }
    }, 150);
  }

  private detenerContador() {
    clearInterval(this.intervalo);
    // this.showContador = false;
  }

  buscar(event: KeyboardEvent, valor: String) {
    this.contador = 5;
    this.termino = valor;
    this.showContador = true;
    this.detenerContador();
    this.iniciarContador();
  }

  ngOnInit() {
  }

}
