import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Node } from '@swimlane/ngx-graph';
import { tap } from 'rxjs';
import { DataService, NodeSet } from '../services/data.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss'],
})
export class AddItemComponent implements OnInit {
  public manufacturingTechnology!: any;
  private parent!: NodeSet;
  public items: Node[] = [];
  public selected: Node[] = [];

  constructor(
    private readonly _route: ActivatedRoute,
    private readonly _router: Router,
    private readonly _dataService: DataService
  ) {}

  ngOnInit(): void {
    this._route.queryParamMap
      .pipe(
        tap((params) => {
          this.manufacturingTechnology = this._dataService.getById(
            params.get('nodeId') as string
          );
          this.parent = this._dataService.getByName(
            params.get('parentName') as string
          );
        }),
        tap(() => this._check()),
        tap(() => (this.items = this._dataService.items))
      )
      .subscribe();
  }

  public onChange(item: Node) {
    if (this.isChecked(item)) {
      this.selected = this.selected.filter(
        (value: Node) => value.id !== item.id
      );
    } else this.selected.push(item);
  }

  private _check() {
    const items = this.manufacturingTechnology.items.filter(
      (item: any) => item.parent && item.parent.name === this.parent.name
    );
    if (items.length > 0) {
      this.selected = items[0].nodes;
    }
  }

  public isChecked(item: Node) {
    return this.selected.includes(item);
  }

  public onSave() {
    this._dataService.update({
      mtId: this.manufacturingTechnology.id,
      parent: this.parent,
      nodes: this.selected,
    });
    this._router.navigate(['']);
  }
}
