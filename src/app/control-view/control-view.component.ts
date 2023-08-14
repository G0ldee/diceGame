import { Component } from '@angular/core';
import { PointsSystemService } from '../points-system.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-control-view',
  template: `
  <div id="control-container">
    <button class="btn"(click)="setText()">{{value}}</button>
    <button class="btn" (click)="resetSesh()">Reset Session</button>
    <button class="btn" *ngIf="ptSys.gameStarted" (click)="setTrips()">Set Trips</button>
  </div>
  `,
  styles: [`
      #control-container{
        display: grid;
        justify-content: center;
      }
      
      .btn{
        padding-left: 15px;
        padding-right: 15px;
        margin-top: 15px;
      }
    `]
})
export class ControlViewComponent {
  start:String = 'New Game';
  started:String = 'Roll Dice';
  value:String = this.start;
  constructor(private data: DataService, public ptSys: PointsSystemService){}

  setText(){
      if(this.value === this.start){
        this.value = this.started;
      } else if(this.value === this.started) {
          this.data.updateGameState(true);
          this.rollDice();
          setTimeout(()=> {
            this.ptSys.setSessionScore();
          },1400);
        }
  }
  resetSesh(){
    if(this.value != this.start) {
      this.value = this.start;
      this.data.updateGameState(false);
      this.data.setGameResetBool(true);
      this.ptSys.setSessionScore();
    }
  }
  updateValues() {
    this.data.updateDie1(this.generateNumber());
    this.data.updateDie2(this.generateNumber());
    this.data.updateDie3(this.generateNumber());
  }
  generateNumber() {
    return Math.floor(Math.random() * (6 - 1 + 1) + 1);
  }
  rollDice(){
    this.ptSys.rolling = true;
    for(let i = 0; i < 6; i++) {
      setTimeout(() => {
        this.ptSys.td1 = this.generateNumber();
        this.ptSys.td2 = this.generateNumber();
        this.ptSys.td3 = this.generateNumber();
      },200 *i);
    }
    setTimeout(()=> {
      this.updateValues();
      this.ptSys.rolling = false;
    },1400);
  }
  setTrips() {
    const trips = this.generateNumber(); 
    this.data.updateDie1(trips);
    this.data.updateDie2(trips);
    this.data.updateDie3(trips);
  }
}