import { Component } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, Event } from '@angular/router';
import { LayoutService } from './shared-module/services/layout.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  isSidebarVisible : boolean = false;
  isLoading : boolean = false;

  constructor(private layoutService: LayoutService, private router : Router) {}

  ngOnInit() {
    this.layoutService.sidebarSource$.subscribe((isVisible) => {
      this.isSidebarVisible = isVisible;
    });

    this.router.events.subscribe((routerEvent : Event) => this.checkRouterEvent(routerEvent))
  }

  private checkRouterEvent(routerEvent : Event) {
    if (routerEvent instanceof NavigationStart) {
      this.isLoading = true;
    } else if (routerEvent instanceof NavigationEnd || routerEvent instanceof NavigationCancel || routerEvent instanceof NavigationError) {
      this.isLoading = false;
    }
  }
}
