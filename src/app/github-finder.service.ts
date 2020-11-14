import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class GithubFinderService {

  constructor(private http:HttpClient) { }

 getProfileDesc(){
   const description = 'This is a website';
   return this.http.get('https://api.github.com/users/${description}/repos')
 }
 
  getProfileRepos(){
    const username = 'Glo18';
    return this.http.get('https://api.github.com/users/${username}/repos');
  }
}
