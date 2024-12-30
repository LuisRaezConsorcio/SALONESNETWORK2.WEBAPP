import { Component, OnInit } from '@angular/core';
import { GLOBAL_IMPORTS } from '../../../global-imports';
import { SubseccionComponent } from '../../../Components/subseccion/subseccion.component';
import { MessageService } from '../../../Services/message.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-seccion',
  imports: [GLOBAL_IMPORTS, SubseccionComponent],
  templateUrl: './seccion.component.html',
  styleUrl: './seccion.component.css'
})
export class SeccionComponent implements OnInit {
  postId: number | null = null;
  paisId: number | null = null;

  isMessagesRoute = false;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private messageService: MessageService) {

  }

  ngOnInit(): void {
    this.messageService.selectedData$.subscribe((data) => {
      if (data) {
        this.postId = data?.postId;
        this.paisId = data?.paisId
      }
    })

    this.checkIfMessagesRoute();

    // Suscribirnos a los cambios en la ruta activa
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.checkIfMessagesRoute();
    });

  }

  private checkIfMessagesRoute() {
    const currentRoute = this.activatedRoute.snapshot.firstChild?.routeConfig?.path;
    this.isMessagesRoute = currentRoute === 'Mensajes';
  }
}
