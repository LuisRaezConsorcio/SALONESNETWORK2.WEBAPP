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
  @Input() paisId!: number | null;
  @Input() fromPais!: boolean;

  postName!: string | null;
  arrayPais: any;
  arraySeccion: any;


  constructor(private messageService: MessageService, private router: Router) { }

  ngOnInit(): void {
    if (this.postId !== null) {
      if (this.fromPais) {
        const post = this.messageService.getPostById(this.postId);
        if (post) {
          this.postName = post.name;
          this.arrayPais = post.pais; // Obtén los países del post
          console.log('Datos del post seleccionado:', this.postName);
          console.log('Datos del post seleccionado:', this.arrayPais);
        }
      }
      else {

        if (this.paisId !== null) {
          const post = this.messageService.getPostById(this.postId);
          const pais = this.messageService.getPaisById(this.postId, this.paisId);
          if(post){
            if (pais) {
              this.postName=post.name;
              this.arraySeccion = pais.seccion
              console.log('Datos del post seleccionado:', this.arraySeccion);
  
            }
          }
          
        }
      }
    }
  }

  getSeccionAsunto(paisId: number): void {
    this.messageService.setSelectedData(this.postId!, paisId);
    this.router.navigate(['Home', 'Seccion']);
  }



}