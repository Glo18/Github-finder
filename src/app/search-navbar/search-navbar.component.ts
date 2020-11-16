import { Component, OnInit,} from '@angular/core';
import { GithubFinderService } from '../github-finder.service';

@Component({
  selector: 'app-search-navbar',
  templateUrl: './search-navbar.component.html',
  styleUrls: ['./search-navbar.component.css']
})
export class SearchNavbarComponent implements OnInit {

  username: string;
  repos: any;
  profile: any;

  constructor(private githubfinderService: GithubFinderService) { 

  }

  findProfile(){
    this.githubfinderService.updateProfile(this.username);
    this.githubfinderService.getProfileDesc().subscribe(profile =>{
      console.log(profile);
      this.profile = profile;
    });
    
    this.githubfinderService.getProfileRepos().subscribe(repos =>{
      console.log(repos);
      this.repos = repos;
    })
  }

  ngOnInit() {
  }

}
