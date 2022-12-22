import { Component } from '@angular/core';
export interface User{
  name: string;
  age: number;
  rollNo: number;

  


}


const ELEMENT_DATA: User[] = [
  {name: 'Sarthak', age:20, rollNo:126},
  {name: 'Sunil', age:21, rollNo:131},
  {name: 'Ishwar', age:21, rollNo:130},
  {name: 'Adwait', age:20, rollNo:120}

]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  listData: any;
  title = 'angular2';
  displayedColumns: string[] = ['name', 'age', 'rollNo','remove'];
  dataSource = ELEMENT_DATA;
  onRemove(index:number){
    alert("Do you want to delete this record?");
    this.dataSource.splice(index,1);
  
  }
}
