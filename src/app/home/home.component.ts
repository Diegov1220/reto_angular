import { Component,OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgFor} from '@angular/common';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Apollo } from 'apollo-angular';
import { POST } from '../graphql.operations';
import { CONT } from '../graphql.operations';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})
export class HomeComponent {
  /** Based on the screen size, switch from standard to one column per row */
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
  posts : any[] = []
  error : any[] = []
  images : any[] = []

  conts : any []=[]
  errorConts : any[]=[]
  filterPost = ''

  constructor(private apollo : Apollo,private http: HttpClient) {}

  ngOnInit(): void{
    this.apollo.watchQuery({
      query: POST
    }).valueChanges.subscribe(({data,error}: any)=>{
      this.posts=data.countries;
      this.error=error;


    });
    this.apollo.watchQuery({
      query: CONT
    }).valueChanges.subscribe(({data,error}: any)=>{
      this.conts=data.continents;
      this.errorConts=error;
    });

  }

}


