import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photoeditor',
  templateUrl: './photoeditor.component.html',
  styleUrls: ['./photoeditor.component.css']
})
export class PhotoeditorComponent implements OnInit {
  
  // Class atributes
  url :string;

  constructor() { }

  ngOnInit() {
  }
  
  /*
  * On event, opens the file explorer and changes the url to the selected file.
  * @param event
  */
  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]);

      reader.onload = (event) => { 
        this.url =  reader.result as string;
      }
    }
  }
}
