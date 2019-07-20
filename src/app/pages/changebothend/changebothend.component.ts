import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { BehaviorSubject, interval, fromEvent } from 'rxjs';
import { debounceTime,map,pairwise,take } from 'rxjs/operators';

@Component({
  selector: 'app-changebothend',
  templateUrl: './changebothend.component.html',
  styleUrls: ['./changebothend.component.css']
})
export class ChangebothendComponent implements OnInit {

  name = 'Angular 5';
  value$ = new BehaviorSubject(null);
  previousValue = null;
  currentValue = null;

  @ViewChild("theButton",{ static:false })
  theButton:ElementRef;

  // const keyUp$ = fromEvent(this.theButton,"keyup");

  ngOnInit() {
    // const pairwise$ = this.value$.debounceTime(200).pairwise();
    //const pairwise$ = this.value$.pipe(pairwise(),debounceTime(200));
    const aa$ = this.value$.pipe(pairwise());
    const pairwise$ = aa$.pipe(debounceTime(200));

    
    pairwise$.subscribe(([prevous, current]) => {
      this.previousValue = prevous;
      this.currentValue = current;
    });

    // const stream1 = interval(350).pipe(
    //   take(25),map(gaussian)
    // );

    // stream1.subscribe(
    //   item=>{
    //     console.log(item);
    //   }
    // );
  }


  onClick(event){

  }

}
