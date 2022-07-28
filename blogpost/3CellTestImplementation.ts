 
export class Cell {
    constructor(private state: number, private neighborsSum: number) {}
     public setNextState(): number {
      if ((this.state === 1 && this.neighborsSum === 2) ||     (this.neighborsSum === 3)) return 1;
      return 0;
    }
  }