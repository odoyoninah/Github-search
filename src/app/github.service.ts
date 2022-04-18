import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
results!: any;
  constructor(private http: HttpClient) { }
  getUser(username: string) {
    return this.http.get('https://api.github.com/users/' + username )
  }
}
