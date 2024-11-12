import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withFetch } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(
      withFetch() //Provê uma API moderna que possui features modernas como load progressivo em tempo real.
                  //Outras configs: https://angular.dev/guide/http/setup
    ),
    provideRouter(routes),
    provideZoneChangeDetection({eventCoalescing: true}), provideAnimationsAsync(),
    //O que eu quero oferecer globalmente, fetchs de HTTP, etc eu posso colocar aqui.

  ]
};
