import { GameService } from './../game.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  response:any;
  get = false;
  message = '';

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
  }

  requestData() {
    this.gameService.getData().subscribe({
      next: data => {
        this.response = data;
        this.get = true;
      },
      error: error => this.message = error,
      complete: () => this.message = "Request completed!"
    });
  }

  postData() {
    this.gameService.postData().subscribe({
      next: data => {
        this.response = data;
        this.get = true;
      },
      error: error => this.message = error,
      complete: () => this.message = "Request completed!"
    });
  }
}
