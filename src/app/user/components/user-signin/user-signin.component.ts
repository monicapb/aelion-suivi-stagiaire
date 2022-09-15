
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Logger } from 'src/app/core/helpers/logger';
import { UserService } from './../../services/user.service';
import { CrudSnackbarService } from 'src/app/core/services/crud-snackbar.service';
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
    private snackbar : CrudSnackbarService,
    private userService : UserService,
    private router: Router,
    private formBuilder: FormBuilder) {}

  ngOnInit(): void {

    this.signinForm = this.formBuilder.group({
      email: [
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
     if(this.userService.isAuthenticated()) {
      // this.router.navigate(['/', 'interns']);
      this.router.navigateByUrl('/interns');

     }else{
      this.signinForm.reset();
      this.snackbar.config('Votre email et password ne sont pas corrects!');
      this.snackbar.open()

     }

  }

}
