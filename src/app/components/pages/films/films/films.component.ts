import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent implements OnInit {

  public films: {
    title: string;
    episode_id: number;
    director: string;
    characters: any;
  }[] = [];

  public films2: {
    characters2:any;
    episode_id2: any;

  }[] = [];

  respuesta: any;
  data: any;
  var: any;
  constructor() { }

  ngOnInit(): void {
    this.var = this.getData('https://swapi.py4e.com/api/films/');
  }

  async getData(url: any) {
    let response = await fetch(url);
    this.data = await response.json();

    for (let i = 0; i < this.data.results.length; i++) {
      this.films.push({
        title: this.data.results[i].title,
        episode_id:this.data.results[i].episode_id,
        director:this.data.results[i].director,
        characters:this.data.results[i].characters,

      });


      for (let e = 0; e < this.data.results[i].characters.length; e++) {
        this.films2.push({
        characters2: this.data.results[i].characters[e],
        episode_id2: this.data.results[i].episode_id
      });
      console.log(this.films2);
      }

    }
  }

}
