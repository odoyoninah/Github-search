import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';
import { ItemsClass } from '../items-class';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {
results!: any;
  searchService2: any;
  constructor(public searchService: GithubService) { }

  ngOnInit(): void {
  }
searchGithub(searchTerm: string) {
  this.searchService.getUser(searchTerm).subscribe({
    next: (data: any) => {
      this.results = data;
      console.log(this.results);
    }
  });

}
repoResults!: ItemsClass[];
searchRepo(searchTerm: string) {
this.searchService.getRepos(searchTerm).then(
  (_successful: any)=>{
    console.log('successful');
    this.repoResults = this.searchService.repoResultsArray;
    console.log(this.repoResults)

  },
  (_err: any)=>{
    console.log('err');
  }

)
}
}
