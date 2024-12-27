import { Component, Input, OnInit } from '@angular/core';
import { MessageService } from '../../Services/message.service';
import { GLOBAL_IMPORTS } from '../../global-imports';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subseccion',
  imports: [GLOBAL_IMPORTS],
  templateUrl: './subseccion.component.html',
  styleUrl: './subseccion.component.css'
})
export class SubseccionComponent implements OnInit {
  @Input() postId!: number | null;
  postName!: string | null;
  subseccionData: any;
  

  constructor(private messageService: MessageService, private router: Router) { }

  ngOnInit(): void {
    if (this.postId !== null) {
      const post = this.messageService.getPostById(this.postId);
      if (post) {
        this.postName = post.name;
        this.subseccionData = post.pais; // Obtén los países del post
        console.log('Datos del post seleccionado:', this.postName);
        console.log('Datos del post seleccionado:', this.subseccionData);
      }
    }

    this.messageService.selectedData$.subscribe((data) => {
      if (data) {
        const post = this.messageService.getPostById(data.postId);
        if (post) {
          const pais = post.pais.find((p) => p.id === data.paisId);
          if (pais) {
            this.subseccionData = pais.seccion; // Información de las secciones del país
            console.log('Datos de subsección:', this.subseccionData);
          }
        }
      }
    });
  }

  // getSeccionAsunto(paisId: number): void {
  //   if (this.postId !== null) {
  //     console.log(this.messageService.getPaisById(this.postId, paisId)); // Enviar el post ID al servicio
  //     this.router.navigate(['Home', 'Pais', 'Seccion']); // Redirigir al componente pais
  //   }
  // }

  getSeccionAsunto(postId: number, paisId: number): void {
    this.messageService.setSelectedData(postId, paisId);
    this.router.navigate(['Home', 'Seccion']);
  }


}