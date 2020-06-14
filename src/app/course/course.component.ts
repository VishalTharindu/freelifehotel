import { CourselistService } from './../courselist.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

   title: string;
   course: string[];

  constructor(serves: CourselistService) {

    this.course = serves.getCourse();
  }

  ngOnInit(): void {

    this.title = 'Course Title';
  }

}
