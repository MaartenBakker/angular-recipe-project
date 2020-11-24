import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Output()
  public changePageEmitter = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  onSelect(selection: string): void {
    this.changePageEmitter.emit(selection);
    // console.log('emitting recipes');
  }
}
