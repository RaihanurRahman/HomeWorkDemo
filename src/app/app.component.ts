import { OverlayContainer } from '@angular/cdk/overlay';
import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { SharedService } from './shared/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'material-theming';
  theme = 'primary-theme';
  overlay: HTMLElement;
  subscribingToThemeChange: Subscription;


  constructor(private overlayContainer: OverlayContainer,
    private sharedService : SharedService
  ) {
    this.overlay = overlayContainer.getContainerElement();
  }

  ngOnInit(): void {
    this.overlay = this.overlayContainer.getContainerElement();
    this.subscribingToThemeChange =this.sharedService.themeChangerAsObservable.subscribe(theme => {
      this.theme = theme;
    });
  }

  ngOnDestroy(): void {
    this.subscribingToThemeChange.unsubscribe();
  }
}
