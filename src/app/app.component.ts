import { Component } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data = [
    "https://github.com/Priya1053"]
  
  dataToString = JSON.stringify(this.data);
   url:SafeUrl=''
  onCodeChange=(url : SafeUrl)=>{
    this.url=url;
  }
}
