import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { fromEvent, map, tap } from 'rxjs';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {
  @Output() progressValue = new EventEmitter();
  progressValue$: any;
  constructor() { }

  ngOnInit(): void {
    this.getprogressValue();
  }

  getprogressValue() {
    this.progressValue$ = fromEvent(window, "scroll").pipe(
      map(() => {
        const winScroll =
          document.body.scrollTop || document.documentElement.scrollTop;
        const height =
          document.documentElement.scrollHeight -
          document.documentElement.clientHeight;
        return Math.round((winScroll / height) * 100);
      }),
      tap(v => this.progressValue.emit(v))
    );
  }
}
