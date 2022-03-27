import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
    /*
    Component to add the education section in the resume
    Minimum 1 education , maximum 2 education
    Fill the 
    1. start year(date)
    2. end year(date)
    3. graduated (checkbox : yes/no)
    4. degree (dropdown)
    5. major (dropdown)
    */
    start_year:Date;
    end_year:Date;
    graduated:boolean;
    degree:string;
    major:string;
    hidden_education_div:boolean;
    showFirst:boolean;
    available_degrees = [
      {
      "name":"B.E",
      },
      {
      "name":"M.S",
      },
      {
      "name":"B.Tech",
      },
      {
      "name":"M.Tech",
      },
    ];

    available_majors = [
      {
      "name":"Computer Science",
      },
      {
      "name":"Electronics",
      },
      {
      "name":"Information Science",
      },
    ];


    constructor() {
      this.start_year=new Date();
      this.end_year=new Date();
      this.graduated=true;
      this.degree='B.E';
      this.major='Computer Science';
      this.hidden_education_div=true;
      this.showFirst=true;
      console.log(this);
     }

     set_graduated(){
      this.graduated = !(this.graduated);
     }
     add_education()
     {
      this.showFirst = !(this.showFirst);
      this.hidden_education_div = !(this.hidden_education_div); 
     }
    ngOnInit(): void {
    }
    
}
