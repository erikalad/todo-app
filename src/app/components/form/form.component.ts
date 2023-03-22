import { Component, OnInit} from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Data } from '../models/data.models';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(
    public dataService:DataService

  ){}

  data:Data[]=[{
    text:'',
    status:false
  }]
  realizadas:string[]=[]
  textarea=''
  newTodo=''
  porcentaje:number= 0
  check:boolean=false

  cargarTodo(data:string){
    this.dataService.data.push({text:data,status:false})
    this.newTodo=''
    this.textarea=''
    console.log(this.dataService.data)
    alert('Tu tarea se creo con éxito')
  }

  deleteTodo(i:number){
    this.dataService.data.splice(i,1)
    this.dataService.realizadas.splice(i,1)
  }
  realicedTodo(data: string, i: number): void {
    const index = this.dataService.data.findIndex(objeto => objeto.text === data);
    if (index >= 0) {
      this.dataService.data[index].status = !this.dataService.data[index].status;
      console.log(this.dataService.data[index])
      if(this.dataService.data[index].status === true){
        console.log(this.dataService.data[index].status)
        this.dataService.realizadas.push({text:data,status:true})
      }else{
        this.dataService.realizadas.pop()
        console.log(this.dataService.realizadas.length)
      }

    }

  }

  ngOnInit(): void {
   this.dataService.porcentaje= this.porcentaje
   this.dataService.porcentaje=this.porcentaje
  }

  viewEstadisticas(){
    if(this.dataService.data.length >= this.dataService.realizadas.length){
      this.porcentaje = ((this.dataService.realizadas.length*100)/this.dataService.data.length)
      console.log(((this.dataService.realizadas.length*100)/this.dataService.data.length))
      this.dataService.porcentaje= this.porcentaje
      this.dataService.porcentaje=this.porcentaje
    }



  }

}
