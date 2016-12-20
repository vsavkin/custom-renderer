// import polyfills
import 'core-js/es7/reflect'
import 'zone.js/dist/zone'

// import Angular
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {NgModule, Component, Renderer, ElementRef} from "@angular/core";
import {CustomBrowserPlatform} from "./custom_browser_platform";

@Component({
  selector: 'child',
  template: `
    ChildCmp
  `
})
class ChildCmp {
  constructor(renderer: Renderer, ref: ElementRef) {
    renderer.setElementProperty(ref.nativeElement, "someProp", 123);
  }
}

@Component({
  selector: 'app',
  template: `
    AppCmp [
      <child></child>
    ]
  `
})
class AppCmp {}

@NgModule({
  imports: [CustomBrowserPlatform],
  declarations: [ChildCmp, AppCmp],
  bootstrap: [AppCmp]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);