import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from './../../services/user.service';
@Component({
  selector: 'app-user-signin',
  templateUrl: './user-signin.component.html',
  styleUrls: ['./user-signin.component.scss']
})
export class UserSigninComponent implements OnInit {

  public signinForm! : FormGroup;

  /**
   *
   * @param formBuilder
   * l'injection de dependances c'est fait a l'interieur du constructor
   */
  constructor(
    private userService : UserService,
    private formBuilder: FormBuilder) {}

  ngOnInit(): void {

    this.signinForm = this.formBuilder.group({
      login: [
        '',
        Validators.required
      ],
      pass: [
        '',
        Validators.required
      ]
    });
  }

  public onSubmit(): void{
     this.userService.signin(this.signinForm.value);
  }

}
