import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;

  constructor(private fb: FormBuilder, private auth: AuthService) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      email: [
        '',
        [
          Validators.pattern(
            /^(([^<>+()\[\]\\.,;:\s@"-#$%&=]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/
          ),
        ],
      ],
      credentials: this.fb.group({
        password: ['', [Validators.required, Validators.minLength(5)]],
        repeatPassword: ['', [Validators.required, Validators.minLength(5)]],
      }),
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      phone: ['', [Validators.required, Validators.pattern(/\d{10}/)]],
    });
  }

  registerHandler(): void {
    // const {
    //   firstName,
    //   lastName,
    //   email,
    //   phone,
    //   credentials: { password },
    // } = this.registerForm.value;

    console.log(`>>> registerHandler called`);
  }
}
