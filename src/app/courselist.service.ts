import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourselistService {


  getCourse(){
    return ['course1', 'course2', 'course3'];

  }

  constructor() {

  }
}
