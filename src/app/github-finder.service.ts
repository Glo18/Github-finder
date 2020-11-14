import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class GithubFinderService {
username: string;
clientsecret = '3eb032449485b957ebfddf2c5e38c5f594350318'

  constructor(private http:HttpClient) {
    console.log("service works");
    this.username = 'Glo18'
  }

 getProfileDesc(){
   const description = 'This is a website';
   return this.http.get('https://api.github.com/users/${description}/repos')
 }
 
  getProfileRepos(){
    const username = 'Glo18';
    return this.http.get('https://api.github.com/users/${username}/repos');
  }

  updateProfile(username:string){
    this.username = username;
  }
}
