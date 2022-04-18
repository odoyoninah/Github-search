import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {
results!: any;
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
}
