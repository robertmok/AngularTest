import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-test3b',
  templateUrl: './test3b.component.html',
  styleUrls: ['./test3b.component.css']
})
export class Test3bComponent implements OnInit {

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
