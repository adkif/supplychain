import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Node } from '@swimlane/ngx-graph';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {
  public manufacturingTechnologies: any[] = [];
  public formGroup: FormGroup;
  private _nodeSet: Node[] = [];

  constructor(
    private readonly _dataService: DataService,
    private readonly _route: Router
  ) {
    this.formGroup = new FormGroup({
      name: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {
    this.manufacturingTechnologies =
      this._dataService.manufacturingTechnologies;
  }

  addToSet(manufacturingTechnology: any) {
    this._nodeSet.push(manufacturingTechnology);
  }

  isValide() {
    return this.formGroup.valid && this._nodeSet.length > 0;
  }

  isSelected(manufacturingTechnology: any) {
    return this._nodeSet.includes(manufacturingTechnology);
  }

  onSubmit() {
    if (!this.isValide()) return;
    this._dataService.addNodeSet = {
      ...this.formGroup.getRawValue(),
      manufacturingTechnologies: this._nodeSet,
    };
    this._route.navigate(['']);
  }
}
