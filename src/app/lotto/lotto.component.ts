import { Component, OnInit } from '@angular/core';
import * as _ from 'underscore';

@Component({
  selector: 'app-lotto',
  templateUrl: './lotto.component.html',
  styleUrls: ['./lotto.component.css']
})
export class LottoComponent implements OnInit {

  public picks: any = [];
  public random: any;
  public counter: number = 0;
  public winningNumber: any = [];
  public isWinner: boolean = false;
  public isPlaying: boolean = false;

  constructor() { }

  ngOnInit() {
    this.createQuickPick();
  }

  public createQuickPick() { 
    let numPick: any = [];
    for(var i=0; i<5; ++i) { 
        this.random = this.randomNumber(1, 64);
        while(numPick.indexOf(this.random) !== -1){
            this.random = this.randomNumber(1, 64);
        }
        numPick[i] = this.random;
        // numPick.push(this.random);
    }; 
    numPick.sort(this.sortNumber);
    this.picks[this.counter] = numPick;
    this.counter += 1;
    console.log(this.picks);
  }

  public playLotto(picks) {

    let isWinner: boolean = false;

    // Lotto is playing
    this.isPlaying = true;

    for(var i=0; i<5; ++i) { 
        this.random = this.randomNumber(1, 64);
        while(this.winningNumber.indexOf(this.random) !== -1){
            this.random = this.randomNumber(1, 64);
        }
        this.winningNumber[i] = this.random;
    }; 
    this.winningNumber.sort(this.sortNumber);
    
    let wn: any = this.winningNumber;
    let arr: boolean = false;
    // Loop over the quick picks and check each quick pick against the generated winning number
    _.each(picks, function(pick){
      if(!arr) { 
        arr = _.isEqual(wn, pick); 
      }
    });
    
    this.isWinner = arr;this.counter
    
    
    
  }
  // Starts a new game
  public reset() {
    this.isPlaying = false;
    this.winningNumber = [];
    this.picks = [];
    this.counter = 0;
    this.createQuickPick();
  }

  // Helpers
  public randomNumber(min, max){
      return Math.round(Math.random() * (max - min) + min);
  }
  public sortNumber(a,b) {
    return a - b;
  }
}
