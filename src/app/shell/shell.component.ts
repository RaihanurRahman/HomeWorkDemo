import { Component, OnInit, NgZone, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';
import { Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

const SMALL_WIDTH_BREAKPOINT = 959;
@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {
  menuActive = false;
  private mediaMatcher: MediaQueryList = matchMedia(
    `(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`
  );

  constructor(
    zone: NgZone,
    private router: Router,
    @Inject(DOCUMENT) document
  ) {
    this.mediaMatcher.addListener(mql =>
      zone.run(() => this.mediaMatcher = matchMedia(`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`)));
  }

  @ViewChild(MatSidenav)
  sidenav: MatSidenav;
  ngOnInit() {
    this.router.events.subscribe(() => {
      if (this.isScreenSmall()) {
        this.sidenav.close();
      }
    });
  }

  isScreenSmall(): boolean {
    return this.mediaMatcher.matches;
  }

  menuCallapse() {
    this.menuActive = !this.menuActive;
  }
}
