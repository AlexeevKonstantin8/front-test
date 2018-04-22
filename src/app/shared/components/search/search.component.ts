import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {

  @Input() filterVal: string;
  @Output() filterValChange: EventEmitter<string>;

  constructor() {
    this.filterValChange = new EventEmitter();
  }

  ngOnInit() {
  }

}
