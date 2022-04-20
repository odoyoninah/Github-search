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
searchRepo(searchTerm2: string) {
this.searchService2.getRepos(searchTerm2).then(
  (successful: any)=>{
    console.log('successful');
    this.repoResults = this.searchService2.repoResultsArray;
    console.log(this.repoResults)

  },
  (err: any)=>{
    console.log('err');
  }

)
}
}
