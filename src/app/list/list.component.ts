import { Component, OnInit } from '@angular/core';
import { Node } from '@swimlane/ngx-graph';
import { Subject } from 'rxjs';
import { DataService, NodeSet } from '../services/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  sets: NodeSet[] = [];
  links: any[] = [];
  nodes: Node[] = [];
  showGraph: boolean = false;
  linked: any[] = [];
  update$: Subject<any> = new Subject();
  constructor(private readonly _dataService: DataService) {}

  ngOnInit(): void {
    this.sets = this._dataService.nodeSet;
  }

  onSelect(event: any) {
    this.linked.push(event);
    if (this.linked.length === 2) {
      const position = this.linked.length - 1;
      this.links.push({
        id: 'link' + this.links.length,
        source: this.linked[position - 1].id,
        target: this.linked[position].id,
      });
      this.linked = [];
      this.update$.next(true);
    }
  }

  buildGradph() {
    this.linked = [];
    this.links = [];
    this.nodes = [];
    this.sets.forEach((set: NodeSet) => {
      this.nodes.push({
        label: set.name,
        id: 'set' + this.sets.indexOf(set).toString(),
        data: {
          manufacturingTechnologies: set.manufacturingTechnologies,
          setName: set.name,
        },
      });
    });
    this.showGraph = !this.showGraph;
  }
}
