import { Component, OnInit } from '@angular/core';
import { MatDialogRef,MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  constructor(private ref:MatDialogRef<DialogComponent>) { }
  close(){
    this.ref.close()
    window.alert('This is currently in progress')
  }
  

  ngOnInit(): void {
   
    
  }

}
