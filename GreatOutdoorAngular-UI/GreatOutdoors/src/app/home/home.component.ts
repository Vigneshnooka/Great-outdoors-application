import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  backgroundimage = {'background-image': 'url("https://www.incimages.com/uploaded_files/image/1920x1080/getty_512358000_2000133320009280358_257516.jpg")'};
  ngOnInit(): void {
  }
}
