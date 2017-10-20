import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GithubService } from '../../providers/github-service/github-service';
import { User } from '../../models/user.interface';

@IonicPage()
@Component({
  selector: 'page-profile-search-result',
  templateUrl: 'profile-search-result.html',
})
export class ProfileSearchResultPage {

  username: string;
  user: User;

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
  }

}
