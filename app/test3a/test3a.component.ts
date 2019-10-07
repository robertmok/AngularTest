import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-test3a',
  templateUrl: './test3a.component.html',
  styleUrls: ['./test3a.component.css']
})
export class Test3aComponent implements OnInit {

  id: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = <string>params['id'];
      if (id != null) {
        // Load the right article
        this.id = id;
      } else {
        this.id = 'N/A';
      }
    });
  }

}
