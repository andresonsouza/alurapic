import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  photos = [

    {
      url: 'https://img2.icarros.com/dbimg/imgadicionalnoticia/4/91910_1',
      description: 'sandero'
    },
    {
      url: 'https://motortudo.com/wp-content/uploads/2020/03/Ficha-T%C3%A9cnica-Hyundai-hb20S-Vision-1.6-Autom%C3%A1tico-2020.jpg',
      description: 'hb20'
    }
  ];

}
