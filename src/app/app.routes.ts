import { Routes } from '@angular/router';
import { ListComponent } from './features/list/list.component';

export const routes: Routes = [
    //Paths podem ser adicionados aqui o Routes para criarmos um caminho em nosso componente
    {
        path : '',
        component: ListComponent
    }
];
