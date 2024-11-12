import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
    provideZoneChangeDetection({eventCoalescing: true}), provideAnimationsAsync(),
    //O que eu quero oferecer globalmente, fetchs de HTTP, etc eu posso colocar aqui.
  ]
};
