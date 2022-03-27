import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {

  hide_deleted:boolean;
  constructor() { 
    this.hide_deleted = true;
  }

  ngOnInit(): void {
  }

  toggle_delete_checkbox(){
    this.hide_deleted = !(this.hide_deleted);
    console.log(" Delete flag changed to : "+this.hide_deleted);
  }
}
