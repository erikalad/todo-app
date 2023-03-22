import { Injectable } from '@angular/core';
import { Data } from '../components/models/data.models';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  data:Data[]=[]
  realizadas:Data[]=[]
  porcentaje:number=0
  constructor() { }
}
