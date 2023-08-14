import { ChangeDetectorRef, Component } from '@angular/core';
import { PointsSystemService } from '../points-system.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-dice-view',
  template: `
  <h1>Dice Game</h1>
  <div class="main-container"> 
    <section class="sections">
      <img *ngIf="!ptSys.rolling" src="assets/Dice-{{ptSys.d1}}-image.png" class="diceImages">
      <img *ngIf="ptSys.rolling" src="assets/Dice-{{ptSys.td1}}-image.png" class="diceImages">
      <span *ngIf="!ptSys.rolling" id="dice1" class="diceLabels">Score: {{ptSys.setScore()}} points </span>
      <span *ngIf="ptSys.rolling" id="dice1" class="diceLabels">Score:</span>
    </section>
    <section class="sections">
      <img *ngIf="!ptSys.rolling" src="assets/Dice-{{ptSys.d2}}-image.png" class="diceImages">
      <img *ngIf="ptSys.rolling" src="assets/Dice-{{ptSys.td2}}-image.png" class="diceImages">
      <span *ngIf="!ptSys.rolling" id="dice2" class="diceLabels">Bonus: {{ptSys.setBonus()}} points</span>
      <span *ngIf="ptSys.rolling" id="dice1" class="diceLabels">Bonus:</span>
    </section>
    <section id="sections">  
      <img *ngIf="!ptSys.rolling" src="assets/Dice-{{ptSys.d3}}-image.png" class="diceImages">
      <img *ngIf="ptSys.rolling" src="assets/Dice-{{ptSys.td3}}-image.png" class="diceImages">
      <span *ngIf="!ptSys.rolling" id="dice3" class="diceLabels">Total Score: {{ptSys.setTotalScore()}} points</span>
      <span *ngIf="ptSys.rolling" id="dice1" class="diceLabels">Total Score:</span>

    </section>
  </div>
  <span>Session Score: {{ptSys.getSessionScore()}} points</span>
  `,
  styles:[`
    h1{
      margin-top: 50px;
      font-size: 60px;
      text-align: center;
    }
    .main-container{
      margin-top: 80px;
      display: flex;
      justify-content: center;
    }
    .diceImages{
      width: 250px;
      height: 250px;
    }
    .diceLabels{
      margin-top: 80px;
      display: block;
      text-align: center;
    }
    span{
      display: flex;
      justify-content: center;
        margin-top: 40px;
      } 
  `]
})
export class DiceViewComponent {
  constructor(private data: DataService, public ptSys: PointsSystemService){}
}

