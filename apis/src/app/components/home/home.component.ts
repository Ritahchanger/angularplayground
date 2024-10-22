import { Component } from '@angular/core';

import { NavbarComponent } from '../navbar/navbar.component';

import { CrudeComponent } from '../crude/crude.component';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent,CrudeComponent,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
