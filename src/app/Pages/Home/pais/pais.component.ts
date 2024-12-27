import { Component, OnInit } from '@angular/core';
import { SubseccionComponent } from '../../../Components/subseccion/subseccion.component';
import { GLOBAL_IMPORTS } from '../../../global-imports';
import { MessageService } from '../../../Services/message.service';
import { Pais } from '../../../Interfaces/Post.interfaces';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-pais',
  imports: [GLOBAL_IMPORTS,SubseccionComponent],
  templateUrl: './pais.component.html',
  styleUrl: './pais.component.css'
})
export class PaisComponent implements OnInit {
  postId: number | null = null;

  constructor(private messageService: MessageService) {}

  ngOnInit(): void {
    this.messageService.selectedPostId$.subscribe((id) => {
      this.postId = id;
      console.log('Post ID recibido en Pais:', this.postId);
    });
  }

}
