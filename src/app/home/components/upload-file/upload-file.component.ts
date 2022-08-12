import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { UploadDialogComponent } from '../upload-dialog/upload-dialog.component';
export interface DialogData {
  data: ' ';
}
@Component({
  selector: 'upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent implements OnInit {
  path!: String;

  constructor(public dialog: MatDialog, private af: AngularFireStorage) { }

  ngOnInit(): void {
  }

  openDialog() {
    this.dialog.open(UploadDialogComponent, {
      data: {
        panelClass: 'custom-dialog-container'
      },
    },
    );
  }

  upload($event:any){
    this.path = $event.target.files[0]
  }

  uploadImage(){
    console.log(this.path)
    this.af.upload("/files/data"+Math.random()+this.path,this.path
    )
    this.openDialog()

  }

}
