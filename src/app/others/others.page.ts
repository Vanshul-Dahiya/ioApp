import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Capacitor, Plugins } from '@capacitor/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { CameraPhoto, CameraResultType, CameraSource } from '@capacitor/camera';
import { FilesystemDirectory } from '@capacitor/filesystem';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { Geolocation } from '@capacitor/geolocation';
const { Camera, Filesystem } = Plugins;




export interface PeriodicElement {
  issue: string;
  checkbox: boolean;
  selectOption: string;
  image: string | undefined;
  geoLocation?: { latitude: number; longitude: number };
}
const ELEMENT_DATA: PeriodicElement[] = [
  {
    issue: 'B.Pharma',
    checkbox: false,
    selectOption: '',
    image: undefined,
    geoLocation: undefined,
  },
  {
     issue: 'M.Phil',
    checkbox: false,
    selectOption: '',
    image: undefined,
    geoLocation: undefined,
  },

  {
    issue: 'M.Pharma',
    checkbox: false,
    selectOption: '',
    image: undefined,
    geoLocation: undefined,
  },
]
@Component({
  selector: 'app-others',
  templateUrl: './others.page.html',
  styleUrls: ['./others.page.scss'],
})
export class OthersPage implements OnInit {

  selectedOption: any;
  selectedOption2: any;
  imageSource: any;
  form: FormGroup;

  dataSource: PeriodicElement[] | any;
  constructor(
    private route: ActivatedRoute,
    private domSanitizer: DomSanitizer,
    private http: HttpClient,
    private formBuilder: FormBuilder,
  ) {
    // this.form = new FormGroup({
    //   image: new FormControl(''),
    // });
    this.form = this.formBuilder.group({
      deficiency: ['', [Validators.required]],
      checkbox: [false, [Validators.required]], // Set default value to false
      selectOption: ['', [Validators.required]],
      // image: ['', Validators.required],
    });
      
  
  }
  ngOnInit(): void {
    this.getData();
    // throw new Error('Method not implemented.');
  }

  async getData() {
    try {
      const data = await this.http
        .get<PeriodicElement[]>('../../assets/others.json')
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
  @ViewChild('imageCanvas', { static: false }) canvas: ElementRef | any;
  private context: CanvasRenderingContext2D | any;
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
  submitForm() {
    console.log('Btn clicked');
    if (this.form.valid) {
      // Form is valid, handle form submission here
      const formData = this.form.value;
      console.log(formData);
      // Add your logic to perform actions with formData...
    } else {
      // Form is invalid, display error messages or handle as needed
    console.log('else ');
    }
  }
}


