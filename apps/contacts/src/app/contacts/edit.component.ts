import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { map, switchMap, tap } from 'rxjs';

import { ContactsService } from './contacts.service';

@Component({
  selector: 'contacts-edit',
  template: `
    <h2>Edit Contact</h2>

    <form *ngIf="contact$ | async; else notfound" [formGroup]="form">
      <label for="first-name">First name</label>
      <input
        type="text"
        name="first-name"
        formControlName="firstName"
        placeholder="First name"
        aria-label="First name"
        required
      />
      <label for="last-name">Last name</label>
      <input
        type="text"
        name="last-name"
        formControlName="lastName"
        placeholder="Last name"
        aria-label="Last name"
        required
      />
      <label for="description">Description</label>
      <textarea
        name="description"
        formControlName="description"
        placeholder="Description"
        aria-label="Description"
        required
      >
      </textarea>
      <button type="submit">Save</button>
    </form>

    <ng-template #notfound>Contact not found</ng-template>
  `,
})
export class EditComponent implements OnInit, OnDestroy {
  public form: FormGroup = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    description: ['', Validators.required],
  });
  public contact$ = this.route.paramMap.pipe(
    map((params: ParamMap) => Number(params.get('id'))),
    switchMap((contactId) => this.contactsService.getContactById(contactId)),
    tap((contact) => this.form.patchValue(contact ?? {})),
  );

  constructor(
    private readonly route: ActivatedRoute,
    private readonly contactsService: ContactsService,
    private readonly formBuilder: FormBuilder,
  ) {
    console.log('edit - constructor');
  }

  public ngOnInit(): void {
    console.log('edit - ngOnInit');
  }

  public ngOnDestroy(): void {
    console.log('edit - ngOnDestroy');
  }
}
