import { Component } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent  {
  course=[
    {'id':1,'name':' Learn Angular','description':'Lorem Ipsumis simply dummy text of the printing and type setting industry','image':'../../assets/angular.jpg'},
    {'id':2,'name':' Learn Typescript','description':'Lorem Ipsumis simply dummy text of the printing and type setting industry','image':'../../assets/ts.jpeg'},
    {'id':3,'name':' Learn Nodejs','description':'Lorem Ipsumis simply dummy text of the printing and type setting industry','image':'../../assets/node.jpeg'},
    {'id':4,'name':' Learn Reactjs','description':'Lorem Ipsumis simply dummy text of the printing and type setting industry','image':'../../assets/react.jpeg'}
]

}
