import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  private token: String;

  constructor(private http: HttpClient) {
  }

  getQuery(query: string) {
    const URL = 'https://api.spotify.com/v1/';

    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
      'Content-type': 'application/json'
    });

    return this.http.get(`${URL}${query}`, { headers });
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases')
      .pipe(map(data => data['albums'].items));
  }

  getArtist(id: String) {
    return this.getQuery(`artists/${id}`);
  }

  getTopTracks(id: String) {
    return this.getQuery(`artists/${id}/top-tracks?country=MX`)
      .pipe(map(data => data['tracks']));
  }

  searchArtists(termino: String) {
    return this.getQuery(`search?q=${termino}&type=artist&limit=20`)
      .pipe(map(data => data['artists'].items));
    }

  getTokenSpotify() {
    return this.http.get(`http://localhost:4201/spotify-token`)
      .subscribe(data => this.token = data['token']);
  }

  getToken() {
    return this.token;
  }
}
