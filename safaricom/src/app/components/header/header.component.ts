import { Component } from '@angular/core';

import { TopnavbarComponent } from '../topnavbar/topnavbar.component';
import { LowernavbarComponent } from '../lowernavbar/lowernavbar.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TopnavbarComponent,LowernavbarComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
