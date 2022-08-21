import { Injectable } from '@angular/core';
import { Node } from '@swimlane/ngx-graph';

export interface NodeSet {
  name: string;
  manufacturingTechnologies: any[];
}

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private _manufacturingTechnologies: any[] = [
    { id: '1', label: 'MT 1', items: [{ nodes: [], parent: null }] },
    { id: '2', label: 'MT 2', items: [{ nodes: [], parent: null }] },
    { id: '3', label: 'MT 3', items: [{ nodes: [], parent: null }] },
  ];

  private _items: Node[] = [
    { id: '1', label: 'Item 1' },
    { id: '2', label: 'Item 2' },
    { id: '3', label: 'Item 3' },
  ];

  private _nodeSet: NodeSet[] = [];

  constructor() {}

  public get manufacturingTechnologies(): any[] {
    return this._manufacturingTechnologies;
  }

  public get items(): Node[] {
    return this._items;
  }

  public get nodeSet(): NodeSet[] {
    return this._nodeSet;
  }
  public set addNodeSet(value: NodeSet) {
    this._nodeSet.push(value);
  }

  public getById(id: string): any {
    return this._manufacturingTechnologies.filter(
      (manufacturingTechnology) => manufacturingTechnology.id === id
    )[0];
  }

  public getByName(name: string): any {
    return this._nodeSet.filter((arr) => arr.name === name)[0];
  }

  public update(value: any) {
    const manufacturingTechnology = this.getById(value.mtId);
    manufacturingTechnology.items.push({
      parent: value.parent,
      nodes: value.nodes,
    });
  }
}
