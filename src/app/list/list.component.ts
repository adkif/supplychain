import { Component, OnInit } from '@angular/core';
import { DataService, NodeSet } from '../services/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  sets: NodeSet[] = [];
  constructor(private readonly _dataService: DataService) {}

  ngOnInit(): void {
    this.sets = this._dataService.nodeSet;
  }
}
