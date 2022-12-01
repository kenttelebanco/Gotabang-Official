import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/compat/storage';
import { UploadDialogComponent } from '../upload-dialog/upload-dialog.component';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { Observable} from 'rxjs';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { ApiService } from '../api.service';
import { imageType } from '../imageType';

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
  @Output() newItemEvent = new EventEmitter<string>();
  type : imageType[] = [];
  path!: String;
  lockUpload= true;
  task!: AngularFireUploadTask;
  taskRef!: AngularFireStorageReference;
  percentage!: Observable<number>;
  snapshot!: Observable<any>;
  downloadURL!: string;
  result: any;

  imgType:any = [
    {
      Type: 'Flood'
    },
    {
      Type: 'Fire'
    }
  ]


  constructor(public dialog: MatDialog, private af: AngularFireStorage, private apiService:ApiService) {
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
    this.path = file;
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
      this.newItemEvent.emit(this.downloadURL);
    });
  }).catch((error) => {
    console.error('Upload failed', error);
  });
}
  }

  uploadImage() {

    // this.apiService.classifyImage(this.downloadURL).subscribe(async response => {
    //   this.type = response
    // if(JSON.stringify(this.type) === JSON.stringify(this.imgType[0])){
    //   console.log('Type: ', this.type)
    //   console.log('Type2: ', this.imgType[0])
    //   this.af.upload("flood/"+Math.random()+this.path, this.path)
    //   this.openDialog();
    // }
    // if(JSON.stringify(this.type) === JSON.stringify(this.imgType[1])){
    //   console.log('Type: ', this.type)
    //   console.log('Type2: ', this.imgType[1])
    //   this.af.upload("fire/data"+Math.random()+this.path, this.path)
    //   this.openDialog();
    // }
    // })
    }

}

