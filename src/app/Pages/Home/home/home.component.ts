import { Component } from '@angular/core';
import { GLOBAL_IMPORTS } from '../../../global-imports';

@Component({
  selector: 'app-home',
  imports: [GLOBAL_IMPORTS],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  usuario:string='CERVANTES COELLO LUIS'
  ingreso:Date=new Date('12/19/2024')

}
