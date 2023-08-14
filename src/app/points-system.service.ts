import { Injectable } from '@angular/core';
import { DataService } from "./data.service";

@Injectable({
  providedIn: 'root'
})
export class PointsSystemService {
    public d1 = 1;
    public d2 = 1;
    public d3 = 1;
    public td1 = 1;
    public td2 = 1;
    public td3 = 1;

    public gameStarted = false;
    public gameReset = false;
    public rolling = false;

    constructor(private data: DataService){
        data.pDie1.subscribe(x => this.d1 = x);
        data.pDie2.subscribe(x => this.d2 = x);
        data.pDie3.subscribe(x => this.d3 = x);
        data.pGameStarted.subscribe(x => this.gameStarted = x);
        data.pGameReset.subscribe(x => this.gameReset = x);
    }
    private score: number = 0;
    private bonus: number = 0;
    private totalScore: number = 0;
    private sessionScore: number = 0;

    public setScore(){
        if (this.gameStarted){
            this.score = this.d1 + this.d2 + this.d3;
        } else {this.score = 0}
        return this.score;
    }
    public setBonus(){
        if (this.gameStarted){
            if (this.d1 == this.d2 && this.d1 == this.d3){
                this.bonus = 10;
                } else if(this.d1 == this.d2 || this.d1 == this.d3 || this.d2 == this.d3) {
                    this.bonus = 5;
                    } else {
                        this.bonus = 0;
                    }    
        } else {this.bonus = 0}
        return this.bonus;
    }
    public setTotalScore(){
        if (this.gameStarted){
            this.totalScore = this.score + this.bonus;
        } else {this.totalScore = 0}
        return this.totalScore;
    }
    public setSessionScore(){
        if (this.gameStarted){
            const score: number = this.sessionScore; 
            this.sessionScore = score + this.totalScore;
        } else {this.sessionScore = 0}
    }
    public getSessionScore(){
            return this.sessionScore;
    }
}