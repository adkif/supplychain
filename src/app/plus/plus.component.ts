import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-plus',
  templateUrl: './plus.component.html',
  styleUrls: ['./plus.component.scss'],
})
export class PlusComponent implements OnInit {
  @Input() message: string = '';
  constructor() {}

  ngOnInit(): void {}
}
