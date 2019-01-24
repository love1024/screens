import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  search: string;
  url = 'https://health-directory-dev.azurewebsites.net/api/pharmacy/search?searchAttribute=ServiceName&searchTerm=';
  result = [];
  
  constructor(private http: HttpClient) { }

  ngOnInit() {
  
  }

  searchValue() {
    let headers = new HttpHeaders().set('content-type', 'application/json');
    this.http.get(`${this.url}${this.search}`, { headers: headers }).subscribe((res:any) => {
      if (res[0]) {
        this.result = res;
      } else {
        this.result = [res];
      }
    })
  }

}
