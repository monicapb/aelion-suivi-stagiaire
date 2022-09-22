import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { POE } from 'src/app/core/models/poe';
import { POEService } from 'src/app/core/services/poe.service';

@Component({
  selector: 'app-poe-add',
  templateUrl: './poe-add.component.html',
  styleUrls: ['./poe-add.component.scss']
})
export class POEAddComponent implements OnInit {

  public poeForm! : FormGroup;

  constructor(
    public poeService : POEService,
    private router : Router,
    private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.poeForm = this.formBuilder.group({
      title: [
        '', // Default value for the field control
        [
          Validators.required,
          Validators.minLength(2)
        ]
      ]
    });
  }
  public onSubmit(): void {
    console.log(`Bout to send : ${JSON.stringify(this.poeForm.value)}`);


    // Next we'll have to create a new Intern Instance
    const poe: POE = new POE();

     poe.name = this.poeForm.value.title;

    // We'll have to pass brand new intern to the add method of our service
    this.poeService.add(poe).subscribe(() => {
       // Finally go to the intern table component
    this.router.navigate(['/', 'poecollections']);
    });


  }


}
