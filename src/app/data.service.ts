import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  private gameReset = new BehaviorSubject<boolean>(false);
  public pGameReset = this.gameReset.asObservable();
  private gameStarted = new BehaviorSubject<boolean>(false);
  public pGameStarted = this.gameStarted.asObservable();
  private die1 = new BehaviorSubject<number>(1);
  public pDie1 = this.die1.asObservable();
  private die2 = new BehaviorSubject<number>(1);
  public pDie2 = this.die2.asObservable();
  private die3 = new BehaviorSubject<number>(1);
  public pDie3 = this.die3.asObservable();  
  
  setGameResetBool(arg0: boolean) {
    this.gameReset.next(arg0);
    this.die1.next(1);
    this.die2.next(1);
    this.die3.next(1);
  }
  updateGameState(bool: boolean){
    this.gameStarted.next(bool);
  }
  updateDie1(int:number){
    this.die1.next(int);
  }
  updateDie2(int:number){
    this.die2.next(int);
  }
  updateDie3(int:number){
    this.die3.next(int);
  }
  constructor() { }
}
