import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sidenav-link',
  templateUrl: './sidenav-link.component.html',
  styleUrls: ['./sidenav-link.component.css']
})
export class SidenavLinkComponent implements OnInit {

  @Output() closeSideNavigation = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onToggleClose(){
    this.closeSideNavigation.emit();
  }

}
