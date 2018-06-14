import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  // {
  //   title: 'Início',
  //   icon: 'nb-home',
  //   link: '/pages/dashboard',
  //   home: true,
  // },
  // {
  //   title: 'MÓDULOS',
  //   group: true,
  // },
  {
    title: "CONDÔMINOS",
    icon: "nb-person",
    children: [
      {
        title: "Unidade",
        link: "/pages/condominos/unidade"
      },
      {
        title: "Condômino",
        link: "/pages/condominos/condomino"
      },
      {
        title: "Mapa",
        link: "/pages/condominos/mapa"
      }
    ]
  },
  {
    title: "ADMINISTRACAO",
    icon: "nb-shuffle",
    children: [
      {
        title: "Usuarios",
        link: "/pages/administracao/usuarios"
      }
    ]
  },
  {
    title: "PORTARIA",
    icon: "nb-shuffle",
    children: [
      {
        title: "Visistante",
        link: "/pages/portaria/visitante"
      }
    ]
  },
  {
    title: 'Auth',
    icon: 'nb-locked',
    children: [
      {
        title: 'Login',
        link: '/auth/login',
      },
      {
        title: 'Register',
        link: '/auth/register',
      },
      {
        title: 'Request Password',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
    ],
  },
];
