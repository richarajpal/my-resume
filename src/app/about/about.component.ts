import { Component, OnChanges, OnInit } from '@angular/core';
import{ResumeserviceService}from '../resumeservice.service'




@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  about:any

  constructor(private rs:ResumeserviceService) { }

  ngOnInit() {
    this.rs.about().subscribe(
      data=>this.about=data
      
      

    )


  }

}
