import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataSharingService {
  private sharedData: any;
  setData(data: any) {
    this.sharedData = data;
  }
  getData() {
    return this.sharedData;
  }
  constructor() {}
}
