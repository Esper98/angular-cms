import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  numbers: number[] = [];

  constructor() { 
    for (let i = 0; i < 10; i++){
      this.numbers.push(i);
    }
  }

  ngOnInit() {
  }

  drop(event: CdkDragDrop<number[]>){
    console.log(this.numbers, event.previousIndex, event.currentIndex);
    moveItemInArray(this.numbers, event.previousIndex, event.currentIndex);
  }

}
