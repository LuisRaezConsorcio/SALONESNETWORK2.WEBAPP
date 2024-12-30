import { Routes } from '@angular/router'
import { MensajesComponent } from './mensajes/mensajes.component';

export default [
    {
        path: '',
        loadComponent: () =>
            import('./home/home.component').then((m) => m.HomeComponent),
        children: [
            {
                path: '',
                redirectTo: 'Noticias', // Redirige automáticamente a Noticias cuando se accede a /Home
                pathMatch: 'full',
            },
            {
                path: 'Noticias',
                data: { breadcrumb: 'Noticias' },
                loadComponent: () =>
                    import('./noticias/noticias.component').then((m) => m.NoticiasComponent),
            },
            {
                path: 'Pais',
                data: { breadcrumb: 'Pais' },
                loadComponent: () =>
                    import('./pais/pais.component').then((m) => m.PaisComponent),
            },
            {
                path: 'Secciones',
                data: { breadcrumb: 'Secciones' },

                loadComponent: () =>
                    import('./seccion/seccion.component').then((m) => m.SeccionComponent),
                children: [
                  {
                    path: 'Mensajes',
                    component:MensajesComponent
                  }
                ]
            },
            // {
            //     path: 'Mensajes',
            //     data: { breadcrumb: 'Mensajes' },

            //     loadComponent: () =>
            //         import('./mensajes/mensajes.component').then((m) => m.MensajesComponent),
            // }

        ]
    },

] as Routes;