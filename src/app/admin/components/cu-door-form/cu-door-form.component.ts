import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cu-door-form',
  templateUrl: './cu-door-form.component.html',
  styleUrls: ['./cu-door-form.component.scss'],
})
export class CuDoorFormComponent implements OnInit {
  cuDoorForm!: FormGroup;
  @Output() cuForm = new EventEmitter();

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.cuDoorForm = this.fb.group({
      category: ['', [Validators.required]],
      title: ['', [Validators.required]],
      manufacturer: ['', [Validators.required]],
      description: ['', [Validators.required]],
      price: [
        '',
        [Validators.required, Validators.pattern(/\d/), Validators.min(1)],
      ],
      imgUrl: [
        '',
        [
          Validators.required,
          Validators.pattern(
            /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/
          ),
        ],
      ],
    });
  }
}
