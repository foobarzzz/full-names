import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  //templateUrl: './dashboard.component.html',
  //styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  searches: any[];
  firstNamesRef: any;
  firstName: string;
  firstNameResult: Object = null;
  lastName: string;
  lastNameResult: Object = null;
  nameSearch: string;
  nameSearchResult: Object = null;
  
  constructor(private dashboardService: DashboardService) {
    this.searches = [];
  }

  searchHistory() {
    this.dashboardService
		.getSearchHistory()
		.subscribe((history: any) => {
			this.searches = history;
			});
  }

  ngOnInit() {
	 this.firstNamesRef = this.dashboardService.getFirstNames();
     this.firstNamesRef
		 .subscribe((firstNames: any[]) => {
				console.log(firstNames);
			});
  }
  
  onFirstNameSearch() {
     console.log(this.firstName);
     this.firstNameResult = {display: `Searching for ${this.firstName}`};
	 this.nameSearchResult = {display: `Searching for ${this.firstName}`};
     this.dashboardService.getFirstName(this.firstName)
      .subscribe((item) => {
        if (item) {
          this.firstNameResult = {display: `${this.firstName} already exists`};
        } else {
          this.firstNameResult = {display: `${this.firstName} not found in sytem`};
        }
        console.log(item);
      });
  }
  
  
   onLastNameSearch() {
     console.log(this.lastName);
     this.lastNameResult = {display: `Searching for ${this.lastName}`};
	 this.nameSearchResult = {display: `Searching for ${this.lastName}`};
     this.dashboardService.getLastName(this.lastName)
      .subscribe((item) => {
        if (item) {
          this.lastNameResult = {display: `${this.lastName} already exists`};
        } else {
          this.lastNameResult = {display: `${this.lastName} not found in sytem`};
        }
        console.log(item);
      });
  }

}
