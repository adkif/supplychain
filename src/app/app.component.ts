import { Component, OnInit } from '@angular/core';
import { Node } from '@swimlane/ngx-graph';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'supplychain';
  nodes: Node[] = [];
  constructor(private readonly dataService: DataService){

  }
  ngOnInit(): void {
    this.nodes = this.dataService.manufacturingTechnologies;
  }

}
