import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  @Output() toggleSideNav = new EventEmitter<void>();

  constructor(
     private sharedService : SharedService
   ) { }

  ngOnInit() {
  }

  changeTheme(themeName: string) {
    this.sharedService.emitChangedTheme(themeName);
  }

}
