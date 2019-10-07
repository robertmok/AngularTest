import { Component, OnInit } from '@angular/core';
import { TestServiceService } from '../test-service.service';

@Component({
  selector: 'app-test4',
  templateUrl: './test4.component.html',
  styleUrls: ['./test4.component.css']
})
export class Test4Component implements OnInit {

  character: string;
  characterData: any;
  homeWorld: string;
  residents: any;
  multipleCharacters: any;

  constructor(private _TestService: TestServiceService) { }

  ngOnInit() {
  }

  getHomeWorld() {
    this._TestService.getHomeWorld()
      .subscribe(result => {
        console.log(result);
        this.characterData = result;
        this.character = result.name;
        this.homeWorld = result.homeworldinfo.name;
      },
      error => {
        console.error(error);
        alert('ERROR');
      });
  }

  getMultipleCharacters() {
    this._TestService.getMultipleCharacters()
      .subscribe(result => {
        console.log(result);
        this.multipleCharacters = JSON.stringify(result, null, '\t');
      },
      error => {
        console.error(error);
        alert('ERROR');
      });
  }

  getResidents() {
    this._TestService.getResidents(this.characterData.homeworld)
      .subscribe(result => {
        console.log(result);
        this.residents = result;
      },
      error => {
        console.error(error);
        alert('ERROR');
      });
  }

}
