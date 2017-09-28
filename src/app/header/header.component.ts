import { Component, Output, EventEmitter, SimpleChanges } from '@angular/core';
import {ServiceService} from "../service/service.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output()
  changeType: EventEmitter<boolean> = new EventEmitter();
  constructor(private service: ServiceService) { }
  toggle() {
    this.changeType.emit(true);
  }
  public onHidden(): void {
    console.log('Dropdown is hidden');
  }
  public onShown(): void {
    console.log('Dropdown is shown');
  }
  public isOpenChange(): void {
    console.log('Dropdown state is changed');
  }
}
