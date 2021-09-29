import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photoeditor',
  templateUrl: './photoeditor.component.html',
  styleUrls: ['./photoeditor.component.css']
})
export class PhotoeditorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  url = '';

  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]);

      reader.onload = (event) => { 
        this.url = event.target.result;
      }
    }
  }
  public delete(){
    this.url = null;
  }
}
