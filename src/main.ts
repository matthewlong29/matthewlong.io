import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DotioModule } from './app/dotio.module';

enableProdMode();
platformBrowserDynamic()
  .bootstrapModule(DotioModule)
  .catch(err => {
    console.error('¯\\_(ツ)_/¯');
    console.error(err);
  })
  .finally(() => {
    console.log('(⊙_⊙)');
  });
