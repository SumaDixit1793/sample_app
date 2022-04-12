import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UsersService } from '../users.service'
import { Education } from './education'
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

    
    start_year_1:Date;
    end_year_1:Date;
    graduated_1:boolean;
    degree_1:string;
    major_1:string;
    start_year_2:Date;
    end_year_2:Date;
    graduated_2:boolean;
    degree_2:string;
    major_2:string;
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

    index:number;    
    constructor(private user:UsersService) {
      this.start_year_1=new Date("2022-03-25");
      this.end_year_1=new Date("2026-12-31");
      this.graduated_1=true;
      this.degree_1='B.E';
      this.major_1='Computer Science';
      this.start_year_2=new Date("2022-03-25");
      this.end_year_2=new Date("2026-12-31");
      this.graduated_2=true;
      this.degree_2='B.E';
      this.major_2='Computer Science';
      this.hidden_education_div=true;
      this.showFirst=true;
      this.index = 1;
      console.log(this);
     }

     set_start_year_component_1(start_year:any)
     {
        this.start_year_1 = start_year;
     }

     set_end_year_component_1(end_year:any)
     {
        this.end_year_1 = end_year;
     }

     set_graduated_component_1(graduated:any)
     {
        this.graduated_1 = !(this.graduated_1);
     }

     set_degree_component_1(event:Event)
     {
        this.degree_1 = (event.target as HTMLSelectElement).value;;
     }

     set_major_component_1(event:Event)
     {
        this.major_1 = (event.target as HTMLSelectElement).value;;
     }

     //For second education component
     set_start_year_component_2(start_year:any)
     {
        this.start_year_2 = start_year;
     }

     set_end_year_component_2(end_year:any)
     {
        this.end_year_2 = end_year;
     }

     set_graduated_component_2(graduated:any)
     {
        this.graduated_2 = !(this.graduated_2);
     }

     set_degree_component_2(event:Event)
     {
        this.degree_2 = (event.target as HTMLSelectElement).value;;
     }

     set_major_component_2(event:Event)
     {
        this.major_2 = (event.target as HTMLSelectElement).value;;
     }

     add_education()
     {
        this.index == 1 ? this.index += 1 : this.index -= 1;
        this.showFirst = !(this.showFirst);
        this.hidden_education_div = !(this.hidden_education_div); 
        if(this.index == 1)
        {
          //We removed a hidden_education_div, hence 2nd education object needs cleared
          this.start_year_2=new Date("2022-03-25");
          this.end_year_2=new Date("2026-12-31");
          this.graduated_2=true;
          this.degree_2='B.E';
          this.major_2='Computer Science';
        }
     }
    ngOnInit(): void 
    {

    }
    check_admission()
    {
      //Send the params to the API in the form of an array of Objects,
      //If index value == 2 then 2 values in the education array, else 1
      //Update the education object everytime based on the index

      const obj_1 = {
        "start_year" : this.start_year_1,
        "end_year" : this.end_year_1,
        "graduated" : this.graduated_1,
        "degree" : this.degree_1,
        "major" : this.major_1,
      }

      const obj_2 = {
        "start_year" : this.start_year_2,
        "end_year" : this.end_year_2,
        "graduated" : this.graduated_2,
        "degree" : this.degree_2,
        "major" : this.major_2,
      }
      let obj_1_str = JSON.stringify(obj_1);
      let obj_2_str = JSON.stringify(obj_2);
      this.user.setParamsEducation([obj_1,obj_2]);
      this.user.getData().subscribe(data=>{
        console.warn(data);
        var x =JSON.parse(JSON.stringify(data));
        alert(" Message from API "+x.admin_message);
      })
    }
}
