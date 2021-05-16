import { Component, OnInit } from '@angular/core';
import { saveAs } from 'file-saver';
import{ResumeserviceService}from '../resumeservice.service'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private rs:ResumeserviceService) { }

  ngOnInit(): void {
  }
  download() {
    this.rs
      .download()
      .subscribe(blob => saveAs(blob, 'silkyresume.pdf'))
}
 

}
