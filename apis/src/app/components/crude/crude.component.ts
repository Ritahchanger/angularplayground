import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-crude',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './crude.component.html',
  styleUrl: './crude.component.css',
})
export class CrudeComponent {
  public getJsonValue: any;

  public postJsonValue: any;

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {

    this.getMethod()

  }

  public getMethod() {
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe(

      (data)=>{

        this.getJsonValue = data;

        console.log(this.getJsonValue)

      },(error)=>{

        console.error('Error fetching data',error);

      }

    );
  }


}
