import { Component, Input } from '@angular/core';
import { Villager } from 'src/app/models/Villager';

@Component({
  selector: 'app-villager',
  templateUrl: './villager.component.html',
  styleUrls: ['./villager.component.css']
})
export class VillagerComponent  {
  @Input() villager:Villager;

  constructor(
  ) {}

  


}
