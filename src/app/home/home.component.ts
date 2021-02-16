import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {MovieModel} from '../models/movie.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  movieList: MovieModel[];
  title: string = 'movie 111';
  description = 'A great movie';
  numbs = ['movie 1', 'movie 2', 'movie 3', 'movie 4', 'movie 5'];
  constructor(public route: Router) { }

  ngOnInit(): void {
    this.movieList = [new MovieModel(10, 'Shrek', 'Green Guy with green wife and a donkey'),
      new MovieModel(11, 'Shrek 2', 'Green Guy with green wife and a donkey'),
      new MovieModel(12, 'Shrek 3', 'Green Guy with green wife and a donkey'),
      new MovieModel(13, 'Scary Movie', 'Horror movie with a faceless scary thing'),
      new MovieModel(14, 'Harry Potter', 'Witches Everywhere, broom flying academy'),
      new MovieModel(15, 'Spider Man', 'Superhero who was bitten by a spider'),
      new MovieModel(16, 'Mr Bones', 'Traditional Doctor from Kuvukiland, Hlasela jwale ka Tau'),
      new MovieModel(17, 'Merlin', 'Guy with magic protects a prince whose father kills people with magic'),
      new MovieModel(18, 'Shrek 3', 'Green Guy with green wife and a donkey'),
      new MovieModel(19, 'Scary Movie', 'Horror movie with a faceless scary thing'),
      new MovieModel(20, 'Harry Potter', 'Witches Everywhere, broom flying academy'),
      new MovieModel(21, 'Spider Man', 'Superhero who was bitten by a spider'),
      new MovieModel(22, 'Mr Bones', 'Traditional Doctor from Kuvukiland, Hlasela jwale ka Tau'),
      new MovieModel(23, 'Merlin', 'Guy with magic protects a prince whose father kills people with magic'),
      new MovieModel(24, 'Merlin', 'Guy with magic protects a prince whose father kills people with magic'),
    ];
    this.viewMovie();
  }

  viewMovie(): void{
    this.movieList.forEach( function(item){
      console.log('id: ' + item.id + ' name: ' + item.name + 'description: ' + item.description );
    });
    console.log('done with the loop');
    // this.route.navigate(['/movie-detail', '']);
  }

}
