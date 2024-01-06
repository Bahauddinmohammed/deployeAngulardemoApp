import { Component, OnInit, ViewChild } from '@angular/core';
import { ServiceService } from '../service.service';
import { ModelComponent } from '../model/model.component';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  mydata :any=[]
  
  @ViewChild(ModelComponent) childData:any

  constructor(
    private http:ServiceService
  ) { }

  ngOnInit(): void {
    this.getdata()
    this.http.Studentdata.subscribe((res:any)=>{
      this.getdata()
    })
    this.EditForm
  }
  getdata(){
    this.http.getHttpdata().subscribe((res: any)=>{
       this.mydata=res;
    })
  }
  delete(x:any){
    this.http.deletehttpdata(x).subscribe((res:any)=>{
      console.log(res);
      this.getdata()

      
    })
  }
  EditForm(res:any){
   this.childData.myform.setValue({
    name:res.name,
    marks:res.marks,
    id:res.id
   })
  }
  openform(){
    this.childData.myform.reset()
      
  }

  

}
