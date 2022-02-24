import { Component, OnInit } from '@angular/core';
import { SearchComponent } from '@app/shared/components/search/search.component';
import { environment } from '@environments/environment';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-peoples-list',
  templateUrl: './peoples-list.component.html',
  styleUrls: ['./peoples-list.component.scss'],
})

export class PeoplesListComponent implements OnInit {

  public peoples: {
    name: string;
    eye_color: string;
    gender: string;
    films: any;
  }[] = [];

  public filmsPeoples: {
    peopleName: string;
    title: string;
    episode_id: number;
  }[] = [];

  respuesta: any;
  data: any;
  var: any;
  nextPagesUrl: any;
  previousPagesUrl: any;
  dataFilm: any;
  res: any;
  data2: any;
  value2:any;

  constructor(private router: Router, private routerActivate: ActivatedRoute) { }

  ngOnInit(): void {
    this.var = this.getData('https://swapi.py4e.com/api/people/');
  }


  async getData(url: any) {
    let response = await fetch(url);
    this.data = await response.json();

    //pasar y devolver paginas.
    this.nextPagesUrl = this.data.next;
    this.previousPagesUrl = this.data.previous;


    for (let i = 0; i < this.data.results.length; i++) {

      this.peoples.push({
        name: this.data.results[i].name,
        eye_color: this.data.results[i].eye_color,
        gender: this.data.results[i].gender,
        films: this.data.results[i].films
      });



      /**/
    }

    this.getFilms();



    //console.log(this.filmsPeoples);

    //this.getFilms(this.data.results[i].films);



  }



  goNextPages() {
    this.peoples = [];
    this.getData(this.nextPagesUrl);
  }

  goPreviousPages() {
    this.peoples = [];
    this.getData(this.previousPagesUrl)
  }

  async getFilms() {


    for (let i = 0; i < this.peoples.length; i++) {
      for (let e = 0; e < this.peoples[i].films.length; e++) {

        let response = await fetch(this.peoples[i].films[e]);

        this.data = await response.json();

        this.filmsPeoples.push({
          peopleName: this.peoples[i].name,
          title: this.data.title,
          episode_id: this.data.episode_id
        });


      }

    }

  }

  onSearch() {
/*
    if (this.value == this.data.results.eye_color) {
      console.log('Buscar', this.value);
    }*/
  };

}
