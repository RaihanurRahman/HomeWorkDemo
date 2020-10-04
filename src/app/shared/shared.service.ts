import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private themeChanger = new Subject<string>();
  themeChangerAsObservable = this.themeChanger.asObservable();

  constructor() { }
  emitChangedTheme(themeName: string) {
    this.themeChanger.next(themeName);
  }

}
