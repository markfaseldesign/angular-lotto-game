import { Component, OnInit } from '@angular/core';
import * as _ from 'underscore';

// Set up our Component Decorator
@Component({
  selector: 'app-lotto',
  templateUrl: './lotto.component.html',
  styleUrls: ['./lotto.component.css']
})
export class LottoComponent implements OnInit {

  // Set up various variables for the Lotto Game
  public picks: any = []; // Array to story user's quick picks
  public random: number; // Set a public variable and assign the type number
  public counter: number = 0; // Create a counter variable
  public winningNumber: any = []; // Array to store the winning numbers
  public isWinner: boolean = false; // Bool if the user wins
  public isPlaying: boolean = false; // Bool if the user clicked play

  // Constructor function
  constructor() { }

  // Our init function - runs on load
  ngOnInit() {
    this.createQuickPick(); // Let's get our first quick pick on load
  }
  
  // Creates a "quickpick" of numbers and adds to the user's ticket
  public createQuickPick() { 
    // Create a local variable for an array that will store the randomly selected numbers
    let numPick: any = [];

    // Generate the number
    this.generateNumber(numPick);
    
    this.picks[this.counter] = numPick; // Let's store this array into our quick pick array based on our counter index
    this.counter += 1; // Let's add 1 to the current counter value
  }

  public playLotto(picks) {
    // Let's set our winner variable to false to start
    let isWinner: boolean = false;

    // Lotto is playing - user clicks play button
    this.isPlaying = true;

    // Generate the number
    this.generateNumber(this.winningNumber);
    
    // Set a local variable to store the winning number
    let wn: any = this.winningNumber;

    // Set a local variable to hold if the array / number is a winner
    let arrWin: boolean = false;
    // Loop over the quick picks and check each quick pick against the generated winning number
    _.each(picks, function(pick){
      if(!arrWin) { 
        arrWin = _.isEqual(wn, pick); // If the current pick is equal to the winning number - set the variable arrWin to true
      }
    });

    this.isWinner = arrWin; // Set the isWinner variable to the boolean produced in the _.each 
    
  }
  // Starts a new game
  public reset() {
    this.isPlaying = false;
    this.winningNumber = [];
    this.picks = [];
    this.counter = 0;
    this.createQuickPick();
  }

  // Number generator with sorting the array min - max
  public generateNumber(arr) {
    // Run a for loop like in our quick pick function 
    for(var i=0; i<5; ++i) { 
        this.random = this.randomNumber(1, 64);
        while(arr.indexOf(this.random) !== -1){
            this.random = this.randomNumber(1, 64);
        }
        arr[i] = this.random;
    }; 
    return arr.sort(this.sortNumber);
  }

  // Helpers
  public randomNumber(min, max){
      return Math.round(Math.random() * (max - min) + min);
  }
  public sortNumber(a,b) {
    return a - b;
  }

  

}
