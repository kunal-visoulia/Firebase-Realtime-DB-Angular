import { Component } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'firebase-CRUD';
  courses: any[];
  i = 4;
  constructor(db: AngularFireDatabase) {
    db.list('/Courses').valueChanges().subscribe(courses => {
      this.courses = courses;
      console.log(this.courses);
    });

    // courses: Observable<any[]>;
    // course: any;
    // constructor(db: AngularFireDatabase) {
    //   this.courses = db.list('Courses').valueChanges();
    //   this.courses.subscribe(course => {
    //     this.course = course;
    //     console.log(this.course);

    //   });
    //   // console.log(this.courses);
    // }

      }
}
