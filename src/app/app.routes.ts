import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../app/components/home/home.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { user_routes } from './components/usuarios/usuarios.routes';



const routes: Routes = [
    { path: '', component: HomeComponent },
    { 
        path: 'usuarios/:id', 
        component: UsuariosComponent,
        children: user_routes
    },
    { path: '**', pathMatch:'full', redirectTo:'/' },

   
];


export const app_routes = RouterModule.forRoot(routes);
