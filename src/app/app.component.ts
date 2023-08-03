import {Component, OnInit} from "@angular/core";
import {NavigationEnd, NavigationStart, Router} from "@angular/router";
import {filter, map, merge} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  loading$ = this.router.events.pipe(
    filter(event => event instanceof NavigationStart || event instanceof NavigationEnd),
    map(event => event instanceof NavigationStart),
  );

  constructor (
    private router: Router,
  ) {
  }

  ngOnInit(): void {
  }
}
