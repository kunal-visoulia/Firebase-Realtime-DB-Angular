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
  i = 0;
  db2: any;
  // courses: Observable<any[]>;
  course: any;
  cu: AngularFireList<any>;
  constructor(public db: AngularFireDatabase) {
    this.Read();
  }

  Read() {
    this.db.list('/Courses').valueChanges().subscribe(course => {
      this.course = course;
      console.log(this.course);
      this.i = this.course.length;

    });


  }
  Add() {
    console.log(this.i);
    this.i++;
    this.cu = this.db.list('/Courses');
    this.cu.set(this.i.toString(), 'course' + this.i);

  }
  Del() {
    console.log(this.i);
    firebase.database().ref('/Courses/').child(this.i.toString()).remove();
    this.i--;
    console.log(this.i);
  }
  update(idx){
    this.cu = this.db.list('/Courses');
    this.cu.set((++idx).toString(), 'course' + "pata");
  }
}

