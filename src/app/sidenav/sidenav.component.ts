import { Component,ViewChild,Inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { matDrawerAnimations } from '@angular/material/sidenav';
import { slideInAnimation } from '../../route-animation';
import {DialogComponent} from '../dialog/dialog.component';
import {MatDialog, MatDialogConfig,MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
  animations: [ slideInAnimation ]

})
export class SidenavComponent {
  hidee=true;
  

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private dialog:MatDialog) {}   
  sidenavhide(hid:boolean)
  {this.hidee=hid}
  git(){
    window.open('https://github.com/Silky412/my-resume', '_blank')
  }
  
  openDialog(): void {
    const dialogg=new MatDialogConfig()
    this.dialog.open(DialogComponent,dialogg
      )

   
  }

}


