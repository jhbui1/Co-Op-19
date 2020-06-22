import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-resource',
  templateUrl: './add-resource.component.html',
  styleUrls: ['./add-resource.component.scss']
})
export class AddResourceComponent implements OnInit {

  canDeactivate() {
    window.scrollTo(0,0);
    return true;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
