import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
img='/assets/sk.jpg'
  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();
  isEnable = false 


  
  toggleSidebar() {
    this.toggleSidebarForMe.emit();
  }

  constructor() { }

  ngOnInit(): void {
  }


  toggleButton(){

    this.isEnable = ! this.isEnable

  }
 
  

}


