import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';

@Injectable({
providedIn: 'root'
})
export class GithubFinderService {
username: string;
accesstoken = '20b066d8e8ecb2517a539ef223f4a9cc22b36a27'

constructor(private http:HttpClient) {
console.log("service works");
this.username = 'Glo18'
}
getProfileDesc(){
  return this.http.get(
    'https://api.github.com/users/' +this.username +'?access_token=' + environment.apiKey);
}

getProfileRepos() {
  return this.http.get(
    'https://api.github.com/users/' +this.username +'/repos?access_token=' + environment.apiKey);
  }
  updateProfile(username:string){
    this.username = username;
  }   



}