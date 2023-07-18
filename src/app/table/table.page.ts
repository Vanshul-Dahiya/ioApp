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
  course: string;
  checkbox: boolean;
  selectOption: string;
  image: string | undefined;
}
const ELEMENT_DATA: PeriodicElement[] = [
  { course: 'B.Pharma', checkbox: false, selectOption: '', image: undefined },
  { course: 'M.Phil', checkbox: false, selectOption: '', image: undefined },

  { course: 'M.Pharma', checkbox: false, selectOption: '', image: undefined },
];
@Component({
  selector: 'app-table',
  templateUrl: './table.page.html',
  styleUrls: ['./table.page.scss'],
})
export class TablePage implements OnInit {
  selectedOption: any;
  selectedOption2: any;
  imageSource: any;
  form: FormGroup;
  dataSource: PeriodicElement[] | undefined = [];
  constructor(
    private route: ActivatedRoute,
    private domSanitizer: DomSanitizer,
    private http: HttpClient
  ) {
    this.form = new FormGroup({
      image: new FormControl(''),
    });
  }
  ngOnInit(): void {
    this.getData();
    // throw new Error('Method not implemented.');
  }
  async getData() {
    try {
      const data = await this.http
        .get<PeriodicElement[]>('../../assets/data.json')
        .subscribe((data) => {
          this.dataSource = data;
        });
      // this.dataSource = data;
    } catch (error) {
      console.error('Error retrieving data:', error);
    }
  }
  displayedColumns: string[] = ['course', 'yesNo', 'ifYes', 'inspectorRemark'];

  separateDataSource: PeriodicElement[] = [];

  photoData: string | undefined;

  takePicture = async (index: number) => {
    const image = await Camera['getPhoto']({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Uri,
      source: CameraSource.Prompt,
    });

    // this.imageSource= 'data:image/jpeg;base64,'+image.base64String;
    // console.log(this.imageSource)
    this.imageSource = this.domSanitizer.bypassSecurityTrustUrl(
      image.webPath ? image.webPath : ''
    );
    if (this.dataSource && this.dataSource[index] && this.imageSource) {
      this.dataSource[index].image = this.imageSource;
    }
    console.log(this.imageSource);
  };
  getPhoto(index: number) {
    if (this.dataSource && this.dataSource[index] && this.dataSource[index].image) {
      return this.dataSource[index].image;
    }
  
    // Add a default return statement
    return '';
  }
  
  
  // updateCheckboxValue(event: Event, index: number) {
  //   const target = event.target as HTMLInputElement;
  //   this.dataSource[index].checkbox = target.checked ;
  //   // this.dataSource[index].checkbox = checked;
  // }

  submitTableData(){
    localStorage.setItem('tableData', JSON.stringify(this.dataSource));
  }
  getTableData(){
    const storedData=
    localStorage.getItem('tableData');
    if(storedData){
     const retrievedData = JSON.parse(storedData)
     this.separateDataSource=retrievedData;
     console.log(storedData);

    }
  }
}

// function updateCheckboxValue(event: Event | undefined, Event: { new(type: string, eventInitDict?: EventInit | undefined): Event; prototype: Event; readonly NONE: 0; readonly CAPTURING_PHASE: 1; readonly AT_TARGET: 2; readonly BUBBLING_PHASE: 3; }, index: any, number: any) {
//   throw new Error('Function not implemented.');
// }

// function submitTableData() {
//   throw new Error('Function not implemented.');
// }

// function getTableData() {
//   throw new Error('Function not implemented.');
// }
