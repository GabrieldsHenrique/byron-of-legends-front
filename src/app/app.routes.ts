import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: '',
    loadComponent: () => import('./externo/externo.component').then((m) => m.ExternoComponent),
  },
  {
    path: 'login',
    loadComponent: () => import('./externo/login/login.component').then((m) => m.LoginComponent),
  },
  {
    path: 'cadastrar',
    loadComponent: () => import('./externo/cadastrar/cadastrar.component').then((m) => m.CadastrarComponent),
  },
  {
    path: 'recuperar-senha',
    loadComponent: () => import('./externo/recuperar-senha/recuperar-senha.component').then((m) => m.RecuperarSenhaComponent),
  },
  {
    path: 'redefinir-senha/:token',
    loadComponent: () => import('./externo/redefinir-senha/redefinir-senha.component').then((m) => m.RedefinirSenhaComponent),
  },
];
