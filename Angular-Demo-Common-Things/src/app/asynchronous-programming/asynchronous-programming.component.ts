import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { Observable, Subscription, Subject } from 'rxjs';

@Component({
  selector: 'app-asynchronous-programming',
  templateUrl: './asynchronous-programming.component.html',
  styleUrls: ['./asynchronous-programming.component.scss']
})
export class AsynchronousProgrammingComponent implements OnInit, AfterViewInit {

  public stocks = [
    [
      { symbol: 'XFX', price: 240.22, volume: 23432 },
      { symbol: 'TNZ', price: 332.22, volume: 234 }
    ],
    [
      { symbol: 'JXJ', price: 120.22, volume: 5323 },
      { symbol: 'NYN', price: 88.22, volume: 98275 }
    ]
  ];

  public content: HTMLElement;

  public contentPosition$: Subject<any> = new Subject<any>();
  public contentPositionSub: Subscription = new Subscription();

  constructor(private _elementRef: ElementRef) { }

  ngOnInit() {
    this.concatAll();
  }

  ngAfterViewInit() {
    this.content = document.getElementById('content');
    this._elementRef.nativeElement.querySelector('#container')
      .addEventListener('mousemove', this.onContentMouseMove.bind(this));
    this._elementRef.nativeElement.querySelector('#content')
      .addEventListener('mousedown', this.onContentMouseDown.bind(this));
    this._elementRef.nativeElement.querySelector('#container')
      .addEventListener('mouseup', this.onContentMouseUp.bind(this));
  }

  concatAll() {
    console.log('test concat function!');
    console.log(this.stocks[0].concat(this.stocks[1]));
    console.log('test concat function!');
  }

  onContentMouseDown(event) {
    this.content.style.left = event.clientX - event.offsetX + 'px';
    this.content.style.top = event.clientY - event.offsetY + 'px';

    if (this.contentPositionSub.closed || this.contentPositionSub === undefined) {
      this.contentPositionSub = this.contentPosition$.subscribe(value => {
        this.content.style.left = value.clientX - event.offsetX + 'px';
        this.content.style.top = value.clientY - event.offsetY + 'px';
      });
    } else {
      this.contentPositionSub.unsubscribe();
      this.contentPositionSub = this.contentPosition$.subscribe(value => {
        this.content.style.left = value.clientX - event.offsetX + 'px';
        this.content.style.top = value.clientY - event.offsetY + 'px';
      });
    }
  }

  onContentMouseMove(event) {
    this.contentPosition$.next(event);
  }

  onContentMouseUp(event) {
    this.contentPositionSub.unsubscribe();
    console.log(this.contentPositionSub);
  }
}
