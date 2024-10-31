import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
    provideZoneChangeDetection({eventCoalescing: true}),
    //O que eu quero oferecer globalmente, fetchs de HTTP, etc eu posso colocar aqui.
  ]
};
