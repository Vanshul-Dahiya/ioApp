import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Capacitor, Plugins } from '@capacitor/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CameraPhoto, CameraResultType, CameraSource } from '@capacitor/camera';
import { FilesystemDirectory } from '@capacitor/filesystem';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
const { Camera, Filesystem } = Plugins;

export interface PeriodicElement {
  id: number;
  name: string;
  designation: string;
  qualification: string;
  experience: string;
  attendance: boolean;
  QualificationID: number;
  ExperienceID: number;
  course: string;
  checkbox: boolean;
  selectOption: string;
  image: string | undefined;
}
// const ELEMENT_DATA: PeriodicElement[] = [
//   { point:'', course: 'B.Pharma', checkbox: false, selectOption: '', image: undefined },
//   { point:'',  course: 'M.Phil', checkbox: false, selectOption: '', image: undefined },

//   {  point:'', course: 'M.Pharma', checkbox: false, selectOption: '', image: undefined },
// ];

@Component({
  selector: 'app-faculty-detail',
  templateUrl: './faculty-detail.page.html',
  styleUrls: ['./faculty-detail.page.scss'],
})
export class FacultyDetailPage implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private domSanitizer: DomSanitizer,
    private http: HttpClient
  ) {
    this.form = new FormGroup({
      image: new FormControl(''),
    });
  }

  selectedOption: any;
  selectedOption2: any;
  imageSource: any;
  form: FormGroup;
  dataSource: PeriodicElement[] | undefined = [];
  separateDataSource: PeriodicElement[] = [];
  ngOnInit() {
    console.log('got data');

    this.getData();
    // throw new Error('Method not implemented.');
  }
  async getData() {
    try {
      const das = await this.http
        .get<PeriodicElement[]>('../../assets/facultyData.json')
        .subscribe((data) => {
          this.dataSource = data;
        });
    } catch (error) {
      console.error('Error retrieving data:', error);
    }
  }

  photoData: string | undefined;
  takePicture = async (index: number) => {
    const image = await Camera['getPhoto']({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
    });

    // this.imageSource= 'data:image/jpeg;base64,'+image.base64String;
    // console.log(this.imageSource)
    this.imageSource = this.domSanitizer.bypassSecurityTrustUrl(
      image.webPath ? image.webPath : ''
    );

    if (this.dataSource && this.dataSource[index] && this.imageSource) {
      // Update the 'image' property of the respective element in the dataSource array
      this.dataSource[index].image =
        this.imageSource['changingThisBreaksApplicationSecurity'];
    }

    console.log(this.dataSource);
  };

  getPhoto(index: number) {
    if (
      this.dataSource &&
      this.dataSource[index] &&
      this.dataSource[index].image
    ) {
      return this.dataSource[index].image;
    }

    // Add a default return statement
    return '';
  }
  submitTableData() {
    localStorage.setItem('tableData', JSON.stringify(this.dataSource));
  }
  getTableData() {
    const storedData = localStorage.getItem('tableData');
    if (storedData) {
      const retrievedData = JSON.parse(storedData);
      this.separateDataSource = retrievedData;
      console.log(storedData);
    }
  }
}
