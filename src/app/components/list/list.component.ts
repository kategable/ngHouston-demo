import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core'; 

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit {
  @Input() list: string[];  
  @Output() addEvent: EventEmitter<string> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  add(candy){
    this.addEvent.emit(candy);
  }
}
