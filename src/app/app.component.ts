import { Component } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';
import * as firebase from 'firebase';
import * as admin from 'firebase-admin';

// class Course {
//   $key: string;
//   $value: string;

// }
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'firebase-Realtime-DB';
  i = 3;
  // courses: Observable<any[]>;
  course: any;
  cu: AngularFireList<any>;
  constructor(public db: AngularFireDatabase) {
    db.list('/Courses').valueChanges().subscribe(course => {
      this.course = course;
      console.log(this.course);


    });
    // console.log(this.courses);
    // }


  }

  Add() {
    this.cu = this.db.list('/Courses');
    this.cu.set(this.i.toString(), 'course' + this.i);
    this.i++;
  }
}
