import { Route } from '@angular/compiler/src/core';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ){}

  public menuItem = [
    {
      title: "Villagers",
      route :"villagers",
      click: () => this.router.navigate(["villagers"]),
    },
    {
      title: "Bugs",
      route :"bugs",
      click: () => this.router.navigate(["bugs"]),
    },
    {
      title: "Fish",
      route :"fish",
      click: () => this.router.navigate(["fish"]),
    },
    {
      title: "Songs",
      route :"songs",
      click: () => this.router.navigate(["songs"]),
    },
    {
      title: "Fossils",
      route :"fossils",
      click: () => this.router.navigate(["fossils"]),
    },
  ];

}
