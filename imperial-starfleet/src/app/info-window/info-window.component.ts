import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-info-window',
  templateUrl: './info-window.component.html',
  styleUrls: ['./info-window.component.css']
})
export class InfoWindowComponent implements OnInit {

	dataBanks = {};

  constructor(private http: Http) { }

  findTurret(turret) {
  	console.log(`finding ${turret}`);
  	this.http.get('localhost:3000/api/turret/'+turret)
  		.toPromise()
  		.then( (res)=>  console.log(res.json().results) );
  }

  ngOnInit() {
  	this.findTurret(4)
  }

}
