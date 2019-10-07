import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-test2b',
  templateUrl: './test2b.component.html',
  styleUrls: ['./test2b.component.css']
})
export class Test2bComponent implements OnInit {

  id: string;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
        const id = <string>params['id'];
        if (id != null) {
          // Load the right article
          this.id = id;
        } else {
          this.id = 'N/A';
        }
      }
    );
  }

  canDeactivate() {
    console.log('navigating away');
    if (window.confirm('Leave page?')) {
        console.log('leaving page');
        return true;
    }
    console.log('staying on page');
    return false;
  }

  goToPage(pageNum) {
    this.router.navigate(['/test2'], { queryParams: { page: pageNum } });
  }
}
