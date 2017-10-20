import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GithubService } from '../../providers/github-service/github-service';
import { User } from '../../models/user.interface';
import { Repository } from '../../models/repository.interface';
@IonicPage()
@Component({
  selector: 'page-profile-search-result',
  templateUrl: 'profile-search-result.html',
})
export class ProfileSearchResultPage {

  username: string;
  user: User;
  repos: Repository[];

  constructor(private github: GithubService, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillLoad() {
    this.username = this.navParams.get('username');
    if (this.username) {
      this.getUserInformation();
    }
  }

  getUserInformation(): void {
    this.github.mockGetUserInformation(this.username).subscribe((data: User) => this.user = data);
    this.github.mockGetRepos(this.username).subscribe((data: Repository[]) => this.repos = data);
  }

}
