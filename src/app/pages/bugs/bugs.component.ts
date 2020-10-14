import { Component, OnInit } from '@angular/core';
import { Bug } from 'src/app/models/Bug';
import { GlobalRequestService } from 'src/app/services/global-request.service';

@Component({
  selector: 'app-bugs',
  templateUrl: './bugs.component.html',
  styleUrls: ['./bugs.component.css']
})
export class BugsComponent {

  public bugs: Bug[];
  
  constructor(
    private _requeser: GlobalRequestService,
  ) {
    this.fetchBugs();
  }

  private async fetchBugs() {
    try {
      var response = await this._requeser.get({
        url: this._requeser.bugs,
        params: "",
      });

      this.bugs = Bug.fromJSONCollection(response);

    } catch (error) {
      console.log("Controller", error);
    }

  }
}
