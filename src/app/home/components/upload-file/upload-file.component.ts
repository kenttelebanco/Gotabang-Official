import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/compat/storage';
import { UploadDialogComponent } from '../upload-dialog/upload-dialog.component';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { Observable } from 'rxjs';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

export interface DialogData {
  data: ' ';
}

@Component({
  selector: 'upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css'],
})

export class UploadFileComponent implements OnInit {
  @Output() menuState!: String;

  path!: String;
  lockUpload= true;
  task!: AngularFireUploadTask;
  taskRef!: AngularFireStorageReference;
  percentage!: Observable<number>;
  snapshot!: Observable<any>;
  downloadURL!: String;


  constructor(public dialog: MatDialog, private af: AngularFireStorage) {
  }

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

  scanImage($event:any){
    var file = $event.target.files[0];
    if (file!.type.split('/')[0] !== 'image') {
      console.error('unsupported file type');
      alert('Invalid Upload Format!')
      this.lockUpload=true;
      return;}
    else {
    var storage = getStorage();
    var metadata = {
      customMetadata: {
        'application': 'Gotabang',
        'activity': 'Image Processing'
      }
    };

  var imageRef = ref(storage, 'images/' + file.name);
  this.lockUpload=false;
  uploadBytesResumable(imageRef, file, metadata)
  .then((snapshot) => {
    console.log('Uploaded', snapshot.totalBytes, 'bytes.');
    console.log('File metadata:', snapshot.metadata);
    getDownloadURL(snapshot.ref).then((url) => {
      this.downloadURL = url;
      console.log("File Url: "+this.downloadURL);
    });
  }).catch((error) => {
    console.error('Upload failed', error);
  });
}
  }

  uploadImage(){
    this.af.upload("/test/data"+Math.random()+this.path, this.path)
    this.openDialog();
    }

}

