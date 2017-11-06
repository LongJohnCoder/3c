import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { Store } from '@ngrx/store'

import * as fromApp from '../../store/core.reducers';
import * as AuthActions from '../../store/auth/auth.actions';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router'

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  /** Variable declarations */
  form: FormGroup;
  id : string;

  /** Service injection */
  constructor (private formBuilder: FormBuilder,
               private activatedRoute: ActivatedRoute,
               private store: Store<fromApp.AppState>) { }

  /** Function to be executed when component initializes */
  ngOnInit () {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.form = this.formBuilder.group({
      'password': new FormControl(null, [Validators.required, Validators.minLength(6)]),
      'conf_pass': new FormControl(null, Validators.required)
    }, {validator: this.confirmPassword})
  }

  /** Custom confirm password validator */
  confirmPassword = (control: AbstractControl): { [key: string]: boolean } => {

    const pass = control.get('password')
    const cnfPass = control.get('conf_pass')

    if (!pass || !cnfPass) {
      return null
    }

    if (pass.value === cnfPass.value) {
      return null
    } else {
      control.get('conf_pass').setErrors({confirmPassword: true})
      return {confirmPassword: true}
    }
  }

  /** Function call on submit */
  onResetPassword () {
    const obj = {
      ...this.form.value,
      id: this.id
    };
    this.store.dispatch(new AuthActions.ResetPasswordAttempt(obj));
  }

}
