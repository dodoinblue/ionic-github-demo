import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';

import { User } from '../../models/user.interface';
import { USER_LIST } from '../../mocks/user.mocks';
import { Repository } from '../../models/repository.interface';
import { REPOSITORY_LIST } from '../../mocks/repository.mocks';

@Injectable()
export class GithubService {

  private baseUrl: string = "https://api.github.com/users";
  private reposUrl: string = "repos";

  constructor(private http: Http) {
    console.log('Hello GithubService Provider');
  }

  getUserInformation(username: string): Observable<User> {
    return this.http.get(`${this.baseUrl}/${username}`)
    .do(this.logData)
    .map(this.extractData)
    .do(this.logData)
    .catch(this.handleError)
  }

  getRepoInfo(username: string): Observable<Repository[]> {
    return this.http.get(`${this.baseUrl}/${username}/${this.reposUrl}`)
    .do(this.logData)
    .map(this.extractData)
    .do(this.logData)
    .catch(this.handleError)
  }

  mockGetUserInformation(username: string): Observable<User> {
    return Observable.of(USER_LIST.filter(user => user.name === username)[0]);
  }

  mockGetRepos(username: string): Observable<Repository[]> {
    return Observable.of(REPOSITORY_LIST.filter(repo => repo.owner.name === username));
  }

  private logData(response: Response) {
    console.log(response);
  }

  private extractData(response: Response) {
    return response.json();
  }

  private handleError(error: Response | any) {
    return Observable.throw(error.json().error || 'Server Error');
  }

}
