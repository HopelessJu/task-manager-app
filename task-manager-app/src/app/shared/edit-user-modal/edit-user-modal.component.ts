import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-user-modal',
  templateUrl: './edit-user-modal.component.html',
  styleUrls: ['./edit-user-modal.component.scss']
})
export class EditUserModalComponent {
  @Output() cancelled = new EventEmitter();
  @Output() confirmed = new EventEmitter<{login: string, password: string}>();
  login: string = '';
  password:string = '';
  loginForm: FormGroup;
  hide: boolean = true;

  constructor(private formBuilder: FormBuilder) {
    this.loginForm = formBuilder.group({
      login: [null, Validators.required],
      password:[null, Validators.required],
    })
  }

  get controls() {
    return this.loginForm.controls
  }

  onCancel() {
    this.cancelled.emit();
  }

  onConfirm() {
    this.confirmed.emit({login: this.login, password: this.password});
  }

}
