import {Component} from '@angular/core';
import {ApiService} from "./core/services/api.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public firstResponse = {first: 0, second: 0};
  public secondResponse = {first: 0, second: 0};
  public thirdResponse = {first: 0, second: 0};

  constructor(private readonly apiService: ApiService) {
    this.apiService.get<{ first: number, second: number }>('first')
      .subscribe(res => this.firstResponse = res);

    this.apiService.get<{ first: number, second: number }>('second')
      .subscribe(res => this.secondResponse = res);

    this.apiService.get<{ first: number, second: number }>('third')
      .subscribe(res => this.thirdResponse = res);
  }
}
