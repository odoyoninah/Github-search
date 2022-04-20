import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Git } from './git';
import { GitClass } from './git-class';
import { ItemsClass } from './items-class';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
results!: any;
repoResultsArray!: any[];
  constructor(private http: HttpClient) { }
  getUser(username: string) {
    return this.http.get('https://api.github.com/users/' + username )
  }
  getRepos(reponame: string) {
    let promise = new Promise((resolve, reject) => {
      this.http.get<Git>('https://api.github.com/search/repositories?q=' + reponame,{
        headers:{Authorization: 'token ' + environment.apikey}
      }).subscribe({
        next: (data:any) =>{
          console.log(data)
          this.repoResultsArray= data.items;
          resolve(data);
        },
        error: (err:any)=>{
          console.log(err);
          reject(err);
        },
        complete: ()=>{
          console.log('complete');
        }
        
      })
      


      

      });
      return promise;
  
    }
}
