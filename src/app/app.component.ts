import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  photos = [
    {
      url: 'https://cdn.pixabay.com/photo/2013/04/01/11/00/stop-98913_960_720.png',
      description: 'pare'
    },
    {
      url: 'https://cdn.pixabay.com/photo/2013/04/19/19/28/cantina-105827_960_720.png',
      description: 'pare'
    },
    {
      url: 'https://cdn.pixabay.com/photo/2013/04/19/19/28/cantina-105827_960_720.png',
      description: 'pare'
    }
  ];
}
