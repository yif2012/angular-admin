import { Component, OnInit, Input, SimpleChanges, OnChanges, Output, EventEmitter } from '@angular/core';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-input-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css']
})
export class DatepickerComponent implements OnInit {
  bsConfig: Partial<BsDatepickerConfig>;
  @Input()
  value: Date;
  @Output()
  time: EventEmitter<any> = new EventEmitter();
  constructor() {
    this.bsConfig = Object.assign({}, {containerClass: 'theme-blue', locale: 'zh-cn', showWeekNumbers: false});
  }
  ngOnInit() {
    console.log(this.value);
  }
  emit() {
    this.time.emit(this.value);
  }
  test(pop: any) {
    console.log(pop);
  }
}
