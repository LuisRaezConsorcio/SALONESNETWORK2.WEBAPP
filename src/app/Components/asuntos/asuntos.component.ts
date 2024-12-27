import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Post } from '../../Interfaces/Post.interfaces';
import { MessageService } from '../../Services/message.service';
import { GLOBAL_IMPORTS } from '../../global-imports';

@Component({
  selector: 'app-asuntos',
  imports: [GLOBAL_IMPORTS],
  templateUrl: './asuntos.component.html',
  styleUrl: './asuntos.component.css'
})
export class AsuntosComponent implements OnInit {

  @Input() data!: any;
  groupedData: Post[][] = []; // Matriz bidimensional


  constructor(private router: Router, private activatedRoute:ActivatedRoute, private messageService: MessageService){}

  ngOnInit(): void {
   console.log(this.data)
   if (this.data) {
    this.groupedData = this.groupIntoRows(this.data, 4); // Agrupa en filas de 4
  }
    
  }

  // Agrupa un arreglo en filas de "columns" columnas
  groupIntoRows(data: any[], columns: number): any[][] {
    const rows: any[][] = [];
    for (let i = 0; i < data.length; i += columns) {
      rows.push(data.slice(i, i + columns));
    }
    return rows;
  }

  getSeccionAsunto(postId: number): void {
    console.log(`Asunto seleccionado: ID=${postId}`);
    this.messageService.setSelectedPostId(postId); // Enviar el post ID al servicio
    this.router.navigate(['Home', 'Pais']); // Redirigir al componente pais
  }

}
