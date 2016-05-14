import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  moduleId: module.id,
  selector: 'angular2-getting-started-app',
  templateUrl: 'angular2-getting-started.component.html',
  styleUrls: ['angular2-getting-started.component.css']
})
export class Angular2GettingStartedAppComponent {
  title = 'angular2-getting-started works!';

  items: FirebaseListObservable<any[]>;
  constructor(public af: AngularFire) {
  	this.items = af.database.list('/items');
  }
}
