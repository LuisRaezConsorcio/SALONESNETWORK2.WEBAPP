import { Component } from '@angular/core';
import { GLOBAL_IMPORTS } from '../../../global-imports';
import { SubseccionComponent } from '../../../Components/subseccion/subseccion.component';

@Component({
  selector: 'app-seccion',
  imports: [GLOBAL_IMPORTS,SubseccionComponent],
  templateUrl: './seccion.component.html',
  styleUrl: './seccion.component.css'
})
export class SeccionComponent {

}
