import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { take } from 'rxjs';
import { Logger } from 'src/app/core/helpers/logger';
import { POE } from 'src/app/core/models/poe';
import { CrudSnackbarService } from 'src/app/core/services/crud-snackbar.service';
import { InternService } from 'src/app/core/services/intern.service';
import { POEService } from 'src/app/core/services/poe.service';
import { DateValidator } from 'src/app/core/validators/date-validator';
import { Intern } from './../../../core/models/intern';
@Component({
  selector: 'app-intern-add',
  templateUrl: './intern-add.component.html',
  styleUrls: ['./intern-add.component.scss']
})
export class InternAddComponent implements OnInit {

  public internForm!: FormGroup;
  public poes : POE[] = [];

  constructor(
    private poeService : POEService,
    private formBuilder: FormBuilder,
    private internService: InternService,
    private router: Router,
    private crudSnackBar: CrudSnackbarService
  ) { }

  ngOnInit(): void {

    //Debut de la recuperation de mon tableau de POES
    this.poeService.findAll()
    .pipe(
      take(1)
    )
    .subscribe((poes : POE[]) => {
      this.poes = poes;
    })
    //Fin recuperation de mon tableau de POES

    //Debut de la construction de mon formulaire pour ajouter un interne
    this.internForm = this.formBuilder.group({
      name: [
        '', // Default value for the field control
        [
          Validators.required,
          Validators.minLength(2)
        ]
      ],
      firstName: [
        '',
        [
          Validators.required,
          Validators.minLength(2)
        ]
      ],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}'))
        ]
      ],
      phoneNumber: [
        '',
        [

          Validators.minLength(2)
        ]
      ],
      birthDate: [
        '',
        [
          Validators.required,
          DateValidator.dateNotLessThan

        ]
      ],
      poes: [
        '',
        [
          Validators.required
        ]
      ]
    });

  }

  public onSubmit(): void {
    console.log(`Bout to send : ${JSON.stringify(this.internForm.value)}`);
    // const nextId: number = this.internService.getNextId();

    // Next we'll have to create a new Intern Instance
    const intern: Intern = new Intern();
    // intern.id = nextId;
    // intern.name = this.internForm.value.name;

    // We'll have to pass brand new intern to the add method of our service
    this.internService.add(this.internForm.value).subscribe(() => {
      // Load a snack
    this.crudSnackBar.config(`Intern was successfully added`, `Got It`);
    this.crudSnackBar.open();

    // Finally go to the intern table component
    this.router.navigate(['/', 'interns']);
    });

  }

}
