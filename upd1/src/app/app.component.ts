import { Component } from '@angular/core';
import { EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'ang_multi_upd';
  @Output("onSelectFile") newItemValue = new EventEmitter<string>();
  name = "Angular 4";
 // urls = [];
  urls:any[] = [];
 
 
  /*
  onSelectFile(event: { target: { files: string|any[]; }; }) {
    if (event.target.files && event.target.files[0]) {
        var filesAmount = event.target.files.length;
        for (let i = 0; i < filesAmount; i++) {
                var reader = new FileReader();

                reader.onload = (event:any) => {
                  console.log(event.target.result);
                  // this.urls.push(event.target.result); 
                }

                reader.readAsDataURL(event.target.files[i]);
        }
    }
  }
  */
  onSelectFile(event: any) {
    //console.log(event.target.result);
    if (event.target.files && event.target.files[0]) {
      // console.log("檔案數為:",event.target.files.length);
      console.log("檔案數為:",event.target.files);
      var filesAmount = event.target.files.length;
      for (let i = 0; i < filesAmount; i++) {
              var reader = new FileReader();

              reader.onload = (event:any) => {
                console.log("檔名為:",event.target.result);
                this.urls.push(event.target.result); 
              }

              reader.readAsDataURL(event.target.files[i]);
      }
  }

  }

}
