import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SHYAM MAWAL';

  msg="";
  nCnt: number=0;
  clickMe(){
    this.nCnt = this.nCnt + 1;
    this.msg ="clicked" + this.nCnt;

  }
  
}
