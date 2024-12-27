import { Component, Input, OnInit } from '@angular/core';
import { AsuntosComponent } from '../../../Components/asuntos/asuntos.component';
import { BusquedaComponent } from '../../../Components/busqueda/busqueda.component';
import { Post } from '../../../Interfaces/Post.interfaces';
import { MessageService } from '../../../Services/message.service';
import { GLOBAL_IMPORTS } from '../../../global-imports';
import { ContenidoComponent } from '../../../Components/contenido/contenido.component';

@Component({
  selector: 'app-noticias',
  imports: [AsuntosComponent, GLOBAL_IMPORTS, ContenidoComponent],
  templateUrl: './noticias.component.html',
  styleUrl: './noticias.component.css'
})
export class NoticiasComponent implements OnInit{

  post: Post[] = [];
  constructor(private messageService: MessageService){}

  ngOnInit(): void {
    this.messageService.getPosts().subscribe((data)=>{
      this.post=data;
    });
  }

}
