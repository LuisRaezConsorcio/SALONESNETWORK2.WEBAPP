import { Component, OnInit } from '@angular/core';
import { GLOBAL_IMPORTS } from '../../../global-imports';
import { SubseccionComponent } from '../../../Components/subseccion/subseccion.component';
import { MessageService } from '../../../Services/message.service';

@Component({
  selector: 'app-seccion',
  imports: [GLOBAL_IMPORTS, SubseccionComponent],
  templateUrl: './seccion.component.html',
  styleUrl: './seccion.component.css'
})
export class SeccionComponent implements OnInit {
  postId: number | null = null;
  paisId: number | null = null;

  constructor(private messageService: MessageService) {

  }

  ngOnInit(): void {
    this.messageService.selectedData$.subscribe((data) => {
      if (data) {
        this.postId = data?.postId;
        this.paisId = data?.paisId
      }
    })

  }
}
