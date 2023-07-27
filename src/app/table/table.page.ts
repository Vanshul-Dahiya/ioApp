import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Capacitor, Plugins } from '@capacitor/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CameraPhoto, CameraResultType, CameraSource } from '@capacitor/camera';
import { FilesystemDirectory } from '@capacitor/filesystem';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { Geolocation } from '@capacitor/geolocation';
const { Camera, Filesystem } = Plugins;

export interface PeriodicElement {
  course: string;
  checkbox: boolean;
  selectOption: string;
  image: string | undefined;
  geoLocation?: { latitude: number; longitude: number };
}
export interface CourseElement {
  course: string;
  image: string | undefined;
  remarks: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {
    course: 'B.Pharma',
    checkbox: false,
    selectOption: '',
    image: undefined,
    geoLocation: undefined,
  },
  {
    course: 'M.Phil',
    checkbox: false,
    selectOption: '',
    image: undefined,
    geoLocation: undefined,
  },

  {
    course: 'M.Pharma',
    checkbox: false,
    selectOption: '',
    image: undefined,
    geoLocation: undefined,
  },
];
@Component({
  selector: 'app-table',
  templateUrl: './table.page.html',
  styleUrls: ['./table.page.scss'],
})
export class TablePage implements OnInit {
  selectedOption: any;
  selectedOption2: any;
  selectedCause: string[] = [];
  imageSource: any;
  form: FormGroup;

  dataSource: PeriodicElement[] | any;

  displayedColumns: string[] = ['course', 'yesNo', 'ifYes', 'inspectorRemark'];

  separateDataSource: PeriodicElement[] = [];
  courseDataSource : CourseElement[] = [];
  photoData: string | undefined;
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
      const data2 = await this.http
        .get<CourseElement[]>('../../assets/newCourse_data.json')
        .subscribe((data) => {
          this.courseDataSource = data;
          console.log('data2 = ',data2);
          console.log('courseDataSource = ',this.courseDataSource);
        });
      // this.dataSource = data;
    } catch (error) {
      console.error('Error retrieving data:', error);
    }
  }

  @ViewChild('imageCanvas', { static: false }) canvas: ElementRef | any;
  private context: CanvasRenderingContext2D | any;
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
      // Update the 'image' property of the respective element in the dataSource array
      this.dataSource[index].image =
        this.imageSource['changingThisBreaksApplicationSecurity'];
    }

    console.log(this.dataSource);
    this.dataSource[index].geoLocation =
      this.dataSource[index].geoLocation || {};

    // Get the geolocation data
    try {
      // Get the geolocation data
      const position = await Geolocation.getCurrentPosition();
      const { latitude, longitude } = position.coords;

      // Ensure that this.dataSource[index].geoLocation is initialized as an object with latitude and longitude properties

      // Save geolocation data to the dataSource array
      this.dataSource[index].geoLocation.latitude = latitude;
      this.dataSource[index].geoLocation.longitude = longitude;
    } catch (error) {
      console.error('Error getting geolocation:', error);
    }
    const img = new Image();
    img.src = this.dataSource[index].image;

    // Wait for the image to load
    img.onload = () => {
      // Create a canvas element
      this.context = this.canvas.nativeElement.getContext('2d');
      this.canvas.width = '120px';
      this.canvas.height = '120px';

      // Draw the image on the canvas
      this.context.drawImage(img, 0, 0);

      // Add watermark text (latitude and longitude) to the canvas
      const watermarkText = `Latitude: ${this.dataSource[index].geoLocation.latitude}, Longitude: ${this.dataSource[index].geoLocation.longitude}`;
      this.context.font = '20px Arial';
      this.context.fillStyle = 'white';
      this.context.fillText(watermarkText, 10, 30);

      // Convert the canvas to a data URL and update the image in the dataSource array
      this.dataSource[index].image = this.canvas.nativeElement.toDataURL();
    };
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

  // updateCheckboxValue(event: Event, index: number) {
  //   const target = event.target as HTMLInputElement;
  //   this.dataSource[index].checkbox = target.checked ;
  //   // this.dataSource[index].checkbox = checked;
  // }

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

// function updateCheckboxValue(event: Event | undefined, Event: { new(type: string, eventInitDict?: EventInit | undefined): Event; prototype: Event; readonly NONE: 0; readonly CAPTURING_PHASE: 1; readonly AT_TARGET: 2; readonly BUBBLING_PHASE: 3; }, index: any, number: any) {
//   throw new Error('Function not implemented.');
// }

// function submitTableData() {
//   throw new Error('Function not implemented.');
// }

// function getTableData() {
//   throw new Error('Function not implemented.');
// }
