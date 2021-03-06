import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class PlatformService {

  constructor(@Inject(PLATFORM_ID) private platformID: any) { }

  public get platformCheck(): boolean {
    return isPlatformBrowser(this.platformID);
  }
}
