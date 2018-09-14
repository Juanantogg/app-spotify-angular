import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {
  public newReleases: any;
  public loading: Boolean = true;

  constructor( private spotifyService: SpotifyService ) {
    this.spotifyService
      .getNewReleases()
      .subscribe(res => {
        this.newReleases = res;

        setTimeout(() => {
          this.loading = false;
        }, 500);
      });
  }

}
