import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
userid;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.userid = this.route.snapshot.paramMap.get('id');
  }

}
