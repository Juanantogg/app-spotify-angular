import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent implements OnInit {

  public artist: any;
  public topTracks: any;
  public loading: Boolean = true;

  constructor(
    private activatedRoute: ActivatedRoute,
    private spotifyService: SpotifyService
  ) {
    this.activatedRoute.params
      .subscribe(params => {
        this.getArtist(params.id);
        this.getTopTracks(params.id);
    });
  }

  private getArtist(id) {
    this.spotifyService
      .getArtist(id)
      .subscribe(res => {
        this.artist = res;
        this.loading = false;
    });
  }

  private getTopTracks(id) {
    this.spotifyService
      .getTopTracks(id)
      .subscribe(res => {
        this.topTracks = res;
      });
  }

  ngOnInit() {
  }

}
