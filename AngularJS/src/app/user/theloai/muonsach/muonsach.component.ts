import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-muonsach',
  templateUrl: './muonsach.component.html',
  styleUrls: ['./muonsach.component.css']
})
export class MuonsachComponent implements OnInit {
  borrowForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.borrowForm = this.fb.group({
      fullName: ['', Validators.required],
      cccd: ['', [
        Validators.required,
        Validators.pattern('^[0-9]{1,12}$') // Chỉ cho phép số và tối đa 12 ký tự
      ]],
      phone: ['', [
        Validators.required,
        Validators.pattern('^[0-9]+$') // Chỉ cho phép số
      ]],
      email: ['', [Validators.required, Validators.email]],
      bookTitle: ['', Validators.required],
      quantity: ['', [
        Validators.required,
        Validators.min(1),
        Validators.pattern('^[0-9]+$') // Chỉ cho phép số
      ]],
      borrowDate: ['', Validators.required],
      returnDate: ['', Validators.required],
      notes: [''],
      agreement: [false, Validators.requiredTrue]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.borrowForm.valid) {
      console.log(this.borrowForm.value);
    } else {
      console.log('Form is invalid');
    }
  }
}
