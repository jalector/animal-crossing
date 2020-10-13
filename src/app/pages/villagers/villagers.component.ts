import { Component, OnInit } from '@angular/core';
import { Villager } from 'src/app/models/Villager';
import { GlobalRequestService } from 'src/app/services/global-request.service';

@Component({
  selector: 'app-villagers',
  templateUrl: './villagers.component.html',
  styleUrls: ['./villagers.component.css']
})
export class VillagersComponent {

  public villagers: Villager[];
  constructor(
    private _requeser: GlobalRequestService,
  ) {
    this.fetchVillagers();
  }

  private async fetchVillagers() {
    try {
      var response = await this._requeser.get({
        url: this._requeser.villagers,
        params: "",
      });

      this.villagers = Villager.fromJSONCollection(response);
    } catch (error) {
      console.log(error);

    }

  }

}
