import { Component } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';
import * as firebase from 'firebase';

class Course {
  $key: string;
  $value: string;

}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'firebase-CRUD';

  // courses: Observable<any[]>;
  course: any;
  constructor(db: AngularFireDatabase) {
    db.list('/Courses').valueChanges().subscribe(course => {
      this.course = course;
      console.log(this.course);

    });
    // console.log(this.courses);
    // }

  }
}
