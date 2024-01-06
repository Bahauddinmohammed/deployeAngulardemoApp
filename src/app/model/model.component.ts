import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ServiceService } from '../service.service';


@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent implements OnInit {
  myform = new FormGroup({

    id: new FormControl(),
    name: new FormControl(''),
    marks: new FormControl('')
  })

  constructor(
    private http: ServiceService
  ) { }

  ngOnInit(): void {

  }

  save(data: any) {
    debugger
    if (data.value.id) {
      this.http.updatehttpData(data.value).subscribe((res: any) => {
        console.log(res);
      })
    }
    else {
      debugger
      this.http.addhttpData(this.myform.value).subscribe((data: any) => {
        console.log(data);
        this.http.Studentdata.next(true)
      })
    }

  }



}
